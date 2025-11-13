import { useState, useEffect, useRef, use } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Autocomplete, TextField } from '@mui/material';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { FilterProductByName } from '../db/products.manage';

//Seach Bar
function InputSeach() {
  const [search, setSearch] = useState('');
  const [response, setResponse ] = useState([]);

  const MAX_VISIBLE_ITEMS = 5; // ← Cambiá esto para ajustar el alto del dropdown


  useEffect(() => {
  //     const response = db.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );

  FilterProductByName(search).then(resp => {
    setResponse([...resp.data])
  }).catch(err => {console.log(err)  })
  }, [search]);

  return (
    <Autocomplete
      freeSolo
      options={response.map(op => op.name)} //opciones
      inputValue={search}
      onInputChange={(event, newInputValue) => {
        setSearch(newInputValue);
      }}
      open={search.length > 0}
      sx={{ width: '50%' }}
      slotProps={{
        listbox: {
          style: {
            maxHeight: `${MAX_VISIBLE_ITEMS * 40}px`, // ← altura estimada por ítem
            overflowY: 'auto',
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Buscar juego"
          variant="outlined"
        />
      )}
    />
  );
}


// Pages Component
function NavButton({ page, action }) {
  return (
    <Button
      color='white'
      sx={{ fontSize: '13px', flexGrow: 1 }}
      onClick={action}
    >
      {page.icon} <span style={{ marginLeft: "10px" }}>{page.txt}</span>
    </Button>
  )

}



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});





export default function NavBar({ pages }) {
  const searchRef = useRef(null);
  const [showStickySearch, setShowStickySearch] = useState(false);

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





  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar ref={searchRef} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Logo />
            <InputSeach />
            <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
              <CartWidget />
            </Box>
          </Toolbar>
          <Toolbar>
            {pages.map((p) => (
              <NavButton key={`${p.txt}-nav`} action={p.action} page={p} />
            ))}
          </Toolbar>
        </Box>
      </AppBar>

      {showStickySearch && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: { xs: 50, sm: 240 }, // ← 0 en mobile, 240 en desktop
            width: { xs: '100%', sm: 'calc(40% - 240px)' },
            zIndex: 1000,
            backgroundColor: 'var(--bs-body-color)',
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