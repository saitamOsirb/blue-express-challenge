'use client'
import { useEffect, useState } from "react"
import { getPersonajes } from "../service/Personaje.services"
export function Personajes() {
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        const setPersonajeState = async () => {
            let response = await getPersonajes();
            setPersonajes(response);
        };
        setPersonajeState();
    }, []);
    return <div>

    </div>
}