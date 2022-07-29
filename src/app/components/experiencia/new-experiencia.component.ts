import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { Experiencias } from 'src/app/model/experiencias';
import { ExperienciasService } from 'src/app/services/experiencias.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombre:string="";
  descExp:string="";
  anoI:number=null;
  anoF:number=null;
  expImg:string="";

  constructor(private expService:ExperienciasService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const exp = new Experiencias(this.nombre, this.descExp, this.anoI, this.anoF, this.expImg);
    this.expService.save(exp).subscribe(data =>{
      alert("Experiencia añadida"); 
      this.router.navigate(['']);
    }, err =>{ 
      alert("Falló");
      console.log(exp);
      this.router.navigate(['']);
    }
    )
  }

}
