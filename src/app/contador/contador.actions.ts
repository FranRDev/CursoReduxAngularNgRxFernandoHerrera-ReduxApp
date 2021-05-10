import { createAction, props } from '@ngrx/store';

export const decrementar = createAction('[Contador] Decrementar');
export const dividir = createAction(
    '[Contador] Dividir',
    props<{ numero: number }>()
);
export const incrementar = createAction('[Contador] Incrementar');
export const multiplicar = createAction(
    '[Contador] Multiplicar',
    props<{ numero: number }>()
);
export const resetear = createAction('[Contador] Resetear');