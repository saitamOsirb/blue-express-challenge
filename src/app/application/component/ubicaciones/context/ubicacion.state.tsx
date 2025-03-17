"use client";
import { useState } from "react";
import { ubicacionContext } from "./ubicacion.context";
import { getUbicaciones } from "../service/ubicaciones.services";
import { arrayChunk } from "@/app/shared/tools/generic";

export function UbicacionState({ children }) {
    const [ubicaciones, setUbicaciones] = useState([]);
    const [residentes, setResidentes] = useState([]);

    const setUbicacioneState = async (page: number, name: string, status: string) => {
        const response = await getUbicaciones();
        setUbicaciones(response.results);
    };

   
    return <ubicacionContext.Provider
        value={{
            ubicaciones, setUbicaciones, setUbicacioneState, residentes, setResidentes
        }}
    >
        {children}
    </ubicacionContext.Provider>
}


