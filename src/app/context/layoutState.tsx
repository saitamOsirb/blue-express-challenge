"use client";
import { useState } from "react";
import { layoutContext } from "./layoutContext";

export function LayoutState({ children }) {
    const [ruta, setRuta] = useState([]);
    
    return <layoutContext.Provider
        value={{
            ruta, setRuta
        }}
    >
        {children}
    </layoutContext.Provider>
}

