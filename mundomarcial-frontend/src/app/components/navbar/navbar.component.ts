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
    this.setupMenuListeners();
  }

  private setupMenuListeners(): void {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbar = document.querySelector('.navbar');
    
    if (navbarCollapse) {
      // Escuchar eventos de Bootstrap
      navbarCollapse.addEventListener('show.bs.collapse', () => {
        this.menuOpen = true;
        this.expandNavbarBackground();
      });
      
      navbarCollapse.addEventListener('hide.bs.collapse', () => {
        this.menuOpen = false;
        this.contractNavbarBackground();
      });

      // Escuchar eventos de clic en el botón toggler
      if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
          this.toggleMenu();
        });
      }

      // Cerrar menú al hacer clic en un enlace (solo en móvil)
      const navLinks = navbarCollapse.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (this.isMobile && this.menuOpen) {
            this.closeMenu();
          }
        });
      });
    }
  }

  toggleMenu(): void {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      if (this.menuOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    }
  }

  openMenu(): void {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      navbarCollapse.classList.add('show');
      this.menuOpen = true;
      this.expandNavbarBackground();
    }
  }

  closeMenu(): void {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
      this.menuOpen = false;
      this.contractNavbarBackground();
    }
  }

  private expandNavbarBackground(): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    
    if (navbar && this.isMobile && navbarCollapse) {
      // Calcular la altura del menú desplegable
      const menuHeight = navbarCollapse.scrollHeight;
      const navbarHeight = navbar.scrollHeight;
      const totalHeight = navbarHeight + menuHeight;
      
      // Aplicar la altura calculada
      navbar.style.setProperty('--menu-height', `${totalHeight}px`);
      navbar.classList.add('navbar-expanded');
    }
  }

  private contractNavbarBackground(): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (navbar && this.isMobile) {
      navbar.classList.remove('navbar-expanded');
      navbar.style.removeProperty('--menu-height');
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
    // Cerrar menú si se cambia de móvil a desktop
    if (!this.isMobile && this.menuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isMobile) {
      this.isScrolled = window.scrollY > 50; // Se encoge al bajar, se expande al subir
    } else {
      this.isScrolled = window.scrollY > 50;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Cerrar menú si se hace clic fuera del navbar (solo en móvil)
    if (this.isMobile && this.menuOpen && navbarCollapse && navbarToggler) {
      const target = event.target as HTMLElement;
      if (!navbarCollapse.contains(target) && !navbarToggler.contains(target)) {
        this.closeMenu();
      }
    }
  }

  private checkScreenSize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768; // Define si es móvil según el ancho de la pantalla
    
    // Si cambió de desktop a móvil, asegurar que el menú esté cerrado
    if (!wasMobile && this.isMobile && this.menuOpen) {
      this.closeMenu();
    }
  }
}
