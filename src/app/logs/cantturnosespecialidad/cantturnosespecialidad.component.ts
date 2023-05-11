import { Component, OnInit ,ViewChild,ElementRef,  } from '@angular/core';
import Chart from 'chart.js/auto';
import { arrayRemove } from 'firebase/firestore';
import jsPDF from 'jspdf';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-cantturnosespecialidad',
  templateUrl: './cantturnosespecialidad.component.html',
  styleUrls: ['./cantturnosespecialidad.component.css']
})
export class CantturnosespecialidadComponent implements OnInit {
  fecha:any;
  ctx:any;
  @ViewChild('content',{static:false}) el!:ElementRef;
  paginaActual = 1;
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
  
}
makePDF()
{
  const DATA = document.getElementById('myChart');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG',0.8);

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_turnosPorDía.pdf`);
    });
}

}
