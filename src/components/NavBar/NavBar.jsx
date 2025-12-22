import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

import { NavLink } from "react-router";

import { InputSeach } from "./InputSearch";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { useNavBarHook } from "../../hooks/NavBar";

function NavButton({ page, path }) {
  return (
    <Button
      component={NavLink}
      to={path}
      color="white"
      sx={{ fontSize: "13px", flexGrow: 1 }}
    >
      {page.icon} <span style={{ marginLeft: "10px" }}>{page.txt}</span>
    </Button>
  );
}

export default function NavBar() {
  const { pages, searchRef, showStickySearch , darkTheme} = useNavBarHook();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar
            ref={searchRef}
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            <Logo />
            <InputSeach />
            <Box sx={{ display: "flex", gap: 1, ml: "auto" }}>
              <CartWidget />
            </Box>
          </Toolbar>
          <Toolbar>
            {pages.map((p) => (
              <NavButton key={`${p.txt}-nav`} path={p.path} page={p} />
            ))}
          </Toolbar>
        </Box>
      </AppBar>

      {showStickySearch && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: { xs: 50, sm: 240 }, // ← 0 en mobile, 240 en desktop
            width: { xs: "100%", sm: "calc(40% - 240px)" },
            zIndex: 1000,
            backgroundColor: "var(--bs-body-color)",
            px: 2,
            py: 1,
            boxShadow: 1,
          }}
        >
          <InputSeach />
        </Box>
      )}
    </ThemeProvider>
  );
}
