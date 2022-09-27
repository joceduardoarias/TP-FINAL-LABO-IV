import { Component, OnInit } from '@angular/core';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';

@Component({
  selector: 'app-turnosprincipal',
  templateUrl: './turnosprincipal.component.html',
  styleUrls: ['./turnosprincipal.component.css']
})
export class TurnosprincipalComponent implements OnInit {

  boolespecialidad:boolean = true;
  boolespecialista:boolean = false;
  boolhorarios:boolean = false;
  especialidad:any;
  usuarios:any = [];
  objbuscar:any;
  constructor(private cargarhora:CargarhoraespecialistaService) { }

  ngOnInit(): void {
  }
  recibir(data:any)
  {
    this.boolespecialidad = false;
    this.boolespecialista = true;
    this.especialidad = data;
    this.cargarhora.getAll().valueChanges().subscribe((e:any)=>{
      this.usuarios = [];
      for(let i=0; i<e.length;i++)
      {     
        if(e[i].especialidad == this.especialidad)
        {
          this.usuarios.push(e[i]);
        }
      }
    })
  }
  objectomodificar(data:any)
  {
    this.objbuscar = data;
    this.boolespecialidad = false;
    this.boolespecialista = false;
    this.boolhorarios = true;
  }

}
