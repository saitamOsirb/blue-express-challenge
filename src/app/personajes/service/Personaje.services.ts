import { EndPointPersonajes } from "@/app/shared/tools/endPoint";
import axios from "axios";


const getPersonajes = async (page: number, name: string, status: string) => {
    const url: string = EndPointPersonajes;
    return await axios.get(url + "?name=" + name + "&status=" + status + "&page=" + page)
        .then(response => {
            return response.data;
        })
        .catch(error => {

            return error;
        });
};

const getEpisodeInfo = async (url: string) => {

    return await await axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
};


export { getPersonajes, getEpisodeInfo };