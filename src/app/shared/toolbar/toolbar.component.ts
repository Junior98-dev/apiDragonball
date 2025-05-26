import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  template: `
    <div class="container-toolbar">
      <div class="toolbar">
        <a routerLink="/">
          <img
            src="Dragon_Ball_Z_Logo_A.png"
            alt="Dragon Ball Z"
            width="200"
            height="50"
          />
        </a>
      </div>
    </div>
  `,
  styles: `
    .container-toolbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background-color: white;
      border-bottom: 1px solid #ccc;

    .toolbar {
      width: 80%;
      height: 60px;
      margin: 0 auto;

     img{
      align-items: center;
     }
    }
  }


  `,
})
export class ToolbarComponent {}
