(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{233:function(e,t){var n="".concat(window.location.protocol,"//").concat(window.location.host),r={mostPopular:function(e){return"https://www.googleapis.com/youtube/v3/videos?part=snippet&videoCategoryId=10&type=video&key=".concat(e,"&chart=mostPopular")},mostPopularFake:function(e){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/yt.json")},getProxyfiedURI:function(e){return"".concat(n,"/api/song?id=").concat(e)},getSuggestion:function(e){return"https://suggestqueries.google.com/complete/search?"},getSuggestionFake:function(e){return"https://cors-anywhere.herokuapp.com/http://clients1.google.com/complete/search?hl=en&output=toolbar&q=".concat(e)},searchYoutube:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return"https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&type=video&key=".concat(e,"&q=").concat(t,"&maxResults=").concat(n)},searchYoutubeFake:function(e,t){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/search-result.json")},proxyURI:function(e){return"".concat(n,"/proxy/").concat(e)},saveWatchHistory:"".concat(n,"/api/history/save"),saveSearchHistory:"".concat(n,"/api/search/save"),getFeed:"".concat(n,"/api/feed"),getFeedFake:function(){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/suggested-cardib.json")},authRedirect:"".concat(n,"/auth/redirect"),refreshToken:"".concat(n,"/auth/store/tokens/refresh")};e.exports=r},235:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(69),a=n.n(r),o=n(86),u=n(233),i=n.n(u),c=n(237),s={getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var a=n[r];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return""},setCookie:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var a="expires="+r.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}};function l(){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.getCookie("token")){e.next=3;break}return e.abrupt("return",window.location.href=i.a.authRedirect);case 3:if(t=JSON.parse(t),!(Math.floor((Date.now()-t.exp)/1e3/60)>30)){e.next=8;break}return e.next=7,Object(c.a)(i.a.refreshToken,{},5e3).then(function(e){return e.ok?e.json():null});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t.token);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}},237:function(e,t,n){"use strict";var r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise(function(r,a){var o=1;return function e(n,u){return fetch(n,t).then(r).catch(function(t){1===u?a(t):setTimeout(function(){o++,e(n,u-1)},3e3*o)})}(e,n)})};t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;return Promise.race([r(e,t,a),new Promise(function(e,t){return setTimeout(function(){return t(new Error("timeout"))},n)})])}},242:function(e,t,n){"use strict";var r=n(69),a=n.n(r),o=n(49),u=n(86),i=n(253),c=n(233),s=n.n(c),l=n(235);function p(e){var t=e;return new Promise(function(e,n){return Object(l.a)().then(function(r){var a=new XMLHttpRequest;a.open("GET",s.a.proxyURI(t)),a.responseType="blob",a.setRequestHeader("Authorization","Bearer ".concat(r)),a.onload=function(){var t=a.status;t>=200&&t<300?e(a.response):n({status:t,statusText:a.statusText})},a.send(),setTimeout(function(){a.abort(),a.open("GET",s.a.proxyURI(t)),a.send()},1e3)})})}var f=n(237),h=n(262);n(254);n.d(t,"c",function(){return b}),n.d(t,"b",function(){return w}),n.d(t,"f",function(){return k}),n.d(t,"g",function(){return O}),n.d(t,"d",function(){return E}),n.d(t,"a",function(){return N}),n.d(t,"h",function(){return F}),n.d(t,"i",function(){return q}),n.d(t,"e",function(){return M});var d=10;function g(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var r="";return t&&(r=".",r+=Math.round(1e8*Math.random())),e+n+r}var m=new i.a("KabeersMusic_Songs");m.version(d).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var v=new i.a("KabeersMusic_History");function b(){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(a.a.mark(function e(){var t,n=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:{videoId:null,rating:0,title:"",channelTitle:"",tags:"",success:function(){},error:function(){}},e.prev=1,Object(l.a)().then(function(){var e=Object(u.a)(a.a.mark(function e(n){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Download Started"),r="https://i.ytimg.com/vi/".concat(t.videoId,"/hqdefault.jpg"),Object(f.a)(s.a.getProxyfiedURI(t.videoId),{headers:new Headers({Authorization:"Bearer ".concat(n)})}).then(function(e){return e.json()}).then(function(){var e=Object(u.a)(a.a.mark(function e(n){var u,i,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([p(r),p(n)]);case 2:u=e.sent,i=Object(o.a)(u,2),c=i[0],s=i[1],m.songs.put({id:t.videoId,state:"downloaded",thumbnail:c,blob:s,valid:!0,time:Date.now(),videoId:t.videoId,rating:t.rating,tags:t.tags||[],title:t.title,channelTitle:t.channelTitle,videoElement:t.videoElement}).then(function(e){t.success()}).catch(function(e){t.error()});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,null,[[1,5]])}))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.songs.delete(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)().then(function(e){return navigator.onLine?Object(f.a)(s.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})},1e4).then(function(e){return e.ok?e.json():null}).catch(function(e){return e}):new Error("No Connection")}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.songs.toArray();case 2:if(!(n=e.sent).some(function(e){return e.id===t})){e.next=5;break}return e.abrupt("return",n.find(function(e){return e.videoId===t}));case 5:return e.abrupt("return",Object(l.a)().then(function(e){Object(f.a)(s.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.ok?e.json():null})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.songs.toArray());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}v.version(d).stores({songs:"id, time, rating, thumbnail, channelTitle, title, tags"});var C={},I={isCaseSensitive:!1,shouldSort:!1,threshold:.6,ignoreLocation:!0,useExtendedSearch:!0,findAllMatches:!0,keys:["title","channelTitle",{name:"title",weight:1.5},{name:"channelTitle",weight:1}]};function N(e){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.fuse.search(t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(e){return R.apply(this,arguments)}function R(){return(R=Object(u.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.songs.toArray();case 2:return n=e.sent,e.abrupt("return",n&&n.some(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function q(e){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:v.songs.put({id:g()+g(),title:t.title,channelTitle:t.ChannelTitle,tags:t.tags,thumbnail:t.thumbnail,time:Date.now(),rating:t.rating}).then(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.songs.toArray()||[]);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}m.songs.toArray().then(function(e){C.fuse=new h.a(e,I)}),console.log("%20 SongJS Loaded")},263:function(e,t){e.exports={youtube:"AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8"}},311:function(e,t,n){},320:function(e,t,n){"use strict";var r=n(69),a=n.n(r),o=n(86),u=n(233),i=n.n(u);function c(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t.attributes={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t.attributes[r.nodeName]=r.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);var a=[].slice.call(e.childNodes).filter(function(e){return 3===e.nodeType});if(e.hasChildNodes()&&e.childNodes.length===a.length)t=[].slice.call(e.childNodes).reduce(function(e,t){return e+t.nodeValue},"");else if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var u=e.childNodes.item(o),i=u.nodeName;if("undefined"==typeof t[i])t[i]=c(u);else{if("undefined"==typeof t[i].push){var s=t[i];t[i]=[],t[i].push(s)}t[i].push(c(u))}}return t}var s=n(263),l=n.n(s);function p(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.a.getSuggestionFake(t)).then(function(e){return e.text()});case 2:return n=e.sent,r=c((new DOMParser).parseFromString(n,"text/xml")),e.abrupt("return",r.toplevel?r.toplevel.CompleteSuggestion:[]);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(i.a.searchYoutubeFake(l.a.youtube,t)).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}n.d(t,"b",function(){return p}),n.d(t,"a",function(){return h})},401:function(e,t,n){"use strict";n.r(t);var r=n(69),a=n.n(r),o=n(86),u=n(49),i=n(0),c=n.n(i),s=(n(311),n(118)),l=n(273),p=n(278),f=n(275),h=n(232),d=Object(h.a)(c.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"SearchOutlined"),g=n(363),m=n(121),v=n(320),b=n(255),y=n(312),w=n(256),x=n(244),k=n.n(x),j=n(12),O=n(94),S=n(73),E=n(93),T=n(33),C=n(242),I=n(15),N=k()(function(e){return{root:{marginTop:"1rem",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),P=function(e){var t=Object(j.f)(),n=c.a.useState(!0),r=Object(u.a)(n,2),i=r[0],h=r[1],x=c.a.useState([]),k=Object(u.a)(x,2),E=k[0],P=k[1],F=c.a.useState(c.a.createElement("div",{className:"errorPage text-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},c.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),c.a.createElement("br",null),c.a.createElement("div",null,navigator.onLine?"Results will appear as you type":"Searching In Downloads"))),R=Object(u.a)(F,2),q=R[0],A=R[1],M=N(),U=function(){var n=Object(o.a)(a.a.mark(function n(r){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==r.key){n.next=2;break}return n.abrupt("return",S.a.getState().q?t.push("/search/results"):null);case 2:navigator.onLine?Object(v.b)(r.target.value).then(function(e){return P(e)}):Object(C.a)(r.target.value).then(function(e){return P(e.map(function(e){return{suggestion:{attributes:{data:e.item.title}}}}))}),E&&A(function(){return E.map(function(e,t){if(e)return c.a.createElement(b.a,{button:!0,key:t,onClick:function(){S.a.dispatch(Object(T.g)(e.suggestion.attributes.data))},component:O.b,to:"/search/results"},c.a.createElement(y.a,null,c.a.createElement(d,null)),c.a.createElement(w.a,{primary:"".concat(e.suggestion.attributes.data)}))})}),e.history.push({pathname:"search",search:"?"+new URLSearchParams({q:r.target.value}).toString()}),S.a.dispatch(Object(T.g)(r.target.value));case 6:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();return c.a.createElement("div",{className:"SearchComponent"},c.a.createElement(s.a,{fullScreen:!0,open:i,onClose:function(){}},c.a.createElement(l.a,{className:"fixed-top"},c.a.createElement(p.a,null,window.history?c.a.createElement(f.a,{onClick:function(){h(!1)},component:O.b,to:"/home",color:"primary.light",visibility:!1},c.a.createElement(g.a,{color:"#FFF"})):c.a.createElement(c.a.Fragment,null),c.a.createElement(m.a,{autoCapitalize:!0,autoComplete:!0,autoFocus:!0,onKeyUp:U,onFocus:function(){},onBlur:function(){},className:"".concat(M.input," text-light"),placeholder:"Search Kabeers Music",inputProps:{"aria-label":"Search Kabeers Music"}}))),c.a.createElement("div",{className:"container px-3",style:{marginTop:"4rem"}},c.a.createElement("div",{className:"row"},q,q?null:c.a.createElement(I.a,null)))))};P.defaultProps={};t.default=Object(E.b)(function(e){return{query:e.q}})(P)}}]);
//# sourceMappingURL=16.a50d4b46.chunk.js.map