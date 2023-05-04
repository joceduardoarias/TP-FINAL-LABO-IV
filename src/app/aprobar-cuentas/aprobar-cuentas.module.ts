import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobarCuentasRoutingModule } from './aprobar-cuentas-routing.module';
import { AprobarcuentaComponent } from './aprobarcuenta/aprobarcuenta.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AprobarcuentaComponent
  ],
  imports: [
    CommonModule,
    AprobarCuentasRoutingModule,
    TranslateModule
  ]
})
export class AprobarCuentasModule { }
