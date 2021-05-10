import { Action } from "@ngrx/store";
import { dencrementar, incrementar } from "./contador.actions";

export function contadorReducer(state: number = 10, action: Action) {
    switch (action.type) {
        case dencrementar.type:
            return state - 1;

        case incrementar.type:
            return state + 1;

        default:
            return state;
    }
}