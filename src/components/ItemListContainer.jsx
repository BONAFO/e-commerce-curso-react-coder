import { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import categories from "../db/categories.json";
import ProductCard from "./ProductCard";
import WaitingMsj from "./WaitingMsj";
import { useProductMain } from "../context/ProductsMainContext";

function SidebarFilter() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [collapsed, setCollapsed] = useState(isMobile); // collapsed by default on mobile
  const { setCategorie , setProducts} = useProductMain();

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  
  const handleFilter = (catID) => {
    setProducts(null)
    setCategorie(catID)
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: "80vh", // ← adjustable height
        width: collapsed ? 60 : 240,
        bgcolor: "#121212",
        color: "#fff",
        borderRight: "1px solid #333",
        transition: "width 0.3s ease",
        overflow: "hidden",
        zIndex: 1000,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: collapsed ? "none" : "block" }}
        >
          Categorias
        </Typography>setProducts
        <IconButton onClick={toggleSidebar} sx={{ color: "#fff" }}>
          {collapsed ? (
            <KeyboardDoubleArrowRightIcon />
          ) : (
            <KeyboardDoubleArrowLeftIcon />
          )}
        </IconButton>
      </Box>

      <Divider sx={{ mb: 1, display: collapsed ? "none" : "block" }} />

      <List sx={{ overflowY: "auto", maxHeight: "calc(80vh - 60px)" }}>
        {categories.map((cat) => (
          <ListItemButton
            key={cat.id}
            onClick={() => {
              handleFilter(cat.id);
            }}
            sx={{ justifyContent: collapsed ? "center" : "flex-start" }}
          >
            <ListItemText
              primary={cat.name}
              sx={{ display: collapsed ? "none" : "block" }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default function ItemListContainer({}) {
  const {products, waitMsj} = useProductMain();

  return (
    <>
      {Array.isArray(products) ? (
        <>
          <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <Box
              sx={{
                flexShrink: 0,
                transition: "width 0.3s ease",
              }}
            >
              <SidebarFilter />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                p: 3,
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "flex-start",
                minWidth: 0,
              }}
            >
              {products.map((game) => (
                <ProductCard game={game} />
              ))}
            </Box>
          </Box>
        </>
      ) : (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          <SidebarFilter/>
          <Box
            sx={{
              flexGrow: 1,
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <WaitingMsj waitMsj={waitMsj} />
          </Box>
        </Box>
      )}
    </>
  );
}
