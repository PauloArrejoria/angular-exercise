import { Component, Input } from '@angular/core';
import { Post } from '../post.service';
import { Store } from '@ngrx/store';
import { deletePostRequested } from '../post-list/post-list.component.store';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() post: Post = {};

  constructor(private store: Store) {}

  deletePost() {
    this.store.dispatch(deletePostRequested({ post: this.post }));
  }
}
