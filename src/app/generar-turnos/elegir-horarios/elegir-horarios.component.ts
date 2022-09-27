import { Component, Input, OnInit } from '@angular/core';
import { Fecha } from 'src/app/clases/fecha';
import { Horario } from 'src/app/clases/horario';
import { Nuevo } from 'src/app/clases/nuevo';
import { ObjectoCompleto } from 'src/app/clases/objecto-completo';
import { Usuarioespecialista } from 'src/app/clases/usuarioespecialista';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import { AuthService } from 'src/app/services/auth.service';
import { HorariosturnosService } from 'src/app/services/horariosturnos.service';

@Component({
  selector: 'app-elegir-horarios',
  templateUrl: './elegir-horarios.component.html',
  styleUrls: ['./elegir-horarios.component.css']
})
export class ElegirHorariosComponent implements OnInit {
  @Input() objectoActual:any;
  cargando:boolean = true;
  objectoguardar!:ObjectoCompleto
  ahora:any = new Date();
  arrayHorarios:any = [];
  arraytercero:any = [];
  hs:any;
  dat:any;
  desub:any;
  unobj:Usuarioespecialista;
  clickeado:any;
  datin:any;
  constructor(private hsturnos:HorariosturnosService,private mixto:AgregarestadoturnoService,private auth:AuthService) {
    this.unobj = new Usuarioespecialista();
    setTimeout(() => {
      this.cargando = false;
    }, 1200);
   }

  ngOnInit(): void {
    this.calculartiempo(this.ahora,this.objectoActual.dias,this.objectoActual.hora.horamin,this.objectoActual.hora.horamax).then(ese=>{
      this.desub  = this.hsturnos.getAll().valueChanges().subscribe(e=>{
        this.desub.unsubscribe();
        
        this.objectoguardar = new ObjectoCompleto(this.objectoActual.email,this.objectoActual.especialidad,ese);
        if(e.length == 0)
        {
           this.hsturnos.create(this.objectoguardar).then((e:any)=>{
           })
        }
        else
        {
          this.hsturnos.getAll().valueChanges().subscribe(e=>{
            for(let i = 0; i<e.length;i++)
            {

              if(e[i].email == this.objectoguardar.email && e[i].especialidad == this.objectoguardar.especialidad)
              { 
                for(let j = 0; j<this.objectoguardar.fechas.length;j++)
                {  
               
                  for(let k = 0; k<e[i].fechas.length;k++)
                  {        
                    if(this.objectoguardar.fechas[j].dia == e[i].fechas[k].dia)
                    {
                
                      for(let y = 0; y<this.objectoguardar.fechas[j].horario.length;y++)
                      {
                        for(let z=0; z<e[i].fechas[k].horario.length;z++)
                        {
                          if(this.objectoguardar.fechas[j].horario[y].hora == e[i].fechas[k].horario[z].hora && this.objectoguardar.fechas[j].horario[y].minutos == e[i].fechas[k].horario[z].minutos)
                          {   
                              this.objectoguardar.fechas[j].horario[y].estado = e[i].fechas[k].horario[z].estado;
                            
                          }
                        }
                      }
                      // alert("es igual");
                      // this.desub.unsubscribe();
                    }
                  }
                  
                }
              }
            }
            
           })
        }
        
      })
    })
  }

  calculartiempo(data:any,arradia:any,minimo:number,maximo:number)
  {
    return new Promise((resolve,reject)=>{

      for(let i = 0; i< 14 ;i++)
      {
        
        let ti = new Fecha();
        this.ahora.setHours(minimo)
        this.ahora.setMinutes(0);
        this.ahora.setSeconds(0);
        this.arrayHorarios = new Array();
        if(this.ahora.getDay() == arradia[0] || this.ahora.getDay() == arradia[1] ||this.ahora.getDay() == arradia[2]||this.ahora.getDay() == arradia[3]||this.ahora.getDay() == arradia[4]||this.ahora.getDay() == arradia[5]||this.ahora.getDay() == arradia[6])
        {
          while(data.getHours() < maximo)
         {
           this.hs = new Horario();
  
           this.dat = new Nuevo();  
           this.dat.hora = data.getHours();
           this.dat.minutos = data.getMinutes();
           this.dat.estado = 'habilitado';
          
           if(this.dat.minutos == 0)
           {
            this.dat.minutos = "00";
  
           }
    
           this.hs = this.dat;
           
           
           this.arrayHorarios.push(this.hs)
    
          this.ahora.setMinutes(this.ahora.getMinutes()+30);
        }
        ti.dia = data.toLocaleDateString('en-GB')
        ti.horario = this.arrayHorarios;
        this.arraytercero.push(ti);
        }
        data.setDate(data.getDate()+1);
      }
      resolve(this.arraytercero);

    })
  

}
quehago(dia:any,hora:any,minutos:any)
{
  for(let i = 0; i<this.arraytercero.length;i++)
  {
    if(this.arraytercero[i].dia == dia)
    {
      for(let j = 0; j<this.arraytercero[i].horario.length;j++)
      {  
        if(this.arraytercero[i].horario[j].hora == hora && this.arraytercero[i].horario[j].minutos == minutos)
        {
          this.arraytercero[i].horario[j].estado = 'deshabilitado';
          let data = {'dia':dia,'hora':this.arraytercero[i].horario[j].hora,'minutos':this.arraytercero[i].horario[j].minutos}
          this.datin = data;
        }
      }
    }
  }
  this.objectoguardar = new ObjectoCompleto(this.objectoActual.email,this.objectoActual.especialidad,this.arraytercero);
  this.buscar(this.objectoActual.email,this.objectoActual.especialidad).then((e:any)=>{
    
    
    if(e == null)
    {
      this.hsturnos.create(this.objectoguardar);
      this.buscar(this.objectoActual.email,this.objectoActual.especialidad).then((e:any)=>{
        this.hsturnos.getAll().update(e,this.objectoguardar).then(e=>{
          this.unobj.correoEspecialista = this.objectoguardar.email;
          this.unobj.correoPaciente = this.auth.correologeado;
          this.unobj.estado = "pendiente";
          this.unobj.especialidad = this.objectoActual.especialidad;
          this.unobj.dia = this.datin.dia;
          this.unobj.hora = this.datin.hora;
          this.unobj.minutos = this.datin.minutos;
         this.mixto.create(this.unobj);
        })
      })
    }
    else
    {
       this.hsturnos.getAll().update(e,this.objectoguardar).then(e=>{
         this.unobj.correoEspecialista = this.objectoguardar.email;
         this.unobj.correoPaciente = this.auth.correologeado;
         this.unobj.estado = "pendiente";
         this.unobj.especialidad = this.objectoActual.especialidad;
         this.unobj.dia = this.datin.dia;
         this.unobj.hora = this.datin.hora;
         this.unobj.minutos = this.datin.minutos;
        this.mixto.create(this.unobj);
       })
    }
    
  })
}
buscar(email:any,especialidad:any)
{
  return new Promise((resolve,reject)=>{
    this.hsturnos.getAll().query.get().then(e=>{
     e.forEach(e=>{
      console.log(e.val().email);
      
        if(email == e.val().email && especialidad == e.val().especialidad)
        {
          return resolve(e.key);
        }
      }
      )
      return resolve(null);
    }
    )
})
}
}
