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
  capitalize,
} from "@mui/material";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import { NavLink, useParams } from "react-router";


import { routes } from "../../router/router";



export default function SidebarFilter({categories}) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { id } = useParams();
  const [collapsed, setCollapsed] = useState(isMobile);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };


  const lang ="es";
  categories = categories.sort((a, b) => a[`name_${lang}`].localeCompare(b[`name_${lang}`]));
  categories = [categories.filter(cat => cat.normalized_es == "todos")[0],...categories.filter(cat => cat.normalized_es != "todos")]

  
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
              primary={capitalize(cat[`name_${lang}`])}
              sx={{
                display: collapsed ? "none" : "block",
                color: (id == cat.id) || (id == undefined && cat.name_es == "todos") ? "#a5e7ffff" : "#ffffff",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}