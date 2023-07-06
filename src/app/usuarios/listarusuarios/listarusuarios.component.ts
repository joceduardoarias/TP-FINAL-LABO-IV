import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  forwardRef,
} from '@angular/core';
import { ExporterService } from 'src/app/services/exporter.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import jsPDF from 'jspdf';
import { AuthService } from 'src/app/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css'],
})
export class ListarusuariosComponent implements OnInit {
  b: any;
  nuevo: any = [];
  list: any = [];
  lista2: any = [];
  activo: boolean = false;
  fecha = new Date().toLocaleDateString();
  historiaclinicaa: any = [];
  filtro: string = '';
  @ViewChild('content', { static: false }) el!: ElementRef;
  @ViewChild('table') table: ElementRef;

  tildado: any = '';
  displayedColumns: string[] = [
    '#',
    'nombre',
    'email',
    'dni',
    'perfil',
    'edad',
    'historiaclinicaa',
  ];
  tablaFiltrada: any[];
  historiaclinicaaOriginal: any[] = [];
  dataSource: any = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public auth: AuthService,
    private us: RegistrarUsuariosService,
    private excelService: ExporterService,
    private h: HistoriaClinicaService
  ) {
    us.getAll()
      .valueChanges()
      .subscribe((e: any) => {
        for (let i = 0; i < e.length; i++) {
          let data = {
            id: i + 1,
            nombre: e[i].nombre,
            email: e[i].email,
            dni: e[i].dni,
            perfil: e[i].perfil,
            edad: e[i].edad,
          };
          this.list.push(data);
        }
        this.dataSource.data = this.list;
        this.dataSource.paginator = this.paginator;
      });
    h.getAll()
      .valueChanges()
      .subscribe((e: any) => {
        for (let i = 0; i < e.length; i++) {
          const elemento = e[i].correopaciente;
          if (!this.lista2.includes(e[i].correopaciente)) {
            this.lista2.push(elemento);
          }
        }        
      });
  }

  disparo(data: any) {
    this.tildado = data;    
    
    let pec = this.h
      .getAll()
      .valueChanges()
      .subscribe((e) => {
        this.historiaclinicaa = [];
        for (let i = 0; i < e.length; i++) {
          if (e[i].correopaciente == data) {
            this.historiaclinicaa.push(e[i]);
          }
        }
        this.activo = true;
        this.historiaclinicaaOriginal = [...this.historiaclinicaa];        
      });
  }
  hacerBusqueda() {
    
    if (this.filtro) {
      this.tablaFiltrada = this.historiaclinicaa.filter(
        (item) =>
          item.altura.toLowerCase().includes(this.filtro.toLowerCase()) ||
          item.peso.toLowerCase().includes(this.filtro.toLowerCase()) ||
          item.presion.toLowerCase().includes(this.filtro.toLowerCase()) ||
          item.temepratura.toLowerCase().includes(this.filtro.toLowerCase()) ||
          item.dia.toLowerCase().includes(this.filtro.toLowerCase()) ||
          String(item.hora).toLowerCase().includes(this.filtro.toLowerCase())
        // item.valor1.toLowerCase().includes(this.filtro.toLowerCase()) ||
        // item.valor2.toLowerCase().includes(this.filtro.toLowerCase()) ||
        // item.valor3.toLowerCase().includes(this.filtro.toLowerCase())
      );
      if (this.tablaFiltrada.length !== 0) {
        this.historiaclinicaa = this.tablaFiltrada;
      } else {
        this.tablaFiltrada = this.historiaclinicaa;
      }
    }
    
  }
  limpiar() {
    this.historiaclinicaa = [];
    this.h
      .getAll()
      .get()
      .subscribe((e) => {
        e.forEach((e) => {
          if (e.data().correopaciente == this.tildado) {
            this.historiaclinicaa.push(e.data());
          }
        });
      });
  }
  ngOnInit(): void {}
  click(): void {
    this.excelService.exportToExcel(this.list, 'usuarios');
  }
  makePDF() {
    const DATA = document.getElementById('historiaPDF');
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
        docResult.save(`${new Date().toISOString()}_TablaPDF.pdf`);
      });
  }

  showTable() {
    var data: any;
    Swal.fire({
      title: 'Historia Clínica',
      html: `
      <div *ngIf="activo" class="d-flex justify-content-center align-items-center">
      <div class="d-flex  tt">
      <form (submit)="hacerBusqueda($event)">
        <input class="form-control me-2" type="search" placeholder="Ingrese un valor" value="dasd" aria-label="Search"
          [(ngModel)]="filtro">
        <button class="btn btn-outline-success" type="button" (click)="hacerBusqueda($event)" type="button">Search</button>
        <button class="btn btn-outline-warning" type="button" (click)="limpiar()">Limpiar</button>
        </form>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
    
      <div id="tablaPDF" *ngIf="activo">
        <div class="d-flex justify-content-center align-items-center">
          <div class="d-flex justify-content-between align-items-center taca">            
            <span>${this.auth.correologeado}</span>
            <span>${this.fecha}</span>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <table class="table tt borde" *ngIf="historiaclinicaa != null">
            <thead>
              <tr>
                <th scope="col" class="text-nowrap" style="white-space: nowrap;">Altura</th>
                <th scope="col" class="text-nowrap" style="white-space: nowrap;">Peso</th>
                <th scope="col" class="text-nowrap" style="white-space: nowrap;">Presion</th>
                <th scope="col" class="text-nowrap" style="white-space: nowrap;">Temperatura</th>
                <th scope="col" class="text-nowrap" style="white-space: nowrap;">Dia</th>
                <th scope="col" class="text-nowrap" style="white-space: nowrap;">Hora</th>
                <th scope="col" class="text-nowrap" style="white-space: nowrap;">val1</th>
                <th scope="col" class="text-nowrap" style="white-space: nowrap;">val2</th>
                <th scope="col" class="text-nowrap" style="white-space: nowrap;">val3</th>
              </tr>
            </thead>
            <tbody>
            ${this.historiaclinicaa
              .map(
                (item) => `
            <tr>
              <td class="text-nowrap" style="white-space: nowrap;">${item.altura}</td>
              <td class="text-nowrap" style="white-space: nowrap;">${item.peso}</td>
              <td class="text-nowrap" style="white-space: nowrap;">${item.presion}</td>
              <td class="text-nowrap" style="white-space: nowrap;">${item.temepratura}</td>
              <td class="text-nowrap" style="white-space: nowrap;">${item.dia}</td>
              <td class="text-nowrap" style="white-space: nowrap;">${item.hora}:${item.minutos}</td>
              <td class="text-nowrap" style="white-space: nowrap;">${item.valor1}</td>
              <td class="text-nowrap" style="white-space: nowrap;">${item.valor2}</td>
              <td class="text-nowrap" style="white-space: nowrap;">${item.valor3}</td>
            </tr>
          `
              )
              .join('')}
            </tbody>
    
          </table>
        </div>
    
    
    
        <div class="d-flex justify-content-center align-items-center">
          <button *ngIf="activo" class="btn btn-primary" (click)="makePDF()">CREAR PDF</button>
        </div>
    
      </div>
    
    </div>
      `,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: '<i class="fa fa-download"></i>',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      showCloseButton: false,
      allowOutsideClick: false, // Evita que se cierre al hacer clic fuera del SweetAlert
      allowEscapeKey: false,
      inputAttributes: {
        autocapitalize: 'off',
      },
      width: '800px',
    }).then((result) => {
      if (result.isConfirmed) {
        // Realiza la acción deseada al presionar Aceptar
      }
    });
  }

  restablecer() {
    this.historiaclinicaa = [...this.historiaclinicaaOriginal];
    this.filtro = ''; // Restablecer el valor del filtro
  }
}
