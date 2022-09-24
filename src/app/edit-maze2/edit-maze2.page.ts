import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MazeService } from '../core/services/maze-service';
import { db, MazeItem } from '../db';

@Component({
  selector: 'app-edit-maze2',
  templateUrl: './edit-maze2.page.html',
  styleUrls: ['./edit-maze2.page.scss'],
})
export class EditMaze2Page implements OnInit {

  colors: Array<string> = ['black', '#065143', '#129490', '#70b77e', '#e0a890','#ce1483'];
  grid: Array<Array<number>>
  list: Array<number>;
  mazeName: string = "foo";

  constructor(
    private router: Router,
    private mazeService: MazeService
  ) 
  {    
    this.list = [];
    for(let i=0; i<10; i++){
      this.list.push(i);
    } 
  }

  ngOnInit() 
  {
    this.grid = this.mazeService.maze.grid;
    // Are we doing add or update?
    let creatingNew = this.router.url.indexOf("add-maze") > 0;
    if(creatingNew)
    {
      let date = new Date();
      this.mazeName = "Maze " + date.toLocaleDateString([], {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    }else{
    }
  }

  onViewInAr()
  {
    this.mazeService.storeMazeInLocalStorage();
    this.router.navigate(['/view-maze']);
  }

  onClearMaze(){
    if(!confirm("Are you sure you want to clear the maze? Press OK to proceed."))
    {
      return;
    }

    this.mazeService.clearMaze();
    this.grid = this.mazeService.maze.grid;

    let tblMaze = document.getElementById("tblMaze");
    // @ts-ignore
    for(let tr of tblMaze.children)
    {
      for(let td of tr.children){
        td.style.background = 'black';
      }
    }    
  }

  onCellClick(event: any,row: number,col: number){
    let cellValue = this.mazeService.maze.getCell(row,col)

    cellValue = cellValue + 1;

    if(cellValue > 5)
    {
      cellValue = 0;
    }
    
    this.mazeService.setCell(row,col,cellValue);    
    event.srcElement.style.background = this.colors[cellValue];
  }

  async onSaveMaze()
  {
    // create maze item
    let json = JSON.stringify(this.mazeService.maze);
    let mazeItem = {
      name: this.mazeName,
      mazeContent: json
    } as MazeItem

    // store to the database
    await db.mazes.add(mazeItem);

    // route user to home
    this.router.navigate(['/']);
  }

}
