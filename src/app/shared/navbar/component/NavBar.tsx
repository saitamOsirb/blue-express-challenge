"use client"

import { useEffect, useState } from "react";

export function NavBar() {
  const [width, setWidth] = useState(0);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, null);
  return <div>
{
    width < 450 &&
    <div className="navbar bg-primary text-primary-content">
    <div className="flex-1">
    <ul className="menu menu-horizontal px-1">
          <li><a href="/personajes">Personajes</a></li>
          <li><a href="/ubicaciones">Ubicaciones</a></li>
          <li><a href="/episodios">Episodios</a></li>
        </ul>
    </div>
  </div>
  }
  {
    width > 450 &&
    <div className="navbar bg-primary text-primary-content">
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
  </div>
  
  /*
*/


  /*<div className="navbar bg-primary text-primary-content">
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
  </div>*/
}