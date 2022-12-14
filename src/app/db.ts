import Dexie, { Table } from 'dexie';

export interface MazeItem {
    id?: number;    
    name: string;
    mazeContent: string;
}

export interface PixItem {
  id?: number;    
  name: string;
  pixContent: string;
}

export class AppDB extends Dexie {
    
    mazes!: Table<MazeItem, number>;
    pixItems!: Table<PixItem, number>;
  
    constructor() {
      super('ngdexieliveQuery');
      this.version(3).stores({
        mazes: '++id',
        pixItems: '++id'
      });      
    }
}

export const db = new AppDB();