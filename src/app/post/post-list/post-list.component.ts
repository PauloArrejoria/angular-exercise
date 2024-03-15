import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import {
  PostListComponentStore,
  refreshButtonClicked,
} from './post-list.component.store';
import { Post } from '../post.service';
import { loadPostsRequested } from './post-list.component.store';

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
  public postsLoaded$: Observable<boolean> =
    this.componentStore.getPostsLoaded$;
  public postsCount$ = this.componentStore.getPostCount$;

  constructor(
    private store: Store,
    public componentStore: PostListComponentStore
  ) {}

  ngOnInit() {
    this.store.dispatch(loadPostsRequested());
  }

  refreshPosts() {
    this.store.dispatch(refreshButtonClicked());
  }
}
