import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router";
import { routes } from "../router/router";
import { useCart } from "../context/CartContext";

export function BillEmptyCart() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#121212",
        color: "#fff",
        gap: 2,
      }}
    >
      <Typography variant="h4">Tu carrito está vacío 🛒</Typography>
      <br />
      <Button
        component={NavLink}
        to={routes.mainPage}
        variant="contained"
        color="primary"
      >
        Volver a la tienda
      </Button>
    </Box>
  );
}

export function BillCart() {
  const { cart, setCart } = useCart();

  const handleRemove = (productID) => {
    setCart([...cart.filter((item) => item.id != productID)]);
  };

  const handleEmptyCart = () => {
    setCart([]);
  };

  const total = cart.reduce((to, item) => to + item.price, 0);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#51515121",
          width: "60%",
          marginLeft: "20%",
          marginTop: "50px",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead></thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid black" }}>
                <td style={{ width: "200px", padding: "8px" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "100%" }}
                  />
                </td>
                <td style={{ padding: "8px" }}></td>
                <td
                  style={{ width: "200px", padding: "8px", textAlign: "right" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: 1, // espacio entre precio y botón
                    }}
                  >
                    <Typography color="#e9e9e9a7" variant="h5">
                      ${item.price}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      sx={{ minWidth: "40px", padding: "2px 6px" }} // más compacto
                      onClick={() => handleRemove(item.id)}
                    >
                      X
                    </Button>
                  </Box>
                </td>
              </tr>
            ))}

            <tr key="total-tr" style={{ borderTop: "2px solid black" }}>
              <td colSpan={3} style={{ padding: "8px", textAlign: "right" }}>
                <Typography color="#e9e9e9a7" variant="h5">
                  Total: ${total}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <Button
            sx={{ fontSize: "20px", color: "#ffc7a3ff" }}
            variant="contained"
            color="error"
            onClick={handleEmptyCart}
          >
            Vaciar carrito
          </Button>

          <Button
            sx={{ fontSize: "20px", color: "#a6d4ffff" }}
            variant="contained"
            component={NavLink}
            to={routes.mainPage}
            color="primary"
          >
            Seguir comprando
          </Button>

          <Button
            sx={{ fontSize: "20px", color: "#93ffccff" }}
            variant="contained"
            type="submit"
            color="success"
            component={NavLink}
            to={routes.productPay}
            onClick={() => {}}
          >
            Pagar
          </Button>
        </Box>
      </Box>
    </>
  );
}
