import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ApidragonballzService } from '../../core/services/apidragonballz.service';
import { DragonBallCharacter } from '../../core/models/Dragonballz.model';
import { RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dragonball',
  imports: [JsonPipe],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.scss'
})
export default class DragonballComponent implements OnInit {
  dragonballzs?: DragonBallCharacter;
  apiDragonballzService = inject(ApidragonballzService);


  ngOnInit(): void {
    this.apiDragonballzService.getAllCharacters().subscribe((data) => {
      this.dragonballzs = data;
      console.log(this.dragonballzs);  
    })
  }
}
