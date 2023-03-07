import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDosRoutingModule } from './to-dos-routing.module';
import { ToDosComponent } from './to-dos.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ToDosComponent
  ],
  imports: [
    CommonModule,
    ToDosRoutingModule,
    MaterialModule
  ]
})
export class ToDosModule { }
