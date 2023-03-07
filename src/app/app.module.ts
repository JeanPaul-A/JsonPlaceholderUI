import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './states/users/users.effects';
import { ROOT_REDUCERS } from './states/app.state';
import { AlbumsEffects } from './states/albums/albums.effects';
import { PhotoEffects } from './states/photos/photos.effects';
import { PhotosDialogComponent } from './components/photos-dialog/photos-dialog.component';
import { PostEffects } from './states/posts/posts.effects';
import { CommentEffects } from './states/comments/comments.effects';
import { ToDoEffects } from './states/toDos/toDos.effects';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotosDialogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(
      [UserEffects, AlbumsEffects, PhotoEffects, PostEffects, CommentEffects, ToDoEffects]
    )
  ],
  entryComponents: [PhotosDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
