import { Component, OnInit, ViewChild } from '@angular/core';
import { Historiaclinica } from 'src/app/clases/historiaclinica';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { HorariosturnosService } from 'src/app/services/horariosturnos.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { EncuestaService } from 'src/app/services/encuesta.service';
@Component({
  selector: 'app-turnopaciente',
  templateUrl: './turnopaciente.component.html',
  styleUrls: ['./turnopaciente.component.css'],
})
export class TurnopacienteComponent implements OnInit {
  historiaclinicaa: any = [];
  b: any;
  list: any;
  eestimado = 'hola';
  resenia: boolean = false;
  reseniaActual: any;
  displayedColumns: string[] = [
    'dia',
    'horario',
    'especialidad',
    'paciente',
    'accion',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('stepper') stepper: MatStepper;
  ELEMENT_DATA: any[] = [];
  dataSource: any = new MatTableDataSource<any>(this.ELEMENT_DATA);
  /*Parámetros encuesta*/
  textoRespuesta: string;
  calificacion: number;
  opcionRadio: string;
  opcionesCheckbox: string[] = [];
  rango: number;
  /*STEPPER*/
  valoracionControl: FormControl;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    sugerenciasCtrl: ['', Validators.required]    
  });
  threeFormGroup = this._formBuilder.group({
    threeCtrl: ['', Validators.required],
  });
  fourFormGroup = this._formBuilder.group({
    fourCtrl: ['', Validators.required],
  });
  fiveFormGroup = this._formBuilder.group({
    fiveCtrl: ['', Validators.required],
  });
  checked = false;
  disabled = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  rating: number;
  stars: number[] = [1, 2, 3, 4, 5];
  encuestaCompletada: boolean;
  usuarioSeleccionado:any;
  motrarEncuesta: any = false;

  constructor(
    public auth: AuthService,
    private agregarestadoturno: AgregarestadoturnoService,
    private hsturnos: HorariosturnosService,
    private historiaclinica: HistoriaClinicaService,
    private _formBuilder: FormBuilder,
    private encuestaService: EncuestaService
  ) {
    this.agregarestadoturno
      .getAll()
      .valueChanges()
      .subscribe((e) => {
        let aux = [];

        for (var item of e) {
          if (item.correoPaciente == auth.correologeado) {
            aux.push(item);
          }
        }
        this.list = aux;
        this.dataSource = new MatTableDataSource(this.list);        
        console.log(this.dataSource.data);
        
        this.ngAfterViewInit();
      });
    this.historiaclinica
      .getAll()
      .valueChanges()
      .subscribe((e) => {
        this.historiaclinicaa = e;
      });
  }

  ngOnInit(): void {
    this.valoracionControl = this._formBuilder.control('', Validators.required);

  this.fiveFormGroup = this._formBuilder.group({
    fiveCtrl: this.valoracionControl
  });

  
  
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;    
  }
  finalizado(data: any) {
    console.log(data);

    Swal.fire({
      title: 'Comentario Especialista',
      html: `<input type="text" id="comentario" class="swal2-input" placeholder="Comentario">
      <input type="text" id="diagnostico" class="swal2-input" placeholder="Diagnostico">`,
      confirmButtonText: 'Enviar',
      focusConfirm: false,
      preConfirm: () => {
        let comentario!: any;
        let diagnostico!: any;
        comentario = (<HTMLInputElement>(
          Swal.getPopup()!.querySelector('#comentario')
        )).value;
        diagnostico = (<HTMLInputElement>(
          Swal.getPopup()!.querySelector('#diagnostico')
        )).value;
        if (!comentario || !diagnostico) {
          Swal.showValidationMessage(`Cargue Comentario y diagnostico!`);
        }
        return { comentario: comentario, diagnostico: diagnostico };
      },
    }).then((result: any) => {
      if (result.isConfirmed) {
        data.comentarioespecialista = result.value.comentario;
        data.diagnostico = result.value.diagnostico;
        data.estado = 'finalizado';
        this.buscar(data);

        Swal.fire({
          title: 'Historia Clinica',
          html: `<input type="text" id="altura" class="swal2-input" placeholder="Altura (En metros)">
          <input type="text" id="peso" class="swal2-input" placeholder="Peso (En kilos)">,
          <input type="text" id="temperatura" class="swal2-input" placeholder="Temperatura (En ~Grado Celcius)">
          <input type="text" id="presion" class="swal2-input" placeholder="Presión"><br>
          <span>Otros<span>
          <div class="row">
          <div class="col-6">
          <input type="text" id="clave1" class="swal2-input col-6" placeholder="Clave (opcional)">
          </div>
          <div class="col-6">
          <input type="text" id="valor1" class="swal2-input col-6" placeholder="Valor (opcional)">
          </div>
  
          <div class="col-6">
          <input type="text" id="clave2" class="swal2-input col-6" placeholder="Clave (opcional)">
          </div>
          <div class="col-6">
          <input type="text" id="valor2" class="swal2-input col-6" placeholder="Valor (opcional)">
          </div>
  
          <div class="col-6">
          <input type="text" id="clave3" class="swal2-input col-6" placeholder="Clave (opcional)">
          </div>
          <div class="col-6">
          <input type="text" id="valor3" class="swal2-input col-6" placeholder="Valor (opcional)">
          </div>
          </div>
          `,
          confirmButtonText: 'Enviar',
          focusConfirm: false,
          preConfirm: () => {
            let altura!: any;
            let peso!: any;
            let temperatura!: any;
            let presion!: any;

            let clave1!: any;
            let valor1!: any;
            let clave2!: any;
            let valor2!: any;
            let clave3!: any;
            let valor3!: any;

            let otros: any = [];

            altura = (<HTMLInputElement>(
              Swal.getPopup()!.querySelector('#altura')
            )).value;
            peso = (<HTMLInputElement>Swal.getPopup()!.querySelector('#peso'))
              .value;
            temperatura = (<HTMLInputElement>(
              Swal.getPopup()!.querySelector('#temperatura')
            )).value;
            presion = (<HTMLInputElement>(
              Swal.getPopup()!.querySelector('#presion')
            )).value;

            clave1 = (<HTMLInputElement>(
              Swal.getPopup()!.querySelector('#clave1')
            )).value;
            valor1 = (<HTMLInputElement>(
              Swal.getPopup()!.querySelector('#valor1')
            )).value;
            clave2 = (<HTMLInputElement>(
              Swal.getPopup()!.querySelector('#clave2')
            )).value;
            valor2 = (<HTMLInputElement>(
              Swal.getPopup()!.querySelector('#valor2')
            )).value;
            clave3 = (<HTMLInputElement>(
              Swal.getPopup()!.querySelector('#clave3')
            )).value;
            valor3 = (<HTMLInputElement>(
              Swal.getPopup()!.querySelector('#valor3')
            )).value;

            if (!altura || !peso || !temperatura || !presion) {
              Swal.showValidationMessage(
                `Cargue historia clinica! (Los parametros obligatorios)`
              );
            }

            if (clave1 && valor1) {
              otros.push({ clave: clave1, valor: valor1 });
            }
            if (clave2 && valor2) {
              otros.push({ clave: clave2, valor: valor2 });
            }
            if (clave3 && valor3) {
              otros.push({ clave: clave3, valor: valor3 });
            }
            return {
              altura: altura,
              peso: peso,
              temperatura: temperatura,
              presion: presion,
              otros: otros,
            };
          },
        }).then((result: any) => {
          console.log(result);

          if (result.isConfirmed) {
            let historiaClinica = new Historiaclinica();
            historiaClinica.altura = result.value.altura;
            historiaClinica.peso = result.value.peso;
            historiaClinica.temepratura = result.value.temperatura;
            historiaClinica.presion = result.value.presion;
            historiaClinica.dia = data.dia;
            historiaClinica.hora = data.hora;
            historiaClinica.minutos = data.minutos;
            historiaClinica.correoespecialista = data.correoEspecialista;
            historiaClinica.correopaciente = data.correoPaciente;
            historiaClinica.especialidad = data.especialidad;
            this.historiaclinica.create(historiaClinica).then((e: any) => {
              alert('HISTORIA CLINICA CARGADA');
            });
          }
        });
      }
    });
  }
  ejecutarAccion(accion: any, data: any) {
    if (accion == 'aceptar') {
      data.estado = 'aceptado';
      this.buscar(data);
    }
  }

  cancelarTurno(quiencancelo: any, data: any) {
    Swal.fire({
      title: '¿Escribe el comentario?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        if (quiencancelo == 'especialista') {
          data.comentarioespecialista = result.value;
        } else if (quiencancelo == 'paciente') {
          data.comentariopaciente = result.value;
        } else {
          data.comentarioadmin = result.value;
        }
        data.estado = 'cancelado';
        this.buscar(data);
        this.quehago(
          data.dia,
          data.hora,
          data.minutos,
          data.correoEspecialista
        );
      }
    });
  }
  buscar(data: any) {
    this.agregarestadoturno
      .getAll()
      .get()
      .subscribe((e) => {
        e.forEach((e) => {
          if (
            e.data().especialidad == data.especialidad &&
            e.data().correoEspecialista == data.correoEspecialista &&
            e.data().dia == data.dia &&
            e.data().hora == data.hora &&
            e.data().minutos == data.minutos
          ) {
            this.agregarestadoturno.update(e.id, data);
          }
        });
      });
  }
  verresenia(data: any) {
    this.reseniaActual = data;
    this.resenia = !this.resenia;
    var tablaHTML = this.tableHtml(this.reseniaActual);
    // Mostrar el SweetAlert2 con la tabla
    Swal.fire({
      title: 'Reseña',
      html: tablaHTML,
      showConfirmButton: false,
      cancelButtonText: 'Cerrar',
      showCancelButton: true,
      showCloseButton: true,
      customClass: {
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
      width: '800px',
    });
  }
  tableHtml(data) {
    const tablaHTML = `
    <div class="table-responsive" style="max-height: 200px; overflow-y: auto;">
  <table class="table table-bordered">
    <thead>
      <tr>
      <th scope="col" style="min-width: 150px">Comentario Paciente</th>
      <th scope="col" style="min-width: 150px">Comentario Especialista</th>
      <th scope="col" style="min-width: 150px">Comentario Administrador</th>
      <th scope="col" style="min-width: 150px">Diagnóstico</th>
      </tr>
    </thead>
    <tbody>      
    <td>${data.comentariopaciente} </td>
    <td>${data.comentarioespecialista}</td>
    <td>${data.comentarioadmin}</td>
    <td>${data.diagnostico}</td>          
    </tbody>
  </table>
  </div>
`;
    return tablaHTML;
  } 
  quehago(dia: any, hora: any, minutos: any, email: any) {
    let arraytercero: any = [];
    let tip = this.hsturnos
      .getAll()
      .valueChanges()
      .subscribe((e) => {
        tip.unsubscribe();
        for (let i = 0; i < e.length; i++) {
          arraytercero.push(e[i]);
        }
        for (let i = 0; i < arraytercero.length; i++) {
          if (arraytercero[i].email == email) {
            for (let z = 0; z < arraytercero[i].fechas.length; z++) {
              if (arraytercero[i].fechas[z].dia == dia) {
                for (
                  let j = 0;
                  j < arraytercero[i].fechas[z].horario.length;
                  j++
                ) {
                  if (
                    arraytercero[i].fechas[z].horario[j].hora == hora &&
                    arraytercero[i].fechas[z].horario[j].minutos == minutos
                  ) {
                    arraytercero[i].fechas[z].horario[j].estado = 'habilitado';
                    this.hsturnos
                      .getAll()
                      .query.get()
                      .then((e) => {
                        e.forEach((e: any) => {
                          if (
                            arraytercero[i].email == e.val().email &&
                            arraytercero[i].especialidad == e.val().especialidad
                          ) {
                            this.hsturnos.update(e.key, arraytercero[i]);
                          }
                        });
                      });
                    break;
                  }
                }
              }
            }
          }
        }
      });
  }
  hacerBusqueda() {
    let arrnueva = [];
    let cantidadletras = this.b.length;

    var especialista = this.list.filter((e: any) => {
      return e.especialidad == this.b || e.correoEspecialista == this.b;
    });
    if (especialista.length > 0) {
      this.list = especialista;
    }
  }
  limpiar() {
    this.list = [];
    this.agregarestadoturno
      .getAll()
      .get()
      .subscribe((e) => {
        e.forEach((e) => {
          this.list.push(e.data());
        });
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  verEncuesta(data:any){
    this.usuarioSeleccionado = data;    
    this.motrarEncuesta = true;
    console.log(this.usuarioSeleccionado);
    
  }
  
  rateExperience(valoracion: number) {
    this.valoracionControl.setValue(valoracion);
  }
  
  enviarEncuesta() {
        
    // Verificar si todos los pasos de la encuesta están válidos
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.threeFormGroup.valid &&
        this.fourFormGroup.valid && this.fiveFormGroup.valid) {
      // La encuesta está completada
      this.encuestaCompletada = true;
  
      // Realizar las acciones necesarias para enviar la encuesta      

      const firstValue = this.firstFormGroup.value.firstCtrl;
      const secondValue = this.secondFormGroup.value.sugerenciasCtrl;
      const threeValue = this.threeFormGroup.value.threeCtrl;
      const fourValue = this.fourFormGroup.value.fourCtrl;
      const fiveValue = this.fiveFormGroup.value.fiveCtrl;
     
      const encuesta = {
       1: firstValue,
       2: secondValue,
       3: threeValue,
       4: fourValue,
       5: fiveValue
      };
     
      // Hacer algo con los valores de la encuesta
      console.log('Valor del primer formulario:', encuesta);
      
      console.log(this.usuarioSeleccionado,"Usuario que llenó la encuesta");
      
          // Guardar la encuesta en Firestore
  this.encuestaService.guardarEncuesta(encuesta)
  .then(() => {
    // Éxito: los datos se guardaron correctamente en Firestore
    console.log('Encuesta guardada en Firestore');
    this.usuarioSeleccionado.encuesta = true;        
    this.buscar(this.usuarioSeleccionado)
    // Restablecer el stepper
    this.stepper.reset();
    this.motrarEncuesta = false;
    
    this.encuestaService.obtenerEncuestas().subscribe(encuestas => {
      console.log(encuestas);
      
    });    
    
  })
  .catch(error => {
    // Error al guardar los datos en Firestore
    console.error('Error al guardar la encuesta en Firestore', error);
  });
      // Restablecer el formulario del stepper para permitir realizar otra encuesta
      this.stepper.reset();
    } else {
      // La encuesta no está completada
      this.encuestaCompletada = false;
      console.log("La encuesta no está completada");
    }
  }
  
}
