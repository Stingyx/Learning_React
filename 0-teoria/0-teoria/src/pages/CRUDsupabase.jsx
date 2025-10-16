import {useQuery} from "@tanstack/react-query"
import { useTareasStore } from "../store/TareasStore"

export const CRUDsupabase = ()=>{
    const {mostrarTareas} = useTareasStore()
    const {data, isLoading,error} = useQuery({
        queryKey:["mostrar tareas"],
        queryFn: mostrarTareas
    })
    if(isLoading){
        <span>Cargando...</span>
    }
    if(error){
        <span>error...{error.message}</span>
    }


    return (
        <main className="min-h-screen text-black p-4 flex items-center justify-center rounded-2xl">
            <div className="bg-amber-300 p-6 rounded-xl text-black mb-4">
                <h1 className="text-2xl font-bold text-center text-black mb-4"> Tareas Supabase - React</h1>
                <form action="" className="flex gap-2 mb-4">
                    <input type="text" className="flex-1 border p-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-600 bg-white " />
                    <button className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-200 cursor-pointer">Agregar</button>
                </form>
                <ul className="flex flex-col">
            {
            data?.map((item,index)=>{
                return <li className="flex justify-between items-center p-3 bg-amber-100 rounded shadow-sm" key={index}>
                    <span className={`cursor-pointer flex-1 ${item.state ? "line-through text-gray-400":""}`}>{item.nombre}
                        </span></li>
            })
           }
           </ul>
            </div>
           
           
        </main>
    )
}