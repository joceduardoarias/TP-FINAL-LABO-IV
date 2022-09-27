import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltasRoutingModule } from './altas-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxCaptchaModule } from 'ngx-captcha';
import {FormsModule  , ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { AltaAdministradorComponent } from './alta-administrador/alta-administrador.component';
import { CaptchaDirective } from '../directivas/captcha.directive';
import { AltaEspecialistaComponent } from './alta-especialista/alta-especialista.component';
import { AltaPacienteComponent } from './alta-paciente/alta-paciente.component';





@NgModule({
  declarations: [
    AltaAdministradorComponent,
    AltaPacienteComponent,
    AltaEspecialistaComponent,
    CaptchaDirective

  ],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    AltasRoutingModule,
    NgxSpinnerModule,
    RecaptchaModule,
    RecaptchaFormsModule


    
    
  ]
})
export class AltasModule { }
