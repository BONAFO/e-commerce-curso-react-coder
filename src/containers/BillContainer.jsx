import { BillEmptyCart, BillCart } from "../components/Bill";
import { useCart } from "../context/CartContext";

export default function BillContainer() {
  const { cart } = useCart();

  return <>{cart.length == 0 ? <BillEmptyCart /> : <BillCart/>}</>;
}


