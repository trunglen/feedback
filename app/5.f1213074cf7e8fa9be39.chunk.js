webpackJsonp([5],{"+DhH":function(t,e){t.exports='<div class="container-setup">\r\n    <span class="title-setup">Set time serving for transaction:</span><br>\r\n    <div>\r\n        <form class="form-setup" [formGroup]="form">\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup" i18n>Time Serving</span> <label class="note margin-l-5" i18n>(minute)</label>\r\n            </div>\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="serving_time">\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup" i18n>Attended</span>\r\n                <input class="inline border" type="checkbox" formControlName="attended">\r\n            </div>\r\n\r\n            <button class="btnFill submit-setup" (click)="Submit()">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>'},"0Vqw":function(t,e){t.exports='<div class="container-setup">\r\n    <span class="title-setup">Set priority for ticket:</span><br>\r\n    <div>\r\n        <form class="form-setup" [formGroup]="form">\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Priority for service</span>\r\n            </div>\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="service_priority">\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Priority for customer priority</span>\r\n            </div>\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="customer_priority">\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Priority for vip card</span>\r\n            </div>\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="vip_card">\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Priority for customer vip</span>\r\n            </div>\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="customer_vip">\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Priority for ticket online</span>\r\n            </div>\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="ticket_online">\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Min priority for button call</span>\r\n            </div>\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="min_priority_for_call">\r\n            <div>\r\n                <button class="btnFill submit-setup" (click)="Submit()">Submit</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>'},"1JNY":function(t,e,n){e=t.exports=n("Vmy+")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},"1JZF":function(t,e){t.exports="<router-outlet></router-outlet>"},"1eQN":function(t,e,n){e=t.exports=n("Vmy+")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},"5br/":function(t,e,n){e=t.exports=n("Vmy+")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},"8Haw":function(t,e,n){e=t.exports=n("Vmy+")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},EHbm:function(t,e,n){e=t.exports=n("Vmy+")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},JkCS:function(t,e){t.exports="<priority></priority>"},Qjp5:function(t,e){t.exports="<language></language>"},Ucn8:function(t,e,n){e=t.exports=n("Vmy+")(!1),e.push([t.i,"#container-setup .hl-select-one-setup{width:30%;margin-top:10px;margin-bottom:10px;height:25px;border-radius:3px}#container-setup .hl-select-setup{width:30%;height:90px;margin-top:10px;margin-bottom:10px;border-radius:3px;padding-left:5px;border-style:solid;border-width:1px;border-color:#aeb0af;background-color:#fff}",""]),t.exports=t.exports.toString()},YdeR:function(t,e,n){"use strict";function r(){return T}function o(){return z}function i(){return yt}function a(){return Ft}Object.defineProperty(e,"__esModule",{value:!0});var c=n("/oeL"),s=n("qbdv"),p=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();f=p([Object(c.Component)({selector:"app-setup",template:n("1JZF")}),l("design:paramtypes",[])],f);var u=n("bm2B"),d=n("BkNc"),m=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},y=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},b=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();b=m([Object(c.Component)({selector:"setup-global",template:n("Qjp5"),styles:[n("qUXb")]}),y("design:paramtypes",[])],b);var h=n("gOac"),v=n("6lRS"),g=n("ZuE7"),_=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},j=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},O=function(){function t(t,e,n){this.httpServiceGenerator=t,this.matSnackBar=e,this.translateService=n,this.api=this.httpServiceGenerator.make("/api/admin/setting/global_config")}return t.prototype.Update=function(t){var e=this;this.api.Post("update",{key:"Language"},t).subscribe(function(t){"ok"===t?e.matSnackBar.open(e.translateService.translate("Update Successfully"),e.translateService.translate("Close"),{duration:6e3}):e.matSnackBar.open(e.translateService.translate("Update Error"),e.translateService.translate("Close"),{duration:6e3})})},t.prototype.GetByKey=function(){return this.api.Get("get_by_key",{key:"Language"})},t}();O=_([Object(c.Injectable)(),j("design:paramtypes",["function"==typeof(R=void 0!==h.g&&h.g)&&R||Object,"function"==typeof(S=void 0!==v.n&&v.n)&&S||Object,"function"==typeof(k=void 0!==g.b&&g.b)&&k||Object])],O);var R,S,k,x=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},C=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},P=function(){function t(t,e){this.setupApi=t,this.fb=e,this.languages=N}return t.prototype.ngOnInit=function(){var t=this;this.setupApi.GetByKey().subscribe(function(e){null!=e&&(t.form=t.makeForm(e.value))}),this.form=this.makeForm()},t.prototype.makeForm=function(t){return t=t||{},this.fb.group({default:[t.default],support:[t.support]})},t.prototype.Submit=function(){this.setupApi.Update(this.form.value)},t}();P=x([Object(c.Component)({selector:"language",template:n("rGCo"),styles:[n("Ucn8")]}),C("design:paramtypes",["function"==typeof(w=void 0!==O&&O)&&w||Object,"function"==typeof(G=void 0!==u.c&&u.c)&&G||Object])],P);var w,G,N=[{code:"en",name:"English"},{code:"es",name:"Espanol"},{code:"fr",name:"France"},{code:"de",name:"Germany"},{code:"jp",name:"Japan"},{code:"vi",name:"Ti\u1ebfng Vi\u1ec7t"},{code:"cn",name:"China"},{code:"th",name:"Thailand"},{code:"br",name:"Brazil"},{code:"au",name:"Australia"}],F=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},I=d.d.forChild([{path:"",component:b}]),T=function(){function t(){}return t}();T=F([Object(c.NgModule)({imports:[I,u.l,u.g,h.l,s.CommonModule],declarations:[b,P],providers:[O]})],T);var B=n("S7N+"),U=(n("pHKV"),this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}),D=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},A=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();A=U([Object(c.Component)({selector:"service",template:n("t9EC"),styles:[n("1eQN")]}),D("design:paramtypes",[])],A);var M=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},V=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},E=function(){function t(t,e,n){this.httpServiceGenerator=t,this.matSnackBar=e,this.translateService=n,this.api=this.httpServiceGenerator.make("/api/admin/setting/global_config")}return t.prototype.Update=function(t){var e=this;this.api.Post("update",{key:"TimeService"},t).subscribe(function(t){"ok"===t?e.matSnackBar.open(e.translateService.translate("Update successfully"),e.translateService.translate("Close"),{duration:6e3}):e.matSnackBar.open(e.translateService.translate("Update Error"),e.translateService.translate("Close"),{duration:6e3})})},t.prototype.GetByKey=function(){return this.api.Get("get_by_key",{key:"TimeService"})},t}();E=M([Object(c.Injectable)(),V("design:paramtypes",["function"==typeof(K=void 0!==h.g&&h.g)&&K||Object,"function"==typeof(J=void 0!==v.n&&v.n)&&J||Object,"function"==typeof(H=void 0!==g.b&&g.b)&&H||Object])],E);var K,J,H,L=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},q=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},Q=function(){function t(t,e){this.setupApi=t,this.fb=e}return t.prototype.ngOnInit=function(){var t=this;this.setupApi.GetByKey().subscribe(function(e){null!=e&&(t.form=t.makeForm(e.value))}),this.form=this.makeForm()},t.prototype.makeForm=function(t){return t=t||{},this.fb.group({max_serving:[t.max_serving],max_waiting:[t.max_waiting],auto_finish:[t.auto_finish],waiting_rate:[t.waiting_rate],serving_rate:[t.serving_rate]})},t.prototype.Submit=function(){this.setupApi.Update(this.form.value)},t}();Q=L([Object(c.Component)({selector:"time",template:n("mo1U"),styles:[n("ouGi")]}),q("design:paramtypes",["function"==typeof(W=void 0!==E&&E)&&W||Object,"function"==typeof(Y=void 0!==u.c&&u.c)&&Y||Object])],Q);var W,Y,Z=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},X=d.d.forChild([{path:"",component:A}]),z=function(){function t(){}return t}();z=Z([Object(c.NgModule)({imports:[X,u.l,u.g,s.CommonModule],declarations:[A,Q],providers:[E]})],z);var $=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},tt=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},et=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();et=$([Object(c.Component)({selector:"ticket",template:n("JkCS"),styles:[n("5br/")]}),tt("design:paramtypes",[])],et);var nt=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},rt=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},ot=function(){function t(t,e,n){this.httpServiceGenerator=t,this.matSnackBar=e,this.translateService=n,this.api=this.httpServiceGenerator.make("/api/admin/setting/global_config")}return t.prototype.Update=function(t){var e=this;this.api.Post("update",{key:"TicketPriority"},t).subscribe(function(t){"ok"===t?e.matSnackBar.open(e.translateService.translate("Update Successfully"),e.translateService.translate("Close"),{duration:6e3}):e.matSnackBar.open(e.translateService.translate("Update Error"),e.translateService.translate("Close"),{duration:6e3})})},t.prototype.GetByKey=function(){return this.api.Get("get_by_key",{key:"TicketPriority"})},t}();ot=nt([Object(c.Injectable)(),rt("design:paramtypes",["function"==typeof(it=void 0!==h.g&&h.g)&&it||Object,"function"==typeof(at=void 0!==v.n&&v.n)&&at||Object,"function"==typeof(ct=void 0!==g.b&&g.b)&&ct||Object])],ot);var it,at,ct,st=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},pt=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},lt=function(){function t(t,e){this.setupApi=t,this.fb=e}return t.prototype.ngOnInit=function(){var t=this;this.setupApi.GetByKey().subscribe(function(e){null!=e&&(t.form=t.makeForm(e.value))}),this.form=this.makeForm()},t.prototype.makeForm=function(t){return t=t||{},this.fb.group({service_priority:[t.service_priority],customer_priority:[t.customer_priority],vip_card:[t.vip_card],customer_vip:[t.customer_vip],ticket_online:[t.ticket_online],min_priority_for_call:[t.min_priority_for_call]})},t.prototype.Submit=function(){this.setupApi.Update(this.form.value)},t}();lt=st([Object(c.Component)({selector:"priority",template:n("0Vqw"),styles:[n("EHbm")]}),pt("design:paramtypes",["function"==typeof(ft=void 0!==ot&&ot)&&ft||Object,"function"==typeof(ut=void 0!==u.c&&u.c)&&ut||Object])],lt);var ft,ut,dt=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},mt=d.d.forChild([{path:"",component:et}]),yt=function(){function t(){}return t}();yt=dt([Object(c.NgModule)({imports:[mt,u.l,u.g,s.CommonModule],declarations:[et,lt],providers:[ot]})],yt);var bt=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},ht=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},vt=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();vt=bt([Object(c.Component)({selector:"transaction",template:n("oPxK"),styles:[n("1JNY")]}),ht("design:paramtypes",[])],vt);var gt=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},_t=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},jt=function(){function t(t,e,n){this.httpServiceGenerator=t,this.matSnackBar=e,this.translateService=n,this.api=this.httpServiceGenerator.make("/api/admin/setting/global_config")}return t.prototype.Update=function(t){var e=this;this.api.Post("update",{key:"Translation"},t).subscribe(function(t){"ok"===t?e.matSnackBar.open(e.translateService.translate("Update Successfully"),e.translateService.translate("Close"),{duration:6e3}):e.matSnackBar.open(e.translateService.translate("Update Error"),e.translateService.translate("Close"),{duration:6e3})})},t.prototype.GetByKey=function(){return this.api.Get("get_by_key",{key:"Translation"})},t}();jt=gt([Object(c.Injectable)(),_t("design:paramtypes",["function"==typeof(Ot=void 0!==h.g&&h.g)&&Ot||Object,"function"==typeof(Rt=void 0!==v.n&&v.n)&&Rt||Object,"function"==typeof(St=void 0!==g.b&&g.b)&&St||Object])],jt);var Ot,Rt,St,kt=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},xt=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},Ct=function(){function t(t,e){this.setupApi=t,this.fb=e}return t.prototype.ngOnInit=function(){var t=this;this.setupApi.GetByKey().subscribe(function(e){null!=e&&(t.form=t.makeForm(e.value))}),this.form=this.makeForm()},t.prototype.makeForm=function(t){return t=t||{},this.fb.group({serving_time:[t.serving_time],attended:[t.attended]})},t.prototype.Submit=function(){this.setupApi.Update(this.form.value)},t}();Ct=kt([Object(c.Component)({selector:"time",template:n("+DhH"),styles:[n("8Haw")]}),xt("design:paramtypes",["function"==typeof(Pt=void 0!==jt&&jt)&&Pt||Object,"function"==typeof(wt=void 0!==u.c&&u.c)&&wt||Object])],Ct);var Pt,wt,Gt=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},Nt=d.d.forChild([{path:"",component:vt}]),Ft=function(){function t(){}return t}();Ft=Gt([Object(c.NgModule)({imports:[Nt,u.l,u.g,s.CommonModule],declarations:[vt,Ct],providers:[jt]})],Ft);var It=[{path:"",pathMatch:"full",redirectTo:"global"},{path:"global",loadChildren:r},{path:"service",loadChildren:o},{path:"ticket",loadChildren:i},{path:"transaction",loadChildren:a}],Tt=d.d.forChild([{path:"",canActivate:[B.SessionValidationGuard],component:f,children:It}]),Bt=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},Ut=function(){function t(){}return t}();Ut=Bt([Object(c.NgModule)({imports:[Tt,u.l,u.g,T,z,yt,s.CommonModule],declarations:[f]})],Ut);e.default=Ut},mo1U:function(t,e){t.exports='<div class="container-setup">\r\n    <span class="title-setup">Set Time For Ticket:</span>\r\n    <form [formGroup]="form" class="form-setup">\r\n        <div>\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Waiting Time Transaction</span>\r\n                <span class="note margin-l-5">(minute)</span>\r\n            </div>\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="max_waiting" placeholder="Max Waiting Time">\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Serving Time Transaction</span>\r\n                <span class="note margin-l-5">(minute)</span>\r\n            </div>\r\n\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="max_serving" placeholder="Max Serving Time">\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Auto Finish Time</span>\r\n                <span class="note margin-l-5">(minute)</span>\r\n            </div>\r\n\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="auto_finish" placeholder="Auto Finish Time">\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Waiting Time Transaction rate</span>\r\n                <span class="note margin-l-5">(%)</span>\r\n            </div>\r\n\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="waiting_rate" placeholder="waiting rate">\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <span class="uppercase inline font-bold-setup">Serving Time Transaction rate</span>\r\n                <span class="note margin-l-5">(%)</span>\r\n            </div>\r\n\r\n            <input class="ctrlInput-setup" type="number" min="0" formControlName="serving_rate" placeholder="serving rate">\r\n        </div>\r\n        <button class="btnFill submit-setup" (click)="Submit()">Submit</button>\r\n    </form>\r\n</div>'},oPxK:function(t,e){t.exports="<time></time>"},ouGi:function(t,e,n){e=t.exports=n("Vmy+")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},qUXb:function(t,e,n){e=t.exports=n("Vmy+")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},rGCo:function(t,e){t.exports='<div class="container-setup">\r\n    <span class="title-setup">Select Language:</span>\r\n    <form [formGroup]="form" class="form-setup">\r\n        <span class="font-bold-setup">Language Default:</span><br>\r\n        <select class="hl-select-one-setup" formControlName="default">\r\n      <option *ngFor="let d of languages" [value]="d.code">{{d.name}}</option>\r\n    </select><br>\r\n        <span class="font-bold-setup">Language Support:</span><br>\r\n        <div class="hl-select-setup">\r\n            <select-check formControlName="support" [data]="languages" textField="name" idField="code"></select-check>\r\n        </div>\r\n        <button class="btnFill submit-setup " (click)="Submit()">Submit</button>\r\n    </form>\r\n</div>'},t9EC:function(t,e){t.exports="<time></time>"}});