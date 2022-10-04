import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPixPageRoutingModule } from './view-pix-routing.module';

import { ViewPixPage } from './view-pix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPixPageRoutingModule
  ],
  declarations: [ViewPixPage]
})
export class ViewPixPageModule {}
