import { Component, OnInit,ViewChild,ElementRef,  } from '@angular/core';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import jsPDF from 'jspdf';
import Chart from 'chart.js/auto';
// import toDataURL from 'canvas-background';
import html2canvas from 'html2canvas';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-cantturnosdia',
  templateUrl: './cantturnosdia.component.html',
  styleUrls: ['./cantturnosdia.component.css']
})
export class CantturnosdiaComponent implements OnInit {
  list:any = [];
  fecha:any;
  ctx:any;
  turnospordiacontador:any = [];
  filtrado:any = [];
  paginaActual = 1;
  @ViewChild('content',{static:false}) el!:ElementRef;
  constructor(private agregarestadoturno:AgregarestadoturnoService, private translateService : TranslateService) 
  {
    this.agregarestadoturno.getAll().valueChanges().subscribe(e=>{
        let ordenado = e.sort(this.comparar);
        for(let i = 0; i<ordenado.length;i++)
        {
         const elemento = e[i].dia;
         if(!this.filtrado.includes(e[i].dia))
         {
          this.filtrado.push(elemento);
         }
        }
        
        for(let i = 0; i <this.filtrado.length;i++)
       {
          let contador = 0;
          for(let j = 0; j<ordenado.length;j++)
          {
            if(this.filtrado[i] == e[j].dia)
            {
              contador ++;
            }
          }
          this.turnospordiacontador.push(contador);
       }

       for(let i = 0; i<this.filtrado.length;i++)
       {
         let data = {'dia':this.filtrado[i],'cantidad':this.turnospordiacontador[i]}
         this.list.push(data);
       }       
       this.det();                                     
     });
  }

  ngOnInit(): void {
  }
  det()
  {
    this.ctx = document.getElementById('m');
  this.ctx.width = "600"
  this.ctx.height = "300"
const myChart = new Chart(this.ctx, {
 type: 'bar',
 data: {
  labels : this.filtrado,
  datasets: [{
    label: this.translateService.instant('log.menu.QuantityPerDay'),
    data: this.turnospordiacontador,
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
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ],
  borderWidth: 1
  }]
 },
 options: {
     scales: {
         y: {
             beginAtZero: true
         }
     }
 }
});
  }
  comparar(data1:any,data2:any)
  {
 
    if(data1.dia > data2.dia )
    {

      return 1;
    }
    else if(data1.dia <data2.dia) 
    {
      return -1;
    }
    else
    {
      return 0;
    }
  }
  makePDF()
{
  this.fecha = new Date().toLocaleDateString()
  const DATA = document.getElementById('m');
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
