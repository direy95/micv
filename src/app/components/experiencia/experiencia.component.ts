import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/model/experiencias';
import { ExperienciasService } from 'src/app/services/experiencias.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia:Experiencias[] = [];
  constructor(private experienciaService: ExperienciasService, private tokenService:TokenService) { }
  isLogged=false;
  ngOnInit(): void {
    this.getExperiencia();
    if (this.tokenService.getToken()){
      this.isLogged=true;
    }
  }

  getExperiencia():void{
    this.experienciaService.lista().subscribe(data =>{this.experiencia = data;})
  }

  delete(id:number){
    if(id!=undefined){
      this.experienciaService.delete(id).subscribe(
        data=>{
          this.getExperiencia();
        }, err=>{
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
