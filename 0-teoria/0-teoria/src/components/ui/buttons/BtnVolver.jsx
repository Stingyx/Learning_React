import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"

export const BtnVolver = ()=>{
    const navigate = useNavigate() 
    return (
        <button onClick={()=>navigate("/")} className="absolute top-4 left-4 bg-white color-black hover:bg-[#f2f2f2] p-3 rounded-full shadow-lg cursor pointer">
           <Icon icon="bxs:left-arrow" width="24" height="24" />
        </button>
    )
}