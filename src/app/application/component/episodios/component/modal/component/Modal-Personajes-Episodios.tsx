'use client'

import { layoutContext } from "@/app/context/layoutContext"
import { useContext } from "react"

export function ModalPersonajesEpisodios() {
    const { characters } = useContext(layoutContext)

    return <dialog id="modalResidentesEpisodios" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg"></h3>
            <div className="modal-action">
                <form method="dialog">
                    {
                        characters.map((row: any, n: number) => (
                            <div key={n}>
                                <div >
                                    <br />
                                    <img src={row.image} alt="" height={80} width={80} />
                                    <p>Nombre: {row.name}</p>
                                    <p>Estado: {row.status}</p>
                                    <p>Especies: {row.species}</p>
                                    <p>Tipo: {row.type}</p>
                                    <p>Genero: {row.gender}</p>
                                    <br />
                                    <hr />
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