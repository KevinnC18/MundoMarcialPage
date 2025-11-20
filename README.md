# Mundo Marcial - Frontend

Frontend web de **Mundo Marcial**, una escuela de Taekwondo y formación deportiva WT con presencia en las ciudades de Bogotá y Villavicencio. Esta aplicación web proporciona información sobre la academia, eventos, cápsulas educativas, galería de imágenes y más.

## 🚀 Tecnologías

Este proyecto está construido con:

- **Angular 16.2.12** - Framework principal
- **TypeScript 5.1.3** - Lenguaje de programación
- **Bootstrap 5.3.6** - Framework CSS para diseño responsive
- **Angular Material 16.2.14** - Componentes UI de Material Design
- **ng-bootstrap 15.1.2** - Componentes Bootstrap para Angular
- **FontAwesome 6.7.2** - Iconografía
- **RxJS 7.8.0** - Programación reactiva

## 📁 Estructura del Proyecto

```
mundomarcial-frontend/
├── src/
│   ├── app/
│   │   ├── components/         # Componentes de la aplicación
│   │   │   ├── about/          # Componente de inicio/acerca de
│   │   │   ├── academia/       # Información sobre la academia
│   │   │   ├── capsulas/       # Cápsulas educativas
│   │   │   ├── carousel/       # Carrusel de imágenes principal
│   │   │   ├── eventos/        # Eventos y actividades
│   │   │   ├── footer/         # Pie de página
│   │   │   ├── galeria/        # Galería de imágenes
│   │   │   └── navbar/         # Barra de navegación
│   │   ├── app-routing.module.ts  # Configuración de rutas
│   │   ├── app.component.ts    # Componente raíz
│   │   └── app.module.ts       # Módulo principal
│   ├── index.html              # HTML principal
│   ├── main.ts                 # Punto de entrada
│   └── styles.scss             # Estilos globales
├── angular.json                # Configuración de Angular
├── package.json                # Dependencias del proyecto
└── tsconfig.json               # Configuración de TypeScript
```

## 🗺️ Rutas de la Aplicación

La aplicación incluye las siguientes rutas:

- `/` o `/inicio` - Página principal (AboutComponent)
- `/academia` - Información sobre la academia (AcademiaComponent)
- `/capsulas` - Cápsulas educativas (CapsulasComponent)
- `/galeria` - Galería de imágenes (GaleriaComponent)
- `/eventos` - Eventos y actividades (EventosComponent)

## 🎨 Características

### Componentes Principales

- **NavbarComponent**: Barra de navegación responsive con menú móvil adaptativo
- **CarouselComponent**: Carrusel de imágenes principal en la página de inicio
- **AboutComponent**: Página de inicio con información sobre Mundo Marcial
- **AcademiaComponent**: Información detallada sobre la academia
- **CapsulasComponent**: Cápsulas educativas y contenido formativo
- **GaleriaComponent**: Galería de imágenes de eventos y actividades
- **EventosComponent**: Información sobre eventos y actividades
- **FooterComponent**: Pie de página con información de contacto y enlaces

### Funcionalidades

- ✅ Navegación responsive con menú adaptativo para móviles
- ✅ Animaciones de transición entre rutas
- ✅ Scroll automático al inicio al cambiar de ruta
- ✅ Diseño responsive con Bootstrap 5
- ✅ Componentes de Material Design
- ✅ Optimización de carga con preload de recursos
- ✅ Integración con FontAwesome para iconos

### Optimizaciones

El proyecto incluye varias optimizaciones:

- **Preload de recursos críticos**: Fuentes y estilos se cargan de forma asíncrona
- **Lazy loading**: Estrategia de precarga de módulos configurada
- **Service Worker**: Preparado para PWA (Progressive Web App)
- **Optimización de bundles**: Configuración de chunks y optimización de producción

## 📄 Licencia

Este proyecto es privado y pertenece a Mundo Marcial.

## 📞 Contacto

Para más información sobre Mundo Marcial, visita el sitio web o contacta a través de los canales oficiales.

---

**Mundo Marcial** - Escuela de Taekwondo y Formación Deportiva WT  
Bogotá y Villavicencio, Colombia
