import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { db, PixItem } from '../db';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-list-pix',
  templateUrl: './list-pix.page.html',
  styleUrls: ['./list-pix.page.scss'],
})
export class ListPixPage implements OnInit {
  items$ = liveQuery(async () => await db.pixItems.toArray()); 

  constructor(private router: Router) {}

  async ngOnInit() {}

  onItemSelect(item: PixItem)
  {
    this.router.navigate(['/edit-pix/' + item.id]);
  }

  onAdd(){
    this.router.navigate(['/add-pix']);
  }
}
