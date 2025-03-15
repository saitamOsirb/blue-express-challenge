'use client'
import { useContext, useState } from "react"

import { StatusDeath } from "./status/component/StatusDeath";
import { StatusUnknown } from "./status/component/StatusUnknown";
import { StatusAlive } from "./status/component/StatusAlive";
import { personajesContext } from "../context/personajesContext";
import { Filter } from "./filter/component/Filter";
import { Paginador } from "./paginador/component/Paginador";
import { getEpisodeInfo } from "../service/Personaje.services";
import { ModalPersonajes } from "./modal/component/ModalPersonajes";
export function Personajes() {
    const { personajes, width, personaje, setPersonaje, setEpisodios } = useContext(personajesContext)

    return <div>
        <br />
        {
            width < 450 &&
            <div>
                <div className="flex w-full">
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center"> <Filter></Filter></div>
                </div> ||
                <div className="flex w-full">
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center"> <Paginador></Paginador></div>
                </div>
            </div>
        }
        {
            width >= 450 &&
            <div>
                <div className="flex w-full">
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center"> <Filter></Filter></div>
                    <div className="divider divider-horizontal"></div>
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center"><Paginador></Paginador></div>
                </div>
            </div>
        }

        <br />
        {
            personajes.map((row: any, i: any) => (
                <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl" key={i}>
                    {
                        personajes[i].map((row: any, f: number) => (
                            <div key={f}>
                                <div >
                                    <img className="size-48 shadow-xl rounded-md" alt="" src={row.image} />
                                    <p><b>Nombre:</b> <br />{row.name}</p>
                                    <p><b>Tipo:</b> <br />{row.type == "" ? 'unknown' : row.type}</p>
                                    <p><b>Especie:</b> <br />{row.species}</p>
                                    <p><b>Origen:</b><br /> {row.origin.name}</p>
                                    {row.status == "Dead" && <StatusDeath />}
                                    {row.status == "Alive" && <StatusAlive />}
                                    {row.status == "unknown" && <StatusUnknown />}
                                    <button className="btn" onClick={async () => {


                                        const modal = document.getElementById('my_modal_1');
                                        (modal as any).showModal();

                                        setPersonaje(personajes[i][f]);
                                        let episodes = [];
                                        for (let z = 0; z < personajes[i][f].episode.length; z++) {
                                            let episode = await getEpisodeInfo(personajes[i][f].episode[z]);
                                            episodes.push(episode);
                                        }
                                        setEpisodios(episodes);
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
    </div >
}