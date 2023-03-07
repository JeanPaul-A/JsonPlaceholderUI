import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(userId: number): Observable<ReadonlyArray<Post>> {
    return this.http.get<ReadonlyArray<Post>>("https://jsonplaceholder.typicode.com/users/" + userId + "/posts")
  }
}
