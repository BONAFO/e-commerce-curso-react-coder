import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";

import NavBar from "../components/NavBar";
import E404 from "../pages/Errors/404.jsx";
import PayPage from "../pages/PayPage.jsx";

export const routes = {
  mainPage: "/",
  mainPageCategories: "/categorias/",
  mainPageCategorie: "/categorias/:id",
  productDetail: "/game/:productID",
  productPay: "/products/pay",
  error404: "*",
};

function LayoutNav({ navBar = false }) {
  return (
    <>
      {navBar ? <NavBar /> : ""}
      <Outlet />
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con NavBar */}
        <Route element={<LayoutNav navBar={true} />}>
          <Route path={routes.mainPage} element={<MainPage />} />
          <Route path={routes.mainPageCategories} element={<MainPage />} />
          <Route path={routes.mainPageCategorie} element={<MainPage />} />
          <Route path={routes.productDetail} element={<ProductPage />} />
        </Route>

        {/* Rutas sin NavBar */}
        <Route element={<LayoutNav />}>
          <Route path={routes.productPay} element={<PayPage />} />
          <Route path={routes.error404} element={<E404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
