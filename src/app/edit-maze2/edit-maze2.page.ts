import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maze } from '../core/entity/maze';
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
  recordId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mazeService: MazeService
  ) 
  {    
    this.list = [];
    for(let i=0; i<10; i++){
      this.list.push(i);
    } 
  }

  async ngOnInit() 
  {
    this.grid = this.mazeService.maze.grid;
    // Are we doing add or update?
    let creatingNew = this.router.url.indexOf("add-maze") > 0;
    if(creatingNew)
    {
      this.setupNewRecord();
    }else{
      
      let recordId = parseInt(this.route.snapshot.paramMap.get('id'));      
      await this.loadExistingRecord(recordId);
    }
  }

  private async loadExistingRecord(recordId: number) {
    let mazeItem = await db.mazes.get(recordId);

    // load the maze
    let mazeStuff = JSON.parse(mazeItem.mazeContent) as Maze;
    let maze = this.makeMaze(mazeItem, mazeStuff);

    // restore maze on the service
    this.mazeService.maze = maze;

    // set the grid
    this.grid = maze.grid;

    // set the name
    this.mazeName = mazeItem.name;

    // restore record id
    this.recordId = mazeItem.id; 
  }

  private setupNewRecord() {
    let date = new Date();
    this.mazeName = "Maze " + date.toLocaleDateString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    this.recordId = 0;

    // clear the maze with no confirm...
    this.mazeService.clearMaze();
    this.grid = this.mazeService.maze.grid;
  }

  private makeMaze(mazeItem: MazeItem, mazeStuff: Maze) {
    let maze = new Maze();
    maze.name = maze.name = mazeItem.name;
    maze.grid = mazeStuff.grid;
    maze.gridSize = mazeStuff.gridSize;
    return maze;
  }

  getCellColor(cellValue: number)
  {
    return this.colors[cellValue];
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
  }

  onDelete() {
    if(!confirm("Press OK to delete record")){
      return;
    }
    db.mazes.delete(this.recordId);
    this.onClose();
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
    if(this.recordId === 0)
    {
      await db.mazes.add(mazeItem);
    }
    else
    {
      mazeItem.id = this.recordId;
      await db.mazes.update(this.recordId, mazeItem);
    }    

    // route user to home
    this.router.navigate(['/']);
  }

  onClose(){
    this.router.navigate(['/']);
  }

}
