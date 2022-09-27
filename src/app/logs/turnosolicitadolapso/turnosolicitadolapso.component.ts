import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import jsPDF from 'jspdf';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-turnosolicitadolapso',
  templateUrl: './turnosolicitadolapso.component.html',
  styleUrls: ['./turnosolicitadolapso.component.css']
})
export class TurnosolicitadolapsoComponent implements OnInit {
  listafinal:any = [];
  myChart:any;
  fecha:any;
  correoscontador:any = [];
  correos:any = [];
  fechaDesde:any;
  fechaHasta:any;
  list:any = [];
  @ViewChild('content',{static:false}) el!:ElementRef;
  ctx:any;
  constructor(private agregarestadoturno:AgregarestadoturnoService) 
  {
    // agregarestadoturno.getAll().valueChanges().subscribe(e=>{
    //   for(let i = 0; i<e.length;i++)
    //   {
    //     if(e[i].dia >= this.fechaDesde && e[i].dia <=this.fechaHasta)
    //     {
    //       this.list.push(e[i]);
    //     }
    //   }
    //   console.log(e);
      
    // })
  }

  ngOnInit(): void {
  }
  filtrar()
  {

    this.listafinal = [];
    this.correos = [];
    this.correoscontador = [];
    this.list = [];
    let cambai1 = this.fechaDesde.split('/');
    let eche:any  = cambai1[1]+'/'+cambai1[0]+'/'+cambai1[2];
    let termineitor1 = new Date(eche);


    
    let cambai2 = this.fechaHasta.split('/');
    let eche2:any  = cambai2[1]+'/'+cambai2[0]+'/'+cambai2[2];
    let termineitor2 = new Date(eche2);
    
    
    // var det = new Date("09/05/2024").trans
    // console.log(det);
    
    // var det = new Date(this.fechaDesde)
    // console.log(det);
    
  //   var date3 = new Date("09/05/2024")
  //   var date4 = new Date("09/04/2024")
  //   // var date1 = new Date("2024/04/08")
  //   // var date2 = new Date("2024/04/08")
  //   var f1 =    new Date(2015,11, 31); //31 de diciembre de 2015
  //   var f2 =    new Date(2014, 10, 30); 

  
  // console.log(date3);

  
  
    
    // if(date3 > date4)
    // {
    //   alert("si");
    // }
    
    
    let hola = this.agregarestadoturno.getAll().valueChanges().subscribe(e=>{
       for(let i = 0; i<e.length;i++)
       {
        let data = e[i].dia;
       let di = data.split('/');
       let formateado:any  = di[1]+'/'+di[0]+'/'+di[2];
       let terminado = new Date(formateado);
  
    
    
       if(terminado > termineitor1 &&  terminado < termineitor2)
       {
        this.list.push(e[i]);
       }
       }    



       for(let i = 0; i<this.list.length;i++)
      {

        
       const elemento = this.list[i].correoEspecialista;
       if(!this.correos.includes(this.list[i].correoEspecialista))
       {
        this.correos.push(elemento);
       }
       
      }

      for(let i = 0; i <this.correos.length;i++)
      {
         let contador = 0;
         for(let j = 0; j<this.list.length;j++)
         {
           if(this.correos[i] == this.list[j].correoEspecialista)
           {

            
             contador ++;
           }
         }
         this.correoscontador.push(contador);
      }
      for(let i = 0; i<this.correos.length;i++)
      {
        let data = {'correo':this.correos[i],'cantidad':this.correoscontador[i]}
        this.listafinal.push(data);
      }

      this.det();
     hola.unsubscribe()
    }
    )
    // setTimeout(() => {
    //   console.log(this.list);
      
    // }, 500);

  }
  det()
{
  this.ctx = document.getElementById('myChart');
  
  this.ctx.width = "600"
  this.ctx.height = "300"
if(this.myChart)
{
  this.myChart.destroy();
}
 this.myChart = new Chart(this.ctx, {
 type: 'pie',
 data: {
  labels : this.correos,
  datasets: [{
    label: 'My First Dataset',
    data: this.correoscontador,
    
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
