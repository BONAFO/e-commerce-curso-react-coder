import { Box, TextField, Typography, Stack } from "@mui/material";
import BasicInputs from "./Inputs/BasicInputs";

export default function DirectPay() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 3 }}>
      <Typography
        variant="h5"
        gutterBottom
        color="#e9e9e9a7"
        textAlign="center"
      >
        Pago en Efectivo
      </Typography>

      <Stack spacing={2}>
        {/* <TextField
          required
          label="DNI (8 dígitos)"
          inputProps={{ maxLength: 8 }}
          variant="outlined"
          InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
          InputProps={{ style: { color: "#e9e9e9a7" } }}
          sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
        />

        <TextField
          required
          label="Nombre completo"
          variant="outlined"
          InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
          InputProps={{ style: { color: "#e9e9e9a7" } }}
          sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
        />

        <TextField
          required
          label="Teléfono"
          variant="outlined"
          InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
          InputProps={{ style: { color: "#e9e9e9a7" } }}
          sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
        />

        <TextField
          required
          label="Correo electrónico"
          type="email"
          variant="outlined"
          InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
          InputProps={{ style: { color: "#e9e9e9a7" } }}
          sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
        />

        <TextField
          label="Domicilio de facturación"
          placeholder="Ej: Calle 123, Ciudad, Provincia"
          variant="outlined"
          InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
          InputProps={{ style: { color: "#e9e9e9a7" } }}
          sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
        /> */}

        <BasicInputs/>
      </Stack>
    </Box>
  );
}
