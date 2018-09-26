import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http:HttpClient) { }

  // Uses http.get() to load data from a single API endpoint
  getUsers() {
      return this.http.get('http://localhost:3000/users');
  }
}
