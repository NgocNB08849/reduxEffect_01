import { createAction, props } from '@ngrx/store';

export const getPaginate = createAction(
  '[Arcticles] Get Paginate',
  props<{ page: number; perPage: number }>()
);
export const getPaginateSuccess = createAction(
  '[Arcticles] Get Paginate Success',
  props<{ list: any[] }>()
);
export const getPaginateFails = createAction(
  '[Arcticles] Get Paginate Fails',
  props<{ error: string }>()
);