import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobarcuentaComponent } from './aprobarcuenta/aprobarcuenta.component';

const routes: Routes = [
  {path:'',component:AprobarcuentaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprobarCuentasRoutingModule { }
