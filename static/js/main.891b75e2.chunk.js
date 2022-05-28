(this["webpackJsonphash-labs"]=this["webpackJsonphash-labs"]||[]).push([[0],{135:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),i=n.n(c),o=(n(135),n(25)),s=n(17),l=n(68),j=n(1),u=function(){var e=Object(s.g)();return Object(j.jsx)("div",{children:Object(j.jsxs)("h3",{children:["Page not found",Object(j.jsx)("code",{children:e.pathname})]})})},d=n(50),b=n.n(d),h=n(70),x=n(13),O=n(216),p=n(217),m=n(60),f=function(e){var t=e.label;return Object(j.jsxs)(O.a,{sx:{flexGrow:1,p:2,textAlign:"center"},children:[Object(j.jsx)(p.a,{color:"primary"}),Object(j.jsx)(m.a,{variant:"body1",gutterBottom:!0,children:t})]})},g=n(218),v=n(213),w=n(219),y=n(209),C=n(197),k=n(220),W=n(214),B=n(196),P=n(198),S=n(199),G=n(193),U=n(194),z=n(195),E=function(e){var t=e.name.toLowerCase();return t.search("cloud")>-1?Object(j.jsx)(G.a,{color:"primary",fontSize:"large"}):t.search("rain")>-1?Object(j.jsx)(U.a,{color:"primary",fontSize:"large"}):t.search("snow")>-1?Object(j.jsx)(z.a,{color:"primary",fontSize:"large"}):Object(j.jsx)(B.a,{color:"primary",fontSize:"large"})},A=function(e){var t=e.name,n=e.sys,a=e.weather,r=e.main,c=e.wind,i=r?"".concat(r.temp,"\xb0C"):"";return Object(j.jsx)(O.a,{sx:{flexGrow:1,p:4},children:Object(j.jsxs)(v.a,{container:!0,spacing:3,children:[Object(j.jsx)(v.a,{item:!0,xs:12,md:4,children:Object(j.jsx)(g.a,{elevation:3,variant:"outlined",children:Object(j.jsxs)(O.a,{sx:{flexGrow:1,p:2,textAlign:"center"},children:[Object(j.jsxs)(m.a,{variant:"h4",gutterBottom:!0,component:"div",children:[t,",",n.country]}),Object(j.jsxs)(O.a,{sx:{flexGrow:1,p:4},children:[Object(j.jsx)(m.a,{variant:"h5",gutterBottom:!0,component:"div",children:a[0].description}),Object(j.jsx)(E,{name:a[0].main}),Object(j.jsx)(m.a,{variant:"h5",gutterBottom:!0,component:"div",children:i})]})]})})}),Object(j.jsx)(v.a,{item:!0,xs:12,md:4,children:Object(j.jsx)(g.a,{elevation:3,variant:"outlined",children:Object(j.jsx)(O.a,{sx:{flexGrow:1,p:2},children:Object(j.jsxs)(w.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(j.jsxs)(y.a,{children:[Object(j.jsx)(k.a,{children:Object(j.jsx)(W.a,{children:Object(j.jsx)(B.a,{})})}),Object(j.jsx)(C.a,{primary:i,secondary:"Feels like ".concat(r.feels_like,"\xb0C")})]}),Object(j.jsxs)(y.a,{children:[Object(j.jsx)(k.a,{children:Object(j.jsx)(W.a,{children:Object(j.jsx)(P.a,{})})}),Object(j.jsx)(C.a,{primary:"".concat(r.humidity,"%"),secondary:"Humidity"})]}),Object(j.jsxs)(y.a,{children:[Object(j.jsx)(k.a,{children:Object(j.jsx)(W.a,{children:Object(j.jsx)(S.a,{})})}),Object(j.jsx)(C.a,{primary:"".concat(c.speed,"m/s"),secondary:"Wind"})]})]})})})})]})})},T=function(){var e=Object(a.useState)(null),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),i=Object(x.a)(c,2),s=i[0],l=i[1],u=Object(a.useState)("Getting location"),d=Object(x.a)(u,2),O=d[0],p=d[1],m=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(s.latitude,"&lon=").concat(s.longitude,"&appid=").concat("fd26fa84170da6ba612a200c1f56cf61","&units=metric")).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){l(e.coords)})):p("Please allow location to see weather")}),[]),Object(a.useEffect)((function(){s&&(p("Getting weather"),m())}),[s]),null===s||null===n?Object(j.jsx)(f,{label:O}):Object(j.jsx)(A,Object(o.a)({},n))},F=n(3),M=n(15),L=n(226),D=n(206);function H(e){var t=e.id,n=e.brand,r=e.weightUnits,c=e.price,i=e.onUpdate,o=Object(a.useMemo)((function(){return t=c,0!==(e=r)?(t/e).toFixed(2):"";var e,t}),[r,c]);return Object(j.jsx)(g.a,{elevation:2,sx:{p:4,m:1},children:Object(j.jsxs)(v.a,{container:!0,spacing:2,children:[Object(j.jsx)(v.a,{item:!0,xs:12,children:Object(j.jsx)(D.a,{fullWidth:!0,id:"inpBrand",label:"Brand",placeholder:"Eg: Unilever",variant:"standard",value:n,onChange:function(e){return i("brand",t,e.currentTarget.value)}})}),Object(j.jsx)(v.a,{item:!0,xs:6,children:Object(j.jsx)(D.a,{fullWidth:!0,type:"number",id:"inpWeightUnits",label:"Weight Units",variant:"standard",value:r,onChange:function(e){return i("weightUnits",t,e.currentTarget.value)}})}),Object(j.jsx)(v.a,{item:!0,xs:6,children:Object(j.jsx)(D.a,{fullWidth:!0,type:"number",id:"inpPrice",label:"Price",variant:"standard",value:c,onChange:function(e){return i("price",t,e.currentTarget.value)}})}),Object(j.jsx)(v.a,{item:!0,xs:12,children:Object(j.jsx)(D.a,{fullWidth:!0,type:"number",id:"inpPricePerUnit",label:"Price per unit",variant:"filled",contentEditable:!1,value:o})})]})})}var I=n(105),J=n.n(I),N=n(110),R=n(215),$=n(4),_=n(222),q=n(205),K=n(224),Q=n(225),V=n(223),X=n(103),Y=n.n(X),Z=Object($.a)(_.a)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}})),ee=function(e){var t=e.children,n=e.onClose,a=Object(N.a)(e,["children","onClose"]);return Object(j.jsxs)(q.a,Object(o.a)(Object(o.a)({sx:{m:0,p:2}},a),{},{children:[t,n?Object(j.jsx)(V.a,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(j.jsx)(Y.a,{})}):null]}))};function te(e){var t=e.open,n=e.handleClose;return Object(j.jsx)("div",{children:Object(j.jsxs)(Z,{onClose:n,"aria-labelledby":"customized-dialog-title",open:t,children:[Object(j.jsx)(ee,{id:"customized-dialog-title",onClose:n,children:"How to use?"}),Object(j.jsx)(K.a,{dividers:!0,children:Object(j.jsx)(m.a,{gutterBottom:!0,children:"This can calculate price per unit of a brand and add more brands using add button. It can be usefull while having 2 brands where calculating value for money is difficult while on a super market. Eg: Unilever Product costs 19 for 135 grams and Palmolive costs 27.5 for 175 grams, which one is worthy?"})}),Object(j.jsx)(Q.a,{children:Object(j.jsx)(R.a,{autoFocus:!0,onClick:n,children:"Close"})})]})})}var ne=n(104),ae=n.n(ne),re=function(e){return{id:e,brand:String.fromCharCode(97+e),weightUnits:0,price:0,pricePerUnit:0}},ce={position:"absolute",bottom:16,right:16};var ie=function(){var e=Object(a.useState)([re(0)]),t=Object(x.a)(e,2),n=t[0],c=t[1],i=r.a.useState(!1),s=Object(x.a)(i,2),l=s[0],u=s[1],d=Object(a.useCallback)((function(){u(!0)}),[]),b=Object(a.useCallback)((function(){u(!1)}),[]),h=Object(a.useCallback)((function(e,t,a){var r=Object(M.a)(n);r[t]=Object(o.a)(Object(o.a)({},r[t]),{},Object(F.a)({},e,a)),c(r)}),[n]),p=Object(a.useCallback)((function(){var e=[].concat(Object(M.a)(n),[re(n.length)]);console.log(e,"brs"),c(e)}),[n]);return Object(j.jsxs)(O.a,{sx:{flexGrow:1,p:4},children:[n.map((function(e){return Object(j.jsx)(H,Object(o.a)(Object(o.a)({},e),{},{onUpdate:h}),e.id)})),Object(j.jsx)(te,{open:l,handleClose:b}),Object(j.jsxs)(O.a,{sx:Object(o.a)({"& > :not(style)":{m:1}},ce),children:[Object(j.jsx)(L.a,{color:"secondary","aria-label":"add",onClick:d,children:Object(j.jsx)(ae.a,{})}),Object(j.jsx)(L.a,{color:"primary","aria-label":"add",onClick:p,children:Object(j.jsx)(J.a,{})})]})]})},oe=[{path:"/",exact:!0,inner:!0,component:ie},{path:"/home",inner:!0,component:ie},{path:"/weather",exact:!0,inner:!0,component:T},{path:"/brandcompare",exact:!0,inner:!0,component:ie},{path:"*",component:u}],se=n(227),le=n(229),je=n(109),ue=n(106),de=n.n(ue),be=n(228),he=n(212),xe=[{name:"Brand Price Compare",path:"/brandcompare"},{name:"Weather",path:"/weather"}],Oe=function(){var e=a.useState(null),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(s.f)(),i=function(e){e&&c.push(e.path),r(null)};return Object(j.jsx)(se.a,{position:"static",children:Object(j.jsx)(be.a,{maxWidth:"xl",children:Object(j.jsxs)(le.a,{disableGutters:!0,children:[Object(j.jsx)(m.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"#Labs"}),Object(j.jsxs)(O.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(j.jsx)(V.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(j.jsx)(de.a,{})}),Object(j.jsx)(je.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:i,sx:{display:{xs:"block",md:"none"}},children:xe.map((function(e){return Object(j.jsx)(he.a,{onClick:function(){return i(e)},children:Object(j.jsx)(m.a,{textAlign:"center",children:e.name})},e.name)}))})]}),Object(j.jsx)(m.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"#Labs"}),Object(j.jsx)(O.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:xe.map((function(e){return Object(j.jsx)(R.a,{onClick:function(){return i(e)},sx:{my:2,color:"white",display:"block"},children:e.name},e.name)}))})]})})})},pe=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Oe,{}),Object(j.jsx)("div",{className:"inner-page open",children:e.children})]})},me=function(e){return console.log("render layout",e.inner),e.inner?Object(j.jsx)(pe,{children:e.children}):Object(j.jsx)(j.Fragment,{children:e.children})},fe=function(e){return console.log(e,"rout"),Object(j.jsx)(me,{inner:e.inner,children:Object(j.jsx)(s.a,{path:e.path,render:function(t){return Object(j.jsx)(e.component,Object(o.a)(Object(o.a)({},t),{},{routes:e.routes}))}})})},ge=function(){return Object(j.jsx)(l.a,{children:Object(j.jsx)(s.c,{children:oe.map((function(e,t){return Object(j.jsx)(fe,Object(o.a)({},e),t)}))})})},ve=n(108),we=n(211),ye=n(40),Ce=n(39),ke=Object(ve.a)({palette:{primary:Ce.a,secondary:ye.a}}),We=function(){return Object(j.jsx)(we.a,{theme:ke,children:Object(j.jsx)(ge,{})})},Be=n(59);function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var Se=Object(Be.b)("counter/fetchCount",function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ge=Object(Be.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(Se.pending,(function(e){e.status="loading"})).addCase(Se.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),Ue=Ge.actions,ze=(Ue.increment,Ue.decrement,Ue.incrementByAmount,Ge.reducer),Ee=Object(Be.a)({reducer:{counter:ze}}),Ae=n(107);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Ae.a,{store:Ee,children:Object(j.jsx)(We,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[144,1,2]]]);
//# sourceMappingURL=main.891b75e2.chunk.js.map