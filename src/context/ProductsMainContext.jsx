import { createContext, useContext, useState } from "react";
import { useProductsByCategorie } from "../hooks/Products";

const ProductMainContext = createContext();
export const useProductMain = () => useContext(ProductMainContext);

export default function ProductMainProvider({ children }) {
  // const [products, useProducts] = useState;

  const [categorieSelected, setCategorie] = useState(-1);

  const hookResponse = useProductsByCategorie({
    isDepend: categorieSelected,
    catID: categorieSelected,
  });


  return (
    <ProductMainContext.Provider
      value={{
        categorieSelected,
        setCategorie,
        ...hookResponse
      }}
    >
      {children}
    </ProductMainContext.Provider>
  );
}
