import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApidragonballzService {

  API = 'https://www.dragonball-api.com/api';
  http = Inject(HttpClient);

  getAllCharacters() {
    return this.http.get(`${this.API}/characters/`);
  }
}
