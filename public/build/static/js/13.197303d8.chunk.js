(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{271:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(0),o=(n(5),n(3)),c=n(4),l=n(101),s=Object(l.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=i.forwardRef(function(e,t){var n=e.alt,c=e.children,l=e.classes,u=e.className,m=e.component,d=void 0===m?"div":m,f=e.imgProps,h=e.sizes,p=e.src,b=e.srcSet,g=e.variant,v=void 0===g?"circle":g,y=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,w=function(e){var t=e.src,n=e.srcSet,a=i.useState(!1),r=a[0],o=a[1];return i.useEffect(function(){if(t||n){o(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&o("loaded")},a.onerror=function(){e&&o("error")},function(){e=!1}}},[t,n]),r}({src:p,srcSet:b}),j=p||b,O=j&&"error"!==w;return E=O?i.createElement("img",Object(a.a)({alt:n,src:p,srcSet:b,sizes:h,className:l.img},f)):null!=c?c:j&&n?n[0]:i.createElement(s,{className:l.fallback}),i.createElement(d,Object(a.a)({className:Object(o.a)(l.root,l.system,l[v],u,!O&&l.colorDefault),ref:t},y),E)});t.a=Object(c.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}},{name:"MuiAvatar"})(u)},301:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(0),o=(n(5),n(3)),c=n(4),l=n(103),s=i.forwardRef(function(e,t){var n=e.classes,c=e.className,s=Object(r.a)(e,["classes","className"]),u=i.useContext(l.a);return i.createElement("div",Object(a.a)({className:Object(o.a)(n.root,c,"flex-start"===u.alignItems&&n.alignItemsFlexStart),ref:t},s))});t.a=Object(c.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(s)},304:function(e,t){e.exports={youtube:"AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8"}},314:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(12),o=n(14);function c(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t.attributes={};for(var n=0;n<e.attributes.length;n++){var a=e.attributes.item(n);t.attributes[a.nodeName]=a.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);var r=[].slice.call(e.childNodes).filter(function(e){return 3===e.nodeType});if(e.hasChildNodes()&&e.childNodes.length===r.length)t=[].slice.call(e.childNodes).reduce(function(e,t){return e+t.nodeValue},"");else if(e.hasChildNodes())for(var i=0;i<e.childNodes.length;i++){var o=e.childNodes.item(i),l=o.nodeName;if("undefined"==typeof t[l])t[l]=c(o);else{if("undefined"==typeof t[l].push){var s=t[l];t[l]=[],t[l].push(s)}t[l].push(c(o))}}return t}var l=n(304),s=n.n(l),u=n(53);function m(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(r.a.mark(function e(t){var n,a,i,l=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:new AbortController,e.next=3,fetch(o.a.getSuggestionFake(t),{signal:n.signal}).then(function(e){return e.text()});case 3:return a=e.sent,i=c((new DOMParser).parseFromString(a,"text/xml")),e.abrupt("return",i.toplevel?i.toplevel.CompleteSuggestion:[]);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(r.a.mark(function e(t){var n,a=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:new AbortController,e.abrupt("return",Object(u.a)().then(function(e){return fetch(o.a.searchYoutube(s.a.youtube,t),{headers:new Headers({"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}),signal:n.signal}).then(function(e){return e.json()})}).catch(function(e){return e}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(){return(p=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}))).apply(this,arguments)}n.d(t,"b",function(){return m}),n.d(t,"a",function(){return f}),function(){p.apply(this,arguments)}()},337:function(e,t,n){},388:function(e,t,n){},437:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(0),i=n.n(r),o=(n(337),n(129)),c=n(277),l=n(281),s=n(272),u=n(342),m=n(135),d=n(314),f=n(278),h=n(319),p=n(279),b=n(262),g=n.n(b),v=n(18),y=n(105),E=n(106),w=n(271),j=n(109),O=n(172),x=n(132),N=n(19),S=(n(388),n(170)),C=n(301),k=n(1),R=n(2),I=n(3),q=(n(5),n(26)),A=n(4),L=r.forwardRef(function(e,t){var n=e.animation,a=void 0===n?"pulse":n,i=e.classes,o=e.className,c=e.component,l=void 0===c?"span":c,s=e.height,u=e.variant,m=void 0===u?"text":u,d=e.width,f=Object(R.a)(e,["animation","classes","className","component","height","variant","width"]),h=Boolean(f.children);return r.createElement(l,Object(k.a)({ref:t,className:Object(I.a)(i.root,i[m],o,h&&[i.withChildren,!d&&i.fitContent,!s&&i.heightAuto],!1!==a&&i[a])},f,{style:Object(k.a)({width:d,height:s},f.style)}))}),T=Object(A.a)(function(e){return{root:{display:"block",backgroundColor:Object(q.d)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},{name:"MuiSkeleton"})(L),F=n(51),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return i.a.createElement(S.a,null,Object(N.a)(Array(e.length)).map(function(e){return i.a.createElement(f.a,{alignItems:"flex-start"},i.a.createElement(C.a,null,i.a.createElement(T,{variant:"circle",style:{height:"2.5rem",width:"2.5rem"}})),i.a.createElement(p.a,{primary:i.a.createElement(T,null),secondary:i.a.createElement(T,{width:"100%"})}))}))};U.defaultProps={};var z=Object(F.a)(U),M=g()(function(e){return{root:{marginTop:"1rem",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),P=(i.a.forwardRef(function(e,t){return i.a.createElement(O.a,Object.assign({direction:"left",ref:t},e))}),function(e){var t=Object(v.e)(),n=i.a.useState(!0),b=Object(a.a)(n,2),g=b[0],E=b[1],O=i.a.useState([]),N=Object(a.a)(O,2),S=(N[0],N[1],i.a.useState(i.a.createElement(z,{length:5}))),C=Object(a.a)(S,2),k=C[0],R=C[1],I=M(),q=new AbortController,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Internet Connection",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.a.createElement(x.a,{component:y.b,to:"/search"},"Retry");return i.a.createElement("div",{className:"errorPage text-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},i.a.createElement("img",{src:"/./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),i.a.createElement("br",null),i.a.createElement("div",{className:"text-truncate"},e),t)};return Object(r.useEffect)(function(){return e.query?(navigator.onLine?Object(d.a)(e.query,q).catch(R(A())).then(function(t){t&&R(function(){return t.items?t.items.map(function(n,a){if(n)return i.a.createElement(f.a,{button:!0,key:a,onClick:function(){return r=n,i={list:t,index:a},void Object(j.f)(r.id).then(function(t){t&&setTimeout(function(){e.appState({uri:t,thumbnail:r.snippet.thumbnails.high.url,video:r,list:i.list,index:i.index})},100)});var r,i}},i.a.createElement(h.a,null,i.a.createElement(w.a,{alt:n.snippet.title,src:n.snippet.thumbnails.default.url})),i.a.createElement(p.a,{primary:"".concat(n.snippet.title),secondary:"".concat(n.snippet.channelTitle)}))}):A("Nothing Found Retry")})}):Object(j.a)(e.query).then(function(t){t&&R(function(){return t.length?t.map(function(t,n){return(t=t.item)?i.a.createElement(f.a,{button:!0,key:n,onClick:function(){!function(t,n){var a="";"object"===typeof t.videoElement.id&&(a=t.videoElement.id.videoId),"string"===typeof t.videoElement.id&&(a=t.videoElement.id),Object(j.g)(a).then(function(a){a&&(t.videoElement.snippet.thumbnails.high.url=URL.createObjectURL(a.thumbnail),e.appState({uri:URL.createObjectURL(a.blob),thumbnail:URL.createObjectURL(a.thumbnail),video:t.videoElement,list:{items:[t.videoElement]},index:n},!1))})}(t,n)}},i.a.createElement(h.a,null,i.a.createElement(w.a,{alt:t.title,src:URL.createObjectURL(t.thumbnail)})),i.a.createElement(p.a,{primary:"".concat(decodeURIComponent(t.title)),secondary:"".concat(t.channelTitle)})):A("Nothing Matched your Search!")}):null})}).catch(function(e){R(A())}),function(){q.abort()}):t.push("/search")},[]),i.a.createElement("div",{className:"SearchResultComponent"},i.a.createElement(o.a,{fullScreen:!0,open:g,onClose:function(){}},i.a.createElement(c.a,{className:"fixed-top"},i.a.createElement(l.a,{component:y.b,to:"/search?q=".concat(e.query)},window.history?i.a.createElement(s.a,{onClick:function(){E(!1)},component:y.b,style:{textDecoration:"none"},to:"/home",color:"primary.light",visibility:!1},i.a.createElement(u.a,null)):i.a.createElement(i.a.Fragment,null),i.a.createElement(m.a,{autoCapitalize:!0,autoComplete:!0,value:e.query,className:"".concat(I.input," text-light"),placeholder:"Search Kabeers Music",inputProps:{"aria-label":"Search Kabeers Music"}}))),i.a.createElement("div",{className:"container px-3",style:{marginTop:"4rem"}},i.a.createElement("div",{className:"row"},k&&k.length?k:i.a.createElement(z,{length:10})))))});P.defaultProps={};t.default=Object(E.b)(function(e){return{query:e.q}})(Object(F.a)(P))}}]);
//# sourceMappingURL=13.197303d8.chunk.js.map