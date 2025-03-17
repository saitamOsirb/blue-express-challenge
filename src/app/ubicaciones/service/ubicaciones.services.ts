import { EndPointUbicaciones } from "@/app/shared/tools/endPoint";
import axios from "axios";

const getUbicaciones = async () => {
    const url: string = EndPointUbicaciones;
    return await axios.get(url).then(response => {
        return response.data;
    }).catch(error => {

        return error;
    });
};

const getResident = async (url: string) => {
    return await axios.get(url).then(response => {
        return response.data;
    }).catch(error => {

        return error;
    });
};


export { getUbicaciones, getResident };