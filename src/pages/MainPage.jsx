import ItemListContainer from "../components/ItemListContainer";
import Nav from "../components/NavBar";

export default function MainPage() {
    return (
        <>
        <Nav pages={[]} />
        <ItemListContainer waitMsj={"Cargando productos..."}/>
        </>
    )
}