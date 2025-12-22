import { useParams } from "react-router";
import { useScreen } from "../context/ScreenContext";
import { ProductDesk, ProductMobile } from "../components/ProductDetail";
import { useProductsByID } from "../hooks/Products";
import Spinner from "../components/Spinner";

const header = {
  id: 10,
};

export default function ItemDetailContainer() {
  const { productID } = useParams();
  const { isMobile } = useScreen();
  const { product, spinner } = useProductsByID({
    id: productID,
    isDepend: productID,
  });

  return (
    <>
      <Spinner loading={spinner} />
      {product ? (
        <table style={{ width: "70%", marginLeft: "15%", marginTop: "1%" }}>
          <thead></thead>
          <tbody>
            {isMobile ? (
              <ProductMobile product={product[0]} />
            ) : (
              <ProductDesk product={product[0]} />
            )}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
}
