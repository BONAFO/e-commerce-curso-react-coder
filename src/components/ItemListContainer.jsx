import { Typography } from "@mui/material";
import { useState } from "react";

export default function ItemListContainer({ waitMsj }) {
    const [products , setProducts ] = useState([]);

    return (
        <>
        {products.length > 0 
        ? ("")
        : (
            <Typography color="var(--bs-font-color)" sx={{ fontSize: "20px", marginTop: "50px" , marginLeft: "20px"}}>{waitMsj}</Typography>
        )
        }
        </>
    )
}   