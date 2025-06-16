import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CapsulasComponent } from './components/capsulas/capsulas.component';
import { AboutComponent } from './components/about/about.component';
import { InstructoresComponent } from './components/instructores/instructores.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HorariosComponent } from './components/horarios/horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AboutComponent,
    InstructoresComponent,
    FooterComponent,
    CapsulasComponent,
    GaleriaComponent,
    HorariosComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
