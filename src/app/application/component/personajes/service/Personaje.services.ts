import { EndPointPersonajes } from "@/app/shared/tools/endPoint";
import axios from "axios";


const getPersonajes = async (page: number, name: string, status: string) => {
    const url:string = EndPointPersonajes;
    const response = await axios.get(url + "?name=" + name + "&status=" + status + "&page=" + page);
    return response.data;
};

const getEpisodeInfo = async (url:string) => {
    const response = await axios.get(url);
    return response.data;
};


export { getPersonajes, getEpisodeInfo };