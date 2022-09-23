import { Component, Input, OnInit } from '@angular/core';
import { Maze } from '../core/entity/maze';

@Component({
  selector: 'app-maze-cell',
  templateUrl: './maze-cell.component.html',
  styleUrls: ['./maze-cell.component.scss'],
})
export class MazeCellComponent implements OnInit {

  @Input()
  maze: Maze
  cellValue: number = 0;
  backgroundColor: string = 'black';
  colors: Array<string> = ['black', '#FA8334', '#FFFD77', '#FFE882', '#388697','#271033'];

  constructor() { }

  ngOnInit() {

  }

  onCellClick(){
    this.cellValue++;
    if(this.cellValue > 5){
      this.cellValue = 0;
    }

    this.backgroundColor = this.colors[this.cellValue];
  }

}
