import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DragonBallCharacter } from '../models/Dragonballz.model';

@Injectable({
  providedIn: 'root'
})
export class ApidragonballzService {

  API = 'https://dragonball-api.com/api';
  http = inject(HttpClient);

  getAllCharacters = () => { return this.http.get<DragonBallCharacter[]>(`${this.API}/characters`); }
}
