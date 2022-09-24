import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMaze2PageRoutingModule } from './edit-maze2-routing.module';

import { EditMaze2Page } from './edit-maze2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMaze2PageRoutingModule
  ],
  declarations: [EditMaze2Page]
})
export class EditMaze2PageModule {}
