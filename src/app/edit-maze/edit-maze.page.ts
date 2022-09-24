import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maze } from '../core/entity/maze';
import { MazeService } from '../core/services/maze-service';

@Component({
  selector: 'app-edit-maze',
  templateUrl: './edit-maze.page.html',
  styleUrls: ['./edit-maze.page.scss'],
})
export class EditMazePage implements OnInit {

  maze: Maze;
  list: Array<number>;
  constructor(private router: Router,private mazeService: MazeService) {    
    this.list = [];
    for(let i=0; i<10; i++){
      this.list.push(i);
    } 
  }

  ngOnInit() 
  {
    this.maze = this.mazeService.maze;
    // Are we doing add or update?
    let creatingNew = this.router.url.indexOf("add-maze") > 0;
    if(creatingNew)
    {
    }else{
    }
  }

  onViewInAr()
  {
    this.mazeService.storeMazeInLocalStorage();
    this.router.navigate(['/view-maze']);
  }

  onClearMaze(){
    this.mazeService.clearMaze();
    this.maze = this.mazeService.maze;
  }

}
