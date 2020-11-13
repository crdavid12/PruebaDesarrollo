import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  contadorId:number = 10;
  
  constructor( private _router : Router,
              private _crudService : CrudService) { 
              }

  ngOnInit(): void {
  }

  post(){
    
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let anio = fecha.getFullYear();

    let fechaActual = `${dia}%2F${mes}%2F${anio}`;
 

    let capturadatos={
      producto: ((document.getElementById("producto") as HTMLInputElement).value),
      cantidad: ((document.getElementById("cantidad") as HTMLInputElement).value),
      estado: ((document.getElementById("estado") as HTMLInputElement).value),
      fecha: fechaActual,
    } 
    this._crudService.registroProducto(capturadatos);
  }

  



}
