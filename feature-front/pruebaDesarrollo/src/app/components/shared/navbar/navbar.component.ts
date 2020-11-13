import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  nav:boolean;

  constructor(private _crudService:CrudService) { 
    this.nav = this._crudService.estadoNav();
    console.log(this.nav)
  }

  ngOnInit(): void {
    
  }

  estdoNav(){
    
  }

}
