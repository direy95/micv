import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  //Inicializamos persona
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //Lo que esta en persona se guarda en data.
    //El suscribe conecta observable con eventos observables. Es un metodo que escucha siempre que se 
    //haga un cambio y provoca una respuesta.
    this.personaService.getPersona().subscribe(data =>{
      this.persona=data;
    })
  }

}
