import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Character} from '../../core/models/Dragonballz.model';
import { ActivatedRoute } from '@angular/router';
import { ApidragonballzService } from '../../core/services/apidragonballz.service';
import { Subscription, switchMap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dragonball-info',
  imports: [],
  templateUrl: './dragonball-info.component.html',
  styleUrl: './dragonball-info.component.scss',
})
export default class DragonballInfoComponent implements OnInit, OnDestroy {
  dragonball?: Character;
  loading = signal(true);
  route = inject(ActivatedRoute);
  api = inject(ApidragonballzService);
  title = inject(Title);
  routeSub?: Subscription;

  ngOnInit(): void {
    this.routeSub = this.route.params
      .pipe(switchMap((params) => this.api.getCharacterById(params['id'])))
      .subscribe((dragonball) => {
        this.dragonball = dragonball;
        console.log(this.dragonball);
        this.title.setTitle(`${dragonball.name} - DragonBall Z`);
        this.loading.set(false);
      });
  }
  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
