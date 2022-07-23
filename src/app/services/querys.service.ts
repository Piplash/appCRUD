import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Preparacion }    from '../app-crud/interfaces/preparacion';



@Injectable({
  providedIn: 'root'
})

export class QuerysService {

  //URL que se usa en cada petición
  private apiUrl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  //Servicio para obtener a todas las preperaciones. Recibe la petición y el Observable nos devuelve un arreglo de Preparaciones
  getPreparaciones(): Observable<Preparacion[]> {
    //Con la ruta /preparacion, podemos obtener todas las preparaciones
    return this.http.get<Preparacion[]>(this.apiUrl+"/preparacion");
  }

  //Servicio para eliminar una preparacion. Entregamos una id y el Observable puede devolver "cualquier cosa", puesto que no necesitamos información devuelta, solo la eliminación
  deletePreparacion( id: number ): Observable<any>{
    //Con la ruta /preparacion/id obtenemos una preparacion específico. Debido a que la petición http es delete, la elimina
    return this.http.delete<any>(this.apiUrl+"/preparacion/"+id);
  }

  //Servicio que registra una nueva preparacion. Entregamos una preparacion de tipo Preparacion y como respuesta, el Observable nos devuelve la misma preparacion.
  addPreparacion(preparacion: Preparacion): Observable<Preparacion>{
    //Con la ruta y entregando una preparacion, permite el registro a través del post
    return this.http.post<Preparacion>(this.apiUrl+"/preparacion", preparacion);
  }

  //Servicio que actualiza info de la Preparacion. Entregamos una preparacion y el Observable nos devuelve al mismo.
  updatePreparacion(preparacion: Preparacion): Observable<Preparacion>{
    //Con la ruta /preparacion/id identificamos una preparacion en específico y al entregar parámetros (preparacion), lo actualiza a través del put
    return this.http.put<Preparacion>(this.apiUrl+"/preparacion/"+preparacion.id, preparacion);
  }

  //Servicio que busca una preparacion en específico. El Observable devuelve dicha preparacion de tipo Preparacion
  buscarId( id: number ): Observable<Preparacion>{
    //Con la ruta /preparacion/id obtenemos una preparacion específico. Al ser petición get, vemos sus datos
    return this.http.get<Preparacion>(this.apiUrl+"/preparacion/"+id)
  }

}
