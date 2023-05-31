import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from './model/card.model';
import { ProductService } from './product.service';
import { Observable, Subscription } from 'rxjs';

//to create angular component and not a es6 class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//ngOnInt is teh time when component is fully loaded
export class AppComponent implements OnInit, OnDestroy {
  title = 'shopnest_app';
  cards: any;
  currentSelectedCard! : Card;
  sub!: Subscription;

//injecting a service-- here component is getting created
constructor(private productService: ProductService){

}

//here component is completely built
ngOnInit(): void {
this.sub = this.productService.getCardData().subscribe(
  data =>{
  const response = []
  for (let key in data){
    console.log(key);
    const responseItem ={
      id: key,
      ...data[key]
    }
    response.push(responseItem)
    this.cards = response;
  }
});
}

ngOnDestroy():void{
  if(this.sub){
    this.sub.unsubscribe();
  }
}

  handleCardSelect(card: Card) {

    this.currentSelectedCard=card;
  
  }
}
