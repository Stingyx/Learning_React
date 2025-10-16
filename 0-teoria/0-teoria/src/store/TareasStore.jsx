import { create } from "zustand"
import {Supabase} from "../supabase/supabase.config"

const tabla = "tareas"
export const useTareasStore = create((set)=>({
    
    mostrarTareas: async()=>{
        const{data,error} = await Supabase.from(tabla).select();
        if(error){
            throw new Error(error.message)
        }
        return data;
    },
    insertarTareas : async(p)=>{
        const{error}=await Supabase.from(tabla).insert(p);
        if(error){
            throw new Error(error.message)
        }
    },
    editarTareas: async(p)=>{
        const{}=await Supabase.from(tabla).update(p).eq("id",p.id)

    },
    eliminarTareas: async(p)=>{
        const {error}=await Supabase.from(tabla).delete().eq("id",p.id)
        if(error){
            throw new Error(error.message);
        }
    }
}));