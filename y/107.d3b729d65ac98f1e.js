"use strict";(self.webpackChunktpfinal=self.webpackChunktpfinal||[]).push([[107],{9107:(C,l,i)=>{i.r(l),i.d(l,{AprobarCuentasModule:()=>h});var c=i(9808),p=i(441),t=i(5e3),u=i(5486);function d(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",7),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw().aceptar(s)}),t._UZ(6,"i",8),t.qZA(),t.TgZ(7,"td",7),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw().rechazar(s)}),t._UZ(8,"i",9),t.qZA()()}if(2&e){const n=a.$implicit,r=a.index;t.xp6(2),t.Oqu(r),t.xp6(2),t.hij("",n.email," ")}}function m(e,a){1&e&&(t.TgZ(0,"div",10)(1,"td"),t._uU(2,"No hay ningun especialista para aprobar/rechazar."),t.qZA()())}const f=[{path:"",component:(()=>{class e{constructor(n){this.ap=n,this.list=[],this.ap.getAll().valueChanges().subscribe(r=>{this.list=[];for(let o=0;o<r.length;o++)"pendiente"==r[o].confirmar&&this.list.push(r[o])})}ngOnInit(){}aceptar(n){this.ap.getAll().get().subscribe(r=>{r.forEach(o=>{o.data().email==n.email&&(n.confirmar="confirmado",this.ap.update(o.id,n))})})}rechazar(n){this.ap.getAll().get().subscribe(r=>{r.forEach(o=>{o.data().email==n.email&&(n.confirmar="rechazado",this.ap.update(o.id,n))})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-aprobarcuenta"]],decls:17,vars:2,consts:[[1,"general","d-flex","justify-content-center","align-items-center"],[1,"segundogeneral"],[1,"table-responsive"],[1,"table","text-center"],["scope","col"],[4,"ngFor","ngForOf"],["class","wii",4,"ngIf"],[3,"click"],[1,"fa-solid","fa-check"],[1,"fa-solid","fa-xmark"],[1,"wii"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"table",3)(4,"thead")(5,"tr")(6,"th",4),t._uU(7,"#"),t.qZA(),t.TgZ(8,"th",4),t._uU(9,"Correo"),t.qZA(),t.TgZ(10,"th",4),t._uU(11,"Aceptar"),t.qZA(),t.TgZ(12,"th",4),t._uU(13,"Rechazar"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,d,9,2,"tr",5),t.qZA()(),t.YNc(16,m,3,0,"div",6),t.qZA()()()),2&n&&(t.xp6(15),t.Q6J("ngForOf",r.list),t.xp6(1),t.Q6J("ngIf",0==r.list.length))},directives:[c.sg,c.O5],styles:[".general[_ngcontent-%COMP%]{min-height:100vh}.segundogeneral[_ngcontent-%COMP%]{min-height:300px;min-width:50%;border-radius:10px;border:solid 2px red}td[_ngcontent-%COMP%]:hover{background-color:#7fffd4}.wii[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(f)],p.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,g]]}),e})()}}]);