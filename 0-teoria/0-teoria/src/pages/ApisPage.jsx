import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export const ApisPage = ()=>{
    const [pokemons,SetPokemons]=useState([])
    const {data,isLoading,error} = useQuery({
        queryKey:["Consulta a PokeApi"],
        queryFn:async ()=> {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20").then((res)=>res.json())
            return res.results
        }
    });
    if (isLoading) return <span>Cargando...</span>
    if (error) return <span>error...{error.message}</span>

    // useEffect(()=>{
    //     fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res)=>res.json())
    //     .then((data)=>{
    //          SetPokemons(data);
    //          console.log("data",data)
    //     })   
    // },[])

    return (
        <div className="m-4 rounded-2xl p-2 h-screen w-screen bg-amber-300 text-black">
           <span className="text-2xl font-bold">Apis Page</span>

           <section className="flex flex-col">
            {data?.map((item,index)=>{
                return <span key={index}>{item.name}</span>
            })}
           </section>
           {/* {pokemons?.abilities?.length >0 && 
           <span> 
                Abilitie: {pokemons.abilities[0].ability.name}
           </span>}
           {pokemons?.stats?.length>0 && (
                <span><br />Stats: {pokemons.stats[3].base_stat}</span>
            )}
            {<span><br />Weight: {pokemons.weight}</span>} */}
        </div>
    )
}