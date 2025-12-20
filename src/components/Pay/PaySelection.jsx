import { useRef, useState } from "react";
import { Box, Typography, Button, ButtonGroup, Stack } from "@mui/material";
import CardForm from "./CardForm";
import DirectPay from "./DirectPay";
import TransferForm from "./TransferForm";
import PayProvider from "../../context/PayContext";
import PayButtons from "./PayButtons";

export default function PaySelection() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const payform = useRef(null);

  const handleSubmit = () => {
    payform.current.preventDefault();
  };


  
  
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography color="#ffffff" sx={{ textAlign: "center" }} variant="h5">
        Registrar pedido
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button
          onClick={() => setPaymentMethod(<CardForm cardType={"debito"} />)}
          color="secondary"
          variant={paymentMethod === "debito" ? "contained" : "outlined"}
        >
          Tarjeta de Débito
        </Button>
        <Button
          color="secondary"
          onClick={() => setPaymentMethod(<CardForm cardType={"credito"} />)}
          variant={paymentMethod === "credito" ? "contained" : "outlined"}
        >
          Tarjeta de Crédito
        </Button>
        <Button
          color="secondary"
          onClick={() => setPaymentMethod(<DirectPay />)}
          variant={paymentMethod === "contado" ? "contained" : "outlined"}
        >
          Efectivo
        </Button>
        <Button
          color="secondary"
          onClick={() => setPaymentMethod(<TransferForm />)}
          variant={paymentMethod === "transferencia" ? "contained" : "outlined"}
        >
          Transferencia Bancaria
        </Button>
      </Stack>

      <PayProvider>
        <form action="" ref={payform}>
          {paymentMethod}
          <PayButtons paymentMethod={paymentMethod}/>
        </form>
      </PayProvider>
    </Box>
  );
}
