import products from "./products.json";
import categories from "./categories.json";

const getProducts = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = {
        status: 200,
        data: products,
      };

      if (resp.status == 200) {
        resolve(resp);
      } else {
        reject(resp);
      }
    }, 2000);
  });
};

const getProductsByName = async (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
    }, 2000);
  });
};

const getProductsByID = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = {
        status: 200,
        data: products.filter((item) => item.id == id),
      };

      if (resp.status == 200) {
        resolve(resp);
      } else {
        reject(resp);
      }
    }, 2000);
  });
};

const getProductsByCatID = async (categorieID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = {
        status: 200,
        data: products.filter((item) => item.categorie == categorieID),
      };

      if (resp.status == 200) {
        resolve(resp);
      } else {
        reject(resp);
      }
    }, 2000);
  });
};

const getProductsByCatName = async (categorieName) => {
  console.log(categorieName);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
    }, 2000);
  });
};

const getCategories = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = {
        status: 200,
        data: categories,
      };

      if (resp.status == 200) {
        resolve(resp);
      } else {
        reject(resp);
      }
    }, 2000);
  });
};

const saveSell = async (data) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const resp = {
          status: 200,
          data: categories,
        };

        if (resp.status == 200) {
          resolve(resp);
        } else {
          reject(resp);
        }
      }, 2000);
    });
  } catch (error) {
    console.error("Error guardando la factura:", error);
    throw error;
  }
};

export async function getOrder(orderID) {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (resp.status == 200) {
          resolve(null);
        } else {
          reject(null);
        }
      }, 2000);
    });
  } catch (error) {
    console.error("Error guardando la factura:", error);
    throw error;
  }
}

export default {
  getProducts,
  getProductsByName,
  getProductsByID,
  getProductsByCatID,
  getProductsByCatName,
  getCategories,
  saveSell,
  getOrder
};
