import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  x : number;
  y : number;

  getX(x){
    this.x = parseInt(x);
  }

  getY(y){
    this.y = parseInt(y);
  }

  getSum(){
    console.log(Number(this.x + this.y))
  }

  constructor() { }

  ngOnInit() {
  }

}
