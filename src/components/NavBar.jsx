import { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import { Autocomplete, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CartWidget from './CartWidget';
import Logo from './Logo';


//Seach Bar
function InputSeach() {
  const [valor, setValor] = useState('');

  const baseDatos = [
    { name: 'Call of Duty 2', alias: 'cod' },
    { name: 'Battlefield 3', alias: 'b3' },
    { name: 'Battlefield 4', alias: 'b4' },
    { name: 'Need For Speed Carbon', alias: 'nfs' },
  ];

  // Filtra por name o alias
  const opcionesFiltradas = baseDatos.filter((item) =>
    item.name.toLowerCase().includes(valor.toLowerCase()) ||
    item.alias.toLowerCase().includes(valor.toLowerCase())
  );

  return (
    <Autocomplete
      freeSolo
      options={opcionesFiltradas.map(op => op.name)}
      inputValue={valor}
      onInputChange={(event, newInputValue) => {
        setValor(newInputValue);
      }}
      sx={{ width: '50%' }}
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



  pages = [
    { txt: 'inicio', icon: <HomeIcon />, action: () => alert("me fui a inicio") },
    { txt: 'contacto', icon: <EmailIcon />, action: () => alert("me fui a contacto") },
  ];

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
            position: 'sticky',
            top: 0,
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