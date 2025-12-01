import { useEffect, useState } from "react";
import { axios, dbRoutes } from "../db/axios.config";
import { useMsjs } from "../context/LoadingMsjContext";

export const useProducts = ({ isDepend = false }) => {
  const [products, setProducts] = useState(null);
  const [waitMsj, setMsj] = useState(useMsjs().loading);

  const handleError = (response) => {
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setProducts([...response.data]);
  };

  const dbCall = () => {
    axios
      .get(dbRoutes["getProducts"])
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  };

  useEffect(dbCall, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? products
        : isDepend
      : isDepend,
  ]);

  return {
    setProducts,
    products,
    waitMsj,
    setMsj,
  };
};

export const useProductsByName = ({ isDepend = false, name }) => {
  const [products, setProducts] = useState(null);

  const handleError = (response) => {
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setProducts([...response.data]);
  };

  const dbCall = () => {
    axios
      .get(dbRoutes["getProductsbyName"], {}, { name })
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  };

  useEffect(dbCall, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? products
        : isDepend
      : isDepend,
  ]);

  return {
    setProducts,
    products,
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

  const dbCall = () => {
    axios
      .get(dbRoutes["getProductsbyID"], {}, { id })
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  };

  useEffect(() => {
    setSpinner(true);
    dbCall();
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? product
        : isDepend
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

  const dbCall = () => {
    axios
      .get(
        dbRoutes[id == -1 ? "getProducts" : "getProductsbycatID"],
        {},
        { categorie_id: id }
      )
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  };


  useEffect(() => {
    setSpinner(true);
    dbCall();
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? product
        : isDepend
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

  const dbCall = () => {
    axios
      .get(
        dbRoutes["getProductsbycatName"],
        {},
        { categorie_name : name}
      )
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  };


  useEffect(() => {
    setSpinner(true);
    dbCall();
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? product
        : isDepend
      : isDepend,
  ]);

  return {
    setProducts,
    products,
    spinner,
    setSpinner,
  };
};
