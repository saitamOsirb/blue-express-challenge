"use client";
import { useState } from "react";
import { layoutContext } from "./layoutContext";
import { getEpisodios, getCharacterByUrl } from "../application/component/episodios/service/episodios.services";

export function LayoutState({ children }) {
    const [episodios, setEpisodios] = useState([]);

    const [characters, setCharacters] = useState([]);

    const setEpisodioState = async (page: number, name: string, status: string) => {
        const response = await getEpisodios();
        setEpisodios(response.results);
    };
    const getCharacter = async (url: string) => {
        const response = await getCharacterByUrl(url);
        return response.data;
    }

    return <layoutContext.Provider
        value={{
            episodios, setEpisodios, setEpisodioState, characters, setCharacters, getCharacter
        }}
    >
        {children}
    </layoutContext.Provider>
}

