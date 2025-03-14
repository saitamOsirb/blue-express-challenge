import { EndPointPersonajes } from "@/app/shared/tools/endPoint";
import axios from "axios";


const getPersonajes = async (page: number) => {
    let url = EndPointPersonajes;
    let response = await axios.get(url + page);
    return response.data;
};

export { getPersonajes };