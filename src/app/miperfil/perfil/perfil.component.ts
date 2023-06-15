import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  forwardRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import { Diahoraespecialista } from 'src/app/clases/diahoraespecialista';
import { AuthService } from 'src/app/services/auth.service';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import html2canvas from 'html2canvas';
export interface HistoriaClinicaElement {
  altura: string;
  peso: string;
  presion: string;
  temperatura: string;
  dia: string;
  hora: string;
  val1: any;
  val2: any;
  val3: any;
}
const ELEMENT_DATA: HistoriaClinicaElement[] = [];
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  fecha = new Date().toLocaleDateString();
  esa: any = [];
  @ViewChild('content', { static: false }) el!: ElementRef;
  objee: any = [
    { estado: 1, filtro: 2, teclado: 3, mouse: 4, dia: 2, turno: 4 },
  ];
  datoUsuario: any = [];
  cargo: boolean = false;
  unseg: boolean = false;
  formGroup!: FormGroup;
  lunes: any;
  martes: any;
  miercoles: any;
  jueves: any;
  viernes: any;
  sabado: any;
  domingo: any;
  arrayhoraaa: any = [];
  unespecialista!: Diahoraespecialista;
  historiaclinicaa: any = [];
  b: any;
  indicex = 0;
  nuevo: any[] = [];
  myControl = new FormControl();
  dayOfWeek: { id: string; name: string; checked: boolean }[] = [
    { id: '1', name: 'Lunes', checked: false },
    { id: '2', name: 'Martes', checked: false },
    { id: '3', name: 'Miercoles', checked: false },
    { id: '4', name: 'Jueves', checked: false },
    { id: '5', name: 'Viernes', checked: false },
  ];
  horarios: { id: string; name: string; checked: boolean }[] = [
    { id: 'todo', name: 'Jornada completa (8:00 - 19:00)', checked: false },
    { id: 'maniana', name: 'Mañana (8:00 - 12:00)', checked: false },
    { id: 'tarde', name: 'Tarde (12:00 - 19:00)', checked: false },
    { id: '', name: 'Seleccione una opción', checked: false },
  ];
  selectedOption: string = '';
  time = { hour: 13, minute: 30 };
  displayedColumns: string[] = [
    'altura',
    'peso',
    'presion',
    'temperatura',
    'dia',
    'hora',
    'val1',
    'val2',
    'val3',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    public auth: AuthService,
    private sv: RegistrarUsuariosService,
    private fb: FormBuilder,
    private es: CargarhoraespecialistaService,
    private h: HistoriaClinicaService
  ) {
    this.sv
      .getAll()
      .get()
      .subscribe((e) => {
        e.forEach((ese) => {
          if (ese.data().email == this.auth.correologeado) {
            this.cargo = true;
            this.datoUsuario = ese.data();
            this.getSchedule(this.datoUsuario).then((e: any) => {
                            
              if (e != null) {
                for (var dia of e.dias) {
                  for (var day of this.dayOfWeek) {
                    if (dia != null) {
                      if (dia.toString() == day.id) {
                        day.checked = true;
                      }
                    }
                  }
                }
                this.setHorario(e.hora); 
              }             
            });
          }
        });
      });

    if (this.auth.paciente) {
      var data: HistoriaClinicaElement[] = [];
      let pec = this.h
        .getAll()
        .valueChanges()
        .subscribe((e) => {
          this.historiaclinicaa = [];
          for (let i = 0; i < e.length; i++) {
            if (e[i].correopaciente == auth.correologeado) {
              this.historiaclinicaa.push(e[i]);
              var item: HistoriaClinicaElement;
              // item.altura = e[i].altura;
              data.push({
                altura: e[i].altura,
                peso: e[i].peso,
                presion: e[i].presion,
                temperatura: e[i].temepratura,
                dia: e[i].dia,
                hora: e[i].hora,
                val1: e[i].otros[0].clave + ' : ' + e[i].otros[0].valor,
                val2: e[i].otros[1].clave + ' : ' + e[i].otros[1].valor,
                val3: e[i].otros[2].clave + ' : ' + e[i].otros[2].valor,
              });
            }
          }

          this.dataSource.data = data;
        });
    }

    this.arrayhoraaa[0] = null;
    this.arrayhoraaa[1] = null;
    this.arrayhoraaa[2] = null;
    this.arrayhoraaa[3] = null;
    this.arrayhoraaa[4] = null;
    this.arrayhoraaa[5] = null;
    this.arrayhoraaa[6] = null;
  }

  enviar() {
    let esperar;
    let data = (<HTMLInputElement>document.getElementById('select')).value;
    this.unespecialista = new Diahoraespecialista();
    this.arrayhoraaa[0] = null;
    this.arrayhoraaa[1] = null;
    this.arrayhoraaa[2] = null;
    this.arrayhoraaa[3] = null;
    this.arrayhoraaa[4] = null;
    this.arrayhoraaa[5] = null;
    this.arrayhoraaa[6] = null;
    if (this.lunes) {
      this.arrayhoraaa[1] = 1;
    }
    if (this.martes) {
      this.arrayhoraaa[2] = 2;
    }
    if (this.miercoles) {
      this.arrayhoraaa[3] = 3;
    }
    if (this.jueves) {
      this.arrayhoraaa[4] = 4;
    }
    if (this.viernes) {
      this.arrayhoraaa[5] = 5;
    }
    if (this.sabado) {
      this.arrayhoraaa[6] = 6;
    }

    this.unespecialista.dias = this.arrayhoraaa;
    this.unespecialista.email = this.datoUsuario.email;
    this.unespecialista.especialidad = (<HTMLInputElement>(
      document.getElementById('select2')
    )).value;
    this.unespecialista.imagen = this.datoUsuario.imagen;
    this.unespecialista.nombre = this.datoUsuario.nombre;

    if (data == 'maniana') {
      this.unespecialista.hora = { horamin: '8', horamax: '12' };
    } else if (data == 'tarde') {
      this.unespecialista.hora = { horamin: '12', horamax: '19' };
    } else {
      this.unespecialista.hora = { horamin: '8', horamax: '19' };
    }
    this.recorrer(this.unespecialista).then((e: any) => {
      if (e == null) {
        this.es.create(this.unespecialista).then((e: any) => {
          console.log('Hora y dias cargado correctamente!!');
        });
      } else {
        this.es.update(e, this.unespecialista).then((e) => {
          alert('Modificado correctamente!!');
        });
      }
    });
  }
  ngOnInit(): void {}
  recorrer(data: any) {
    alert(data.especialidad);
    let encontrado: any = null;
    return new Promise((resolve, rejected) => {
      var clientesSubscription = this.es
        .getAll()
        .get()
        .subscribe((q) => {
          q.forEach((doc) => {
            if (
              doc.data().email == data.email &&
              doc.data().especialidad == data.especialidad
            ) {
              encontrado = doc.id;
            }
          });
          resolve(encontrado);
        });
    });
  }
  dias(data: any) {
    if (data == 'lunes') {
      this.lunes = !this.lunes;
      console.log(data);
    } else if (data == 'martes') {
      this.martes = !this.martes;
      console.log(data);
    } else if (data == 'miercoles') {
      this.miercoles = !this.miercoles;
      console.log(data);
    } else if (data == 'jueves') {
      this.jueves = !this.jueves;
      console.log(data);
    } else if (data == 'viernes') {
      this.viernes = !this.viernes;
      console.log(data);
    } else {
      this.sabado = !this.sabado;
      console.log(data);
    }
  }
  hacerBusqueda() {
    this.nuevo = [];
    for (let j = 0; j < this.historiaclinicaa.length; j++) {
      let no = 0;
      let encontra2 = 0;
      for (let i = 0; i < this.historiaclinicaa[j].otros.length; i++) {
        Object.keys(this.historiaclinicaa[j].otros[i]).forEach(
          (entry, index) => {
            if (this.historiaclinicaa[j].otros[i][entry] == this.b) {
              if (encontra2 == 0) {
                encontra2++;
                no = 1;
                this.nuevo.push(this.historiaclinicaa[j]);
              }
            }
          }
        );
      }
      if (no == 0) {
        if (
          this.historiaclinicaa[j].altura == this.b ||
          this.historiaclinicaa[j].peso == this.b ||
          this.historiaclinicaa[j].presion == this.b ||
          this.historiaclinicaa[j].temepratura == this.b
        ) {
          this.nuevo.push(this.historiaclinicaa[j]);
        }
      }
    }
    if (this.nuevo.length != 0) {
      this.historiaclinicaa = this.nuevo;
    }
  }
  limpiar() {
    this.historiaclinicaa = [];
    this.h
      .getAll()
      .get()
      .subscribe((e) => {
        e.forEach((e) => {
          this.historiaclinicaa.push(e.data());
        });
      });
  }
  makePDF() {
    // this.fecha = new Date().toLocaleDateString()
    // let pdf = new jsPDF('p','pt','a4');

    // pdf.html(this.el.nativeElement,{
    //   callback:(pdf)=>{
    //      pdf.save("Historia Clinica.pdf")
    //   }
    // });
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
  getSchedule(data: any) {
    

    let encontrado: any = null;
    return new Promise((resolve, rejected) => {
      var clientesSubscription = this.es
        .getAll()
        .get()
        .subscribe((q) => {
          q.forEach((doc) => {
            if (
              doc.data().email == data.email &&
              doc.data().especialidad == data.especialidades[0]
            ) {
              encontrado = doc.data();
            }
          });
          resolve(encontrado);
        });
    });
  }
  setHorario(data: any) {
    if (data.horamin == '8' && data.horamax == '19') {
      this.selectedOption = 'todo';
    }
    if (data.horamin == '8' && data.horamax == '12') {
      this.selectedOption = 'maniana';
    }
    if (data.horamin == '12' && data.horamax == '19') {
      this.selectedOption = 'tarde';
    }
  }
}
