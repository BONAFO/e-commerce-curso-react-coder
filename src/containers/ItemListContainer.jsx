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

import ProductCard from "../components/ProductCard";
import WaitingMsj from "../components/WaitingMsj";


import { useMsjs } from "../context/LoadingMsjContext";
import Spinner from "../components/Spinner";
import { NavLink, useParams } from "react-router";
import {  
  useProductsByCategorieID,
  useProductsByCategorieName,
} from "../hooks/Products";

import Capitalizate from "../functions/capitalizate";
import { useCategories } from "../hooks/Categories";
import { routes } from "../router/router";

function SidebarFilter({categories}) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { id } = useParams();
  const [collapsed, setCollapsed] = useState(isMobile);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const handleFilter = (catID) => {
    setProducts(null);
    setCategorie(catID);
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
        </Typography>

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
          component={NavLink}
            key={cat.id}
            to={routes.mainPageCategorie.replace(":id", cat.id)}
            sx={{ justifyContent: collapsed ? "center" : "flex-start" }}
          >
            <ListItemText
              primary={Capitalizate(cat.name)}
              sx={{
                display: collapsed ? "none" : "block",
                color: (id == cat.id) || (id == undefined && cat.id == -1) ? "#a5e7ffff" : "#ffffff",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default function ItemListContainer({}) {
  const { id } = useParams();

  const categorieSelected =
    id == undefined ? ["id", -1] : isNaN(id) ? ["name", id] : ["id", id];

  const usedHook =
    categorieSelected[0] == "id"
      ? useProductsByCategorieID
      : useProductsByCategorieName;

  const { products , spinner} = usedHook({
    isDepend: categorieSelected[1],
    [categorieSelected[0]]: categorieSelected[1],
  });

  const {categories, spinner: cat_spinner} = useCategories({});

  const { no_games } = useMsjs();

  return (
    <>
      <Spinner loading={cat_spinner && spinner} />
      {Array.isArray(products) && Array.isArray(categories) ? (
        <>
          <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <Box
              sx={{
                flexShrink: 0,
                transition: "width 0.3s ease",
              }}
            >
              <SidebarFilter categories={categories}/>
            </Box>

            {products.length > 0 ? (
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
                  <ProductCard key={game.id} game={game} />
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  flexGrow: 1,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <WaitingMsj waitMsj={no_games} />
              </Box>
            )}
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
}
