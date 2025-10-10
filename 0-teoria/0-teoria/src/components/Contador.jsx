import { useState } from "react"
import { Modal } from "./modal"

// export const Contador =()=>{
//     const [state,setState]=useState(0) // Los hooks se llaman con []
//     return(
//         <div>
//             <h1>Contador</h1>
//             <button onClick={()=>setState(state+1)}>{state}</button>
//         </div>
//     )
// }

export const Contador = ()=>{
    const [state,setState] = useState(false)
    return(
        <div className="bg-amber-600 p-4 rounded-2xl">
            <h1 className="contador">Contador</h1>
            <button onClick={()=>setState(!state)}>{state?"Ocultar ":"Ver"}</button>
            {state && <Modal/>} {/*Inyección de JS*/}
        </div>
    )
}

