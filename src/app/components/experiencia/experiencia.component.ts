import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/model/experiencias.model';
import { ExperienciasService } from 'src/app/services/experiencias.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias:Experiencias[]=[];

  constructor(private experienciasService: ExperienciasService) { }

  ngOnInit(): void {
    this.getExperiencia();
  }

  private getExperiencia():void{
    this.experienciasService.getExperiencia().subscribe({
      next:(Response:Experiencias[])=>{
        this.experiencias = Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
