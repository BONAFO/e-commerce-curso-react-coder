import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router";
import { routes } from "../router/router";

export default function PayPage() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#121212", // fondo oscuro elegante
        color: "#fff",
        textAlign: "center",
        gap: 3,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Pagando - WIP
      </Typography>
      <Typography variant="h6" sx={{ opacity: 0.8 }}>
        Esta sección está en construcción, pronto estará disponible
      </Typography>

      <Button
        component={NavLink}
        to={routes.mainPage}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
}
