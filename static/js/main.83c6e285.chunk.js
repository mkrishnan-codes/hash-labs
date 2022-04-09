(this["webpackJsonphash-labs"]=this["webpackJsonphash-labs"]||[]).push([[0],{108:function(e,n,t){},119:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(30),i=t.n(a),o=(t(108),t(62)),s=t(16),l=t(73),j=t(1),d=function(){var e=Object(s.f)();return Object(j.jsx)("div",{children:Object(j.jsxs)("h3",{children:["Page not found",Object(j.jsx)("code",{children:e.pathname})]})})},u=t(44),h=t.n(u),x=t(58),b=t(14),p=t(182),m=t(183),O=t(179),f=t(65),v=t(184),g=t(175),y=t(169),w=t(185),k=t(180),C=t(160),G=t(165),S=t(166),z=t(167),B=t(170),W=t(171),A={coord:{lon:77.6729,lat:12.8985},weather:[{id:802,main:"Clouds",description:"-",icon:"03d"}],base:"stations",main:{temp:306.29,feels_like:306.15,temp_min:305.21,temp_max:306.76,pressure:1013,humidity:35},visibility:8e3,wind:{speed:2.06,deg:0},clouds:{all:40},dt:1649489961,sys:{type:1,id:9205,country:" ",sunrise:1649464826,sunset:1649509266},timezone:19800,id:1277333,name:"Getting Info",cod:200},E=function(e){var n=e.name.toLowerCase();return n.search("cloud")>-1?Object(j.jsx)(C.a,{color:"primary",fontSize:"large"}):n.search("rain")>-1?Object(j.jsx)(G.a,{color:"primary",fontSize:"large"}):n.search("snow")>-1?Object(j.jsx)(S.a,{color:"primary",fontSize:"large"}):Object(j.jsx)(z.a,{color:"primary",fontSize:"large"})},_=function(){var e=Object(c.useState)(A),n=Object(b.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(null),i=Object(b.a)(a,2),o=i[0],s=i[1],l=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(o.latitude,"&lon=").concat(o.longitude,"&appid=").concat("fd26fa84170da6ba612a200c1f56cf61","&units=metric")).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){s(e.coords)})):console.log("No location")}),[]),Object(c.useEffect)((function(){o&&l()}),[o]);var d=t?"".concat(t.main.temp,"\xb0C"):"";return Object(j.jsx)(p.a,{sx:{flexGrow:1,p:4},children:Object(j.jsxs)(O.a,{container:!0,spacing:3,children:[Object(j.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(j.jsx)(m.a,{elevation:3,variant:"outlined",children:Object(j.jsxs)(p.a,{sx:{flexGrow:1,p:2,textAlign:"center"},children:[Object(j.jsxs)(f.a,{variant:"h4",gutterBottom:!0,component:"div",children:[t.name,",",t.sys.country]}),Object(j.jsxs)(p.a,{sx:{flexGrow:1,p:4},children:[Object(j.jsx)(f.a,{variant:"h5",gutterBottom:!0,component:"div",children:t.weather[0].description}),Object(j.jsx)(E,{name:t.weather[0].main}),Object(j.jsx)(f.a,{variant:"h5",gutterBottom:!0,component:"div",children:d})]})]})})}),Object(j.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(j.jsx)(m.a,{elevation:3,variant:"outlined",children:Object(j.jsx)(p.a,{sx:{flexGrow:1,p:2},children:Object(j.jsxs)(v.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(j.jsxs)(g.a,{children:[Object(j.jsx)(w.a,{children:Object(j.jsx)(k.a,{children:Object(j.jsx)(z.a,{})})}),Object(j.jsx)(y.a,{primary:d,secondary:"Feels like ".concat(t.main.feels_like,"\xb0C")})]}),Object(j.jsxs)(g.a,{children:[Object(j.jsx)(w.a,{children:Object(j.jsx)(k.a,{children:Object(j.jsx)(B.a,{})})}),Object(j.jsx)(y.a,{primary:"".concat(t.main.humidity,"%"),secondary:"Humidity"})]}),Object(j.jsxs)(g.a,{children:[Object(j.jsx)(w.a,{children:Object(j.jsx)(k.a,{children:Object(j.jsx)(W.a,{})})}),Object(j.jsx)(y.a,{primary:"".concat(A.wind.speed,"m/s"),secondary:"Wind"})]})]})})})})]})})},F=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(_,{})})},L=[{path:"/",exact:!0,inner:!0,component:F},{path:"/home",inner:!0,component:F},{path:"*",component:d}],P=t(186),I=t(188),J=t(189),M=t(173),N=t(89),T=t.n(N),H=t(187),R=t(181),$=t(178),q=["Weather"],D=function(){var e=c.useState(null),n=Object(b.a)(e,2),t=n[0],r=n[1],a=function(){r(null)};return Object(j.jsx)(P.a,{position:"static",children:Object(j.jsx)(H.a,{maxWidth:"xl",children:Object(j.jsxs)(I.a,{disableGutters:!0,children:[Object(j.jsx)(f.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"#Labs"}),Object(j.jsxs)(p.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(j.jsx)(J.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(j.jsx)(T.a,{})}),Object(j.jsx)(M.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(t),onClose:a,sx:{display:{xs:"block",md:"none"}},children:q.map((function(e){return Object(j.jsx)($.a,{onClick:a,children:Object(j.jsx)(f.a,{textAlign:"center",children:e})},e)}))})]}),Object(j.jsx)(f.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"#Labs"}),Object(j.jsx)(p.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:q.map((function(e){return Object(j.jsx)(R.a,{onClick:a,sx:{my:2,color:"white",display:"block"},children:e},e)}))})]})})})},K=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D,{}),Object(j.jsx)("div",{className:"inner-page open",children:e.children})]})},Q=function(e){return console.log("render layout",e.inner),e.inner?Object(j.jsx)(K,{children:e.children}):Object(j.jsx)(j.Fragment,{children:e.children})},U=function(e){return console.log(e,"rout"),Object(j.jsx)(Q,{inner:e.inner,children:Object(j.jsx)(s.a,{path:e.path,render:function(n){return Object(j.jsx)(e.component,Object(o.a)(Object(o.a)({},n),{},{routes:e.routes}))}})})},V=function(){return Object(j.jsx)(l.a,{children:Object(j.jsx)(s.c,{children:L.map((function(e,n){return Object(j.jsx)(U,Object(o.a)({},e),n)}))})})},X=t(91),Y=t(177),Z=t(35),ee=t(34),ne=Object(X.a)({palette:{primary:ee.a,secondary:Z.a}}),te=function(){return Object(j.jsx)(Y.a,{theme:ne,children:Object(j.jsx)(V,{})})},ce=t(53);function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))}var ae=Object(ce.b)("counter/fetchCount",function(){var e=Object(x.a)(h.a.mark((function e(n){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),ie=Object(ce.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(ae.pending,(function(e){e.status="loading"})).addCase(ae.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),oe=ie.actions,se=(oe.increment,oe.decrement,oe.incrementByAmount,ie.reducer),le=Object(ce.a)({reducer:{counter:se}}),je=t(90);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(je.a,{store:le,children:Object(j.jsx)(te,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[119,1,2]]]);
//# sourceMappingURL=main.83c6e285.chunk.js.map