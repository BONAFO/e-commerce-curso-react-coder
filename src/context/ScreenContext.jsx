import { createContext, useContext, useState } from "react";

const ScreenContext = createContext();
export const useScreen = () => useContext(ScreenContext)




export default function ScreenProvider({ children }) {
    const [isMobile, useMobile] = useState(window.innerHeight > window.innerWidth);

    window.onresize = () => {
        useMobile(window.innerHeight > window.innerWidth)
    }


    return <ScreenContext.Provider value={{
        isMobile
    }}>
        {children}
    </ScreenContext.Provider>
}