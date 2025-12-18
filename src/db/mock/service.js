import products from "./products.json";
import categories from "./categories.json";

export const getProducts = async () => {
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

export const getProductsbyName = async (name) => {
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

export const getProductsbyID = async (id) => {
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

export const getProductsbycatID = async (categorieID) => {
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

export const getProductsbycatName = async (categorieName) => {
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

export const getCategories = async () => {
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
