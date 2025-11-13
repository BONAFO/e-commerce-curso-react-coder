import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductCard({ game }) {
  return (
    <Card
      sx={{
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
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
          display: 'flex',
          justifyContent: 'space-between',
          gap: 1,
          p: 2,
          pt: 0,
        }}
      >
        <Button
          variant="contained"
          fullWidth
          startIcon={<ShoppingCartIcon />}
          sx={{ flex: 1 }}
        >

        </Button>
        <Button variant="outlined" fullWidth sx={{ flex: 1 }}>
          Ver
        </Button>
      </Box>
    </Card>
  );
}
