import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMazesPageRoutingModule } from './list-mazes-routing.module';

import { ListMazesPage } from './list-mazes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMazesPageRoutingModule
  ],
  declarations: [ListMazesPage]
})
export class ListMazesPageModule {}
