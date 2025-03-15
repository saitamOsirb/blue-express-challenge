'use client'

import { useContext, useEffect } from "react"
import { ubicacionContext } from "../context/ubicacion.context"
import { getResident } from "../service/ubicaciones.services";
import { ModalUbicaciones } from "./modal/component/Modal-Ubicaciones";
export function Ubicaciones() {

    const { ubicaciones, setUbicacioneState, setResidentes } = useContext(ubicacionContext)
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
                                        let residente = await getResident(ubicaciones[i].residents[z]);
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
        <ModalUbicaciones></ModalUbicaciones>
    </div>

}