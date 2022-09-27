import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmarEspecialista } from 'src/app/clases/confirmar-especialista';
import { Especialista } from 'src/app/clases/especialista';
import { AprobarEspecialistasService } from 'src/app/services/aprobar-especialistas.service';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import { SelecespecialistaService } from 'src/app/services/selecespecialista.service';
import { SubirimagenService } from 'src/app/services/subirimagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-especialista',
  templateUrl: './alta-especialista.component.html',
  styleUrls: ['./alta-especialista.component.css']
})
export class AltaEspecialistaComponent implements OnInit {
  public siteKey = '6Lck8EcgAAAAAI7iawlR4oS6ut7apOm6QDJihYIN'
  a:string = "hola";
  aprobar: ConfirmarEspecialista;
  det!:string;
  list:any[] = [];
  listoriginal:any[] = [];
  eventoGeneral:any;
  unespecialista:Especialista;
  imagenes:any[] = [];
  capcha:any = '543'
  cap:any = ''
  public formGroup!: FormGroup;
  encontrado:boolean = false;
  @Output() volver: EventEmitter<any>= new EventEmitter<any>();
  desactivar:boolean = false;
  constructor(private fb:FormBuilder,private us:RegistrarUsuariosService,private auth:AuthService,private storageService:SubirimagenService,private se:SelecespecialistaService,private spinner: NgxSpinnerService) 
  {
    this.capcha = Math.floor((Math.random()* (500-100+1))+100);
    this.aprobar = new ConfirmarEspecialista();
    this.list = ['Odontologo','Traumatologo','Neurologo']
    // this.se.getAll().valueChanges().subscribe(e=>{
    // this.list = [];
    // e.forEach(element => {
    //   this.list.push(element.especialidad);
      
    // });
      
    // })
    this.unespecialista = new Especialista();
  }

  ngOnInit(): void { 
    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required]],
      'apellido': ['',[Validators.required]],
      'edad': ['',[Validators.required, Validators.min(18),Validators.max(99)]],
      'email': ['',[Validators.required,Validators.pattern(/\w+@\w+\.+[a-z]/)]],
      'dni': ['',[Validators.required]],
      'password': ['',[Validators.required,this.validarcantidadCaracter]],
      'inputFile': ['',[Validators.required]],
      'especialidad': ['',[Validators.required]],
      'capchaInput' : ['', Validators.required],
      
    });
  }
  private validarcantidadCaracter(control: AbstractControl):null |object
  {
   const apellido = <any>control.value;
   var booleano: boolean = isNaN(apellido);
   if(apellido.length < 6 && booleano)
   {
    return {
      caracter:true
   };
   }
   else
   {
     return null;
   }
  }
  ac()
  {
    console.log(this.formGroup.getRawValue().inputFile);
  }
  aceptar()
  {  
    this.spinner.show();
    this.chequear(this.formGroup.getRawValue().email).then(e=>{
      if(e == false)
      { 
        this.unespecialista.nombre = this.formGroup.getRawValue().nombre;
        this.unespecialista.apellido = this.formGroup.getRawValue().apellido;
        this.unespecialista.edad = this.formGroup.getRawValue().edad;
        this.unespecialista.dni = this.formGroup.getRawValue().dni;
        this.unespecialista.email = this.formGroup.getRawValue().email;
        this.unespecialista.password = this.formGroup.getRawValue().password;
        this.unespecialista.especialidades = this.listoriginal;
        this.unespecialista.perfil = "especialista"; 
        this.unespecialista.estado = "deshabilitado";

         let archivos = this.eventoGeneral.target.files;
                let reader = new FileReader();
                reader.readAsDataURL(archivos[0]);  
          reader.onloadend = ()=>{
          this.imagenes.push(reader.result);
          this.storageService.subirImagen(this.unespecialista.email + "_" + "d", reader.result).then(ese=>{
              this.unespecialista.imagen = ese;
              this.us.create(this.unespecialista).then((e:any)=>{
                this.auth.crearUsuario(this.unespecialista.email,this.unespecialista.password).then(e=>{
                  this.auth.enviarCorreo();
                  this.auth.deslogear();
                  this.spinner.hide();
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Especialista registrado correctamente!',
                    showConfirmButton: false,
                    timer: 2000,
                  })
                })
                  }).catch(()=>{
                    this.spinner.hide();
                  })
          }).catch(()=>{
            this.spinner.hide();
          })
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
    this.volver.emit(false);
  }
  chequear(data:string)
{
      return new Promise((resolve,rejected)=>{
            var clientesSubscription = this.us.getAll().get().subscribe((q) =>{q.forEach((doc)=>{
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
  this.eventoGeneral = event;
}
agregar()
{
 let data = (<HTMLInputElement>document.getElementById('agregar')).value;

  this.list.push(data);
}
borrar()
{
  let data = (<HTMLInputElement>document.getElementById("select")).value;
  this.revisar(data).then((e:any)=>{
    if(e != null)
    {
      this.se.delete(e).then(e=>{
      })
    }

  })
  
}
revisar(especial:any)
{
      return new Promise((resolve,rejected)=>{
            var clientesSubscription = this.se.getAll().get().subscribe((q) =>{q.forEach((doc)=>{
                  if(doc.data().especialidad == especial)
                  {
                        this.det = doc.id;
                  }    
                })
                resolve(this.det);
                 })
          })

}
cambiar()
{
  this.listoriginal.push(this.formGroup.getRawValue().especialidad);
}
borrar2(data:any)
{
  console.log(data);
  
  for(let i = 0; i<this.listoriginal.length;i++)
  {
    if(data == this.list[i])
    {
      this.listoriginal.splice(i,i);
    }
  }
}
deshabilitado()
{
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

} 
