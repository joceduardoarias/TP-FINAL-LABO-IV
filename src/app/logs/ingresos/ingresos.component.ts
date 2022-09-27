import { Component, OnInit } from '@angular/core';
import { LogIngresosService } from 'src/app/services/log-ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  list:any = [];
  constructor(private logs:LogIngresosService) 
  {
       logs.getAll().valueChanges().subscribe(e=>{
        console.log(e);
        
        this.list = e;
       })
  }

  ngOnInit(): void {
  }

}
