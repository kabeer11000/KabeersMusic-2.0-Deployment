(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{235:function(e,t){var n="".concat(window.location.protocol,"//").concat(window.location.hostname,":9000"),r={mostPopular:function(e){return"https://www.googleapis.com/youtube/v3/videos?part=snippet&videoCategoryId=10&type=video&key=".concat(e,"&chart=mostPopular")},mostPopularFake:function(e){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/yt.json")},getProxyfiedURI:function(e){return"".concat(n,"/api/song?id=").concat(e)},getSuggestion:function(e){return"https://suggestqueries.google.com/complete/search?"},getSuggestionFake:function(e){return"https://cors-anywhere.herokuapp.com/http://clients1.google.com/complete/search?hl=en&output=toolbar&q=".concat(e)},searchYoutube:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return"https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&type=video&key=".concat(e,"&q=").concat(t,"&maxResults=").concat(n)},searchYoutubeFake:function(e,t){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/search-result.json")},proxyURI:function(e){return"".concat(n,"/proxy/").concat(e)},saveWatchHistory:"".concat(n,"/api/history/save"),saveSearchHistory:"".concat(n,"/api/search/save"),getFeed:"".concat(n,"/api/feed"),getFeedFake:function(){return"".concat(n,"/files/yt-fake/sample-response-master/yt-api/suggested-cardib.json")},authRedirect:"".concat(n,"/auth/redirect"),refreshToken:"".concat(n,"/auth/store/tokens/refresh")};e.exports=r},237:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(69),a=n.n(r),o=n(87),i=n(235),c=n.n(i),s=n(239),u={getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var a=n[r];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return""},setCookie:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var a="expires="+r.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}};function l(){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.getCookie("token")){e.next=3;break}return e.abrupt("return",window.location.href=c.a.authRedirect);case 3:if(t=JSON.parse(t),!(Math.floor((Date.now()-t.exp)/1e3/60)>30)){e.next=8;break}return e.next=7,Object(s.a)(c.a.refreshToken,{},5e3).then(function(e){return e.ok?e.json():null});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t.token);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}},239:function(e,t,n){"use strict";var r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise(function(r,a){var o=1;return function e(n,i){return fetch(n,t).then(r).catch(function(t){1===i?a(t):setTimeout(function(){o++,e(n,i-1)},3e3*o)})}(e,n)})};t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;return Promise.race([r(e,t,a),new Promise(function(e,t){return setTimeout(function(){return t(new Error("timeout"))},n)})])}},244:function(e,t,n){"use strict";var r=n(69),a=n.n(r),o=n(30),i=n(87),c=n(255),s=n(235),u=n.n(s),l=n(237);function p(e){var t=e;return new Promise(function(e,n){return Object(l.a)().then(function(r){var a=new XMLHttpRequest;a.open("GET",u.a.proxyURI(t)),a.responseType="blob",a.setRequestHeader("Authorization","Bearer ".concat(r)),a.onload=function(){var t=a.status;t>=200&&t<300?e(a.response):n({status:t,statusText:a.statusText})},a.send(),setTimeout(function(){a.abort(),a.open("GET",u.a.proxyURI(t)),a.send()},1e3)})})}var d=n(239),f=n(263);n(74),n(96);n.d(t,"c",function(){return v}),n.d(t,"b",function(){return w}),n.d(t,"f",function(){return x}),n.d(t,"g",function(){return O}),n.d(t,"d",function(){return S}),n.d(t,"a",function(){return R}),n.d(t,"h",function(){return W}),n.d(t,"i",function(){return N}),n.d(t,"e",function(){return M});var h=10;function m(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var r="";return t&&(r=".",r+=Math.round(1e8*Math.random())),e+n+r}var g=new c.a("KabeersMusic_Songs");g.version(h).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var b=new c.a("KabeersMusic_History");function v(){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(a.a.mark(function e(){var t,n=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:{videoId:null,rating:0,title:"",channelTitle:"",tags:"",success:function(){},error:function(){}},e.prev=1,Object(l.a)().then(function(){var e=Object(i.a)(a.a.mark(function e(n){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Download Started"),r="https://i.ytimg.com/vi/".concat(t.videoId,"/hqdefault.jpg"),Object(d.a)(u.a.getProxyfiedURI(t.videoId),{headers:new Headers({Authorization:"Bearer ".concat(n)})}).then(function(e){return e.json()}).then(function(){var e=Object(i.a)(a.a.mark(function e(n){var i,c,s,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([p(r),p(n)]);case 2:i=e.sent,c=Object(o.a)(i,2),s=c[0],u=c[1],g.songs.put({id:t.videoId,state:"downloaded",thumbnail:s,blob:u,valid:!0,time:Date.now(),videoId:t.videoId,rating:t.rating,tags:t.tags||[],title:t.title,channelTitle:t.channelTitle,videoElement:t.videoElement}).then(function(e){t.success()}).catch(function(e){t.error()});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,null,[[1,5]])}))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.songs.delete(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)().then(function(e){return navigator.onLine?Object(d.a)(u.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})},1e4).then(function(e){return e.ok?e.json():null}).catch(function(e){return e}):new Error("No Connection")}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.songs.toArray();case 2:if(!(n=e.sent).some(function(e){return e.id===t})){e.next=5;break}return e.abrupt("return",n.find(function(e){return e.videoId===t}));case 5:return e.abrupt("return",Object(l.a)().then(function(e){Object(d.a)(u.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.ok?e.json():null})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.songs.toArray());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}b.version(h).stores({songs:"id, time, rating, thumbnail, channelTitle, title, tags"});var C={},T={isCaseSensitive:!1,shouldSort:!1,threshold:.6,ignoreLocation:!0,useExtendedSearch:!0,findAllMatches:!0,keys:["title","channelTitle",{name:"title",weight:1.5},{name:"channelTitle",weight:1}]};function R(e){return P.apply(this,arguments)}function P(){return(P=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.fuse.search(t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(e){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.songs.toArray();case 2:return n=e.sent,e.abrupt("return",n&&n.some(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e){return L.apply(this,arguments)}function L(){return(L=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:b.songs.put({id:m()+m(),title:t.title,channelTitle:t.ChannelTitle,tags:t.tags,thumbnail:t.thumbnail,time:Date.now(),rating:t.rating}).then(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(){return F.apply(this,arguments)}function F(){return(F=Object(i.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.songs.toArray()||[]);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}g.songs.toArray().then(function(e){C.fuse=new f.a(e,T)}),console.log("%20 SongJS Loaded")},264:function(e,t){e.exports={youtube:"AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8"}},298:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(10),i=n(0),c=(n(5),n(3)),s=n(4),u=n(6),l=i.forwardRef(function(e,t){var n=e.classes,o=e.className,s=e.component,l=void 0===s?"div":s,p=e.disableGutters,d=void 0!==p&&p,f=e.fixed,h=void 0!==f&&f,m=e.maxWidth,g=void 0===m?"lg":m,b=Object(a.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(l,Object(r.a)({className:Object(c.a)(n.root,o,h&&n.fixed,d&&n.disableGutters,!1!==g&&n["maxWidth".concat(Object(u.a)(String(g)))]),ref:t},b))});t.a=Object(s.a)(function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce(function(t,n){var r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:r}),t},{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}},{name:"MuiContainer"})(l)},333:function(e,t,n){},397:function(e,t,n){"use strict";n.r(t);var r=n(30),a=n(0),o=n.n(a),i=(n(333),n(122)),c=n(264),s=n.n(c),u=n(235),l=n.n(u),p=Object(a.lazy)(function(){return n.e(19).then(n.bind(null,395))}),d=function(e){return o.a.createElement(a.Suspense,{fallback:null},o.a.createElement(p,e))},f=n(244),h=n(101),m=n(237),g=n(298),b=n(223),v=n(94),y=n(239),w=n(15);function k(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var r="";return t&&(r=".",r+=Math.round(1e8*Math.random())),e+n+r}var x=function(e){var t=Object(h.b)(),n=t.enqueueSnackbar,c=(t.closeSnackbar,o.a.useState(function(){if(!navigator.onLine)return o.a.createElement("div",{className:"errorPage",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),o.a.createElement("br",null),o.a.createElement("div",{className:"text-truncate"},"No Internet Connection"),o.a.createElement(i.a,{onClick:x},"Retry"))})),u=Object(r.a)(c,2),p=u[0],v=u[1];function x(){Object(m.a)().then(function(e){Object(y.a)(l.a.getFeedFake(s.a.youtube),{headers:new Headers({Authorization:"Bearer ".concat(e)})},5e3).then(function(e){return e.ok?e.json():null}).then(function(e){v(o.a.createElement(o.a.Fragment,null,e.items.map(function(e){return o.a.createElement("div",{key:k()},o.a.createElement(b.a,{variant:"h5",className:"pl-3 text-left"},e.title),o.a.createElement(g.a,{maxWidth:"xl",className:"px-0 mx-0"},o.a.createElement("div",{className:"cardSlider Slider"},e.songs.items.map(function(t,n){return o.a.createElement(d,{onPlay:O,list:e.songs,key_:n,key:n,video:t,thumbnail:t.snippet.thumbnails.high.url})}))))})))}).catch(function(e){v(j("An error Occured Please Re login",o.a.createElement(i.a,{onClick:function(){window.location.href="/auth/redirect"}},"Login")))})}).catch(function(e){n("Failed to Load Songs"),v(j())})}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Internet Connection",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.a.createElement(i.a,{onClick:x},"Retry");return o.a.createElement("div",{className:"errorPage",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),o.a.createElement("br",null),o.a.createElement("div",{className:"text-truncate"},e),t)};function O(t,r,a){e.misc.showBackdrop(),Object(f.f)("object"===typeof t.id?t.id.videoId:t.id).then(function(n){n&&e.appState({uri:n,thumbnail:t.snippet.thumbnails.high.url,video:t,list:a,index:r})}).catch(function(e){console.log("Cannot Play Song"),n("Cannot Play Song")})}return Object(a.useEffect)(function(){x()},[]),o.a.createElement("div",{className:"home mb-5",style:{minHeight:"70vh"}},o.a.createElement("div",{style:{marginTop:"5rem"}},e.homeComponents?e.homeComponents:o.a.createElement("div",null,p),p?null:o.a.createElement(w.a,null)))};x.defaultProps={};t.default=Object(v.b)(function(e){return{homeComponents:e.home}})(x)}}]);
//# sourceMappingURL=15.848cf3dd.chunk.js.map