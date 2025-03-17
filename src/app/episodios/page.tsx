"use client";

import { Footer } from "../shared/footer/component/Footer";
import { NavBar } from "../shared/navbar/component/NavBar";
import { Episodios } from "./component/Episodios";
import { EpisodioState } from "./context/episodioState";



export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <EpisodioState>
        <Episodios></Episodios>
      </EpisodioState>
      <Footer></Footer>
    </main>
  );
}
