import { Component, OnInit, ViewChild } from '@angular/core';
import { Historiaclinica } from 'src/app/clases/historiaclinica';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { HorariosturnosService } from 'src/app/services/horariosturnos.service';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-turnoespecialista',
  templateUrl: './turnoespecialista.component.html',
  styleUrls: ['./turnoespecialista.component.css']
})
export class TurnoespecialistaComponent implements OnInit {
  historiaclinicaa:any = [];
  b:any;
  list:any;
  resenia:boolean = false;
  reseniaActual:any;
  ditt:any = "hola";
  displayedColumns: string[] = ['dia', 'horario', 'especialidad', 'paciente', 'accion'];  
  dataSource:any = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public auth:AuthService,private agregarestadoturno:AgregarestadoturnoService,private hsturnos:HorariosturnosService,private historiaclinica:HistoriaClinicaService) 
  {
  
    
    this.agregarestadoturno.getAll().valueChanges().subscribe(e=>{
      let aux = [];
      console.log(this.list,"coso");
      for (var item of e) {
        if (item.correoEspecialista == auth.correologeado) {
          aux.push(item);
        }
      }
      this.list = aux;
      this.dataSource = new MatTableDataSource(this.list);
      this.ngAfterViewInit();
      
    })
    this.historiaclinica.getAll().valueChanges().subscribe(e=>{
      this.historiaclinicaa = e;
    })
   }
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;        
  }
  ngOnInit(): void {
  }
  finalizado(data:any)
  {
    console.log(data);
    
    Swal.fire({
      title: 'Comentario Especialista',
      html: `<input type="text" id="comentario" class="swal2-input" placeholder="Comentario">
      <input type="text" id="diagnostico" class="swal2-input" placeholder="Diagnostico">`,
      confirmButtonText: 'Enviar',
      focusConfirm: false,
      preConfirm: () => {
        let comentario!:any;
        let diagnostico!:any;
        comentario = (<HTMLInputElement>Swal.getPopup()!.querySelector('#comentario')).value;
        diagnostico = (<HTMLInputElement>Swal.getPopup()!.querySelector('#diagnostico')).value;
        if (!comentario || !diagnostico) {
          Swal.showValidationMessage(`Cargue Comentario y diagnostico!`)
        }
        return { comentario: comentario, diagnostico: diagnostico }
      }
    }).then((result:any)=>{


      
      if(result.isConfirmed)
      {
        data.comentarioespecialista = result.value.comentario;
        data.diagnostico = result.value.diagnostico;
        data.estado = "finalizado";
        this.buscar(data);

        Swal.fire({
          title: 'Historia Clinica',
          html:`
          <div class="form-group">
            <label for="altura">Altura (En metros)</label>
            <input type="text" id="altura" class="form-control" placeholder="Altura (En metros)">
          </div>
          <div class="form-group">
            <label for="peso">Peso (En kilos)</label>
            <input type="text" id="peso" class="form-control" placeholder="Peso (En kilos)">
          </div>
          <div class="form-group">
            <label for="temperatura">Temperatura (En ~Grado Celcius)</label>
            <input type="text" id="temperatura" class="form-control" placeholder="Temperatura (En ~Grado Celcius)">
          </div>
          <div class="form-group">
            <label for="presion">Presión</label>
            <input type="text" id="presion" class="form-control" placeholder="Presión">
          </div>
          <div class="form-group">
            <label for="numero">Tato tipo Number</label>
            <input type="number" id="numero" class="form-control" placeholder="Tato tipo Number" min="0" max="100">
          </div>
          <div class="form-group">
            <label>Otros</label>
            <div class="row">
              <div class="col-6">
                <input type="text" id="clave1" class="form-control" placeholder="Clave (opcional)">
              </div>
              <div class="col-6">
                <input type="text" id="valor1" class="form-control" placeholder="Valor (opcional)">
              </div>
              <div class="col-6">
                <input type="text" id="clave2" class="form-control" placeholder="Clave (opcional)">
              </div>
              <div class="col-6">
                <input type="text" id="valor2" class="form-control" placeholder="Valor (opcional)">
              </div>
              <div class="col-6">
                <input type="text" id="clave3" class="form-control" placeholder="Clave (opcional)">
              </div>
              <div class="col-6">
                <input type="text" id="valor3" class="form-control" placeholder="Valor (opcional)">
              </div>
            </div>
          </div>
        `,        confirmButtonText: 'Enviar',
          focusConfirm: false,
          preConfirm: () => {
            let altura!:any;
            let peso!:any;
            let temperatura!:any;
            let presion!:any;
  
            let clave1!:any;
            let valor1!:any;
            let clave2!:any;
            let valor2!:any;
            let clave3!:any;
            let valor3!:any;
            let numero!:any;
            let otros:any = [];
  
            altura = (<HTMLInputElement>Swal.getPopup()!.querySelector('#altura')).value;
            peso = (<HTMLInputElement>Swal.getPopup()!.querySelector('#peso')).value;
            temperatura = (<HTMLInputElement>Swal.getPopup()!.querySelector('#temperatura')).value;
            presion = (<HTMLInputElement>Swal.getPopup()!.querySelector('#presion')).value;
  
            clave1 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#clave1')).value;
            valor1 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#valor1')).value;
            clave2 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#clave2')).value;
            valor2 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#valor2')).value;
            clave3 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#clave3')).value;
            valor3 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#valor3')).value;
            numero = (<HTMLInputElement>Swal.getPopup()!.querySelector('#numero')).value;
            if (!altura || !peso || !temperatura || !presion) {
              Swal.showValidationMessage(`Cargue historia clinica! (Los parametros obligatorios)`)
            }
            console.log(numero);
            
            if(numero <0 || numero >100)
            {
              Swal.showValidationMessage(`Datos incorrectos! (El parametro numerico es de 0-100)`)
            }
            // if(valor1 == undefined)
            // {
            //   valor1 = "";
            // }
            // if(valor2 == undefined)
            // {
            //   valor2 = ""
            // }
            // if(valor3 == undefined)
            // {
            //   valor3 = "";
            // }
            // if(clave1 == undefined)
            // {
            //   clave1 == "";
            // }
            // if(clave2 == undefined)
            // {
            //   clave2 == "";
            // }
            // if(clave3 == undefined)
            // {
            //   clave3 == "";
            // }
            if(clave1 && valor1)
            {
              otros.push({clave:clave1, valor:valor1});
            }
            if(clave2 && valor2)
            {
              otros.push({clave:clave2, valor:valor2});
            }
            if(clave3 && valor3)
            {
              otros.push({clave:clave3, valor:valor3});
            }
            return { altura: altura, peso: peso, temperatura:temperatura, presion:presion, otros:otros }
          }
        }).then((result:any)=>{
          console.log(result);
          
          if(result.isConfirmed)
          {
            // if(result.value.otros.length>0)
            // {
            //   for(let i = 0; i<result.value.otros.length;i++)
            //   {
            //     result.value.otros[i]
            //   }
            // }
            console.log(result.value.valor1);
            
            if(result.value.clave1 == undefined)
            {
              result.value.clave1 = "";
            }
            if(result.value.clave2 == undefined)
            {
              result.value.clave2 = "";
            }
            if(result.value.clave3 == undefined)
            {
              result.value.clave3 = "";
            }
            let historiaClinica = new Historiaclinica();
            historiaClinica.altura = result.value.altura;
            historiaClinica.peso = result.value.peso;
            historiaClinica.temepratura = result.value.temperatura;
            historiaClinica.presion = result.value.presion;
            historiaClinica.dia = data.dia;
            historiaClinica.hora = data.hora
            historiaClinica.minutos = data.minutos;
            historiaClinica.correoespecialista = data.correoEspecialista;
            historiaClinica.correopaciente = data.correoPaciente;
            historiaClinica.especialidad = data.especialidad;
            historiaClinica.otros = result.value.otros;
            console.log(historiaClinica.otros);
            
            this.historiaclinica.create(historiaClinica).then((e:any)=>{
              alert("HISTORIA CLINICA CARGADA")
            })
          }
        })
      }
    })
  }
  ejecutarAccion(accion:any,data:any)
  {
    if(accion == 'aceptar')
    {
      data.estado = 'aceptado';
      this.buscar(data);
    }
  }
  
  cancelarTurno(quiencancelo:any,data:any)
  {  
    Swal.fire({
      title: '¿Motivo de cancelación?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        if(quiencancelo == 'especialista')
        {
          data.comentarioespecialista = result.value
        }
        else if(quiencancelo == 'paciente')
        {
          data.comentariopaciente = result.value;
        }
        else
        {
          data.comentarioadmin = result.value;
        }
        data.estado = "cancelado";
        this.buscar(data);
        this.quehago(data.dia,data.hora,data.minutos,data.correoEspecialista);
      }
    })
  }
  RechazarTurno(quiencancelo:any,data:any)
  {  
    Swal.fire({
      title: '¿Motivo del rechazo?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        if(quiencancelo == 'especialista')
        {
          data.comentarioespecialista = result.value
        }
        else if(quiencancelo == 'paciente')
        {
          data.comentariopaciente = result.value;
        }
        else
        {
          data.comentarioadmin = result.value;
        }
        data.estado = "rechazado";
        this.buscar(data);
        this.quehago(data.dia,data.hora,data.minutos,data.correoEspecialista);
      }
    })
  }
  buscar(data:any)
  {
   this.agregarestadoturno.getAll().get().subscribe(e=>{e.forEach(e=>{
      if(e.data().especialidad == data.especialidad && e.data().correoEspecialista == data.correoEspecialista && e.data().dia == data.dia && e.data().hora == data.hora && e.data().minutos == data.minutos)
      {
        this.agregarestadoturno.update(e.id,data)
      }
   })})
  }
  verresenia(data:any)
  {
    this.reseniaActual = data;   
    this.resenia  = !this.resenia;
    var tablaHTML = this.tableHtml(this.reseniaActual);
    Swal.fire({
      title: 'Reseña',
      html: tablaHTML,
      showConfirmButton: false,
      cancelButtonText: "Cerrar",
      showCancelButton: true,
      showCloseButton: true,
      customClass: {    
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
      width:"800px"
    });
  }
  tableHtml(data){
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
  quehago(dia:any,hora:any,minutos:any,email:any)
  {
    let arraytercero:any = [];
   let tip =  this.hsturnos.getAll().valueChanges().subscribe(e=>{
    tip.unsubscribe();
      for(let i = 0; i<e.length;i++)
      {
          arraytercero.push(e[i]);
      }
      for(let i = 0; i<arraytercero.length;i++)
      {
        if(arraytercero[i].email == email)
        {
      for(let z = 0; z<arraytercero[i].fechas.length;z++)
      {
        if(arraytercero[i].fechas[z].dia == dia)
        {
          for(let j = 0; j<arraytercero[i].fechas[z].horario.length;j++)
          {  
            
            if(arraytercero[i].fechas[z].horario[j].hora == hora && arraytercero[i].fechas[z].horario[j].minutos == minutos)
            {
              arraytercero[i].fechas[z].horario[j].estado= 'habilitado';
              this.hsturnos.getAll().query.get().then(e=>{
                e.forEach((e:any)=>{
                   if(arraytercero[i].email == e.val().email && arraytercero[i].especialidad == e.val().especialidad)
                   {
                    this.hsturnos.update(e.key,arraytercero[i])
                   }
                 }
                 )
               })
               break;
            }
          }
        }
      }
    }
    }
    })  
    
  
  }
  
  hacerBusqueda() {
    const filtro = this.b.trim().toLowerCase();
    if (filtro === '') {
      // Si el filtro está vacío, mostrar todos los elementos sin filtrar
      this.list = this.list;
    } else {
      // Filtrar los elementos según el criterio de búsqueda
      this.list = this.list.filter((element: any) =>
        element.especialidad.toLowerCase().includes(filtro) ||
        element.correoEspecialista.toLowerCase().includes(filtro)||
        element.correoPaciente.toLowerCase().includes(filtro)
      );
    }
  }
  
  limpiar()
  {
    this.list = [];
    this.agregarestadoturno.getAll().get().subscribe(e=>{e.forEach(e=>{
      this.list.push(e.data());
    })})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
