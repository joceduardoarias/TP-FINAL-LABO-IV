import { Component, OnInit,ViewChild,ElementRef, ViewChildren, forwardRef } from '@angular/core';
import { ExporterService } from 'src/app/services/exporter.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import jsPDF from 'jspdf';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent implements OnInit {
  b:any;
  nuevo:any = [];
  list:any = [];
  lista2:any = [];
  activo:boolean = false;
  fecha = new Date().toLocaleDateString()
  historiaclinicaa:any = [];
  @ViewChild('content',{static:false}) el!:ElementRef;
  tildado:any = "";
  constructor(public auth:AuthService,private us:RegistrarUsuariosService,private excelService:ExporterService,private h:HistoriaClinicaService) 
  {
    us.getAll().valueChanges().subscribe((e:any)=>{
      for(let i = 0; i<e.length;i++)
      {
        let data = {"nombre":e[i].nombre,"email":e[i].email,"dni":e[i].dni,"perfil":e[i].perfil,"edad":e[i].edad}
        this.list.push(data);
      }

    })
    h.getAll().valueChanges().subscribe((e:any)=>{
      for(let i = 0; i<e.length;i++)
      {
       const elemento = e[i].correopaciente;
       if(!this.lista2.includes(e[i].correopaciente))
       {
        this.lista2.push(elemento);
       }
      }
      console.log(this.lista2);
      
     })
   
  }

  disparo(data:any)
  {   
    this.tildado = data;
    let pec = this.h.getAll().valueChanges().subscribe(e=>{
      this.historiaclinicaa = [];
      for(let i = 0; i<e.length;i++)
      {
        if(e[i].correopaciente == data)
        {
          this.historiaclinicaa.push(e[i]);
        }
      }
      this.activo = true;
      console.log(this.historiaclinicaa);
      
     })
  }
  hacerBusqueda()
  {
    this.nuevo = [];
    for(let j=0;j<this.historiaclinicaa.length;j++)
      {
        let no = 0;
        let encontra2 = 0;
        for(let i = 0; i<this.historiaclinicaa[j].otros.length;i++)
        {
          Object.keys(this.historiaclinicaa[j].otros[i]).forEach((entry,index)=>{
           if(this.historiaclinicaa[j].otros[i][entry] == this.b)
           {
            console.log(encontra2);
            
            if(encontra2 == 0)
            {
              encontra2++;
              no = 1;
              this.nuevo.push(this.historiaclinicaa[j]);
              console.log(encontra2);
              
            }

           }
          })
        }
        if(no == 0)
        {
          if(this.historiaclinicaa[j].altura == this.b || this.historiaclinicaa[j].peso == this.b || this.historiaclinicaa[j].presion == this.b  || this.historiaclinicaa[j].temepratura == this.b)
          {
            this.nuevo.push(this.historiaclinicaa[j]);
          }
          
        }
  
      }
      if(this.nuevo.length != 0)
      {
        this.historiaclinicaa = this.nuevo
      }     
  }
  limpiar()
  {
    this.historiaclinicaa = [];
    this.h.getAll().get().subscribe(e=>{e.forEach(e=>{
      if(e.data().correopaciente == this.tildado)
      {
        this.historiaclinicaa.push(e.data());
      }
    })})
  }
  ngOnInit(): void {
  }
  click():void
  {
    this.excelService.exportToExcel(this.list,'usuarios');
  }
  makePDF()
  {
    this.fecha = new Date().toLocaleDateString()
    let pdf = new jsPDF('p','pt','a4');

  
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
         pdf.save("Historia Clinica.pdf")
      }
    });
  }
}
