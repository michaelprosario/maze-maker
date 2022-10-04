import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { db, MazeItem } from '../db';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  async ngOnInit() {}

  onMazes()
  {
    this.router.navigate(['/list-mazes/']);
  }

  onPix()
  {
    this.router.navigate(['/list-pix/']);
  }
}
