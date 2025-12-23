import { useState } from "react";

import { useCart } from "../context/CartContext";

export const useCartHook = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { cart, setCart } = useCart();

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const eliminarUnidad = (index) => {
    setCart((prev) => {
      const updated = [...prev];
      const item = updated[index];

      if (item.quantity > 1) {
        updated[index] = {
          ...item,
          quantity: item.quantity - 1,
          tprice: item.price * (item.quantity - 1),
        };
      } else {
        updated.splice(index, 1);
      }

      return updated;
    });
  };

  const eliminarStack = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    anchorEl,
    setAnchorEl,
    cart,
    setCart,
    handleOpen,
    handleClose,
    eliminarUnidad,
    eliminarStack,
  };
};
