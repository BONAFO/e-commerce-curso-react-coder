import { Typography, Box } from '@mui/material';

export default function Logo() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mr: 2 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: '#ccc',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}
      >
        Games
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 300,
          color: '#00bcd4',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}
      >
        Hunters
      </Typography>
    </Box>
  );
}
