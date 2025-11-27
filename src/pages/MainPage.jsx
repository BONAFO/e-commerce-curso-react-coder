import ItemListContainer from "../containers/ItemListContainer";
import ProductMainProvider from "../context/ProductsMainContext";

export default function MainPage() {
  return (
    <>
      <ProductMainProvider>
        <ItemListContainer />
      </ProductMainProvider>
    </>
  );
}
