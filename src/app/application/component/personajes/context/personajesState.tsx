"use client";
import { useEffect, useState } from "react";
import { personajesContext } from "./personajesContext";
import { getPersonajes } from "../service/Personaje.services";
import { arrayChunk } from "@/app/shared/tools/generic";

export function PersonajesState({ children }) {
    const [arrNumber, setArrNumber] = useState([]);
    const [min, setMin] = useState(1);
    const [personajes, setPersonajes] = useState([]);
    const [inputName, setInputName] = useState("");
    const [selectInput, setSelectInput] = useState("");
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [personaje, setPersonaje] = useState({});
    const [episodios, setEpisodios] = useState([]);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    const setPersonajeState = async (page: number, name: string, status: string) => {
        const response = await getPersonajes(page, name || "", status || "");
        const listPersonaje: any = arrayChunk(response.results, 5);
        setPersonajes(listPersonaje);
        setPage(page);
        const total = response.info.pages;
        setTotal(total);
    };

    const setPaginador = (totalPage: number, limit: number, page: number) => {
        const paginationNumbers = [];
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
        setPersonajeState(1, inputName, selectInput);
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


    return <personajesContext.Provider
        value={{
            personajes,
            page,
            total,
            width,
            height,
            window,
            setPersonajes,
            setPage,
            setPersonajeState,
            setTotal,
            selectInput, setSelectInput,
            inputName, setInputName,
            arrNumber, setArrNumber,
            min, setMin, setPaginador,
            personaje, setPersonaje,
            episodios, setEpisodios
        }}
    >
        {children}
    </personajesContext.Provider>
}

