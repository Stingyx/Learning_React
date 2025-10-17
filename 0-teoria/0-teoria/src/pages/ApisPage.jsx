import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const ApisPage = () => {
  const [pokemons, SetPokemons] = useState([]);
  const {
    data: data1,
    isLoading: isLoading1,
    error: error1,
    refetch: refetch1,
  } = useQuery({
    queryKey: ["Consulta a PokeApi Padre"],
    queryFn: async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      ).then((res) => res.json());
      return res.results;
    },
  });

  const {
    data: data2,
    isLoading: isLoading2,
    error: error2,
    refetch,
  } = useQuery({
    queryKey: ["Consulta a PokeApi Hijo"],
    queryFn: async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      ).then((res) => res.json());
      return res.results;
    },
    enabled: !!data1,
  });

  const isLoading = isLoading1 || isLoading2;
  const error = error1 || error2;

  // if (isLoading) return <span>Cargando...</span>
  // if (error) return <span>error...{error.message}</span>

  // useEffect(()=>{
  //     fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res)=>res.json())
  //     .then((data)=>{
  //          SetPokemons(data);
  //          console.log("data",data)
  //     })
  // },[])

  return (
    <div className="m-4 rounded-2xl p-2 h-screen bg-amber-300 text-black">
      <span className="text-2xl font-bold">Apis Page</span>
      <button className="bg-black text-white m-4" onClick={() => refetch}>
        Click to refetch
      </button>
      <section className="flex flex-col">
        {isLoading ? (
          // 1. Si está cargando, muestra esto
          <span>Cargando...</span>
        ) : error ? (
          // 2. Si hay un error, muestra esto
          <span>Error: {error.message}</span>
        ) : (
          // 3. Si todo está bien, mapea y muestra los datos
          data1?.map((item, index) => <span key={index}>{item.name}</span>)
        )}
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
  );
};
