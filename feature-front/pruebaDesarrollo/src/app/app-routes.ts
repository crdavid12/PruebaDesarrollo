import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { LoginComponent } from './components/login/login.component';





const APP_ROUTES: Routes=[
    { path: 'consultas', component: ConsultasComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'visualizar/:id', component: VisualizarComponent},
    { path: 'login', component: LoginComponent},

    { path: '**', pathMatch:'full', redirectTo:'login'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);