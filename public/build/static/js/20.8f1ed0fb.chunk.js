(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{322:function(e,t,a){"use strict";var n=a(1),o=a(2),i=a(0),r=(a(5),a(3)),c=a(82),s=a(4),l=i.forwardRef(function(e,t){var a=e.classes,s=e.className,l=e.raised,u=void 0!==l&&l,d=Object(o.a)(e,["classes","className","raised"]);return i.createElement(c.a,Object(n.a)({className:Object(r.a)(a.root,s),elevation:u?8:1,ref:t},d))});t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},323:function(e,t,a){"use strict";var n=a(1),o=a(2),i=a(0),r=(a(5),a(3)),c=a(4),s=a(156),l=i.forwardRef(function(e,t){var a=e.children,c=e.classes,l=e.className,u=e.focusVisibleClassName,d=Object(o.a)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(s.a,Object(n.a)({className:Object(r.a)(c.root,l),focusVisibleClassName:Object(r.a)(u,c.focusVisible),ref:t},d),a,i.createElement("span",{className:c.focusHighlight}))});t.a=Object(c.a)(function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}},{name:"MuiCardActionArea"})(l)},324:function(e,t,a){"use strict";var n=a(1),o=a(2),i=a(0),r=(a(5),a(3)),c=a(4),s=i.forwardRef(function(e,t){var a=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,u=Object(o.a)(e,["classes","className","component"]);return i.createElement(l,Object(n.a)({className:Object(r.a)(a.root,c),ref:t},u))});t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},325:function(e,t,a){"use strict";var n=a(1),o=a(2),i=a(0),r=(a(5),a(3)),c=a(4),s=["video","audio","picture","iframe","img"],l=i.forwardRef(function(e,t){var a=e.children,c=e.classes,l=e.className,u=e.component,d=void 0===u?"div":u,m=e.image,b=e.src,p=e.style,f=Object(o.a)(e,["children","classes","className","component","image","src","style"]),v=-1!==s.indexOf(d),g=!v&&m?Object(n.a)({backgroundImage:'url("'.concat(m,'")')},p):p;return i.createElement(d,Object(n.a)({className:Object(r.a)(c.root,l,v&&c.media,-1!=="picture img".indexOf(d)&&c.img),ref:t,style:g,src:v?m||b:void 0},f),a)});t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},326:function(e,t,a){"use strict";var n=a(1),o=a(2),i=a(0),r=(a(5),a(3)),c=a(6),s=a(4),l=a(96),u=a(8),d=a(222),m=i.forwardRef(function(e,t){var a=e.classes,s=e.className,m=e.color,b=void 0===m?"primary":m,p=e.component,f=void 0===p?"a":p,v=e.onBlur,g=e.onFocus,h=e.TypographyClasses,O=e.underline,j=void 0===O?"hover":O,N=e.variant,y=void 0===N?"inherit":N,w=Object(o.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),C=Object(l.a)(),k=C.isFocusVisible,E=C.onBlurVisible,x=C.ref,V=i.useState(!1),R=V[0],B=V[1],H=Object(u.a)(t,x);return i.createElement(d.a,Object(n.a)({className:Object(r.a)(a.root,a["underline".concat(Object(c.a)(j))],s,R&&a.focusVisible,"button"===f&&a.button),classes:h,color:b,component:f,onBlur:function(e){R&&(E(),B(!1)),v&&v(e)},onFocus:function(e){k(e)&&B(!0),g&&g(e)},ref:H,variant:y},w))});t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},390:function(e,t,a){},400:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=(a(390),a(322)),r=a(323),c=a(325),s=a(324),l=a(222),u=a(118),d=a(326);function m(e){var t,a=e.video.snippet;return o.a.createElement(u.a,{in:!0},o.a.createElement(i.a,{className:"SongCard",style:{width:"18rem"},onClick:function(){return e.onPlay(e.video,e.key_,e.list)}},o.a.createElement(r.a,null,o.a.createElement(c.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:e.thumbnail||a.thumbnails.high.url,title:(t=a.title,t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")),loading:"lazy"}),o.a.createElement(s.a,{className:"text-left"},o.a.createElement(l.a,{gutterBottom:!0,variant:"h6",component:"p",className:"text-truncate"},a.title.slice(0,70)+" ..."),o.a.createElement(l.a,{variant:"body2",color:"textSecondary",style:{textDecoration:"none"},component:d.a,to:"/artist?id=".concat(a.channelId),className:"text-truncate"},a.description?a.description.slice(0,70)+" ...":"",o.a.createElement("span",{className:"text-muted"},a.channelTitle))))))}m.defaultProps={},t.default=m}}]);
//# sourceMappingURL=20.8f1ed0fb.chunk.js.map