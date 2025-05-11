import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DragonballComponent from './pages/dragonball/dragonball.component';
import DragonballInfoComponent from './pages/dragonball-info/dragonball-info.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToolbarComponent,
    FooterComponent,
  ],
  template: `
    <app-toolbar />
    <router-outlet />
    <app-footer />
  `,
  styles: [],
})
export class AppComponent {
  title = 'apiDragonball';
}
