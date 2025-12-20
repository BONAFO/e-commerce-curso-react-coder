import { Box, Typography, Stack, capitalize } from "@mui/material";

import CardInputs from "./Inputs/CardInputs";
import BasicInputs from "./Inputs/BasicInputs";

export default function CardForm({ cardType }) {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 3 }}>
      <Typography
        variant="h5"
        gutterBottom
        color="#e9e9e9a7"
        textAlign="center"
      >
        Tarjeta de {capitalize(cardType)}
      </Typography>

      <Stack spacing={2}>
        {/* <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 48,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {payInfo.payProcessor && (
              <Box
                component="img"
                src={logos[payInfo.payProcessor]}
                alt={payInfo.payProcessor}
                sx={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            )}
          </Box>

          <TextField
            required
            label="Número de tarjeta"
            value={payInfo.cardNumber}
            onChange={handleCardChange}
            placeholder="0000 0000 0000 0000"
            variant="outlined"
            fullWidth
            slotProps={{
              htmlInput: {
                maxLength: 19,
              },
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
            value={payInfo.CVV}
            label="CVV"
            onChange={(e) => {
              setPayInfo.setCVV(handleNumeric(e.target.value, 4));
            }}
            variant="outlined"
            sx={{
              width: 100,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "blue" },
              },
            }}
            slotProps={{
              htmlInput: {
                maxLength: cvvLength,
              },
            }}
            InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
            InputProps={{ style: { color: "#e9e9e9a7" } }}
          />
        </Stack> */}

        <CardInputs />
        <BasicInputs />
        {/* <TextField
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
        /> */}
      </Stack>
    </Box>
  );
}
