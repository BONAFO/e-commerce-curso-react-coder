import { useState, useEffect, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import { routes } from "../router/router";
import { createTheme } from "@mui/material";
import DvrIcon from '@mui/icons-material/Dvr';

export const useNavBarHook = () => {
  const pages = [
    {
      txt: "inicio",
      icon: <HomeIcon />,
      path: routes.mainPage,
    },
        {
      txt: "buscar pedido",
      icon: <DvrIcon />,
      path: routes.searchOrder,
    },
    {
      txt: "contacto",
      icon: <EmailIcon />,
      path: routes.contact,
    },
  ];

  const searchRef = useRef(null);
  const [showStickySearch, setShowStickySearch] = useState(false);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickySearch(!entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    if (searchRef.current) {
      observer.observe(searchRef.current);
    }

    return () => {
      if (searchRef.current) observer.unobserve(searchRef.current);
    };
  }, []);

  return {
    pages,
    searchRef,
    darkTheme,
    showStickySearch,
    setShowStickySearch,
  };
};
