import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  url="http://localhost:8080/estudio/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Estudios[]>{
    return this.httpClient.get<Estudios[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.url + `detail/${id}`);
  }

  public save(trabajo:Estudios): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create/', trabajo);
  }

  public update(id:number, trabajo:Estudios): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, trabajo);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
