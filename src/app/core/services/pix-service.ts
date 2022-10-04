import { Injectable } from "@angular/core";
import { Pix } from "../entity/pix";

@Injectable()
export class PixService
{
    pix: Pix;

    clearPix() {
        this.pix = new Pix();
    }
    
    constructor()
    {
        this.pix = new Pix();
    }

    setCell(row:number, col: number, value: number)
    {
        this.pix.setCell(row, col, value);
    }

    storePixInLocalStorage() {
        localStorage.setItem('pix', JSON.stringify(this.pix.grid));
    }
  
}