(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{233:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(69),a=n.n(r),i=n(86),o=n(87),c=n.n(o),u=n(236),s={getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var a=n[r];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return""},setCookie:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var a="expires="+r.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}};function l(){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.getCookie("token")){e.next=3;break}return e.abrupt("return",window.location.href=c.a.authRedirect);case 3:if(t=JSON.parse(t),!(Math.floor((Date.now()-t.exp)/1e3/60)>120)){e.next=8;break}return e.next=7,Object(u.a)(c.a.refreshToken,{},5e3).then(function(e){return e.ok?e.json():null});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t.token);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}},236:function(e,t,n){"use strict";var r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise(function(r,a){var i=1;return function e(n,o){return fetch(n,t).then(r).catch(function(t){1===o?a(t):setTimeout(function(){i++,e(n,o-1)},3e3*i)})}(e,n)})};t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;return Promise.race([r(e,t,a),new Promise(function(e,t){return setTimeout(function(){return t(new Error("timeout"))},n)})])}},241:function(e,t,n){"use strict";var r=n(69),a=n.n(r),i=n(49),o=n(86),c=n(256),u=n(87),s=n.n(u),l=n(233);function f(e){var t=e;return new Promise(function(e,n){return Object(l.a)().then(function(r){var a=new XMLHttpRequest;a.open("GET",s.a.proxyURI(t)),a.responseType="blob",a.setRequestHeader("Authorization","Bearer ".concat(r)),a.onload=function(){var t=a.status;t>=200&&t<300?e(a.response):n({status:t,statusText:a.statusText})},a.send(),setTimeout(function(){a.abort(),a.open("GET",s.a.proxyURI(t)),a.send()},1e3)})})}var d=n(236),p=n(263);n(257);n.d(t,"c",function(){return g}),n.d(t,"b",function(){return w}),n.d(t,"f",function(){return j}),n.d(t,"g",function(){return E}),n.d(t,"d",function(){return S}),n.d(t,"a",function(){return C}),n.d(t,"h",function(){return A}),n.d(t,"i",function(){return L}),n.d(t,"e",function(){return P});var h=10;function m(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var r="";return t&&(r=".",r+=Math.round(1e8*Math.random())),e+n+r}var b=new c.a("KabeersMusic_Songs");b.version(h).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var v=new c.a("KabeersMusic_History");function g(){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(a.a.mark(function e(){var t,n=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:{videoId:null,rating:0,title:"",channelTitle:"",tags:"",success:function(){},error:function(){}},e.prev=1,Object(l.a)().then(function(){var e=Object(o.a)(a.a.mark(function e(n){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Download Started"),r="https://i.ytimg.com/vi/".concat(t.videoId,"/hqdefault.jpg"),Object(d.a)(s.a.getProxyfiedURI(t.videoId),{headers:new Headers({Authorization:"Bearer ".concat(n)})}).then(function(e){return e.json()}).then(function(){var e=Object(o.a)(a.a.mark(function e(n){var o,c,u,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([f(r),f(n)]);case 2:o=e.sent,c=Object(i.a)(o,2),u=c[0],s=c[1],b.songs.put({id:t.videoId,state:"downloaded",thumbnail:u,blob:s,valid:!0,time:Date.now(),videoId:t.videoId,rating:t.rating,tags:t.tags||[],title:t.title,channelTitle:t.channelTitle,videoElement:t.videoElement}).then(function(e){t.success()}).catch(function(e){t.error()});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,null,[[1,5]])}))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.delete(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)().then(function(e){return navigator.onLine?Object(d.a)(s.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})},1e4).then(function(e){return e.ok?e.json():null}).catch(function(e){return e}):new Error("No Connection")}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.toArray();case 2:if(!(n=e.sent).some(function(e){return e.id===t})){e.next=5;break}return e.abrupt("return",n.find(function(e){return e.videoId===t}));case 5:return e.abrupt("return",Object(l.a)().then(function(e){Object(d.a)(s.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.ok?e.json():null})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.songs.toArray());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}v.version(h).stores({songs:"id, time, rating, thumbnail, channelTitle, title, tags"});var N={},T={isCaseSensitive:!1,shouldSort:!1,threshold:.6,ignoreLocation:!0,useExtendedSearch:!0,findAllMatches:!0,keys:["title","channelTitle",{name:"title",weight:1.5},{name:"channelTitle",weight:1}]};function C(e){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.fuse.search(t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.toArray();case 2:return n=e.sent,e.abrupt("return",n&&n.some(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:v.songs.put({id:m()+m(),title:t.title,channelTitle:t.ChannelTitle,tags:t.tags,thumbnail:t.thumbnail,time:Date.now(),rating:t.rating}).then(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(){return q.apply(this,arguments)}function q(){return(q=Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.songs.toArray()||[]);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}b.songs.toArray().then(function(e){N.fuse=new p.a(e,T)}),console.log("%20 SongJS Loaded")},275:function(e,t,n){"use strict";var r=n(1),a=n(2),i=n(0),o=(n(5),n(3)),c=n(4),u=n(90),s=i.forwardRef(function(e,t){var n=e.classes,c=e.className,s=Object(a.a)(e,["classes","className"]),l=i.useContext(u.a);return i.createElement("div",Object(r.a)({className:Object(o.a)(n.root,c,"flex-start"===l.alignItems&&n.alignItemsFlexStart),ref:t},s))});t.a=Object(c.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(s)},296:function(e,t,n){"use strict";var r=n(1),a=n(2),i=n(0),o=(n(5),n(3)),c=n(4),u=n(88),s=Object(u.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var l=i.forwardRef(function(e,t){var n=e.alt,c=e.children,u=e.classes,l=e.className,f=e.component,d=void 0===f?"div":f,p=e.imgProps,h=e.sizes,m=e.src,b=e.srcSet,v=e.variant,g=void 0===v?"circle":v,y=Object(a.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),w=null,x=function(e){var t=e.src,n=e.srcSet,r=i.useState(!1),a=r[0],o=r[1];return i.useEffect(function(){if(t||n){o(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&o("loaded")},r.onerror=function(){e&&o("error")},function(){e=!1}}},[t,n]),a}({src:m,srcSet:b}),j=m||b,O=j&&"error"!==x;return w=O?i.createElement("img",Object(r.a)({alt:n,src:m,srcSet:b,sizes:h,className:u.img},p)):null!=c?c:j&&n?n[0]:i.createElement(s,{className:u.fallback}),i.createElement(d,Object(r.a)({className:Object(o.a)(u.root,u.system,u[g],l,!O&&u.colorDefault),ref:t},y),w)});t.a=Object(c.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}},{name:"MuiAvatar"})(l)},308:function(e,t,n){},309:function(e,t){e.exports={youtube:"AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8"}},319:function(e,t,n){"use strict";var r=n(69),a=n.n(r),i=n(86),o=n(87),c=n.n(o);function u(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t.attributes={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t.attributes[r.nodeName]=r.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);var a=[].slice.call(e.childNodes).filter(function(e){return 3===e.nodeType});if(e.hasChildNodes()&&e.childNodes.length===a.length)t=[].slice.call(e.childNodes).reduce(function(e,t){return e+t.nodeValue},"");else if(e.hasChildNodes())for(var i=0;i<e.childNodes.length;i++){var o=e.childNodes.item(i),c=o.nodeName;if("undefined"==typeof t[c])t[c]=u(o);else{if("undefined"==typeof t[c].push){var s=t[c];t[c]=[],t[c].push(s)}t[c].push(u(o))}}return t}var s=n(309),l=n.n(s),f=n(233);function d(e){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c.a.getSuggestionFake(t)).then(function(e){return e.text()});case 2:return n=e.sent,r=u((new DOMParser).parseFromString(n,"text/xml")),e.abrupt("return",r.toplevel?r.toplevel.CompleteSuggestion:[]);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(f.a)().then(function(e){return fetch(c.a.searchYoutube(l.a.youtube,t),{headers:new Headers({"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)})}).then(function(e){return e.json()})}).catch(function(e){return e}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}n.d(t,"b",function(){return d}),n.d(t,"a",function(){return h})},365:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t);var r=n(49),a=n(0),i=n.n(a),o=(n(308),n(119)),c=n(274),u=n(298),s=n(276),l=n(362),f=n(122),d=n(319),p=n(258),h=n(299),m=n(259),b=n(242),v=n.n(b),g=n(12),y=n(95),w=n(92),x=n(296),j=n(241),O=n(143),E=n(121),k=n(295),S=(n(365),n(155)),R=n(275),N=n(1),T=n(2),C=n(3),I=(n(5),n(18)),A=n(4),U=a.forwardRef(function(e,t){var n=e.animation,r=void 0===n?"pulse":n,i=e.classes,o=e.className,c=e.component,u=void 0===c?"span":c,s=e.height,l=e.variant,f=void 0===l?"text":l,d=e.width,p=Object(T.a)(e,["animation","classes","className","component","height","variant","width"]),h=Boolean(p.children);return a.createElement(u,Object(N.a)({ref:t,className:Object(C.a)(i.root,i[f],o,h&&[i.withChildren,!d&&i.fitContent,!s&&i.heightAuto],!1!==r&&i[r])},p,{style:Object(N.a)({width:d,height:s},p.style)}))}),L=Object(A.a)(function(e){return{root:{display:"block",backgroundColor:Object(I.d)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},{name:"MuiSkeleton"})(U),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return i.a.createElement(S.a,null,Object(k.a)(Array(e.length)).map(function(e){return i.a.createElement(p.a,{alignItems:"flex-start"},i.a.createElement(R.a,null,i.a.createElement(L,{variant:"circle",style:{height:"2.5rem",width:"2.5rem"}})),i.a.createElement(m.a,{primary:i.a.createElement(L,null),secondary:i.a.createElement(L,{width:"100%"})}))}))};M.defaultProps={};var P=M,q=v()(function(e){return{root:{marginTop:"1rem",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),z=(i.a.forwardRef(function(e,t){return i.a.createElement(O.a,Object.assign({direction:"left",ref:t},e))}),function(e){var t=Object(g.f)(),n=i.a.useState(!0),b=Object(r.a)(n,2),v=b[0],w=b[1],O=i.a.useState([]),k=Object(r.a)(O,2),S=(k[0],k[1],i.a.useState(i.a.createElement(P,{length:5}))),R=Object(r.a)(S,2),N=R[0],T=R[1],C=q(),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Internet Connection",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.a.createElement(E.a,{component:y.b,to:"/search"},"Retry");return i.a.createElement("div",{className:"errorPage text-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},i.a.createElement("img",{src:"/./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),i.a.createElement("br",null),i.a.createElement("div",{className:"text-truncate"},e),t)};return Object(a.useEffect)(function(){if(!e.query)return t.push("/search");navigator.onLine?Object(d.a)(e.query).catch(T(I())).then(function(t){t&&T(function(){return t.items?t.items.map(function(n,r){if(n)return i.a.createElement(p.a,{button:!0,key:r,onClick:function(){return a=n,i={list:t,index:r},void Object(j.f)(a.id).then(function(t){t&&setTimeout(function(){e.appState({uri:t,thumbnail:a.snippet.thumbnails.high.url,video:a,list:i.list,index:i.index})},100)});var a,i}},i.a.createElement(h.a,null,i.a.createElement(x.a,{alt:n.snippet.title,src:n.snippet.thumbnails.default.url})),i.a.createElement(m.a,{primary:"".concat(decodeURIComponent(n.snippet.title)),secondary:"".concat(n.snippet.channelTitle)}))}):I("Nothing Found Retry")})}):Object(j.a)(e.query).then(function(t){t&&T(function(){return t.map(function(t,n){return(t=t.item)?i.a.createElement(p.a,{button:!0,key:n,onClick:function(){!function(t,n){var r="";"object"===typeof t.videoElement.id&&(r=t.videoElement.id.videoId),"string"===typeof t.videoElement.id&&(r=t.videoElement.id),Object(j.g)(r).then(function(r){r&&(t.videoElement.snippet.thumbnails.high.url=URL.createObjectURL(r.thumbnail),e.appState({uri:URL.createObjectURL(r.blob),thumbnail:URL.createObjectURL(r.thumbnail),video:t.videoElement,list:{items:[t.videoElement]},index:n}))})}(t,n)}},i.a.createElement(h.a,null,i.a.createElement(x.a,{alt:t.title,src:URL.createObjectURL(t.thumbnail)})),i.a.createElement(m.a,{primary:"".concat(decodeURIComponent(t.title)),secondary:"".concat(t.channelTitle)})):I("Nothing Matched your Search!")})})}).catch(function(e){T(I())})},[]),i.a.createElement("div",{className:"SearchResultComponent"},i.a.createElement(o.a,{fullScreen:!0,open:v,onClose:function(){}},i.a.createElement(c.a,{className:"fixed-top"},i.a.createElement(u.a,{component:y.b,to:"/search"},window.history?i.a.createElement(s.a,{onClick:function(){w(!1)},component:y.b,to:"/home",color:"primary.light",visibility:!1},i.a.createElement(l.a,null)):i.a.createElement(i.a.Fragment,null),i.a.createElement(f.a,{autoCapitalize:!0,autoComplete:!0,value:e.query,className:"".concat(C.input," text-light"),placeholder:"Search Kabeers Music",inputProps:{"aria-label":"Search Kabeers Music"}}))),i.a.createElement("div",{className:"container px-3",style:{marginTop:"4rem"}},i.a.createElement("div",{className:"row"},N||i.a.createElement(P,null)))))});z.defaultProps={};t.default=Object(w.b)(function(e){return{query:e.q}})(z)}}]);
//# sourceMappingURL=11.e97f13c4.chunk.js.map