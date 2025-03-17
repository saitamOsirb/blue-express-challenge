'use client'
import { useContext, useEffect, useState } from "react"
import { EpisodioContext } from "../../context/episodioContext";

export function ModalPersonajesEpisodios() {
    const context = useContext(EpisodioContext);
    if (!context) { return null; }
    const { characters, episodio } = context;

    return <dialog id="modalResidentesEpisodios" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">{`${episodio.name}(${episodio.episode}) ${episodio.air_date}`}</h3>
            <br />
            <div className="flex w-full flex-col">
                {
                    characters.map((row: any, n: number) => (
                        <div>
                            <div className="grid grid-cols-2 gap-2">
                                <div><img src={row.image} alt="" height={150} width={120} /></div>
                                <div>
                                    <p>{"  "} Nombre: {row.name}</p>
                                    <p>{"  "} Estado: {row.status}</p>
                                    <p>{"  "} Especies: {row.species}</p>
                                    <p>{"  "} Tipo: {row.type}</p>
                                    <p>{"  "} Genero: {row.gender}</p>
                                </div>

                            </div>
                            <div className="divider"></div>
                        </div>
                    ))
                }
            </div>

            <div className="modal-action">
                <form method="dialog">
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
}