import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = "https://micvback.herokuapp.com/personas/";
  constructor(private http: HttpClient) { }
  //El observable se usa para hacer peticiones asincronicas
  //http utiliza observable para manejar peticiones
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer');
  }

  public update(id:number, persona:persona): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, persona);
  }
}
