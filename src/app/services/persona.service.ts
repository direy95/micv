import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = "http://localhost:8080/personas/";
  constructor(private http: HttpClient) { }
  //El observable se usa para hacer peticiones asincronicas
  //http utiliza observable para manejar peticiones
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer');
  }
}
