import { Pagination } from "./Pagination.model";
import { Personaje } from "./Personaje.model";

export interface PersonajeRequest {
    info: Pagination,
    personaje: Personaje[]
}