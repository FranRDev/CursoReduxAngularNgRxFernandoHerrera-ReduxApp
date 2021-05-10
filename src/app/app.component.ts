import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => this.contador = state.contador);
  }

  decrementar() {
    this.store.dispatch(actions.dencrementar());
  }

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }

}