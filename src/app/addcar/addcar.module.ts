import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcarPageRoutingModule } from './addcar-routing.module';

import { AddcarPage } from './addcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddcarPage]
})
export class AddcarPageModule {}
