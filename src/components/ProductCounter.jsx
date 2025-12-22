import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductCounter({ quantity, setQuantity }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
      <IconButton
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        color="info"
      >
        <RemoveIcon />
      </IconButton>

      <TextField
        type="number"
        value={quantity}
        onChange={(e) =>
          setQuantity(Math.max(1, parseInt(e.target.value) || 1))
        }
        InputProps={{
          sx: { color: "#e9e9e9a7" },
        }}
      />

      <IconButton onClick={() => setQuantity((q) => q + 1)} color="info">
        <AddIcon />
      </IconButton>
    </Box>
  );
}
