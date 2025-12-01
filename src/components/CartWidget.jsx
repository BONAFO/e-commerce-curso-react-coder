import { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  ListItem,
  Button,
  Badge,
  Box
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router';
import { routes } from '../router/router';

export default function CartWidget() {
  const [anchorEl, setAnchorEl] = useState(null);

  const { cart, setCart} = useCart();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const eliminarProducto = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };


  return (
    <>


      <IconButton onClick={handleOpen} sx={{ p: 0 }}>
        <Badge badgeContent={cart.length} color="error">
          <Box sx={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShoppingCartIcon sx={{ fontSize: 28 }} />
          </Box>
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: 1 }}
      >



        {cart.length === 0 ? (
          <MenuItem disabled>
            <ListItemText primary="El cart está vacío" />
          </MenuItem>
        ) : (
          cart.map((item, index) => (
            <MenuItem key={index}>
              <ListItem disableGutters sx={{ width: '100%' }}>
                <ListItemText
                  primary={item.nombre}
                  secondary={`$${item.precio}`}
                />
                <Button color="error" sx={{ marginLeft: "20px" }} size="small" onClick={() => eliminarProducto(index)}>
                  Eliminar
                </Button>
              </ListItem>

            </MenuItem>
          ))
        )}
        <Button color="info" sx={{ textAlign: "center", width: "100%" }} size="small" component={NavLink} to={routes.productPay}>
          Pagar
        </Button>
      </Menu>
    </>
  );
}
