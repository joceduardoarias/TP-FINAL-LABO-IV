import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EnviarhomelogeadoGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router,private spinner: NgxSpinnerService)
  {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.verificarlogeo().then((valor:any)=>{
      if(valor != null)
      {
        return this.auth.chegeneral(valor.email).then((e:any)=>{
          this.auth.estalogeado = true;
          this.auth.verifico = true;
          this.router.navigateByUrl('/home');
          return true;
        })
      }
      else
      {
        this.auth.verifico = true;
        return true
      }
    })
  }
  
}
