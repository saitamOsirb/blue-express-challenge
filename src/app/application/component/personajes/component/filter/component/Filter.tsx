
'use client'

import { personajesContext } from "@/app/application/component/personajes/context/personajesContext";
import { useContext, useState } from "react";

export function Filter(this: any) {
    const currentValue = "DEFAULT";

    const context = useContext(personajesContext);
    if (!context) {
        return null;
    }
    const { setPersonajeState,
        selectInput,
        setSelectInput,
        inputName,
        setInputName,
        setPage,
        page } = context;


    const handleChange = (event: any) => {
        setSelectInput(event.target.value);
        setPersonajeState(page, inputName, event.target.value);
        setPage(1);
    };

    const handleInputChange = (event: any) => {
        setInputName(event.target.value)
        setPersonajeState(page, event.target.value, selectInput);
        setPage(1);
    };
    return <div className="join">
        <div>
            <div>
                <input value={inputName} onChange={handleInputChange} className="input join-item" placeholder="Search" />
            </div>
        </div>
        <select onChange={handleChange} value={selectInput} className="select join-item">
            <option value={currentValue} disabled>seleccione ...</option>
            <option value={"Alive"}>Vivo</option>
            <option value={"Dead"} >Muerto</option>
            <option value={"unknown"}>Desconocido</option>
        </select>
    </div>

}