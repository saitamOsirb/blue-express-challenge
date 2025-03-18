"use client";
import { useContext } from "react"
import { personajesContext } from "../context/personajesContext";
import { Filter } from "./filter/component/Filter";
import { Paginador } from "./paginador/component/Paginador";
import { StatusDeath } from "./status/component/StatusDeath";
import { StatusAlive } from "./status/component/StatusAlive";
import { StatusUnknown } from "./status/component/StatusUnknown";
import { ModalPersonajes } from "./modal/ModalPersonajes";
import useWindowSize from "@rooks/use-window-size";

export function Personajes() {
    const { innerWidth } = useWindowSize();
    const { personajes, senDataToModal } = useContext(personajesContext)
    return <main>
        <br />
        <section>
            {
                innerWidth < 450 ? <><div className="flex w-full">
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
                        <Filter></Filter>
                    </div>
                </div><br /><div className="flex w-full">
                        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
                            <Paginador></Paginador>
                        </div>
                    </div></>
                    : <div>
                        <div className="flex w-full">
                            <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center"> <Filter></Filter></div>
                            <div className="divider divider-horizontal"></div>
                            <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center"><Paginador></Paginador></div>
                        </div>
                    </div>
            }
        </section>
        <br />
        {
            personajes.map((personaje: any, i: any) => (
                <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl" key={i}>
                    {
                        personaje.map((row: any, f: number) => (
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