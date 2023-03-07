import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from "src/app/interfaces/comments.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commenst$!: Observable<ReadonlyArray<Comment>>

  constructor(
    private http: HttpClient
  ) { }

  getComments(postId: number): Observable<ReadonlyArray<Comment>> {
    return this.http.get<ReadonlyArray<Comment>>("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments");
  }
}
