import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
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
