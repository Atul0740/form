(this.webpackJsonpforms=this.webpackJsonpforms||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),s=a(5),r=a.n(s),n=(a(14),a(2)),u=(a(15),a(3)),o=a(4),d=a(1),b=[{label:"1st",value:"1st"},{label:"2nd",value:"2nd"},{label:"3rd",value:"3rd"},{label:"4th",value:"4th"},{label:"5th",value:"5th"},{label:"6th",value:"6th"},{label:"7th",value:"7th"},{label:"8th",value:"8th"},{label:"9th",value:"9th"},{label:"10th",value:"10th"},{label:"11th",value:"11th"},{label:"12th",value:"12th"}],i=[{label:"2021",value:"2021"},{label:"2022",value:"2022"},{label:"2023",value:"2023"},{label:"2024",value:"2024"},{label:"2025",value:"2025"},{label:"2026",value:"2026"},{label:"2027",value:"2027"},{label:"2028",value:"2028"},{label:"2029",value:"2029"},{label:"2030",value:"2030"},{label:"2031",value:"2031"},{label:"2032",value:"2032"},{label:"2033",value:"2033"}],j=[{label:"Other",value:"0th"},{label:"Science",value:"Science"},{label:"Arts",value:"Arts"},{label:"Commerce",value:"Commerce"}],y=function(){function e(e){return Object(u.a)(Object(u.a)({},e),{},{colors:Object(u.a)({},e.colors)})}var t={control:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{color:"#fff",background:"#eee",borderRadius:"10px"})},menu:function(e){return Object(u.a)(Object(u.a)({},e),{},{borderRadius:"10px",marginTop:0})},menuList:function(e){return Object(u.a)(Object(u.a)({},e),{},{padding:0,borderRadius:"10px"})}},a=Object(l.useState)(""),c=Object(n.a)(a,2),s=c[0],r=c[1],y=Object(l.useState)(""),m=Object(n.a)(y,2),O=m[0],v=m[1],h=Object(l.useState)(""),p=Object(n.a)(h,2),x=p[0],g=p[1],E=Object(l.useState)("."),f=Object(n.a)(E,2),C=f[0],S=f[1],B=Object(l.useState)("."),I=Object(n.a)(B,2),N=I[0],Y=I[1],k=Object(l.useState)(!1),P=Object(n.a)(k,2),A=P[0],M=P[1],R=Object(l.useState)(!1),D=Object(n.a)(R,2),L=D[0],T=D[1],z=Object(l.useState)("."),F=Object(n.a)(z,2),w=F[0],J=F[1],G=Object(l.useState)(""),q=Object(n.a)(G,2),H=q[0],K=q[1];return Object(d.jsxs)("div",{className:"school-menu menu",id:"school-menu","data-aos":"zoom-in",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Class"}),Object(d.jsx)(o.a,{options:b,className:"select",onChange:function(e){r(e.value),S("."),document.getElementById("classErr").style.display="none","11th"===e.value||"12th"===e.value?(M(!0),document.getElementById("stream-menu").style.display="block"):(M(!1),document.getElementById("stream-menu").style.display="none")},theme:e,styles:t}),Object(d.jsx)("div",{className:"error",id:"classErr",children:C})]}),Object(d.jsxs)("div",{id:"stream-menu",children:[Object(d.jsx)("p",{children:"Please Select Your Stream"}),Object(d.jsx)(o.a,{options:j,className:"select",onChange:function(e){v(e.value),J("."),document.getElementById("streamErr").style.display="none","0th"===e.value?(T(!0),document.getElementById("input3").style.display="block"):(T(!1),document.getElementById("input3").style.display="none")},theme:e,styles:t}),Object(d.jsx)("input",{type:"text",placeholder:"Please type your Stream...",className:"input",id:"input3",onChange:function(e){K(e.value),J("."),document.getElementById("streamErr").style.display="none"}}),Object(d.jsx)("div",{className:"error",id:"streamErr",children:w})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select School Completion Year"}),Object(d.jsx)(o.a,{options:i,className:"select",onChange:function(e){g(e.value),Y("."),document.getElementById("compErr").style.display="none"},theme:e,styles:t}),Object(d.jsx)("div",{className:"error",id:"compErr",children:N})]}),Object(d.jsx)("button",{className:"btn","data-aos":"flip-right","data-aos-delay":"200",onClick:function(e){(""===s||""===x?(""===s&&(S("You have not selected your Class"),document.getElementById("classErr").style.display="block"),""===x&&(Y("You have not selected your Completion Year"),document.getElementById("compErr").style.display="block"),0):!0===A&&""===O?(J("You have not selected your stream"),document.getElementById("streamErr").style.display="block",0):!0!==L||""!==H||(J("You have not entered your stream"),document.getElementById("streamErr").style.display="block",0))||e.preventDefault()},children:"Continue"})]})},m=[{label:"1yr",value:"1yr"},{label:"2yrs",value:"2yrs"},{label:"3yrs",value:"3yrs"},{label:"4yrs",value:"4yrs"},{label:"5yrs",value:"5yrs"}],O=[{label:"1st year",value:"1st year"},{label:"2nd year",value:"2nd year"},{label:"3rd year",value:"3rd year"},{label:"4th year",value:"4th year"},{label:"5th year",value:"5th year"}],v=[{label:"2021",value:"2021"},{label:"2022",value:"2022"},{label:"2023",value:"2023"},{label:"2024",value:"2024"},{label:"2025",value:"2025"},{label:"2026",value:"2026"}],h=[{label:"Other",value:"0th"},{label:"B.A.",value:"BA"},{label:"B.Com.",value:"BCom"},{label:"B.Sc.",value:"BSc"},{label:"B.Tech.",value:"BTech"},{label:"LLB",value:"LLB"},{label:"BBA",value:"BBA"}],p=function(){var e={control:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{color:"#fff",background:"#eee",borderRadius:"10px"})},menu:function(e){return Object(u.a)(Object(u.a)({},e),{},{borderRadius:"10px",marginTop:0})},menuList:function(e){return Object(u.a)(Object(u.a)({},e),{},{padding:0,borderRadius:"10px"})}},t=Object(l.useState)(""),a=Object(n.a)(t,2),c=a[0],s=a[1],r=Object(l.useState)(""),b=Object(n.a)(r,2),i=b[0],j=b[1],y=Object(l.useState)(""),p=Object(n.a)(y,2),x=p[0],g=p[1],E=Object(l.useState)(""),f=Object(n.a)(E,2),C=f[0],S=f[1],B=Object(l.useState)("."),I=Object(n.a)(B,2),N=I[0],Y=I[1],k=Object(l.useState)("."),P=Object(n.a)(k,2),A=P[0],M=P[1],R=Object(l.useState)("."),D=Object(n.a)(R,2),L=D[0],T=D[1],z=Object(l.useState)("."),F=Object(n.a)(z,2),w=F[0],J=F[1],G=Object(l.useState)(!1),q=Object(n.a)(G,2),H=q[0],K=q[1],Q=Object(l.useState)(""),U=Object(n.a)(Q,2),V=U[0],W=U[1];return Object(d.jsxs)("div",{className:"undergraduate-menu menu",id:"ug-menu","data-aos":"zoom-in",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course"}),Object(d.jsx)(o.a,{options:h,className:"select",styles:e,onChange:function(e){s(e.value),Y("."),document.getElementById("courseErr").style.display="none","0th"===e.value?(K(!0),document.getElementById("input4").style.display="block"):(K(!1),document.getElementById("input4").style.display="none")}}),Object(d.jsx)("input",{type:"text",placeholder:"Please type your Course...",className:"input",id:"input4",onChange:function(e){W(e.value),Y("."),document.getElementById("courseErr").style.display="none"}}),Object(d.jsx)("div",{className:"error",id:"courseErr",children:N})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course Duration"}),Object(d.jsx)(o.a,{options:m,className:"select",styles:e,onChange:function(e){S(e.value),J("."),document.getElementById("durErr").style.display="none"}}),Object(d.jsx)("div",{className:"error",id:"durErr",children:w})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Current Year"}),Object(d.jsx)(o.a,{options:O,className:"select",styles:e,onChange:function(e){g(e.value),T("."),document.getElementById("currErr").style.display="none"}}),Object(d.jsx)("div",{className:"error",id:"currErr",children:L})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course Completion Year"}),Object(d.jsx)(o.a,{options:v,className:"select",styles:e,onChange:function(e){j(e.value),M("."),document.getElementById("compErr").style.display="none"}}),Object(d.jsx)("div",{className:"error",id:"compErr",children:A})]}),Object(d.jsx)("button",{className:"btn",onClick:function(e){(""===c||""===i||""===C||""===x?(""===c&&(Y("You have not selected your Course"),document.getElementById("courseErr").style.display="block"),""===i&&(M("You have not selected your Completion Year"),document.getElementById("compErr").style.display="block"),""===C&&(J("You have not selected your Course Duration"),document.getElementById("durErr").style.display="block"),""===x&&(T("You have not selected your Current Year"),document.getElementById("currErr").style.display="block"),0):!0!==H||""!==V||(Y("You have not entered your Course"),document.getElementById("courseErr").style.display="block",0))||e.preventDefault()},children:"Continue"})]})},x=[{label:"1yr",value:"1yr"},{label:"2yrs",value:"2yrs"},{label:"3yrs",value:"3yrs"},{label:"4yrs",value:"4yrs"},{label:"5yrs",value:"5yrs"}],g=[{label:"1st year",value:"1st year"},{label:"2nd year",value:"2nd year"},{label:"3rd year",value:"3rd year"},{label:"4th year",value:"4th year"},{label:"5th year",value:"5th year"}],E=[{label:"2021",value:"2021"},{label:"2022",value:"2022"},{label:"2023",value:"2023"},{label:"2024",value:"2024"},{label:"2025",value:"2025"},{label:"2026",value:"2026"}],f=[{label:"Other",value:"0th"},{label:"M.A.",value:"MA"},{label:"M.Com.",value:"MCom"},{label:"M.Sc.",value:"MSc"},{label:"M.Tech.",value:"MTech"},{label:"MBA",value:"MBA"}],C=function(){var e={control:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{color:"#fff",background:"#eee",borderRadius:"10px"})},menu:function(e){return Object(u.a)(Object(u.a)({},e),{},{borderRadius:"10px",marginTop:0})},menuList:function(e){return Object(u.a)(Object(u.a)({},e),{},{padding:0,borderRadius:"10px"})}},t=Object(l.useState)(""),a=Object(n.a)(t,2),c=a[0],s=a[1],r=Object(l.useState)(""),b=Object(n.a)(r,2),i=b[0],j=b[1],y=Object(l.useState)(""),m=Object(n.a)(y,2),O=m[0],v=m[1],h=Object(l.useState)(""),p=Object(n.a)(h,2),C=p[0],S=p[1],B=Object(l.useState)("."),I=Object(n.a)(B,2),N=I[0],Y=I[1],k=Object(l.useState)("."),P=Object(n.a)(k,2),A=P[0],M=P[1],R=Object(l.useState)("."),D=Object(n.a)(R,2),L=D[0],T=D[1],z=Object(l.useState)("."),F=Object(n.a)(z,2),w=F[0],J=F[1],G=Object(l.useState)(!1),q=Object(n.a)(G,2),H=q[0],K=q[1],Q=Object(l.useState)(""),U=Object(n.a)(Q,2),V=U[0],W=U[1];return Object(d.jsxs)("div",{className:"graduate-menu menu",id:"grad-menu","data-aos":"zoom-in",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course"}),Object(d.jsx)(o.a,{options:f,className:"select",styles:e,onChange:function(e){s(e.value),Y("."),document.getElementById("courseErr").style.display="none","0th"===e.value?(K(!0),document.getElementById("input8").style.display="block"):(K(!1),document.getElementById("input8").style.display="none")}}),Object(d.jsx)("input",{type:"text",placeholder:"Please type your Course...",className:"input",id:"input8",onChange:function(e){W(e.value),Y("."),document.getElementById("courseErr").style.display="none"}}),Object(d.jsx)("div",{className:"error",id:"courseErr",children:N})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course Duration"}),Object(d.jsx)(o.a,{options:x,className:"select",styles:e,onChange:function(e){S(e.value),J("."),document.getElementById("durErr").style.display="none"}}),Object(d.jsx)("div",{className:"error",id:"durErr",children:w})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Current Year"}),Object(d.jsx)(o.a,{options:g,className:"select",styles:e,onChange:function(e){v(e.value),T("."),document.getElementById("currErr").style.display="none"}}),Object(d.jsx)("div",{className:"error",id:"currErr",children:L})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course Completion Year"}),Object(d.jsx)(o.a,{options:E,className:"select",styles:e,onChange:function(e){j(e.value),M("."),document.getElementById("compErr").style.display="none"}}),Object(d.jsx)("div",{className:"error",id:"compErr",children:A})]}),Object(d.jsx)("button",{className:"btn",onClick:function(e){(""===c||""===i||""===C||""===O?(""===c&&(Y("You have not selected your Course"),document.getElementById("courseErr").style.display="block"),""===i&&(M("You have not selected your Completion Year"),document.getElementById("compErr").style.display="block"),""===C&&(J("You have not selected your Course Duration"),document.getElementById("durErr").style.display="block"),""===O&&(T("You have not selected your Current Year"),document.getElementById("currErr").style.display="block"),0):!0!==H||""!==V||(Y("You have not entered your Course"),document.getElementById("courseErr").style.display="block",0))||e.preventDefault()},children:"Continue"})]})};var S=function(){var e=Object(l.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(l.useState)(!1),r=Object(n.a)(s,2),u=r[0],o=r[1],b=Object(l.useState)(!1),i=Object(n.a)(b,2),j=i[0],m=i[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("form",{className:"form","data-aos":"zoom-in",children:[Object(d.jsx)("p",{className:"title",children:"Please select your academics"}),Object(d.jsxs)("div",{className:"radio-toolbar","data-aos":"fade-right","data-aos-delay":"500",children:[Object(d.jsx)("input",{type:"radio",id:"school",name:"academics",value:"school",onChange:function(){c(!0),o(!1),m(!1)}}),Object(d.jsx)("label",{htmlFor:"school",children:"School"}),Object(d.jsx)("input",{type:"radio",id:"undergraduate",name:"academics",value:"undergraduate",onChange:function(){c(!1),o(!0),m(!1)}}),Object(d.jsx)("label",{htmlFor:"undergraduate",children:"Graduate"}),Object(d.jsx)("input",{type:"radio",id:"graduate",name:"academics",value:"graduate",onChange:function(){c(!1),o(!1),m(!0)}}),Object(d.jsx)("label",{htmlFor:"graduate",children:"Post-graduate"})]}),Object(d.jsxs)("div",{children:[a&&Object(d.jsx)(y,{}),u&&Object(d.jsx)(p,{}),j&&Object(d.jsx)(C,{})]})]})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.eeb95ff1.chunk.js.map