import { useEffect, useState } from "react";
import service, { MODE } from "../db/services";
import { useMsjs } from "../context/LoadingMsjContext";

const {
  getProducts,
  getProductsByName,
  getProductsByID,
  getProductsByCatID,
  getProductsByCatName,
} = service[MODE];

export const useProducts = ({ isDepend = false }) => {
  const [products, setProducts] = useState(null);
  const [waitMsj, setMsj] = useState(useMsjs().loading);

  const handleError = (response) => {
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setProducts([...response.data]);
  };

  useEffect(() => {
    getProducts()
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? undefined
        : products
      : isDepend,
  ]);

  return {
    setProducts,
    products,
    waitMsj,
    setMsj,
  };
};

export const useInputSeach = ({ isDepend = false, name = "" }) => {
  const [products, setProducts] = useState(null);
  const [input, setInput] = useState("");
  const [wait, setWait] = useState(null);
  const [searching, setSearching] = useState(false);

  const handleError = (response) => {
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setProducts([...response.data]);
  };

  useEffect(() => {
    getProductsByName(name)
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? undefined
        : products
      : isDepend,
  ]);

  return {
    products,
    setProducts,
    input,
    setInput,
    wait,
    setWait,
    searching,
    setSearching,
  };
};

export const useProductsByID = ({ isDepend = false, id }) => {
  const [product, setProduct] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const handleError = (response) => {
    setSpinner(false);
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setProduct([...response.data]);
    setSpinner(false);
  };

  useEffect(() => {
    setSpinner(true);
    getProductsByID(id)
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? undefined
        : product
      : isDepend,
  ]);

  return {
    setProduct,
    product,
    spinner,
    setSpinner,
  };
};
export const useProductsByCategorieID = ({ isDepend = false, id }) => {
  const [products, setProducts] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const handleError = (response) => {
    setSpinner(false);
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setSpinner(false);
    setProducts([...response.data]);
  };

  useEffect(() => {
    setSpinner(true);
    const functionToUse = !id ? getProducts : getProductsByCatID;

    functionToUse(id)
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? undefined
        : id
      : isDepend,
  ]);

  return {
    setProducts,
    products,
    spinner,
    setSpinner,
  };
};

export const useProductsByCategorieName = ({ isDepend = false, name }) => {
  const [products, setProducts] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const handleError = (response) => {
    setSpinner(false);
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setSpinner(false);
    setProducts([...response.data]);
  };

  useEffect(() => {
    setSpinner(true);
    getProductsByCatName(name)
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? undefined
        : products
      : isDepend,
  ]);

  return {
    setProducts,
    products,
    spinner,
    setSpinner,
  };
};

export const useRouterCategories = ({ isDepend = false, id }) => {
  const [products, setProducts] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const handleError = (response) => {
    setSpinner(false);
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setSpinner(false);
    setProducts([...response.data]);
  };

  useEffect(() => {
    !id
      ? getProducts()
          .then((resp) => handleSuccess(resp))
          .catch((err) => handleError(err))
      : getProductsByCatID(id)
          .then((resp) => {
            resp.data.length > 0
              ? handleSuccess(resp)
              : getProductsByCatName(id)
                  .then((resp) => handleSuccess(resp))
                  .catch((err) => handleError(err));
          })
          .catch((err) => handleError(err));
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? undefined
        : id
      : isDepend,
  ]);

  return {
    setProducts,
    products,
    spinner,
    setSpinner,
  };
};
