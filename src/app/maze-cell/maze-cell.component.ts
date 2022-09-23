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

  constructor() { }

  ngOnInit() {}

  onCellClick(){
    this.cellValue++;
    if(this.cellValue > 5){
      this.cellValue = 0;
    }
  }

}
