import { EndPointPersonajes } from "@/app/shared/tools/endPoint";
import axios from "axios";


const getPersonajes = async (page: number, name: string, status: string) => {
    let url = EndPointPersonajes;
    let response = await axios.get(url + "?name=" + name + "&status=" + status + "&page=" + page);
    return response.data;
};

export { getPersonajes };