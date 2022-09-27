import { Component, OnInit } from '@angular/core';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';

@Component({
  selector: 'app-habilitarcuenta',
  templateUrl: './habilitarcuenta.component.html',
  styleUrls: ['./habilitarcuenta.component.css']
})
export class HabilitarcuentaComponent implements OnInit {

  list:any [] = [];
  constructor(private sv:RegistrarUsuariosService)
  {
    this.sv.getAll().valueChanges().subscribe(e=>{
      console.log("aalerta");
      
      this.list = []
      for(let i = 0; i<e.length;i++)
      {
        if(e[i].perfil == 'especialista')
        {
          this.list.push(e[i]);
          console.log(e[i]);
          
        }
      }
    })
  }

  ngOnInit(): void {
  }
  aceptar(data:any)
  {
    this.sv.getAll().get().subscribe(e=>{e.forEach((e:any)=>{
      if(e.data().email == data.email)
          {
            data.estado = 'habilitado';
            this.sv.update(e.id,data);
          }
    })})
  }
  rechazar(data:any)
  {
    this.sv.getAll().get().subscribe(e=>{e.forEach((e:any)=>{
      if(e.data().email == data.email)
          {
            data.estado = 'deshabilitado';
            this.sv.update(e.id,data);
          }
    })})
  }

}
