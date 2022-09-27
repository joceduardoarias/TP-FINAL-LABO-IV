import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/clases/paciente';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { AprobarEspecialistasService } from 'src/app/services/aprobar-especialistas.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import { Especialista } from 'src/app/clases/especialista';
import { ToastrService } from 'ngx-toastr';
import { LogIngresosService } from 'src/app/services/log-ingresos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  img1:any = "data:image/jpeg;base64,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";
  correo:any;
  contrasenia:any;
  paciente1:Paciente;
  public formGroup!: FormGroup;
  sp:boolean = false;;
  constructor(private auth:AuthService,private fb:FormBuilder,private router:Router,private spinner: NgxSpinnerService,private apEspecialista:AprobarEspecialistasService,private us:RegistrarUsuariosService,private ToastrSvc:ToastrService, private ingresos:LogIngresosService) 
  {
    this.paciente1 = new Paciente();
    this.paciente1.nombre = "german"
    this.paciente1.apellido = "vi";
    this.paciente1.edad = 17;
    this.paciente1.email = "dasd@asda.com";
    this.paciente1.obraSocial = "dasd";
    this.paciente1.dni = 414141; 
    this.paciente1.password = "dasda";
    console.log(this.paciente1);
    
    // this.auth.login("hernannvilaerr@gmail.com","123456").then(e=>{
    //   alert("todo ok");
    // }).catch(e=>{
    //   alert("Error")
    // })
   }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'email': ['',[Validators.pattern(/\w+@\w+\.+[a-z]/)]],
      'password': ['',[this.validarcantidadCaracter]],
    });
  }
  private validarcantidadCaracter(control: AbstractControl):null |object
  {
   const apellido = <any>control.value;
   var booleano: boolean = isNaN(apellido);
   if(apellido.length < 6)
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
  
  
  ingresar()
  {
    this.sp = true;
    this.correo;
    this.contrasenia;
    this.chequiar(this.correo,this.contrasenia).then((efe:any)=>{
      if(efe!=null)
      {
        if(efe.perfil == 'paciente')
        {
          this.auth.login(this.correo,this.contrasenia).then(e=>{
    
            let data = this.auth.VerificarCorreo().then(e=>{
              this.sp = false;
              if(e == true)
              {
                this.router.navigateByUrl('/home');
              }
              else
              {
                this.ToastrSvc.warning("Valida el email..","Error");
              }
     
            }).catch(e=>{
              this.sp = false;
            })
            //ir a cada parte dependiendo si es especialista o paciente
            console.log(e);
          }).catch(error=>{
            this.sp = false;
         
          })
        }
        else if(efe.perfil == 'especialista')
        {
          if(efe.estado == 'deshabilitado')
          {
            this.sp = false;
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Cuenta deshabilitada temporalmente, habla con el administrador.',
              showConfirmButton: false,
              timer: 4000,
            })
          }
          else
          {
                      this.auth.login(this.correo,this.contrasenia).then(e=>{
                        this.auth.VerificarCorreo().then(e=>{
                          if(e == true)
                          {
                            this.sp = false;
    
                            this.router.navigateByUrl('/home');
                          }
                          else 
                          {
                            this.sp = false;
                            this.auth.deslogear();
                            this.ToastrSvc.warning("Valida el email..","Error");
                          }
                        })

                        //ir a cada parte dependiendo si es especialista o pacient
                      }  ).catch(e=>{
                        alert(e);
                      })  
        }
      }
      else 
      {
        this.auth.login(this.correo,this.contrasenia).then((e:any)=>{
              console.log(e);
              
              this.sp = false;
              let horaActual = new Date().toLocaleTimeString();
              let diaActual = new Date().toLocaleDateString('en-GB')
              let objActual = {'usuario':this.correo,'dia':diaActual,'hora':horaActual};        
               this.ingresos.create(objActual)
              this.router.navigateByUrl('/home');


          //ir a cada parte dependiendo si es especialista o pacient
        }  ).catch(e=>{
          this.sp = false;
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error interno contactate con el dueño del proyecto',
            showConfirmButton: false,
            timer: 4000,
          })
        })  
      }
      }
      else
      {
        this.sp = false;
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Datos incorrectos.',
            showConfirmButton: false,
            timer: 4000,
          })
        
      }
    })
  }
  chequiar(email:string,password:string):Promise<any>
  {
    return new Promise((resolve,reject)=>{
      this.us.getAll().get().subscribe(e=>{e.forEach(e=>{
        if(e.data().email == email && e.data().password == password)
        {
          resolve(e.data());
        }
      })
      resolve(null);
    }
      )
    })
  }
  revisarconfirmacion(email:string):Promise<any>
  {
    return new Promise((resolve,reject)=>{
      this.apEspecialista.getAll().get().subscribe(e=>{e.forEach(e=>{
          if(e.data().email == email)
          {
            resolve (e.data());
          }
      })
    resolve(null);
  })
    })
  }
  autocompletar(data:string)
  {
    if(data == "hernannvilar@gmail.com")
    {
      this.img1 = "data:image/jpeg;base64,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"
    }
    else if(data == "hernan-vilar@hotmail.com")
    {
      this.img1 = "data:image/jpeg;base64,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"
    }
    else if(data == "admin@admin.com")
    {
      this.img1 = "data:image/jpeg;base64,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"
    }
    else if(data == "kilota3241@krunsea.com")
    {
      this.img1 = "https://img.freepik.com/vector-gratis/fondo-personaje-doctor_1270-84.jpg?w=2000"
    }
    else if(data == "sakir29583@musezoo.com")
    {
      this.img1 = "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2018/10/banner-24_1200x525-v01-01.jpg";
    }
    else if(data == "sayasof742@musezoo.com")
    {
      this.img1 = "data:image/jpeg;base64,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"
    }
      this.correo = data;
      this.contrasenia = "123456";
  }

}
