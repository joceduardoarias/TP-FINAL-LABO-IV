import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarTurnosRoutingModule } from './generar-turnos-routing.module';
import { TurnosprincipalComponent } from './turnosprincipal/turnosprincipal.component';
import { ElegirEspecialistaComponent } from './elegir-especialista/elegir-especialista.component';
import { ElegirEspecialidadComponent } from './elegir-especialidad/elegir-especialidad.component';
import { ElegirHorariosComponent } from './elegir-horarios/elegir-horarios.component';


@NgModule({
  declarations: [
    TurnosprincipalComponent,
    ElegirEspecialistaComponent,
    ElegirEspecialidadComponent,
    ElegirHorariosComponent
  ],
  imports: [
    CommonModule,
    GenerarTurnosRoutingModule
  ]
})
export class GenerarTurnosModule { }
