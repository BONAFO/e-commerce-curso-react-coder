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
        <CardInputs />
        <BasicInputs />
      </Stack>
    </Box>
  );
}
