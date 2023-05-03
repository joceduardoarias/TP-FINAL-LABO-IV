import { Component } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { slideInAnimation } from '../assets/animation';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'; //para el idioma de la app
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  constructor(
    private ToastrSvc: ToastrService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) {
   this.translate.addLangs(['es', 'en', 'pt']);
    const lang = translate.getBrowserLang();
    if (lang.match(/es|en|pt/)) {
     this.translate.setDefaultLang('es');
    }
  }
  title = 'tpfinal';
  llego(boleano: boolean) {
    this.spinner.hide();
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
