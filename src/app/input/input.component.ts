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

  getSum(x, y){
    this.transfer.setData(parseInt(x) + parseInt(y));
  }
}
