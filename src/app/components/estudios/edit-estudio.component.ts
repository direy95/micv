import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})
export class EditEstudioComponent implements OnInit {

  est:Estudios = null;
  constructor(private estService:EstudiosService, private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estService.detail(id).subscribe(
      data=> {
        this.est = data;
      }, err =>{
        alert("Error al modificar trabajo");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.estService.update(id, this.est).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar estudio");
        this.router.navigate(['']);
      }
    )
  }


}
