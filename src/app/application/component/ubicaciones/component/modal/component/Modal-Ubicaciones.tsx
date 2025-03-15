'use client'

import { useContext } from "react"
import { ubicacionContext } from "../../../context/ubicacion.context"

export function ModalUbicaciones() {

    const { residentes } = useContext(ubicacionContext)
    return <div>
          <dialog id="modalResidentes" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">{residentes.name}</h3>

            <div className="modal-action">
                <form method="dialog">
                    {
                        residentes.map((row: any, n: number) => (
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
    </div>
   
}
