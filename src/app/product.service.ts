import { Injectable } from '@angular/core';
import { cardData } from './components/card/card.data';
import { Card } from './model/card.model';

@Injectable({
  //it will register the services to root i.e app or we can also add it explicitly
  providedIn: 'root'
})

export class ProductService {

  private cardData =  cardData;

  //here if we are getting data from the backend
  constructor() { 

  }
    getCardData():Card[]{
      return this.cardData;
  }
}
