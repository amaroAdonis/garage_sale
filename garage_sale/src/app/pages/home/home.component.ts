import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  

  images = [
    {
      imageSrc: 'assets/imgs/ex1.jpg',
      imageAlt: 'ex1',
    },
    {
      imageSrc: 'assets/imgs/ex2.jpg',
      imageAlt: 'ex4',
    },
    {
      imageSrc: 'assets/imgs/ex3.jpg',
      imageAlt: 'ex3',
    },
    {
      imageSrc: 'assets/imgs/logo.png',
      imageAlt: 'logo',
    }

  ]



}
