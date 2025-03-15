'use client'

import { personajesContext } from "@/app/application/component/personajes/context/personajesContext"
import React from "react";
import { useContext, useEffect } from "react"

export function Paginador() {
    const context = useContext(personajesContext);
    if (!context) { return null; }
    const { page, total, setPersonajeState, selectInput, inputName } = context;


    const handleBackClick = (page: number) => {
        return (event: React.MouseEvent) => {
            if (page != 1) {
                setPersonajeState((page - 1), selectInput, inputName)
            }
        }
    }
    const handleNextClick = (page: number, maxPage: number) => {
        return (event: React.MouseEvent) => {
            setPersonajeState((page + 1), selectInput, inputName)
        }
    }

    return <div>
        <button className="btn btn-xs" onClick={handleBackClick(page)}>{"<"}</button>
        <button className="btn btn-xs" disabled>{page}</button>
        <button className="btn btn-xs" onClick={handleNextClick(page, total)}>{">"}</button>
    </div>
}