import { Component } from '@angular/core';
import { cardData } from './components/card/card.data';
import { Card } from './model/card.model';

//to create angular component and not a es6 class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopnest_app';
  cards: Card[]= cardData;

currentSelectedCard! : Card;

  handleCardSelect(card: Card) {

    this.currentSelectedCard=card;
  
  }
}
