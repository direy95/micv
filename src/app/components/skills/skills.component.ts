import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill:Skills[] = [];
  constructor(private skillService: SkillsService, private tokenService:TokenService) { }
  isLogged=false;
  ngOnInit(): void {
    this.getSkills();
    if (this.tokenService.getToken()){
      this.isLogged=true;
    }
  }

  getSkills():void{
    this.skillService.lista().subscribe(data =>{this.skill = data;})
  }

  delete(id:number){
    if(id!=undefined){
      this.skillService.delete(id).subscribe(
        data=>{
          this.getSkills();
        }, err=>{
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
