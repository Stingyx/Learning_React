import { MyRoutes } from "./routers/router";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MyRoutes/>
    </QueryClientProvider>
  )
}

export default App; 

// const frutas=["manzana","banana","pera"]
// const productos=[{
//   nombre:"Laptop",
//   precio:12000,
//   destacado:true
// },{
//   nombre:"Mouse",
//   precio:1200,
//   destacado:false
// },{
//   nombre:"Teclado",
//   precio:500,
//   destacado:false
// }]
// return(
  //   <div className="bg-black h-screen text-white">
  //     <HolaMundo/>
  //     <Contador/>
  //     {
  //       frutas.map((item,index)=>{
  //         return(<div key={index} className="text-white">
  //           {item}
  //         </div>)
  //       })
  //     }
  //     <span>Productos</span>
  //     <section className="flex flex-col gap-4">
  //       {productos.map((item,index)=>(
  //         <CardProducto key={index} item={item} />))}
  //     </section>
      
  //   </div>
  // )