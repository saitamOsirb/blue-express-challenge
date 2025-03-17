"use client";
import { useState } from "react";
import { ubicacionContext } from "./ubicacion.context";
import { getResident, getUbicaciones } from "../service/ubicaciones.services";

export function UbicacionState({ children }) {
    const [ubicaciones, setUbicaciones] = useState([]);
    const [ubicacion, setUbicacion] = useState({});
    const [residentes, setResidentes] = useState([]);

    const setUbicacioneState = async (page: number, name: string, status: string) => {
        const response = await getUbicaciones();
        setUbicaciones(response.results);
    };

    const sendDataToModal = async (row: any) => {
        const modal = document.getElementById('modalResidentes');
        (modal as any).showModal();
        let residentes = [];
        for (let z = 0; z < row.residents.length; z++) {
            residentes.push(await getResident(row.residents[z]));
        }
        setResidentes(residentes);
        setUbicacion(row);
    }

    return <ubicacionContext.Provider
        value={{
            ubicaciones, setUbicaciones, setUbicacioneState,
            ubicacion, setUbicacion,
            residentes, setResidentes, sendDataToModal
        }}
    >
        {children}
    </ubicacionContext.Provider>
}


