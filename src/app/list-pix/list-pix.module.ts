import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPixPageRoutingModule } from './list-pix-routing.module';

import { ListPixPage } from './list-pix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPixPageRoutingModule
  ],
  declarations: [ListPixPage]
})
export class ListPixPageModule {}
