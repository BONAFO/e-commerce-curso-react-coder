import { PaymentCart, PaymentEmptyCart } from "../components/Payment";
import { useCart } from "../context/CartContext";

export default function PaymentContainer() {
  const { cart } = useCart();

  return <>{cart.length == 0 ? <PaymentEmptyCart /> : <PaymentCart/>}</>;
}


