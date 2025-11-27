import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router";

export default function E404() {
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
      <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: "6rem" }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ opacity: 0.8 }}>
        Oops... La página que buscás no existe
      </Typography>
      <Button
        component={NavLink}
        to="/"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
}
