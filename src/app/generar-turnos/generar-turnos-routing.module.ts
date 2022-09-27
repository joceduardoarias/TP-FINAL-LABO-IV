import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElegirEspecialidadComponent } from './elegir-especialidad/elegir-especialidad.component';
import { TurnosprincipalComponent } from './turnosprincipal/turnosprincipal.component';

const routes: Routes = [
  {'path':'',component:TurnosprincipalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarTurnosRoutingModule { }
