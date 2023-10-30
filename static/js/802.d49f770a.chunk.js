"use strict";(self.webpackChunkhash_labs=self.webpackChunkhash_labs||[]).push([[802],{3802:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(8489),i=t(3508),a=t(3032),o=t(3430),s=t(2791),c=t(4554),l=t(3239),u=t(890),d=t(184),x=function(e){var n=e.label;return(0,d.jsxs)(c.Z,{sx:{flexGrow:1,p:2,textAlign:"center"},children:[(0,d.jsx)(l.Z,{color:"primary"}),(0,d.jsx)(u.Z,{variant:"body1",gutterBottom:!0,children:n})]})},h=t(703),Z=t(1889),f=t(493),j=t(4852),p=t(9900),m=t(653),g=t(3044),v=t(1345),w=t(494),y=t(7471),b=t(3731),k=t(6250),P=t(9675),G=function(e){var n=e.name.toLowerCase();return n.search("cloud")>-1?(0,d.jsx)(b.Z,{color:"primary",fontSize:"large"}):n.search("rain")>-1?(0,d.jsx)(k.Z,{color:"primary",fontSize:"large"}):n.search("snow")>-1?(0,d.jsx)(P.Z,{color:"primary",fontSize:"large"}):(0,d.jsx)(v.Z,{color:"primary",fontSize:"large"})},S=function(e){var n=e.name,t=e.sys,r=e.weather,i=e.main,a=e.wind,o=i?"".concat(i.temp,"\xb0C"):"";return(0,d.jsx)(c.Z,{sx:{flexGrow:1,p:4},children:(0,d.jsxs)(Z.ZP,{container:!0,spacing:3,children:[(0,d.jsx)(Z.ZP,{item:!0,xs:12,md:4,children:(0,d.jsx)(h.Z,{elevation:3,variant:"outlined",children:(0,d.jsxs)(c.Z,{sx:{flexGrow:1,p:2,textAlign:"center"},children:[(0,d.jsxs)(u.Z,{variant:"h4",gutterBottom:!0,component:"div",children:[n,",",t.country]}),(0,d.jsxs)(c.Z,{sx:{flexGrow:1,p:4},children:[(0,d.jsx)(u.Z,{variant:"h5",gutterBottom:!0,component:"div",children:r[0].description}),(0,d.jsx)(G,{name:r[0].main}),(0,d.jsx)(u.Z,{variant:"h5",gutterBottom:!0,component:"div",children:o})]})]})})}),(0,d.jsx)(Z.ZP,{item:!0,xs:12,md:4,children:(0,d.jsx)(h.Z,{elevation:3,variant:"outlined",children:(0,d.jsx)(c.Z,{sx:{flexGrow:1,p:2},children:(0,d.jsxs)(f.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[(0,d.jsxs)(j.ZP,{children:[(0,d.jsx)(m.Z,{children:(0,d.jsx)(g.Z,{children:(0,d.jsx)(v.Z,{})})}),(0,d.jsx)(p.Z,{primary:o,secondary:"Feels like ".concat(i.feels_like,"\xb0C")})]}),(0,d.jsxs)(j.ZP,{children:[(0,d.jsx)(m.Z,{children:(0,d.jsx)(g.Z,{children:(0,d.jsx)(w.Z,{})})}),(0,d.jsx)(p.Z,{primary:"".concat(i.humidity,"%"),secondary:"Humidity"})]}),(0,d.jsxs)(j.ZP,{children:[(0,d.jsx)(m.Z,{children:(0,d.jsx)(g.Z,{children:(0,d.jsx)(y.Z,{})})}),(0,d.jsx)(p.Z,{primary:"".concat(a.speed,"m/s"),secondary:"Wind"})]})]})})})})]})})},C=function(){var e=(0,s.useState)(null),n=(0,o.Z)(e,2),t=n[0],c=n[1],l=(0,s.useState)(null),u=(0,o.Z)(l,2),h=u[0],Z=u[1],f=(0,s.useState)("Getting location"),j=(0,o.Z)(f,2),p=j[0],m=j[1],g=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(h.latitude,"&lon=").concat(h.longitude,"&appid=").concat("fd26fa84170da6ba612a200c1f56cf61","&units=metric")).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){Z(e.coords)})):m("Please allow location to see weather")}),[]),(0,s.useEffect)((function(){h&&(m("Getting weather"),g())}),[h]),null===h||null===t?(0,d.jsx)(x,{label:p}):(0,d.jsx)(S,(0,r.Z)({},t))}}}]);
//# sourceMappingURL=802.d49f770a.chunk.js.map