"use client";
import { useEffect, useState } from "react";
import { EpisodioContext } from "./episodioContext";
import { getEpisodios } from "../service/episodios.services";


export function EpisodioState({ children }) {
    const [episodios, setEpisodios] = useState([]);
    const [episodio, setEpisodio] = useState([]);
    const [characters, setCharacters] = useState([]);

    const setEpisodioState = async () => {
        const response = await getEpisodios();
        setEpisodios(response.results);
    };

    useEffect(() => {
        setEpisodioState();
    }, []);

    return <EpisodioContext.Provider
        value={{
            episodios, setEpisodios, setEpisodioState,
            episodio, setEpisodio,
            characters, setCharacters
        }}
    >
        {children}
    </EpisodioContext.Provider>
}

