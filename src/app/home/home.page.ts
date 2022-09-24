import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { db, MazeItem } from '../db';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  mazeItems: Array<MazeItem>;
  constructor(private router: Router) {

  }

  async ngOnInit() 
  {
    this.mazeItems = await db.mazes.toArray();    
  }

  onItemSelect(item: MazeItem)
  {
    this.router.navigate(['/edit-maze/' + item.id]);
  }

  onAddMaze(){
    this.router.navigate(['/add-maze']);
  }

}
