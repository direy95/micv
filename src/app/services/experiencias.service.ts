import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from '../model/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
  url="https://micvback.herokuapp.com/experiencia/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Experiencias[]>{
    return this.httpClient.get<Experiencias[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Experiencias>{
    return this.httpClient.get<Experiencias>(this.url + `detail/${id}`);
  }

  public save(experiencia:Experiencias): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create/', experiencia);
  }

  public update(id:number, experiencia:Experiencias): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
