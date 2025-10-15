import { useForm } from "react-hook-form"
import { usemenuStore } from "../store/menuStore"

export const FormulariosPages = ()=>{
    const {itemselect} = usemenuStore()
    const {register,handleSubmit,formState:{errors},watch,reset} = useForm()
    const enviar = (data)=>{
        // console.log(data)
        alert(data.email)
    }
    return (
        <main className="h-screen text-black m-4 rounded-2xl p-4 flex flex-col">
            <h1>Formularios Pages {watch("nombre")}</h1>
            {itemselect?.title}
            {itemselect?.to}
            <form onSubmit={handleSubmit(enviar)} className="border p-2 flex flex-col gap-4">
                <section className="bg-amber-100">
                    <h2>Validar Texto</h2>
                    <input {...register("nombre",{required:"El nombre es obligatorio",
                minLength:{
                    value:3,
                    message:"Debe contener al menos 3 caracteres"
                    }})} 
                className="p-2 border" placeholder="Nombre"/>
                <p>{errors.nombre?.message}</p>
                </section>
                
                <section className="bg-amber-100">
                    <h2>Validar Correo</h2>
                    <input {...register("email",{
                        required:"El correo es obligatorio",
                        pattern:{
                            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message:"Correo inválido",
                    }})} 
                className="p-2 border" placeholder="email"/>
                <p>{errors.email?.message}</p>
                </section>
                
                <section className="bg-amber-100">
                    <h2>Validar Números</h2>
                    <input type="number"{...register("numero",{
                     required:"El número es obligatorio",
                     valueAsNumber:true,
                     min:{
                        value:18,
                        message:"Debe ser mayor de edad"
                     },
                     max:{
                        value:99,
                        message:"Edad máxima permitida: 99"
                     }
                    })}
                className="p-2 border" placeholder="Ej: 25"/>
                <p>{errors.numero?.message}</p>
                </section>
                <button type="Submit" className="px-4 py-2 bg-red-300 text-white rounded-2xl ml-1 hover:bg-red-400">Enviar</button>
            </form>
            <button onClick={()=>reset()} className="mt-2 px-4 py-2 bg-red-300 text-white rounded-2xl ml-1 hover:bg-red-400">Resetear</button>
        </main>
        
    )
}