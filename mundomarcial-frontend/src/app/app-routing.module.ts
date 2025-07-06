import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { InstructoresComponent } from './components/instructores/instructores.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { CapsulasComponent } from './components/capsulas/capsulas.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { EventosComponent } from './components/eventos/eventos.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: AboutComponent },
  { path: 'instructores', component: InstructoresComponent },
  { path: 'capsulas', component: CapsulasComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'eventos', component: EventosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }