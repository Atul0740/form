(this.webpackJsonpforms=this.webpackJsonpforms||[]).push([[0],{14:function(e,l,a){},15:function(e,l,a){},33:function(e,l,a){"use strict";a.r(l);var t=a(0),s=a.n(t),c=a(4),n=a.n(c),u=(a(14),a(3)),r=a(7),o=(a(15),a(2)),d=a(1),b=[{label:"1st",value:"1st"},{label:"2nd",value:"2nd"},{label:"3rd",value:"3rd"},{label:"4th",value:"4th"},{label:"5th",value:"5th"},{label:"6th",value:"6th"},{label:"7th",value:"7th"},{label:"8th",value:"8th"},{label:"9th",value:"9th"},{label:"10th",value:"10th"},{label:"11th",value:"11th"},{label:"12th",value:"12th"}],i=[{label:"2021",value:"2021"},{label:"2022",value:"2022"},{label:"2023",value:"2023"},{label:"2024",value:"2024"},{label:"2025",value:"2025"},{label:"2026",value:"2026"},{label:"2027",value:"2027"},{label:"2028",value:"2028"},{label:"2029",value:"2029"},{label:"2030",value:"2030"},{label:"2031",value:"2031"},{label:"2032",value:"2032"},{label:"2033",value:"2033"}],j=[{label:"Science",value:"Science"},{label:"Arts",value:"Arts"},{label:"Commerce",value:"Commerce"}],m=[{label:"1yr",value:"1yr"},{label:"2yrs",value:"2yrs"},{label:"3yrs",value:"3yrs"},{label:"4yrs",value:"4yrs"},{label:"5yrs",value:"5yrs"}],h=[{label:"1st year",value:"1st year"},{label:"2nd year",value:"2nd year"},{label:"3rd year",value:"3rd year"},{label:"4th year",value:"4th year"},{label:"5th year",value:"5th year"}],v=[{label:"2021",value:"2021"},{label:"2022",value:"2022"},{label:"2023",value:"2023"},{label:"2024",value:"2024"},{label:"2025",value:"2025"},{label:"2026",value:"2026"}],y=[{label:"B.A.",value:"B.A."},{label:"B.Com.",value:"B.Com."},{label:"B.Sc.",value:"B.Sc."},{label:"B.Tech.",value:"B.Tech"},{label:"LLB",value:"LLB"},{label:"BBA",value:"BBA"}],O=[{label:"2021",value:"2021"},{label:"2020",value:"2020"},{label:"2019",value:"2019"},{label:"2018",value:"2018"},{label:"2017",value:"2017"},{label:"2016",value:"2016"},{label:"2015",value:"2015"},{label:"2014",value:"2014"}];var x=function(){var e=Object(t.useState)(""),l=Object(r.a)(e,2),a=l[0],s=l[1],c={control:function(e,l){return Object(u.a)(Object(u.a)({},e),{},{color:"#fff",background:"rgba( 255, 255, 255, 0.25)",boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37)",borderRadius:"3px"})},menu:function(e){return Object(u.a)(Object(u.a)({},e),{},{borderRadius:"10px",marginTop:0})},menuList:function(e){return Object(u.a)(Object(u.a)({},e),{},{padding:0,borderRadius:"10px"})}},n=function(e){s(e.target.value)};Object(t.useEffect)((function(){"school"===a&&(document.getElementById("school-menu").style.display="flex",document.getElementById("ug-menu").style.display="none",document.getElementById("grad-menu").style.display="none"),"graduate"===a&&(document.getElementById("school-menu").style.display="none",document.getElementById("ug-menu").style.display="none",document.getElementById("grad-menu").style.display="flex"),"undergraduate"===a&&(document.getElementById("school-menu").style.display="none",document.getElementById("ug-menu").style.display="flex",document.getElementById("grad-menu").style.display="none")}),[a]);var x=Object(t.useState)(""),p=Object(r.a)(x,2),g=p[0],f=p[1];return Object(t.useEffect)((function(){document.getElementById("stream-menu").style.display="11th"===g||"12th"===g?"block":"none"}),[g]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("p",{children:"Please select your academics"}),Object(d.jsxs)("div",{className:"radio-toolbar",children:[Object(d.jsx)("input",{type:"radio",id:"graduate",name:"academics",value:"graduate",onChange:n}),Object(d.jsx)("label",{htmlFor:"graduate",children:"Graduate"}),Object(d.jsx)("input",{type:"radio",id:"undergraduate",name:"academics",value:"undergraduate",onChange:n}),Object(d.jsx)("label",{htmlFor:"undergraduate",children:"Undergraduate"}),Object(d.jsx)("input",{type:"radio",id:"school",name:"academics",value:"school",onChange:n}),Object(d.jsx)("label",{htmlFor:"school",children:"School"})]}),Object(d.jsxs)("div",{className:"school-menu menu",id:"school-menu",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Class"}),Object(d.jsx)(o.a,{options:b,className:"select",onChange:function(e){f(e.value),console.log(e.value),console.log(g)},styles:c})]}),Object(d.jsxs)("div",{id:"stream-menu",children:[Object(d.jsx)("p",{children:"Please Select Your Stream"}),Object(d.jsx)(o.a,{options:j,className:"select",styles:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select School Completion Year"}),Object(d.jsx)(o.a,{options:i,className:"select-this",styles:c})]})]}),Object(d.jsxs)("div",{className:"undergraduate-menu menu",id:"ug-menu",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course"}),Object(d.jsx)(o.a,{options:y,className:"select",styles:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course Duration"}),Object(d.jsx)(o.a,{options:m,className:"select",styles:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Current Year"}),Object(d.jsx)(o.a,{options:h,className:"select",styles:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course Completion Year"}),Object(d.jsx)(o.a,{options:v,className:"select-this",styles:c})]})]}),Object(d.jsxs)("div",{className:"graduate-menu menu",id:"grad-menu",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course"}),Object(d.jsx)(o.a,{options:y,className:"select",styles:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course Duration"}),Object(d.jsx)(o.a,{options:m,className:"select",styles:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Select Your Course Completion Year"}),Object(d.jsx)(o.a,{options:O,className:"select-this",styles:c})]})]}),Object(d.jsx)("button",{className:"btn",children:"Continue"})]})})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.fbb188bb.chunk.js.map