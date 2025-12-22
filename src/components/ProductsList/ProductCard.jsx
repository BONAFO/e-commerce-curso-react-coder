import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useScreen } from "../../context/ScreenContext";
import { NavLink } from "react-router";
import { routes } from "../../router/router";
import ProductCounter from "../ProductCounter";
import { useProductCardHook } from "../../hooks/Products";

export default function ProductCard({ game }) {
  const { isMobile } = useScreen();
  const { quantity, setQuantity, inCart, handleAddToCart } = useProductCardHook(game);

  return (
    <Card
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        userSelect: "none",
        backgroundColor: "#343434bb",
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
        <Typography variant="h5" color="#b7b7b7ff">
          {game.name}
        </Typography>
        <Typography variant="label" color="#b7b7b7ff">
          ${game.price}
        </Typography>

        {!inCart && (
          <ProductCounter quantity={quantity} setQuantity={setQuantity} />
        )}
      </CardContent>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: 1,
          p: 2,
          pt: 0,
        }}
      >
        {!inCart ? (
          <Button
            variant="contained"
            fullWidth
            onClick={handleAddToCart}
            startIcon={<ShoppingCartIcon />}
            sx={{ flex: 1 }}
          >
            Agregar
          </Button>
        ) : (
          <Button
            component={NavLink}
            to={routes.productBill}
            variant="contained"
            color="info"
            fullWidth
            sx={{ flex: 1 }}
          >
            PAGAR
          </Button>
        )}

        <Button
          component={NavLink}
          to={routes.productDetail.replace(":productID", game.id)}
          variant="outlined"
          fullWidth
          color="info"
          sx={{ flex: 1, textDecoration: "none" }}
        >
          Ver
        </Button>
      </Box>
    </Card>
  );
}
