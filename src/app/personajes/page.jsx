"use client";

import { Personajes } from "./component/Personajes";
import PersonajesState from "./context/personajesState";
import { NavBar } from "../shared/navbar/component/NavBar";
import { Footer } from "../shared/footer/component/Footer";
export default function Page() {
    return (
        <div>
            <NavBar></NavBar>
            <PersonajesState>
                <Personajes>
                </Personajes>
            </PersonajesState>
            <Footer></Footer>
        </div>
    );
}
