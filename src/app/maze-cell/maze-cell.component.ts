import { Component, Input, OnInit } from '@angular/core';
import { MazeService } from '../core/services/maze-service';

@Component({
  selector: 'app-maze-cell',
  templateUrl: './maze-cell.component.html',
  styleUrls: ['./maze-cell.component.scss'],
})
export class MazeCellComponent implements OnInit {

  @Input() row: number = 0;
  @Input() column: number = 0;

  backgroundColor: string = 'black';
  cellValue: number = 0;
  colors: Array<string> = ['black', '#FA8334', '#FFFD77', '#FFE882', '#388697','#271033'];

  constructor(private mazeService: MazeService) { }

  ngOnInit() {}

  onCellClick(){
    this.cellValue++;
    if(this.cellValue > 5){
      this.cellValue = 0;
    }

    this.backgroundColor = this.colors[this.cellValue];
    this.mazeService.setCell(this.row-1, this.column-1, this.cellValue);
  }

}
