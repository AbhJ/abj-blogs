(this["webpackJsonpabj-blogs"]=this["webpackJsonpabj-blogs"]||[]).push([[3],{11:function(e,t,n){"use strict";n(0);var c=n(7),o=n(1),r={borderRadius:"0.25em",color:"#282c34",backgroundColor:"#61afef",fontSize:"1em",lineHeight:"1.375em",fontWeight:"bolder",fontFamily:"Roboto Mono",cursor:"pointer"};t.a=function(e){return"toHome"===e.className?Object(o.jsx)("div",{children:Object(o.jsx)("center",{children:Object(o.jsx)("button",{style:r,onClick:e.onClick,className:e.className,text:e.text,children:Object(o.jsx)(c.b,{to:"/abj-blogs/",style:{color:"#282c34"},children:e.text})})})}):"toggleButton"===e.className?Object(o.jsx)("div",{style:{margin:"0"},children:Object(o.jsx)("button",{style:r,onClick:e.onClick,className:e.className,text:e.text,children:e.text})}):Object(o.jsx)("div",{children:Object(o.jsx)("center",{children:Object(o.jsx)("button",{style:r,onClick:e.onClick,className:e.className,text:e.text,children:e.text})})})}},28:function(e,t,n){},38:function(e,t,n){var c={"./art1":[21,0],"./art1.js":[21,0],"./art2":[22,1],"./art2.js":[22,1],"./art3":[23,2],"./art3.js":[23,2]};function o(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(c)},o.id=38,e.exports=o},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(17),r=n.n(o),s=n(7),i=(n(28),n(13)),a=n(1),l=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("center",{children:[Object(a.jsx)(s.b,{to:"/abj-blogs/",children:Object(a.jsx)("h1",{children:e.title})}),Object(a.jsx)("h2",{children:e.description})]})})};l.defaultProps={title:"ABJ Blogs",description:"Blogs about Tech and Software",isHomePage:!0};var j=l,b=n(11),d=n(20),u=function(e){var t=e.blog;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:[t.id,") ",t.headLine,": ",Object(a.jsx)(s.b,{to:"/abj-blogs/blog"+t.id,children:"link"}),Object(a.jsxs)("span",{style:{float:"right",paddingRight:"1.25em"},className:"div-no-mobile",children:["created: ",t.day]})]}),Object(a.jsx)("hr",{})]})},h=function(e){var t=e.blogList;return Object(a.jsxs)("div",{style:{wordWrap:"break-word"},children:[Object(a.jsx)("hr",{}),t.map((function(e){return Object(a.jsx)(u,{blog:e},e.id)})),Object(a.jsx)("br",{})]})},x=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Some of my recent blogs are:"})})},O=function(){var e=Object(c.useState)([{id:3,headLine:"Languages of the future",day:"Aug 21 2021"},{id:2,headLine:"Internship at Salesforce",day:"Aug 20 2021"},{id:1,headLine:"A tribute to Kentaro Miura",day:"Jul 27 2021"}]),t=Object(i.a)(e,1)[0];return Object(a.jsxs)("div",{className:"Home",children:[Object(a.jsx)(x,{}),Object(a.jsx)(h,{blogList:t}),Object(a.jsx)(b.a,{text:"To Portfolio",className:"toPortfolio",onClick:function(){window.open("https://abhj.github.io/public-portfolio/","_self")}})]})},f=n(2),g=function(){return Object(a.jsxs)(f.c,{children:[" ",Object(a.jsx)(f.a,{exact:!0,path:"/abj-blogs/",component:O}),Object(a.jsx)(c.Suspense,{fallback:"",children:Object(d.a)(Array(10).keys()).map((function(e){var t=Object(c.lazy)((function(){return n(38)("./art".concat(e+1))}));return Object(a.jsx)(f.a,{exact:!0,path:"/abj-blogs/blog".concat(e+1),component:t},e+1)}))})]})},m=(n(39),function(){var e=localStorage.getItem("DARK_MODE"),t=Object(c.useState)(e),n=Object(i.a)(t,2),o=n[0],r=n[1];return localStorage.setItem("DARK_MODE",o),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b.a,{text:o?"Light Mode":"Dark Mode",className:"toggleButton",onClick:function(){r(!o)}}),Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"Main","data-theme":o?"dark":"light",children:Object(a.jsx)(g,{})})]})}),p=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};r.a.render(Object(a.jsx)(s.a,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),p()}},[[40,4,5]]]);
//# sourceMappingURL=main.6e1b5a31.chunk.js.map