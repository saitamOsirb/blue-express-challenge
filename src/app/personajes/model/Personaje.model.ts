import { Origin } from "./Origin.model";
import { Location } from "./Location.model";
export interface Personaje {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Origin,
  location: Location,
  episodes: [],
  url: string,
  created: string
}