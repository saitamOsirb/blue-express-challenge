'use client'


import { EpisodioContext } from "@/app/episodios/context/episodioContext";
import { ubicacionContext } from "@/app/ubicaciones/context/ubicacion.context";
import React from "react";
import { useContext } from "react"

export function Paginador() {
    const context = useContext(ubicacionContext);
    if (!context) { return null; }
    const { page, setUbicacioneState, total } = context;


    const handleBackClick = (page: number) => {
        return (event: React.MouseEvent) => {
            if (page != 1) {
                setUbicacioneState((page - 1));
            }
        }
    }
    const handleNextClick = (page: number, maxPage: number) => {
        return (event: React.MouseEvent) => {
            if (page < maxPage) {
                setUbicacioneState((page + 1));
            }

        }
    }
    return <div className="flex w-full place-items-center">
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
            <div className="join join-vertical lg:join-horizontal ">
                <button className="btn join-item" onClick={handleBackClick(page)}>{"<"}</button>
                <button className="btn join-item" disabled>{page}</button>
                <button className="btn join-item" onClick={handleNextClick(page, total)}>{">"}</button>
            </div>
        </div>
    </div>

}