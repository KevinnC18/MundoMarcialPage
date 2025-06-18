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
      this.isScrolled = window.scrollY > 50; // Se encoge al bajar, se expande al subir
    } else {
      this.isScrolled = window.scrollY > 50; // Solo se encoge al bajar
    }
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Define si es móvil según el ancho de la pantalla
  }
}
