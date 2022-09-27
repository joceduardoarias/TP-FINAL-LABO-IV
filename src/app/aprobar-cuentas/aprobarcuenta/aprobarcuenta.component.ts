import { Component, OnInit } from '@angular/core';
import { AprobarEspecialistasService } from 'src/app/services/aprobar-especialistas.service';

@Component({
  selector: 'app-aprobarcuenta',
  templateUrl: './aprobarcuenta.component.html',
  styleUrls: ['./aprobarcuenta.component.css']
})
export class AprobarcuentaComponent implements OnInit {
  list:any = [];
  constructor(private ap:AprobarEspecialistasService) 
  {
    this.ap.getAll().valueChanges().subscribe(e=>{
      this.list = []
      for(let i = 0; i<e.length;i++)
      {
        if(e[i].confirmar == 'pendiente')
        {
          this.list.push(e[i]);
        }
      }
    })
  }

  ngOnInit(): void {
  }
  aceptar(data:any)
  {
    this.ap.getAll().get().subscribe(e=>{e.forEach((e:any)=>{
      if(e.data().email == data.email)
          {
            data.confirmar = 'confirmado';
            this.ap.update(e.id,data);
          }
    })})
  }
  rechazar(data:any)
  {
    this.ap.getAll().get().subscribe(e=>{e.forEach((e:any)=>{
      if(e.data().email == data.email)
          {
            data.confirmar = 'rechazado';
            this.ap.update(e.id,data);
          }
    })})
  }

}
