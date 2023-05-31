import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //pass the value to the card component
@Input() card!:Card;
// to get out the data from the component
@Output() onCardSelect= new EventEmitter<Card>();

//to show a limited amount of information
trimText(subTitle:string){
  return subTitle.substring(0, 75) +'...';
}

//if item is out of stock, disable that button of add to card
get isDisabled(){
  return this.card.stock === 0;
}

handleClick(){
  this.onCardSelect.emit(this.card);
}
}
