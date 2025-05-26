export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: Date | null;
  originPlanet: {
    id: number;
    name: string;
    galaxy: string;
    destroyed: boolean;
  };
  transformations: Transformation[];
}

interface Transformation {
  id: number;
  name: string;
  ki: string;
  image: string;
  description: string;
}