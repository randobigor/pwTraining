import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../store-data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  data = 'Тут пока ничего нет :/';

  constructor(private storedData: StoreDataService) {}

  ngOnInit() {
    this.data = this.storedData.getData() || '';
  }

}
