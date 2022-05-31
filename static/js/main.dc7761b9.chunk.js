(this["webpackJsonphash-labs"]=this["webpackJsonphash-labs"]||[]).push([[0],{137:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),i=n.n(c),o=(n(137),n(24)),s=n(17),l=n(68),j=n(1),d=function(){var e=Object(s.g)();return Object(j.jsx)("div",{children:Object(j.jsxs)("h3",{children:["Page not found",Object(j.jsx)("code",{children:e.pathname})]})})},b=n(88),u=n.n(b),h=n(99),x=n(13),O=n(221),p=n(222),f=n(60),m=function(e){var t=e.label;return Object(j.jsxs)(O.a,{sx:{flexGrow:1,p:2,textAlign:"center"},children:[Object(j.jsx)(p.a,{color:"primary"}),Object(j.jsx)(f.a,{variant:"body1",gutterBottom:!0,children:t})]})},g=n(223),v=n(218),w=n(224),y=n(213),C=n(199),k=n(225),U=n(219),P=n(198),S=n(200),B=n(201),W=n(195),G=n(196),z=n(197),E=function(e){var t=e.name.toLowerCase();return t.search("cloud")>-1?Object(j.jsx)(W.a,{color:"primary",fontSize:"large"}):t.search("rain")>-1?Object(j.jsx)(G.a,{color:"primary",fontSize:"large"}):t.search("snow")>-1?Object(j.jsx)(z.a,{color:"primary",fontSize:"large"}):Object(j.jsx)(P.a,{color:"primary",fontSize:"large"})},I=function(e){var t=e.name,n=e.sys,a=e.weather,r=e.main,c=e.wind,i=r?"".concat(r.temp,"\xb0C"):"";return Object(j.jsx)(O.a,{sx:{flexGrow:1,p:4},children:Object(j.jsxs)(v.a,{container:!0,spacing:3,children:[Object(j.jsx)(v.a,{item:!0,xs:12,md:4,children:Object(j.jsx)(g.a,{elevation:3,variant:"outlined",children:Object(j.jsxs)(O.a,{sx:{flexGrow:1,p:2,textAlign:"center"},children:[Object(j.jsxs)(f.a,{variant:"h4",gutterBottom:!0,component:"div",children:[t,",",n.country]}),Object(j.jsxs)(O.a,{sx:{flexGrow:1,p:4},children:[Object(j.jsx)(f.a,{variant:"h5",gutterBottom:!0,component:"div",children:a[0].description}),Object(j.jsx)(E,{name:a[0].main}),Object(j.jsx)(f.a,{variant:"h5",gutterBottom:!0,component:"div",children:i})]})]})})}),Object(j.jsx)(v.a,{item:!0,xs:12,md:4,children:Object(j.jsx)(g.a,{elevation:3,variant:"outlined",children:Object(j.jsx)(O.a,{sx:{flexGrow:1,p:2},children:Object(j.jsxs)(w.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(j.jsxs)(y.a,{children:[Object(j.jsx)(k.a,{children:Object(j.jsx)(U.a,{children:Object(j.jsx)(P.a,{})})}),Object(j.jsx)(C.a,{primary:i,secondary:"Feels like ".concat(r.feels_like,"\xb0C")})]}),Object(j.jsxs)(y.a,{children:[Object(j.jsx)(k.a,{children:Object(j.jsx)(U.a,{children:Object(j.jsx)(S.a,{})})}),Object(j.jsx)(C.a,{primary:"".concat(r.humidity,"%"),secondary:"Humidity"})]}),Object(j.jsxs)(y.a,{children:[Object(j.jsx)(k.a,{children:Object(j.jsx)(U.a,{children:Object(j.jsx)(B.a,{})})}),Object(j.jsx)(C.a,{primary:"".concat(c.speed,"m/s"),secondary:"Wind"})]})]})})})})]})})},F=function(){var e=Object(a.useState)(null),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),i=Object(x.a)(c,2),s=i[0],l=i[1],d=Object(a.useState)("Getting location"),b=Object(x.a)(d,2),O=b[0],p=b[1],f=function(){var e=Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(s.latitude,"&lon=").concat(s.longitude,"&appid=").concat("fd26fa84170da6ba612a200c1f56cf61","&units=metric")).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){l(e.coords)})):p("Please allow location to see weather")}),[]),Object(a.useEffect)((function(){s&&(p("Getting weather"),f())}),[s]),null===s||null===n?Object(j.jsx)(m,{label:O}):Object(j.jsx)(I,Object(o.a)({},n))},M=n(214),T=n(231),A=n(3),J=n(210);function L(e){var t=e.id,n=e.brand,r=e.weightUnits,c=e.price,i=e.onUpdate,s=e.pricePerUnit,l=Object(a.useCallback)((function(e,a){var l={weightUnits:r,price:c,id:t,pricePerUnit:s,brand:n};i(Object(o.a)(Object(o.a)({},l),{},Object(A.a)({},e,a)))}),[r,c,t,s,i,n]);return Object(j.jsx)(g.a,{elevation:2,sx:{p:4,m:1},children:Object(j.jsxs)(v.a,{container:!0,spacing:2,children:[Object(j.jsx)(v.a,{item:!0,xs:12,children:Object(j.jsx)(J.a,{fullWidth:!0,id:"inpBrand",label:"Brand",placeholder:"Eg: Unilever",variant:"standard",value:n,onChange:function(e){return l("brand",e.currentTarget.value)}})}),Object(j.jsx)(v.a,{item:!0,xs:6,children:Object(j.jsx)(J.a,{fullWidth:!0,type:"number",id:"inpWeightUnits",label:"Weight Units",variant:"standard",value:r,onChange:function(e){return l("weightUnits",e.currentTarget.value)}})}),Object(j.jsx)(v.a,{item:!0,xs:6,children:Object(j.jsx)(J.a,{fullWidth:!0,type:"number",id:"inpPrice",label:"Price",variant:"standard",value:c,onChange:function(e){return l("price",e.currentTarget.value)}})}),Object(j.jsx)(v.a,{item:!0,xs:12,children:Object(j.jsx)(J.a,{fullWidth:!0,type:"number",id:"inpPricePerUnit",label:"Price per unit",variant:"filled",contentEditable:!1,value:s})})]})})}var D=n(107),H=n.n(D),N=n(111),$=n(220),_=n(4),q=n(227),K=n(208),Q=n(229),R=n(230),V=n(228),X=n(105),Y=n.n(X),Z=Object(_.a)(q.a)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}})),ee=function(e){var t=e.children,n=e.onClose,a=Object(N.a)(e,["children","onClose"]);return Object(j.jsxs)(K.a,Object(o.a)(Object(o.a)({sx:{m:0,p:2}},a),{},{children:[t,n?Object(j.jsx)(V.a,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(j.jsx)(Y.a,{})}):null]}))};function te(e){var t=e.open,n=e.handleClose;return Object(j.jsx)("div",{children:Object(j.jsxs)(Z,{onClose:n,"aria-labelledby":"customized-dialog-title",open:t,children:[Object(j.jsx)(ee,{id:"customized-dialog-title",onClose:n,children:"How to use?"}),Object(j.jsx)(Q.a,{dividers:!0,children:Object(j.jsx)(f.a,{gutterBottom:!0,children:"This can calculate price per unit of a brand and add more brands using add button. It can be usefull while having 2 brands where calculating value for money is difficult while on a super market. Eg: Unilever Product costs 19 for 135 grams and Palmolive costs 27.5 for 175 grams, which one is worthy?"})}),Object(j.jsx)(R.a,{children:Object(j.jsx)($.a,{autoFocus:!0,onClick:n,children:"Close"})})]})})}var ne=n(106),ae=n.n(ne),re=n(209),ce=n(59),ie=n(76),oe=function(e){return{id:e,brand:String.fromCharCode(97+e),weightUnits:0,price:0,pricePerUnit:""}},se=[oe(0)],le=Object(ie.b)({name:"brands",initialState:se,reducers:{add:function(e){e.length<100&&e.push(oe(e.length))},update:function(e,t){var n,a,r=t.payload,c=r.weightUnits,i=r.id,o=r.price,s=r.brand,l=(a=o,0!==(n=c)&&0!==a?(a/n).toFixed(2):""),j=e.findIndex((function(e){return e.id===i}));e[j]={id:i,price:o,pricePerUnit:l,weightUnits:c,brand:s}},sort:function(e){e.sort((function(e,t){return e.pricePerUnit-t.pricePerUnit}))},save:function(e){var t=JSON.stringify(e);localStorage.setItem("brands",t)},restore:function(e){var t=localStorage.getItem("brands");t&&(t=JSON.parse(t))}}}),je=le.actions,de=je.add,be=je.update,ue=je.sort,he=function(e){return e.brands},xe=le.reducer,Oe={position:"fixed",bottom:20,right:16};var pe=function(){var e=Object(ce.c)(he),t=Object(ce.b)(),n=r.a.useState(!1),c=Object(x.a)(n,2),i=c[0],s=c[1],l=Object(a.useCallback)((function(){s(!0)}),[]),d=r.a.useState(!1),b=Object(x.a)(d,2),u=b[0],h=b[1],p=Object(a.useCallback)((function(){h(!0)}),[h]),m=Object(a.useCallback)((function(e,t){"clickaway"!==t&&h(!1)}),[h]),g=Object(a.useCallback)((function(){s(!1)}),[]),w=Object(a.useCallback)((function(e){t(be(e))}),[t]),y=Object(a.useCallback)((function(){t(de())}),[t]),C=Object(a.useCallback)((function(){t(ue()),p()}),[t,p]);return Object(j.jsxs)(O.a,{sx:{flexGrow:1,p:4,position:"relative"},children:[Object(j.jsx)(f.a,{variant:"h5",gutterBottom:!0,component:"div",children:"Brand Price comparing tool"}),Object(j.jsx)(v.a,{container:!0,spacing:2,children:e.map((function(e){return Object(j.jsxs)(v.a,{item:!0,xs:12,md:4,lg:3,children:[" ",Object(j.jsx)(L,Object(o.a)(Object(o.a)({},e),{},{onUpdate:w}))]},e.id)}))}),Object(j.jsx)(te,{open:i,handleClose:g}),Object(j.jsx)(M.a,{open:u,autoHideDuration:3e3,onClose:m,message:"Sorted (Lower price is on top now!!)"}),Object(j.jsxs)(O.a,{sx:Object(o.a)({"& > :not(style)":{m:1}},Oe),children:[Object(j.jsx)(T.a,{color:"secondary","aria-label":"add",onClick:l,children:Object(j.jsx)(ae.a,{})}),Object(j.jsx)(T.a,{color:"primary","aria-label":"add",onClick:C,children:Object(j.jsx)(re.a,{})}),Object(j.jsx)(T.a,{color:"primary","aria-label":"add",onClick:y,children:Object(j.jsx)(H.a,{})})]})]})},fe=[{path:"/",exact:!0,inner:!0,component:pe},{path:"/home",inner:!0,component:pe},{path:"/weather",exact:!0,inner:!0,component:F},{path:"/brandcompare",exact:!0,inner:!0,component:pe},{path:"*",component:d}];function me(){return Object(j.jsx)("div",{style:{display:"flex",position:"fixed",bottom:0,justifyContent:"center",width:"100%"},children:Object(j.jsx)(f.a,{variant:"overline",color:function(e){return e.palette.grey[500]},children:"\u2728 Made in Bengaluru, India with \ud83d\udc9b and \u2615"})})}var ge=n(232),ve=n(234),we=n(110),ye=n(108),Ce=n.n(ye),ke=n(233),Ue=n(217),Pe=[{name:"Brand Price Compare",path:"/brandcompare"},{name:"Weather",path:"/weather"}],Se=function(){var e=a.useState(null),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(s.f)(),i=function(e){e&&c.push(e.path),r(null)};return Object(j.jsx)(ge.a,{position:"static",children:Object(j.jsx)(ke.a,{maxWidth:"xl",children:Object(j.jsxs)(ve.a,{disableGutters:!0,children:[Object(j.jsx)(f.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"#Labs"}),Object(j.jsxs)(O.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(j.jsx)(V.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(j.jsx)(Ce.a,{})}),Object(j.jsx)(we.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:i,sx:{display:{xs:"block",md:"none"}},children:Pe.map((function(e){return Object(j.jsx)(Ue.a,{onClick:function(){return i(e)},children:Object(j.jsx)(f.a,{textAlign:"center",children:e.name})},e.name)}))})]}),Object(j.jsx)(f.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"#Labs"}),Object(j.jsx)(O.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:Pe.map((function(e){return Object(j.jsx)($.a,{onClick:function(){return i(e)},sx:{my:2,color:"white",display:"block"},children:e.name},e.name)}))})]})})})},Be=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Se,{}),e.children,Object(j.jsx)(me,{})]})},We=function(e){return e.inner?Object(j.jsx)(Be,{children:e.children}):Object(j.jsx)(j.Fragment,{children:e.children})},Ge=function(e){return Object(j.jsx)(We,{inner:e.inner,children:Object(j.jsx)(s.a,{path:e.path,render:function(t){return Object(j.jsx)(e.component,Object(o.a)(Object(o.a)({},t),{},{routes:e.routes}))}})})},ze=function(){return Object(j.jsx)(l.a,{children:Object(j.jsx)(s.c,{children:fe.map((function(e,t){return Object(j.jsx)(Ge,Object(o.a)({},e),t)}))})})},Ee=n(109),Ie=n(216),Fe=n(41),Me=n(40),Te=Object(Ee.a)({palette:{primary:Me.a,secondary:Fe.a}}),Ae=function(){return Object(j.jsx)(Ie.a,{theme:Te,children:Object(j.jsx)(ze,{})})},Je=Object(ie.a)({reducer:{brands:xe}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(ce.a,{store:Je,children:Object(j.jsx)(Ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);
//# sourceMappingURL=main.dc7761b9.chunk.js.map