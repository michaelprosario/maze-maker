import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMazePageRoutingModule } from './edit-maze-routing.module';

import { EditMazePage } from './edit-maze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMazePageRoutingModule
  ],
  declarations: [EditMazePage]
})
export class EditMazePageModule {}
