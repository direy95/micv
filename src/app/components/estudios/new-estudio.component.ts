import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';

@Component({
  selector: 'app-new-estudio',
  templateUrl: './new-estudio.component.html',
  styleUrls: ['./new-estudio.component.css']
})
export class NewEstudioComponent implements OnInit {
  nombre:string="";
  descEst:string="";
  anoI:number=null;
  anoF:number=null;
  imgEst:string="";

  constructor(private estService:EstudiosService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const exp = new Estudios(this.nombre, this.descEst, this.anoI, this.anoF, this.imgEst);
    this.estService.save(exp).subscribe(data =>{
      alert("Estudio añadido"); 
      this.router.navigate(['']);
    }, err =>{ 
      alert("Falló");
      console.log(exp);
      this.router.navigate(['']);
    }
    )
  }


}
