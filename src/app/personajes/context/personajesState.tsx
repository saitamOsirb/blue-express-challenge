"use client";
import { useEffect, useState } from "react";
import { personajesContext } from "./personajesContext";
import { getEpisodeInfo, getPersonajes } from "../service/Personaje.services";
import { arrayChunk } from "../../shared/tools/generic";

export default function PersonajesState({ children }) {

    const [arrNumber, setArrNumber] = useState([]);
    const [min, setMin] = useState(1);
    const [personajes, setPersonajes] = useState([]);
    const [inputName, setInputName] = useState("");
    const [selectInput, setSelectInput] = useState("");
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);

    const [personaje, setPersonaje] = useState({});
    const [episodios, setEpisodios] = useState([]);

    const setPersonajeState = async (page: number, name: string, status: string) => {
        if (status == "All") { status = ""; }
        const response = await getPersonajes(page, name || "", status || "");
        const listPersonaje: any = arrayChunk(response.results, 5);
        setPersonajes(listPersonaje);
        setPage(page);
        setTotal(response.info.pages);
    };

    const senDataToModal = async (row) => {
        const modal = document.getElementById('my_modal_1');
                                        (modal as any).showModal();
                                        setPersonaje(row);
                                        let episodes = [];
                                        for (let z = 0; z < row.episode.length; z++) {
                                            let episode = await getEpisodeInfo(row.episode[z]);
                                            episodes.push(episode);
                                        }
                                        setEpisodios(episodes);
    }
    useEffect(() => {
        setPersonajeState(1, inputName, selectInput);
    }, []);

    return <personajesContext.Provider
        value={{
            personajes,
            page,
            total,
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
            setPersonajeState,
            senDataToModal
        }}
    >
        {children}
    </personajesContext.Provider>
}

