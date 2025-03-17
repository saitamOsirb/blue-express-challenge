'use client'

import { useContext } from "react"
import { ModalPersonajesEpisodios } from "./modal/Modal-Personajes-Episodios";
import { EpisodioContext } from "../context/episodioContext";

export function Episodios() {

    const context = useContext(EpisodioContext);
    if (!context) { return null; }
    const { episodios, sendDataToModal } = context;

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
                                    sendDataToModal(row)
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