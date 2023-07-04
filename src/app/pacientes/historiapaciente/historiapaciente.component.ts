import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ExporterService } from 'src/app/services/exporter.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import jsPDF from 'jspdf';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-historiapaciente',
  templateUrl: './historiapaciente.component.html',
  styleUrls: ['./historiapaciente.component.css']
})
export class HistoriapacienteComponent implements OnInit {
  b:any;
  nuevo:any = [];
  list:any = [];
  lista2:any = [];
  lista3:any = [];
  activo:boolean = false;
  fecha = new Date().toLocaleDateString()
  historiaclinicaa:any = [];
  @ViewChild('content',{static:false}) el!:ElementRef;
  tildado:any = "";
  displayedColumns: string[] = ['altura', 'peso', 'presion', 'temperatura', 'dia','hora','val1','val2', 'val3'];  
  dataSource:any = new MatTableDataSource<any>();
  especialista:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;  

  constructor(public auth:AuthService,private us:RegistrarUsuariosService,private excelService:ExporterService,private h:HistoriaClinicaService) 
  { 
    var users;
    us.getAll().valueChanges().subscribe((e:any)=>{
      users = e;
      console.log(users);
      
      for(let i = 0; i<e.length;i++)
      {
        let data = {"nombre":e[i].nombre,"email":e[i].email,"dni":e[i].dni,"perfil":e[i].perfil,"edad":e[i].edad}
        this.list.push(data);
      }
      this.especialista = this.list.find(usuario => usuario.email === auth.correologeado);
      
    })
    h.getAll().valueChanges().subscribe((e:any)=>{
      for (let i = 0; i < e.length; i++) {
        const elemento = e[i];
        
        if (!this.lista2.some(item => item.correopaciente === elemento.correopaciente)) {
          this.lista2.push(elemento);
        }
      }
      
      // console.log(this.lista2);
      for (var item1 of this.lista2) {
        for (var item2 of users) {
          if (item1.correopaciente == item2.email) {
            item1.imagen = item2.imagen;
          }
        }
      }
      console.log(this.lista2);
      
     })
  }

  ngOnInit(): void {
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
      this.dataSource = new MatTableDataSource(this.historiaclinicaa);
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
  click():void
  {
    this.excelService.exportToExcel(this.list,'usuarios');
  }
  makePDF()
  {     
    const DATA = document.getElementById('tablaPDF');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
    };
    html2canvas(DATA, options)
      .then((canvas) => {
        const img = canvas.toDataURL('image/PNG', 0.8);

        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) => {
        docResult.save(`${new Date().toISOString()}_HistoriaClínica.pdf`);        
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}

