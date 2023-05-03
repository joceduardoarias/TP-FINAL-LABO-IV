import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { log } from 'console';

@Component({
  selector: 'app-switchlang',
  templateUrl: './switchlang.component.html',
  styleUrls: ['./switchlang.component.css'],
})
export class SwitchlangComponent implements OnInit {
  
  language = {es:"Español",pt:"Português",en:"English"};
  selectedLanguage: string = 'Español';
  flag: string = 'https://flagcdn.com/w320/mx.png';
  
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}  

  selectLanguage(language: string, flag: string) {        
      if (this.language[language] != undefined) {
        this.translate.use(language);         
        this.flag = flag;    
        this.selectedLanguage = this.language[language] ;
      }                
  }
}
