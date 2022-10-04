import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPixPageRoutingModule } from './edit-pix-routing.module';

import { EditPixPage } from './edit-pix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPixPageRoutingModule
  ],
  declarations: [EditPixPage]
})
export class EditPixPageModule {}
