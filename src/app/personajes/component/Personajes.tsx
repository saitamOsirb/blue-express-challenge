'use client'
import { useContext, useState } from "react"

import { StatusDeath } from "./status/component/StatusDeath";
import { StatusUnknown } from "./status/component/StatusUnknown";
import { StatusAlive } from "./status/component/StatusAlive";
import { personajesContext } from "../context/personajesContext";

export function Personajes() {
    const { personajes, setPersonajes } = useContext(personajesContext)
    return <div>
        {
            personajes.map((row: any, i: any) => (
                <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl" key={i}>
                    {
                        personajes[i].map((row: any, f: number) => (
                            <div key={f}>
                                <div>
                                    <img className="size-48 shadow-xl rounded-md" alt="" src={row.image} />
                                    <p><b>Nombre:</b> <br />{row.name}</p>
                                    <p><b>Tipo:</b> <br />{row.type == "" ? 'unknown' : row.type}</p>
                                    <p><b>Especie:</b> <br />{row.species}</p>
                                    <p><b>Origen:</b><br /> {row.origin.name}</p>
                                    {row.status == "Dead" && <StatusDeath />}
                                    {row.status == "Alive" && <StatusAlive />}
                                    {row.status == "unknown" && <StatusUnknown />}
                                </div>
                            </div>

                        ))
                    }
                    <br />
                </div>
            ))
        }

    </div >
}