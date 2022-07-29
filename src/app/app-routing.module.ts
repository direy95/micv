import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEstudioComponent } from './components/estudios/edit-estudio.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditTrabajoComponent } from './components/trabajos/edit-trabajo.component';
import { NewTrabajoComponent } from './components/trabajos/new-trabajo.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'',redirectTo:'portfolio', pathMatch:'full'},
  {path:"nuevoT", component:NewTrabajoComponent},
  {path:'editTrab/:id', component:EditTrabajoComponent},
  {path:'editExp/:id', component:EditExperienciaComponent},
  {path:'editEst/:id', component:EditEstudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
