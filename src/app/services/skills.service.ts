import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = "https://micvback.herokuapp.com/habilidad/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.url + `detail/${id}`);
  }

  public save(skill:Skills): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create/', skill);
  }

  public update(id:number, skill:Skills): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, skill);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
