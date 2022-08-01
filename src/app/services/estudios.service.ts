import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  url="https://micvback.herokuapp.com/estudio/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Estudios[]>{
    return this.httpClient.get<Estudios[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.url + `detail/${id}`);
  }

  public save(estudio:Estudios): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create/', estudio);
  }

  public update(id:number, estudio:Estudios): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, estudio);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
