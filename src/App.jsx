import ScreenProvider from "./context/ScreenContext";
import MsjsProvider from "./context/LoadingMsjContext";
import CartProvider from "./context/CartContext";
import Router from "./router/router";
import PayProvider from "./context/PayContext";

export default function App() {
  return (
    <>
      <ScreenProvider>
        <MsjsProvider>
          <CartProvider>
            <PayProvider>
              <Router />
            </PayProvider>
          </CartProvider>
        </MsjsProvider>
      </ScreenProvider>
    </>
  );
}
