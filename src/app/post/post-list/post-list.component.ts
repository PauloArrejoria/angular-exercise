import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostService } from '../post.service';
import { Store } from '@ngrx/store';
import {
  deleteButtonClicked,
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
  public posts$: Observable<Post[]> = this.store.select(getPosts);
  public postsLoaded$: Observable<boolean> = this.store.select(getPostsLoaded);

  constructor(private postService: PostService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadPostsRequested());
  }

  refreshPosts() {
    this.store.dispatch(refreshButtonClicked());
  }

  // deletePost(post: Post) {
  //   this.store.dispatch(deleteButtonClicked({ posts: post }));
  // }
}
