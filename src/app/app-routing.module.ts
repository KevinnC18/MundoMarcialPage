import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AcademiaComponent } from './components/academia/academia.component';
import { CapsulasComponent } from './components/capsulas/capsulas.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { EventosComponent } from './components/eventos/eventos.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: AboutComponent },
  { path: 'academia', component: AcademiaComponent },
  { path: 'capsulas', component: CapsulasComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'eventos', component: EventosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }