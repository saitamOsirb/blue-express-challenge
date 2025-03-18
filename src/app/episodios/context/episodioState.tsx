

"use client";
import { useEffect, useState } from "react";
import { EpisodioContext } from "./episodioContext";
import { getCharacterByUrl, getEpisodios } from "../service/episodios.services";


export function EpisodioState({ children }) {
    const [episodios, setEpisodios] = useState([]);
    const [episodio, setEpisodio] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const setEpisodioState = async (page: number) => {
        if (page == null || page == undefined) { page = 1; }
        const response = await getEpisodios(page);
        setEpisodios(response.results);
        setTotalPage(response.info.pages);
        setPage(page);
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
        setEpisodioState(page);
    }, []);

    return <EpisodioContext.Provider
        value={{
            episodios, setEpisodios, setEpisodioState,
            episodio, setEpisodio,
            sendDataToModal,
            characters, setCharacters,
            page, setPage,
            totalPage, setTotalPage
        }}
    >
        {children}
    </EpisodioContext.Provider>
}