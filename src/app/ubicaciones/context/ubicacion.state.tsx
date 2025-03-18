"use client";
import { useState } from "react";
import { ubicacionContext } from "./ubicacion.context";
import { getResident, getUbicaciones } from "../service/ubicaciones.services";

export function UbicacionState({ children }) {
    const [ubicaciones, setUbicaciones] = useState([]);
    const [ubicacion, setUbicacion] = useState({});
    const [residentes, setResidentes] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);

    const setUbicacioneState = async (page: number) => {
        const response = await getUbicaciones(page);
        setUbicaciones(response.results);
        setTotal(response.info.pages);
        setPage(page)
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
            residentes, setResidentes, sendDataToModal,
            page, setPage,
            total, setTotal
        }}
    >
        {children}
    </ubicacionContext.Provider>
}