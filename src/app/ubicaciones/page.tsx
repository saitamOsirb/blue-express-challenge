"use client";

import { Footer } from "../shared/footer/component/Footer";
import { NavBar } from "../shared/navbar/component/NavBar";
import Ubicaciones from "./component/Ubicaciones";
import { UbicacionState } from "./context/ubicacion.state";


export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <UbicacionState>
        <Ubicaciones></Ubicaciones>
      </UbicacionState>
      <Footer></Footer>
    </main>
  );
}
