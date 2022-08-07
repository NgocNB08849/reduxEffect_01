import { Articles } from '../states/articles.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticlesState } from 'src/app/states/articles.state';
import * as ArticlesActions from '../actions/articles.action';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  aritcles$: Observable<Articles[]>;
  constructor(private store: Store<{ articles: ArticlesState }>) {
    this.aritcles$ = this.store.select((state) => state.articles.list);
  }

  ngOnInit(): void {
  }
  loedArticles() {
    console.log("aaaaa")
    this.store.dispatch(
      ArticlesActions.getPaginate({
        page: 1,
        perPage: 10,
      })
    );
  }
}