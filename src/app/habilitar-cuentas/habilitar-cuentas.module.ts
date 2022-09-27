import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilitarCuentasRoutingModule } from './habilitar-cuentas-routing.module';
import { HabilitarcuentaComponent } from './habilitarcuenta/habilitarcuenta.component';
import { EstadoMayusculaPipe } from '../pipes/estado-mayuscula.pipe';
import { OrdenarPipe } from '../pipes/ordenar.pipe';





@NgModule({
  declarations: [
    HabilitarcuentaComponent,
    OrdenarPipe,
    EstadoMayusculaPipe


    
  ],
  imports: [
    CommonModule,
    HabilitarCuentasRoutingModule,
  ]
})
export class HabilitarCuentasModule { }
