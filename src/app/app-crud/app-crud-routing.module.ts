import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { InicioComponent }  from './pages/inicio/inicio.component';
import { HomeComponent }    from './pages/home/home.component';
import { ListarComponent }  from './pages/listar/listar.component';

//Rutas cargadas desde app-routing, cuyo componente por defecto es HomeComponent. Se cargan los componentes de acuerdo a la ruta escogida.
const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'inicio'            , component: InicioComponent },
    { path: 'agregar'           , component: AgregarComponent },
    { path: 'listar'            , component: ListarComponent },
    { path: 'editar/:idPreparacion' , component: AgregarComponent },
    { path: '**'      , redirectTo: 'inicio'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCrudRoutingModule { }
