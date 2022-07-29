import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/model/trabajo';
import { TokenService } from 'src/app/services/token.service';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
  trabajo:Trabajo[] = [];
  constructor(private trabajoService: TrabajosService, private tokenService:TokenService) { }
  isLogged=false;
  ngOnInit(): void {
    this.getTrabajo();
    if (this.tokenService.getToken()){
      this.isLogged=true;
    }
  }

  getTrabajo():void{
    this.trabajoService.lista().subscribe(data =>{this.trabajo = data;})
  }

  delete(id:number){
    if(id!=undefined){
      this.trabajoService.delete(id).subscribe(
        data=>{
          this.getTrabajo();
        }, err=>{
          alert("No se pudo borrar el trabajo");
        }
      )
    }
  }

}


