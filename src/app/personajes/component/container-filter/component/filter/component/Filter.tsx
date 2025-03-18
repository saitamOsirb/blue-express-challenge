
'use client'


import { personajesContext } from "@/app/personajes/context/personajesContext";
import { useContext } from "react";

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
        setPersonajeState(1, inputName, event.target.value);
    };

    const handleInputChange = (event: any) => {
        setInputName(event.target.value)
        setPersonajeState(1, event.target.value, selectInput);
    };
    return <div className="join">
        <div>
            <div>
                <input value={inputName} onChange={handleInputChange} className="input join-item" placeholder="Search" />
            </div>
        </div>
        <select onChange={handleChange} name="selectedFruit" defaultValue="All" className="select join-item">
            <option value={"All"}>Todos</option>
            <option value={"Alive"}>Vivo</option>
            <option value={"Dead"} >Muerto</option>
            <option value={"unknown"}>Desconocido</option>
        </select>

    </div>

}