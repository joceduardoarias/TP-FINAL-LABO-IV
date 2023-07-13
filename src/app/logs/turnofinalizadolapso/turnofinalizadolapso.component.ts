import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import Chart from 'chart.js/auto';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-turnofinalizadolapso',
  templateUrl: './turnofinalizadolapso.component.html',
  styleUrls: ['./turnofinalizadolapso.component.css'],
})
export class TurnofinalizadolapsoComponent implements OnInit {
  listafinal: any = [];
  myChart: any;
  fecha: any;
  correoscontador: any = [];
  correos: any = [];
  fechaDesde: any;
  fechaHasta: any;
  list: any = [];
  startDate: Date;
  endDate: Date;
  @ViewChild('content', { static: false }) el!: ElementRef;
  ctx: any;
  constructor(private agregarestadoturno: AgregarestadoturnoService) {
    
  }

  ngOnInit(): void {}
  filtrar() {
    this.listafinal = [];
    this.correos = [];
    this.correoscontador = [];
    this.list = [];

    let termineitor1 = this.startDate;
    let termineitor2 = this.endDate;
    

    let hola = this.agregarestadoturno
      .getAll()
      .valueChanges()
      .subscribe((e) => {
        for (let i = 0; i < e.length; i++) {
          let data = e[i].dia;
          let di = data.split('/');
          let formateado: any = di[1] + '/' + di[0] + '/' + di[2];
          let terminado = new Date(formateado);

          if (
            terminado > termineitor1 &&
            terminado < termineitor2 &&
            e[i].estado == 'finalizado'
          ) {
            this.list.push(e[i]);
          }
        }

        for (let i = 0; i < this.list.length; i++) {
          const elemento = this.list[i].correoEspecialista;
          if (!this.correos.includes(this.list[i].correoEspecialista)) {
            this.correos.push(elemento);
          }
        }

        for (let i = 0; i < this.correos.length; i++) {
          let contador = 0;
          for (let j = 0; j < this.list.length; j++) {
            if (this.correos[i] == this.list[j].correoEspecialista) {
              contador++;
            }
          }
          this.correoscontador.push(contador);
        }
        for (let i = 0; i < this.correos.length; i++) {
          let data = {
            correo: this.correos[i],
            cantidad: this.correoscontador[i],
          };
          this.listafinal.push(data);
        }

        this.det();
        hola.unsubscribe();
      });
    // setTimeout(() => {
    //   console.log(this.list);

    // }, 500);
  }
  det() {
    this.ctx = document.getElementById('myChart');

    this.ctx.width = '600';
    this.ctx.height = '300';
    if (this.myChart) {
      this.myChart.destroy();
    }
    this.myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: this.correos,
        datasets: [
          {
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
            hoverOffset: 4,
          },
        ],
      },
    });    
  }
  makePDF() {
    const DATA = document.getElementById('myChart');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
    };
    html2canvas(DATA, options)
      .then((canvas) => {
        const img = canvas.toDataURL('image/PNG', 0.8);

        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) => {
        docResult.save(`${new Date().toISOString()}_turnosSolicitados.pdf`);
      });
  }
}
