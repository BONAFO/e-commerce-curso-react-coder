import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  return (
    <CartContext.Provider
      value={{
cart, setCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
