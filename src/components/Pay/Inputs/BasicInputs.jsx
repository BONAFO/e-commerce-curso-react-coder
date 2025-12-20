import { TextField } from "@mui/material";
import { usePay } from "../../../context/PayContext";
import handleNumeric from "../../../functions/handleNumeric";
import handleOnlyText from "../../../functions/handleOnlyText";

export default function BasicInputs() {
  const { payInfo, setPayInfo } = usePay();

  return (
    <>
      <TextField
        required
        label="DNI (8 dígitos)"
        name="dni"
        type="number"
        variant="outlined"
        value={payInfo.DNI}
        onInput={(e) => {
          setPayInfo.setDNI(handleNumeric(e.target.value, 8));
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "blue" },
          },
        }}
      />

      <TextField
        required
        label="Nombre completo"
        variant="outlined"
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        value={payInfo.fullName}
        onInput={(e) => {
          setPayInfo.setFullName(handleOnlyText(e.target.value, 100));
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "blue" },
          },
        }}
      />

      <TextField
        required
        label="Teléfono"
        variant="outlined"
        type="number"
        value={payInfo.phone}
        onInput={(e) => {
          setPayInfo.setPhone(handleNumeric(e.target.value, 32));
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "blue" },
          },
        }}
      />

      <TextField
        required
        label="Correo electrónico"
        type="email"
        variant="outlined"
        value={payInfo.email}
        onInput={(e) => {
          const LIMIT = 100;

          setPayInfo.setEmail(
            e.target.value.slice(
              0,
              e.target.value.length > LIMIT ? LIMIT : e.target.value.length
            )
          );
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "blue" },
          },
        }}
      />

      <TextField
        label="Domicilio de facturación"
        variant="outlined"
        value={payInfo.address}
        onInput={(e) => {
          const LIMIT = 255;

          setPayInfo.setAddress(
            e.target.value.slice(
              0,
              e.target.value.length > LIMIT ? LIMIT : e.target.value.length
            )
          );
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "blue" },
          },
        }}
      />
    </>
  );
}
