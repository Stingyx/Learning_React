import { Icon } from "@iconify/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { usemenuStore } from "../store/menuStore"

export const CardList = () =>{
    const {setItemselect} = usemenuStore()
    const temasTeoria = [
        {title:"useEffect",
            to:"/useEffect"

        },
        {title:"Imagenes",
            to:"/imagenes"

        },
        {title:"Rutas anidadas",
            to:"/rutasanidadas"

        },
        {title:"apis",
            to:"/apis"

        },
        {title:"formularios",
            to:"/formularios"

        },
        {title:"Zustand",
            to:"/Zustand"

        },
        {title:"CRUDSupabase",
            to:"/Crudsupabase"

        },
    ]
    return (
        <div className="flex flex-col gap-4">
            {
                temasTeoria.map((item,index)=>(
                    <Link
                    onClick={()=>(setItemselect(item))} 
                    to={item.to} 
                    key={index} 
                    className="group w-full bg-[#151515] p-5 rounded-2xl border-3 border-[#333] flex justify-between hover:border-[#e776f3] cursor-pointer
                    ">
                        <h3>{item.title}</h3>
                        <Icon className="group-hover:text-[#e776f3]" icon="weui:arrow-filled" width="12" height="24" />
                    </Link>
                ))
            }
        </div>
    )
}