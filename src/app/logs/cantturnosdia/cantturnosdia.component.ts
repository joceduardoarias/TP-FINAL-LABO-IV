import { Component, OnInit,ViewChild,ElementRef,  } from '@angular/core';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import jsPDF from 'jspdf';
import Chart from 'chart.js/auto';
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
  @ViewChild('content',{static:false}) el!:ElementRef;
  constructor(private agregarestadoturno:AgregarestadoturnoService) 
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
        console.log(ordenado);
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
       console.log(this.list);
       
       console.log(this.filtrado);
       console.log(this.turnospordiacontador);
       this.det();
       
        
        
        
        
     })
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
    label: 'Gráfico de barras por dia',
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
