import { useScreen } from "../context/ScreenContext";
import WaitingMsj from "../components/WaitingMsj";
import { ProductDesk, ProductMobile } from "../components/Product";
import { useProductsByID } from "../hooks/Products";

const header = {
  id: 10,
};

export default function ProductPage() {
  const { isMobile } = useScreen();
  const { product, waitMsj } = useProductsByID({  id:header.id   });

  return (
    <>
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
        <WaitingMsj waitMsj={waitMsj} />
      )}
    </>
  );
}
