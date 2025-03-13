import { Personaje } from "../model/Personaje.model";

const getPersonajes = async () => {
    try {
        // Simulate an API call
        const response: Personaje = await new Promise(resolve => {
            //setTimeout(() => resolve({ data: 'Sample Data' }), 1000);
        });
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export { getPersonajes };