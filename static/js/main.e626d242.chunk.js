(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(12),o=n.n(s),i=(n(20),n(10)),u=n(14),j=n(5),l=n.n(j),d=n(7),h=n(4),b=n(6),p=n(2),f=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(r.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};f.defaultProps={color:"steelblue"};var O=f,x=function(e){var t=e.title,n=e.onAdd,c=e.showAdd,a=Object(p.e)();return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:t}),"/"===a.pathname&&Object(r.jsx)(O,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};x.defaultProps={title:"Task Tracker"};var m=x,k=function(){return Object(r.jsxs)("footer",{children:[Object(r.jsx)("p",{children:"Copyright \xa9 2021"}),Object(r.jsx)(b.b,{to:"/about",children:"About"})]})},v=n(13),y=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(r.jsxs)("div",{className:"task ".concat(t.reminder&&"reminder"),onDoubleClick:function(){return c(t.id)},children:[Object(r.jsxs)("h3",{children:[t.text," ",Object(r.jsx)(v.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(r.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(r.jsx)(r.Fragment,{children:t.map((function(e,t){return Object(r.jsx)(y,{task:e,onDelete:n,onToggle:c},t)}))})},T=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(h.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)(""),u=Object(h.a)(i,2),j=u[0],l=u[1],d=Object(c.useState)(!1),b=Object(h.a)(d,2),p=b[0],f=b[1];return Object(r.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s?(t({text:s,day:j,reminder:p}),o(""),l(""),f(!1)):alert("Please add a task")},children:[Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Task"}),Object(r.jsx)("input",{type:"text",placeholder:"Add Task",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Day & Time"}),Object(r.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:j,onChange:function(e){return l(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control form-control-check",children:[Object(r.jsx)("label",{children:"Set Reminder"}),Object(r.jsx)("input",{type:"checkbox",checked:p,value:p,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(r.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},w=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Version 1.0.0"}),Object(r.jsx)(b.b,{to:"/",children:"Go Back"})]})},C=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),o=Object(h.a)(s,2),j=o[0],f=o[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/RaphaelThorp/task-tracker");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/RaphaelThorp/task-tracker/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/RaphaelThorp/task-tracker",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,f([].concat(Object(u.a)(j),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/RaphaelThorp/task-tracker/".concat(t),{method:"DELETE"});case 2:200===e.sent.status?f(j.filter((function(e){return e.id!==t}))):alert("Error Deleting This Task");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("https://my-json-server.typicode.com/RaphaelThorp/task-tracker/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,f(j.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(b.a,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{onAdd:function(){return a(!n)},showAdd:n}),Object(r.jsxs)(p.c,{children:[Object(r.jsx)(p.a,{path:"/",element:Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsx)(T,{onAdd:v}),j.length>0?Object(r.jsx)(g,{tasks:j,onDelete:y,onToggle:C}):"No Tasks To Show"]})}),Object(r.jsx)(p.a,{path:"/about",element:Object(r.jsx)(w,{})})]}),Object(r.jsx)(k,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),S()}},[[22,1,2]]]);
//# sourceMappingURL=main.e626d242.chunk.js.map