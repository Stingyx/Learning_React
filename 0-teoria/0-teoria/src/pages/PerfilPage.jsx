import { useParams } from "react-router-dom";

export const PerfilPage = () => {
  const { id } = useParams();
  return (
    <div className="h-screen text-black">
      <span>PerfilPage id usuario: {id}</span>
    </div>
  );
};
