import { useState } from "react";
import { Box, Button, Typography, IconButton, TextField } from "@mui/material";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router";
import { routes } from "../router/router";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductCounter from "./ProductCounter";
import { useProductDetailHook } from "../hooks/Products";

export function ProductMobile({ product }) {
  // const { cart, setCart } = useCart();
  // const [quantity, setQuantity] = useState(1);

  // const inCart = cart.find((g) => g.id === product.id);

  // const handleAddToCart = () => {
  //   const entry = { ...product, quantity, tprice: product.price * quantity };
  //   setCart([...cart, entry]);
  // };

  const { quantity, setQuantity, inCart, handleAddToCart } =
    useProductDetailHook();

  return (
    <>
      <tr>
        <td style={{ height: "50px" }}></td>
      </tr>
      <tr>
        <td style={{ width: "100%" }}>
          <Box
            component="img"
            sx={{ width: "100%" }}
            alt="videogame"
            src={product.img}
          />
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: "center" }}>
          <Typography color="var(--bs-font-color)" variant="h2">
            {product.name.toUpperCase()}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Typography
            color="var(--bs-font-color)"
            sx={{ marginTop: "25px", marginLeft: "20px" }}
            variant="h5"
          >
            {product.desc}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Box sx={{ width: "100%", textAlign: "center", mt: 3 }}>
            <Typography
              color="var(--bs-font-color)"
              variant="h4"
              sx={{ mb: 2 }}
            >
              ${product.price}
            </Typography>

            {!inCart && (
              <ProductCounter quantity={quantity} setQuantity={setQuantity} />
            )}

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {!inCart ? (
                <Button
                  aria-label="carrito"
                  onClick={handleAddToCart}
                  sx={{
                    color: "white",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <Typography variant="h5">Añadir al Carrito</Typography>
                </Button>
              ) : null}

              <Button
                aria-label="carrito"
                component={NavLink}
                to={routes.productBill}
                sx={{
                  color: "white",
                  backgroundColor: "transparent",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <Typography variant="h5">Pagar</Typography>
              </Button>
            </Box>
          </Box>
        </td>
      </tr>
    </>
  );
}

export function ProductDesk({ product }) {
  const { quantity, setQuantity, inCart, handleAddToCart } =
    useProductDetailHook();

  return (
    <>
      <tr>
        <td style={{ width: "30%" }}>
          <Box
            component="img"
            sx={{ width: "100%" }}
            alt="videogame"
            src={product.img}
          />
        </td>
        <td className="w-70" style={{ verticalAlign: "top" }}>
          <span style={{ textAlign: "center" }}>
            <Typography color="var(--bs-font-color)" variant="h2">
              {product.name.toUpperCase()}
            </Typography>
          </span>
          <Typography
            color="var(--bs-font-color)"
            sx={{ marginTop: "25px", marginLeft: "20px" }}
            variant="h5"
          >
            {product.desc}
          </Typography>
          <Box
            sx={{ width: "100%", paddingRight: "20px", textAlign: "center" }}
          >
            <Box sx={{ width: "100%", textAlign: "center", mt: 3 }}>
              <Typography
                color="var(--bs-font-color)"
                variant="h4"
                sx={{ mb: 2 }}
              >
                ${product.price}
              </Typography>

              {!inCart && (
                <ProductCounter quantity={quantity} setQuantity={setQuantity} />
              )}

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                {!inCart ? (
                  <Button
                    aria-label="carrito"
                    onClick={handleAddToCart}
                    sx={{
                      color: "white",
                      backgroundColor: "transparent",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    <Typography variant="h5">Añadir al Carrito</Typography>
                  </Button>
                ) : null}

                <Button
                  aria-label="carrito"
                  component={NavLink}
                  to={routes.productBill}
                  sx={{
                    color: "white",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <Typography variant="h5">Pagar</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </td>
      </tr>
    </>
  );
}
