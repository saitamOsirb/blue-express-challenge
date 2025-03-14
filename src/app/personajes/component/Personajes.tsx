'use client'
import { useEffect, useState } from "react"
import { getPersonajes } from "../service/Personaje.services"
import { arrayChunk } from "@/app/shared/tools/generic";
import { StatusDeath } from "./status/component/StatusDeath";
import { StatusUnknown } from "./status/component/StatusUnknown";
import { StatusAlive } from "./status/component/StatusAlive";

export function Personajes() {
    const [personajes, setPersonajes] = useState([]);
    const [split, setSplit] = useState(0);
    const [paginations, setPagination] = useState([]);

    useEffect(() => {
        const setPersonajeState = async (page: number) => {
            let response = await getPersonajes(page);
            let listPersonaje: any = arrayChunk(response.results, 5);
            setPersonajes(listPersonaje);
            setPagination(response.info);
        };
        setPersonajeState(5);
    }, []);

    return <div>
        {
            personajes.map((row, i) => (
                <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl" key={i}>
                    {
                        personajes[i].map((row: any, f: number) => (
                            <div key={f}>
                                <div>
                                    <img className="size-48 shadow-xl rounded-md" alt="" src={row.image} />
                                </div>
                                <div>
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