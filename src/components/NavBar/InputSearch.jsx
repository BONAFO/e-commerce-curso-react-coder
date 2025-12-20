import { useState } from "react";

import { Autocomplete, TextField } from "@mui/material";
import { NavLink } from "react-router";

import { useInputSeach } from "../../hooks/Products";
import { routes } from "../../router/router";

export function InputSeach() {
  const [search, setSearch] = useState("");

  const MAX_VISIBLE_ITEMS = 5; // ← Cambiá esto para ajustar el alto del dropdown

  const {
    products,
    input,
    setInput,
    wait,
    setWait,
    searching,
    setSearching,
  } = useInputSeach({name : search, isDepend: search});

  return (
    <Autocomplete
      freeSolo
      options={Array.isArray(products) ? products : []}
      getOptionLabel={(option) => option.name ?? ""}
      inputValue={input}
      onInputChange={(event, newInputValue) => {
        clearTimeout(wait);
        setSearching(true);
        setInput(newInputValue);
        setWait(
          setTimeout(() => {
            setSearch(newInputValue);
            setSearching(false);
          }, 2000)
        );
      }}
      open={input.length > 0}
      sx={{ width: "50%" }}
      slotProps={{
        listbox: {
          style: {
            maxHeight: `${MAX_VISIBLE_ITEMS * 40}px`,
            overflowY: "auto",
          },
        },
      }}
      loading={input.length > 0 && searching}
      loadingText="Buscando..."
      noOptionsText="Sin resultados"
      renderOption={(props, option) => (
        <>
          <NavLink
            key={`nav-item-${option.id}`}
            to={routes.productDetail.replace(":productID", option.id)}
            onClick={() => setSearch("")}
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
              display: "block",
            }}
          >
            <li {...props}>{option.name}</li>
          </NavLink>
        </>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Buscar juego" variant="outlined" />
      )}
    />
  );
}
