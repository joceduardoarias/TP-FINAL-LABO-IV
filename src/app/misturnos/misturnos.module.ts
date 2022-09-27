import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisturnosRoutingModule } from './misturnos-routing.module';
import { MisturnosComponent } from './misturnos/misturnos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TurnopacienteComponent } from './turnopaciente/turnopaciente.component';
import { TurnoespecialistaComponent } from './turnoespecialista/turnoespecialista.component';
import { TurnoadministradorComponent } from './turnoadministrador/turnoadministrador.component';


@NgModule({
  declarations: [
    MisturnosComponent,
    TurnopacienteComponent,
    TurnoespecialistaComponent,
    TurnoadministradorComponent
  ],
  imports: [
    CommonModule,
    MisturnosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MisturnosModule { }
