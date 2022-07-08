import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios.model';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  url = "http://localhost:8080/estudios";
  constructor(private http: HttpClient) { }

  public getEstudio():Observable<Estudios[]>{
    return this.http.get<Estudios[]>(`${this.url}/traer`);
  }
}
