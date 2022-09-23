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
    path: 'edit-maze',
    loadChildren: () => import('./edit-maze/edit-maze.module').then( m => m.EditMazePageModule)
  },
  {
    path: 'add-maze',
    loadChildren: () => import('./edit-maze/edit-maze.module').then( m => m.EditMazePageModule)
  },   {
    path: 'view-maze',
    loadChildren: () => import('./view-maze/view-maze.module').then( m => m.ViewMazePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
