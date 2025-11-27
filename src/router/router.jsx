import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";

import NavBar from "../components/NavBar";
import E404 from "../pages/Errors/404.jsx";

export default function Router() {

    
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game/:productID" element={<ProductPage />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  );
}
