import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-acerca',
  templateUrl: './edit-acerca.component.html',
  styleUrls: ['./edit-acerca.component.css']
})
export class EditAcercaComponent implements OnInit {

  persona:persona = null;
  constructor(private personaService:PersonaService, private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.getPersona().subscribe(
      data=> {
        this.persona = data;
      }, err =>{
        alert("Error al modificar trabajo");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.persona);
    this.personaService.update(id, this.persona).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar estudio");
        this.router.navigate(['']);
      }
    )
  }

}
