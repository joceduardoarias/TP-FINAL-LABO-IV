import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Administrador } from 'src/app/clases/administrador';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import { SubirimagenService } from 'src/app/services/subirimagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-administrador',
  templateUrl: './alta-administrador.component.html',
  styleUrls: ['./alta-administrador.component.css']
})
export class AltaAdministradorComponent implements OnInit {
  eventoGeneral:any;
  public formGroup!: FormGroup;
  capcha:any;
  cap:any = '';
  imagenes:any[] = [];
  encontrado:boolean = false;
  unadministrador:Administrador;
  desactivar:boolean = false;;
  constructor(private fb:FormBuilder,private spinner: NgxSpinnerService,private us:RegistrarUsuariosService,private auth:AuthService,private storageService:SubirimagenService) 
  {
    this.unadministrador = new Administrador();
     
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
  cargarImagen(event:any)
{
  this.eventoGeneral = event;
}
aceptar()
  {  
    this.spinner.show();
    this.chequear(this.formGroup.getRawValue().email).then(e=>{
      if(e == false)
      { 
        this.unadministrador.nombre = this.formGroup.getRawValue().nombre;
        this.unadministrador.apellido = this.formGroup.getRawValue().apellido;
        this.unadministrador.edad = this.formGroup.getRawValue().edad;
        this.unadministrador.dni = this.formGroup.getRawValue().dni;
        this.unadministrador.email = this.formGroup.getRawValue().email;
        this.unadministrador.password = this.formGroup.getRawValue().password;
        this.unadministrador.perfil = "administrador"; 

         let archivos = this.eventoGeneral.target.files;
                let reader = new FileReader();
                reader.readAsDataURL(archivos[0]);  
          reader.onloadend = ()=>{
          this.imagenes.push(reader.result);
          this.storageService.subirImagen(this.unadministrador.email + "_" + "d", reader.result).then((ese:any)=>{
              this.unadministrador.imagen = ese;
              this.us.create(this.unadministrador).then((e:any)=>{
                this.auth.crearUsuario(this.unadministrador.email,this.unadministrador.password).then(e=>{
                  this.auth.enviarCorreo();
                  this.auth.deslogear();
                  this.spinner.hide();
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Administrador registrado correctamente!',
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
  accionn(data:any)
  {
    this.capcha = data;
  }
  deshabilitado()
  {
    this.desactivar = !this.desactivar;
    if(this.desactivar == true)
    {
      this.formGroup.get("capchaInput").setValue(this.capcha);   
    }
    else
    {
     setTimeout(() => {
      this.formGroup.get("capchaInput").setValue('');   
     }, 100);

    }
  }
}
