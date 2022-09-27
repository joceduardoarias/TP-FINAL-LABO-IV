import { Directive, ElementRef, Input, Output,EventEmitter } from '@angular/core';


@Directive({
  selector: '[appCambiarColor]'
})
export class CambiarColorDirective {

  constructor(private el: ElementRef) 
  {
        this.el.nativeElement.style.color = 'orange';
  }
  // @Output() cambiado: EventEmitter<any> = new EventEmitter<any>();
}
