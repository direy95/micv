import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios.model';
import { EstudiosService } from 'src/app/services/estudios.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  public estudios:Estudios[]=[];
  constructor(private estudiosService: EstudiosService, private tokenService: TokenService) { }

  isLogged = false;
  editar = false;

  ngOnInit(): void {
    this.getEstudios();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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

  public OnEditar():void{
    this.editar=true;
  }
}
