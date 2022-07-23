import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';

/*Carga a los hijos especificados en app-crud-routing. Y en caso de una ruta que no exista, redirecciona a Home*/
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-crud/app-crud.module').then( m => m.AppCrudModule )
  },
  {
    path: '**',
    redirectTo: 'Home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
