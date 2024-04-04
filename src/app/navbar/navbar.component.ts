import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  onClick($event: any) {
    console.log($event)
    let element = document.getElementById('about-us');
    console.log(element)
    window.scrollTo(0, element!.offsetTop-75);
  }
}
