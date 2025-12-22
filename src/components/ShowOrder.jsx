import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router";
import Spinner from "../components/Spinner";
import { useScreen } from "../context/ScreenContext";
import { useShowOrderHook } from "../hooks/Pay";
import { routes } from "../router/router";

export default function ShowOrder() {
  const { isMobile } = useScreen();
  const { oderInfo, spinner } = useShowOrderHook({});

  return (
    <>
      <Spinner loading={spinner} />

      {!spinner && (
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
          <Typography
            variant={isMobile ? "h5" : "h4"}
            color="#e9e9e9a7"
            sx={{ mb: 2 }}
          >
            Pedido de {oderInfo.fullName}
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" color="#e9e9e9a7">
              Email: {oderInfo.email}
            </Typography>
            <Typography variant="body1" color="#e9e9e9a7">
              Teléfono: {oderInfo.phone}
            </Typography>
            <Typography variant="body1" color="#e9e9e9a7">
              Dirección: {oderInfo.address}
            </Typography>
            <Typography variant="body1" color="#e9e9e9a7">
              DNI: {oderInfo.dni}
            </Typography>

            <Typography variant="body1" color="#e9e9e9a7">
              Método de pago: {oderInfo.payMethod.text}
            </Typography>

            {oderInfo.payMethod.id == 1 || oderInfo.payMethod.id == 2 ? (
              <Typography variant="body1" color="#e9e9e9a7">
                Tarjeta Terminada en: {oderInfo.cardNumber}
              </Typography>
            ) : (
              ""
            )}
          </Box>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "16px",
            }}
          >
            <tbody>
              {(oderInfo.products || []).map((item) => (
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
                    style={{
                      width: "220px",
                      padding: "8px",
                      textAlign: "right",
                    }}
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
                        ${item.price * item.quantity}
                      </Typography>
                      <Typography color="#e9e9e9a7" variant="body2">
                        Unitario: ${item.price}
                      </Typography>
                    </Box>
                  </td>
                </tr>
              ))}

              <tr style={{ borderTop: "2px solid black" }}>
                <td colSpan={3} style={{ padding: "8px", textAlign: "right" }}>
                  <Typography color="#e9e9e9a7" variant="h5">
                    Total: ${oderInfo.finalImport}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Volver */}
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              component={NavLink}
              to={routes.mainPage}
              sx={{
                fontSize: isMobile ? "16px" : "18px",
                width: isMobile ? "100%" : "auto",
              }}
            >
              Volver a la tienda
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
