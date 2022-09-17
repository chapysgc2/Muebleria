import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  public titulo : string = "";
  public comentario : string = "";
  public year: number = 0;



  constructor() { 
    this.titulo = "hola mundo"
    this.comentario = "este es un comentario"
    this.year = 2022
    console.log("componente cargado")

    console.log(this.comentario,this.titulo, this.year)
  }

  ngOnInit(): void {
  }

}
