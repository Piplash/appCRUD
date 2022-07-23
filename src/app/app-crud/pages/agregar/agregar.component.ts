import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import { DatePipe }               from '@angular/common'
import { QuerysService }          from 'src/app/services/querys.service';
import { switchMap }              from 'rxjs/operators';
import { Preparacion }                from '../../interfaces/preparacion';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      h2{
        font-family: 'Montserrat', sans-serif;
      }

      .formulario{
        font-family: 'Josefin Sans', sans-serif;
      }

      .btn-custom{
        background-color: rgb(254, 155, 42);
        color: white;
        transition: 0.4s;
      }

      .btn-custom:hover{
        background-color: rgb(0 0 0 / 30%);
        transition: 0.4s;
      }

      .alert{
        color: red;
        font-size: 13px;
      }
    `
  ],
  providers: [DatePipe]
})
export class AgregarComponent implements OnInit {

  //Inicialización del servicio, router y activatedroute
  constructor( private qs: QuerysService, private activatedRoute: ActivatedRoute, private router: Router, public datepipe: DatePipe ) { }

  //Fecha actual en formato aceptado
  myDate = new Date().toISOString().slice(0, 10);
  
  //Datos por defecto del Usuario
  preparacion: Preparacion = {
    nombre: '',
    creador: '',
    descripcion: '',
    ingredientes: 1,
    grados: 0,
    creacion: this.myDate,
    restriccion: true
  }

  //Al inicio realiza la acción
  ngOnInit(): void {

    //Preguntamos si dentro de la ruta está incluido "editar". Solo debe darse en el caso de que se haya navegado haciendo click al botón editar. 
    //En caso contrario, se salta este paso

    if(this.router.url.includes('editar')){
      //En caso de existir, obtenemos los parametros de la ruta activa, que corresponden a 'idUsuario' según lo definido en app-crud-routing
      this.activatedRoute.params
      .pipe(
        //Llamamos al servicio buscarId, y entregamos el parámetros id. Nos suscribimos y nos devuelve un usuario de tipo Usuario, permitiendo el llenado automático para la edición
        switchMap( params => this.qs.buscarId(params['idPreparacion']))
      )
      .subscribe( preparacion => this.preparacion = preparacion)
    }
    console.log(this.myDate);

  }

  //Función guardarDatos. Dependiendo de las condiciones registra o actualiza un usuario
  guardarDatos(){
    //Si alguna de las condiciones no se cumple, el proceso se termina
    if( 
        this.preparacion.nombre.trim().length < 2 ||
        this.preparacion.creador.trim().length < 2 ||
        this.preparacion.descripcion.trim().length === 0 ||
        this.preparacion.ingredientes < 1 ||
        (this.preparacion.grados < 0 || this.preparacion.grados > 100 ) ||
        this.preparacion.creacion === null
        ){
      console.log("Error");
      return;
    }
    
    //Si no hay errores, continúa y preguntamos si es que tenemos la id de la preparación.
    //Por defecto no existe, pero si estamos editando viene en la ruta. 
    if(this.preparacion.id){
      //Llamamos al servicio updateUsuario enviándole un usuario, nos suscribimos y nos envía a la pestaña "listar" con los datos ya actualizados
      console.log("ACTUALIZANDO PREPARACION")
      this.qs.updatePreparacion(this.preparacion).subscribe( resp => this.router.navigate(['listar']))
      console.log("PREPARACION ", this.preparacion.id, " ACTUALIZADA")
    }else{
      //En caso de que la id no exista, llamamos al servicio addUsuario, nos suscribimos y navegamos a la pestaña "listar" con un nuevo usuario reigstrado
      console.log("REGISTRANDO PREPARACION");
      this.qs.addPreparacion(this.preparacion).subscribe( resp => this.router.navigate(['listar']))
      console.log("PREPARACION ", this.preparacion, " REGISTRADA");
    }
  }

}
