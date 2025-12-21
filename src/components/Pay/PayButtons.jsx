import { Box, Button, Stack } from "@mui/material";
import { routes } from "../../router/router";
import { NavLink } from "react-router";
import { usePay } from "../../context/PayContext";
import { usePayInfo } from "../../hooks/Pay";

export default function PayButtons() {
  const { payMethod } = usePayInfo();

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, textAlign: "center" }}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          color="error"
          component={NavLink}
          to={routes.mainPage}
        >
          Volver a la tienda
        </Button>
        {payMethod ? (
          <Button type="submit" variant="outlined" color="primary">
            Procesar pago
          </Button>
        ) : (
          ""
        )}
      </Stack>
    </Box>
  );
}
