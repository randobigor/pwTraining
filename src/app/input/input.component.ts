import { Component } from '@angular/core';
import { StoreDataService } from '../store-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent{
  inputX = '';
  inputY = '';

  constructor(private transfer: StoreDataService) {}

  getSum() {
    this.transfer.setData(parseFloat(this.inputX) + parseFloat(this.inputY));
  }
}
