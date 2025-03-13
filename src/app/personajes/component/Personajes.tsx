'use client'
import { useEffect, useState } from "react"
import { getPersonajes } from "../service/Personaje.services"
import axios, { Axios } from "axios";
import {Personaje} from '../model/Personaje.model';
export function Personajes() {
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        
      });
    useEffect(() => {
        const setPersonajeState = async () => {
            let response=await getPersonajes();
            setPersonajes(response);
        };
        setPersonajeState();
    }, []);
    return <div>
        
    </div>
}