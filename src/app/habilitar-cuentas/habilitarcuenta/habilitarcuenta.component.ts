import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import {MatPaginator} from '@angular/material/paginator';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-habilitarcuenta',
  templateUrl: './habilitarcuenta.component.html',
  styleUrls: ['./habilitarcuenta.component.css'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HabilitarcuentaComponent implements OnInit {

  list:any [] = [];
  displayedColumns: string[] = ['email', 'especialidades', 'estadoCuenta', 'habilitar', 'deshabilitar', 'imagen'];  
  dataSource:any = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
          // console.log(e[i]);
          
        }
      }
      this.dataSource.data = this.list;      
      this.dataSource.paginator = this.paginator;  
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
