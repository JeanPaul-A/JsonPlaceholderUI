import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsUserRoutingModule } from './details-user-routing.module';
import { DetailsUserComponent } from './details-user.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    DetailsUserComponent,
  ],
  imports: [
    CommonModule,
    DetailsUserRoutingModule,
    MaterialModule
  ]
})

export class DetailsUserModule { }
