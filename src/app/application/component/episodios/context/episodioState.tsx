"use client";
import { useEffect, useState } from "react";
import { EpisodioContext } from "./episodioContext";
import { getEpisodios } from "../service/episodios.services";


export function EpisodioState({ children }) {
    const [episodios, setEpisodios] = useState([]);
    const [characters, setCharacters] = useState([]);

   
    useEffect(() => {
       
    }, []);

    return <EpisodioContext.Provider
        value={{
            episodios, setEpisodios,
            characters, setCharacters
        }}
    >
        {children}
    </EpisodioContext.Provider>
}

