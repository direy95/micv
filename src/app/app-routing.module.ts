import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaComponent } from './components/acerca-de/edit-acerca.component';
import { EditEstudioComponent } from './components/estudios/edit-estudio.component';
import { NewEstudioComponent } from './components/estudios/new-estudio.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditTrabajoComponent } from './components/trabajos/edit-trabajo.component';
import { NewTrabajoComponent } from './components/trabajos/new-trabajo.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'',redirectTo:'portfolio', pathMatch:'full'},
  {path:"nuevoT", component:NewTrabajoComponent},
  {path:'editTrab/:id', component:EditTrabajoComponent},
  {path:'editExp/:id', component:EditExperienciaComponent},
  {path:'nuevaExp',component:NewExperienciaComponent},
  {path:'nuevoEst', component:NewEstudioComponent},
  {path:'editEst/:id', component:EditEstudioComponent},
  {path:'experiencias', component:ExperienciaComponent},
  {path:'nuevaSkill', component:NewSkillComponent},
  {path:'editSkill/:id', component:EditSkillComponent},
  {path:'editAcerca/:id', component:EditAcercaComponent},
  {path:"**", pathMatch:"full", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
