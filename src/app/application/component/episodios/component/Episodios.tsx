'use client'

import { useContext, useEffect } from "react"
import { getEpisodios } from "../service/episodios.services";
import { layoutContext } from "@/app/context/layoutContext";
import { ModalPersonajesEpisodios } from "./modal/component/Modal-Personajes-Episodios";

export function Episodios() {

    const { episodios, setEpisodioState, characters, setCharacters, getCharacter } = useContext(layoutContext)

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
                {episodios.map((row: any, i: number) => (
                    <tr key={i}>
                        <th>{row.id}</th>
                        <th>{row.name}</th>
                        <th>{row.episode}</th>
                        <th>{row.air_date}</th>
                        <th>
                            <button className="btn btn-active btn-primary"
                                onClick={async () => {
                                    document.getElementById('modalResidentesEpisodios').showModal();
                                    let character = [];
                                    for (let z = 0; z < episodios[i].characters.length; z++) {
                                        let char = await getCharacter(episodios[i].characters[z]);
                                        character.push(char);
                                    }
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