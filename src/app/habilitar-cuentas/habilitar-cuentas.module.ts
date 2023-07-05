import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilitarCuentasRoutingModule } from './habilitar-cuentas-routing.module';
import { HabilitarcuentaComponent } from './habilitarcuenta/habilitarcuenta.component';
import { EstadoMayusculaPipe } from '../pipes/estado-mayuscula.pipe';
import { OrdenarPipe } from '../pipes/ordenar.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [HabilitarcuentaComponent, OrdenarPipe, EstadoMayusculaPipe],
  imports: [
    CommonModule, 
    HabilitarCuentasRoutingModule, 
    TranslateModule, 
    MatTableModule,
    MatPaginatorModule    
  ],
})
export class HabilitarCuentasModule {}
