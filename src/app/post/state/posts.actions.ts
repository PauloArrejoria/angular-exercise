import { createAction, props } from '@ngrx/store';
import { Post } from '../post.service';

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
  //props<{ error: any }>()
);

export const deletePostRequested = createAction(
  '[Post delete] delete post requested'
);

export const deletePostsSuccess = createAction(
  '[Post] delete posts success',
  props<{ posts: Post }>()
);
