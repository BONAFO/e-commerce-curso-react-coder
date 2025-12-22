import { Box, Button, Typography } from "@mui/material";
import { NavLink, useParams } from "react-router";
import { routes } from "../router/router";
import { useScreen } from "../context/ScreenContext";

export function IdOrder() {
  const { orderID } = useParams();
  const { isMobile } = useScreen();

  const handleCopyLink = () => {
    const fullLink =
      window.location.origin + routes.showOrder.replace(":orderID", orderID);
    navigator.clipboard.writeText(fullLink);
    alert("Link copiado al portapapeles ✅");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        width: isMobile ? "80%" : "60%",
        marginLeft: isMobile ? "10%" : "20%",
        marginTop: "50px",
        padding: 3,
        borderRadius: 2,
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography variant={isMobile ? "h5" : "h4"} sx={{ mb: 3 }}>
        Tu código de pedido
      </Typography>

      <Typography
        variant={isMobile ? "h4" : "h3"}
        sx={{ mb: 4, color: "#93ffccff" }}
      >
        {orderID}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "stretch",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={NavLink}
          to={routes.mainPage}
          sx={{ fontSize: isMobile ? "16px" : "18px", width: "100%" }}
        >
          Volver a la tienda
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleCopyLink}
          sx={{ fontSize: isMobile ? "16px" : "18px", width: "100%" }}
        >
          Copiar link del pedido
        </Button>
      </Box>
    </Box>
  );
}
