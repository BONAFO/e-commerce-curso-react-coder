import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import E404 from "../pages/Errors/404.jsx";
import BillPage from "../pages/BillPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import NavBarContainer from "../containers/NavBarContainer.jsx";
import PayPage from "../pages/PayPage.jsx";
import IdOrderPage from "../pages/IdOrderPage.jsx";
import ShowOrderPage from "../pages/ShowOrderPage.jsx";

export const routes = {
  mainPage: "/",
  mainPageCategories: "/categorias/",
  mainPageCategorie: "/categorias/:id",
  productDetail: "/game/:productID",
  productBill: "/products/bill",
  productPay: "/products/pay",
  contact: "/contact",
  newOrder: "/order/new/:orderID",
  showOrder: "/order/:orderID",
  searchOrder: "/order/",
  error404: "*",
};

function LayoutNav({ navBar = false }) {
  return (
    <>
      {navBar ? <NavBarContainer /> : ""}
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
          <Route path={routes.contact} element={<ContactPage />} />
        </Route>
        PayPage
        {/* Rutas sin NavBar */}
        <Route element={<LayoutNav />}>
          <Route path={routes.error404} element={<E404 />} />
          <Route path={routes.newOrder} element={<IdOrderPage />} />
          <Route path={routes.showOrder} element={<ShowOrderPage />} />
          <Route path={routes.searchOrder} element={<ShowOrderPage/>} />
          <Route path={routes.productPay} element={<PayPage />} />
          <Route path={routes.productBill} element={<BillPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
