import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { PostService } from '../post.service';
import {
  loadPostsRequested,
  loadPostsSuccess,
  refreshButtonClicked,
} from './posts.actions';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPostsRequested, refreshButtonClicked),
      switchMap(() =>
        this.postsService
          .getAllPosts()
          .pipe(map((results) => loadPostsSuccess({ posts: results.Search })))
      )
    )
  );
  //deletePost$ = createEffect();
  constructor(private actions$: Actions, private postsService: PostService) {}
}
