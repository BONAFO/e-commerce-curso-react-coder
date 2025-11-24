import { useEffect, useState } from "react";
import { axios, dbRoutes, errorDict } from "../db/axios.config";
import { useMsjs } from "../context/LoadingMsjContext";

export const useProducts = ({ isDepend = false }) => {
  const [products, setProducts] = useState(null);
  const [waitMsj, setMsj] = useState(useMsjs().loading);

  const handleError = (response) => {
    setMsj(errorDict.db[response.status]);
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
    typeof isDepend == "boolean" ? (isDepend ? products : isDepend) : isDepend,
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
    throw Error(errorDict[response.status]);
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
    typeof isDepend == "boolean" ? (isDepend ? products : isDepend) : isDepend,
  ]);

  return {
    setProducts,
    products,
  };
};

export const useProductsByID = ({ isDepend = false, id }) => {
  const [product, setProduct] = useState(null);
  const [waitMsj, setMsj] = useState(useMsjs().loading_one);

  const handleError = (response) => {
    throw Error(errorDict[response.status]);
  };
  const handleSuccess = (response) => {
    setProduct([...response.data]);
  };

  const dbCall = () => {
    axios
      .get(dbRoutes["getProductsbyID"], {}, { id })
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  };

  useEffect(dbCall, [
    typeof isDepend == "boolean" ? (isDepend ? product : isDepend) : isDepend,
  ]);

  return {
    setProduct,
    product,
    waitMsj,
    setMsj,
  };
};
