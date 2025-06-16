import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { InstructoresComponent } from './components/instructores/instructores.component';
import { CapsulasComponent } from './components/capsulas/capsulas.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: AboutComponent },
  { path: 'instructores', component: InstructoresComponent },
  { path: 'capsulas', component: CapsulasComponent },
  { path: 'galeria', component: GaleriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }