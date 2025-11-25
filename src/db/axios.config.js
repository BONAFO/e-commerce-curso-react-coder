import products from "./products.json";

export const errorDict = {
  db: {
    404: "Ruta no encontrada",
    500: "Error en el Servidor",
    403: "No tienes permisos para hacer eso.",
  },
};

export const dbRoutes = {
  getProducts: "/get-products/",
  getProductsbyName: "/get-products/name/",
  getProductsbyID: "/get-products/id/",
    getProductsbycatID: "/get-products/categorie/",
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
              data: products.filter((item) => item.categorie == head.categorie),
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
