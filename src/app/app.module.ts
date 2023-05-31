import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/banner/shared/navbar/navbar.component';
import { FooterComponent } from './components/banner/shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { StockPipe } from './pipes/stock.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingComponent } from './components/rating/rating.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    StockPipe,
    RatingComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
