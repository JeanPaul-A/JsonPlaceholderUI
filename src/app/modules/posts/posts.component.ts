import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, find, Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/posts.interface';
import { AppState } from 'src/app/states/app.state';
import * as PostSelector from "../../states/posts/posts.selectors";
import * as CommentSelector from "../../states/comments/comments.selectors";
import { Comment } from 'src/app/interfaces/comments.interface';
import { requestComments } from 'src/app/states/comments/comments.actions';
import { PageEvent } from '@angular/material/paginator';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts$!: Observable<ReadonlyArray<Post>>;
  rowHeight = "6:1";
  commentsCss = "expantionClosed";
  paginatorLength = 0;
  postId!: number;


  constructor(
    private store: Store<AppState>
  ) {
    this.posts$ = this.store.select(PostSelector.postsArraySelector);

    this.posts$.subscribe(
      post => this.paginatorLength = post.length
    )

    this.posts$.subscribe(
      post => post.map(
        (post, id) => this.postId = (id === 0) ? post.id : this.postId
      )
    )
  }

  paginatorEvent(e: PageEvent) {
    this.posts$.subscribe(
      post => post.map(
        (post, id) => this.postId = (id === e.pageIndex) ? post.id : this.postId
      )
    )
  }
}

