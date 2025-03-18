import { EndPointEpisodios } from "../../shared/tools/endPoint";
import axios from "axios";

const getEpisodios = async (page: number) => {
    const url: string = EndPointEpisodios;
    return await axios.get(`${url}?page=${page}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

const getCharacterByUrl = async (url: string) => {
    return await axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

export { getEpisodios, getCharacterByUrl };