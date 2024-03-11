import { createReducer, on, Action } from '@ngrx/store';
import { PostComponent } from '../post/post.component';
import {
  loadPostsRequested,
  loadPostsSuccess,
  loadPostsFailure,
  refreshButtonClicked,
} from './posts.actions';

export const POSTS_STATE_KEY = 'posts';

export interface PostState {
  posts: PostComponent[];
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
  }))
);

export function reducer(state: PostState, action: Action) {
  return postsReducer(state, action);
}
