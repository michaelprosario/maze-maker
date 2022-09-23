import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMazePageRoutingModule } from './view-maze-routing.module';

import { ViewMazePage } from './view-maze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMazePageRoutingModule
  ],
  declarations: [ViewMazePage]
})
export class ViewMazePageModule {}
