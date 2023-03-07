import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { MaterialModule } from 'src/app/material.module';
import { PostComponent } from '../../components/post/post.component';
import { CommentComponent } from '../../components/comment/comment.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule
  ]
})
export class PostsModule { }
