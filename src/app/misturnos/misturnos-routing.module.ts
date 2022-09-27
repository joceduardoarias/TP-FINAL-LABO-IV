import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisturnosComponent } from './misturnos/misturnos.component';

const routes: Routes = [
  {path:'',component:MisturnosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisturnosRoutingModule { }
