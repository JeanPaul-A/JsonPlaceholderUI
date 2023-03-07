import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private http: HttpClient
  ) { }

  getAlbums(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/users/" + userId + "/albums");
  }
}
