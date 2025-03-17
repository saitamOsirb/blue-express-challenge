"use client";
import { useEffect, useState } from "react";
import { personajesContext } from "./personajesContext";
import { getPersonajes } from "../service/Personaje.services";
import { arrayChunk } from "../../shared/tools/generic";

export default function PersonajesState({ children }) {

    const [arrNumber, setArrNumber] = useState([]);
    const [min, setMin] = useState(1);
    const [personajes, setPersonajes] = useState([]);
    const [inputName, setInputName] = useState("");
    const [selectInput, setSelectInput] = useState("");
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [width, setWidth] = useState(0);
    const [personaje, setPersonaje] = useState({});
    const [episodios, setEpisodios] = useState([]);


    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    const setPersonajeState = async (page: number, name: string, status: string) => {
        if (status == "All") { status = ""; }
        const response = await getPersonajes(page, name || "", status || "");
        const listPersonaje: any = arrayChunk(response.results, 5);
        setPersonajes(listPersonaje);
        setPage(page);
        setTotal(response.info.pages);
    };
    useEffect(() => {
        setPersonajeState(1, inputName, selectInput);
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return <personajesContext.Provider
        value={{
            personajes,
            page,
            total,
            width,
            setPersonajes,
            setPage,
            setTotal,
            selectInput,
            setSelectInput,
            inputName,
            setInputName,
            arrNumber,
            setArrNumber,
            min,
            setMin,
            personaje,
            setPersonaje,
            episodios,
            setEpisodios,
            setPersonajeState
        }}
    >
        {children}
    </personajesContext.Provider>
}

