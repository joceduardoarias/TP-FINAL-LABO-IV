import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Paciente } from 'src/app/clases/paciente';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import { SubirimagenService } from 'src/app/services/subirimagen.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrls: ['./alta-paciente.component.css']
})
export class AltaPacienteComponent implements OnInit {
  contador:number = 0;
  arra:Array<any> = [];
  eventoGeneral:any;
  unpaciente:Paciente;
  imagenes:any[] = [];
  public formGroup!: FormGroup;
  encontrado:boolean = false;
  capcha:any;
  cap:any = ''
  // @Output() volver: EventEmitter<any>= new EventEmitter<any>();
  desactivar:boolean = false;
  constructor(private fb:FormBuilder,private us:RegistrarUsuariosService,private auth:AuthService,private storageService:SubirimagenService,private spinner: NgxSpinnerService) 
  {  
    this.unpaciente = new Paciente();
    //  this.capcha = Math.floor((Math.random()* (500-100+1))+100);
  }

  ngOnInit(): void { 
    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required]],
      'apellido': ['',[Validators.required]],
      'edad': ['',[Validators.required, Validators.min(18),Validators.max(99)]],
      'obraSocial': ['',Validators.required],
      'email': ['',[Validators.required,Validators.pattern(/\w+@\w+\.+[a-z]/)]],
      'dni': ['',[Validators.required]],
      'password': ['',[Validators.required]],
      'inputFile': ['',[Validators.required]],
      'inputFile2': ['',[Validators.required]],
      'capchaInput' : ['', Validators.required],

    });
  }
  aceptar()
  {
    this.spinner.show();
    this.chequear(this.formGroup.getRawValue().email).then(e=>{
      if(e == false)
      { 
        this.contador = 0;
        this.unpaciente.nombre = this.formGroup.getRawValue().nombre;
        this.unpaciente.apellido = this.formGroup.getRawValue().apellido;
        this.unpaciente.edad = this.formGroup.getRawValue().edad;
        this.unpaciente.dni = this.formGroup.getRawValue().dni;
        this.unpaciente.obraSocial = this.formGroup.getRawValue().obraSocial;
        this.unpaciente.email = this.formGroup.getRawValue().email;
        this.unpaciente.password = this.formGroup.getRawValue().password;
        this.unpaciente.perfil = "paciente";

        let archivos = this.eventoGeneral.target.files.set;
        for(let i  = 0; i<archivos.length;i++)
        {
          let reader = new FileReader();
          reader.readAsDataURL(archivos[i]);  
          reader.onloadend = ()=>{
          this.imagenes.push(reader.result);
          this.storageService.subirImagen(this.unpaciente.email + i + "_" + "d", reader.result).then(ese=>{
            this.contador++;

            if(this.contador == 1)
            {
              this.unpaciente.imagen = ese;
            }
            if(this.contador == 2)
            {
              this.unpaciente.imagen2 = ese;
              this.us.create(this.unpaciente).then((e:any)=>{
                this.auth.crearUsuario(this.unpaciente.email,this.unpaciente.password).then(e=>{
                  this.auth.enviarCorreo();
                  this.auth.deslogear();
                  this.spinner.hide();
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Paciente registrado correctamente!',
                    showConfirmButton: false,
                    timer: 2000,
                  })
                })
                  }).catch(()=>{
                    this.spinner.hide();
                  })
            }  
          }).catch(()=>{
            this.spinner.hide();
          })
        }
        }
      }  
      else
      {
        this.spinner.hide();
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El email ya está en uso!',
        showConfirmButton: false,
        timer: 2000,
      })
      }

    })
    this.encontrado = false;
  }
  atras()
  {
    // this.volver.emit(false);
  }
  chequear(data:string)
{
      return new Promise((resolve,rejected)=>{
            var clientesSubscription = this.us.getAll().get().subscribe((q) =>{q.forEach((doc)=>{
              console.log(doc.data().email)
                  if(doc.data().email == data)
                  {

                      this.encontrado = true;
                  }    
                })
                resolve(this.encontrado);
                 })
          })

}
cargarImagen(event:any)
{
  this.arra.push(event.target.files[0]);
  if(this.eventoGeneral != null)
  {
    this.eventoGeneral.target.files.set = this.arra;
    console.log(this.eventoGeneral.target.files);

    



  }
  else
  {
    this.eventoGeneral  = event;

  }
}
esto(data:any)
  {
    alert("sisilego")
  }
  deshabilitado()
{ 
  debugger
  this.desactivar = !this.desactivar;
  if(this.desactivar == true)
  {
    console.log("sisi entro");
    
    this.formGroup.get("capchaInput").setValue(this.capcha);   
  }
  else
  {
   setTimeout(() => {
    this.formGroup.get("capchaInput").setValue('');   
    console.log( this.formGroup.get("capchaInput").value);
    
    
   }, 100);
  }
}

accionn(data:any)
  {    
    this.capcha = data;
  }

}
