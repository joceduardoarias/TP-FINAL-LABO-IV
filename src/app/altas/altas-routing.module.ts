import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAdministradorComponent } from './alta-administrador/alta-administrador.component';
import { AltaEspecialistaComponent } from './alta-especialista/alta-especialista.component';
import { AltaPacienteComponent } from './alta-paciente/alta-paciente.component';

const routes: Routes = [
  {path:'altaPaciente',component: AltaPacienteComponent},
  {path:'altaEspecialista',component: AltaEspecialistaComponent},
  {path:'altaAdministrador',component: AltaAdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltasRoutingModule { }
