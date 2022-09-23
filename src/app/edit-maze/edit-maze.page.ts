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
  constructor(private router: Router,private mazeService: MazeService) {     

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
