import Dexie, { Table } from 'dexie';

export interface MazeItem {
    id?: number;    
    name: string;
    mazeContent: string;
}

export class AppDB extends Dexie {
    
    mazes!: Table<MazeItem, number>;
  
    constructor() {
      super('ngdexieliveQuery');
      this.version(3).stores({
        mazes: '++id'
      });      
    }
}

export const db = new AppDB();