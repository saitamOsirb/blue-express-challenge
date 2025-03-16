import { EndPointEpisodios } from "@/app/shared/tools/endPoint";
import axios from "axios";

const getEpisodios = async () => {
    const url: string = EndPointEpisodios;
    const response = await axios.get(url);
    return response.data;
};

const getCharacterByUrl = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};



export { getEpisodios, getCharacterByUrl };