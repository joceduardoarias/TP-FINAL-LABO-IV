import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { HistoriapacienteComponent } from './historiapaciente/historiapaciente.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HistoriapacienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PacientesRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule    
  ]
})
export class PacientesModule { }
