import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Album } from 'src/app/interfaces/album.interface';
import { AlbumsService } from 'src/app/services/albums/albums.service';
import { requestAlbums } from 'src/app/states/albums/albums.actions';
import { AppState } from 'src/app/states/app.state';
import { requestPhotos } from 'src/app/states/photos/photos.actions';
import * as AlbumSelectors from "../../states/albums/albums.selectors";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  loading$!: Observable<boolean>;
  albums$!: Observable<ReadonlyArray<Album>>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.albums$ = this.store.select(AlbumSelectors.albumsArraySelector);
  }

  routerPhotos(albumId: number) {
    this.store.dispatch(requestPhotos({ albumId: albumId }));
  }
}
