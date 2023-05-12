import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { CantturnosespecialidadComponent } from './cantturnosespecialidad/cantturnosespecialidad.component';
import { CantturnosdiaComponent } from './cantturnosdia/cantturnosdia.component';
import { TurnosolicitadolapsoComponent } from './turnosolicitadolapso/turnosolicitadolapso.component';
import { TurnofinalizadolapsoComponent } from './turnofinalizadolapso/turnofinalizadolapso.component';
import { OrdenarlogsPipe } from '../pipes/ordenarlogs.pipe';
import { FormsModule } from '@angular/forms';
import { FechaDirectivaDirectiveDirective } from '../directivas/fecha-directiva-directive.directive';
import { LargoMaximoDirective } from '../directivas/largo-maximo.directive';
import { SoloNumerosDirective } from '../directivas/solo-numeros.directive';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    PrincipalComponent,
    IngresosComponent,
    CantturnosespecialidadComponent,
    CantturnosdiaComponent,
    TurnosolicitadolapsoComponent,
    TurnofinalizadolapsoComponent,
    OrdenarlogsPipe,
    FechaDirectivaDirectiveDirective,
    LargoMaximoDirective,
    SoloNumerosDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    LogsRoutingModule,
    TranslateModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule  
  ]
})
export class LogsModule { }
