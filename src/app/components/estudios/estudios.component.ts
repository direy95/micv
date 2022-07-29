import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
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

  ngOnInit(): void {
    this.getEstudios();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getEstudios():void{
    this.estudiosService.lista().subscribe(data =>{this.estudios = data;})
  }

  delete(id:number){
    if(id!=undefined){
      this.estudiosService.delete(id).subscribe(
        data=>{
          this.getEstudios();
        }, err=>{
          alert("No se pudo borrar el estudio ");
        }
      )
    }
  }
}
