import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PhotosDialogComponent } from 'src/app/components/photos-dialog/photos-dialog.component';
import { Photo } from 'src/app/interfaces/photo.interface';
import { AppState } from 'src/app/states/app.state';
import { photosArraySelector } from 'src/app/states/photos/photos.selectors';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog
  ) { }

  photos$!: Observable<ReadonlyArray<Photo>>;

  ngOnInit() {
    this.photos$ = this.store.select(photosArraySelector);
  }

  photoDialog(imageUrl: string) {
    const dialogRef = this.dialog.open(PhotosDialogComponent, { data: imageUrl });
  }

}
