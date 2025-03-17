import { EndPointEpisodios } from "@/app/shared/tools/endPoint";
import axios from "axios";

const getEpisodios = async () => {
    const url: string = EndPointEpisodios;
    return await axios.get(url)
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