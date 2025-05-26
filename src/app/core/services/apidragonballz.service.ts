import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character, DragonBallCharacter } from '../models/Dragonballz.model';

@Injectable({
  providedIn: 'root'
})
export class ApidragonballzService {
 Url = 'https://dragonball-api.com/api' 
 http = inject(HttpClient);

 getAllCharacters() {
  return this.http.get<DragonBallCharacter>(`${this.Url}/characters?limit=12`);
 }
 getCharacterById(id:number){
  return this.http.get<Character>(`${this.Url}/characters/${id}`);
 }
}
