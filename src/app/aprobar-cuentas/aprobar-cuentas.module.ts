import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobarCuentasRoutingModule } from './aprobar-cuentas-routing.module';
import { AprobarcuentaComponent } from './aprobarcuenta/aprobarcuenta.component';


@NgModule({
  declarations: [
    AprobarcuentaComponent
  ],
  imports: [
    CommonModule,
    AprobarCuentasRoutingModule
  ]
})
export class AprobarCuentasModule { }
