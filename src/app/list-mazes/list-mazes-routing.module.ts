import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMazesPage } from './list-mazes.page';

const routes: Routes = [
  {
    path: '',
    component: ListMazesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMazesPageRoutingModule {}
