import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appSoloNumeros]'
})
export class SoloNumerosDirective {

  constructor(private el: ElementRef) { }
  @HostListener('window:keydown', ['$event']) handleKeyDown(event: KeyboardEvent) {
    let tecla = event.key;
    if(tecla == '1' || tecla == '2' || tecla == '3' ||tecla == '4' ||tecla == '5' ||tecla == '6' ||tecla == '7' ||tecla == '8' ||tecla == '9' ||tecla == '0' ||tecla == 'End' ||tecla == 'ArrowDown' || tecla == 'PageDown' ||tecla == 'ArrowLeft' || tecla == 'Clear' || tecla == 'ArrowRight' || tecla == 'Home' || tecla == 'ArrowUp' || tecla == 'PageUp')
    {

    }
    else
    {
      setTimeout(()=>{
        this.el.nativeElement.value = this.el.nativeElement.value.slice(0, -1);
      }, 5);

    }
  }
}
