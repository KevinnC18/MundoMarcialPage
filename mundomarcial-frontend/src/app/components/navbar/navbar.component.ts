import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isMobile = false;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isMobile) {
      // Comportamiento para móviles
      this.isScrolled = window.scrollY > 50; // Se encoge al bajar
      this.isScrolled = window.scrollY < 50; // Se expande al subir
    } else {
      // Comportamiento para computadoras
      this.isScrolled = window.scrollY < 50; // Se expande al estar arriba
      this.isScrolled = window.scrollY > 50;
    }
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Define si es móvil según el ancho de la pantalla
  }
}
