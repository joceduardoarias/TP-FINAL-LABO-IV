import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarTurnosRoutingModule } from './generar-turnos-routing.module';
import { TurnosprincipalComponent } from './turnosprincipal/turnosprincipal.component';
import { ElegirEspecialistaComponent } from './elegir-especialista/elegir-especialista.component';
import { ElegirEspecialidadComponent } from './elegir-especialidad/elegir-especialidad.component';
import { ElegirHorariosComponent } from './elegir-horarios/elegir-horarios.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    TurnosprincipalComponent,
    ElegirEspecialistaComponent,
    ElegirEspecialidadComponent,
    ElegirHorariosComponent
  ],
  imports: [
    CommonModule,
    GenerarTurnosRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class GenerarTurnosModule { }
