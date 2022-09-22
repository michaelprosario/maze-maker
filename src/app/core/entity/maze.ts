export class Maze
{
  name: string = "";

  grid: Array<Array<number>> = [];

  constructor(){
    this.setupMaze();
  }

  setupMaze()
  {
    this.grid = [];
    let size = 32;
    let rowIndex =0;
    for(rowIndex=0; rowIndex<size; rowIndex++)
    {
      let row = [];
      this.grid.push(row)
      let colIndex = 0;
      for(colIndex=0; colIndex<size; colIndex++)
      {
        this.grid[rowIndex][colIndex] = 0;
      }
    }

    console.log(this.grid);
  }
}