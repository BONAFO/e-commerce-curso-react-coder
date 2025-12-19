import { useEffect, useState } from "react";
import service, { MODE } from "../db/services";

const { getCategories } = service[MODE];

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

  useEffect(() => {
    setSpinner(true);
    getCategories()
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? undefined
        : categories
      : isDepend,
  ]
);


  return {
    setCategories,
    categories,
    spinner,
    setSpinner,
  };
};
