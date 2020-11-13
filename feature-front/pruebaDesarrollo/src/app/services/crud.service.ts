import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';






@Injectable({
  providedIn: 'root'
})
export class CrudService {

  resultadoPeticion:any;
  token : any;
  nav:boolean = false;

  constructor(private _http: HttpClient,
              private _router:Router) {
                
               }

  tokenIngreso(user:any){
    // Enviar parametros al header  application/x-www-form-urlencoded
    const parametros = new HttpParams()
      .set('password',user.password)
      .set('usuario', user.usuario);
    
      let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
                                    .set("Authorization","Bearer" + localStorage.getItem("token"));

    this._http.post("/aut",parametros.toString(), {headers, observe:'response'})
      .subscribe(data => {
        this.resultadoPeticion = data.body;
        //Almacenamiento del Token -- Necesario observe:"response" para acceder a todo el data
        const key = data.headers.get("authorization");
        this.token = key;

        if(data.status == 200)
        this.cambioNav();
          this._router.navigate(['/consultas']);
          
          console.log(this.nav)
        });  
  }

  getConsulta(){
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
                                      .set("authorization", this.token);

    return this._http.get("/producto", {headers})
      
  }

  registroProducto(capturaDatos:any){

    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      .set("authorization", this.token);
    
    this._http.post(`/producto?cantidad=${capturaDatos.cantidad}&estado=${capturaDatos.estado}&fecha=${capturaDatos.fecha}&producto=${capturaDatos.producto}`,
                    {headers})
    .subscribe(data => {
    this.resultadoPeticion = data;
    }) 

    this._router.navigate(['/consultas']);
  }


  deleteId(id:any){

    let idRecibido = id;
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
                                      .set("authorization", this.token);
    
    this._http.delete(`/producto/${idRecibido}`, {headers, observe:'response'})
    .subscribe(data => {
      this.resultadoPeticion = data;
      if(data.status == 200)
      this.getConsulta().subscribe(data => {
        this.resultadoPeticion = data;
      });
    })
    
  }  

  getId(id:any){
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
                                      .set("authorization", this.token);

    return this._http.get(`/producto/${id}`, {headers})
  }

  update(param:any){

    const headers = new HttpHeaders()
                                      .set("Content-Type", "application/json")
                                      .set("authorization", this.token);
    
    this._http.put(`/producto/${param.id}?cantidad=${param.cantidad}&estado=${param.estado}&fecha=${param.fecha}&producto=${param.producto}`,{headers})
    .subscribe(data => {
      this.resultadoPeticion = data;
    });
  }

estadoNav(){
  return this.nav;
}

  cambioNav(){
    this.nav = !this.nav;
  }

}
