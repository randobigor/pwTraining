import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../store-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  constructor(private transfer : StoreDataService) {}

  ngOnInit() {
  }

  x : number;
  y : number;

  getX(x){
    this.x = parseInt(x);
  }

  getY(y){
    this.y = parseInt(y);
  }

  getSum(){
    this.transfer.setData(this.x + this.y);
  }
}
