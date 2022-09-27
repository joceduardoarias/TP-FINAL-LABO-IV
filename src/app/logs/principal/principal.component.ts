import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  ingresos:boolean = false;
  cantturnos:boolean = false;
  cantturnosdia:boolean = false;
  turnostiempo:boolean = false;
  turnostiempofinalizados:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  clickeado(data:string)
  {
    if(data == 'ingresos')
    {
      this.ingresos = true;
      this.cantturnos = false;
      this.cantturnosdia = false;
      this.turnostiempo = false;
      this.turnostiempofinalizados = false;
    }
    if(data == 'turnosespecialidad')
    {
      this.ingresos = false;
      this.cantturnos = true;
      this.cantturnosdia = false;
      this.turnostiempo = false;
      this.turnostiempofinalizados = false;
    }
    if(data == 'turnosdia')
    {
      this.ingresos = false;
      this.cantturnos = false;
      this.cantturnosdia = true;
      this.turnostiempo = false;
      this.turnostiempofinalizados = false;
    }
    if(data == 'turnossolicitadolapso')
    {
      this.ingresos = false;
      this.cantturnos = false;
      this.cantturnosdia = false;
      this.turnostiempo = true;
      this.turnostiempofinalizados = false;
    }
    if(data == 'turnosfiinalizadolapso')
    {
      this.ingresos = false;
      this.cantturnos = false;
      this.cantturnosdia = false;
      this.turnostiempo = false;
      this.turnostiempofinalizados = true;
    }
  }
}
