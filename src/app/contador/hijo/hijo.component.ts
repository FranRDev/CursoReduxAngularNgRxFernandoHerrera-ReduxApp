import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  multiplicar() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  resetear(nuevoContador: number) {
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }

}