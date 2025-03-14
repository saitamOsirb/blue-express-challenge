"use client";
import { useEffect, useState } from "react";
import { personajesContext } from "./personajesContext";
import { getPersonajes } from "../service/Personaje.services";
import { arrayChunk } from "@/app/shared/tools/generic";

export function PersonajesState({children}) {
    const [personajes, setPersonajes] = useState([]);
    const setPersonajeState = async (page: number) => {
        let response = await getPersonajes(page);
        let listPersonaje: any = arrayChunk(response.results, 5);
        setPersonajes(listPersonaje);
    };
    useEffect(() => {
        setPersonajeState(1);
    }, []);
    return <personajesContext.Provider
        value={{
            personajes,
            setPersonajes
        }}
    >
        {children}
    </personajesContext.Provider>
}

