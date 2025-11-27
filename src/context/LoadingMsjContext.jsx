import { createContext, useContext } from "react";

const MsjsContext = createContext();
export const useMsjs = () => useContext(MsjsContext)




export default function MsjsProvider({ children }) {
 

    return <MsjsContext.Provider value={{
        loading : "Cargando productos...",
        loading_one : "Cargando producto...",
        no_games : "No tenemos juegos de este tipo... Por ahora..."
    }}>
        {children}
    </MsjsContext.Provider>
}