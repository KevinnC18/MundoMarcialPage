import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  isScrolled = false;
  isMobile = false;

  menuOpen = false;

  constructor() {
    this.checkScreenSize();
  }
  ngAfterViewInit(): void {
    // Sincroniza el estado del menú con los eventos de Bootstrap
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      navbarCollapse.addEventListener('show.bs.collapse', () => {
        this.menuOpen = true;
      });
      navbarCollapse.addEventListener('hide.bs.collapse', () => {
        this.menuOpen = false;
      });
    }
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
