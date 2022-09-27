import { Component, OnInit } from '@angular/core';
import { iif } from 'rxjs';
import { Historiaclinica } from 'src/app/clases/historiaclinica';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import { AuthService } from 'src/app/services/auth.service';
import { HorariosturnosService } from 'src/app/services/horariosturnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-misturnos',
  templateUrl: './misturnos.component.html',
  styleUrls: ['./misturnos.component.css']
})
export class MisturnosComponent implements OnInit {



  constructor(public auth:AuthService) 
  {
    
  }

  ngOnInit(): void {
  }
  
     // setTimeout(() => {    
  

        
    //     Object.keys(data[0]).forEach((entry,index)=>{
    //       if(entry != "hora" && entry != "comentarioadmin" && entry != "correoEspecialista" && entry != "comentarioespecialista" && entry != "correoPaciente" && entry != "diagnostico" && entry != "dia" && entry != "comentariopaciente" && entry != "especialidad")
    //         console.log(data[0][entry]);
          
    //     })
      
    // }, 2000);
}
