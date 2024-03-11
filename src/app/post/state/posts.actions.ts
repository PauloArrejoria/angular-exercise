import { createAction, props } from '@ngrx/store';
import { PostComponent } from '../post/post.component';

export const refreshButtonClicked = createAction(
  '[Post list] refresh button clicked'
);

export const loadPostsSuccess = createAction(
  '[Post list] load posts success',
  props<{ posts: PostComponent[] }>()
);

export const loadPostsFailure = createAction(
  '[Post list] load post failure',
  props<{ error: any }>()
);

export const loadPostsRequested = createAction(
  '[Post list] load post requested',
  props<{ error: any }>()
);
