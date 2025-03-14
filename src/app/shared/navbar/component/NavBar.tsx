"use client"

import { layoutContext } from "@/app/context/layoutContext"
import { useContext } from "react"

export function NavBar() {
  const { setRuta } = useContext(layoutContext)
  function changeRoute(ruta){
    console.log(ruta);
    //setRuta(ruta)
  }

  return <div className="navbar bg-primary text-primary-content">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Bluexpress Challenge</a>
    </div>
    <div className="flex-none">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/personajes">Personajes</a></li>
          <li><a href="/ubicaciones">Ubicaciones</a></li>
          <li><a href="/episodios">Episodios</a></li>
        </ul>
      </div>
    </div>
  </div>
}