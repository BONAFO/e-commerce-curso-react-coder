import products from "./products.json";
import categories from "./categories.json";

 const getProducts = async () => {
  return new Promise((resolve, reject) => {
    const resp = {
      status: 200,
      data: products,
    };

    if (resp.status == 200) {
      resolve(resp);
    } else {
      reject(resp);
    }
  });
};

 const getProductsByName = async (name) => {
  return new Promise((resolve, reject) => {
    const resp = {
      status: 200,
      data: products.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      ),
    };

    if (resp.status == 200) {
      resolve(resp);
    } else {
      reject(resp);
    }
  });
};

 const getProductsByID = async (id) => {
  return new Promise((resolve, reject) => {
    const resp = {
      status: 200,
      data: products.filter((item) => item.id == id),
    };

    if (resp.status == 200) {
      resolve(resp);
    } else {
      reject(resp);
    }
  });
};

 const getProductsByCatID = async (categorieID) => {
  return new Promise((resolve, reject) => {
    const resp = {
      status: 200,
      data: products.filter((item) => item.categorie == categorieID),
    };

    if (resp.status == 200) {
      resolve(resp);
    } else {
      reject(resp);
    }
  });
};

 const getProductsByCatName = async (categorieName) => {
  return new Promise((resolve, reject) => {
    const categorieID = categories.filter(
      (cat) => cat.normalized == categorieName
    )[0].id;

    const resp = {
      status: 200,
      data: products.filter((item) => item.categorie == categorieID),
    };

    if (resp.status == 200) {
      resolve(resp);
    } else {
      reject(resp);
    }
  });
};

 const getCategories = async () => {
  return new Promise((resolve, reject) => {
    const resp = {
      status: 200,
      data: categories,
    };

    if (resp.status == 200) {
      resolve(resp);
    } else {
      reject(resp);
    }
  });
};

export default {getProducts,
getProductsByName,
getProductsByID,
getProductsByCatID,
getProductsByCatName,
getCategories,}






