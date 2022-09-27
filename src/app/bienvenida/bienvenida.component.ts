import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {


  constructor(private ToastrSvc:ToastrService,private spinner: NgxSpinnerService) {
    this.spinner.show();
   }

  ngOnInit(): void {
   
  }

}
