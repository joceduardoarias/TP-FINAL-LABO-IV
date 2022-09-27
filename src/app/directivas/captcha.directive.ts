import { Directive, Input ,Output,EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCaptcha]'
})
export class CaptchaDirective {
  //@Input() appCaptcha:any;
  @Output() appCaptcha: EventEmitter<any> = new EventEmitter<any>();
  constructor(private el: ElementRef) 
  {
    setTimeout(() => {
     this.accion();
    }, 500);
  }
   accion()
   {
    debugger
    let random1 = Math.floor((Math.random()* (500-100+1))+100);
    this.appCaptcha.emit(random1);
   }

}
