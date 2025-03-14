'use client'

import { useContext, useEffect } from "react"
import { ubicacionContext } from "../context/ubicacion.context"
import { getResidente } from "../service/ubicaciones.services";
export function Ubicaciones() {

    const { ubicaciones, setUbicacioneState,residentes, setResidentes } = useContext(ubicacionContext)
    useEffect(() => {
        setUbicacioneState();

    }, []);
    return <div className="overflow-x-auto">
        <table className="table">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Dimension</th>
                    <th>Residentes</th>
                </tr>
            </thead>
            <tbody>
                {ubicaciones.map((row: any, i: number) => (
                    <tr key={i}>
                        <th>{row.id}</th>
                        <th>{row.name}</th>
                        <th>{row.type}</th>
                        <th>{row.dimension}</th>
                        <th>{
                            <button className="btn btn-active btn-primary"
                                onClick={async () => {
                                    document.getElementById('modalResidentes').showModal();

                                    let residentes = [];
                                    for (let z = 0; z < ubicaciones[i].residents.length; z++) {
                                        let residente = await getResidente(ubicaciones[i].residents[z]);
                                        console.log(residente);
                                        residentes.push(residente);
                                    }
                                    setResidentes(residentes);
                                }}
                            >ver</button>
                        }</th>
                    </tr>
                ))
                }
            </tbody>
        </table>
        <br />
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
                                        <img src={row.image} alt="" height={80} width={80}/>
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