import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maze } from '../core/entity/maze';

@Component({
  selector: 'app-edit-maze',
  templateUrl: './edit-maze.page.html',
  styleUrls: ['./edit-maze.page.scss'],
})
export class EditMazePage implements OnInit {

  maze: Maze;
  constructor(private router: Router) {     

  }

  ngOnInit() 
  {
    this.maze = new Maze();
    // Are we doing add or update?
    let creatingNew = this.router.url.indexOf("add-maze") > 0;
    if(creatingNew)
    {
      alert("create new")
    }else{
      alert("update")
    }

  }

}
