import { Box, TextField, Stack } from "@mui/material";
import { usePay } from "../../../context/PayContext";
import handleNumeric from "../../../functions/handleNumeric";

export default function CardInputs() {
  const { payInfo, setPayInfo } = usePay();

  const handleCardChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setPayInfo.setCardNumber(value);

    const raw = value.replace(/\s/g, "");
    if (/^4/.test(raw)) setPayInfo.setPayProcessor("visa");
    else if (/^5[1-5]/.test(raw)) setPayInfo.setPayProcessor("mastercard");
    else if (/^3[47]/.test(raw)) setPayInfo.setPayProcessor("amex");
    else setPayInfo.setPayProcessor("");
  };

  const logos = {
    visa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/1200px-Old_Visa_Logo.svg.png",
    mastercard:
      "https://cdn.iconscout.com/icon/free/png-256/free-mastercard-logo-icon-svg-download-png-2944982.png",
    amex: "https://uridan.shop/wp-content/plugins/woo-stripe-payment/assets/img/cards/amex.svg",
  };

  const cvvLength = payInfo.payProcessor === "amex" ? 4 : 3;

  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
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
      </Stack>
    </>
  );
}
