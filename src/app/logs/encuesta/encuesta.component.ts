import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EncuestaService } from "src/app/services/encuesta.service";
import { Chart } from 'chart.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  @ViewChild('chartCanvas') chartCanvas: ElementRef;
  @ViewChild('pieChart1') pieChart: ElementRef;
  @ViewChild('pieChart2') pieChart2: ElementRef;
  @ViewChild('pieChart3') pieChart3: ElementRef;
  @ViewChild('pieChart4') pieChart4: ElementRef;
  @ViewChild('pdfContent', { static: false }) pdfContent: ElementRef;

  chart: Chart;
  data: any;
  pregunstas: any;
  dataPregunta1: { opcion: string, cantidad: number }[] = [];
  dataPregunsta2: { opcion: string, cantidad: number }[] = [];;
  dataPregunta3: { opcion: string, cantidad: number }[] = [];;
  dataPregunta4: { opcion: string, cantidad: number }[] = [];;
  dataPregunta5: { opcion: string, cantidad: number }[] = [];;

  resultadosEncuesta: any[] = [
    {
      pregunta: 'Pregunta 1', opciones: [
        { opcion: 'Opción 1', cantidad: 10 },
        { opcion: 'Opción 2', cantidad: 15 },
        { opcion: 'Opción 3', cantidad: 5 }
      ]
    },
    {
      pregunta: 'Pregunta 3', opciones: [
        { opcion: 'Opción 1', cantidad: 8 },
        { opcion: 'Opción 2', cantidad: 12 },
        { opcion: 'Opción 3', cantidad: 6 }
      ]
    },
    {
      pregunta: 'Pregunta 4', opciones: [
        { opcion: 'Opción 1', cantidad: 8 },
        { opcion: 'Opción 2', cantidad: 12 },
        { opcion: 'Opción 3', cantidad: 6 }
      ]
    },
    {
      pregunta: 'Pregunta 5', opciones: [
        { opcion: 'Opción 1', cantidad: 8 },
        { opcion: 'Opción 2', cantidad: 12 },
        { opcion: 'Opción 3', cantidad: 6 }
      ]
    }
  ];

  constructor(private encuesta: EncuestaService) {
    this.obtenerEncuestas();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.generateChart();    
  }
  obtenerEncuestas() {

    this.encuesta.obtenerEncuestas().subscribe(encuestas => {
      this.data = encuestas;
      this.datsoGraficos();
      this.generatePieChart(this.dataPregunta1, this.pieChart, "¿Tuviste algún problema para reservar un turno?");
      this.generatePieChart(this.dataPregunta3, this.pieChart2, "En una escala del 1 al 10, ¿qué tan probable es que recomiendes nuestro centro médico a tus amigos y familiares? ");
      this.generatePieChart(this.dataPregunta4, this.pieChart3, "¿Cómo calificarías a tu proveedor de atención médica cuando se trata de recetar medicamentos?");
      this.generatePieChart(this.dataPregunta5, this.pieChart4, "Valora tu experiencia");
    })
  }
  generateChart() {
    const canvas = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    const labels = this.resultadosEncuesta[0].opciones.map(opcion => opcion.opcion);
    const datasets = [];

    this.resultadosEncuesta.forEach(pregunta => {
      const cantidades = pregunta.opciones.map(opcion => opcion.cantidad);
      datasets.push({
        label: pregunta.pregunta,
        data: cantidades,
        backgroundColor: 'rgba(0, 123, 255, 0.5)'
      });
    });

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets
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
  generatePieChart(data:any,pieChart:any,tittle:any) {
    console.log(data,"Grfico torta");
    
    const ctx = pieChart.nativeElement.getContext('2d');
    const labels = data.map(item => item.opcion);
    const values = data.map(item => item.cantidad);

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
        }]
      },
      options: {
        responsive: true,
        plugins:{
          title:{
            display: true,
            text: tittle
          }
        }
                
      }
    });
  }
  datsoGraficos() {
    var preguntaUnoSi = 0;
    var preguntaUnoNo = 0;

    var preguntaTresCero = 0;
    var preguntaTresUno = 0;
    var preguntaTresDos = 0;
    var preguntaTresTres = 0;
    var preguntaTresCuatro = 0;
    var preguntaTresCinco = 0;

    var preguntaCuatroUno = 0; 
    var preguntaCuatroDos = 0;
    var preguntaCuatroTres = 0;
    
    var preguntaCincoUno = 0;
    var preguntaCincoDos = 0;
    var preguntaCincoTres = 0;
    var preguntaCincoCuatro = 0;
    var preguntaCincoCinco = 0;


    for (let objeto of this.data) {
      for (let key in objeto) {
        if (objeto.hasOwnProperty(key)) {
          const value = objeto[key];
          console.log(`Clave: ${key}, Valor: ${value}`);
          // Pregunta 1
          if (key == '1' && value == '1') {
            preguntaUnoSi++
          } else if (key == '1' && value == '2') {
            preguntaUnoNo++
          }
          // Pregunta 3
          if (key == '3' && value == '0') {
            preguntaTresCero++
          }
          if (key == '3' && value == '1') {
            preguntaTresUno++
          }
          if (key == '3' && value == '2') {
            preguntaTresDos++
          }
          if (key == '3' && value == '3') {
            preguntaTresTres++
          }
          if (key == '3' && value == '4') {
            preguntaTresCuatro++;
          }
          if (key == '3' && value == '5') {
            preguntaTresCinco++;
          }
          // Pregunta 4
          if (key == '4' && value == '1') {
            preguntaCuatroUno++
          }
          if (key == '4' && value == '2') {
            preguntaCuatroDos++
          }
          if (key == '4' && value == '3') {
            preguntaCuatroTres++
          }
          // Pregunta 5
          if (key == '1' && value == '1') {
            preguntaCincoUno++
          }
          if (key == '2' && value == '2') {
            preguntaCincoDos++
          }
          if (key == '3' && value == '3') {
            preguntaCincoTres++
          }
          if (key == '4' && value == '4') {
            preguntaCincoCuatro++
          }
          if (key == '5' && value == '5') {
            preguntaCincoCinco++
          }          
        }
      }
    }
    //Pregunta uno
    this.dataPregunta1.push({ opcion: 'Si', cantidad: preguntaUnoSi++ });
    this.dataPregunta1.push({ opcion: 'No', cantidad: preguntaUnoNo++ });
    //Pregunta tres
    this.dataPregunta3.push({ opcion: 'Cero', cantidad: preguntaTresCero++ });
    this.dataPregunta3.push({ opcion: 'Uno', cantidad: preguntaTresUno++ });
    this.dataPregunta3.push({ opcion: 'Dos', cantidad: preguntaTresDos++ });
    this.dataPregunta3.push({ opcion: 'Tres', cantidad: preguntaTresTres++ });
    this.dataPregunta3.push({ opcion: 'Cuatro', cantidad: preguntaTresCuatro++ });
    this.dataPregunta3.push({ opcion: 'Cinco', cantidad: preguntaTresCinco++ });
    // Pregunta cuatro
    this.dataPregunta4.push({ opcion: 'Buena', cantidad: preguntaCuatroUno++ });
    this.dataPregunta4.push({ opcion: 'Mala', cantidad: preguntaCuatroDos++ });
    this.dataPregunta4.push({ opcion: 'Regular', cantidad: preguntaCuatroTres++ });
    // Pregunta cinco
    this.dataPregunta5.push({ opcion: 'Uno', cantidad: preguntaCincoUno++ });
    this.dataPregunta5.push({ opcion: 'Dos', cantidad: preguntaCincoDos++ });
    this.dataPregunta5.push({ opcion: 'Tres', cantidad: preguntaCincoTres++ });
    this.dataPregunta5.push({ opcion: 'Cuatro', cantidad: preguntaCincoCuatro++ });
    this.dataPregunta5.push({ opcion: 'Cinco', cantidad: preguntaCincoCinco++ });
    
    console.log(this.dataPregunta1, "PreguntaUno");
    console.log(this.dataPregunta3, "PreguntaTres");
  }
  generatePDF() {
    const pdf = new jsPDF();
    const content: HTMLElement = this.pdfContent.nativeElement;
  
    html2canvas(content).then(canvas => {
      const imageData = canvas.toDataURL('image/png');
  
      const imageProps = pdf.getImageProperties(imageData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imageProps.height * pdfWidth) / imageProps.width;
  
      pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('graficos.pdf');
    });
  }
}
