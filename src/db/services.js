import {
  getCategories,
  getProducts,
  getProductsbycatID,
  getProductsbycatName,
  getProductsbyID,
  getProductsbyName,
} from "./mock/service";

export const MODE = "mock";

const service = {
  mock: {
    getProducts,
    getProductsbyName,
    getProductsbyID,
    getProductsbycatID,
    getProductsbycatName,
    getCategories,
  },
};


export default service;
