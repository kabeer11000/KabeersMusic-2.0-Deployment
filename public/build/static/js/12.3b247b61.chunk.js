(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t){var n="".concat(window.location.protocol,"//").concat(window.location.hostname,":9000"),a={mostPopular:function(e){return"https://www.googleapis.com/youtube/v3/videos?part=snippet&videoCategoryId=10&type=video&key=".concat(e,"&chart=mostPopular")},mostPopularFake:function(e){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/yt.json")},getProxyfiedURI:function(e){return"".concat(n,"/api/song?id=").concat(e)},getSuggestion:function(e){return"https://suggestqueries.google.com/complete/search?"},getSuggestionFake:function(e){return"https://cors-anywhere.herokuapp.com/http://clients1.google.com/complete/search?hl=en&output=toolbar&q=".concat(e)},searchYoutube:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return"https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&type=video&key=".concat(e,"&q=").concat(t,"&maxResults=").concat(n)},searchYoutubeFake:function(e,t){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/search-result.json")},proxyURI:function(e){return"".concat(n,"/proxy/").concat(e)},saveWatchHistory:"".concat(n,"/api/history/save"),saveSearchHistory:"".concat(n,"/api/search/save"),getFeed:"".concat(n,"/api/feed"),getFeedFake:function(){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/suggested-cardib.json")},authRedirect:"".concat(n,"/auth/redirect"),refreshToken:"".concat(n,"/auth/store/tokens/refresh")};e.exports=a},156:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(51),r=n.n(a),o=n(63),i=n(151),c=n.n(i),s=n(158),l={getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var r=n[a];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""},setCookie:function(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var r="expires="+a.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}};function u(){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.getCookie("token")){e.next=3;break}return e.abrupt("return",window.location.href=c.a.authRedirect);case 3:if(t=JSON.parse(t),!(Math.floor((Date.now()-t.exp)/1e3/60)>30)){e.next=8;break}return e.next=7,Object(s.a)(c.a.refreshToken,{},5e3).then(function(e){return e.ok?e.json():null});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t.token);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}},158:function(e,t,n){"use strict";t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3;return Promise.race([fetch(e,t),new Promise(function(e,t){return setTimeout(function(){return t(new Error("timeout"))},n)})])}},159:function(e,t,n){"use strict";t.a="123456"},165:function(e,t,n){"use strict";var a=n(51),r=n.n(a),o=n(34),i=n(63),c=n(192),s=n(151),l=n.n(s),u=n(156);function d(e){var t=e;return new Promise(function(e,n){return Object(u.a)().then(function(a){var r=new XMLHttpRequest;r.open("GET",l.a.proxyURI(t)),r.responseType="blob",r.setRequestHeader("Authorization","Bearer ".concat(a)),r.onload=function(){var t=r.status;t>=200&&t<300?e(r.response):n({status:t,statusText:r.statusText})},r.send(),setTimeout(function(){r.abort(),r.open("GET",l.a.proxyURI(t)),r.send()},1e3)})})}n(159);var p=n(203);n.d(t,"b",function(){return g}),n.d(t,"e",function(){return y}),n.d(t,"f",function(){return w}),n.d(t,"c",function(){return j}),n.d(t,"a",function(){return C}),n.d(t,"g",function(){return R}),n.d(t,"h",function(){return M}),n.d(t,"d",function(){return I});var f=10;function h(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var a="";return t&&(a=".",a+=Math.round(1e8*Math.random())),e+n+a}var m=new c.a("KabeersMusic_Songs");m.version(f).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var b=new c.a("KabeersMusic_History");function g(){return v.apply(this,arguments)}function v(){return(v=Object(i.a)(r.a.mark(function e(){var t,n,a,i,c,s,u,p=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:{videoId:null,rating:0,title:"",channelTitle:"",tags:""},e.prev=1,console.log("Download Started"),n="https://i.ytimg.com/vi/".concat(t.videoId,"/hqdefault.jpg"),e.next=6,fetch(l.a.getProxyfiedURI(t.videoId)).then(function(e){return e.json()}).catch(function(e){return e});case 6:return a=e.sent,e.next=9,Promise.all([d(n),d(a)]);case 9:return i=e.sent,c=Object(o.a)(i,2),s=c[0],u=c[1],m.songs.put({id:t.videoId,state:"downloaded",thumbnail:s,blob:u,valid:!0,time:Date.now(),videoId:t.videoId,rating:t.rating,tags:t.tags||[],title:t.title,channelTitle:t.channelTitle,videoElement:t.videoElement}).then(function(e){console.log(e)}),e.abrupt("return",!0);case 17:return e.prev=17,e.t0=e.catch(1),e.abrupt("return",e.t0);case 20:case"end":return e.stop()}},e,null,[[1,17]])}))).apply(this,arguments)}function y(e){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u.a)().then(function(e){return navigator.onLine?fetch(l.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.ok?e.json():null}).catch(function(e){return e}):new Error("No Connection")}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.songs.toArray();case 2:if(!(n=e.sent).some(function(e){return e.id===t})){e.next=5;break}return e.abrupt("return",n.find(function(e){return e.videoId===t}));case 5:return e.abrupt("return",Object(u.a)().then(function(e){fetch(l.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.ok?e.json():null})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.songs.toArray());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}b.version(f).stores({songs:"id, time, rating, thumbnail, channelTitle, title, tags"});var E={},S={isCaseSensitive:!1,shouldSort:!1,threshold:.6,ignoreLocation:!0,useExtendedSearch:!0,findAllMatches:!0,keys:["title","channelTitle",{name:"title",weight:1.5},{name:"channelTitle",weight:1}]};function C(e){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.fuse.search(t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function R(e){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.songs.toArray();case 2:return n=e.sent,e.abrupt("return",n&&n.some(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(e){return F.apply(this,arguments)}function F(){return(F=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:b.songs.put({id:h()+h(),title:t.title,channelTitle:t.ChannelTitle,tags:t.tags,thumbnail:t.thumbnail,time:Date.now(),rating:t.rating}).then(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function I(){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.songs.toArray()||[]);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}m.songs.toArray().then(function(e){E.fuse=new p.a(e,S)}),console.log("%20 SongJS Loaded")},167:function(e,t,n){"use strict";function a(e){var t=e.props,n=e.states,a=e.muiFormControl;return n.reduce(function(e,n){return e[n]=t[n],a&&"undefined"===typeof t[n]&&(e[n]=a[n]),e},{})}n.d(t,"a",function(){return a})},178:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var a=n(0),r=a.createContext();function o(){return a.useContext(r)}t.a=r},186:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),i=(n(3),n(5)),c=n(9),s=n(21),l=n(103),u=o.forwardRef(function(e,t){var n=e.classes,c=e.className,u=e.color,d=void 0===u?"primary":u,p=e.position,f=void 0===p?"fixed":p,h=Object(r.a)(e,["classes","className","color","position"]);return o.createElement(l.a,Object(a.a)({square:!0,component:"header",elevation:4,className:Object(i.a)(n.root,n["position".concat(Object(s.a)(f))],n["color".concat(Object(s.a)(d))],c,"fixed"===f&&"mui-fixed"),ref:t},h))});t.a=Object(c.a)(function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}},{name:"MuiAppBar"})(u)},187:function(e,t,n){"use strict";function a(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(a(e.value)&&""!==e.value||t&&a(e.defaultValue)&&""!==e.defaultValue)}function o(e){return e.startAdornment}n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o})},196:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),i=(n(3),n(5)),c=n(9),s=n(22),l=n(283),u=n(21),d=o.forwardRef(function(e,t){var n=e.edge,c=void 0!==n&&n,s=e.children,d=e.classes,p=e.className,f=e.color,h=void 0===f?"default":f,m=e.disabled,b=void 0!==m&&m,g=e.disableFocusRipple,v=void 0!==g&&g,y=e.size,x=void 0===y?"medium":y,w=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(l.a,Object(a.a)({className:Object(i.a)(d.root,p,"default"!==h&&d["color".concat(Object(u.a)(h))],b&&d.disabled,"small"===x&&d["size".concat(Object(u.a)(x))],{start:d.edgeStart,end:d.edgeEnd}[c]),centerRipple:!0,focusRipple:!v,disabled:b,ref:t},w),o.createElement("span",{className:d.label},s))});t.a=Object(c.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(s.d)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(d)},197:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(12),i=n(0),c=(n(3),n(5)),s=n(9),l=i.forwardRef(function(e,t){var n=e.classes,o=e.className,s=e.component,l=void 0===s?"div":s,u=e.disableGutters,d=void 0!==u&&u,p=e.variant,f=void 0===p?"regular":p,h=Object(r.a)(e,["classes","className","component","disableGutters","variant"]);return i.createElement(l,Object(a.a)({className:Object(c.a)(n.root,n[f],o,!d&&n.gutters),ref:t},h))});t.a=Object(s.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(o.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}},{name:"MuiToolbar"})(l)},205:function(e,t){e.exports={youtube:"AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8"}},220:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(12),i=n(0),c=(n(3),n(5)),s=n(9),l=n(21),u=n(285),d=n(259),p=n(257),f=n(17),h=n(103),m={enter:f.b.enteringScreen,exit:f.b.leavingScreen},b=i.forwardRef(function(e,t){var n=e.BackdropProps,o=e.children,s=e.classes,f=e.className,b=e.disableBackdropClick,g=void 0!==b&&b,v=e.disableEscapeKeyDown,y=void 0!==v&&v,x=e.fullScreen,w=void 0!==x&&x,k=e.fullWidth,j=void 0!==k&&k,O=e.maxWidth,E=void 0===O?"sm":O,S=e.onBackdropClick,C=e.onClose,N=e.onEnter,R=e.onEntered,T=e.onEntering,M=e.onEscapeKeyDown,F=e.onExit,I=e.onExited,A=e.onExiting,B=e.open,P=e.PaperComponent,W=void 0===P?h.a:P,D=e.PaperProps,z=void 0===D?{}:D,L=e.scroll,H=void 0===L?"paper":L,K=e.TransitionComponent,q=void 0===K?p.a:K,U=e.transitionDuration,$=void 0===U?m:U,V=e.TransitionProps,Y=e["aria-describedby"],G=e["aria-labelledby"],J=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),X=i.useRef();return i.createElement(u.a,Object(a.a)({className:Object(c.a)(s.root,f),BackdropComponent:d.a,BackdropProps:Object(a.a)({transitionDuration:$},n),closeAfterTransition:!0,disableBackdropClick:g,disableEscapeKeyDown:y,onEscapeKeyDown:M,onClose:C,open:B,ref:t},J),i.createElement(q,Object(a.a)({appear:!0,in:B,timeout:$,onEnter:N,onEntering:T,onEntered:R,onExit:F,onExiting:A,onExited:I,role:"none presentation"},V),i.createElement("div",{className:Object(c.a)(s.container,s["scroll".concat(Object(l.a)(H))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===X.current&&(X.current=null,S&&S(e),!g&&C&&C(e,"backdropClick"))},onMouseDown:function(e){X.current=e.target}},i.createElement(W,Object(a.a)({elevation:24,role:"dialog","aria-describedby":Y,"aria-labelledby":G},z,{className:Object(c.a)(s.paper,s["paperScroll".concat(Object(l.a)(H))],s["paperWidth".concat(Object(l.a)(String(E)))],z.className,w&&s.paperFullScreen,j&&s.paperFullWidth)}),o))))});t.a=Object(s.a)(function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}},{name:"MuiDialog"})(b)},244:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),i=(n(3),n(5)),c=n(9),s=n(155),l=o.forwardRef(function(e,t){var n=e.classes,c=e.className,l=Object(r.a)(e,["classes","className"]),u=o.useContext(s.a);return o.createElement("div",Object(a.a)({className:Object(i.a)(n.root,c,"flex-start"===u.alignItems&&n.alignItemsFlexStart),ref:t},l))});t.a=Object(c.a)(function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}},{name:"MuiListItemIcon"})(l)},245:function(e,t,n){"use strict";var a=n(2),r=n(1),o=n(80),i=n(0),c=(n(3),n(5)),s=n(167),l=n(178),u=n(9),d=n(21),p=n(18),f=n(246),h=n(187),m="undefined"===typeof window?i.useEffect:i.useLayoutEffect,b=i.forwardRef(function(e,t){var n=e["aria-describedby"],u=e.autoComplete,b=e.autoFocus,g=e.classes,v=e.className,y=(e.color,e.defaultValue),x=e.disabled,w=e.endAdornment,k=(e.error,e.fullWidth),j=void 0!==k&&k,O=e.id,E=e.inputComponent,S=void 0===E?"input":E,C=e.inputProps,N=void 0===C?{}:C,R=e.inputRef,T=(e.margin,e.multiline),M=void 0!==T&&T,F=e.name,I=e.onBlur,A=e.onChange,B=e.onClick,P=e.onFocus,W=e.onKeyDown,D=e.onKeyUp,z=e.placeholder,L=e.readOnly,H=e.renderSuffix,K=e.rows,q=e.rowsMax,U=e.rowsMin,$=e.startAdornment,V=e.type,Y=void 0===V?"text":V,G=e.value,J=Object(a.a)(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","startAdornment","type","value"]),X=null!=N.value?N.value:G,_=i.useRef(null!=X).current,Q=i.useRef(),Z=i.useCallback(function(e){0},[]),ee=Object(p.a)(N.ref,Z),te=Object(p.a)(R,ee),ne=Object(p.a)(Q,te),ae=i.useState(!1),re=ae[0],oe=ae[1],ie=Object(l.b)();var ce=Object(s.a)({props:e,muiFormControl:ie,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});ce.focused=ie?ie.focused:re,i.useEffect(function(){!ie&&x&&re&&(oe(!1),I&&I())},[ie,x,re,I]);var se=ie&&ie.onFilled,le=ie&&ie.onEmpty,ue=i.useCallback(function(e){Object(h.b)(e)?se&&se():le&&le()},[se,le]);m(function(){_&&ue({value:X})},[X,ue,_]);i.useEffect(function(){ue(Q.current)},[]);var de=S,pe=Object(r.a)({},N,{ref:ne});"string"!==typeof de?pe=Object(r.a)({inputRef:ne,type:Y},pe,{ref:null}):M?!K||q||U?(pe=Object(r.a)({rows:K,rowsMax:q},pe),de=f.a):de="textarea":pe=Object(r.a)({type:Y},pe);return i.useEffect(function(){ie&&ie.setAdornedStart(Boolean($))},[ie,$]),i.createElement("div",Object(r.a)({className:Object(c.a)(g.root,g["color".concat(Object(d.a)(ce.color||"primary"))],v,ce.disabled&&g.disabled,ce.error&&g.error,j&&g.fullWidth,ce.focused&&g.focused,ie&&g.formControl,M&&g.multiline,$&&g.adornedStart,w&&g.adornedEnd,"dense"===ce.margin&&g.marginDense),onClick:function(e){Q.current&&e.currentTarget===e.target&&Q.current.focus(),B&&B(e)},ref:t},J),$,i.createElement(l.a.Provider,{value:null},i.createElement(de,Object(r.a)({"aria-invalid":ce.error,"aria-describedby":n,autoComplete:u,autoFocus:b,defaultValue:y,disabled:ce.disabled,id:O,onAnimationStart:function(e){ue("mui-auto-fill-cancel"===e.animationName?Q.current:{value:"x"})},name:F,placeholder:z,readOnly:L,required:ce.required,rows:K,value:X,onKeyDown:W,onKeyUp:D},pe,{className:Object(c.a)(g.input,N.className,ce.disabled&&g.disabled,M&&g.inputMultiline,ce.hiddenLabel&&g.inputHiddenLabel,$&&g.inputAdornedStart,w&&g.inputAdornedEnd,"search"===Y&&g.inputTypeSearch,"dense"===ce.margin&&g.inputMarginDense),onBlur:function(e){I&&I(e),N.onBlur&&N.onBlur(e),ie&&ie.onBlur?ie.onBlur(e):oe(!1)},onChange:function(e){if(!_){var t=e.target||Q.current;if(null==t)throw new Error(Object(o.a)(1));ue({value:t.value})}for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];N.onChange&&N.onChange.apply(N,[e].concat(a)),A&&A.apply(void 0,[e].concat(a))},onFocus:function(e){ce.disabled?e.stopPropagation():(P&&P(e),N.onFocus&&N.onFocus(e),ie&&ie.onFocus?ie.onFocus(e):oe(!0))}}))),w,H?H(Object(r.a)({},ce,{startAdornment:$})):null)});t.a=Object(u.a)(function(e){var t="light"===e.palette.type,n={color:"currentColor",opacity:t?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},a={opacity:"0 !important"},o={opacity:t?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}},root:Object(r.a)({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(6,"px 0 ").concat(7,"px"),"&$marginDense":{paddingTop:3}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"".concat(6,"px 0 ").concat(7,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus::-webkit-input-placeholder":o,"&:focus::-moz-placeholder":o,"&:focus:-ms-input-placeholder":o,"&:focus::-ms-input-placeholder":o},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:3},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}},{name:"MuiInputBase"})(b)},246:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),i=(n(3),n(65)),c=n(18);function s(e,t){return parseInt(e[t],10)||0}var l="undefined"!==typeof window?o.useLayoutEffect:o.useEffect,u={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d=o.forwardRef(function(e,t){var n=e.onChange,d=e.rows,p=e.rowsMax,f=e.rowsMin,h=void 0===f?1:f,m=e.style,b=e.value,g=Object(r.a)(e,["onChange","rows","rowsMax","rowsMin","style","value"]),v=d||h,y=o.useRef(null!=b).current,x=o.useRef(null),w=Object(c.a)(t,x),k=o.useRef(null),j=o.useRef(0),O=o.useState({}),E=O[0],S=O[1],C=o.useCallback(function(){var t=x.current,n=window.getComputedStyle(t),a=k.current;a.style.width=n.width,a.value=t.value||e.placeholder||"x","\n"===a.value.slice(-1)&&(a.value+=" ");var r=n["box-sizing"],o=s(n,"padding-bottom")+s(n,"padding-top"),i=s(n,"border-bottom-width")+s(n,"border-top-width"),c=a.scrollHeight-o;a.value="x";var l=a.scrollHeight-o,u=c;v&&(u=Math.max(Number(v)*l,u)),p&&(u=Math.min(Number(p)*l,u));var d=(u=Math.max(u,l))+("border-box"===r?o+i:0),f=Math.abs(u-c)<=1;S(function(e){return j.current<20&&(d>0&&Math.abs((e.outerHeightStyle||0)-d)>1||e.overflow!==f)?(j.current+=1,{overflow:f,outerHeightStyle:d}):e})},[p,v,e.placeholder]);o.useEffect(function(){var e=Object(i.a)(function(){j.current=0,C()});return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}},[C]),l(function(){C()}),o.useEffect(function(){j.current=0},[b]);return o.createElement(o.Fragment,null,o.createElement("textarea",Object(a.a)({value:b,onChange:function(e){j.current=0,y||C(),n&&n(e)},ref:w,rows:v,style:Object(a.a)({height:E.outerHeightStyle,overflow:E.overflow?"hidden":null},m)},g)),o.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:k,tabIndex:-1,style:Object(a.a)({},u,m)}))});t.a=d},260:function(e,t,n){},268:function(e,t,n){"use strict";var a=n(51),r=n.n(a),o=n(63),i=n(151),c=n.n(i);function s(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t.attributes={};for(var n=0;n<e.attributes.length;n++){var a=e.attributes.item(n);t.attributes[a.nodeName]=a.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);var r=[].slice.call(e.childNodes).filter(function(e){return 3===e.nodeType});if(e.hasChildNodes()&&e.childNodes.length===r.length)t=[].slice.call(e.childNodes).reduce(function(e,t){return e+t.nodeValue},"");else if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var i=e.childNodes.item(o),c=i.nodeName;if("undefined"==typeof t[c])t[c]=s(i);else{if("undefined"==typeof t[c].push){var l=t[c];t[c]=[],t[c].push(l)}t[c].push(s(i))}}return t}var l=n(205),u=n.n(l);function d(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c.a.getSuggestionFake(t)).then(function(e){return e.text()});case 2:return n=e.sent,a=s((new DOMParser).parseFromString(n,"text/xml")),e.abrupt("return",a.toplevel?a.toplevel.CompleteSuggestion:[]);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(c.a.searchYoutubeFake(u.a.youtube,t)).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}n.d(t,"b",function(){return d}),n.d(t,"a",function(){return f})},276:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(149);t.a=Object(o.a)(r.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},348:function(e,t,n){"use strict";n.r(t);var a=n(51),r=n.n(a),o=n(63),i=n(34),c=n(0),s=n.n(c),l=(n(260),n(220)),u=n(186),d=n(197),p=n(196),f=n(149),h=Object(f.a)(s.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"SearchOutlined"),m=n(276),b=n(245),g=n(268),v=n(241),y=n(244),x=n(242),w=n(174),k=n.n(w),j=n(4),O=n(67),E=n(54),S=n(66),C=n(23),N=n(165),R=n(7),T=k()(function(e){return{root:{marginTop:"1rem",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),M=function(e){var t=Object(j.f)(),n=s.a.useState(!0),a=Object(i.a)(n,2),c=a[0],f=a[1],w=s.a.useState([]),k=Object(i.a)(w,2),S=k[0],M=k[1],F=s.a.useState(s.a.createElement("div",{className:"errorPage text-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},s.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),s.a.createElement("br",null),s.a.createElement("div",null,navigator.onLine?"Results will appear as you type":"Searching In Downloads"))),I=Object(i.a)(F,2),A=I[0],B=I[1],P=T(),W=function(){var n=Object(o.a)(r.a.mark(function n(a){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==a.key){n.next=2;break}return n.abrupt("return",E.a.getState().q?t.push("/search/results"):null);case 2:navigator.onLine?Object(g.b)(a.target.value).then(function(e){return M(e)}):Object(N.a)(a.target.value).then(function(e){return M(e.map(function(e){return{suggestion:{attributes:{data:e.item.title}}}}))}),S&&B(function(){return S.map(function(e,t){if(e)return s.a.createElement(v.a,{button:!0,key:t,onClick:function(){E.a.dispatch(Object(C.g)(e.suggestion.attributes.data))},component:O.b,to:"/search/results"},s.a.createElement(y.a,null,s.a.createElement(h,null)),s.a.createElement(x.a,{primary:"".concat(e.suggestion.attributes.data)}))})}),e.history.push({pathname:"search",search:"?"+new URLSearchParams({q:a.target.value}).toString()}),E.a.dispatch(Object(C.g)(a.target.value));case 6:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();return s.a.createElement("div",{className:"SearchComponent"},s.a.createElement(l.a,{fullScreen:!0,open:c,onClose:function(){}},s.a.createElement(u.a,{className:"fixed-top"},s.a.createElement(d.a,null,window.history?s.a.createElement(p.a,{onClick:function(){f(!1)},component:O.b,to:"/home",color:"primary.light",visibility:!1},s.a.createElement(m.a,{color:"#FFF"})):s.a.createElement(s.a.Fragment,null),s.a.createElement(b.a,{autoCapitalize:!0,autoComplete:!0,autoFocus:!0,onKeyUp:W,onFocus:function(){},onBlur:function(){},className:"".concat(P.input," text-light"),placeholder:"Search Kabeers Music",inputProps:{"aria-label":"Search Kabeers Music"}}))),s.a.createElement("div",{className:"container px-3",style:{marginTop:"4rem"}},s.a.createElement("div",{className:"row"},A,A?null:s.a.createElement(R.a,null)))))};M.defaultProps={};t.default=Object(S.b)(function(e){return{query:e.q}})(M)}}]);
//# sourceMappingURL=12.3b247b61.chunk.js.map