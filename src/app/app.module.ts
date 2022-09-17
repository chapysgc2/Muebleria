import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Ventana1Component } from './components/ventana1/ventana1.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Ventana1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
