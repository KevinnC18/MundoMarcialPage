/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Optimización para carga más rápida
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZone: 'zone.js',
  ngZoneEventCoalescing: true,
  ngZoneRunCoalescing: true
})
.catch(err => console.error(err));