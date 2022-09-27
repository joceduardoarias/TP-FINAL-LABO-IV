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
    LogsRoutingModule
  ]
})
export class LogsModule { }
