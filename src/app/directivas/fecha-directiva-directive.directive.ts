import { Directive , ElementRef,  HostListener } from '@angular/core';

@Directive({
  selector: '[appFechaDirectivaDirective]'
})
export class FechaDirectivaDirectiveDirective {
  constructor(private el: ElementRef) { }
  @HostListener('window:keydown', ['$event']) handleKeyDown(event: KeyboardEvent) {
    if(this.el.nativeElement.value.length == 2)
    {
      this.el.nativeElement.value = this.el.nativeElement.value+'/';
    }
    if(this.el.nativeElement.value.length == 5)
    {
      this.el.nativeElement.value = this.el.nativeElement.value+'/';
    }
  }
}
