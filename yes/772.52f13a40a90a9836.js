"use strict";(self.webpackChunktpfinal=self.webpackChunktpfinal||[]).push([[772],{9772:(lt,B,l)=>{l.d(B,{gM:()=>ot,AV:()=>rt});var g=l(9776),b=l(5664),v=l(9808),o=l(5e3),D=l(508),C=l(5494),f=l(3191),L=l(1159),T=l(7579),F=l(9841),N=l(7272),G=l(8306),R=l(5698),H=l(5684),V=l(8372),O=l(4004),k=l(8675),c=l(2722),w=l(925);const E=new Set;let m,z=(()=>{class s{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):j}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&function X(s){if(!E.has(s))try{m||(m=document.createElement("style"),m.setAttribute("type","text/css"),document.head.appendChild(m)),m.sheet&&(m.sheet.insertRule(`@media ${s} {body{ }}`,0),E.add(s))}catch(a){console.error(a)}}(t),this._matchMedia(t)}}return s.\u0275fac=function(t){return new(t||s)(o.LFG(w.t4))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function j(s){return{matches:"all"===s||""===s,media:s,addListener:()=>{},removeListener:()=>{}}}let U=(()=>{class s{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new T.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return x((0,f.Eq)(t)).some(i=>this._registerQuery(i).mql.matches)}observe(t){const i=x((0,f.Eq)(t)).map(r=>this._registerQuery(r).observable);let n=(0,F.a)(i);return n=(0,N.z)(n.pipe((0,R.q)(1)),n.pipe((0,H.T)(1),(0,V.b)(0))),n.pipe((0,O.U)(r=>{const h={matches:!1,breakpoints:{}};return r.forEach(({matches:p,query:_})=>{h.matches=h.matches||p,h.breakpoints[_]=p}),h}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const e=this._mediaMatcher.matchMedia(t),n={observable:new G.y(r=>{const h=p=>this._zone.run(()=>r.next(p));return e.addListener(h),()=>{e.removeListener(h)}}).pipe((0,k.O)(e),(0,O.U)(({matches:r})=>({query:t,matches:r})),(0,c.R)(this._destroySubject)),mql:e};return this._queries.set(t,n),n}}return s.\u0275fac=function(t){return new(t||s)(o.LFG(z),o.LFG(o.R0b))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function x(s){return s.map(a=>a.split(",")).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}var Z=l(7429),P=l(6360),$=l(226);l(1777);const W=["tooltip"],S="tooltip-panel",A=(0,w.i$)({passive:!0}),Y=new o.OlP("mat-tooltip-scroll-strategy"),tt={provide:Y,deps:[g.aV],useFactory:function q(s){return()=>s.scrollStrategies.reposition({scrollThrottle:20})}},et=new o.OlP("mat-tooltip-default-options",{providedIn:"root",factory:function it(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}});let st=(()=>{class s{constructor(t,e,i,n,r,h,p,_,M,y,u,I){this._overlay=t,this._elementRef=e,this._scrollDispatcher=i,this._viewContainerRef=n,this._ngZone=r,this._platform=h,this._ariaDescriber=p,this._focusMonitor=_,this._dir=y,this._defaultOptions=u,this._position="below",this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._viewportMargin=8,this._cssClassPrefix="mat",this._showDelay=this._defaultOptions.showDelay,this._hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new T.x,this._scrollStrategy=M,this._document=I,u&&(u.position&&(this.position=u.position),u.touchGestures&&(this.touchGestures=u.touchGestures)),y.change.pipe((0,c.R)(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})}get position(){return this._position}set position(t){var e;t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),null===(e=this._tooltipInstance)||void 0===e||e.show(0),this._overlayRef.updatePosition()))}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,f.Ig)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=(0,f.su)(t)}get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=(0,f.su)(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=null!=t?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe((0,c.R)(this._destroyed)).subscribe(t=>{t?"keyboard"===t&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([e,i])=>{t.removeEventListener(e,i,A)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay){if(this.disabled||!this.message||this._isTooltipVisible()&&!this._tooltipInstance._showTimeoutId&&!this._tooltipInstance._hideTimeoutId)return;const e=this._createOverlay();this._detach(),this._portal=this._portal||new Z.C5(this._tooltipComponent,this._viewContainerRef);const i=this._tooltipInstance=e.attach(this._portal).instance;i._triggerElement=this._elementRef.nativeElement,i._mouseLeaveHideDelay=this._hideDelay,i.afterHidden().pipe((0,c.R)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),i.show(t)}hide(t=this.hideDelay){this._tooltipInstance&&this._tooltipInstance.hide(t)}toggle(){this._isTooltipVisible()?this.hide():this.show()}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(){var t;if(this._overlayRef)return this._overlayRef;const e=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),i=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e);return i.positionChanges.pipe((0,c.R)(this._destroyed)).subscribe(n=>{this._updateCurrentPositionClass(n.connectionPair),this._tooltipInstance&&n.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:i,panelClass:`${this._cssClassPrefix}-${S}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe((0,c.R)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe((0,c.R)(this._destroyed)).subscribe(()=>{var n;return null===(n=this._tooltipInstance)||void 0===n?void 0:n._handleBodyInteraction()}),this._overlayRef.keydownEvents().pipe((0,c.R)(this._destroyed)).subscribe(n=>{this._isTooltipVisible()&&n.keyCode===L.hY&&!(0,L.Vb)(n)&&(n.preventDefault(),n.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),(null===(t=this._defaultOptions)||void 0===t?void 0:t.disableTooltipInteractivity)&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){const e=t.getConfig().positionStrategy,i=this._getOrigin(),n=this._getOverlayPosition();e.withPositions([this._addOffset(Object.assign(Object.assign({},i.main),n.main)),this._addOffset(Object.assign(Object.assign({},i.fallback),n.fallback))])}_addOffset(t){return t}_getOrigin(){const t=!this._dir||"ltr"==this._dir.value,e=this.position;let i;"above"==e||"below"==e?i={originX:"center",originY:"above"==e?"top":"bottom"}:"before"==e||"left"==e&&t||"right"==e&&!t?i={originX:"start",originY:"center"}:("after"==e||"right"==e&&t||"left"==e&&!t)&&(i={originX:"end",originY:"center"});const{x:n,y:r}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:n,originY:r}}}_getOverlayPosition(){const t=!this._dir||"ltr"==this._dir.value,e=this.position;let i;"above"==e?i={overlayX:"center",overlayY:"bottom"}:"below"==e?i={overlayX:"center",overlayY:"top"}:"before"==e||"left"==e&&t||"right"==e&&!t?i={overlayX:"end",overlayY:"center"}:("after"==e||"right"==e&&t||"left"==e&&!t)&&(i={overlayX:"start",overlayY:"center"});const{x:n,y:r}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:n,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe((0,R.q)(1),(0,c.R)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return"above"===this.position||"below"===this.position?"top"===e?e="bottom":"bottom"===e&&(e="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){const{overlayY:e,originX:i,originY:n}=t;let r;if(r="center"===e?this._dir&&"rtl"===this._dir.value?"end"===i?"left":"right":"start"===i?"left":"right":"bottom"===e&&"top"===n?"above":"below",r!==this._currentPosition){const h=this._overlayRef;if(h){const p=`${this._cssClassPrefix}-${S}-`;h.removePanelClass(p+this._currentPosition),h.addPanelClass(p+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",()=>{this._setupPointerExitEventsIfNeeded(),this.show()}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",()=>{this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(),500)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",e=>{var i;const n=e.relatedTarget;(!n||!(null===(i=this._overlayRef)||void 0===i?void 0:i.overlayElement.contains(n)))&&this.hide()}],["wheel",e=>this._wheelListener(e)]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const e=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",e],["touchcancel",e])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([e,i])=>{this._elementRef.nativeElement.addEventListener(e,i,A)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){const e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}}_disableNativeGesturesIfNecessary(){const t=this.touchGestures;if("off"!==t){const e=this._elementRef.nativeElement,i=e.style;("on"===t||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),("on"===t||!e.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}}return s.\u0275fac=function(t){o.$Z()},s.\u0275dir=o.lG2({type:s,inputs:{position:["matTooltipPosition","position"],disabled:["matTooltipDisabled","disabled"],showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]}}),s})(),ot=(()=>{class s extends st{constructor(t,e,i,n,r,h,p,_,M,y,u,I){super(t,e,i,n,r,h,p,_,M,y,u,I),this._tooltipComponent=at}}return s.\u0275fac=function(t){return new(t||s)(o.Y36(g.aV),o.Y36(o.SBq),o.Y36(C.mF),o.Y36(o.s_b),o.Y36(o.R0b),o.Y36(w.t4),o.Y36(b.$s),o.Y36(b.tE),o.Y36(Y),o.Y36($.Is,8),o.Y36(et,8),o.Y36(v.K0))},s.\u0275dir=o.lG2({type:s,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],exportAs:["matTooltip"],features:[o.qOj]}),s})(),nt=(()=>{class s{constructor(t,e){this._changeDetectorRef=t,this._visibility="initial",this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new T.x,this._animationsDisabled="NoopAnimations"===e}show(t){clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){clearTimeout(this._showTimeoutId),clearTimeout(this._hideTimeoutId),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&this.hide(this._mouseLeaveHideDelay)}_onShow(){}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){const e=this._tooltip.nativeElement,i=this._showAnimation,n=this._hideAnimation;if(e.classList.remove(t?n:i),e.classList.add(t?i:n),this._isVisible=t,t&&!this._animationsDisabled&&"function"==typeof getComputedStyle){const r=getComputedStyle(e);("0s"===r.getPropertyValue("animation-duration")||"none"===r.getPropertyValue("animation-name"))&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}}return s.\u0275fac=function(t){return new(t||s)(o.Y36(o.sBO),o.Y36(P.Qb,8))},s.\u0275dir=o.lG2({type:s}),s})(),at=(()=>{class s extends nt{constructor(t,e,i){super(t,i),this._breakpointObserver=e,this._isHandset=this._breakpointObserver.observe("(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)"),this._showAnimation="mat-tooltip-show",this._hideAnimation="mat-tooltip-hide"}}return s.\u0275fac=function(t){return new(t||s)(o.Y36(o.sBO),o.Y36(U),o.Y36(P.Qb,8))},s.\u0275cmp=o.Xpm({type:s,selectors:[["mat-tooltip-component"]],viewQuery:function(t,e){if(1&t&&o.Gf(W,7),2&t){let i;o.iGM(i=o.CRH())&&(e._tooltip=i.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,e){1&t&&o.NdJ("mouseleave",function(n){return e._handleMouseLeave(n)}),2&t&&o.Udp("zoom",e.isVisible()?1:null)},features:[o.qOj],decls:4,vars:6,consts:[[1,"mat-tooltip",3,"ngClass","animationend"],["tooltip",""]],template:function(t,e){if(1&t&&(o.TgZ(0,"div",0,1),o.NdJ("animationend",function(n){return e._handleAnimationEnd(n)}),o.ALo(2,"async"),o._uU(3),o.qZA()),2&t){let i;o.ekj("mat-tooltip-handset",null==(i=o.lcZ(2,4,e._isHandset))?null:i.matches),o.Q6J("ngClass",e.tooltipClass),o.xp6(3),o.Oqu(e.message)}},directives:[v.mk],pipes:[v.Ov],styles:[".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}\n"],encapsulation:2,changeDetection:0}),s})(),rt=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({providers:[tt],imports:[[b.rt,v.ez,g.U8,D.BQ],D.BQ,C.ZD]}),s})()}}]);