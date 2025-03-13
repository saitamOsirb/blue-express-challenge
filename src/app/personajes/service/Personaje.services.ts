

import { EndPointPersonajes } from "@/app/shared/tools/endPoint";
import axios from "axios";
import { Personajes } from "../component/Personajes";


const getPersonajes = async () => {
    let url = EndPointPersonajes;
    let response = await axios.get(url);
    return response.data;
};

export { getPersonajes };