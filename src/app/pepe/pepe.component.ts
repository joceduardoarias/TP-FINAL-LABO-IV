import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Paciente } from 'src/app/clases/paciente';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pepe',
  templateUrl: './pepe.component.html',
  styleUrls: ['./pepe.component.css']
})
export class PepeComponent implements OnInit {
  arre:string[] = [];

  ctx:any;
  constructor() { 
   
    this.arre.push("ROJO")
    this.arre.push("AZUL");
    this.arre.push("VIOLETA");
    this.arre.push("BORDO");
  }

  ngOnInit(): void {
  }

  
ngAfterViewInit()
{
  this.ctx = document.getElementById('myChart');
  this.ctx.width = "200"
  this.ctx.height = "200"
const myChart = new Chart(this.ctx, {
 type: 'pie',
 data: {
  labels : this.arre,
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100,400],
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
 options: {
     scales: {
         y: {
             beginAtZero: true
         }
     }
 }
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

}
