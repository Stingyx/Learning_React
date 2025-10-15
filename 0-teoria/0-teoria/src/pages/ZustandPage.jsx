import { useContadorStore } from "../store/ContadorStore"

export const ZustandPage = ()=>{
    const {incrementar,contador,resetear} = useContadorStore()
    return (
        <div className="h-screen flex flex-col bg-amber-300 text-black p-4 rounded-2xl gap-2">
           <span>Contador: {contador}</span>
           <button onClick={()=>incrementar(1)} className="bg-black rounded-2xl text-white">Incrementar</button>
           <button onClick={()=>resetear()} className="bg-black rounded-2xl text-white">Resetear</button>
        </div>
    )
}