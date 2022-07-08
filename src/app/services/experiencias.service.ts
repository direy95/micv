import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from '../model/experiencias.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
  url = "http://localhost:8080/experiencias";
  constructor(private http: HttpClient) { }

  public getExperiencia():Observable<Experiencias[]>{
    return this.http.get<Experiencias[]>(`${this.url}/traer`);
  }
}
