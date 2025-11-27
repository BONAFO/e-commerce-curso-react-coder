import { PacmanLoader } from "react-spinners";
import { Box } from "@mui/material";

export default function Spinner({ loading = true }) {
  return (
    <>
      {loading ? (
        <Box
          sx={{
            position: "fixed",   // se mantiene fijo en pantalla
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#00000067",  // fondo oscuro opcional
            zIndex: 1300,        // encima de otros elementos
          }}
        >
          <PacmanLoader
            color="#36d7b7" // celeste/verde agua
            loading={loading}
            size={25}
          />
        </Box>
      ) : null}
    </>
  );
}
