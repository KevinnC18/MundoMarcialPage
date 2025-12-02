import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/components/shared.module';
import { AcademiaModule } from './features/academia/academia.module';
import { AboutModule } from './features/about/about.module';
import { GaleriaModule } from './features/galeria/galeria.module';
import { EventosModule } from './features/eventos/eventos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // Layout
    LayoutModule,

    // Shared
    SharedModule,

    // Features
    AcademiaModule,
    AboutModule,
    GaleriaModule,
    EventosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }