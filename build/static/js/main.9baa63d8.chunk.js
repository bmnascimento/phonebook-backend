(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=t(14),l=t(2),i=t(3),d=t.n(i),m="/api/persons",f=function(){return d.a.get(m).then((function(e){return e.data}))},s=function(e){return d.a.post(m,e).then((function(e){return e.data}))},b=function(e,n){return d.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return d.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},g=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:e.value,onChange:e.onChange}))},v=function(e){var n=e.message;if(null===n)return null;return r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},p=function(e){var n=e.message;if(null===n)return null;return r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},E=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),d=i[0],m=i[1],E=Object(a.useState)(""),w=Object(l.a)(E,2),j=w[0],O=w[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],C=k[1],T=Object(a.useState)(null),B=Object(l.a)(T,2),z=B[0],J=B[1],R=Object(a.useState)(null),x=Object(l.a)(R,2),D=x[0],I=x[1];Object(a.useEffect)((function(){f().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:z}),r.a.createElement(p,{message:D}),r.a.createElement(g,{value:y,onChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===d}));void 0!==n?window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&b(n.id,Object(c.a)({},n,{number:j})).then((function(e){u(t.map((function(t){return t.id!==n.id?t:e}))),J("".concat(d," number changed!")),setTimeout((function(){return J(null)}),3e3)})).catch((function(e){I("Couldn't change ".concat(d,"'s number")),setTimeout((function(){return I(null)}),3e3)})):s({name:d,number:j}).then((function(e){console.log("saved persons"),u(t.concat(e)),J("".concat(d," added!")),setTimeout((function(){return J(null)}),3e3)})).catch((function(){window.alert("failed to add person")})),m(""),O("")}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:d,onChange:function(e){m(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:j,onChange:function(e){O(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))),r.a.createElement("h2",null,"Numbers"),t.filter((function(e){return e.name.toLowerCase().includes(y)})).map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return n=e.name,a=e.id,void(window.confirm("delete ".concat(n,"?"))&&h(a).then((function(){u(t.filter((function(e){return e.id!==a}))),J("".concat(n," deleted!")),setTimeout((function(){return J(null)}),3e3)})).catch((function(){return window.alert("couldn't delete ".concat(n))})));var n,a}},"delete"))})))};t(37);o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9baa63d8.chunk.js.map