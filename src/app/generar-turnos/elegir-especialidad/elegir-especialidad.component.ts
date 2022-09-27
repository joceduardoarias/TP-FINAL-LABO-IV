import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';

@Component({
  selector: 'app-elegir-especialidad',
  templateUrl: './elegir-especialidad.component.html',
  styleUrls: ['./elegir-especialidad.component.css']
})
export class ElegirEspecialidadComponent implements OnInit {
  list:any = [];
  encontrado:boolean = false;
  //@Input() list:any = [];
  @Output() especialidad: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private cargarhora:CargarhoraespecialistaService) 
  {
    cargarhora.getAll().valueChanges().subscribe((e:any)=>{
      for(let i = 0; i<e.length;i++)
      {
       const elemento = e[i].especialidad;
       if(!this.list.includes(e[i].especialidad))
       {
        this.list.push(elemento);
       }
      }
     })
  }

  ngOnInit(): void {
  }
  emitirEspecialidad(data:any)
  {
    this.especialidad.emit(data);
  }

}
