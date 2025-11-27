import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router";

export default function ProductCard({ game }) {
  const { cart, setCart } = useCart();

  const handleAddToCart = () => {
    setCart([...cart, game]);
  };

  const handlePay = () => {
    alert("nos vamo a pagar");
  };

  return (
    <Card
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        userSelect: "none",
      }}
    >
      <CardMedia
        component="img"
        loading="lazy"
        height="140"
        image={game.img}
        alt="game cover"
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5">{game.name}</Typography>
        <Typography variant="label" color="text.secondary">
          ${game.price}
        </Typography>
      </CardContent>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 1,
          p: 2,
          pt: 0,
        }}
      >
        {cart.filter((g) => g.id == game.id).length == 0 ? (
          <Button
            variant="contained"
            fullWidth
            onClick={handleAddToCart}
            startIcon={<ShoppingCartIcon />}
            sx={{ flex: 1 }}
          ></Button>
        ) : (
          <Button
            variant="contained"
            onClick={handlePay}
            color="success"
            fullWidth
            sx={{ flex: 1 }}
          >
            PAGAR
          </Button>
        )}
        <Button
          component={NavLink}
          to={`/game/${game.id}`}
          variant="outlined"
          fullWidth
          sx={{ flex: 1, textDecoration: "none" }}
        >
          Ver
        </Button>
      </Box>
    </Card>
  );
}
