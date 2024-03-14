import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostService } from '../post.service';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import {
  loadPostsRequested,
  refreshButtonClicked,
} from '../state/posts.actions';
import {
  getPostCount,
  getPosts,
  getPostsLoaded,
} from '../state/posts.selectors';
import { PostComponent } from '../post/post.component';
import { PostListComponentStore } from './post-list.component.store';

@Component({
  standalone: true,
  imports: [CommonModule, PostComponent],
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  providers: [PostListComponentStore],
})
export class PostListComponent implements OnInit {
  public posts$: Observable<Post[]> = this.componentStore.getPosts$;
  public postsLoaded$: Observable<boolean> = this.store.select(getPostsLoaded);
  public postsCount$ = this.store.select(getPostCount);

  constructor(
    private postService: PostService,
    private store: Store,
    public componentStore: PostListComponentStore
  ) {}

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
