import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';

const routes: Routes = [
  {path:'',component:ListarusuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
