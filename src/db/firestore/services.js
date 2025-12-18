import { collection, getDocs } from "firebase/firestore";
import { db } from "./conection";

/**
 * Obtiene todos los documentos de una colección
 * @param {string} collectionName - Nombre de la colección
 * @returns {Promise<Array>} - Array con los documentos { id, ...data }
 */
export async function getCollectionData(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return docs; 
  } catch (error) {
    console.error("Error obteniendo colección:", error);
    throw error;
  }
}
