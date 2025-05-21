import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  template: `
   <div class="container-toolbar">
    <div class="toolbar">
      <img src="Dragon_Ball_Z_Logo_A.png" alt="Dragon Ball Z" width="200" height="50">
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
      padding: 0.9rem 0;

     span{
      color: #ffcc00;
      font-weight: bold;
     }
    }
  }


  `
})
export class ToolbarComponent {
  
}
