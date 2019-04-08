import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  values : any = [];

  constructor(private dataService : DatabaseService) {}

  ngOnInit() {
    this.dataService.getValues().subscribe(data => this.values = data);
  }

}
