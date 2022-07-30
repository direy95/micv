import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  skill:string="";
  porcentaje:number=null;
  img_skill:string="";

  constructor(private skillService:SkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const hab = new Skills(this.skill, this.porcentaje, this.img_skill);
    this.skillService.save(hab).subscribe(data =>{
      alert("Experiencia añadida"); 
      this.router.navigate(['']);
    }, err =>{ 
      alert("Falló");
      console.log(hab);
      this.router.navigate(['']);
    }
    )
  }

}
