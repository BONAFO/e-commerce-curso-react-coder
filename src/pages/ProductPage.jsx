import { useEffect, useState } from "react";
import { useScreen } from "../context/ScreenContext";
import { FilterProductByID } from "../db/products.manage";
import { useMsjs } from "../context/LoadingMsjContext";
import WaitingMsj from "../components/WaitingMsj";
import { ProductDesk, ProductMobile } from "../components/Product";

const header = {
    id: 10
};



export default function ProductPage() {
    const { isMobile } = useScreen();
    const [product, setProduct] = useState(null);
    let waitMsj = (useMsjs()).loading_one;
    useEffect(() => {
        FilterProductByID(header.id).then(response => setProduct(response.data)).catch(err => waitMsj = err.error)

    }, []);
    return (
        <>
            {
                product

                    ? (
                        <table style={{width : "70%", marginLeft : "15%", marginTop: "1%"}}>
                            <thead></thead>
                            <tbody>
                                {isMobile
                                    ? <ProductMobile product={product[0]} />
                                    : <ProductDesk product={product[0]} />
                                }
                            </tbody>
                        </table>
                    )
                    : <WaitingMsj waitMsj={waitMsj} />
            }
        </>
    )
}   