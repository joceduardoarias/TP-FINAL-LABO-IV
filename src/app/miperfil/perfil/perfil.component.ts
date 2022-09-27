import { Component, OnInit,ViewChild,ElementRef, ViewChildren, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import { Diahoraespecialista } from 'src/app/clases/diahoraespecialista';
import { AuthService } from 'src/app/services/auth.service';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  fecha = new Date().toLocaleDateString()
  esa:any = [];
  @ViewChild('content',{static:false}) el!:ElementRef;
  objee:any = [{'estado':1,'filtro':2,'teclado':3,'mouse':4,'dia':2,'turno':4}]
  datoUsuario:any = [];
  cargo:boolean = false;
  unseg:boolean = false;
  formGroup!:FormGroup;
  lunes:any;
  martes:any;
  miercoles:any;
  jueves:any;
  viernes:any;
  sabado:any;
  domingo:any;
  arrayhoraaa:any = [];
  unespecialista!:Diahoraespecialista;
  historiaclinicaa:any = [];
  b:any;
  indicex = 0;
  nuevo:any[] = [];
  constructor(public auth:AuthService,private sv:RegistrarUsuariosService,private fb:FormBuilder,private es:CargarhoraespecialistaService,private h:HistoriaClinicaService) 
  { 
     this.sv.getAll().get().subscribe(e=>{e.forEach(ese=>{
        if(ese.data().email == this.auth.correologeado)
        {
          this.cargo = true;
          this.datoUsuario = ese.data();
        }

     })})
  
     if(this.auth.paciente)
     {
       let pec = this.h.getAll().valueChanges().subscribe(e=>{
        this.historiaclinicaa = [];
        for(let i = 0; i<e.length;i++)
        {
          if(e[i].correopaciente == auth.correologeado)
          {
            this.historiaclinicaa.push(e[i]);
          }
        }
       })
     }
    //  this.h.getAll().valueChanges().subscribe((e:any)=>{
      
    //   this.historiaclinicaa = e;
    //   alert("sisi")
    //   Object.keys(this.historiaclinicaa[1]).forEach((entry,index)=>{
    //             if(entry != "altura" && entry != "presion" && entry != "fecha" && entry != "peso" && entry != "correoPaciente")
    //             { 
    //               if(Array.isArray(this.historiaclinicaa[0][entry]))
    //               {
          
                   
                    
    //                 Object.keys(this.historiaclinicaa[0][entry][0]).forEach((ese,index)=>{
                     
    //                   console.log(this.historiaclinicaa[0][ese]);
    //                   this.indicex++;
                      
                      
    //                 })
                  
    //               }
                 
    //             }
                
    //           })
            
    //  })
    //  historiaclinica.getAll().valueChanges().subscribe(e=>{
    // //   this.historiaclinicaa = e;
       
    //     alert("entro 1 vez")
      
       
    //       Object.keys(this.historiaclinicaa[1]).forEach((entry,index)=>{
    //         if(entry != "altura" && entry != "presion" && entry != "fecha" && entry != "peso" && entry != "correoPaciente")
    //         {
              
    //         }
            
    //       })
        
      


      
    // })
     this.arrayhoraaa[0] = null;
     this.arrayhoraaa[1] = null;
     this.arrayhoraaa[2] = null;
     this.arrayhoraaa[3] = null;
     this.arrayhoraaa[4] = null;
     this.arrayhoraaa[5] = null;
     this.arrayhoraaa[6] = null;
  }

  enviar()
  {
    let esperar;
    let data = (<HTMLInputElement>document.getElementById("select")).value;
    this.unespecialista = new Diahoraespecialista();
    this.arrayhoraaa[0] = null;
    this.arrayhoraaa[1] = null;
    this.arrayhoraaa[2] = null;
    this.arrayhoraaa[3] = null;
    this.arrayhoraaa[4] = null;
    this.arrayhoraaa[5] = null;
    this.arrayhoraaa[6] = null;
    if(this.lunes)
    {
      this.arrayhoraaa[1] = 1;
    }
    if(this.martes)
    {
      this.arrayhoraaa[2] = 2;
    }
    if(this.miercoles)
    {
      this.arrayhoraaa[3] = 3;
    }
    if(this.jueves)
    {
      this.arrayhoraaa[4] = 4;
    }
    if(this.viernes)
    {
      this.arrayhoraaa[5] = 5;
    }
    if(this.sabado)
    {
      this.arrayhoraaa[6] = 6;
    }
    console.log(this.arrayhoraaa);
    this.unespecialista.dias = this.arrayhoraaa;
    this.unespecialista.email = this.datoUsuario.email;
    this.unespecialista.especialidad = (<HTMLInputElement>document.getElementById('select2')).value;
    this.unespecialista.imagen = this.datoUsuario.imagen;
    this.unespecialista.nombre = this.datoUsuario.nombre;
  
    if(data == 'maniana')
    {
      this.unespecialista.hora = {'horamin':'8','horamax':'12'}
    }
    else if(data == 'tarde')
    {
      this.unespecialista.hora = {'horamin':'12','horamax':'19'}
    }
    else 
    {
      this.unespecialista.hora = {'horamin':'8','horamax':'19'}
    }
    this.recorrer(this.unespecialista).then((e:any)=>{
      if(e==null)
      {
        this.es.create(this.unespecialista).then((e:any)=>{
        console.log("Hora y dias cargado correctamente!!");
      
       })
      }
      else
      {
        this.es.update(e,this.unespecialista).then(e=>{
          alert("Modificado correctamente!!")
        })
      }
    })
    // let data = (<HTMLInputElement>document.getElementById('agregar')).value;
    
    
  }
  ngOnInit(): void {
  }
  recorrer(data:any)
  {
    alert(data.especialidad)
    let encontrado:any = null;
    return new Promise((resolve,rejected)=>{
      var clientesSubscription = this.es.getAll().get().subscribe((q) =>{q.forEach((doc)=>{

     
          if(doc.data().email == data.email && doc.data().especialidad == data.especialidad)
              {
                encontrado = doc.id;
              }    
          })
          resolve(encontrado);
           })
    })
    
  }
  dias(data:any)
  {
    if(data == 'lunes')
    {
      this.lunes = !this.lunes;
      console.log(data);
    }
    else if(data == 'martes')
    {
      this.martes = !this.martes;
      console.log(data);
    }
    else if(data == 'miercoles')
    {
      this.miercoles = !this.miercoles;
      console.log(data);
    }
    else if(data == 'jueves')
    {
      this.jueves = !this.jueves;
      console.log(data);
    }
    else if (data == 'viernes')
    {
      this.viernes = !this.viernes;
      console.log(data);
    }
    else
    {
      this.sabado = !this.sabado;
      console.log(data);
    }   
    
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
      this.historiaclinicaa.push(e.data());
    })})
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
