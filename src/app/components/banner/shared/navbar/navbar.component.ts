import { Component } from '@angular/core';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //create  alocal variable and assign to the icon we want to use
faDumpster = faDumpster;
}
