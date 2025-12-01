import products from "./products.json";
import categories from "./categories.json";

export const dbRoutes = {
  getProducts: "/get-products/",
  getProductsbyName: "/get-products/name/",
  getProductsbyID: "/get-products/id/",
  getProductsbycatID: "/get-products/categorie/",
  getProductsbycatName: "/get-products/categoriename/",

  getCategories: "/get-categories/",
};

// SIMULANDO AXIOS
export const axios = {
  get: async (route, body, head) => {
    return new Promise((resolve, reject) => {
      let resp;
      setTimeout(() => {
        switch (route) {
          case dbRoutes["getProducts"]:
            resp = {
              status: 200,
              data: products,
            };

            if (resp.status == 200) {
              resolve(resp);
            } else {
              reject(resp);
            }

            break;

          case dbRoutes["getProductsbyName"]:
            resp = {
              status: 200,
              data: products.filter((item) =>
                item.name.toLowerCase().includes(head.name.toLowerCase())
              ),
            };

            if (resp.status == 200) {
              resolve(resp);
            } else {
              reject(resp);
            }
            break;

          case dbRoutes["getProductsbyID"]:
            resp = {
              status: 200,
              data: products.filter((item) => item.id == head.id),
            };

            if (resp.status == 200) {
              resolve(resp);
            } else {
              reject(resp);
            }
            break;

          case dbRoutes["getProductsbycatID"]:
            resp = {
              status: 200,
              data: products.filter(
                (item) => item.categorie == head.categorie_id
              ),
            };

            if (resp.status == 200) {
              resolve(resp);
            } else {
              reject(resp);
            }
            break;

          case dbRoutes["getProductsbycatName"]:
            const categorieID = categories.filter(
              (cat) => cat.normalized == head.categorie_name
            )[0].id;

            resp = {
              status: 200,
              data: products.filter((item) => item.categorie == categorieID),
            };

            if (resp.status == 200) {
              resolve(resp);
            } else {
              reject(resp);
            }
            break;

          case dbRoutes["getCategories"]:
            resp = {
              status: 200,
              data: categories,
            };

            if (resp.status == 200) {
              resolve(resp);
            } else {
              reject(resp);
            }

            break;
          default:
            break;
        }
      }, 3000);
    });
  },
};
