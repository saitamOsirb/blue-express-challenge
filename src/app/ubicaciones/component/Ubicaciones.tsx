'use client'

import { useContext, useEffect } from "react"
import { ubicacionContext } from "../context/ubicacion.context"
import { ModalUbicaciones } from "./modal/component/Modal-Ubicaciones";

export default function Ubicaciones() {
    const { ubicaciones, setUbicacioneState, sendDataToModal } = useContext(ubicacionContext)
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
                                    await sendDataToModal(row);
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