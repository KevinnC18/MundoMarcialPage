# Mundo Marcial - Frontend

Frontend web de **Mundo Marcial**, una escuela de Taekwondo y formación deportiva WT con presencia en las ciudades de Bogotá y Villavicencio. Esta aplicación web proporciona información sobre la academia, cápsulas educativas, galería de imágenes y más.

## 🚀 Tecnologías

Este proyecto está construido con:

- **Angular 16.2.12** - Framework principal
- **TypeScript 5.1.3** - Lenguaje de programación
- **Bootstrap 5.3.6** - Framework CSS para diseño responsive
- **ng-bootstrap 15.1.2** - Componentes Bootstrap para Angular
- **FontAwesome 6.7.2** - Iconografía
- **RxJS 7.8.0** - Programación reactiva

## 📁 Estructura del Proyecto

```
mundomarcial-frontend/
├── src/
│   ├── app/
│   │   ├── features/              # Módulos de características principales
│   │   │   ├── about/             # Módulo de inicio/acerca de
│   │   │   ├── academia/          # Módulo de información sobre la academia
│   │   │   │   ├── components/    # Componentes hijos de academia
│   │   │   │   │   ├── horarios/  # Componente de horarios
│   │   │   │   │   ├── instructores/ # Componente de instructores
│   │   │   │   │   └── ubicacion/ # Componente de ubicación
│   │   │   │   └── pages/         # Páginas del módulo
│   │   │   │       └── academia-page/ # Página principal de academia
│   │   │   ├── capsulas/          # Cápsulas educativas
│   │   │   └── galeria/           # Módulo de galería de imágenes
│   │   ├── layout/                # Componentes de diseño compartidos
│   │   │   ├── carousel/          # Carrusel de imágenes principal
│   │   │   ├── footer/            # Pie de página
│   │   │   ├── navbar/            # Barra de navegación
│   │   │   └── layout.module.ts   # Módulo de layout
│   │   ├── shared/                # Componentes y utilidades compartidas
│   │   │   └── components/        # Componentes compartidos
│   │   │       ├── not-found/     # Componente de página no encontrada
│   │   │       └── shared.module.ts # Módulo compartido
│   │   ├── app-routing.module.ts  # Configuración de rutas
│   │   ├── app.component.ts       # Componente raíz
│   │   └── app.module.ts          # Módulo principal
│   ├── index.html                 # HTML principal
│   ├── main.ts                    # Punto de entrada
│   └── styles.css                 # Estilos globales
├── angular.json                   # Configuración de Angular
├── package.json                   # Dependencias del proyecto
└── tsconfig.json                  # Configuración de TypeScript
```

## 🗺️ Rutas de la Aplicación

La aplicación incluye las siguientes rutas con lazy loading:

- `/` - Redirige a `/inicio`
- `/inicio` - Página principal (AboutComponent)
- `/academia` - Información sobre la academia (AcademiaPageComponent) - *Lazy loaded*
- `/capsulas` - Cápsulas educativas (CapsulasComponent) - *Lazy loaded*
- `/galeria` - Galería de imágenes (GaleriaComponent) - *Lazy loaded*
- `/**` - Página no encontrada (NotFoundComponent) - *Lazy loaded*

## 🎨 Características

### Componentes Principales

#### Layout (Componentes de Diseño)
- **NavbarComponent**: Barra de navegación responsive con menú móvil adaptativo
- **CarouselComponent**: Carrusel de imágenes principal en la página de inicio
- **FooterComponent**: Pie de página con información de contacto y enlaces

#### Features (Características)
- **AboutComponent**: Página de inicio con información sobre Mundo Marcial
- **AcademiaPageComponent**: Página principal con información detallada sobre la academia
  - **HorariosComponent**: Muestra los horarios de clases
  - **InstructoresComponent**: Información sobre los instructores
  - **UbicacionComponent**: Información de ubicación de las sedes
- **CapsulasComponent**: Cápsulas educativas y contenido formativo
- **GaleriaComponent**: Galería de imágenes de eventos y actividades

#### Shared (Compartidos)
- **NotFoundComponent**: Componente para páginas no encontradas (404)

### Funcionalidades

- ✅ Arquitectura modular con separación de features, layout y shared
- ✅ Lazy loading de componentes para optimizar la carga inicial
- ✅ Navegación responsive con menú adaptativo para móviles
- ✅ Animaciones de transición entre rutas
- ✅ Scroll automático al inicio al cambiar de ruta
- ✅ Diseño responsive con Bootstrap 5
- ✅ Integración con FontAwesome para iconos
- ✅ Módulos independientes por feature para mejor organización

### Optimizaciones

El proyecto incluye varias optimizaciones:

- **Lazy loading de componentes**: Los componentes principales se cargan bajo demanda usando `loadComponent()`
- **Arquitectura modular**: Separación clara entre features, layout y componentes compartidos
- **Módulos por feature**: Cada característica principal tiene su propio módulo para mejor organización y mantenibilidad
- **Optimización de bundles**: Configuración de chunks y optimización de producción

## 👥 Autor

Este proyecto fue desarrollado por:

- [@KevinC18](https://github.com/KevinnC18)

## 📄 Licencia

Este proyecto es privado y pertenece a Mundo Marcial.

## 📞 Contacto

Para más información sobre Mundo Marcial, visita el sitio web o contactanos a través de los canales oficiales.

---

**Mundo Marcial** - Escuela de Taekwondo y Formación Deportiva WT  
Bogotá y Villavicencio, Colombia
