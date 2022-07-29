import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-edit-trabajo',
  templateUrl: './edit-trabajo.component.html',
  styleUrls: ['./edit-trabajo.component.css']
})
export class EditTrabajoComponent implements OnInit {
  trab:Trabajo = null;
  constructor(private trabajoService:TrabajosService, private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.trabajoService.detail(id).subscribe(
      data=> {
        this.trab = data;
      }, err =>{
        alert("Error al modificar trabajo");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.trabajoService.update(id, this.trab).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar trabajo");
        this.router.navigate(['']);
      }
    )
  }

}
