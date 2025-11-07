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

export default function CartWidget() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [carrito, setCarrito] = useState([
    { nombre: 'Producto A', precio: 120 },
    { nombre: 'Producto B', precio: 80 },
  ]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const eliminarProducto = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  const goToPay=()=>{
    alert("Nos vamos a pagar la prata!")
  }
  return (
    <>


      <IconButton onClick={handleOpen} sx={{ p: 0 }}>
        <Badge badgeContent={carrito.length} color="error">
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



        {carrito.length === 0 ? (
          <MenuItem disabled>
            <ListItemText primary="El carrito está vacío" />
          </MenuItem>
        ) : (
          carrito.map((item, index) => (
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
        <Button color="info" sx={{ textAlign: "center", width: "100%" }} size="small" onClick={goToPay}>
          Pagar
        </Button>
      </Menu>
    </>
  );
}
