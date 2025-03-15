"use client"
import { useContext } from "react"
import { layoutContext } from "@/app/context/layoutContext"
import {
    BrowserRouter as Router,
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";
import { Ubicaciones } from "./ubicaciones/component/Ubicaciones"
import { PersonajesState } from "./personajes/context/personajesState"
import { Personajes } from "./personajes/component/Personajes"
import { Episodios } from "./episodios/component/Episodios";

export function Application() {

    return <div>
        
        <PersonajesState>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Personajes />} />
                    <Route path="/personajes" element={<Personajes />} />
                    <Route path="/ubicaciones" element={<Ubicaciones />} />
                    <Route path="/episodios" element={<Episodios/>} />
                </Routes>
            </BrowserRouter>,
        </PersonajesState>
        <br />
    </div>
}