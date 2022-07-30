import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = "http://localhost:8080/habilidad/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.url + `detail/${id}`);
  }

  public save(trabajo:Skills): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create/', trabajo);
  }

  public update(id:number, trabajo:Skills): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, trabajo);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
