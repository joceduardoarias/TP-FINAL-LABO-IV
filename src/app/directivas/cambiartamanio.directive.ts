import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCambiartamanio]'
})
export class CambiartamanioDirective {

  constructor(private el: ElementRef) 
  {
    this.el.nativeElement.style.fontSize = '30px';
  }

}
