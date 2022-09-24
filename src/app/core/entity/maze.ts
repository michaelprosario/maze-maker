export class Maze
{
  name: string = "";
  gridSize: number = 10;

  grid: Array<Array<number>> = [];

  constructor(){
    this.setupMaze();
  }

  getCell(row:number, col: number)
  {
    return this.grid[row][col];
  }

  setCell(row:number, col: number, value: number)
  {
    this.grid[row][col] = value;
  }

  setupMaze()
  {
    this.grid = [];
    let size = this.gridSize;
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
  }
}