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
 
  items$ = liveQuery(async () => await db.mazes.toArray()); 

  constructor(private router: Router) {}

  async ngOnInit() {}

  onItemSelect(item: MazeItem)
  {
    this.router.navigate(['/edit-maze/' + item.id]);
  }

  onAddMaze(){
    this.router.navigate(['/add-maze']);
  }

}
