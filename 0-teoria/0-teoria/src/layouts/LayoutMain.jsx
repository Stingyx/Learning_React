import { Outlet } from "react-router-dom"
import { CardList } from "../components/Cardlist"

export const LayoutMain = ()=>{
    return (
        <div className=" flex h-screen text-white">
           <header>
            <CardList />
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}