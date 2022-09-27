import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilitarcuentaComponent } from './habilitarcuenta/habilitarcuenta.component';

const routes: Routes = [
  {path:'',component:HabilitarcuentaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabilitarCuentasRoutingModule { }
