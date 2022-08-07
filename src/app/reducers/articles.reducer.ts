import { createReducer, on } from '@ngrx/store';
import { ArticlesState } from '../states/articles.state';
import * as ArticlesActions from '../actions/articles.actions';
import { state } from '@angular/animations';
const initialState: ArticlesState = {
  list: [],
  error: '',
  isSuccess: true,
  isLoading: false,
};

export const articlesReducer = createReducer(
  initialState,
  on(ArticlesActions.getPaginate, (state) => {
    console.log(state)
    return { ...state, isLoading: true };
  }),
  on(ArticlesActions.getPaginateSuccess, (state, action) => ({
    ...state,
    list: action.list,
    isLoading: false,
    error: '',
    isSuccess: true,
  })),
  on(ArticlesActions.getPaginateFails, (state, action) => ({
    ...state,
    list: [],
    error: action.error,
    isLoading: false,
    isSuccess: false,
  }))
);