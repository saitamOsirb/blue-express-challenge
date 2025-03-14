'use client'

import { personajesContext } from "@/app/personajes/context/personajesContext"
import React from "react";
import { useContext, useEffect, useState } from "react"

export function Paginador() {
    const context = useContext(personajesContext);
    if (!context) { return null; }
    const { page, total, setPage, setPersonajeState, setPaginador, arrNumber, min,selectInput,inputName } = context;

    const handleclick = (event: MouseEvent, page: number) => {
        setPersonajeState(page, inputName, selectInput)
        setPaginador(total, 10, page);
    };



    useEffect(() => {
        setPersonajeState(1, inputName, selectInput);
        setPaginador(total, 10, page);
    }, []);

    return <div className="join">
        {
            arrNumber.map((row: any, f: number) => (
                <div key={f}>
                    <button className="join-item btn btn-xs items-center" onClick={(event) => handleclick(event, min + (f + 1))}>{min + (f)}</button>
                </div>

            ))
        }


    </div>
}