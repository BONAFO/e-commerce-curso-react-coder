import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import { useRef } from "react";



export default function App() {




    const pages = [
        { txt: 'inicio', icon: <HomeIcon />, action: () => alert("me fui a inicio") },
        { txt: 'contacto', icon: <EmailIcon />, action: () => alert("me fui a contacto") },
    ];

    return (
        <>
            <NavBar pages={pages} />
            <MainPage />
        

        </>
    )
}
