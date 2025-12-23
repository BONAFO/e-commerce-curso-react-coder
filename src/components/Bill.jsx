import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router";
import { routes } from "../router/router";
import { useScreen } from "../context/ScreenContext";
import { useBillHook, usePayInfo } from "../hooks/Pay";
import Spinner from "./Spinner";

export function BillCart() {
  const { isMobile } = useScreen();
  const {
    cart,
    handleRemoveOne,
    handleRemoveStack,
    total,
    method,
    handleCancelBIll,
    handleSaveBill,
    spinner,
  } = useBillHook();

  const { payProcessor, cardNumber, DNI, fullName, phone, email, address } =
    usePayInfo();

  return (
    <>
      <Spinner loading={spinner} />
      <Box
        sx={{
          backgroundColor: "#51515121",
          width: isMobile ? "80%" : "60%",
          marginLeft: isMobile ? "10%" : "20%",
          marginTop: "50px",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid black" }}>
                <td style={{ width: "200px", padding: "8px" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "100%" }}
                  />
                </td>
                <td style={{ padding: "8px", verticalAlign: "middle" }}>
                  <Typography color="#e9e9e9a7" variant="h6">
                    {item.name}
                  </Typography>
                  <Typography color="#e9e9e9a7" variant="body1">
                    Cantidad: {item.quantity}
                  </Typography>
                </td>
                <td
                  style={{ width: "200px", padding: "8px", textAlign: "right" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 0.5,
                    }}
                  >
                    <Typography color="#e9e9e9a7" variant="h5">
                      ${item.tprice}
                    </Typography>
                    <Typography color="#e9e9e9a7" variant="body2">
                      Unitario: ${item.price}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        sx={{ minWidth: "40px", padding: "2px 6px" }}
                        onClick={() => handleRemoveOne(item.id)}
                      >
                        -1
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        sx={{ minWidth: "40px", padding: "2px 6px" }}
                        onClick={() => handleRemoveStack(item.id)}
                      >
                        X
                      </Button>
                    </Box>
                  </Box>
                </td>
              </tr>
            ))}

            <tr key="total-tr" style={{ borderTop: "2px solid black" }}>
              <td colSpan={3} style={{ padding: "8px", textAlign: "right" }}>
                <Typography color="#e9e9e9a7" variant="h5">
                  Total: ${total}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: isMobile ? "center" : "space-between",
            alignItems: isMobile ? "stretch" : "center",
            gap: 2,
            mt: 3,
          }}
        >
          <Button
            sx={{ fontSize: "20px", color: "#ffc7a3ff" }}
            variant="contained"
            color="error"
            onClick={handleCancelBIll}
          >
            Cancelar compra
          </Button>

          <Button
            sx={{ fontSize: "20px", color: "#a6d4ffff" }}
            variant="contained"
            component={NavLink}
            to={routes.mainPage}
            color="primary"
          >
            Seguir comprando
          </Button>

          <Button
            sx={{ fontSize: "20px", color: "#93ffccff" }}
            variant="contained"
            color="success"
            onClick={handleSaveBill}
          >
            Confirmar
          </Button>
        </Box>

        <Box
          sx={{
            mt: 4,
            backgroundColor: "#2c2c2c",
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" color="#ffffff">
            Datos de pago
          </Typography>

          {method && (
            <Typography variant="body1" color="#e9e9e9a7">
              Método: {method.text}
            </Typography>
          )}

          {payProcessor && (
            <Typography variant="body1" color="#e9e9e9a7">
              Procesador: {payProcessor}
            </Typography>
          )}

          {cardNumber && (
            <Typography variant="body1" color="#e9e9e9a7">
              Tarjeta terminada en: {cardNumber.slice(-4)}
            </Typography>
          )}

          <Typography variant="body1" color="#e9e9e9a7">
            Nombre completo: {fullName}
          </Typography>
          <Typography variant="body1" color="#e9e9e9a7">
            DNI: {DNI}
          </Typography>
          <Typography variant="body1" color="#e9e9e9a7">
            Teléfono: {phone}
          </Typography>
          <Typography variant="body1" color="#e9e9e9a7">
            Email: {email}
          </Typography>
          <Typography variant="body1" color="#e9e9e9a7">
            Dirección: {address}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
