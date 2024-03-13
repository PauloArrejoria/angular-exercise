import { Component, Input } from '@angular/core';
import { Post } from '../post.service';
import { Store } from '@ngrx/store';
import { deleteButtonClicked } from '../state/posts.actions';
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
  isShowMore: boolean = false;

  constructor(private store: Store) {}

  onClickShow() {
    this.isShowMore = !this.isShowMore;
  }

  deletePost() {
    this.store.dispatch(deleteButtonClicked({ posts: this.post }));
  }
}
