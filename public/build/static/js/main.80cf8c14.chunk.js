(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{120:function(e,t,n){"use strict";var r=n(69),a=n(27),o=n(45),c={currentSong:{audioElement:new Audio(""),videoElement:{},playList:{index:0,list:[]},reOpenDialog:function(){}},drawer:!1,q:"",autoPlay:!1};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.a:return{currentSong:e.currentSong,drawer:t.drawer};case o.b:return{currentSong:t.currentSong,drawer:e.drawer};case o.d:return Object(a.a)({},e,{q:t.q});case o.c:return Object(a.a)({},e,{home:t.home});case o.e:return Object(a.a)({},e,{autoPlay:t.autoPlay});default:return e}},u=n(178),l=n(21),s=n(22),d=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,[{key:"loadState",value:function(){try{var e=localStorage.getItem("KabeersMusic:state");return null===e?this.initializeState():JSON.parse(e)}catch(t){return this.initializeState()}}},{key:"saveState",value:function(e){try{var t=JSON.stringify(e);localStorage.setItem("KabeersMusic:state",t)}catch(n){}}},{key:"initializeState",value:function(){return{currentSong:{audioElement:new Audio(""),videoElement:{},playList:{index:0,list:[]},reOpenDialog:function(){}},drawer:!1,q:""}}}]),e}(),f={currentSong:{audioElement:new Audio(""),videoElement:{},playList:{index:0,list:[]},reOpenDialog:function(){}},drawer:!1,q:"",autoPlay:!1},p=(new d,[u.a]),h=Object(r.d)(i,f,Object(r.c)(r.a.apply(void 0,p),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));t.a=h},126:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={userData:"bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",homeSongObject:"6pcGyKPkNzCc1LIrvJperozvZemGtVK6FKn2uU4",homeTimeObject:"b1dvcmxkX0NuOU91VU5UWlJmdWFDbndjNjp1c2V"}},160:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(24),c=Object(r.lazy)(function(){return n.e(11).then(n.bind(null,306))});t.a=function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(o.a,null)},a.a.createElement(c,e))}},174:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(14),c=n(28),i=n.n(c);function u(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t.attributes={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t.attributes[r.nodeName]=r.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);var a=[].slice.call(e.childNodes).filter(function(e){return 3===e.nodeType});if(e.hasChildNodes()&&e.childNodes.length===a.length)t=[].slice.call(e.childNodes).reduce(function(e,t){return e+t.nodeValue},"");else if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var c=e.childNodes.item(o),i=c.nodeName;if("undefined"==typeof t[i])t[i]=u(c);else{if("undefined"==typeof t[i].push){var l=t[i];t[i]=[],t[i].push(l)}t[i].push(u(c))}}return t}var l=n(179),s=n.n(l),d=n(48);function f(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark(function e(t){var n,r,o,c=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:new AbortController,e.next=3,fetch(i.a.getSuggestionFake(t),{signal:n.signal}).then(function(e){return e.text()});case 3:return r=e.sent,o=u((new DOMParser).parseFromString(r,"text/xml")),e.abrupt("return",o.toplevel?o.toplevel.CompleteSuggestion:[]);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(a.a.mark(function e(t){var n,r=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:new AbortController,e.abrupt("return",Object(d.a)().then(function(e){return fetch(i.a.searchYoutube(s.a.youtube,t),{headers:new Headers({"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}),signal:n.signal}).then(function(e){return e.json()})}).catch(function(e){return e}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}n.d(t,"b",function(){return f}),n.d(t,"a",function(){return h})},179:function(e,t){e.exports={youtube:"AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8"}},194:function(e,t,n){},209:function(e,t,n){e.exports=n(260)},214:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},223:function(e,t,n){},24:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(218),n(193)),c=n(38),i=function(){return a.a.createElement("div",{className:"Preloader text-center",style:{width:"10rem",height:"10rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},a.a.createElement(o.a,null))};i.defaultProps={},t.a=Object(c.a)(i)},260:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),c=n.n(o),i=(n(214),n(7)),u=n.n(i),l=n(14),s=n(27),d=n(25),f=(n(217),n(24)),p=Object(r.lazy)(function(){return n.e(13).then(n.bind(null,410))}),h=function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.a,null)},a.a.createElement(p,e))},m=n(54),b=n(16),g=Object(r.lazy)(function(){return n.e(6).then(n.bind(null,399))}),v=function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.a,null)},a.a.createElement(g,e))},y=Object(r.lazy)(function(){return n.e(12).then(n.bind(null,408))}),E=function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.a,null)},a.a.createElement(y,e))},w=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,407))}),k=function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.a,null)},a.a.createElement(w,e))},O=n(148),j=n(162),x=n(160),S=Object(r.lazy)(function(){return n.e(20).then(n.bind(null,411))}),F=function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.a,null)},a.a.createElement(S,e))},T=Object(r.lazy)(function(){return Promise.all([n.e(7),n.e(19)]).then(n.bind(null,400))}),A=function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.a,null)},a.a.createElement(T,e))},I=n(83),C=n(120),N=n(45),R=n(38),P=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,409))}),U=Object(R.a)(function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.a,null)},a.a.createElement(P,e))}),L=(n(194),n(168)),_=n(294),z=n(295),D=n(296),q=n(311),M=n(170),B=n(174),J=n(288),K=n(291),W=n(290),H=n(141),V=n.n(H),G=n(303),X=n(85),Y=n(196),Q=n(167),$=n(37),Z=(n(223),n(195)),ee=n(289),te=n(310),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return a.a.createElement(Z.a,null,Object($.a)(Array(e.length)).map(function(e){return a.a.createElement(J.a,{alignItems:"flex-start"},a.a.createElement(ee.a,null,a.a.createElement(te.a,{variant:"circle",style:{height:"2.5rem",width:"2.5rem"}})),a.a.createElement(W.a,{primary:a.a.createElement(te.a,null),secondary:a.a.createElement(te.a,{width:"100%"})}))}))};ne.defaultProps={};var re=Object(R.a)(ne),ae=V()(function(e){return{root:{marginTop:"1rem",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),oe=(a.a.forwardRef(function(e,t){return a.a.createElement(Y.a,Object.assign({direction:"left",ref:t},e))}),function(e){var t=Object(b.f)(),n=a.a.useState(!0),o=Object(d.a)(n,2),c=o[0],i=o[1],u=a.a.useState([]),l=Object(d.a)(u,2),s=(l[0],l[1],a.a.useState(a.a.createElement(re,{length:5}))),f=Object(d.a)(s,2),p=f[0],h=f[1],g=ae(),v=new AbortController,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Internet Connection",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.a.createElement(Q.a,{component:m.b,to:"/search"},"Retry");return a.a.createElement("div",{className:"errorPage text-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},a.a.createElement("img",{src:"/./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),a.a.createElement("br",null),a.a.createElement("div",{className:"text-truncate"},e),t)};return Object(r.useEffect)(function(){return e.query?(navigator.onLine?Object(B.a)(e.query,v).catch(h(y())).then(function(t){t&&h(function(){return t.items?t.items.map(function(n,r){if(n)return a.a.createElement(J.a,{button:!0,key:r,onClick:function(){return a=n,o={list:t,index:r},void Object(X.f)(a.id).then(function(t){t&&setTimeout(function(){e.appState({uri:t,thumbnail:a.snippet.thumbnails.high.url,video:a,list:o.list,index:o.index})},100)});var a,o}},a.a.createElement(K.a,null,a.a.createElement(G.a,{alt:n.snippet.title,src:n.snippet.thumbnails.default.url})),a.a.createElement(W.a,{primary:"".concat(n.snippet.title),secondary:"".concat(n.snippet.channelTitle)}))}):y("Nothing Found Retry")})}):Object(X.a)(e.query).then(function(t){t&&h(function(){return t.length?t.map(function(t,n){return(t=t.item)?a.a.createElement(J.a,{button:!0,key:n,onClick:function(){!function(t,n){var r="";"object"===typeof t.videoElement.id&&(r=t.videoElement.id.videoId),"string"===typeof t.videoElement.id&&(r=t.videoElement.id),Object(X.g)(r).then(function(r){r&&(t.videoElement.snippet.thumbnails.high.url=URL.createObjectURL(r.thumbnail),e.appState({uri:URL.createObjectURL(r.blob),thumbnail:URL.createObjectURL(r.thumbnail),video:t.videoElement,list:{items:[t.videoElement]},index:n},!1))})}(t,n)}},a.a.createElement(K.a,null,a.a.createElement(G.a,{alt:t.title,src:URL.createObjectURL(t.thumbnail)})),a.a.createElement(W.a,{primary:"".concat(decodeURIComponent(t.title)),secondary:"".concat(t.channelTitle)})):y("Nothing Matched your Search!")}):null})}).catch(function(e){h(y())}),function(){v.abort()}):t.push("/search")},[]),a.a.createElement("div",{className:"SearchResultComponent"},a.a.createElement(L.a,{fullScreen:!0,open:c,onClose:function(){}},a.a.createElement(_.a,{className:"fixed-top"},a.a.createElement(z.a,{component:m.b,to:"/search?q=".concat(e.query)},window.history?a.a.createElement(D.a,{onClick:function(){i(!1)},component:m.b,style:{textDecoration:"none"},to:"/home",color:"primary.light",visibility:!1},a.a.createElement(q.a,null)):a.a.createElement(a.a.Fragment,null),a.a.createElement(M.a,{autoCapitalize:!0,autoComplete:!0,value:e.query,className:"".concat(g.input," text-light"),placeholder:"Search Kabeers Music",inputProps:{"aria-label":"Search Kabeers Music"}}))),a.a.createElement("div",{className:"container px-3",style:{marginTop:"4rem"}},a.a.createElement("div",{className:"row"},p&&p.length?p:a.a.createElement(re,{length:10})))))});oe.defaultProps={};var ce=Object(I.b)(function(e){return{query:e.q}})(Object(R.a)(oe)),ie=n(193),ue=Object(r.lazy)(function(){return n.e(10).then(n.bind(null,412))}),le=function(e){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(ie.a,null)},a.a.createElement(ue,e))},se=n(147),de=n(302),fe=Object(r.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(18)]).then(n.bind(null,413))}),pe=function(e){return a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(fe,e))},he=Object(r.lazy)(function(){return n.e(16).then(n.bind(null,404))}),me=function(e){return a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(he,e))},be=(n(246),n(152)),ge=n(28),ve=n.n(ge),ye=Object(r.lazy)(function(){return n.e(15).then(n.bind(null,405))}),Ee=function(e){return a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(ye,e))},we=n(301),ke=Object(r.lazy)(function(){return n.e(14).then(n.bind(null,414))}),Oe=function(e){return a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(ke,e))},je=n(181),xe=Object(R.a)(function(){var e=a.a.useState(null!==localStorage.getItem("darkmode")&&JSON.parse(localStorage.getItem("darkmode"))),t=Object(d.a)(e,2),n=t[0],r=t[1],o=a.a.useState(!0),c=Object(d.a)(o,2),i=c[0],f=c[1],p=a.a.useState(!0),g=Object(d.a)(p,2),y=g[0],w=g[1],S=a.a.useState(navigator.onLine),T=Object(d.a)(S,2),R=T[0],P=(T[1],new AbortController,n?"dark":"light"),L={primary:{contrastText:n?"#757575":"#FFFFFF",appBarText:"#FFFFFF",main:"#E14A58",light:n?"#757575":"#FFFFFF",dark:n?"#303030":"#FFFFFF",miniPlayer:{main:n?"#303030":"#FEFEFE",borderTop:n?"#E14A58":"#3C3F41",text:n?"#FFFFFF":"#2B2B2B"},player:{slider:{rail:"#FFF",thumb:"#FFF",thumbColorPrimary:"#FFF"},invertButtons:{main:"#E14A58",invert:"#FFFFFF"},volumeSlider:{main:"#000"}}},secondary:{main:"#E14A58",light:n?"#757575":"#FFFFFF",dark:n?"#303030":"#FFFFFF"},background:{}},_=Object(O.a)({palette:Object(s.a)({type:P},L,{Slider:{root:{color:"#6f8eff",height:3,padding:"13px 0"},track:{height:4,borderRadius:2},thumb:{height:20,width:20,backgroundColor:"#000",border:"1px solid currentColor",marginTop:-9,marginLeft:-11,boxShadow:"#ebebeb 0 2px 2px","&:focus, &:hover, &$active":{boxShadow:"#ccc 0 2px 3px 1px"},color:"#000"}}})}),z=function(){r(!n),localStorage.setItem("darkmode",JSON.stringify(!n))};function D(e){return q.apply(this,arguments)}function q(){return(q=Object(l.a)(u.a.mark(function e(t){var n,r,a=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=!(a.length>1&&void 0!==a[1])||a[1],r=document.getElementById("MainAudio-KabeersMusic");try{r.pause(),r.src="",t.list&&t.index&&t.thumbnail&&t.video&&t.uri?t.hidden=!1:t.hidden=!0,r.src=n?ve.a.proxyURI(t.uri):t.uri,C.a.dispatch(Object(N.g)(r,t.video,{Dialog:!0,MiniPlayer:!1},function(){},{list:t.list,index:t.index})),f(!0),f(!1),w(!0)}catch(o){console.log(o)}case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var M={hideBackdrop:function(){w(!0)},showBackdrop:function(){w(!1)}};return a.a.createElement(I.a,{store:C.a},a.a.createElement(j.a,{theme:_},a.a.createElement(m.a,null,a.a.createElement(we.a,null,a.a.createElement(be.DialogProvider,null,a.a.createElement(se.a,{maxSnack:1},a.a.createElement(de.a,null),a.a.createElement("div",{className:"App"},a.a.createElement(A,null,a.a.createElement(b.b,{exact:!0,path:["/","/home","/search","/downloads","/history","/liked","/charts"],render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(x.a,null),a.a.createElement(v,{progress_hidden:y}))}}),a.a.createElement(k,{offline:R,misc_func:M,hidden:i,changes:D}),a.a.createElement(U,{hidden:i}),a.a.createElement(b.b,{path:"/home",render:function(){return a.a.createElement(h,{misc:M,appState:D})}}),a.a.createElement(b.b,{path:"/",render:function(){return a.a.createElement(je.a,{to:"/home"})}}),a.a.createElement(b.b,{exact:!0,path:"/downloads",render:function(){return a.a.createElement(E,{appState:D})}}),a.a.createElement(b.b,{exact:!0,path:"/search",component:F}),a.a.createElement(b.b,{exact:!0,path:"/liked",component:me}),a.a.createElement(b.b,{exact:!0,path:"/settings",render:function(){var e=document.getElementById("MainAudio-KabeersMusic");return e.paused||e.pause(),a.a.createElement(pe,{handleTheme:z})}}),a.a.createElement(b.b,{exact:!0,path:"/history",component:le}),a.a.createElement(b.b,{exact:!0,path:"/charts",component:Ee}),a.a.createElement(b.b,{exact:!0,path:"/artist",render:function(){return a.a.createElement(Oe,{appState:D,misc:M})}}),a.a.createElement(b.b,{exact:!0,path:"/search/results",render:function(){return a.a.createElement(ce,{appState:D})}})))))))))}),Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Fe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)}),console.log=function(){},c.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(xe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");Se?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Fe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Fe(t,e)})}}()},28:function(e,t){var n="".concat(window.location.protocol,"//").concat(window.location.host),r={hostName:n,getUserData:"".concat(n,"/auth/user/data"),mostPopular:function(e){return"https://www.googleapis.com/youtube/v3/videos?part=snippet&videoCategoryId=10&type=video&key=".concat(e,"&chart=mostPopular")},mostPopularFake:function(e){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/yt.json")},getProxyfiedURI:function(e){return"".concat(n,"/api/song?id=").concat(e)},getSuggestion:function(e){return"https://suggestqueries.google.com/complete/search?"},getSuggestionFake:function(e){return"https://cors-anywhere.herokuapp.com/http://clients1.google.com/complete/search?hl=en&output=toolbar&q=".concat(e)},searchYoutube:function(e,t){return"".concat(n,"/api/search?q=").concat(t)},searchYoutubeFake:function(e,t){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/search-result.json")},proxyURI:function(e){return"".concat(n,"/proxy/").concat(e)},saveWatchHistory:"".concat(n,"/api/history/save"),saveSearchHistory:"".concat(n,"/api/search/save"),getFeed:function(){return"".concat(n,"/api/feed")},getFeedFake:function(){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/suggested-cardib.json")},authRedirect:"".concat(n,"/auth/redirect"),refreshToken:"".concat(n,"/auth/store/tokens/refresh"),getSearchFeed:function(){return"".concat(n,"/api/feed/search")},getTopArtistFeed:function(){return"".concat(n,"/api/feed/topartist")},getPlayListById:function(e){return"".concat(n,"/api/backend/playlist?playlist=").concat(e)},getFeedArtists:"".concat(n,"/api/feed/artists/all"),getArtistInfo:function(e){return"".concat(n,"/api/backend/get/artist?id=").concat(e)}};e.exports=r},45:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"h",function(){return l}),n.d(t,"g",function(){return s}),n.d(t,"i",function(){return d}),n.d(t,"f",function(){return f});var r=n(27),a="CHANGE_DRAWER",o="CURRENT_SONG",c="SEARCH_QUERY_PARAM",i="HOME_COMPONENT_STATE",u="SET_AUTOPLAY";function l(e){return{type:a,drawer:e}}function s(e,t,n,a,c){return{type:o,currentSong:{audioElement:e,videoElement:t,componentState:n,reOpenDialog:a,playList:Object(r.a)({},c)}}}function d(e){return{type:c,q:e}}function f(e){return{type:u,autoPlay:e}}},48:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(7),a=n.n(r),o=n(14),c=n(28),i=n.n(c),u=n(59),l=n(126),s={getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var a=n[r];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return""},setCookie:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var a="expires="+r.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}};function d(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.getCookie("token")){e.next=3;break}return e.abrupt("return",window.location.href=i.a.authRedirect);case 3:if(t=JSON.parse(t),!(Math.floor((Date.now()-t.exp)/1e3/60)>120)){e.next=8;break}return e.next=7,Object(u.a)(i.a.refreshToken,{},5e3).then(function(e){return e.ok?e.json():null});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t.token);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s.getCookie("user_data_token")&&null===localStorage.getItem(l.a.userData)&&Object(u.a)("http://localhost:9000/auth/user/data",{headers:new Headers({IdToken:JSON.parse(s.getCookie("user_data_token")).token})}).then(function(e){return e.json()}).then(function(e){return localStorage.setItem(l.a.userData,btoa(JSON.stringify(e)))}).catch(function(e){return console.log(e)});case 1:case"end":return e.stop()}},e)}))()},59:function(e,t,n){"use strict";var r=n(27),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise(function(r,a){var o=1;return function e(n,c){return fetch(n,t).then(r).catch(function(t){1===c?a(t):setTimeout(function(){o++,e(n,c-1)},3e3*o)})}(e,n)})};t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,c=new AbortController;return Promise.race([a(e,Object(r.a)({},t,{signal:c.signal}),o),new Promise(function(e,t){return setTimeout(function(){return t(function(){c.abort(),new Error("timeout")})},n)})])}},85:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(25),c=n(14),i=n(116),u=n(28),l=n.n(u),s=n(48);function d(e){var t=e;return new Promise(function(e,n){return Object(s.a)().then(function(r){var a=new XMLHttpRequest;a.open("GET",l.a.proxyURI(t)),a.responseType="blob",a.setRequestHeader("Authorization","Bearer ".concat(r)),a.onload=function(){var t=a.status;t>=200&&t<300?e(a.response):n({status:t,statusText:a.statusText})},a.send(),setTimeout(function(){a.abort(),a.open("GET",l.a.proxyURI(t)),a.send()},1e3)})})}var f=n(59),p=n(182);n(180);n.d(t,"c",function(){return v}),n.d(t,"b",function(){return E}),n.d(t,"f",function(){return k}),n.d(t,"g",function(){return j}),n.d(t,"d",function(){return S}),n.d(t,"a",function(){return I}),n.d(t,"h",function(){return N}),n.d(t,"i",function(){return P}),n.d(t,"e",function(){return L});var h=10;function m(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var r="";return t&&(r=".",r+=Math.round(1e8*Math.random())),e+n+r}var b=new i.a("KabeersMusic_Songs");b.version(h).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var g=new i.a("KabeersMusic_History");function v(){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(a.a.mark(function e(){var t,n,r=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=r.length>0&&void 0!==r[0]?r[0]:{videoId:null,rating:0,title:"",channelTitle:"",tags:"",videoElement:{},success:function(){},error:function(){}},n=r.length>1&&void 0!==r[1]?r[1]:new AbortController,e.prev=2,Object(s.a)().then(function(){var e=Object(c.a)(a.a.mark(function e(r){var i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Download Started"),i="https://i.ytimg.com/vi/".concat(t.videoId,"/hqdefault.jpg"),Object(f.a)(l.a.getProxyfiedURI(t.videoId),{headers:new Headers({Authorization:"Bearer ".concat(r)}),signal:n.signal}).then(function(e){return e.json()}).then(function(){var e=Object(c.a)(a.a.mark(function e(n){var r,c,u,l;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([d(i),d(n)]);case 2:r=e.sent,c=Object(o.a)(r,2),u=c[0],l=c[1],b.songs.put({id:t.videoId,state:"downloaded",thumbnail:u,blob:l,valid:!0,time:Date.now(),videoId:t.videoId,rating:t.rating,tags:t.tags||[],title:t.title,channelTitle:t.channelTitle,videoElement:t.videoElement}).then(function(e){t.success()}).catch(function(e){t.error()});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(2),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}},e,null,[[2,6]])}))).apply(this,arguments)}function E(e){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.delete(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.a)().then(function(e){return navigator.onLine?Object(f.a)(l.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})},1e5).then(function(e){return e.ok?e.json():null}):new Error("No Connection")}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.toArray();case 2:if(!(n=e.sent).some(function(e){return e.id===t})){e.next=5;break}return e.abrupt("return",n.find(function(e){return e.videoId===t}));case 5:return e.abrupt("return",Object(s.a)().then(function(e){Object(f.a)(l.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.ok?e.json():null})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){return F.apply(this,arguments)}function F(){return(F=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.songs.toArray());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}g.version(h).stores({songs:"id, time, rating, thumbnail, channelTitle, title, tags"});var T={},A={isCaseSensitive:!1,shouldSort:!1,threshold:.6,ignoreLocation:!0,useExtendedSearch:!0,findAllMatches:!0,keys:["title","channelTitle",{name:"title",weight:1.5},{name:"channelTitle",weight:1}]};function I(e){return C.apply(this,arguments)}function C(){return(C=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.fuse.search(t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e){return R.apply(this,arguments)}function R(){return(R=Object(c.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.toArray();case 2:return n=e.sent,e.abrupt("return",n&&n.some(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e){return U.apply(this,arguments)}function U(){return(U=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:g.songs.put({id:m()+m(),title:t.title,channelTitle:t.ChannelTitle,tags:t.tags,thumbnail:t.thumbnail,time:Date.now(),rating:t.rating}).then(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(){return _.apply(this,arguments)}function _(){return(_=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.songs.toArray()||[]);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(){return(z=Object(c.a)(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.toArray();case 2:return t=e.sent,n=[],t.map(function(e,t){n.push(e.videoElement)}),e.abrupt("return",{kind:"KabeersMusic#searchListResponse",etag:"makeid(10)",regionCode:"PK",pageInfo:{totalResults:n.length},items:n});case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}b.songs.toArray().then(function(e){T.fuse=new p.a(e,A)}),console.log("%20 SongJS Loaded"),function(){z.apply(this,arguments)}()}},[[209,3,4]]]);
//# sourceMappingURL=main.80cf8c14.chunk.js.map