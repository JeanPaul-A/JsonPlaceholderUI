import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDialogComponent } from './photos-dialog.component';

describe('PhotosDialogComponent', () => {
  let component: PhotosDialogComponent;
  let fixture: ComponentFixture<PhotosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
