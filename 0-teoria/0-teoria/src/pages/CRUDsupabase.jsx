import { useMutation, useQuery } from "@tanstack/react-query";
import { useTareasStore } from "../store/TareasStore";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

export const CRUDsupabase = () => {
  const { mostrarTareas, insertarTareas } = useTareasStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data, isLoading, error } = useQuery({
    queryKey: ["mostrar tareas"],
    queryFn: mostrarTareas,
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["insertar tarea"],
    mutationFn: async (data) => {
      const p = {
        nombre: data.nombre,
      };
      await insertarTareas(p);
    },
    onError: (error) => {
      toast.error("Error: " + error.message);
    },
    onSuccess: () => {
      toast.success("Tarea guardada correctamente!");
    },
  });
  if (isLoading) {
    <span>Cargando...</span>;
  }
  if (error) {
    <span>error...{error.message}</span>;
  }

  return (
    <main className="min-h-screen text-black p-4 flex items-center justify-center rounded-2xl">
      <Toaster position="top-center" />
      <div className="bg-amber-300 p-6 rounded-xl text-black mb-4">
        <h1 className="text-2xl font-bold text-center text-black mb-4">
          {" "}
          Tareas Supabase - React
        </h1>
        <form onSubmit={handleSubmit()} action="" className="flex gap-2 mb-4">
          <input
            {...register("nombre", { required: "La tarea es obligatoria" })}
            type="text"
            className="flex-1 border p-2 rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-600 bg-white "
            placeholder="Escribe una Tarea"
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm mb-2">{errors.nombre.message}</p>
          )}
          <button className="bg-amber-400 text-black font-bold px-4 rounded hover:bg-amber-200 cursor-pointer">
            Agregar
          </button>
        </form>
        <ul className="flex flex-col">
          {data?.map((item, index) => {
            return (
              <li
                className="flex justify-between items-center p-3 bg-amber-100 rounded shadow-sm"
                key={index}
              >
                <span
                  className={`cursor-pointer flex-1 ${
                    item.state ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item.nombre}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
