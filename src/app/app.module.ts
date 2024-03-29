import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PepeComponent } from './pepe/pepe.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaPacienteComponent } from './altas/alta-paciente/alta-paciente.component';
import { AltaEspecialistaComponent } from './altas/alta-especialista/alta-especialista.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { GuardauthGuard } from './guards/guardauth.guard';
import { CambiarColorDirective } from './directivas/cambiar-color.directive';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from "@angular/fire/firestore";
import { Ordenar2Pipe } from './pipes/ordenar2.pipe';
import { FechaDirectivaDirectiveDirective } from './directivas/fecha-directiva-directive.directive';
import { LargoMaximoDirective } from './directivas/largo-maximo.directive';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SwitchlangComponent } from './switchlang/switchlang.component';
@NgModule({
  declarations: [
    AppComponent,
    
    PepeComponent,
     BienvenidaComponent,
     NavbarComponent,
     HomeComponent,
     CambiarColorDirective,
     Ordenar2Pipe,
     SwitchlangComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => { return new TranslateHttpLoader(http, './assets/i18n/', '.json'); },
          deps: [HttpClient]
      }
  })  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GuardauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}