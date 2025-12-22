import { BillEmptyCart } from "../components/Bill";
import PaySelection from "../components/Pay/PaySelection/PaySelection";
import { useCart } from "../context/CartContext";
import PayProvider from "../context/PayContext";

export default function PayContainer() {
  const { cart } = useCart();

  return (
    <>
      <PayProvider>
        {cart.length == 0 ? <BillEmptyCart /> : <PaySelection />}
      </PayProvider>
    </>
  );
}
