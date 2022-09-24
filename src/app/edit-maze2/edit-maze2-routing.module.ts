import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMaze2Page } from './edit-maze2.page';

const routes: Routes = [
  {
    path: '',
    component: EditMaze2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMaze2PageRoutingModule {}
