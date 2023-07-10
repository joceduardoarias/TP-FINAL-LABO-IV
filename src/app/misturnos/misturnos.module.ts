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
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
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
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule
  ],
  providers: [
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } }
  ],
})
export class MisturnosModule { }
