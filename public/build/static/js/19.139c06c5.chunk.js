(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{326:function(e,t,n){},327:function(e,t){e.exports={youtube:"AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8"}},337:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(12),i=n(18),c=n.n(i);function u(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t.attributes={};for(var n=0;n<e.attributes.length;n++){var a=e.attributes.item(n);t.attributes[a.nodeName]=a.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);var r=[].slice.call(e.childNodes).filter(function(e){return 3===e.nodeType});if(e.hasChildNodes()&&e.childNodes.length===r.length)t=[].slice.call(e.childNodes).reduce(function(e,t){return e+t.nodeValue},"");else if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var i=e.childNodes.item(o),c=i.nodeName;if("undefined"==typeof t[c])t[c]=u(i);else{if("undefined"==typeof t[c].push){var l=t[c];t[c]=[],t[c].push(l)}t[c].push(u(i))}}return t}var l=n(327),s=n.n(l),p=n(41);function f(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(r.a.mark(function e(t){var n,a,o,i=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:new AbortController,e.next=3,fetch(c.a.getSuggestionFake(t),{signal:n.signal}).then(function(e){return e.text()});case 3:return a=e.sent,o=u((new DOMParser).parseFromString(a,"text/xml")),e.abrupt("return",o.toplevel?o.toplevel.CompleteSuggestion:[]);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(r.a.mark(function e(t){var n,a=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:new AbortController,e.abrupt("return",Object(p.a)().then(function(e){return fetch(c.a.searchYoutube(s.a.youtube,t),{headers:new Headers({"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}),signal:n.signal}).then(function(e){return e.json()})}).catch(function(e){return e}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}n.d(t,"b",function(){return f}),n.d(t,"a",function(){return h})},420:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(12),i=n(28),c=n(0),u=n.n(c),l=(n(326),n(129)),s=n(274),p=n(296),f=n(275),d=n(252),h=Object(d.a)(u.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"SearchOutlined"),m=n(341),b=n(133),g=n(337),v=n(292),y=n(314),w=n(294),E=n(260),j=n.n(E),x=n(16),O=n(85),S=n(88),C=n(105),N=n(38),k=n(108),F=n(19),q=n(161),T=n(50),A=u.a.forwardRef(function(e,t){return u.a.createElement(q.a,Object.assign({direction:"left",ref:t},e))}),L=j()(function(e){return{root:{marginTop:"1rem",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),z=function(e){var t=Object(x.f)(),n=u.a.useState(!0),a=Object(i.a)(n,2),d=a[0],E=a[1],j=u.a.useState([]),C=Object(i.a)(j,2),q=C[0],T=C[1],z=new AbortController,M=u.a.useState(u.a.createElement("div",{className:"errorPage text-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},u.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),u.a.createElement("br",null),u.a.createElement("div",null,navigator.onLine?"Results will appear as you type":"Searching In Downloads"))),P=Object(i.a)(M,2),B=P[0],I=P[1],K=L(),V=function(){var n=Object(o.a)(r.a.mark(function n(a){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==a.key){n.next=2;break}return n.abrupt("return",S.a.getState().q?t.push("/search/results"):null);case 2:navigator.onLine?Object(g.b)(a.target.value,z).then(function(e){return e&&e.length?T(e):T([])}):Object(k.a)(a.target.value).then(function(e){return T(e.map(function(e){return{suggestion:{attributes:{data:e.item.title}}}}))}),q&&I(function(){return q.map(function(e,t){if(e)return u.a.createElement(v.a,{button:!0,key:t,onClick:function(){S.a.dispatch(Object(N.i)(e.suggestion.attributes.data))},component:O.b,to:"/search/results"},u.a.createElement(y.a,null,u.a.createElement(h,null)),u.a.createElement(w.a,{primary:"".concat(e.suggestion.attributes.data)}))})}),e.history.push({pathname:"search",search:"?"+new URLSearchParams({q:a.target.value}).toString()}),S.a.dispatch(Object(N.i)(a.target.value));case 6:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();return Object(c.useEffect)(function(){return function(){z.abort()}},[]),u.a.createElement("div",{className:"SearchComponent"},u.a.createElement(l.a,{fullScreen:!0,open:d,onClose:function(){},TransitionComponent:A},u.a.createElement(s.a,{className:"fixed-top"},u.a.createElement(p.a,null,window.history?u.a.createElement(f.a,{onClick:function(){E(!1)},component:O.b,to:"/home",color:"primary.light",visibility:!1},u.a.createElement(m.a,{color:"#FFF"})):u.a.createElement(u.a.Fragment,null),u.a.createElement(b.a,{autoCapitalize:!0,autoComplete:!0,autoFocus:!0,onKeyUp:V,onFocus:function(){},onBlur:function(){},className:"".concat(K.input," text-light"),placeholder:"Search Kabeers Music",inputProps:{"aria-label":"Search Kabeers Music"}}))),u.a.createElement("div",{className:"container px-3",style:{marginTop:"4rem"}},u.a.createElement("div",{className:"row"},B,B?null:u.a.createElement(F.a,null)))))};z.defaultProps={};t.default=Object(C.b)(function(e){return{query:e.q}})(Object(T.a)(z))}}]);
//# sourceMappingURL=19.139c06c5.chunk.js.map