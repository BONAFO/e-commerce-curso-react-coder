import { Box, Typography, Button, Stack } from "@mui/material";
import CardForm from "./CardForm";
import DirectPay from "./DirectPay";
import TransferForm from "./TransferForm";
import PayButtons from "./PayButtons";
import { usePayInfo, usePaySubmit, useSetPayInfo } from "../../hooks/Pay";
import { useState } from "react";

export default function PaySelection() {
  const handleSubmit = usePaySubmit();
  const { payForm, setPayForm } = useState(null);
  const { payMethod } = usePayInfo();
  const { setPayMethod } = useSetPayInfo();


const payMethods ={
  
};
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography color="#ffffff" sx={{ textAlign: "center" }} variant="h5">
        Registrar pedido
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button

          onClick={() => setPayForm(<CardForm cardType={"debito"} />)}
          color="secondary"
          variant={payMethod === "debito" ? "contained" : "outlined"}
        >
          Tarjeta de Débito
        </Button>
        <Button
          color="secondary"
          onClick={() => setPayForm(<CardForm cardType={"credito"} />)}
          variant={payMethod === "credito" ? "contained" : "outlined"}
        >
          Tarjeta de Crédito
        </Button>
        <Button
          color="secondary"
          onClick={() => setPayForm(<DirectPay />)}
          variant={payMethod === "contado" ? "contained" : "outlined"}
        >
          Efectivo
        </Button>
        <Button
          color="secondary"
          onClick={() => setPayForm(<TransferForm />)}
          variant={payMethod === "transferencia" ? "contained" : "outlined"}
        >
          Transferencia Bancaria
        </Button>
      </Stack>
      <form onSubmit={handleSubmit}>
        {payForm}
        <PayButtons />
      </form>
    </Box>
  );
}
