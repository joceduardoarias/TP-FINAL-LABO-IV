import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLargoMaximo]'
})
export class LargoMaximoDirective {

  constructor(private el: ElementRef) { }
  @HostListener('window:keydown', ['$event']) handleKeyDown(event: KeyboardEvent) {
    if(this.el.nativeElement.value.length >= 10)
    {
      setTimeout(()=>{
        this.el.nativeElement.value = this.el.nativeElement.value.slice(0, 10);
      }, 5);
    }
  }
}
