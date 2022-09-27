import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-elegir-especialista',
  templateUrl: './elegir-especialista.component.html',
  styleUrls: ['./elegir-especialista.component.css']
})
export class ElegirEspecialistaComponent implements OnInit {
   @Input() usuarios:any;
   @Output() obj:  EventEmitter<any> = new EventEmitter<any>();
   
  constructor() 
  {
    
  }

  ngOnInit(): void {
  }

  accion(data:any)
  {
    this.obj.emit(data);
  }
}
