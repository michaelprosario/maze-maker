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
  {
    path: 'add-pix',
    loadChildren: () => import('./edit-pix/edit-pix.module').then( m => m.EditPixPageModule)
  },  
  {
    path: 'edit-maze/:id',
    loadChildren: () => import('./edit-maze2/edit-maze2.module').then( m => m.EditMaze2PageModule)
  },   {
    path: 'list-pix',
    loadChildren: () => import('./list-pix/list-pix.module').then( m => m.ListPixPageModule)
  },
  {
    path: 'edit-pix/:id',
    loadChildren: () => import('./edit-pix/edit-pix.module').then( m => m.EditPixPageModule)
  },
  {
    path: 'list-mazes',
    loadChildren: () => import('./list-mazes/list-mazes.module').then( m => m.ListMazesPageModule)
  },
  {
    path: 'view-pix',
    loadChildren: () => import('./view-pix/view-pix.module').then( m => m.ViewPixPageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
