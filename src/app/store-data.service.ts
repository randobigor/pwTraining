import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor() { }

  private data: any;

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    return temp;
  }
}
