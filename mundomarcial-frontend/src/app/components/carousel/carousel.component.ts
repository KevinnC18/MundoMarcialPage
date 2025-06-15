import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  ngAfterViewInit() {
    const carouselElement = document.querySelector('#carouselMundoMarcial');
    console.log('Carousel Element:', carouselElement); 
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 8000, 
        ride: 'carousel'
      });
    } else {
      console.error('El elemento del carrusel no se encontró.');
    }
  }
}