import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  animations: [trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('500ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('500ms', style({ opacity: 0 }))
    ])
  ])
]
})
export class RegistrarComponent implements OnInit {
  pa:any = "Hola"
  paciente:boolean = false;
  especialista:boolean = false;
  constructor() 
  {
  }

  ngOnInit(): void { 
  }
  aceptar(data:string)
  {
    if(data == 'especialista')
    {
      this.especialista = true;
    }
    else
    {
      this.paciente = true;
    }
  }

  cambiar(data:boolean)
  {
    this.paciente = false;
    this.especialista = false;
  }
}
