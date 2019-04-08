import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../store-data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  private data : any = "Тут пока ничего нет :/";

  constructor(private storedData : StoreDataService) { 
    
   }

  ngOnInit() {
    if(this.storedData.getData() != undefined){
      this.data = this.storedData.getData();
    }
  }

}
