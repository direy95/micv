import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './services/portfolio.service';
import { interceptorProvider } from './services/interceptor-service';
import { NewTrabajoComponent } from './components/trabajos/new-trabajo.component';
import { EditTrabajoComponent } from './components/trabajos/edit-trabajo.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEstudioComponent } from './components/estudios/new-estudio.component';
import { EditEstudioComponent } from './components/estudios/edit-estudio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    SkillsComponent,
    TrabajosComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    NewTrabajoComponent,
    EditTrabajoComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEstudioComponent,
    EditEstudioComponent,
    NavbarComponent,
    NewSkillComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PortfolioService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
