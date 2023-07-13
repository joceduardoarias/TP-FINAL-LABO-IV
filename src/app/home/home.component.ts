import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegistrarUsuariosService } from '../services/registrar-usuarios.service';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:  [
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private us:RegistrarUsuariosService,public auth:AuthService,private router:Router) 
  {  
  }

  ngOnInit(): void {
  }

}
