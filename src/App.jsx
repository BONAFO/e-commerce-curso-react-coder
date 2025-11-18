import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import ScreenProvider from "./context/ScreenContext";
import ProductPage from "./pages/ProductPage";
import MsjsProvider from "./context/LoadingMsjContext";




export default function App() {




    const pages = [
        { txt: 'inicio', icon: <HomeIcon />, action: () => alert("me fui a inicio") },
        { txt: 'contacto', icon: <EmailIcon />, action: () => alert("me fui a contacto") },
    ];

    return (
        <>
            <ScreenProvider>
                <MsjsProvider>
                    <NavBar pages={pages} />
                    {/* <MainPage /> */}
                    <ProductPage />
                </MsjsProvider>
            </ScreenProvider>

        </>
    )
}
