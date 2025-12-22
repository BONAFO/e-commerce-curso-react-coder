import { Box, Typography, Stack } from "@mui/material";
import PayButtons from "../PayButtons";
import { payMethods, usePaySubmit } from "../../../hooks/Pay";
import { useState } from "react";
import PaySelectionButton from "./PaySelectionButton";
import Spinner from "../../Spinner";

export default function PaySelection() {
  const { handleSubmit, spinner } = usePaySubmit();
  const [payForm, setPayForm] = useState(null);

  return (
    <>
      <Spinner loading={spinner} />
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
        <Typography color="#ffffff" sx={{ textAlign: "center" }} variant="h5">
          Registrar pedido
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          {payMethods.map((pm) => {
            return (
              <PaySelectionButton
                key={`pay-button-${pm.id}`}
                setPayForm={setPayForm}
                payMethodData={pm}
              />
            );
          })}
        </Stack>
        <form onSubmit={handleSubmit}>
          {payForm}
          <PayButtons />
        </form>
      </Box>
    </>
  );
}
