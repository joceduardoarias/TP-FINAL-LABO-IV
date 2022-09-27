import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoolGuard } from '../guards/bool.guard';
import { EnviarhomelogeadoGuard } from '../guards/enviarhomelogeado.guard';
import { LoginComponent } from './page/login/login.component';
import { RegistrarComponent } from './page/registrar/registrar.component';

const routes: Routes = [
  {path:'login',component: LoginComponent,canActivate:[EnviarhomelogeadoGuard]},
  {path:'registrar',component: RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoRoutingModule { }
