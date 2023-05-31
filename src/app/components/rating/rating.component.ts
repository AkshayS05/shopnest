import { Component, Input } from '@angular/core';
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
//getting an input number-->rating
@Input() rating!: number;
faStar = faStar;
faStarHalfStroke = faStarHalfStroke;

//checkif rating has any decimal value then display half star as well
get hasDecimal(){
  return this.rating%2===0;
};

get ratingStars(){
  return new Array(Math.floor(this.rating));
}
}
