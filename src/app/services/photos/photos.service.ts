import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/interfaces/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient
  ) { }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/albums/" + albumId + "/photos");
  }
}
