import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  { path: 'details', loadChildren: () => import('./modules/details-user/details-user.module').then(m => m.DetailsUserModule) },
  { path: 'albums', loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule) },
  { path: 'photos', loadChildren: () => import('./modules/photos/photos.module').then(m => m.PhotosModule) },
  { path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule) },
  { path: 'toDos', loadChildren: () => import('./modules/to-dos/to-dos.module').then(m => m.ToDosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
