import products from "../db/products.json"

export const GetProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve({
                    status: 200,
                    data: products
                })
            }, 3000);
        } else {
            setTimeout(() => {
                reject({
                    status: 500,
                    error: "Internal Error"
                })
            }, 3000);

        }
    })
}

export const FilterProductByName = (name) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve({
                    status: 200,
                    data: products.filter((item) =>
                        item.name.toLowerCase().includes(name.toLowerCase())
                    )
                })
            }, 3000);
        } else {
            setTimeout(() => {
                reject({
                    status: 500,
                    error: "Internal Error"
                })
            }, 3000);

        }
    })
}