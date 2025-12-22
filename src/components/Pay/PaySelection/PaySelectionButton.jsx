import { Button } from "@mui/material";
import { usePayInfo, useSetPayInfo } from "../../../hooks/Pay";

export default function PaySelectionButton({ payMethodData, setPayForm }) {
  const { payMethod } = usePayInfo();
  const { setPayMethod } = useSetPayInfo();
  return (
    <>
      <Button
        color="secondary"
        onClick={() =>{
             setPayForm(payMethodData.compo);
             setPayMethod(payMethodData.id)
        } }
        variant={payMethod === "credito" ? "contained" : "outlined"}
      >
        {payMethodData.text}
      </Button>
    </>
  );
}
