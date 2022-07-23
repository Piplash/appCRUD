import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCrudRoutingModule } from './app-crud-routing.module';
import { AgregarComponent }     from './pages/agregar/agregar.component';
import { FormsModule }          from '@angular/forms';
import { HomeComponent }        from './pages/home/home.component';
import { InicioComponent }      from './pages/inicio/inicio.component';
import { ListarComponent }      from './pages/listar/listar.component';

@NgModule({
  declarations: [
    AgregarComponent,
    HomeComponent,
    InicioComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    AppCrudRoutingModule,
    FormsModule,
  ]
})
export class AppCrudModule { }
