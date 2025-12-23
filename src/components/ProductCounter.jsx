import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductCounter({ quantity, setQuantity, stock }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
      <IconButton
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        color="info"
        disabled={quantity <= 1}
      >
        <RemoveIcon />
      </IconButton>

      <TextField
        type="number"
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value) || 1;
          // limitar entre 1 y stock
          setQuantity(Math.min(stock, Math.max(1, value)));
        }}
        InputProps={{
          sx: { color: "#e9e9e9a7" },
        }}
      />

      <IconButton
        onClick={() => setQuantity((q) => Math.min(stock, q + 1))}
        color="info"
        disabled={quantity >= stock}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
