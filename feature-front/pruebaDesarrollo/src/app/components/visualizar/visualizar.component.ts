import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';



@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styles: [
  ]
})
export class VisualizarComponent implements OnInit {

  
  capturaId:any;
  get:any

  constructor( private _router:Router,
              private _crudService:CrudService,
              private _activateRoute: ActivatedRoute) { 

                this._activateRoute.params.subscribe(params =>{
                  this.capturaId = params["id"];
                  this.getId(this.capturaId);
                })
              }

  ngOnInit(): void {
  }

  consultas(){
    this._router.navigate(['/consultas']);
  }

  getId(id:any){
    let idRecibido = id; 
    this._crudService.getId(idRecibido).subscribe(data => {
      this.get = data;
      console.log(this.get)
    });
  } 

  update(){
    let capturadatos={
      producto: ((document.getElementById("registroProductTitulo") as HTMLInputElement).value),
      cantidad: ((document.getElementById("registroProductCantidad") as HTMLInputElement).value),
      estado: ((document.getElementById("registroProductEstado") as HTMLInputElement).value),
      fecha: this.get.fecha,
      id : this.get.id
    } 
    this._crudService.update(capturadatos);

    this._router.navigate(['/consultas']);
  }

}
