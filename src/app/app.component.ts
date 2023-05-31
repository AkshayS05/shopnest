import { Component, OnInit } from '@angular/core';
import { cardData } from './components/card/card.data';
import { Card } from './model/card.model';
import { ProductService } from './product.service';

//to create angular component and not a es6 class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//ngOnInt is teh time when component is fully loaded
export class AppComponent implements OnInit {
  title = 'shopnest_app';
  cards: Card[]= [];

currentSelectedCard! : Card;

//injecting a service-- here component is getting created
constructor(private productService: ProductService){

}

//here component is completely built
ngOnInit(): void {
    this.cards = this.productService.getCardData();
}

  handleCardSelect(card: Card) {

    this.currentSelectedCard=card;
  
  }
}
