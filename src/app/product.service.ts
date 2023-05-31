import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './model/card.model';
import { Observable } from 'rxjs';

@Injectable({
  //it will register the services to root i.e app or we can also add it explicitly
  providedIn: 'root'
})

export class ProductService {


  //here if we are getting data from the backend
  constructor(private http: HttpClient) { 

  }
    getCardData():Observable<any>{
      return this.http.get('https://shopnest-7fac2-default-rtdb.firebaseio.com/products.json')
      
  }
}
