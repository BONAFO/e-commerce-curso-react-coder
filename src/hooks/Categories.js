import { useEffect, useState } from "react";
import { axios, dbRoutes } from "../db/axios.config";

export const useCategories = ({ isDepend = false }) => {
  const [categories, setCategories] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const handleError = (response) => {
    setSpinner(false);
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setSpinner(false);
    setCategories([...response.data]);
  };

  const dbCall = () => {
    axios
      .get(dbRoutes["getCategories"])
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  };

  useEffect(() => {
    setSpinner(true);
    dbCall();
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? categories
        : isDepend
      : isDepend,
  ]);

  return {
    setCategories,
    categories,
    spinner,
    setSpinner,
  };
};
