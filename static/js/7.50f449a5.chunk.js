(this["webpackJsonphash-labs"]=this["webpackJsonphash-labs"]||[]).push([[7],{234:function(e,t,a){"use strict";a.r(t);var c=a(52),n=a(194),r=a.n(n),i=a(196),o=a(14),s=a(0),j=a(181),l=a(239),b=a(176),u=a(1),x=function(e){var t=e.label;return Object(u.jsxs)(j.a,{sx:{flexGrow:1,p:2,textAlign:"center"},children:[Object(u.jsx)(l.a,{color:"primary"}),Object(u.jsx)(b.a,{variant:"body1",gutterBottom:!0,children:t})]})},d=a(178),h=a(202),O=a(184),p=a(235),f=a(226),m=a(240),g=a(238),v=a(225),w=a(227),y=a(228),G=a(222),S=a(223),k=a(224),z=function(e){var t=e.name.toLowerCase();return t.search("cloud")>-1?Object(u.jsx)(G.a,{color:"primary",fontSize:"large"}):t.search("rain")>-1?Object(u.jsx)(S.a,{color:"primary",fontSize:"large"}):t.search("snow")>-1?Object(u.jsx)(k.a,{color:"primary",fontSize:"large"}):Object(u.jsx)(v.a,{color:"primary",fontSize:"large"})},B=function(e){var t=e.name,a=e.sys,c=e.weather,n=e.main,r=e.wind,i=n?"".concat(n.temp,"\xb0C"):"";return Object(u.jsx)(j.a,{sx:{flexGrow:1,p:4},children:Object(u.jsxs)(h.a,{container:!0,spacing:3,children:[Object(u.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(u.jsx)(d.a,{elevation:3,variant:"outlined",children:Object(u.jsxs)(j.a,{sx:{flexGrow:1,p:2,textAlign:"center"},children:[Object(u.jsxs)(b.a,{variant:"h4",gutterBottom:!0,component:"div",children:[t,",",a.country]}),Object(u.jsxs)(j.a,{sx:{flexGrow:1,p:4},children:[Object(u.jsx)(b.a,{variant:"h5",gutterBottom:!0,component:"div",children:c[0].description}),Object(u.jsx)(z,{name:c[0].main}),Object(u.jsx)(b.a,{variant:"h5",gutterBottom:!0,component:"div",children:i})]})]})})}),Object(u.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(u.jsx)(d.a,{elevation:3,variant:"outlined",children:Object(u.jsx)(j.a,{sx:{flexGrow:1,p:2},children:Object(u.jsxs)(O.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(g.a,{children:Object(u.jsx)(v.a,{})})}),Object(u.jsx)(f.a,{primary:i,secondary:"Feels like ".concat(n.feels_like,"\xb0C")})]}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(g.a,{children:Object(u.jsx)(w.a,{})})}),Object(u.jsx)(f.a,{primary:"".concat(n.humidity,"%"),secondary:"Humidity"})]}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(g.a,{children:Object(u.jsx)(y.a,{})})}),Object(u.jsx)(f.a,{primary:"".concat(r.speed,"m/s"),secondary:"Wind"})]})]})})})})]})})};t.default=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],j=Object(s.useState)(null),l=Object(o.a)(j,2),b=l[0],d=l[1],h=Object(s.useState)("Getting location"),O=Object(o.a)(h,2),p=O[0],f=O[1],m=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(b.latitude,"&lon=").concat(b.longitude,"&appid=").concat("fd26fa84170da6ba612a200c1f56cf61","&units=metric")).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){d(e.coords)})):f("Please allow location to see weather")}),[]),Object(s.useEffect)((function(){b&&(f("Getting weather"),m())}),[b]),null===b||null===a?Object(u.jsx)(x,{label:p}):Object(u.jsx)(B,Object(c.a)({},a))}}}]);
//# sourceMappingURL=7.50f449a5.chunk.js.map