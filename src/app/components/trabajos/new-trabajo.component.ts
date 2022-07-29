import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-new-trabajo',
  templateUrl: './new-trabajo.component.html',
  styleUrls: ['./new-trabajo.component.css']
})
export class NewTrabajoComponent implements OnInit {
  nombreT:string="";
  descTrabajo:string="";

  constructor(private trabajoService:TrabajosService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const trab = new Trabajo(this.nombreT, this.descTrabajo);
    this.trabajoService.save(trab).subscribe(data =>{
      alert("Trabajo añadido"); 
      this.router.navigate(['']);
    }, err =>{ 
      alert("Falló");
      console.log(trab);
      this.router.navigate(['']);
    }
    )
  }

}
