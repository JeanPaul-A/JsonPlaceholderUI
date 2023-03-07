import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-photos-dialog',
  templateUrl: './photos-dialog.component.html',
  styleUrls: ['./photos-dialog.component.scss']
})
export class PhotosDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<PhotosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public imageUrl: string
  ){}

}
