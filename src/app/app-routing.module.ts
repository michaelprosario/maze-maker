import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'view-maze',
    loadChildren: () => import('./view-maze/view-maze.module').then( m => m.ViewMazePageModule)
  },
  {
    path: 'add-maze',
    loadChildren: () => import('./edit-maze2/edit-maze2.module').then( m => m.EditMaze2PageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
