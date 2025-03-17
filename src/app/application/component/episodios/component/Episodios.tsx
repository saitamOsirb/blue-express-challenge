'use client'

import { useContext, useEffect, useState } from "react"
import { ModalPersonajesEpisodios } from "./modal/component/Modal-Personajes-Episodios";
import { EpisodioContext } from "../context/episodioContext";
import { getCharacterByUrl } from "../service/episodios.services";

export function Episodios() {

    const context = useContext(EpisodioContext);
    if (!context) { return null; }
    const { episodios, setCharacters, setEpisodio } = context;

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
                {episodios.map((row: any, i: number) => (
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
                                    for (let z = 0; z < episodios[i].characters.length; z++) {
                                        let info = await getCharacterByUrl(row.characters[z]);
                                        info.name_episode = row.name;
                                        info.episode = row.episode;
                                        info.air_date = row.air_date;
                                        character.push(info);
                                    }
                                    setEpisodio(row);
                                    setCharacters(character)
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