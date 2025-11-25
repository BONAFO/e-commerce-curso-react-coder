import { Box, Button, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";

export function ProductMobile({ product }) {
  const { cart, setCart } = useCart();

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  const handlePay = () => {
    alert("nos vamo a pagar");
  };

  product.desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.";
  return (
    <>
      <tr>
        <td style={{ height: "50px" }}></td>
      </tr>
      <tr>
        <td style={{ width: "100%" }}>
          <Box
            component="img"
            sx={{ width: "100%" }}
            alt="videogame"
            src={product.img}
          />
        </td>
      </tr>

      <tr>
        <td style={{ textAlign: "center" }}>
          <Typography color="var(--bs-font-color)" variant="h2">
            {product.name.toUpperCase()}
          </Typography>
        </td>
      </tr>

      <tr>
        <td>
          <Typography
            color="var(--bs-font-color)"
            sx={{ marginTop: "25px", marginLeft: "20px" }}
            variant="h5"
          >
            {product.desc}
          </Typography>
        </td>
      </tr>

      <tr>
        <td>
          <Box sx={{ width: "100%", textAlign: "center", mt: 3 }}>
            <Typography
              color="var(--bs-font-color)"
              variant="h4"
              sx={{ mb: 2 }}
            >
              ${product.price}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {cart.filter((g) => g.id == product.id).length == 0 ? (
                <Button
                  aria-label="carrito"
                  onClick={handleAddToCart}
                  sx={{
                    color: "white",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <Typography variant="h5">Añadir al Carrito</Typography>
                </Button>
              ) : (
                ""
              )}

              <Button
                aria-label="carrito"
                onClick={handlePay}
                sx={{
                  color: "white",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <Typography variant="h5">Pagar</Typography>
              </Button>
            </Box>
          </Box>
        </td>
      </tr>
    </>
  );
}

export function ProductDesk({ product }) {
  const { cart, setCart } = useCart();

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  const handlePay = () => {
    alert("nos vamo a pagar");
  };

  product.desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam soluta voluptatibus molestiae praesentium deleniti molestias earum rem vitae quidem non, error consequuntur ex dolore facilis eius magnam officiis corrupti.";
  return (
    <>
      <tr>
        <td style={{ width: "30%" }}>
          <Box
            component="img"
            sx={{ width: "100%" }}
            alt="videogame"
            src={product.img}
          />
        </td>

        <td className="w-70" style={{ verticalAlign: "top" }}>
          <span style={{ textAlign: "center" }}>
            <Typography color="var(--bs-font-color)" variant="h2">
              {product.name.toUpperCase()}
            </Typography>
          </span>

          <Typography
            color="var(--bs-font-color)"
            sx={{ marginTop: "25px", marginLeft: "20px" }}
            variant="h5"
          >
            {product.desc}
          </Typography>
          <Box
            component={"div"}
            sx={{
              width: "100%",
              paddingRight: "20px",
              textAlign: "center",
            }}
          >
            <Box sx={{ width: "100%", textAlign: "center", mt: 3 }}>
              <Typography
                color="var(--bs-font-color)"
                variant="h4"
                sx={{ mb: 2 }}
              >
                ${product.price}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                {cart.filter((g) => g.id == product.id).length == 0 ? (
                  <Button
                    aria-label="carrito"
                    onClick={handleAddToCart}
                    sx={{
                      color: "white",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    <Typography variant="h5">Añadir al Carrito</Typography>
                  </Button>
                ) : (
                  ""
                )}

                <Button
                  aria-label="carrito"
                  onClick={handlePay}
                  sx={{
                    color: "white",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <Typography variant="h5">Pagar</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </td>
      </tr>
    </>
  );
}
