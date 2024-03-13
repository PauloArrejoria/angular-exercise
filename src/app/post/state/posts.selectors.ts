import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_STATE_KEY, PostState } from './posts.reducer';

export const getPostsState = createFeatureSelector<PostState>(POSTS_STATE_KEY);

export const getPosts = createSelector(getPostsState, (state) => state.posts);

export const getPostsLoaded = createSelector(
  getPostsState,
  (state) => state.loaded
);

export const getPostCount = createSelector(getPosts, (posts) => posts.length);
