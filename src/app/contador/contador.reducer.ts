import { createReducer, on } from "@ngrx/store";
import * as actions from "./contador.actions";

export const stateInicial = 20;

const _contadorReducer = createReducer(
    stateInicial,
    on(actions.decrementar, (state) => state - 1),
    on(actions.dividir, (state, { numero }) => state / numero),
    on(actions.incrementar, (state) => state + 1),
    on(actions.multiplicar, (state, { numero }) => state * numero),
    on(actions.resetear, () => stateInicial)
);

export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}