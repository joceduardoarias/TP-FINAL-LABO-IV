import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { HistoriapacienteComponent } from './historiapaciente/historiapaciente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoriapacienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
