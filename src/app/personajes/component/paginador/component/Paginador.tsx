'use client'

import { personajesContext } from "@/app/personajes/context/personajesContext"
import React from "react";
import { useContext, useEffect, useState } from "react"

export function Paginador() {
    const [arrNumber, setArrNumber] = useState([]);
    const [min, setMin] = useState(1);
    const { page, total, setPage, setPersonajeState } = useContext(personajesContext)

    const handleclick = (event: MouseEvent, page: number) => {
        setPersonajeState(page)
        setPaginador(total, 10, page);
    };

    const setPaginador = (totalPage: number, limit: number, page: number) => {
        let paginationNumbers = [];
        setMin(page)
        if (totalPage == 0 || totalPage == undefined) {
            for (let i = 0; i <= 10; i++) {
                paginationNumbers.push(i);
                setArrNumber(paginationNumbers);
            }
        }
        else {
            for (let x = 1; x <= 10; x++) {
                if ((x + page) <= totalPage + 2) {
                    paginationNumbers.push(x + page);
                }
                else {
                    setMin(1);
                    setPage(1);
                    if (page == 1) {
                        for (let i = 0; i <= 10; i++) {
                            paginationNumbers.push(i);
                            setArrNumber(paginationNumbers);
                        }
                    }
                }
                setArrNumber(paginationNumbers);
            }
        }
    }
    useEffect(() => {
        setPersonajeState(1);
        setPaginador(total, 10, page);
    }, []);

    return <div className="join">
        {
            arrNumber.map((row: any, f: number) => (
                <div key={f}>
                    <button className="join-item btn btn-xs" onClick={(event) => handleclick(event, min + (f + 1))}>{min + (f)}</button>
                </div>

            ))
        }


    </div>
}