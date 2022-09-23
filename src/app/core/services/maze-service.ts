import { Injectable } from "@angular/core";
import { Maze } from "../entity/maze";

@Injectable()
export class MazeService
{
    maze: Maze;

    clearMaze() {
        this.maze = new Maze();
    }
    
    constructor()
    {
        this.maze = new Maze();
    }

    setCell(row:number, col: number, value: number)
    {
        this.maze.setCell(row, col, value);
    }

    storeMazeInLocalStorage() {
        localStorage.setItem('maze', JSON.stringify(this.maze.grid));
    }
  
}