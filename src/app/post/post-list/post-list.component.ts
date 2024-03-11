import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService, Result } from '../post.service';
import { Store, select } from '@ngrx/store';
import {
  loadPostsRequested,
  refreshButtonClicked,
} from '../state/posts.actions';
import { getPosts, getPostsLoaded } from '../state/posts.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  public posts$: Observable<Result>;
  public postsLoaded$: Observable<boolean> = this.store.select(getPostsLoaded);

  constructor(private postService: PostService, private store: Store) {
    this.posts$ = this.postService.getAllPosts();
  }

  ngOnInit() {
    //this.store.dispatch(loadPostsRequested());
  }

  refreshPosts() {
    this.store.dispatch(refreshButtonClicked());
  }
}
