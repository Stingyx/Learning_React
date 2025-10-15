import { Outlet } from "react-router-dom"
import { CardList } from "../components/Cardlist"

export const LayoutMain = ()=>{
    return (
        <div className=" flex h-screen text-white">
           <header>
            <CardList />
            </header>
            <main className="flex-1 p-2">
                <Outlet/>
            </main>
        </div>
    )
}