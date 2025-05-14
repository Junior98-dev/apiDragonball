import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ApidragonballzService } from '../../core/services/apidragonballz.service';
import { JsonPipe } from '@angular/common';
import { DragonBallCharacter } from '../../core/models/Dragonballz.model';

@Component({
  selector: 'app-dragonball',
  imports: [JsonPipe],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.scss'
})
export default class DragonballComponent implements OnInit {
  dragonball?: DragonBallCharacter[];
  
  constructor(private api: ApidragonballzService) {}

  ngOnInit() {
    this.api.getAllCharacters().subscribe((data) => {
      this.dragonball = data;
    });
  }
}
