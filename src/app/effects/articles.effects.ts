import { Articles } from './../states/articles.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as ArticlesActions from '../actions/articles.actions';
@Injectable()
export class ArticlesEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getArticles = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.getPaginate),
      switchMap((action) => {
        return this.http.get(
          `https://social.runwayclub.dev/api/articles/latest?page=${action.page}&per_page=${action.perPage}`
        );
      }),
      map((response) => {
        return ArticlesActions.getPaginateSuccess({
          list: <Array<Articles>>response,
        });
      }),
      catchError((error) => {
        return of(ArticlesActions.getPaginateFails({ error: error.message }));
      })
    )
  );
}