export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface DragonBallCharacter {
  items: Character[];
  meta: Meta;
  links: Links;
}





