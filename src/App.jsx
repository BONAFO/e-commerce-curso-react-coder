import ScreenProvider from "./context/ScreenContext";
import MsjsProvider from "./context/LoadingMsjContext";
import CartProvider from "./context/CartContext";
import Router from "./router/router";

export default function App() {
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
