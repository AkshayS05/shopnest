import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
banner = {
  heading: 'Spring season is back!',
  subHeading: 'And so is our offers too. So why waiting?',
  cta: 'Check out all Products',
  url: 'https://www.a,mazon.ca'
};
};
