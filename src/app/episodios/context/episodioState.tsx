

"use client";
import { useEffect, useState } from "react";
import { EpisodioContext } from "./episodioContext";
import { getCharacterByUrl, getEpisodios } from "../service/episodios.services";


export function EpisodioState({ children }) {
    const [episodios, setEpisodios] = useState([]);
    const [episodio, setEpisodio] = useState([]);
    const [characters, setCharacters] = useState([]);

    const setEpisodioState = async () => {
        const response = await getEpisodios();
        setEpisodios(response.results);
    };

    const sendDataToModal = async (row: any) => {
        const modal = document.getElementById('modalResidentesEpisodios');
        (modal as any).showModal();

        let character = [];
        for (let z = 0; z < row.characters.length; z++) {
            let info = await getCharacterByUrl(row.characters[z]);
            info.name_episode = row.name;
            info.episode = row.episode;
            info.air_date = row.air_date;
            character.push(info);
        }
        setEpisodio(row);
        setCharacters(character)
    }
    useEffect(() => {
        setEpisodioState();
    }, []);

    return <EpisodioContext.Provider
        value={{
            episodios, setEpisodios, setEpisodioState,
            episodio, setEpisodio,
            sendDataToModal,
            characters, setCharacters
        }}
    >
        {children}
    </EpisodioContext.Provider>
}