import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ApidragonballzService } from '../../core/services/apidragonballz.service';
import { DragonBallCharacter } from '../../core/models/Dragonballz.model';
import { RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dragonball',
  imports: [RouterLink],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.scss'
})
export default class DragonballComponent implements OnInit {
  loading = true;
  dragonballzs?: DragonBallCharacter;
  apiDragonballzService = inject(ApidragonballzService);


  ngOnInit(): void {
    this.apiDragonballzService.getAllCharacters().subscribe((data) => {
      this.dragonballzs = data;
      this.loading = false; 
    })
  }
}
