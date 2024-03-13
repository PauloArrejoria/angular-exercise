import { createReducer, on, Action } from '@ngrx/store';
import {
  loadPostsRequested,
  loadPostsSuccess,
  loadPostsFailure,
  refreshButtonClicked,
  deleteButtonClicked,
} from './posts.actions';
import { Post } from '../post.service';

export const POSTS_STATE_KEY = 'posts';

export interface PostState {
  posts: Post[];
  loaded: boolean;
}

export const initialState: PostState = {
  posts: [],
  loaded: false,
};

const postsReducer = createReducer(
  initialState,
  on(loadPostsRequested, (state) => ({
    ...state,
    loaded: false,
  })),
  on(refreshButtonClicked, (state) => ({
    ...state,
    loaded: false,
  })),
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
      loaded: true,
    };
  }),
  on(loadPostsFailure, (state) => ({
    ...state,
    loaded: false,
  })),
  on(deleteButtonClicked, (state, action) => {
    const post: Post = action.posts; //Es un post individual!!!
    const currentPosts: Post[] = state.posts;
    const newPosts: Post[] = currentPosts.filter(
      (currentPost) =>
        currentPost.Title !== post.Title &&
        currentPost.Year !== post.Year &&
        currentPost.Poster !== post.Poster
    );
    return {
      ...state,
      posts: newPosts,
    };
  })
);

export function reducer(state: PostState, action: Action) {
  return postsReducer(state, action);
}
