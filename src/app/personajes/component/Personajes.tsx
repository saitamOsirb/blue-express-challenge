"use client";
import { useContext } from "react"
import { personajesContext } from "../context/personajesContext";
import { StatusDeath } from "./status/component/StatusDeath";
import { StatusAlive } from "./status/component/StatusAlive";
import { StatusUnknown } from "./status/component/StatusUnknown";
import { ModalPersonajes } from "./modal/ModalPersonajes";
import { ContainerFilter } from "./container-filter/component/ContainerFilter";

export function Personajes() {
    const { personajes, senDataToModal } = useContext(personajesContext)
    return <main>
        <br />
        <ContainerFilter></ContainerFilter>
        <br />
        {
            personajes.map((personaje: any, i: any) => (
                <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl" key={i}>
                    {
                        personaje.map((row: any, f: number) => (
                            <div key={f}>
                                <div >
                                    <img className="size-48 shadow-xl rounded-md" alt="" src={row.image} height={120} width={120} />
                                    <p><b>Nombre:</b> <br />{row.name}</p>
                                    <p><b>Tipo:</b> <br />{row.type == "" ? 'unknown' : row.type}</p>
                                    <p><b>Especie:</b> <br />{row.species}</p>
                                    <p><b>Origen:</b><br /> {row.origin.name}</p>
                                    {row.status == "Dead" && <StatusDeath />}
                                    {row.status == "Alive" && <StatusAlive />}
                                    {row.status == "unknown" && <StatusUnknown />}
                                    <button className="btn" onClick={async () => {
                                        senDataToModal(row);
                                    }}>Episodios</button>
                                </div>
                            </div>

                        ))
                    }
                    <br />
                </div>
            ))
        }
        <ModalPersonajes></ModalPersonajes>
    </main>
}