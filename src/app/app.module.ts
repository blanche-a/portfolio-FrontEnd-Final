import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { AcercaDeComponent } from './componentes/cuerpo/acerca-de/acerca-de.component';
import { ExperienciaLaboralComponent } from './componentes/cuerpo/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './componentes/cuerpo/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/cuerpo/habilidades/habilidades.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProyectosComponent } from './componentes/cuerpo/proyectos/proyectos.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

import { LeerJsonService } from './servicios/leer-json.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuerpoComponent,
    AcercaDeComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LeerJsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
