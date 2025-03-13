

import { EndPointPersonajes } from "@/app/shared/tools/endPoint";
import axios from "axios";
import { PersonajeRequest } from "../model/PersonajeRequest.model";
import { Personajes } from "../component/Personajes";
import { Personaje } from "../model/Personaje.model";
import { Pagination } from "../model/Pagination.model";

const getPersonajes = async () => {
    let url = EndPointPersonajes;
    let response = await axios.get(url);
    return response.data;
};

export { getPersonajes };