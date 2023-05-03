import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-switchlang',
  templateUrl: './switchlang.component.html',
  styleUrls: ['./switchlang.component.css'],
})
export class SwitchlangComponent implements OnInit {
  @ViewChild('dropdownContent') dropdownContent: any;
  language = {Es:"Españo",Pt:"Português",En:"English"};
  selectedLanguage: string = 'Español';
  flag: string = 'https://flagcdn.com/w320/mx.png';
  constructor() {}

  ngOnInit(): void {}  

  selectLanguage(language: string, flag: string) {        
      if (this.language[language] != undefined) {
        this.flag = flag;    
        this.selectedLanguage = this.language[language] ;
      }                
  }
}
