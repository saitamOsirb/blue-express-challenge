import { EndPointUbicaciones } from "@/app/shared/tools/endPoint";
import axios from "axios";

const getUbicaciones = async () => {
    const url: string = EndPointUbicaciones;
    const response = await axios.get(url);
    return response.data;
};

const getResidente = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};


export { getUbicaciones, getResidente };