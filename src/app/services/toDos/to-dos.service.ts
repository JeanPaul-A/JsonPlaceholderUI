import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/interfaces/toDo.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  constructor(
    private http: HttpClient
  ) { }

  getToDos(userId: number): Observable<ReadonlyArray<ToDo>> {
    return this.http.get<ReadonlyArray<ToDo>>("https://jsonplaceholder.typicode.com/users/" + userId + "/todos");
  }
}
