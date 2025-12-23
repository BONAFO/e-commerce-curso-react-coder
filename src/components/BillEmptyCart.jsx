
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router";
import { routes } from "../router/router";

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
