import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills:Skills[]=[];

  constructor(private skillsService:SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }
  
  public getSkills():void{
    this.skillsService.getSkill().subscribe({
      next:(Response:Skills[])=>{
        this.skills = Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
