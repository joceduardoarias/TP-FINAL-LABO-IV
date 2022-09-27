import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';
import { RegistrarUsuariosService } from '../services/registrar-usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

color:any = 'red';
@Output() evento: EventEmitter<any> = new EventEmitter<any>();
  constructor(public  auth:AuthService,private router:Router,public sv:RegistrarUsuariosService,private spinner: NgxSpinnerService) 
  {
    this.spinner.show();
    this.auth.verificarlogeo().then((e:any)=>{
      
      if(e != null)
      {
      this.auth.estalogeado = true;
       this.sv.getAll().get().subscribe(ep=>ep.forEach((ese:any)=>{

         if(ese.data().email == e.email)
         {
           if(ese.data().perfil == 'administrador')
           {
             this.auth.quienes = "Administrador"
           }
           else if(ese.data().perfil == "paciente")
           {
             this.auth.quienes = "Paciente"
           }
           else
           {
            this.auth.quienes = "Especialista"
           }
           
         }
       }))
      }
      else
      {

      }
    })
  }

  ngOnInit(): void {
  }

  cerrar()
  {
    this.auth.estalogeado = false;
    this.auth.deslogear();
  }
  efe(data:any)
  {
    this.auth.quienes = data;
    alert("entro")
  }
}
