import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private url = 'http://localhost:3000/values';

  constructor(private http: HttpClient) {}

  getValues(){
    return this.http.get(this.url);
  }
}
