import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/interfaces/comments.interface';
import { Post } from 'src/app/interfaces/posts.interface';
import { AppState } from 'src/app/states/app.state';
import { requestComments } from 'src/app/states/comments/comments.actions';
import { commentArraySelector } from 'src/app/states/comments/comments.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() posts$!: Observable<ReadonlyArray<Post>>;
  @Input() postId!: number;
  comments$!: Observable<ReadonlyArray<Comment>>;

  constructor(
    private store: Store<AppState>
  ) { }

  getComments() {
    this.store.dispatch(requestComments({ postId: this.postId }));
    this.comments$ = this.store.select(commentArraySelector);
  }
}
