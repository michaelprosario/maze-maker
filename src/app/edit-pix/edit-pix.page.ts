import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pix } from '../core/entity/pix';
import { PixService } from '../core/services/pix-service';
import { db, PixItem } from '../db';

@Component({
  selector: 'app-edit-pix',
  templateUrl: './edit-pix.page.html',
  styleUrls: ['./edit-pix.page.scss'],
})
export class EditPixPage implements OnInit {

  colors: Array<string> = ['black', '#065143', '#129490', '#70b77e', '#e0a890','#ce1483'];
  grid: Array<Array<number>>
  list: Array<number>;
  name: string = "Pix1";
  recordId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pixService: PixService
  ) 
  {    
    this.list = [];
    for(let i=0; i<10; i++){
      this.list.push(i);
    } 
  }

  async ngOnInit() 
  {
    this.grid = this.pixService.pix.grid;
    // Are we doing add or update?
    let creatingNew = this.router.url.indexOf("add-pix") > 0;
    if(creatingNew)
    {
      this.setupNewRecord();
    }else{
      
      let recordId = parseInt(this.route.snapshot.paramMap.get('id'));      
      await this.loadExistingRecord(recordId);
    }
  }

  private async loadExistingRecord(recordId: number) {
    let item = await db.pixItems.get(recordId);

    let pixData = JSON.parse(item.pixContent) as Pix;
    let pix = this.makePix(item, pixData);

    this.pixService.pix = pix;
    this.grid = pix.grid;
    this.name = item.name;
    this.recordId = item.id; 
  }

  private setupNewRecord() {
    let date = new Date();
    this.name = "Pix " + date.toLocaleDateString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    this.recordId = 0;

    // clear the maze with no confirm...
    this.pixService.clearPix();
    this.grid = this.pixService.pix.grid;
  }

  private makePix(item: PixItem, pixToLoad: Pix) {
    let entity = new Pix();
    entity.name = item.name;
    entity.grid = pixToLoad.grid;
    entity.gridSize = pixToLoad.gridSize;
    return entity;
  }

  getCellColor(cellValue: number)
  {
    return this.colors[cellValue];
  }

  onViewInAr()
  {
    this.pixService.storePixInLocalStorage();
    this.router.navigate(['/view-pix']);
  }

  onClear(){
    if(!confirm("Are you sure you want to clear? Press OK to proceed."))
    {
      return;
    }

    this.pixService.clearPix();
    this.grid = this.pixService.pix.grid; 
  }

  onDelete() {
    if(!confirm("Press OK to delete record")){
      return;
    }
    db.pixItems.delete(this.recordId);
    this.onClose();
  }  

  onCellClick(event: any,row: number,col: number){
    let cellValue = this.pixService.pix.getCell(row,col)
    cellValue = cellValue + 1;

    if(cellValue > 5)
      cellValue = 0;
    
    this.pixService.setCell(row,col,cellValue);    
    event.srcElement.style.background = this.colors[cellValue];
  }

  async onSave()
  {    
    // create maze item    
    let json = JSON.stringify(this.pixService.pix);
    let pixItem = { name: this.name,pixContent: json } as PixItem
    if(this.recordId === 0)
    {
      await db.pixItems.add(pixItem);
    }
    else
    {
      pixItem.id = this.recordId;
      await db.pixItems.update(this.recordId, pixItem);
    }    

    this.router.navigate(['/list-pix']);
  }

  onClose(){
    this.router.navigate(['/list-pix']);
  }
}
