import { Component, OnInit ,ViewChild,ElementRef,  } from '@angular/core';
import Chart from 'chart.js/auto';
import { arrayRemove } from 'firebase/firestore';
import jsPDF from 'jspdf';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';

@Component({
  selector: 'app-cantturnosespecialidad',
  templateUrl: './cantturnosespecialidad.component.html',
  styleUrls: ['./cantturnosespecialidad.component.css']
})
export class CantturnosespecialidadComponent implements OnInit {
  fecha:any;
  ctx:any;
  @ViewChild('content',{static:false}) el!:ElementRef;
  
  list:any = [];
  especialistas:any = [];
  especialistacontador:any = [];
  listageneral:any = [];
  constructor(private cargarhora:CargarhoraespecialistaService,private agregarestadoturno:AgregarestadoturnoService) 
  {
    cargarhora.getAll().valueChanges().subscribe((e:any)=>{
      for(let i = 0; i<e.length;i++)
      {
       const elemento = e[i].especialidad;
       if(!this.especialistas.includes(e[i].especialidad))
       {
        this.especialistas.push(elemento);
       }
      }
      this.agregarestadoturno.getAll().valueChanges().subscribe(e=>{
       for(let i = 0; i <this.especialistas.length;i++)
       {
          let contador = 0;
          for(let j = 0; j<e.length;j++)
          {
            if(this.especialistas[i] == e[j].especialidad)
            {
              contador ++;
            }
          }
          this.especialistacontador.push(contador);
       }
       for(let i = 0; i<this.especialistas.length;i++)
       {
         let data = {'especialidad':this.especialistas[i],'cantidad':this.especialistacontador[i]}
         this.list.push(data);
       }
       console.log(this.especialistas);
       
       console.log(this.especialistacontador);

       this.det();     
      })
      
     })
  }
  ngOnInit(): void {
  }
  det()
{
  this.ctx = document.getElementById('myChart');
  this.ctx.width = "600"
  this.ctx.height = "300"

const myChart = new Chart(this.ctx, {
 type: 'pie',
 data: {
  labels : this.especialistas,
  datasets: [{
    label: 'My First Dataset',
    data: this.especialistacontador,
    
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(100, 203, 86)',
      'rgb(255, 203, 86)',
      'rgb(255, 100, 35)',
      'rgb(0, 0, 35)',
      'rgb(100, 100, 100,100)',
      'rgb(200, 200, 200)',
    ],
    hoverOffset: 4
  }]
 },
});
 // let ctx: any = document.getElementById("myChart") as HTMLElement;
 // var data = {
 //   labels: ["match1", "match2", "match3", "match4", "match5"],
 //   datasets: [
 //     {
 //       label: "TeamA Score",
 //       data: [10, 50, 25, 70, 40],
 //       backgroundColor: "blue",
 //       borderColor: "lightblue",
 //       fill: false,
 //       lineTension: 0,
 //       radius: 5
 //     },
 //     {
 //       label: "TeamB Score",
 //       data: [20, 35, 40, 60, 50],
 //       backgroundColor: "green",
 //       borderColor: "lightgreen",
 //       fill: false,
 //       lineTension: 0,
 //       radius: 5
 //     }
 //   ]
 // };

 // //options
 // var options = {
 //   responsive: true,
 //   title: {
 //     display: true,
 //     position: "top",
 //     text: "Line Graph",
 //     fontSize: 18,
 //     fontColor: "#111"
 //   },
 //   legend: {
 //     display: true,
 //     position: "bottom",
 //     labels: {
 //       fontColor: "#333",
 //       fontSize: 16
 //     }
 //   }
 // };

 // //create Chart class object
 // var chart = new Chart(ctx, {
 //   type: "line",
 //   data: data,
 //   options: options
 // });
}
makePDF()
{
  this.fecha = new Date().toLocaleDateString()
  let pdf = new jsPDF('p','pt','a4');
  const option = {
    background: 'white',
    scale: 3,
  }
  pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
       pdf.save("Grafico de barras por especialista.pdf")
    }
  });
}

}
