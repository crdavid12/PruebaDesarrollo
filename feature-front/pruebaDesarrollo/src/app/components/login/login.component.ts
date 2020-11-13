import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  constructor(private _crudService:CrudService) {
      
      this._crudService.nav = false
   }

  ngOnInit(): void {
  }

  token(){
    let capturadatos={
      usuario: ((document.getElementById("usuario-login") as HTMLInputElement).value),
      password: ((document.getElementById("contraseña-login") as HTMLInputElement).value), 
    } 

    this._crudService.tokenIngreso(capturadatos);

  }

}
