'use client'

import { useContext, useEffect, useState } from "react"
import { ModalPersonajesEpisodios } from "./modal/component/Modal-Personajes-Episodios";
import { EpisodioContext } from "../context/episodioContext";
import { getCharacterByUrl, getEpisodios } from "../service/episodios.services";

export function Episodios() {

    const context = useContext(EpisodioContext);
    if (!context) { return null; }
    const { episodios, setCharacters } = context;

    const [listEpisodios, setListEpisodios] = useState([]);

    const setEpisodioState = async () => {
        const response = await getEpisodios();
        setListEpisodios(response.results);
    };

    useEffect(() => {
        setEpisodioState();
    }, []);
    return <div className="overflow-x-auto">
        <table className="table">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nombre</th>
                    <th>Episodio</th>
                    <th>Fecha</th>
                    <th>Participantes</th>
                </tr>
            </thead>
            <tbody>
                {listEpisodios.map((row: any, i: number) => (
                    <tr key={i}>
                        <th>{row.id}</th>
                        <th>{row.name}</th>
                        <th>{row.episode}</th>
                        <th>{row.air_date}</th>
                        <th>
                            <button className="btn btn-active btn-primary"
                                onClick={async () => {
                                    const modal = document.getElementById('modalResidentesEpisodios');
                                    (modal as any).showModal();
                                    let character = [];
                                    for (let z = 0; z < row.characters.length; z++) {
                                        character.push(await getCharacterByUrl(row.characters[z]));
                                    }
                                    setCharacters(character);
                                }}

                            >ver</button>
                        </th>
                    </tr>
                ))
                }
            </tbody>
        </table>
        <br />

        <ModalPersonajesEpisodios></ModalPersonajesEpisodios>
    </div>

}