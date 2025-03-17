"use client"
import { useContext } from "react"
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
import { EpisodioState } from "./episodios/context/episodioState";
import { UbicacionState } from "./ubicaciones/context/ubicacion.state";

export function Application() {

    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PersonajesState>
                        <Personajes />
                    </PersonajesState>} />
                <Route path="/personajes" element={
                    <PersonajesState>
                        <Personajes />
                    </PersonajesState>} />
                <Route path="/ubicaciones" element={
                    <UbicacionState><Ubicaciones /></UbicacionState>

                } />
                <Route path="/episodios" element={
                    <EpisodioState>
                        <Episodios />
                    </EpisodioState>
                } />
            </Routes>
        </BrowserRouter>,

        <br />
    </div>
}