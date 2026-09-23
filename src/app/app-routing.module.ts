import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: AboutComponent },
  {
    path: 'academia',
    loadComponent: () => import('./features/academia/pages/academia-page/academia-page.component').then(m => m.AcademiaPageComponent)
  },
  {
    path: 'capsulas',
    loadComponent: () => import('./features/capsulas/capsulas.component').then(m => m.CapsulasComponent)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./features/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }