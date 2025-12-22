import {
  collection,
  getDoc,
  getDocs,
  doc,
  or,
  query,
  where,
  and,
  addDoc,
} from "firebase/firestore";
import { db } from "./conection";

/**
 * Obtiene todos los documentos de la colección "products" en Firestore.
 *
 * @returns {Promise<Array<{id: string, [key: string]: any}>>}
 * Un array con los documentos, cada uno con su id y datos.
 */
const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { data: products };
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    throw error;
  }
};

/**
 * Obtiene documentos de la colección "products" filtrados por nombre.
 *
 * @param {string} name - Valor del campo "nombre" a buscar.
 * @returns {Promise<Array<{id: string, [key: string]: any}>>}
 * Un array de objetos con el id y los datos de cada documento que coincide.
 */
const getProductsByName = async (name) => {
  try {
    name = name.trim();
    if (name.length != 0) {
      const { data } = await getProducts();

      return {
        data: data.filter(
          (prod) =>
            prod.name.toLowerCase() === name.toLowerCase() ||
            prod.name.toLowerCase().includes(name.toLowerCase())
        ),
      };
    }
  } catch (error) {
    console.error("Error obteniendo productos por nombre:", error);
    throw error;
  }
};

/**
 * Obtiene un documento de la colección "products" por su ID (document ID).
 *
 * @param {string} id - ID del documento en Firestore.
 * @returns {Promise<{data: {id: string, [key: string]: any} | null}>}
 * El documento con sus datos en { data }, o { data: null } si no existe.
 */
const getProductsByID = async (id) => {
  try {
    const ref = doc(db, "products", id); // referencia directa al doc
    const snapshot = await getDoc(ref); // obtener snapshot

    if (snapshot.exists()) {
      return { data: [{ id: snapshot.id, ...snapshot.data() }] };
    } else {
      return { data: null };
    }
  } catch (error) {
    console.error("Error obteniendo producto por ID:", error);
    throw error;
  }
};

/**
 * Obtiene documentos de la colección "products" filtrados por categoría.
 *
 * @param {string} categorieID - ID de la categoría a buscar dentro del array "categorie".
 * @returns {Promise<Array<{id: string, [key: string]: any}>>}
 * Un array de objetos con el id y los datos de cada documento que coincide.
 */
const getProductsByCatID = async (categorieID) => {
  try {
    const q = query(
      collection(db, "products"),
      where("categorie", "array-contains", categorieID) // ahora "categorie" es un []
    );

    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { data: products };
  } catch (error) {
    console.error("Error obteniendo productos por categoría:", error);
    throw error;
  }
};

/**
 * Obtiene productos filtrados por nombre de categoría en normalized_es o normalized_en.
 *
 * @param {string} categorieName - Nombre normalizado de la categoría (puede estar en español o inglés).
 * @returns {Promise<Array<{id: string, [key: string]: any}>>}
 * Array de productos que pertenecen a esa categoría.
 */
const getProductsByCatName = async (categorieName) => {
  try {
    let q = query(
      collection(db, "categories"),
      where("normalized_es", "==", categorieName)
    );

    let snapshot;

    const catSnapshotEs = await getDocs(q);

    snapshot = catSnapshotEs;

    if (catSnapshotEs.docs.length === 0) {
      q = query(
        collection(db, "categories"),
        where("normalized_en", "==", categorieName)
      );

      const catSnapshotEn = await getDocs(q);

      if (catSnapshotEn.docs.length === 0) {
        return { data: [] };
      }

      snapshot = catSnapshotEn;
    }

    return await getProductsByCatID(snapshot.docs[0].id);

    // // 1. Buscar la categoría por normalized_es
    // const catQueryEs = query(
    //   collection(db, "categories"),
    //   where("normalized_es", "==", categorieName)
    // );

    // console.log("catQueryEs",catQueryEs.docs);

    // console.log(categorieName);

    // const catSnapshotEs = await getDocs(catQueryEs);

    // // 2. Buscar la categoría por normalized_en
    // const catQueryEn = query(
    //   collection(db, "categories"),
    //   where("normalized_en", "==", "shooting")
    // );

    // console.log("catQueryEn",catQueryEn.docs);

    // const catSnapshotEn = await getDocs(catQueryEn);

    // // Combinar resultados
    // const catDocs = [...catSnapshotEs.docs, ...catSnapshotEn.docs];

    // if (catDocs.length === 0) {
    //   return { data: [] }; // no existe esa categoría
    // }

    // // Tomamos el primer resultado (suponiendo nombres únicos)
    // const categoryDoc = catDocs[0];
    // const categoryID = categoryDoc.id;

    // // 3. Buscar productos con ese categorieID
    // const prodQuery = query(
    //   collection(db, "products"),
    //   where("categorie", "==", categoryID)
    // );
    // const prodSnapshot = await getDocs(prodQuery);

    // const products = prodSnapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }));

    // return { data: products };
  } catch (error) {
    console.error("Error obteniendo productos por nombre de categoría:", error);
    throw error;
  }
};

/**
 * Obtiene todos los documentos de la colección "categories" en Firestore.
 *
 * @returns {Promise<Array<{id: string, [key: string]: any}>>}
 * Un array con las categorías, cada una con su id y datos.
 */
const getCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { data: categories };
  } catch (error) {
    console.error("Error obteniendo categorías:", error);
    throw error;
  }
};

/**
 * Guarda una nueva entrada en la colección "entradas" de Firestore.
 *
 * @param {Object} data - Los datos de la entrada a guardar.
 *
 * @returns {Promise<string>}
 * El ID del documento creado en Firestore.
 */
async function saveSell(data) {
  try {
    const docRef = await addDoc(collection(db, "orders"), data);
    return { data: docRef.id };
  } catch (error) {
    console.error("Error guardando la factura:", error);
    throw error;
  }
}

/**
 * Obtiene una orden desde la colección "orders" de Firestore por su ID.
 *
 * @param {string} orderID - El ID del documento de la orden a buscar.
 *
 * @returns {Promise<Object|null>}
 * Un objeto con los datos de la orden y su ID si existe,
 * o `null` si no se encuentra el documento.
 *
 * @throws {Error} Si ocurre un error al consultar Firestore.
 */

export async function getOrder(orderID) {
  try {
    const orderRef = doc(db, "orders", orderID);
    const orderSnap = await getDoc(orderRef);

    if (orderSnap.exists()) {
      return { data: { id: orderSnap.id, ...orderSnap.data() } };
    } else {
      console.log("No existe la orden con ese ID");
      return null;
    }
  } catch (error) {
    console.error("Error obteniendo la orden:", error);
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
  getOrder,
};
