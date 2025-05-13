export interface DragonBallCharacter {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: string | null; // Peut être une chaîne de caractères (date) ou null
  }