import { Component, OnInit } from '@angular/core';
import { LogIngresosService } from 'src/app/services/log-ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent implements OnInit {
  list: any = [];
  paginaActual = 1;
  registrosOrdenados: any = [];
  constructor(private logs: LogIngresosService) {
    logs
      .getAll()
      .valueChanges()
      .subscribe((e) => {
        this.list = e;
        this.ordenar(e);
      });
  }

  ngOnInit(): void {}

  ordenar(registros) {
    this.registrosOrdenados = registros.sort((a, b) => {
      const fechaA = new Date(a.dia);
      const fechaB = new Date(b.dia);
      return fechaB.getTime() - fechaA.getTime();
    });
  }
}
