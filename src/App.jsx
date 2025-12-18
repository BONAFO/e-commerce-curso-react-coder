import ScreenProvider from "./context/ScreenContext";
import MsjsProvider from "./context/LoadingMsjContext";
import CartProvider from "./context/CartContext";
import Router from "./router/router";
import { getCollectionData } from "./db/firestore/services";




export default function App() {

  console.log(getCollectionData("categorias").then(c => console.log(c)
  ));
  

  return (
    <>
      <ScreenProvider>
        <MsjsProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </MsjsProvider>
      </ScreenProvider>
    </>
  );
}
