import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilitarCuentasRoutingModule } from './habilitar-cuentas-routing.module';
import { HabilitarcuentaComponent } from './habilitarcuenta/habilitarcuenta.component';
import { EstadoMayusculaPipe } from '../pipes/estado-mayuscula.pipe';
import { OrdenarPipe } from '../pipes/ordenar.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HabilitarcuentaComponent, OrdenarPipe, EstadoMayusculaPipe],
  imports: [CommonModule, HabilitarCuentasRoutingModule, TranslateModule],
})
export class HabilitarCuentasModule { }
