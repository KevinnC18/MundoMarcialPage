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
    // Inicializar el carousel manualmente para asegurar que funcione en producción
    this.initializeCarousel();
  }

  private initializeCarousel() {
    try {
      // Esperar a que el DOM esté completamente cargado
      setTimeout(() => {
        const carouselElement = document.getElementById('carouselMundoMarcial');
        if (carouselElement && typeof bootstrap !== 'undefined') {
          // Inicializar el carousel de Bootstrap
          const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 6000, // Cambiar slide cada 6 segundos
            wrap: true,     // Permitir loop infinito
            keyboard: true, // Permitir navegación con teclado
            pause: 'hover'  // Pausar en hover
          });
          
          console.log('Carousel inicializado correctamente');
        } else {
          console.warn('Bootstrap no está disponible o el elemento carousel no se encontró');
        }
      }, 100);
    } catch (error) {
      console.error('Error al inicializar el carousel:', error);
    }
  }
}