import { useParams } from "react-router";
import { SearchOrder } from "../components/SearchOrder";
import ShowOrder from "../components/ShowOrder";

export default function ShowOrderContainer(){
    const {orderID} = useParams();
    return <>
    { orderID == null ? <SearchOrder/> : <ShowOrder/>}
    </>
}