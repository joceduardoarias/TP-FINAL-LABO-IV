"use strict";(self.webpackChunktpfinal=self.webpackChunktpfinal||[]).push([[184],{9184:(M,Z,_)=>{_.r(Z),_.d(Z,{MisturnosModule:()=>ge});var T=_(9808),A=_(441),e=_(5e3),b=_(7556);class x{constructor(){this.especialista="",this.otros=[]}}var v=_(5226),c=_.n(v),q=_(6136),w=_(2613),P=_(6940),C=_(2382);function E(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.dia," ")}}function U(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.AsE("",t.hora,":",t.minutos," ")}}function N(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.especialidad," ")}}function O(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.correoEspecialista," ")}}function I(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.correoPaciente," ")}}function S(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit;return e.oxw().cancelarTurno("paciente",o)}),e._uU(1,"CANCELAR"),e.qZA()}}function J(a,l){1&a&&(e.TgZ(0,"button",17),e._uU(1,"COMPLETAR ENCUESTA"),e.qZA())}function k(a,l){1&a&&(e.TgZ(0,"button",17),e._uU(1,"CALIFICAR TURNO"),e.qZA())}function j(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit;return e.oxw().verresenia(o)}),e._uU(1,"Ver Rese\xf1a"),e.qZA()}}function Y(a,l){if(1&a&&(e.TgZ(0,"div"),e.YNc(1,S,2,0,"button",14),e.YNc(2,J,2,0,"button",15),e.YNc(3,k,2,0,"button",15),e.YNc(4,j,2,0,"button",14),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf","pendiente"==t.estado||"aceptado"==t.estado),e.xp6(1),e.Q6J("ngIf","realizado"==t.estado),e.xp6(1),e.Q6J("ngIf","realizado"==t.estado),e.xp6(1),e.Q6J("ngIf","No hay comentario"!=t.comentariopaciente||"No hay comentario"!=t.comentarioespecialista||"No hay comentario"!=t.comentarioadmin||"No hay comentario"!=t.diagnostico)}}function R(a,l){if(1&a&&(e.TgZ(0,"tr"),e.YNc(1,E,2,1,"td",13),e.YNc(2,U,2,2,"td",13),e.YNc(3,N,2,1,"td",13),e.YNc(4,O,2,1,"td",13),e.YNc(5,I,2,1,"td",13),e.YNc(6,Y,5,4,"div",13),e.qZA()),2&a){const t=l.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",t.correoPaciente==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoPaciente==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoPaciente==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoPaciente==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoPaciente==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoPaciente==i.auth.correologeado)}}function Q(a,l){if(1&a&&(e.TgZ(0,"div",0)(1,"table",18)(2,"thead")(3,"th",10),e._uU(4,"Comentario Paciente"),e.qZA(),e.TgZ(5,"th",10),e._uU(6,"Comentario Especialista"),e.qZA(),e.TgZ(7,"th",10),e._uU(8,"Comentario Administrador"),e.qZA(),e.TgZ(9,"th",10),e._uU(10,"Diagn\xf3stico"),e.qZA()(),e.TgZ(11,"tbody")(12,"tr")(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA()()()()()),2&a){const t=e.oxw();e.xp6(14),e.hij("",t.reseniaActual.comentariopaciente," "),e.xp6(2),e.Oqu(t.reseniaActual.comentarioespecialista),e.xp6(2),e.Oqu(t.reseniaActual.comentarioadmin),e.xp6(2),e.Oqu(t.reseniaActual.diagnostico)}}let F=(()=>{class a{constructor(t,i,o,n){this.auth=t,this.agregarestadoturno=i,this.hsturnos=o,this.historiaclinica=n,this.historiaclinicaa=[],this.eestimado="hola",this.resenia=!1,this.agregarestadoturno.getAll().valueChanges().subscribe(r=>{this.list=r}),this.historiaclinica.getAll().valueChanges().subscribe(r=>{this.historiaclinicaa=r})}ngOnInit(){}finalizado(t){console.log(t),c().fire({title:"Comentario Especialista",html:'<input type="text" id="comentario" class="swal2-input" placeholder="Comentario">\n      <input type="text" id="diagnostico" class="swal2-input" placeholder="Diagnostico">',confirmButtonText:"Enviar",focusConfirm:!1,preConfirm:()=>{let i,o;return i=c().getPopup().querySelector("#comentario").value,o=c().getPopup().querySelector("#diagnostico").value,(!i||!o)&&c().showValidationMessage("Cargue Comentario y diagnostico!"),{comentario:i,diagnostico:o}}}).then(i=>{i.isConfirmed&&(t.comentarioespecialista=i.value.comentario,t.diagnostico=i.value.diagnostico,t.estado="finalizado",this.buscar(t),c().fire({title:"Historia Clinica",html:'<input type="text" id="altura" class="swal2-input" placeholder="Altura (En metros)">\n          <input type="text" id="peso" class="swal2-input" placeholder="Peso (En kilos)">,\n          <input type="text" id="temperatura" class="swal2-input" placeholder="Temperatura (En ~Grado Celcius)">\n          <input type="text" id="presion" class="swal2-input" placeholder="Presi\xf3n"><br>\n          <span>Otros<span>\n          <div class="row">\n          <div class="col-6">\n          <input type="text" id="clave1" class="swal2-input col-6" placeholder="Clave (opcional)">\n          </div>\n          <div class="col-6">\n          <input type="text" id="valor1" class="swal2-input col-6" placeholder="Valor (opcional)">\n          </div>\n  \n          <div class="col-6">\n          <input type="text" id="clave2" class="swal2-input col-6" placeholder="Clave (opcional)">\n          </div>\n          <div class="col-6">\n          <input type="text" id="valor2" class="swal2-input col-6" placeholder="Valor (opcional)">\n          </div>\n  \n          <div class="col-6">\n          <input type="text" id="clave3" class="swal2-input col-6" placeholder="Clave (opcional)">\n          </div>\n          <div class="col-6">\n          <input type="text" id="valor3" class="swal2-input col-6" placeholder="Valor (opcional)">\n          </div>\n          </div>\n          ',confirmButtonText:"Enviar",focusConfirm:!1,preConfirm:()=>{let o,n,r,m,h,s,u,p,g,d,f=[];return o=c().getPopup().querySelector("#altura").value,n=c().getPopup().querySelector("#peso").value,r=c().getPopup().querySelector("#temperatura").value,m=c().getPopup().querySelector("#presion").value,h=c().getPopup().querySelector("#clave1").value,s=c().getPopup().querySelector("#valor1").value,u=c().getPopup().querySelector("#clave2").value,p=c().getPopup().querySelector("#valor2").value,g=c().getPopup().querySelector("#clave3").value,d=c().getPopup().querySelector("#valor3").value,(!o||!n||!r||!m)&&c().showValidationMessage("Cargue historia clinica! (Los parametros obligatorios)"),h&&s&&f.push({clave:h,valor:s}),u&&p&&f.push({clave:u,valor:p}),g&&d&&f.push({clave:g,valor:d}),{altura:o,peso:n,temperatura:r,presion:m,otros:f}}}).then(o=>{if(console.log(o),o.isConfirmed){let n=new x;n.altura=o.value.altura,n.peso=o.value.peso,n.temepratura=o.value.temperatura,n.presion=o.value.presion,n.dia=t.dia,n.hora=t.hora,n.minutos=t.minutos,n.correoespecialista=t.correoEspecialista,n.correopaciente=t.correoPaciente,n.especialidad=t.especialidad,this.historiaclinica.create(n).then(r=>{alert("HISTORIA CLINICA CARGADA")})}}))})}ejecutarAccion(t,i){"aceptar"==t&&(i.estado="aceptado",this.buscar(i))}cancelarTurno(t,i){c().fire({title:"\xbfEscribe el comentario?",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Enviar",showLoaderOnConfirm:!0,allowOutsideClick:()=>!c().isLoading()}).then(o=>{o.isConfirmed&&("especialista"==t?i.comentarioespecialista=o.value:"paciente"==t?i.comentariopaciente=o.value:i.comentarioadmin=o.value,i.estado="cancelado",this.buscar(i),this.quehago(i.dia,i.hora,i.minutos,i.correoEspecialista))})}buscar(t){this.agregarestadoturno.getAll().get().subscribe(i=>{i.forEach(o=>{o.data().especialidad==t.especialidad&&o.data().correoEspecialista==t.correoEspecialista&&o.data().dia==t.dia&&o.data().hora==t.hora&&o.data().minutos==t.minutos&&this.agregarestadoturno.update(o.id,t)})})}verresenia(t){this.reseniaActual=t,this.resenia=!this.resenia}quehago(t,i,o,n){let r=[],m=this.hsturnos.getAll().valueChanges().subscribe(h=>{m.unsubscribe();for(let s=0;s<h.length;s++)r.push(h[s]);for(let s=0;s<r.length;s++)if(r[s].email==n)for(let u=0;u<r[s].fechas.length;u++)if(r[s].fechas[u].dia==t)for(let p=0;p<r[s].fechas[u].horario.length;p++)if(r[s].fechas[u].horario[p].hora==i&&r[s].fechas[u].horario[p].minutos==o){r[s].fechas[u].horario[p].estado="habilitado",this.hsturnos.getAll().query.get().then(g=>{g.forEach(d=>{r[s].email==d.val().email&&r[s].especialidad==d.val().especialidad&&this.hsturnos.update(d.key,r[s])})});break}})}hacerBusqueda(){var o=this.list.filter(n=>n.especialidad==this.b||n.correoEspecialista==this.b);o.length>0&&(this.list=o)}limpiar(){this.list=[],this.agregarestadoturno.getAll().get().subscribe(t=>{t.forEach(i=>{this.list.push(i.data())})})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(b.e),e.Y36(q.n),e.Y36(w.l),e.Y36(P.x))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-turnopaciente"]],decls:32,vars:3,consts:[[1,"d-flex","justify-content-center","align-items-center"],[1,"general","d-flex","justify-content-center","align-items-center"],[1,"table-responsive"],[1,"table-responsive","segundogeneral"],[1,"container-fluid","d-flex","justify-content-center","align-items-center"],[1,"d-flex"],["type","search","placeholder","Search","value","dasd","aria-label","Search",1,"form-control","me-2",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-outline-success",3,"click"],["type","button",1,"btn","btn-outline-warning",3,"click"],[1,"table","text-center"],["scope","col"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center align-items-center",4,"ngIf"],[4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary",4,"ngIf"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-primary"],[1,"tam"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"h2"),e._uU(5,"MIS TURNOS"),e.qZA()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"input",6),e.NdJ("ngModelChange",function(n){return i.b=n}),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return i.hacerBusqueda()}),e._uU(11,"Search"),e.qZA(),e.TgZ(12,"button",8),e.NdJ("click",function(){return i.limpiar()}),e._uU(13,"Limpiar"),e.qZA()()(),e.TgZ(14,"table",9)(15,"thead")(16,"tr")(17,"th",10),e._uU(18,"Dia"),e.qZA(),e.TgZ(19,"th",10),e._uU(20,"Horario"),e.qZA(),e.TgZ(21,"th",10),e._uU(22,"Especialidad"),e.qZA(),e.TgZ(23,"th",10),e._uU(24,"Especialista"),e.qZA(),e.TgZ(25,"th",10),e._uU(26,"Paciente"),e.qZA(),e.TgZ(27,"th",10),e._uU(28,"Accion"),e.qZA()()(),e.TgZ(29,"tbody"),e.YNc(30,R,7,6,"tr",11),e.qZA()()()()(),e.YNc(31,Q,21,4,"div",12),e.qZA()),2&t&&(e.xp6(9),e.Q6J("ngModel",i.b),e.xp6(21),e.Q6J("ngForOf",i.list),e.xp6(1),e.Q6J("ngIf",i.resenia))},directives:[C.Fj,C.JJ,C.On,T.sg,T.O5],styles:[".general[_ngcontent-%COMP%]{min-height:70vh}.segundogeneral[_ngcontent-%COMP%]{min-width:50%;border-radius:10px;border:solid 2px red}td[_ngcontent-%COMP%]:hover{background-color:#7fffd4}.wii[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.tam[_ngcontent-%COMP%]{max-width:200px}.tt[_ngcontent-%COMP%]{width:600px}#cuadrado[_ngcontent-%COMP%]{display:inline-block;min-height:200px;animation-name:mianimacion;animation-duration:3s;position:relative;animation-direction:reverse;animation-timing-function:linear}@keyframes mianimacion{0%{left:0;top:-10vh}20%{left:0;top:-20vh}40%{left:0;top:-40vh}60%{left:0;top:-60vh}80%{left:0;top:-80vh}to{left:0;top:-100vh}}"]}),a})();function L(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.dia," ")}}function B(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.AsE("",t.hora,":",t.minutos," ")}}function H(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.especialidad," ")}}function $(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.correoEspecialista," ")}}function z(a,l){if(1&a&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.correoPaciente," ")}}function V(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit;return e.oxw().ejecutarAccion("aceptar",o)}),e._uU(1,"ACEPTAR"),e.qZA()}}function D(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit;return e.oxw().cancelarTurno("especialista",o)}),e._uU(1,"CANCELAR"),e.qZA()}}function G(a,l){1&a&&(e.TgZ(0,"button",16),e._uU(1,"RECHAZAR"),e.qZA())}function X(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit;return e.oxw().finalizado(o)}),e._uU(1,"FINALIZAR"),e.qZA()}}function K(a,l){1&a&&(e.TgZ(0,"button",16),e._uU(1,"COMPLETAR ENCUESTA"),e.qZA())}function W(a,l){1&a&&(e.TgZ(0,"button",16),e._uU(1,"CALIFICAR TURNO"),e.qZA())}function ee(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit;return e.oxw().verresenia(o)}),e._uU(1,"Ver Rese\xf1a"),e.qZA()}}function te(a,l){if(1&a&&(e.TgZ(0,"div"),e.YNc(1,V,2,0,"button",13),e.YNc(2,D,2,0,"button",13),e.YNc(3,G,2,0,"button",14),e.YNc(4,X,2,0,"button",13),e.YNc(5,K,2,0,"button",14),e.YNc(6,W,2,0,"button",14),e.YNc(7,ee,2,0,"button",13),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf","pendiente"==t.estado),e.xp6(1),e.Q6J("ngIf","pendiente"==t.estado),e.xp6(1),e.Q6J("ngIf","pendiente"==t.estado),e.xp6(1),e.Q6J("ngIf","aceptado"==t.estado),e.xp6(1),e.Q6J("ngIf","realizado"==t.estado),e.xp6(1),e.Q6J("ngIf","realizado"==t.estado),e.xp6(1),e.Q6J("ngIf","No hay comentario"!=t.comentariopaciente||"No hay comentario"!=t.comentarioespecialista||"No hay comentario"!=t.comentarioadmin||"No hay comentario"!=t.diagnostico)}}function ie(a,l){if(1&a&&(e.TgZ(0,"tr"),e.YNc(1,L,2,1,"td",12),e.YNc(2,B,2,2,"td",12),e.YNc(3,H,2,1,"td",12),e.YNc(4,$,2,1,"td",12),e.YNc(5,z,2,1,"td",12),e.YNc(6,te,8,7,"div",12),e.qZA()),2&a){const t=l.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",t.correoEspecialista==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoEspecialista==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoEspecialista==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoEspecialista==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoEspecialista==i.auth.correologeado),e.xp6(1),e.Q6J("ngIf",t.correoEspecialista==i.auth.correologeado)}}function oe(a,l){if(1&a&&(e.TgZ(0,"div",0)(1,"table",17)(2,"thead")(3,"th",9),e._uU(4,"Comentario Paciente"),e.qZA(),e.TgZ(5,"th",9),e._uU(6,"Comentario Especialista"),e.qZA(),e.TgZ(7,"th",9),e._uU(8,"Comentario Administrador"),e.qZA(),e.TgZ(9,"th",9),e._uU(10,"Diagn\xf3stico"),e.qZA()(),e.TgZ(11,"tbody")(12,"tr")(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA()()()()()),2&a){const t=e.oxw();e.xp6(14),e.hij("",t.reseniaActual.comentariopaciente," "),e.xp6(2),e.Oqu(t.reseniaActual.comentarioespecialista),e.xp6(2),e.Oqu(t.reseniaActual.comentarioadmin),e.xp6(2),e.Oqu(t.reseniaActual.diagnostico)}}let ae=(()=>{class a{constructor(t,i,o,n){this.auth=t,this.agregarestadoturno=i,this.hsturnos=o,this.historiaclinica=n,this.historiaclinicaa=[],this.resenia=!1,this.ditt="hola",this.agregarestadoturno.getAll().valueChanges().subscribe(r=>{this.list=r}),this.historiaclinica.getAll().valueChanges().subscribe(r=>{this.historiaclinicaa=r})}ngOnInit(){}finalizado(t){console.log(t),c().fire({title:"Comentario Especialista",html:'<input type="text" id="comentario" class="swal2-input" placeholder="Comentario">\n      <input type="text" id="diagnostico" class="swal2-input" placeholder="Diagnostico">',confirmButtonText:"Enviar",focusConfirm:!1,preConfirm:()=>{let i,o;return i=c().getPopup().querySelector("#comentario").value,o=c().getPopup().querySelector("#diagnostico").value,(!i||!o)&&c().showValidationMessage("Cargue Comentario y diagnostico!"),{comentario:i,diagnostico:o}}}).then(i=>{i.isConfirmed&&(t.comentarioespecialista=i.value.comentario,t.diagnostico=i.value.diagnostico,t.estado="finalizado",this.buscar(t),c().fire({title:"Historia Clinica",html:'<input type="text" id="altura" class="swal2-input" placeholder="Altura (En metros)">\n          <input type="text" id="peso" class="swal2-input" placeholder="Peso (En kilos)">,\n          <input type="text" id="temperatura" class="swal2-input" placeholder="Temperatura (En ~Grado Celcius)">\n          <input type="text" id="presion" class="swal2-input" placeholder="Presi\xf3n">\n          <input type="number" id="numero" class="swal2-input" placeholder="Tato tipo Number"><br>\n          <span>Otros<span>\n          <div class="row">\n          <div class="col-6">\n          <input type="text" id="clave1" class="swal2-input col-6" placeholder="Clave (opcional)">\n          </div>\n          <div class="col-6">\n          <input type="text" id="valor1" class="swal2-input col-6" placeholder="Valor (opcional)">\n          </div>\n  \n          <div class="col-6">\n          <input type="text" id="clave2" class="swal2-input col-6" placeholder="Clave (opcional)">\n          </div>\n          <div class="col-6">\n          <input type="text" id="valor2" class="swal2-input col-6" placeholder="Valor (opcional)">\n          </div>\n  \n          <div class="col-6">\n          <input type="text" id="clave3" class="swal2-input col-6" placeholder="Clave (opcional)">\n          </div>\n          <div class="col-6">\n          <input type="text" id="valor3" class="swal2-input col-6" placeholder="Valor (opcional)">\n          </div>\n          </div>\n          ',confirmButtonText:"Enviar",focusConfirm:!1,preConfirm:()=>{let o,n,r,m,h,s,u,p,g,d,f,y=[];return o=c().getPopup().querySelector("#altura").value,n=c().getPopup().querySelector("#peso").value,r=c().getPopup().querySelector("#temperatura").value,m=c().getPopup().querySelector("#presion").value,h=c().getPopup().querySelector("#clave1").value,s=c().getPopup().querySelector("#valor1").value,u=c().getPopup().querySelector("#clave2").value,p=c().getPopup().querySelector("#valor2").value,g=c().getPopup().querySelector("#clave3").value,d=c().getPopup().querySelector("#valor3").value,f=c().getPopup().querySelector("#numero").value,(!o||!n||!r||!m)&&c().showValidationMessage("Cargue historia clinica! (Los parametros obligatorios)"),console.log(f),(f<0||f>100)&&c().showValidationMessage("Datos incorrectos! (El parametro numerico es de 0-100)"),h&&s&&y.push({clave:h,valor:s}),u&&p&&y.push({clave:u,valor:p}),g&&d&&y.push({clave:g,valor:d}),{altura:o,peso:n,temperatura:r,presion:m,otros:y}}}).then(o=>{if(console.log(o),o.isConfirmed){console.log(o.value.valor1),null==o.value.clave1&&(o.value.clave1=""),null==o.value.clave2&&(o.value.clave2=""),null==o.value.clave3&&(o.value.clave3="");let n=new x;n.altura=o.value.altura,n.peso=o.value.peso,n.temepratura=o.value.temperatura,n.presion=o.value.presion,n.dia=t.dia,n.hora=t.hora,n.minutos=t.minutos,n.correoespecialista=t.correoEspecialista,n.correopaciente=t.correoPaciente,n.especialidad=t.especialidad,n.otros=o.value.otros,console.log(n.otros),this.historiaclinica.create(n).then(r=>{alert("HISTORIA CLINICA CARGADA")})}}))})}ejecutarAccion(t,i){"aceptar"==t&&(i.estado="aceptado",this.buscar(i))}cancelarTurno(t,i){c().fire({title:"\xbfEscribe el comentario?",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Enviar",showLoaderOnConfirm:!0,allowOutsideClick:()=>!c().isLoading()}).then(o=>{o.isConfirmed&&("especialista"==t?i.comentarioespecialista=o.value:"paciente"==t?i.comentariopaciente=o.value:i.comentarioadmin=o.value,i.estado="cancelado",this.buscar(i),this.quehago(i.dia,i.hora,i.minutos,i.correoEspecialista))})}buscar(t){this.agregarestadoturno.getAll().get().subscribe(i=>{i.forEach(o=>{o.data().especialidad==t.especialidad&&o.data().correoEspecialista==t.correoEspecialista&&o.data().dia==t.dia&&o.data().hora==t.hora&&o.data().minutos==t.minutos&&this.agregarestadoturno.update(o.id,t)})})}verresenia(t){this.reseniaActual=t,this.resenia=!this.resenia}quehago(t,i,o,n){let r=[],m=this.hsturnos.getAll().valueChanges().subscribe(h=>{m.unsubscribe();for(let s=0;s<h.length;s++)r.push(h[s]);for(let s=0;s<r.length;s++)if(r[s].email==n)for(let u=0;u<r[s].fechas.length;u++)if(r[s].fechas[u].dia==t)for(let p=0;p<r[s].fechas[u].horario.length;p++)if(r[s].fechas[u].horario[p].hora==i&&r[s].fechas[u].horario[p].minutos==o){r[s].fechas[u].horario[p].estado="habilitado",this.hsturnos.getAll().query.get().then(g=>{g.forEach(d=>{r[s].email==d.val().email&&r[s].especialidad==d.val().especialidad&&this.hsturnos.update(d.key,r[s])})});break}})}hacerBusqueda(){var o=this.list.filter(n=>n.especialidad==this.b||n.correoEspecialista==this.b);o.length>0&&(this.list=o)}limpiar(){this.list=[],this.agregarestadoturno.getAll().get().subscribe(t=>{t.forEach(i=>{this.list.push(i.data())})})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(b.e),e.Y36(q.n),e.Y36(w.l),e.Y36(P.x))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-turnoespecialista"]],decls:32,vars:3,consts:[[1,"d-flex","justify-content-center","align-items-center"],[1,"general","d-flex","justify-content-center","align-items-center"],[1,"table-responsive"],[1,"table-responsive","segundogeneral"],[1,"d-flex","tt"],["type","search","placeholder","Search","value","dasd","aria-label","Search",1,"form-control","me-2",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-outline-success",3,"click"],["type","button",1,"btn","btn-outline-warning",3,"click"],[1,"table","text-center"],["scope","col"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center align-items-center",4,"ngIf"],[4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-primary",4,"ngIf"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-primary"],[1,"tam"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"h2"),e._uU(5,"MIS TURNOS"),e.qZA()(),e.TgZ(6,"div",3)(7,"div",0)(8,"div",4)(9,"input",5),e.NdJ("ngModelChange",function(n){return i.b=n}),e.qZA(),e.TgZ(10,"button",6),e.NdJ("click",function(){return i.hacerBusqueda()}),e._uU(11,"Search"),e.qZA(),e.TgZ(12,"button",7),e.NdJ("click",function(){return i.limpiar()}),e._uU(13,"Limpiar"),e.qZA()()(),e.TgZ(14,"table",8)(15,"thead")(16,"tr")(17,"th",9),e._uU(18,"Dia"),e.qZA(),e.TgZ(19,"th",9),e._uU(20,"Horario"),e.qZA(),e.TgZ(21,"th",9),e._uU(22,"Especialidad"),e.qZA(),e.TgZ(23,"th",9),e._uU(24,"Especialista"),e.qZA(),e.TgZ(25,"th",9),e._uU(26,"Paciente"),e.qZA(),e.TgZ(27,"th",9),e._uU(28,"Accion"),e.qZA()()(),e.TgZ(29,"tbody"),e.YNc(30,ie,7,6,"tr",10),e.qZA()()()()(),e.YNc(31,oe,21,4,"div",11),e.qZA()),2&t&&(e.xp6(9),e.Q6J("ngModel",i.b),e.xp6(21),e.Q6J("ngForOf",i.list),e.xp6(1),e.Q6J("ngIf",i.resenia))},directives:[C.Fj,C.JJ,C.On,T.sg,T.O5],styles:[".general[_ngcontent-%COMP%]{min-height:70vh}.segundogeneral[_ngcontent-%COMP%]{min-width:50%;border-radius:10px;border:solid 2px red}td[_ngcontent-%COMP%]:hover{background-color:#7fffd4}.wii[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.tam[_ngcontent-%COMP%]{max-width:200px}.tt[_ngcontent-%COMP%]{width:600px}#cuadrado[_ngcontent-%COMP%]{display:inline-block;min-height:200px;animation-name:mianimacion;animation-duration:3s;position:relative;animation-direction:reverse;animation-timing-function:linear}@keyframes mianimacion{0%{right:-10vh;top:0}20%{right:-20vh;top:0}40%{right:-40vh;top:0}60%{right:-60vh;top:0}80%{right:-80vh;top:0}to{right:-100vh;top:0}}"]}),a})();function ne(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().cancelarTurno("especialista",o)}),e._uU(1,"CANCELAR"),e.qZA()}}function re(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().verresenia(o)}),e._uU(1,"Ver Rese\xf1a"),e.qZA()}}function ce(a,l){if(1&a&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"div"),e.YNc(12,ne,2,0,"button",12),e.YNc(13,re,2,0,"button",12),e.qZA()()),2&a){const t=l.$implicit;e.xp6(2),e.hij("",t.dia," "),e.xp6(2),e.AsE("",t.hora,":",t.minutos," "),e.xp6(2),e.hij("",t.especialidad," "),e.xp6(2),e.hij("",t.correoEspecialista," "),e.xp6(2),e.hij("",t.correoPaciente," "),e.xp6(2),e.Q6J("ngIf","pendiente"==t.estado),e.xp6(1),e.Q6J("ngIf","No hay comentario"!=t.comentariopaciente||"No hay comentario"!=t.comentarioespecialista||"No hay comentario"!=t.comentarioadmin)}}function se(a,l){if(1&a&&(e.TgZ(0,"div",0)(1,"table",14)(2,"thead")(3,"th",9),e._uU(4,"Comentario Paciente"),e.qZA(),e.TgZ(5,"th",9),e._uU(6,"Comentario Especialista"),e.qZA(),e.TgZ(7,"th",9),e._uU(8,"Comentario Administrador"),e.qZA(),e.TgZ(9,"th",9),e._uU(10,"Historia Cl\xednica"),e.qZA()(),e.TgZ(11,"tbody")(12,"tr")(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA()()()()()),2&a){const t=e.oxw();e.xp6(14),e.hij("",t.reseniaActual.comentariopaciente," "),e.xp6(2),e.Oqu(t.reseniaActual.comentarioespecialista),e.xp6(2),e.Oqu(t.reseniaActual.comentarioadmin)}}let le=(()=>{class a{constructor(t,i,o,n){this.auth=t,this.agregarestadoturno=i,this.hsturnos=o,this.historiaclinica=n,this.historiaclinicaa=[],this.resenia=!1,this.agregarestadoturno.getAll().valueChanges().subscribe(r=>{this.list=r}),this.historiaclinica.getAll().valueChanges().subscribe(r=>{this.historiaclinicaa=r})}ngOnInit(){}finalizado(t){console.log(t),c().fire({title:"Comentario Especialista",html:'<input type="text" id="comentario" class="swal2-input" placeholder="Comentario">\n      <input type="text" id="diagnostico" class="swal2-input" placeholder="Diagnostico">',confirmButtonText:"Enviar",focusConfirm:!1,preConfirm:()=>{let i,o;return i=c().getPopup().querySelector("#comentario").value,o=c().getPopup().querySelector("#diagnostico").value,(!i||!o)&&c().showValidationMessage("Cargue Comentario y diagnostico!"),{comentario:i,diagnostico:o}}}).then(i=>{i.isConfirmed&&(t.comentarioespecialista=i.value.comentario,t.diagnostico=i.value.diagnostico,t.estado="finalizado",this.buscar(t),c().fire({title:"Historia Clinica",html:'<input type="text" id="altura" class="swal2-input" placeholder="Altura (En metros)">\n          <input type="text" id="peso" class="swal2-input" placeholder="Peso (En kilos)">,\n          <input type="text" id="temperatura" class="swal2-input" placeholder="Temperatura (En ~Grado Celcius)">\n          <input type="text" id="presion" class="swal2-input" placeholder="Presi\xf3n"><br>\n          <span>Otros<span>\n          <div class="row">\n          <div class="col-6">\n          <input type="text" id="clave1" class="swal2-input col-6" placeholder="Clave (opcional)">\n          </div>\n          <div class="col-6">\n          <input type="text" id="valor1" class="swal2-input col-6" placeholder="Valor (opcional)">\n          </div>\n  \n          <div class="col-6">\n          <input type="text" id="clave2" class="swal2-input col-6" placeholder="Clave (opcional)">\n          </div>\n          <div class="col-6">\n          <input type="text" id="valor2" class="swal2-input col-6" placeholder="Valor (opcional)">\n          </div>\n  \n          <div class="col-6">\n          <input type="text" id="clave3" class="swal2-input col-6" placeholder="Clave (opcional)">\n          </div>\n          <div class="col-6">\n          <input type="text" id="valor3" class="swal2-input col-6" placeholder="Valor (opcional)">\n          </div>\n          </div>\n          ',confirmButtonText:"Enviar",focusConfirm:!1,preConfirm:()=>{let o,n,r,m,h,s,u,p,g,d,f=[];return o=c().getPopup().querySelector("#altura").value,n=c().getPopup().querySelector("#peso").value,r=c().getPopup().querySelector("#temperatura").value,m=c().getPopup().querySelector("#presion").value,h=c().getPopup().querySelector("#clave1").value,s=c().getPopup().querySelector("#valor1").value,u=c().getPopup().querySelector("#clave2").value,p=c().getPopup().querySelector("#valor2").value,g=c().getPopup().querySelector("#clave3").value,d=c().getPopup().querySelector("#valor3").value,(!o||!n||!r||!m)&&c().showValidationMessage("Cargue historia clinica! (Los parametros obligatorios)"),h&&s&&f.push({clave:h,valor:s}),u&&p&&f.push({clave:u,valor:p}),g&&d&&f.push({clave:g,valor:d}),{altura:o,peso:n,temperatura:r,presion:m,otros:f}}}).then(o=>{if(console.log(o),o.isConfirmed){let n=new x;n.altura=o.value.altura,n.peso=o.value.peso,n.temepratura=o.value.temperatura,n.presion=o.value.presion,n.dia=t.dia,n.hora=t.hora,n.minutos=t.minutos,n.correoespecialista=t.correoEspecialista,n.correopaciente=t.correoPaciente,n.especialidad=t.especialidad,this.historiaclinica.create(n).then(r=>{alert("HISTORIA CLINICA CARGADA")})}}))})}ejecutarAccion(t,i){"aceptar"==t&&(i.estado="aceptado",this.buscar(i))}cancelarTurno(t,i){c().fire({title:"\xbfEscribe el comentario?",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Enviar",showLoaderOnConfirm:!0,allowOutsideClick:()=>!c().isLoading()}).then(o=>{o.isConfirmed&&("especialista"==t?i.comentarioespecialista=o.value:"paciente"==t?i.comentariopaciente=o.value:i.comentarioadmin=o.value,i.estado="cancelado",this.buscar(i),this.quehago(i.dia,i.hora,i.minutos,i.correoEspecialista))})}buscar(t){this.agregarestadoturno.getAll().get().subscribe(i=>{i.forEach(o=>{o.data().especialidad==t.especialidad&&o.data().correoEspecialista==t.correoEspecialista&&o.data().dia==t.dia&&o.data().hora==t.hora&&o.data().minutos==t.minutos&&this.agregarestadoturno.update(o.id,t)})})}verresenia(t){this.reseniaActual=t,this.resenia=!this.resenia}quehago(t,i,o,n){let r=[],m=this.hsturnos.getAll().valueChanges().subscribe(h=>{m.unsubscribe();for(let s=0;s<h.length;s++)r.push(h[s]);for(let s=0;s<r.length;s++)if(r[s].email==n)for(let u=0;u<r[s].fechas.length;u++)if(r[s].fechas[u].dia==t)for(let p=0;p<r[s].fechas[u].horario.length;p++)if(r[s].fechas[u].horario[p].hora==i&&r[s].fechas[u].horario[p].minutos==o){r[s].fechas[u].horario[p].estado="habilitado",this.hsturnos.getAll().query.get().then(g=>{g.forEach(d=>{r[s].email==d.val().email&&r[s].especialidad==d.val().especialidad&&this.hsturnos.update(d.key,r[s])})});break}})}hacerBusqueda(){var o=this.list.filter(n=>n.especialidad==this.b||n.correoEspecialista==this.b);o.length>0&&(this.list=o)}limpiar(){this.list=[],this.agregarestadoturno.getAll().get().subscribe(t=>{t.forEach(i=>{this.list.push(i.data())})})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(b.e),e.Y36(q.n),e.Y36(w.l),e.Y36(P.x))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-turnoadministrador"]],decls:32,vars:3,consts:[[1,"d-flex","justify-content-center","align-items-center"],[1,"general","d-flex","justify-content-center","align-items-center"],[1,"table-responsive"],[1,"table-responsive","segundogeneral"],[1,"d-flex","tt"],["type","search","placeholder","Search","value","dasd","aria-label","Search",1,"form-control","me-2",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-outline-success",3,"click"],["type","button",1,"btn","btn-outline-warning",3,"click"],[1,"table","text-center"],["scope","col"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center align-items-center",4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"btn","btn-primary",3,"click"],[1,"tam"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"h2"),e._uU(5,"MIS TURNOS"),e.qZA()(),e.TgZ(6,"div",3)(7,"div",0)(8,"div",4)(9,"input",5),e.NdJ("ngModelChange",function(n){return i.b=n}),e.qZA(),e.TgZ(10,"button",6),e.NdJ("click",function(){return i.hacerBusqueda()}),e._uU(11,"Search"),e.qZA(),e.TgZ(12,"button",7),e.NdJ("click",function(){return i.limpiar()}),e._uU(13,"Limpiar"),e.qZA()()(),e.TgZ(14,"table",8)(15,"thead")(16,"tr")(17,"th",9),e._uU(18,"Dia"),e.qZA(),e.TgZ(19,"th",9),e._uU(20,"Horario"),e.qZA(),e.TgZ(21,"th",9),e._uU(22,"Especialidad"),e.qZA(),e.TgZ(23,"th",9),e._uU(24,"Especialista"),e.qZA(),e.TgZ(25,"th",9),e._uU(26,"Paciente"),e.qZA(),e.TgZ(27,"th",9),e._uU(28,"Accion"),e.qZA()()(),e.TgZ(29,"tbody"),e.YNc(30,ce,14,8,"tr",10),e.qZA()()()()(),e.YNc(31,se,19,3,"div",11),e.qZA()),2&t&&(e.xp6(9),e.Q6J("ngModel",i.b),e.xp6(21),e.Q6J("ngForOf",i.list),e.xp6(1),e.Q6J("ngIf",i.resenia))},directives:[C.Fj,C.JJ,C.On,T.sg,T.O5],styles:[".general[_ngcontent-%COMP%]{min-height:70vh}.segundogeneral[_ngcontent-%COMP%]{min-width:50%;border-radius:10px;border:solid 2px red}td[_ngcontent-%COMP%]:hover{background-color:#7fffd4}.wii[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.tam[_ngcontent-%COMP%]{max-width:200px}.tt[_ngcontent-%COMP%]{width:600px}#cuadrado[_ngcontent-%COMP%]{display:inline-block;min-height:200px;animation-name:mianimacion;animation-duration:3s;position:relative;animation-direction:reverse;animation-timing-function:linear}@keyframes mianimacion{0%{left:-10vh;top:0}20%{left:-20vh;top:0}40%{left:-40vh;top:0}60%{left:-60vh;top:0}80%{left:-80vh;top:0}to{left:-100vh;top:0}}"]}),a})();function ue(a,l){1&a&&(e.TgZ(0,"div"),e._UZ(1,"app-turnopaciente"),e.qZA())}function pe(a,l){1&a&&(e.TgZ(0,"div",2),e._UZ(1,"app-turnoespecialista"),e.qZA())}function de(a,l){1&a&&(e.TgZ(0,"div",2),e._UZ(1,"app-turnoadministrador"),e.qZA())}const he=[{path:"",component:(()=>{class a{constructor(t){this.auth=t}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(b.e))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-misturnos"]],decls:4,vars:3,consts:[[4,"ngIf"],["class","row  py-4",4,"ngIf"],[1,"row","py-4"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e.YNc(1,ue,2,0,"div",0),e.YNc(2,pe,2,0,"div",1),e.YNc(3,de,2,0,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",1==i.auth.paciente),e.xp6(1),e.Q6J("ngIf",1==i.auth.especialista),e.xp6(1),e.Q6J("ngIf",1==i.auth.administrador))},directives:[T.O5,F,ae,le],styles:[".general[_ngcontent-%COMP%]{min-height:70vh}.segundogeneral[_ngcontent-%COMP%]{min-width:50%;border-radius:10px;border:solid 2px red}td[_ngcontent-%COMP%]:hover{background-color:#7fffd4}.wii[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.tam[_ngcontent-%COMP%]{max-width:200px}.tt[_ngcontent-%COMP%]{width:600px}"]}),a})()}];let me=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[A.Bz.forChild(he)],A.Bz]}),a})(),ge=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[T.ez,me,C.UX,C.u5]]}),a})()},6940:(M,Z,_)=>{_.d(Z,{x:()=>e});var T=_(5e3),A=_(7407);let e=(()=>{class b{constructor(v){this.db=v,this.dbPath="/historiaClinica",this.MensajesRef=v.collection(this.dbPath)}getAll(){return this.MensajesRef=this.db.collection(this.dbPath),this.MensajesRef}create(v){return this.MensajesRef=this.db.collection(this.dbPath),this.MensajesRef.add(Object.assign({},v))}update(v,c){return this.MensajesRef=this.db.collection(this.dbPath),this.MensajesRef.doc(v).update({comentarioadmin:c.comentarioadmin,comentarioespecialista:c.comentarioespecialista,comentariopaciente:c.comentariopaciente,diagnostico:c.diagnostico,estado:c.estado})}delete(v){return this.MensajesRef=this.db.collection(this.dbPath),this.MensajesRef.doc(v).delete()}}return b.\u0275fac=function(v){return new(v||b)(T.LFG(A.ST))},b.\u0275prov=T.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()}}]);