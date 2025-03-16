"use client";
import { useState } from "react";
import { layoutContext } from "./layoutContext";
import { getEpisodios, getCharacterByUrl } from "../application/component/episodios/service/episodios.services";

export function LayoutState({ children }) {
    const [episodios, setEpisodios] = useState([]);

    const [characters, setCharacters] = useState([]);


    const getCharacter = async (url: string) => {
        const response = await getCharacterByUrl(url);
        return response.data;
    }

    return <layoutContext.Provider
        value={{
            episodios, setEpisodios, characters, setCharacters, getCharacter
        }}
    >
        {children}
    </layoutContext.Provider>
}

