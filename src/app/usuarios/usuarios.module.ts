import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarusuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
    
  ]
})
export class UsuariosModule { }
