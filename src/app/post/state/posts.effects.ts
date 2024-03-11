import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, mergeMap, switchMap } from 'rxjs/operators';
import { PostService } from '../post.service';
import {
  loadPostsRequested,
  loadPostsFailure,
  loadPostsSuccess,
  refreshButtonClicked,
} from './posts.actions';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPostsRequested, refreshButtonClicked),
      delay(3000),
      switchMap(() =>
        this.postsService
          .getAllPosts()
          .pipe(map((posts) => loadPostsSuccess({ posts })))
      )
      // catchError(error => loadPostsFailure({ error }))
    )
  );

  constructor(private actions$: Actions, private postsService: PostService) {}
}
