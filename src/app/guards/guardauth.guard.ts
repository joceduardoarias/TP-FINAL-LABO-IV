import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { rejects } from 'assert';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';
import { RegistrarUsuariosService } from '../services/registrar-usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class GuardauthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router,private ToastrSvc:ToastrService,private us:RegistrarUsuariosService)
  {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.verificarlogeo().then((valor:any)=>{
      if(valor != null)
      {
        this.auth.correologeado = valor.email;
        return this.auth.chegeneral(valor.email).then((e:any)=>{
          this.auth.estalogeado = true;
          this.auth.verifico = true;
          return true;
        })
      }
      else
      {
        this.auth.verifico = true;
        this.router.navigateByUrl('/ingreso/login');
        return false
      }
    })
  
  }
  
}
