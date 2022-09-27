import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiperfilRoutingModule } from './miperfil-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MiperfilRoutingModule
  ]
})
export class MiperfilModule { }
