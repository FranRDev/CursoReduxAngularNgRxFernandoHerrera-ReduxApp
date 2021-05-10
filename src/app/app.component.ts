import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contador: number;

  constructor() {
    this.contador = 10;
  }

  decrementar() {
    this.contador --;
  }

  incrementar() {
    this.contador ++;
  }
  
}