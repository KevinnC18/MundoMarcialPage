import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: AboutComponent },
  {
    path: 'academia',
    loadComponent: () => import('./components/academia/academia.component').then(m => m.AcademiaComponent)
  },
  {
    path: 'capsulas',
    loadComponent: () => import('./components/capsulas/capsulas.component').then(m => m.CapsulasComponent)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./components/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  {
    path: 'eventos',
    loadComponent: () => import('./components/eventos/eventos.component').then(m => m.EventosComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }