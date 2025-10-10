import imagenlocal from "../assets/gorila.png"
// import { BtnVolver } from "../components/ui/buttons/BtnVolver"

export const ImagenesPage = ()=>{
    return (
        <main className="max-w-3xl mx-auto p-6 gap-10">
            
            <h1 className="text-3xl font-bold text-center">Imagenes con React</h1>
           <section className="space-y-2">
                <h2 className="text-xl font-semibold text-center">Imagenes locales importadas</h2>
                <img src={imagenlocal} alt="Imagen Gorila" className="rounded-full h-20 w-20 hover:scale-120 transition-all duration-500 ease-in-out mx-auto" />
                <h2 className="text-xl font-semibold text-center">Imagenes externas importadas</h2>
                <img src="https://media.wired.com/photos/68b9b74debac84a11c241098/3:2/w_960,c_limit/Silksong_Promo_03.jpg" alt="Imagen Gorila" className="rounded-full h-20 w-20 hover:scale-120 transition-all duration-500 ease-in-out mx-auto" />
           </section>
           <section className="space-y-2">
                <h2 className="text-xl font-semibold text-center">Imagen como fondo</h2>
                <div className="flex h-64 bg-cover bg-center rounded-2xl items-center justify-center" style={{backgroundImage:"url('https://media.wired.com/photos/68b9b74debac84a11c241098/3:2/w_960,c_limit/Silksong_Promo_03.jpg')"}}>
                <span className="bg-black/60 px-4 py-2 rounded-2xl text-white">Fondo con texto encima</span>
                </div>
           </section>
           <section className="space-y-2">
                
                <h2 className="text-xl font-semibold text-center">Imagenes lazy Loading</h2>
                <img src="https://media.wired.com/photos/68b9b74debac84a11c241098/3:2/w_960,c_limit/Silksong_Promo_03.jpg" alt="Imagen Gorila" className="rounded-full h-20 w-20 hover:scale-120 transition-all duration-500 ease-in-out mx-auto" loading="lazy" />
           </section>
        </main>
    )
}