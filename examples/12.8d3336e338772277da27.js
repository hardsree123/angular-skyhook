(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"87Kw":function(n,l,t){"use strict";t.r(l);var u=t("LoAr"),e=function(){return function(){}}(),i=t("C9Ky"),o=function(){return function(){this.empty=!1,this.inFlight=!1}}(),r=u["ɵcrt"]({encapsulation:0,styles:[".trash[_ngcontent-%COMP%] { background: #ffccff; }\n    .empty[_ngcontent-%COMP%] { background: #eee; }\n    .empty[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] { visibility: hidden; }\n    \n    .in-flight[_ngcontent-%COMP%] {\n      width: 100px;\n      background-clip: padding-box;\n      border: 2px solid rgba(0,0,0,0.1);\n    }"],data:{}});function a(n){return u["ɵvid"](2,[(n()(),u["ɵeld"](0,0,null,null,2,"div",[["class","trash pad"]],[[2,"empty",null],[2,"in-flight",null]],null,null,null,null)),(n()(),u["ɵeld"](1,0,null,null,1,"span",[["class","type"]],null,null,null,null,null)),(n()(),u["ɵted"](2,null,["",""]))],null,(function(n,l){var t=l.component;n(l,0,0,t.empty,t.inFlight),n(l,2,0,t.type)}))}var c=t("O/wF"),d=t("8dL6"),p=t("lWex"),s=t("yziD"),g=t("r6jt"),f=t("WT9V"),m=function(){function n(n){var l=this;this.dnd=n,this.remain=5,this.count=0,this.trashSource=this.dnd.dragSource(null,{canDrag:function(n){return l.remain>0},beginDrag:function(n){return{count:l.count++}},endDrag:function(n){n.didDrop()&&l.remain--}}),this.isDragging$=this.trashSource.listen((function(n){return n.isDragging()})),this.collected$=this.trashSource.listen((function(n){return{isDragging:n.isDragging(),canDrag:n.canDrag(),itemType:n.getItemType()}}))}return n.prototype.ngOnChanges=function(){this.trashSource.setType(this.type)},n.prototype.ngOnDestroy=function(){this.trashSource.unsubscribe()},n.prototype.litter=function(){this.remain+=5},n}(),y=u["ɵcrt"]({encapsulation:0,styles:[".dragging[_ngcontent-%COMP%] {\n  }"],data:{}});function h(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,9,null,null,null,null,null,null,null)),(n()(),u["ɵeld"](1,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),u["ɵeld"](2,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.litter(t)&&u),u}),null,null)),(n()(),u["ɵted"](-1,null,["add more"])),(n()(),u["ɵeld"](4,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["ɵted"](5,null,["("," left)"])),(n()(),u["ɵeld"](6,0,null,null,3,"div",[],[[2,"dragging",null]],null,null,null,null)),u["ɵdid"](7,671744,null,0,g.d,[u.ElementRef,u.NgZone],{dragSource:[0,"dragSource"]},null),(n()(),u["ɵeld"](8,0,null,null,1,"app-trash",[],null,null,null,a,r)),u["ɵdid"](9,49152,null,0,o,[],{type:[0,"type"],empty:[1,"empty"]},null)],(function(n,l){var t=l.component;n(l,7,0,t.trashSource),n(l,9,0,t.type,0==t.remain||l.context.ngIf.isDragging&&1==t.remain)}),(function(n,l){var t=l.component;n(l,5,0,t.remain),n(l,6,0,l.context.ngIf.isDragging&&t.remain>1)}))}function v(n){return u["ɵvid"](0,[(n()(),u["ɵand"](16777216,null,null,2,null,h)),u["ɵdid"](1,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["ɵpid"](131072,f.AsyncPipe,[u.ChangeDetectorRef])],(function(n,l){var t=l.component;n(l,1,0,u["ɵunv"](l,1,0,u["ɵnov"](l,2).transform(t.collected$)))}),null)}var b=function(){function n(n){var l=this;this.dnd=n,this.accepts=["TRASH"],this.trashes=[],this.capacity=6,this.trashTarget=this.dnd.dropTarget(null,{canDrop:function(n){return l.hasCapacity},drop:function(n){var t=n.getItemType();l.trashes.unshift(t)}}),this.collected$=this.trashTarget.listen((function(n){return{isOver:n.isOver(),canDrop:n.canDrop(),itemType:n.getItemType()}}))}return Object.defineProperty(n.prototype,"hasCapacity",{get:function(){return this.trashes.length<this.capacity},enumerable:!0,configurable:!0}),n.prototype.getStyles=function(n){var l=n.canDrop;return{backgroundColor:n.isOver&&l?"#cfcffc":l?"#fffacf":"white"}},n.prototype.empty=function(){this.trashes=[]},n.prototype.ngOnInit=function(){this.trashTarget.setTypes(this.accepts)},n.prototype.ngOnDestroy=function(){this.trashTarget.unsubscribe()},n}(),C=u["ɵcrt"]({encapsulation:0,styles:[""],data:{}});function I(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,12,"div",[["class","dustbin pad"]],null,null,null,null,null)),u["ɵprd"](512,null,f["ɵNgStyleImpl"],f["ɵNgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["ɵdid"](2,278528,null,0,f.NgStyle,[f["ɵNgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),u["ɵdid"](3,671744,null,0,g.e,[u.ElementRef,u.NgZone],{dropTarget:[0,"dropTarget"]},null),(n()(),u["ɵeld"](4,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),u["ɵeld"](5,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),u["ɵted"](6,null,[" "," "," "," "," "])),(n()(),u["ɵeld"](7,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),u["ɵeld"](8,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.empty()&&u),u}),null,null)),(n()(),u["ɵted"](9,null,["empty ",""])),(n()(),u["ɵeld"](10,0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),u["ɵted"](11,null,["",""])),u["ɵpid"](0,f.JsonPipe,[])],(function(n,l){var t=l.component;n(l,2,0,t.getStyles(l.context.ngIf)),n(l,3,0,t.trashTarget)}),(function(n,l){var t=l.component;n(l,6,0,l.context.ngIf.canDrop?"drop "+l.context.ngIf.itemType+" in the":"",l.context.ngIf.isOver&&!t.hasCapacity?"cannot drop, ":"",t.name,t.hasCapacity?"":" is full!"),n(l,9,0,t.name),n(l,11,0,u["ɵunv"](l,11,0,u["ɵnov"](l,12).transform(t.trashes)))}))}function O(n){return u["ɵvid"](0,[(n()(),u["ɵand"](16777216,null,null,2,null,I)),u["ɵdid"](1,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["ɵpid"](131072,f.AsyncPipe,[u.ChangeDetectorRef])],(function(n,l){var t=l.component;n(l,1,0,u["ɵunv"](l,1,0,u["ɵnov"](l,2).transform(t.collected$)))}),null)}var P=function(){return function(){}}(),x=u["ɵcrt"]({encapsulation:0,styles:[".bins[_ngcontent-%COMP%] {\n            margin-top: 20px;\n            display: flex;\n        }\n        .bins[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n            flex: 1;\n            min-width: 100px;\n        }\n        .bins[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n            margin-right: 4px;\n        }"],data:{}});function R(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,1,"app-trash",[],null,null,null,a,r)),u["ɵdid"](1,49152,null,0,o,[],{type:[0,"type"],inFlight:[1,"inFlight"]},null)],(function(n,l){n(l,1,0,l.context.$implicit,!0)}),null)}function T(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,1,"app-example-link",[["path","bins"]],null,null,null,c.b,c.a)),u["ɵdid"](1,49152,null,0,d.a,[],{path:[0,"path"]},null),(n()(),u["ɵeld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u["ɵted"](-1,null,[" This example demonstrates: "])),(n()(),u["ɵeld"](4,0,null,null,6,"ul",[],null,null,null,null,null)),(n()(),u["ɵeld"](5,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),u["ɵted"](-1,null,["Making components conditionally draggable"])),(n()(),u["ɵeld"](7,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),u["ɵted"](-1,null,["Making targets conditionally available for drops"])),(n()(),u["ɵeld"](9,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),u["ɵted"](-1,null,["How drop targets can accept different item types"])),(n()(),u["ɵeld"](11,0,null,null,3,"skyhook-preview",[],null,null,null,p.b,p.a)),u["ɵdid"](12,180224,null,1,s.c,[g.g,g.b],null,null),u["ɵqud"](603979776,1,{content:0}),(n()(),u["ɵand"](0,[[1,2]],null,0,null,R)),(n()(),u["ɵeld"](15,0,null,null,6,"div",[["class","bins"]],null,null,null,null,null)),(n()(),u["ɵeld"](16,0,null,null,1,"app-trash-pile",[["type","PAPER"]],null,null,null,v,y)),u["ɵdid"](17,704512,null,0,m,[g.g],{type:[0,"type"]},null),(n()(),u["ɵeld"](18,0,null,null,1,"app-trash-pile",[["type","ENVELOPE"]],null,null,null,v,y)),u["ɵdid"](19,704512,null,0,m,[g.g],{type:[0,"type"]},null),(n()(),u["ɵeld"](20,0,null,null,1,"app-trash-pile",[["type","PARCEL"]],null,null,null,v,y)),u["ɵdid"](21,704512,null,0,m,[g.g],{type:[0,"type"]},null),(n()(),u["ɵeld"](22,0,null,null,6,"div",[["class","bins"]],null,null,null,null,null)),(n()(),u["ɵeld"](23,0,null,null,2,"app-bin",[["name","recycle"]],null,null,null,O,C)),u["ɵdid"](24,245760,null,0,b,[g.g],{name:[0,"name"],accepts:[1,"accepts"]},null),u["ɵpad"](25,2),(n()(),u["ɵeld"](26,0,null,null,2,"app-bin",[["name","mailbox"]],null,null,null,O,C)),u["ɵdid"](27,245760,null,0,b,[g.g],{name:[0,"name"],accepts:[1,"accepts"]},null),u["ɵpad"](28,2)],(function(n,l){n(l,1,0,"bins"),n(l,17,0,"PAPER"),n(l,19,0,"ENVELOPE"),n(l,21,0,"PARCEL");var t=n(l,25,0,"PAPER","ENVELOPE");n(l,24,0,"recycle",t);var u=n(l,28,0,"PARCEL","ENVELOPE");n(l,27,0,"mailbox",u)}),null)}function D(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,T,x)),u["ɵdid"](1,49152,null,0,P,[],null,null)],null,null)}var k=u["ɵccf"]("ng-component",P,D,{},{},[]),w=t("981U"),E=t("JqZp");t.d(l,"BinsModuleNgFactory",(function(){return N}));var N=u["ɵcmf"](e,[],(function(n){return u["ɵmod"]([u["ɵmpd"](512,u.ComponentFactoryResolver,u["ɵCodegenComponentFactoryResolver"],[[8,[i.a,k]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["ɵmpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[u.LOCALE_ID,[2,f["ɵangular_packages_common_common_a"]]]),u["ɵmpd"](1073742336,f.CommonModule,f.CommonModule,[]),u["ɵmpd"](1073742336,g.f,g.f,[]),u["ɵmpd"](1073742336,s.b,s.b,[]),u["ɵmpd"](1073742336,w.o,w.o,[[2,w.t],[2,w.k]]),u["ɵmpd"](1073742336,E.a,E.a,[]),u["ɵmpd"](1073742336,e,e,[]),u["ɵmpd"](1024,w.i,(function(){return[[{path:"",component:P}]]}),[])])}))},"O/wF":function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t.d(l,"b",(function(){return i}));var u=t("LoAr"),e=(t("8dL6"),u["ɵcrt"]({encapsulation:0,styles:[".fab[_ngcontent-%COMP%] { color: black; }\n        p[_ngcontent-%COMP%] {\n            margin-top: 0;\n        }\n        a[_ngcontent-%COMP%] {\n            padding: 8px;\n            display: inline-block;\n            background: rgba(68, 72, 224, 0.14);\n            background: #e5e2fa;\n            background: #e2ecfa;\n            text-decoration: none;\n        }"],data:{}}));function i(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),u["ɵeld"](1,0,null,null,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u["ɵeld"](2,0,null,null,0,"i",[["class","fab fa-github"]],null,null,null,null,null)),(n()(),u["ɵted"](-1,null,[" View the source on GitHub "]))],null,(function(n,l){n(l,1,0,l.component.link)}))}},lWex:function(n,l,t){"use strict";t.d(l,"a",(function(){return r})),t.d(l,"b",(function(){return s}));var u=t("LoAr"),e=t("yziD"),i=t("WT9V"),o=t("r6jt"),r=u["ɵcrt"]({encapsulation:2,styles:[],data:{}});function a(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function c(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),u["ɵand"](16777216,null,null,2,null,a)),u["ɵdid"](2,540672,null,0,i.NgTemplateOutlet,[u.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),u["ɵpod"](3,{$implicit:0,type:1,item:2}),(n()(),u["ɵand"](0,null,null,0))],(function(n,l){var t=l.component,u=n(l,3,0,l.parent.parent.context.ngIf.itemType,l.parent.parent.context.ngIf.itemType,l.parent.parent.context.ngIf.item);n(l,2,0,u,t.content)}),null)}function d(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,3,"skyhook-preview-renderer",[],null,null,null,f,g)),u["ɵdid"](1,180224,null,0,e.d,[o.g],null,null),(n()(),u["ɵand"](16777216,null,0,1,null,c)),u["ɵdid"](3,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,3,0,l.parent.context.ngIf.isDragging)}),null)}function p(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),u["ɵand"](16777216,null,null,1,null,d)),u["ɵdid"](2,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["ɵand"](0,null,null,0))],(function(n,l){n(l,2,0,l.context.ngIf.previewEnabled)}),null)}function s(n){return u["ɵvid"](2,[(n()(),u["ɵand"](16777216,null,null,2,null,p)),u["ɵdid"](1,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["ɵpid"](131072,i.AsyncPipe,[u.ChangeDetectorRef])],(function(n,l){var t=l.component;n(l,1,0,u["ɵunv"](l,1,0,u["ɵnov"](l,2).transform(t.collect$)))}),null)}var g=u["ɵcrt"]({encapsulation:0,styles:["[_nghost-%COMP%] {\n                display: block;\n                position: fixed;\n                pointer-events: none;\n                z-index: 100;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n            }\n            @keyframes animatedBorder {\n                from {\n                    border-color: rgba(0, 0, 0, 0);\n                }\n                to {\n                    border-color: rgba(0, 0, 0, 1);\n                }\n            }\n            .firefox-bug[_ngcontent-%COMP%] {\n                animation-name: animatedBorder;\n                animation-duration: 1s;\n                animation-iteration-count: infinite;\n                animation-timing-function: linear;\n            }"],data:{}});function f(n){return u["ɵvid"](2,[(n()(),u["ɵeld"](0,0,null,null,4,"div",[["class","firefox-bug"]],null,null,null,null,null)),u["ɵprd"](512,null,i["ɵNgStyleImpl"],i["ɵNgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["ɵdid"](2,278528,null,0,i.NgStyle,[i["ɵNgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),u["ɵpid"](131072,i.AsyncPipe,[u.ChangeDetectorRef]),u["ɵncd"](null,0)],(function(n,l){var t=l.component;n(l,2,0,u["ɵunv"](l,2,0,u["ɵnov"](l,3).transform(t.style$)))}),null)}}}]);