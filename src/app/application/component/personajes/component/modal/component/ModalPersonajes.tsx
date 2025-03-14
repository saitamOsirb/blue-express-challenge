'use client'

import { personajesContext } from "@/app/application/component/personajes/context/personajesContext"
import { useContext } from "react"

export function ModalPersonajes() {

    const { episodios, personaje } = useContext(personajesContext)
    return <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">{personaje.name}</h3>

            <div className="modal-action">
                <form method="dialog">
                    {
                        episodios.map((row: any, n: number) => (
                            <div key={n}>
                                <div >
                                    <p>Nombre: {row.name}</p>
                                    <p>Episodio:  {row.episode}</p>
                                    <p>Fecha:  {row.air_date}</p>
                                    <br />
                                </div>
                            </div>

                        ))
                    }
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
}