import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajo } from '../model/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {
  url="https://micvback.herokuapp.com/trabajo/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Trabajo>{
    return this.httpClient.get<Trabajo>(this.url + `detail/${id}`);
  }

  public save(trabajo:Trabajo): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create/', trabajo);
  }

  public update(id:number, trabajo:Trabajo): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, trabajo);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
