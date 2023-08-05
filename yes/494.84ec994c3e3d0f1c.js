"use strict";(self.webpackChunktpfinal=self.webpackChunktpfinal||[]).push([[494],{4968:(H,V,s)=>{s.d(V,{R:()=>y});var z=s(8421),d=s(8306),R=s(5577),E=s(1144),u=s(576),O=s(3268);const x=["addListener","removeListener"],F=["addEventListener","removeEventListener"],I=["on","off"];function y(a,g,p,_){if((0,u.m)(p)&&(_=p,p=void 0),_)return y(a,g,p).pipe((0,O.Z)(_));const[m,T]=function k(a){return(0,u.m)(a.addEventListener)&&(0,u.m)(a.removeEventListener)}(a)?F.map(v=>w=>a[v](g,w,p)):function C(a){return(0,u.m)(a.addListener)&&(0,u.m)(a.removeListener)}(a)?x.map(b(a,g)):function S(a){return(0,u.m)(a.on)&&(0,u.m)(a.off)}(a)?I.map(b(a,g)):[];if(!m&&(0,E.z)(a))return(0,R.z)(v=>y(v,g,p))((0,z.Xf)(a));if(!m)throw new TypeError("Invalid event target");return new d.y(v=>{const w=(...D)=>v.next(1<D.length?D:D[0]);return m(w),()=>T(w)})}function b(a,g){return p=>_=>a[p](g,_)}},5494:(H,V,s)=>{s.d(V,{ZD:()=>L,mF:()=>te,Cl:()=>re,rL:()=>ne});var z=s(3191),d=s(5e3),R=s(4408),E=s(727);const u={schedule(n){let t=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:i}=u;i&&(t=i.requestAnimationFrame,e=i.cancelAnimationFrame);const r=t(o=>{e=void 0,n(o)});return new E.w0(()=>null==e?void 0:e(r))},requestAnimationFrame(...n){const{delegate:t}=u;return((null==t?void 0:t.requestAnimationFrame)||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:t}=u;return((null==t?void 0:t.cancelAnimationFrame)||cancelAnimationFrame)(...n)},delegate:void 0};var x=s(7565);new class F extends x.v{flush(t){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let r;t=t||i.shift();do{if(r=t.execute(t.state,t.delay))break}while((t=i[0])&&t.id===e&&i.shift());if(this._active=!1,r){for(;(t=i[0])&&t.id===e&&i.shift();)t.unsubscribe();throw r}}}(class O extends R.o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t._scheduled||(t._scheduled=u.requestAnimationFrame(()=>t.flush(void 0))))}recycleAsyncId(t,e,i=0){if(null!=i&&i>0||null==i&&this.delay>0)return super.recycleAsyncId(t,e,i);t.actions.some(r=>r.id===e)||(u.cancelAnimationFrame(e),t._scheduled=void 0)}});let C,b=1;const S={};function k(n){return n in S&&(delete S[n],!0)}const a={setImmediate(n){const t=b++;return S[t]=!0,C||(C=Promise.resolve()),C.then(()=>k(t)&&n()),t},clearImmediate(n){k(n)}},{setImmediate:p,clearImmediate:_}=a,m={setImmediate(...n){const{delegate:t}=m;return((null==t?void 0:t.setImmediate)||p)(...n)},clearImmediate(n){const{delegate:t}=m;return((null==t?void 0:t.clearImmediate)||_)(n)},delegate:void 0};new class v extends x.v{flush(t){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let r;t=t||i.shift();do{if(r=t.execute(t.state,t.delay))break}while((t=i[0])&&t.id===e&&i.shift());if(this._active=!1,r){for(;(t=i[0])&&t.id===e&&i.shift();)t.unsubscribe();throw r}}}(class T extends R.o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t._scheduled||(t._scheduled=m.setImmediate(t.flush.bind(t,void 0))))}recycleAsyncId(t,e,i=0){if(null!=i&&i>0||null==i&&this.delay>0)return super.recycleAsyncId(t,e,i);t.actions.some(r=>r.id===e)||(m.clearImmediate(e),t._scheduled=void 0)}});var A=s(7579),Z=s(9646),P=s(8306),G=s(4968),M=s(4986),Y=s(4482),K=s(8421),B=s(5403),Q=s(3532);function j(n,t=M.z){return function $(n){return(0,Y.e)((t,e)=>{let i=!1,r=null,o=null,l=!1;const f=()=>{if(null==o||o.unsubscribe(),o=null,i){i=!1;const h=r;r=null,e.next(h)}l&&e.complete()},c=()=>{o=null,l&&e.complete()};t.subscribe((0,B.x)(e,h=>{i=!0,r=h,o||(0,K.Xf)(n(h)).subscribe(o=(0,B.x)(e,f,c))},()=>{l=!0,(!i||!o||o.closed)&&e.complete()}))})}(()=>function J(n=0,t,e=M.P){let i=-1;return null!=t&&((0,Q.K)(t)?e=t:i=t),new P.y(r=>{let o=function X(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;o<0&&(o=0);let l=0;return e.schedule(function(){r.closed||(r.next(l++),0<=i?this.schedule(void 0,i):r.complete())},o)})}(n,t))}var q=s(9300),W=s(9808),N=s(925),U=s(226);let te=(()=>{class n{constructor(e,i,r){this._ngZone=e,this._platform=i,this._scrolled=new A.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new P.y(i=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe(j(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,Z.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){const r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe((0,q.h)(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){const i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let r=(0,z.fI)(i),o=e.getElementRef().nativeElement;do{if(r==o)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,G.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return n.\u0275fac=function(e){return new(e||n)(d.LFG(d.R0b),d.LFG(N.t4),d.LFG(W.K0,8))},n.\u0275prov=d.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),ne=(()=>{class n{constructor(e,i,r){this._platform=e,this._change=new A.x,this._changeListener=o=>{this._change.next(o)},this._document=r,i.runOutsideAngular(()=>{if(e.isBrowser){const o=this._getWindow();o.addEventListener("resize",this._changeListener),o.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||i.scrollY||r.scrollTop||0,left:-o.left||e.body.scrollLeft||i.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(j(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return n.\u0275fac=function(e){return new(e||n)(d.LFG(N.t4),d.LFG(d.R0b),d.LFG(W.K0,8))},n.\u0275prov=d.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({}),n})(),re=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[[U.vT,L],U.vT,L]}),n})()}}]);