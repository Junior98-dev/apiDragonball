import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ApidragonballzService } from '../../core/services/apidragonballz.service';
import { DragonBallCharacter } from '../../core/models/Dragonballz.model';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dragonball',
  imports: [RouterLink],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.scss',
})
export default class DragonballComponent implements OnInit, OnDestroy {
  loading = signal(true);
  dragonballzs?: DragonBallCharacter;
  apiDragonballzService = inject(ApidragonballzService);
  dragonballSub?: Subscription;

  ngOnInit(): void {
    this.dragonballSub = this.apiDragonballzService
      .getAllCharacters()
      .subscribe((data) => {
        this.dragonballzs = data;
        this.loading.set(false);
      });
  }

  ngOnDestroy(): void {
    this.dragonballSub?.unsubscribe();
  }
}
