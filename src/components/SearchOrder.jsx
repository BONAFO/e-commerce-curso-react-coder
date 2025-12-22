import { Box, Button, Typography, TextField } from "@mui/material";
import { NavLink } from "react-router";
import { routes } from "../router/router";
import { useState } from "react";

export function SearchOrder() {
  const [orderID, setOrderID] = useState("");

  const handleChange = (e) => setOrderID(e.target.value);

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        width: "60%",
        marginLeft: "20%",
        marginTop: "50px",
        padding: 3,
        borderRadius: 2,
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Buscar mi pedido
      </Typography>

      <TextField
        fullWidth
        value={orderID}
        placeholder="Ingrese su código de pedido"
        variant="outlined"
        onChange={handleChange}
        sx={{
          mb: 3,
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#fff" },
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          color="success"
          component={NavLink}
          to={routes.showOrder.replace(":orderID",orderID)}
          sx={{ fontSize: "18px" }}
        >
          Buscar
        </Button>

        <Button
          variant="contained"
          color="primary"
          component={NavLink}
          to={routes.mainPage}
          sx={{ fontSize: "18px" }}
        >
          Volver a la tienda
        </Button>
      </Box>
    </Box>
  );
}
