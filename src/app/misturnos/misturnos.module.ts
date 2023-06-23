import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisturnosRoutingModule } from './misturnos-routing.module';
import { MisturnosComponent } from './misturnos/misturnos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TurnopacienteComponent } from './turnopaciente/turnopaciente.component';
import { TurnoespecialistaComponent } from './turnoespecialista/turnoespecialista.component';
import { TurnoadministradorComponent } from './turnoadministrador/turnoadministrador.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

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
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class MisturnosModule { }
