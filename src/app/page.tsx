"use client";
import { Personajes } from "./personajes/component/Personajes";
import PersonajesState from "./personajes/context/personajesState";
import { Footer } from "./shared/footer/component/Footer";
import { NavBar } from "./shared/navbar/component/NavBar";


export default function Home() {
  
  return (
    <main>
      <NavBar></NavBar>
         <PersonajesState>
                         <Personajes>
                         </Personajes>
                     </PersonajesState>
      <Footer></Footer>
    </main>
  );
}
