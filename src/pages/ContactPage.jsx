import { Box, Typography, Stack, Link, Divider, Paper } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function ContactPage() {
  return (
    <Box sx={{ maxWidth: 900,  mx: "auto", px: 3, py: 4 }}>
      <Typography color="#e9e9e9a7" variant="h4" gutterBottom>
        Contacto
      </Typography>

      <Paper variant="outlined"  sx={{ backgroundColor: "#51515121", p: 3, mb: 3 }}>
        <Typography color="#e9e9e9a7" variant="h6" gutterBottom>
          Teléfonos
        </Typography>

        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <WhatsAppIcon color="success" />
            <Typography color="#e9e9e9a7" variant="body1" >
              WhatsApp: +54 9 11 1234-5678
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <PhoneIcon color="primary" />
            <Typography color="#e9e9e9a7" variant="body1">
              Teléfono fijo: (011) 4321-0000
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <SmartphoneIcon color="info" />
            <Typography color="#e9e9e9a7" variant="body1">
              Celular: +54 9 11 8765-4321
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <Paper variant="outlined" sx={{ backgroundColor: "#51515121", p: 3 }}>
        <Typography color="#e9e9e9a7" variant="h6" gutterBottom>
          Redes sociales
        </Typography>

        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <TwitterIcon sx={{ color: "#1DA1F2" }} />
            <Link href="#" Typography color="#e9e9e9a7" underline="hover">
              <Typography color="#e9e9e9a7">X (Twitter): @GameHunters</Typography> 
            </Link>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <InstagramIcon sx={{ color: "#E1306C" }} />
            <Link href="#" underline="hover">
            <Typography color="#e9e9e9a7">Instagram: @GameHunters</Typography> 
              
            </Link>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <FacebookIcon sx={{ color: "#1877F2" }} />
            <Link href="#" underline="hover">
            <Typography color="#e9e9e9a7">Facebook: /GameHunters</Typography> 
              
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Typography color="#e9e9e9a7" variant="caption">
          Todos los datos son ficticios y de demostración.
        </Typography>
      </Paper>
    </Box>
  );
}
