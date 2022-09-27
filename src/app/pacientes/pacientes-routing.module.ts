import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriapacienteComponent } from './historiapaciente/historiapaciente.component';

const routes: Routes = [
  {path:'',component:HistoriapacienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
