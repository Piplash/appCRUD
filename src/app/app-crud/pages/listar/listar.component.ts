import { Component, OnInit } from '@angular/core';
import { Preparacion } from '../../interfaces/preparacion';
import { QuerysService } from 'src/app/services/querys.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
    `
      
      h2{
        font-family: 'Montserrat', sans-serif;
      }
    
      table{
        font-family: 'Josefin Sans', sans-serif;
        text-align:center;
        margin-top: 20px;
      }

      .eliminarEditar{
        cursor: pointer;
        transition: 0.5s;
      }

      .eliminarEditar:hover{
        color: grey;
        transition: 0.5s;
      }
    `
  ]
})
export class ListarComponent implements OnInit {
  //Definición del Array usuarios, de tipo Usuario
  preparaciones: Preparacion[] = [];

  //Inicialización de nuestro servicio QueryService y de Router
  constructor( private qs: QuerysService, private router: Router ) { }

  //Se llama luego de que ha iniciado todo
  ngOnInit(): void {
    //Llamamos y nos suscribimos al servicio "getUsuarios", que nos devuelve un arreglo de usuarios. Posteriormente se llena en el componente
    this.qs.getPreparaciones().subscribe((preparaciones) => (this.preparaciones = preparaciones));
    console.log("PREPARACIONES CARGADAS");
  }

  //Función que elimina un usuario de acuerdo a lo recibido.
  eliminarPreparacion(preparacion: Preparacion){
    //Llamamos al servicio deleteUsuario que recibe una id! (siempre la va a recibir), nos suscribimos y recarga la página para ver el resultado
    this.qs.deletePreparacion( preparacion.id! ).subscribe( resp => { window.location.reload(); });
    console.log("PREPARACION ", preparacion, "ELIMNINADA");
  }

  //Función para actualizar los datos de un usuario, de acuerdo al que reciba.
  updatePreparacion(preparacion: Preparacion){
    //Nos lleva a la ruta /editar/id según corresponda
    this.router.navigate(["editar/"+preparacion.id]);
  }


}
