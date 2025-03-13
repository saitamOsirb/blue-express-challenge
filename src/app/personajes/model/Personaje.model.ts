import { Origin } from "./Origin";
import { Location } from "./Location";
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