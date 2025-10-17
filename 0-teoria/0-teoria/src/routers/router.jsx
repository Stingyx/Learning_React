import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { UseEffectPage } from "../pages/UseEffectPage";
import { ImagenesPage } from "../pages/ImagenesPage";
import { RutasAnidadasPage } from "../pages/RutasAnidadasPage";
import { PerfilPage } from "../pages/PerfilPage";
import { ConfigurationPage } from "../pages/ConfigurationPage";
import { LayoutMain } from "../layouts/LayoutMain";
import { ApisPage } from "../pages/ApisPage";
import { FormulariosPages } from "../pages/FormulariosPages";
import { ZustandPage } from "../pages/ZustandPage";
import { CRUDsupabase } from "../pages/CRUDsupabase";

export const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apis" element={<ApisPage />} />
        <Route path="/useEffect" element={<UseEffectPage />} />
        <Route path="/imagenes" element={<ImagenesPage />} />
        <Route path="/rutasanidadas" element={<RutasAnidadasPage />}>
          <Route index element={<Navigate to="perfil/10" replace />} />{" "}
          {/*Ruta por defecto*/}
          <Route path="Perfil/:id" element={<PerfilPage />} />
          <Route path="Configuration" element={<ConfigurationPage />} />
        </Route>
        <Route path="/formularios" element={<FormulariosPages />} />
        <Route path="Zustand" element={<ZustandPage />} />
        <Route path={"/Crudsupabase"} element={<CRUDsupabase />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
