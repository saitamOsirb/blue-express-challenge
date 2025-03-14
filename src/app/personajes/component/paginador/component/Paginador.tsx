'use client'

import { personajesContext } from "@/app/personajes/context/personajesContext"
import React from "react";
import { useContext, useEffect } from "react"

export function Paginador() {
    const context = useContext(personajesContext);
    if (!context) { return null; }
    const { page, total, setPersonajeState, setPaginador, arrNumber, min, selectInput, inputName } = context;


    function handleclick(page: number){
        setPersonajeState(page, inputName, selectInput)
        console.log(page + " " + total);
        setPaginador(total, 10, page);
    }
  



    useEffect(() => {
        setPersonajeState(1, inputName, selectInput);

        setPaginador(total, 10, page);
    }, []);

    return <div className="join">
        {
            arrNumber.map((row: any, f: number) => (
                <div key={f}>
                    <button className="join-item btn btn-xs items-center"
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleclick((min + (f + 1)))}
                        >
                            {min + (f)}
                        
                    </button>
                </div>

            ))
        }


    </div>
}