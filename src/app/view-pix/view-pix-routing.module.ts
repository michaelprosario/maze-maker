import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPixPage } from './view-pix.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPixPageRoutingModule {}
