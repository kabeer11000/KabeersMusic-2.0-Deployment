(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{373:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(240);t.a=Object(i.a)(r.a.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}),"Pause")},374:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(240);t.a=Object(i.a)(r.a.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PlayCircleOutline")},408:function(e,t,n){"use strict";n.r(t);var a=n(72),r=n.n(a),i=(n(29),n(91)),o=n(47),c=n(270),l=n(121),u=n(269),m=n(228),s=n(373),p=n(374),d=n(0),f=n.n(d),g=n(240),E=Object(g.a)(f.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),S=n(76),h=n(30),y=n(96),b=n(342),O=n(40),v=Object(y.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement}})(Object(O.a)(function(e){if(!e.componentState.MiniPlayer)return f.a.createElement(f.a.Fragment,null);var t=f.a.useState(e.audioElement.currentTime),n=Object(o.a)(t,2),a=n[0],c=n[1];function l(e){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:isFinite(n)&&(c(n),e.audioElement.currentTime=n,S.a.dispatch(Object(h.g)(e.audioElement,S.a.getState().currentSong.videoElement,S.a.getState().currentSong.componentState,S.a.getState().currentSong.reOpenDialog,S.a.getState().currentSong.playList)));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(d.useEffect)(function(){e.componentState.MiniPlayer&&setInterval(function(){return!e.audioElement.paused&&e.componentState.MiniPlayer?c(e.audioElement.currentTime):null},1e3)},[]),f.a.createElement(b.a,{className:"p-0 m-0",defaultValue:0,value:a,min:0,color:"primary",max:e.audioElement.duration,onChange:function(){var e=Object(i.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l(n));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()})}));t.default=Object(y.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement,videoElement:e.currentSong.videoElement,reOpenDialog:e.currentSong.reOpenDialog,playList:e.currentSong.playList}})(Object(O.a)(function(e){if(e.hidden)return f.a.createElement(f.a.Fragment,null);var t=e.componentState,n=e.audioElement,a=e.videoElement,r=f.a.useState(f.a.createElement(c.a,{onClick:j},f.a.createElement(s.a,{color:"#fff"}))),i=Object(o.a)(r,2),g=i[0],y=i[1],b=f.a.useState(S.a.getState().currentSong.componentState.miniPlayer),O=Object(o.a)(b,2);O[0],O[1];function j(){n.pause(),y(f.a.createElement(c.a,{onClick:w},f.a.createElement(p.a,{color:"#fff"})))}function w(){n.play(),y(f.a.createElement(c.a,{onClick:j},f.a.createElement(s.a,{color:"#fff"})))}return Object(d.useEffect)(function(){}),!t.dialog&&t.MiniPlayer&&null!==n?f.a.createElement(l.a,{in:!0,style:{transitionProperty:1e3}},f.a.createElement(u.a,{color:"slideDown primary.miniPlayer.main",style:{position:"fixed",top:"auto",bottom:"3.5rem",width:"100%"},component:"div",elevation:1,className:"d-inline-flex KabeersMiniPlayerContainer"},f.a.createElement("div",{className:"d-inline-flex"},f.a.createElement("div",{onClick:function(){e.reOpenDialog(),S.a.dispatch(Object(h.g)(n,a,{Dialog:!0,MiniPlayer:!1},e.reOpenDialog,e.playList)),e.componentState.Dialog&&S.a.getState().currentSong.reOpenDialog()},className:"d-inline-flex"},f.a.createElement("img",{onError:"this.onerror=null;this.src='http://docs-kabeersnetwork-kview-app-sta.rf.gd/Private/uploads/5f58af5918860unnamed.jpg';",src:a.snippet.thumbnails.high.url,style:{width:"4rem",height:"3rem",maxWidth:"5rem!important",maxHeight:"4rem!important"},alt:"Song Image",className:"KabeersMiniPlayerImage"}),f.a.createElement(m.a,{component:"span",className:"text-truncate p-2 KabeersMiniPlayerText",color:"#000",style:{width:"10em",color:"primary.miniPlayer.text"}},a.snippet.title||"Untitled")),f.a.createElement("div",{className:"float-right ml-auto"},g,f.a.createElement(c.a,{onClick:function(){n.pause(),S.a.dispatch(Object(h.g)(new Audio(""),a,{Dialog:!1,MiniPlayer:!1},e.reOpenDialog,e.playList)),n.src="#"}},f.a.createElement(E,null)))),f.a.createElement(v,null))):f.a.createElement(f.a.Fragment,null)}))}}]);
//# sourceMappingURL=26.96c5ac1f.chunk.js.map