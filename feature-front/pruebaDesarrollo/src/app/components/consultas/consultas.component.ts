import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';



@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styles: [
  ]
})
export class ConsultasComponent implements OnInit {

  get:any = [];

  idRecibido:any;



  constructor(private _router : Router,
              private _crudService : CrudService) { 
                
                this.getFull();
                this._crudService.nav = true
                console.log("consulta= ", this._crudService.nav)
              }

  ngOnInit(): void {
    
  }

  getFull(){
    this._crudService.getConsulta().subscribe(data => {
      this.get = data;
    });
  }

  registro(){
    this._router.navigate(['/registro']);
  }



  deleteId(id:any){
    let idrecibido = id

    this._crudService.deleteId(idrecibido);
  }

  getId(id:any){
    this.idRecibido =id;
    this._router.navigate([`/visualizar/${id}`]);
    this._crudService.getId(this.idRecibido);

  }

}
