import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Ventana1Component } from './components/ventana1/ventana1.component';
import { MuebleriaComponent } from './components/muebleria/muebleria.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { BarraFinalComponent } from './components/barra-final/barra-final.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Ventana1Component,
    MuebleriaComponent,
    BarraNavegacionComponent,
    BarraFinalComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      {path: '', component: InicioComponent},
      {path: 'muebles', component: MuebleriaComponent},
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
