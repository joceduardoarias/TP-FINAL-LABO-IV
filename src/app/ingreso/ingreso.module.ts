import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { IngresoRoutingModule } from './ingreso-routing.module';
import { RegistrarComponent } from './page/registrar/registrar.component';
import { LoginComponent } from './page/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaPacienteComponent } from '../altas/alta-paciente/alta-paciente.component';
import { AltaEspecialistaComponent } from '../altas/alta-especialista/alta-especialista.component';
import { CambiartamanioDirective } from '../directivas/cambiartamanio.directive';
import { NegritaDirective } from '../directivas/negrita.directive';






@NgModule({
  declarations: [
    RegistrarComponent,
    LoginComponent,    
    CambiartamanioDirective,
    NegritaDirective,

  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    FormsModule,
    IngresoRoutingModule,
    ReactiveFormsModule,
    
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IngresoModule { }
