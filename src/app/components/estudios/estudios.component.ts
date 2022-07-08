import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios.model';
import { EstudiosService } from 'src/app/services/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  public estudios:Estudios[]=[];
  constructor(private estudiosService: EstudiosService) { }

  ngOnInit(): void {
    this.getEstudios();
  }

  public getEstudios():void{
    this.estudiosService.getEstudio().subscribe({
      next:(Response: Estudios[])=>{
        this.estudios=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
