(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{257:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(17),i=a(24),o=a(0),u=a.n(o),l=(a(122),a(198)),s=a(194),p=a(199),m=a(191),f=a(201),h=a(200),b=a(206),d=a(108),g=a(207),E=a(196),w=a(197),y=a(89),v=a.n(y),S=a(15),j=a(60),O=a(23),x=a(36),k=a(27),C=v()(function(e){return{root:{marginTop:"1rem",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),q=function(e){var t=Object(S.f)(),a=u.a.useState(!0),n=Object(i.a)(a,2),o=n[0],y=n[1],v=u.a.useState(""),x=Object(i.a)(v,2),q=(x[0],x[1],u.a.useState([])),F=Object(i.a)(q,2),K=F[0],N=F[1],P=u.a.useState(u.a.createElement(u.a.Fragment,null)),B=Object(i.a)(P,2),J=B[0],L=B[1],M=C(),T=function(){var t=Object(c.a)(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Object(d.b)(a.target.value).then(function(e){return N(e)}),K&&L(function(){return K.map(function(e,t){if(e)return u.a.createElement(g.a,{button:!0,key:t,component:j.b,to:"/search/results"},u.a.createElement(E.a,null,u.a.createElement(f.a,null)),u.a.createElement(w.a,{primary:"".concat(e.suggestion.attributes.data)}))})}),e.history.push({pathname:"search",search:"?"+new URLSearchParams({q:a.target.value}).toString()}),O.a.dispatch(Object(k.f)(a.target.value));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return u.a.createElement("div",{className:"SearchComponent"},u.a.createElement(l.a,{fullScreen:!0,open:o,onClose:function(){}},u.a.createElement(s.a,{className:"fixed-top"},u.a.createElement(p.a,null,window.history?u.a.createElement(m.a,{onClick:function(){y(!1)},component:j.b,to:"/home",color:"primary.light",visibility:!1},u.a.createElement(h.a,null)):u.a.createElement(u.a.Fragment,null),u.a.createElement(b.a,{autoCapitalize:!0,autoComplete:!0,autoFocus:!0,onKeyUp:T,onKeyDown:function(e){if("Enter"===e.key&&O.a.getState().q)return t.push("/search/results")},onFocus:function(){},onBlur:function(){},className:"".concat(M.input," text-light"),placeholder:"Search Kabeers Music",inputProps:{"aria-label":"Search Kabeers Music"}}),u.a.createElement(f.a,{visibility:!1}))),u.a.createElement("div",{class:"container px-3",style:{marginTop:"4rem"}},u.a.createElement("div",{class:"row"},J))))};q.defaultProps={};t.default=Object(x.b)(function(e){return{query:e.q}})(q)}}]);
//# sourceMappingURL=12.378f0c70.chunk.js.map