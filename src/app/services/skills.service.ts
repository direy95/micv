import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../model/skills.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = "http://localhost:8080/habilidades";
  constructor(private http:HttpClient) { }

  public getSkill():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.url}/traer`)
  }
}
