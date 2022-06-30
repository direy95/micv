import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  exp = {
    ano: "2012-2022",
    lugar: "Disney",
    descripcion: "Participé en una porno"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
