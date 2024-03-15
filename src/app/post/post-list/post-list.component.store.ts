import { createAction, props } from '@ngrx/store';
import { Post, PostService } from '../post.service';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { filter, switchMap, tap } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';

//Actions
export const refreshButtonClicked = createAction(
  '[Post list] refresh button clicked'
);

export const loadPostsSuccess = createAction(
  '[Post list] load posts success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Post list] load post failure',
  props<{ error: any }>()
);

export const loadPostsRequested = createAction(
  '[Post list] load post requested'
);

export const deletePostRequested = createAction(
  '[Post List] delete post requested',
  props<{ post: Post }>()
);

//State
export interface PostState {
  posts: Post[];
  loaded: boolean;
}

export const initialState: PostState = {
  posts: [],
  loaded: false,
};

@Injectable()
export class PostListComponentStore extends ComponentStore<PostState> {
  // Selectors
  public getPosts$ = this.select((state) => state.posts); //<---- Emite cada vez que state post se modifica

  public getPostsLoaded$ = this.select((state) => state.loaded); //<---- Lo mismo aca

  public getPostCount$ = this.select((state) => state.posts.length);

  // Updates
  public addPost = this.updater((state, post: Post) => {
    const statePost = { ...state.posts };
    statePost.push(post);
    return {
      ...state,
      posts: statePost,
      loaded: true,
    };
  });

  public addPosts = this.updater((state, posts: Post[]) => {
    return {
      ...state,
      posts,
    };
  });

  public removePost = this.updater((state, post: Post) => {
    const currentPosts: Post[] = state.posts;
    const newPosts: Post[] = currentPosts.filter(
      (currentPost) => currentPost !== post
    );
    return {
      ...state,
      posts: newPosts,
    };
  });

  // Effects
  public setStateLoaded = this.effect(() =>
    this.actions$.pipe(
      ofType(loadPostsRequested, refreshButtonClicked),
      switchMap(() =>
        this.postsService
          .getAllPosts()
          .pipe(tap((results) => this.addPosts(results.Search)))
      )
    )
  );

  public removePost$ = this.effect(() =>
    this.actions$.pipe(
      ofType(deletePostRequested),
      filter((x) => !!x),
      tap((action) => {
        // Call updater!
        this.removePost(action.post);
      })
    )
  );

  // Constructor
  constructor(private actions$: Actions, private postsService: PostService) {
    super(initialState);
  }
}
