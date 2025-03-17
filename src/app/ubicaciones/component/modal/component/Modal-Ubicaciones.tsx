'use client'

import { useContext } from "react"
import { ubicacionContext } from "../../../context/ubicacion.context"

export function ModalUbicaciones() {

    const { residentes } = useContext(ubicacionContext)
    const { ubicacion } = useContext(ubicacionContext)

    return <dialog id="modalResidentes" className="modal">

        <div className="modal-box">
            <h3 className="font-bold text-lg">{`${ubicacion.name}(${ubicacion.dimension})`}</h3>
            <br />
            <div className="flex w-full flex-col">
                {
                    residentes.map((row: any, n: number) => (
                        <div key={n}>
                            <div className="grid grid-cols-2 gap-2">
                                <div><img src={row.image} alt="" height={150} width={120} /></div>
                                <div>
                                    <p>Nombre: {row.name}</p>
                                    <p>Estado: {row.status}</p>
                                    <p>Especies: {row.species}</p>
                                    <p>Tipo: {row.type}</p>
                                    <p>Genero: {row.gender}</p>
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
    </dialog >

}