(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{235:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(69),r=n.n(a),i=n(87),o=n(86),c=n.n(o),l=n(237),s={getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var r=n[a];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""},setCookie:function(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var r="expires="+a.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}};function u(){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.getCookie("token")){e.next=3;break}return e.abrupt("return",window.location.href=c.a.authRedirect);case 3:if(t=JSON.parse(t),!(Math.floor((Date.now()-t.exp)/1e3/60)>30)){e.next=8;break}return e.next=7,Object(l.a)(c.a.refreshToken,{},5e3).then(function(e){return e.ok?e.json():null});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t.token);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}},237:function(e,t,n){"use strict";var a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise(function(a,r){var i=1;return function e(n,o){return fetch(n,t).then(a).catch(function(t){1===o?r(t):setTimeout(function(){i++,e(n,o-1)},3e3*i)})}(e,n)})};t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;return Promise.race([a(e,t,r),new Promise(function(e,t){return setTimeout(function(){return t(new Error("timeout"))},n)})])}},242:function(e,t,n){"use strict";var a=n(69),r=n.n(a),i=n(49),o=n(87),c=n(253),l=n(86),s=n.n(l),u=n(235);function d(e){var t=e;return new Promise(function(e,n){return Object(u.a)().then(function(a){var r=new XMLHttpRequest;r.open("GET",s.a.proxyURI(t)),r.responseType="blob",r.setRequestHeader("Authorization","Bearer ".concat(a)),r.onload=function(){var t=r.status;t>=200&&t<300?e(r.response):n({status:t,statusText:r.statusText})},r.send(),setTimeout(function(){r.abort(),r.open("GET",s.a.proxyURI(t)),r.send()},1e3)})})}var p=n(237),m=n(262);n(254);n.d(t,"c",function(){return g}),n.d(t,"b",function(){return w}),n.d(t,"f",function(){return x}),n.d(t,"g",function(){return j}),n.d(t,"d",function(){return O}),n.d(t,"a",function(){return N}),n.d(t,"h",function(){return A}),n.d(t,"i",function(){return D}),n.d(t,"e",function(){return F});var h=10;function f(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var a="";return t&&(a=".",a+=Math.round(1e8*Math.random())),e+n+a}var v=new c.a("KabeersMusic_Songs");v.version(h).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var y=new c.a("KabeersMusic_History");function g(){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(r.a.mark(function e(){var t,n=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:{videoId:null,rating:0,title:"",channelTitle:"",tags:"",success:function(){},error:function(){}},e.prev=1,Object(u.a)().then(function(){var e=Object(o.a)(r.a.mark(function e(n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Download Started"),a="https://i.ytimg.com/vi/".concat(t.videoId,"/hqdefault.jpg"),Object(p.a)(s.a.getProxyfiedURI(t.videoId),{headers:new Headers({Authorization:"Bearer ".concat(n)})}).then(function(e){return e.json()}).then(function(){var e=Object(o.a)(r.a.mark(function e(n){var o,c,l,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([d(a),d(n)]);case 2:o=e.sent,c=Object(i.a)(o,2),l=c[0],s=c[1],v.songs.put({id:t.videoId,state:"downloaded",thumbnail:l,blob:s,valid:!0,time:Date.now(),videoId:t.videoId,rating:t.rating,tags:t.tags||[],title:t.title,channelTitle:t.channelTitle,videoElement:t.videoElement}).then(function(e){t.success()}).catch(function(e){t.error()});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,null,[[1,5]])}))).apply(this,arguments)}function w(e){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.songs.delete(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u.a)().then(function(e){return navigator.onLine?Object(p.a)(s.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})},1e4).then(function(e){return e.ok?e.json():null}).catch(function(e){return e}):new Error("No Connection")}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(e){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.songs.toArray();case 2:if(!(n=e.sent).some(function(e){return e.id===t})){e.next=5;break}return e.abrupt("return",n.find(function(e){return e.videoId===t}));case 5:return e.abrupt("return",Object(u.a)().then(function(e){Object(p.a)(s.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.ok?e.json():null})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.songs.toArray());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}y.version(h).stores({songs:"id, time, rating, thumbnail, channelTitle, title, tags"});var C={},I={isCaseSensitive:!1,shouldSort:!1,threshold:.6,ignoreLocation:!0,useExtendedSearch:!0,findAllMatches:!0,keys:["title","channelTitle",{name:"title",weight:1.5},{name:"channelTitle",weight:1}]};function N(e){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.fuse.search(t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.songs.toArray();case 2:return n=e.sent,e.abrupt("return",n&&n.some(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(e){return H.apply(this,arguments)}function H(){return(H=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:y.songs.put({id:f()+f(),title:t.title,channelTitle:t.ChannelTitle,tags:t.tags,thumbnail:t.thumbnail,time:Date.now(),rating:t.rating}).then(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.songs.toArray()||[]);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}v.songs.toArray().then(function(e){C.fuse=new m.a(e,I)}),console.log("%20 SongJS Loaded")},359:function(e,t,n){},360:function(e,t,n){},395:function(e,t,n){"use strict";n.r(t);var a=n(69),r=n.n(a),i=n(87),o=n(49),c=n(0),l=n.n(c),s=(n(359),n(143)),u=n(275),d=n(141),p=n(296),m=n(119),h=n(273),f=n(278),v=n(222),y=n(361),g=n(387),b=n(388),w=n(322),E=n(362),x=n(363),k=n(389),j=n(390),S=n(242),O=n(331),T=n(73),C=n(33),I=n(94),N=Object(I.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement}})(function(e){if(!e.componentState.Dialog)return l.a.createElement(l.a.Fragment,null);var t=l.a.useState(0),n=Object(o.a)(t,2),a=n[0],s=n[1];function u(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:isFinite(n)&&(s(n),e.audioElement.currentTime=n,a=T.a.getState().currentSong,T.a.dispatch(Object(C.e)(e.audioElement,a.videoElement,a.componentState,a.reOpenDialog,a.playList)));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(c.useEffect)(function(){e.componentState.Dialog&&setInterval(function(){return!e.audioElement.paused&&e.componentState.Dialog?s(e.audioElement.currentTime):null},1e3)},[]),l.a.createElement(O.a,{className:"container PlayerSlider",defaultValue:0,value:a,min:0,color:"primary.player.slider",max:e.audioElement.duration,onChange:function(){var e=Object(i.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u(n));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()})}),L=n(100),A=(n(99),n(360),n(308)),P=n(309),D=n(385),H=n(386),F=n(310),R=n(244),B=n.n(R),M=n(276),U=n(255),_=n(274),z=n(256),q=B()(function(e){return{inline:{display:"inline"}}}),J=function(e){var t=q();return l.a.createElement(U.a,{alignItems:"flex-start",selected:e.currentIndex===e.keyIndex,className:"p-0 px-1",onClick:e.onClick},l.a.createElement(_.a,null,l.a.createElement(p.a,{alt:e.title,src:e.image})),l.a.createElement(z.a,{className:"text-truncate",primary:e.title,secondary:l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{component:"span",variant:"body2",className:"".concat(t.inline," text-truncate"),color:"textPrimary"},l.a.createElement("div",{className:"text-truncate"},e.channelTitle)))}))};J.defaultProps={};var W=J,Y=n(155),G=B()(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}),K=function(e){var t=G(),n=l.a.useState(l.a.createElement("div",null)),a=Object(o.a)(n,2),r=a[0],i=a[1],s=l.a.useState({AutoPlaySwitch:!1}),u=Object(o.a)(s,2);u[0],u[1];return Object(c.useEffect)(function(){i(function(){var t=e.playList.list.items.map(function(t,n){return l.a.createElement(W,{currentIndex:n,keyIndex:e.playList.index,key:n,title:t.snippet.title,channelTitle:t.snippet.channelTitle,image:t.snippet.thumbnails.high.url})}),n=[];return t.forEach(function(e,a){n.push(e),void 0!==t[a+1]&&n.push(l.a.createElement(M.a,{variant:"inset",component:"li"}))}),n})},[]),l.a.createElement("div",{className:"ComingNext"},l.a.createElement(A.a,{square:!0},l.a.createElement(P.a,{expandIcon:l.a.createElement(D.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},l.a.createElement("div",{className:"d-inline-flex",style:{justifyContent:"space-around"}},l.a.createElement(H.a,null),l.a.createElement(v.a,{className:"".concat(t.heading)},"Coming Next"))),l.a.createElement(F.a,{style:{maxHeight:"90vh",overflowY:"scroll"}},l.a.createElement(Y.a,{className:"text-truncate",style:{maxHeight:"80vh",overflowY:"scroll"}},r))))};K.defaultProps={};var V=Object(I.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement,videoElement:e.currentSong.videoElement,playList:e.currentSong.playList}})(K),X=n(295),$="123456",Q=["i","a","about","an","and","are","as","at","be","by","com","de","en","for","from","how","in","is","it","la","of","on","or","that","the","this","to","was","what","when","where","who","will","with","und","www","ourselves","hers","between","yourself","but","again","there","once","during","out","very","having","they","own","some","do","its","yours","such","into","most","itself","other","off","s","am","him","each","themselves","until","below","we","these","your","his","through","don","nor","me","were","her","more","himself","down","should","our","their","while","above","both","up","ours","had","she","all","no","any","before","them","same","been","have","does","yourselves","then","because","over","why","so","can","did","not","now","under","he","you","herself","has","just","too","only","myself","which","those","after","few","whom","t","being","if","theirs","my","against","doing","further","here","than","cry","sentence","\xa9","\u21b5","#","!!","?!","??","!?","`","``","''","-lrb-","-rrb-","-lsb-","-rsb-",",",".",":",";",'"',"'","?","<",">","{","}","[","]","+","-","(",")","&","%","$","@","!","^","*","..","...","'ll","'s","'m","aren't","can't","cannot","could","couldn't","didn't","doesn't","don't","hadn't","hasn't","haven't","he'd","he'll","he's","here's","how's","i'd","i'll","i'm","i've","isn't","it's","let's","mustn't","ought","ours ","shan't","she'd","she'll","she's","shouldn't","that's","there's","they'd","they'll","they're","they've","wasn't","we'd","we'll","we're","we've","weren't","what's","when's","where's","who's","why's","won't","would","wouldn't","you'd","you'll","you're","you've","###","return","arent","cant","couldnt","didnt","doesnt","dont","hadnt","hasnt","havent","hes","heres","hows","im","isnt","lets","mustnt","shant","shes","shouldnt","thats","theres","theyll","theyre","theyve","wasnt","werent","whats","whens","wheres","whos","whys","wont","wouldnt","youd","youll","youre","youve"],Z=n(86),ee=n.n(Z),te=n(235);function ne(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toLowerCase().replace(/(?:https?|ftp|http):\/\/[\n\S]+/g,"").replace(/[^\w\d ]/g,"").split(" "),e.abrupt("return",n.filter(function(e){return-1===Q.indexOf(e)}).filter(function(e,t,n){return n.indexOf(e)===t}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function re(){return(re=Object(i.a)(r.a.mark(function e(t){var n,a=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.length>1&&void 0!==a[1]?a[1]:function(){},Object(te.a)().then(function(e){ne(t.snippet.description.substring(0,100)).then(function(a){var r="";"object"===typeof t.id&&(r=t.id.videoId),"string"===typeof t.id&&(r=t.id);var i,c={method:"POST",body:(i={time:(new Date).getTime(),user_id:$,video_id:r,artist_name:t.snippet.channelTitle,tags:t.snippet.tags||[],yt_catagory:10,video_title:t.snippet.title,video_keywords:Object(X.a)(a),video_featuring_artists:t.snippet.title.split(/ft.|feat.|ft|feat/i)||"",video_description:t.snippet.description.substring(0,100)},Object.entries(i).map(function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(a))}).join("&")),headers:new Headers({"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)})};fetch(ee.a.saveWatchHistory,c).then(function(){n()}).catch(function(e){return e})})});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var ie=n(109);var oe=l.a.forwardRef(function(e,t){return l.a.createElement(s.a,Object.assign({direction:"up",ref:t},e))}),ce=function(e){if(e.hidden)return null;var t=Object(ie.useDialog)(),n=l.a.useState(T.a.getState().currentSong.componentState.Dialog),a=Object(o.a)(n,2),s=a[0],O=a[1],I=l.a.useState(l.a.createElement(u.a,{color:"#60B18A",colorSecondary:"#60B18A",onClick:Z},l.a.createElement(y.a,{color:"#fff"}))),A=Object(o.a)(I,2),P=A[0],D=A[1],H=l.a.useState(l.a.createElement(u.a,{color:"primary.player.invertButtons.main",style:{backgroundColor:"primary.player.invertButtons.main"},onClick:function(){M.loop=!0,B(l.a.createElement(u.a,{color:"primary.player.invertButtons.invert",onClick:function(){M.loop=!1},style:{backgroundColor:"primary.player.invertButtons.invert"}},l.a.createElement(g.a,null)))}},l.a.createElement(g.a,null))),F=Object(o.a)(H,2),R=F[0],B=F[1],M=e.audioElement,U=l.a.useState(l.a.createElement("div",null)),_=Object(o.a)(U,2),z=_[0],q=_[1],J=Object(L.b)(),W=J.enqueueSnackbar,Y=(J.closeSnackbar,function(){K([!1,!0]),O(!1)}),G=function(){K([!0,!1]),O(!0)};function K(t){t||(t=[T.a.getState().currentSong.componentState.Dialog,T.a.getState().currentSong.componentState.MiniPlayer]),T.a.dispatch(Object(C.e)(M,e.videoElement,{Dialog:t[0],MiniPlayer:t[1]},G,{index:e.playList.index,list:e.playList.list}))}function X(){return(X=Object(i.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Object(S.i)({videoId:e.videoElement.id,title:e.videoElement.snippet.title,channelTitle:e.videoElement.snippet.channelTitle,tags:e.videoElement.snippet.tags,thumbnail:e.videoElement.snippet.thumbnails.high.url,rating:0});case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function $(){if(!navigator.onLine)return W("No Connection, Download Failed");Object(S.c)({videoId:"object"==typeof e.videoElement.id?e.videoElement.id.videoId:"string"==typeof e.videoElement.id&&e.videoElement.id,rating:0,title:e.videoElement.snippet.title,channelTitle:e.videoElement.snippet.channelTitle,tags:e.videoElement.snippet.tags,videoElement:e.videoElement,success:function(){q(l.a.createElement(u.a,{onClick:te},l.a.createElement(b.a,null)))},error:function(){W("Download Failed"),q(l.a.createElement(u.a,{onClick:$},l.a.createElement(w.a,null)))}}),q(l.a.createElement(u.a,{onClick:te},l.a.createElement(d.a,{color:"primary.light"})))}function Q(){M.play(),D(l.a.createElement(u.a,{onClick:Z},l.a.createElement(y.a,{color:"#fff"})))}function Z(){M.pause(),D(l.a.createElement(u.a,{className:"PlayerPlayPauseBtn",onClick:Q},l.a.createElement(E.a,{color:"#fff"})))}function ee(t){var n="";"object"===typeof t.video.id&&(n=t.video.id.videoId),"string"===typeof t.video.id&&(n=t.video.id),Object(S.f)(n).then(function(n){if(n){O(!1),K([!1,!1]);try{e.changes({uri:n,thumbnail:t.video.snippet.thumbnails.high.url,video:t.video,list:e.playList.list,index:t.index}).then(function(){e={}})}catch(a){console.log(a)}}})}function te(){return ne.apply(this,arguments)}function ne(){return(ne=Object(i.a)(r.a.mark(function n(){var a;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a={title:l.a.createElement("div",{className:"k-dialog-body-title text-truncate"},"Delete From Downloads")||"Nothing Here!",message:l.a.createElement("div",{className:"k-dialog-body-inner"},l.a.createElement("div",{className:"d-flex justify-content-center mb-3"},l.a.createElement(p.a,{src:e.videoElement.snippet.thumbnails.high.url,alt:"Song Thumbnail"})),"Do You want to delete ",e.videoElement.snippet.title," from downloads?",l.a.createElement("br",null))||"Nothing Here!"},t.confirm(a).then(function(){var t="";"object"===typeof e.videoElement.id&&(t=e.videoElement.id.videoId),"string"===typeof e.videoElement.id&&(t=e.videoElement.id),Object(S.b)(t).then(function(){q(l.a.createElement(u.a,{onClick:$},l.a.createElement(w.a,null)))})}).catch(function(){});case 2:case"end":return n.stop()}},n)}))).apply(this,arguments)}return Object(c.useEffect)(function(){(function(){return X.apply(this,arguments)})().then(function(e){return re.apply(this,arguments)}(e.videoElement)).then(K([!0,!1])).then(function(){M.play(),function(e,t,n){if("mediaSession"in navigator){var a=function(e){switch(e.action){case"seekforward":n.currentTime=Math.min(n.currentTime+r,n.duration);break;case"seekbackward":n.currentTime=Math.max(n.currentTime-r,0)}};navigator.mediaSession.metadata=new window.MediaMetadata({title:e.title,artist:e.artist,album:e.album,artwork:e.artwork});var r=10;navigator.mediaSession.setActionHandler("play",t.playAudio),navigator.mediaSession.setActionHandler("pause",t.pauseAudio),navigator.mediaSession.setActionHandler("seekforward",a),navigator.mediaSession.setActionHandler("seekbackward",a)}}({artist:e.videoElement.snippet.channelTitle,title:e.videoElement.snippet.title,artwork:[{src:e.videoElement.snippet.thumbnails.high.url,sizes:"96x96",type:"image/png"}]},{playAudio:Q,pauseAudio:Z},M)});var t="";"object"===typeof e.videoElement.id&&(t=e.videoElement.id.videoId),"string"===typeof e.videoElement.id&&(t=e.videoElement.id),Object(S.h)(t).then(function(e){q(e?l.a.createElement(u.a,{onClick:te},l.a.createElement(b.a,null)):l.a.createElement(u.a,{onClick:$},l.a.createElement(w.a,null)))})},[]),l.a.createElement("div",{className:"Player"},l.a.createElement("div",{className:"container"},l.a.createElement(m.a,{fullScreen:!0,open:s,onClose:Y,TransitionComponent:oe},l.a.createElement(h.a,null,l.a.createElement(f.a,{color:"#FFF",style:{color:"#FFFFFF"}},l.a.createElement(u.a,{edge:"start",onClick:Y,"aria-label":"close"},l.a.createElement(x.a,null)),l.a.createElement(v.a,{variant:"h6",component:"div",className:"py-1 text-truncate"},e.videoElement.snippet.title||"Untitled",l.a.createElement(v.a,{variant:"body2",style:{opacity:"50%"}},e.videoElement.snippet.channelTitle||"Unavailable")),l.a.createElement("div",{style:{flex:"1 1 auto"}}),z)),l.a.createElement("div",{style:{backgroundColor:"primary.dark",height:"100%",width:"100%"}},l.a.createElement("div",{className:"ImageCircle rounded-circle thumbnail"},l.a.createElement("img",{src:e.videoElement.snippet.thumbnails.high.url,className:"image img-fluid rounded-circle border shadow",style:{width:"10rem",height:"10rem",position:"absolute",top:"42%",left:"50%",transform:"translate(-50%, -50%)"},alt:"Thumbnail"}))),l.a.createElement(h.a,{color:"primary",style:{position:"fixed",top:"auto",bottom:0,width:"100%",backgroundColor:"light"},component:"div"},l.a.createElement(N,null),l.a.createElement("div",{className:"container mb-2",style:{width:"70%",display:"inline-flex",justifyContent:"space-around",transform:"translate(0%)"}},R,e.playList.list.items[e.playList.index-1]?l.a.createElement(u.a,null,l.a.createElement(k.a,{onClick:function(){ee({video:e.playList.list.items[e.playList.index-1],index:e.playList.index-1})}})):l.a.createElement(u.a,{disabled:!0},l.a.createElement(k.a,null)),l.a.createElement("div",{className:"ExpandedPlayButtonContainer"},P),e.playList.list.items[e.playList.index+1]?l.a.createElement(u.a,{onClick:function(){ee({video:e.playList.list.items[e.playList.index+1],index:e.playList.index+1})}},l.a.createElement(j.a,null)):l.a.createElement(u.a,{disabled:!0},l.a.createElement(j.a,null))),l.a.createElement(V,null)))))};ce.defaultProps={};t.default=Object(I.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement,videoElement:e.currentSong.videoElement,playList:e.currentSong.playList}})(ce)}}]);
//# sourceMappingURL=18.c479fbf0.chunk.js.map