(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,a){"use strict";a.r(t);var n=a(55);a.d(t,"default",function(){return n.a})},303:function(e,t,a){"use strict";var n=a(1),i=a(34),r=a(2),l=a(0),o=(a(5),a(3)),c=a(108),s=a(35),d=a(4),u=a(272),m=l.forwardRef(function(e,t){var a=e.autoFocus,d=e.checked,m=e.checkedIcon,p=e.classes,f=e.className,h=e.defaultChecked,v=e.disabled,b=e.icon,g=e.id,E=e.inputProps,y=e.inputRef,k=e.name,O=e.onBlur,S=e.onChange,j=e.onFocus,x=e.readOnly,w=e.required,C=e.tabIndex,z=e.type,L=e.value,N=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),M=Object(c.a)({controlled:d,default:Boolean(h),name:"SwitchBase",state:"checked"}),P=Object(i.a)(M,2),I=P[0],T=P[1],B=Object(s.a)(),H=v;B&&"undefined"===typeof H&&(H=B.disabled);var V="checkbox"===z||"radio"===z;return l.createElement(u.a,Object(n.a)({component:"span",className:Object(o.a)(p.root,f,I&&p.checked,H&&p.disabled),disabled:H,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),B&&B.onFocus&&B.onFocus(e)},onBlur:function(e){O&&O(e),B&&B.onBlur&&B.onBlur(e)},ref:t},N),l.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:h,className:p.input,disabled:H,id:V&&g,name:k,onChange:function(e){var t=e.target.checked;T(t),S&&S(e,t)},readOnly:x,ref:y,required:w,tabIndex:C,type:z,value:L},E)),I?m:b)});t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},304:function(e,t,a){"use strict";var n=a(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef(function(t,a){return r.default.createElement(l.default,(0,i.default)({ref:a},t),e)}));0;return a.muiName=l.default.muiName,a};var i=n(a(148)),r=n(a(0)),l=n(a(146))},317:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),l=(a(5),a(3)),o=a(4),c=a(8),s=r.forwardRef(function(e,t){var a=e.classes,o=e.className,s=e.color,d=void 0===s?"default":s,u=e.component,m=void 0===u?"li":u,p=e.disableGutters,f=void 0!==p&&p,h=e.disableSticky,v=void 0!==h&&h,b=e.inset,g=void 0!==b&&b,E=Object(i.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return r.createElement(m,Object(n.a)({className:Object(l.a)(a.root,o,"default"!==d&&a["color".concat(Object(c.a)(d))],g&&a.inset,!v&&a.sticky,!f&&a.gutters),ref:t},E))});t.a=Object(o.a)(function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}},{name:"MuiListSubheader"})(s)},334:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),l=(a(5),a(3)),o=a(4),c=r.forwardRef(function(e,t){var a=e.classes,o=e.className,c=Object(i.a)(e,["classes","className"]);return r.createElement("div",Object(n.a)({className:Object(l.a)(a.root,o),ref:t},c))});t.a=Object(o.a)(function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}},{name:"MuiAccordionDetails"})(c)},335:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),l=(a(5),a(3)),o=a(35),c=a(4),s=a(162),d=a(8),u=r.forwardRef(function(e,t){e.checked;var a=e.classes,c=e.className,u=e.control,m=e.disabled,p=(e.inputRef,e.label),f=e.labelPlacement,h=void 0===f?"end":f,v=(e.name,e.onChange,e.value,Object(i.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),b=Object(o.a)(),g=m;"undefined"===typeof g&&"undefined"!==typeof u.props.disabled&&(g=u.props.disabled),"undefined"===typeof g&&b&&(g=b.disabled);var E={disabled:g};return["checked","name","onChange","value","inputRef"].forEach(function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(E[t]=e[t])}),r.createElement("label",Object(n.a)({className:Object(l.a)(a.root,c,"end"!==h&&a["labelPlacement".concat(Object(d.a)(h))],g&&a.disabled),ref:t},v),r.cloneElement(u,E),r.createElement(s.a,{component:"span",className:Object(l.a)(a.label,g&&a.disabled)},p))});t.a=Object(c.a)(function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}},{name:"MuiFormControlLabel"})(u)},336:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),l=(a(5),a(3)),o=a(4),c=a(26),s=a(8),d=a(303),u=r.forwardRef(function(e,t){var a=e.classes,o=e.className,c=e.color,u=void 0===c?"secondary":c,m=e.edge,p=void 0!==m&&m,f=e.size,h=void 0===f?"medium":f,v=Object(i.a)(e,["classes","className","color","edge","size"]),b=r.createElement("span",{className:a.thumb});return r.createElement("span",{className:Object(l.a)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===h&&a["size".concat(Object(s.a)(h))])},r.createElement(d.a,Object(n.a)({type:"checkbox",icon:b,checkedIcon:b,classes:{root:Object(l.a)(a.switchBase,a["color".concat(Object(s.a)(u))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},v)),r.createElement("span",{className:a.track}))});t.a=Object(o.a)(function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}},{name:"MuiSwitch"})(u)},341:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(253);t.a=Object(r.a)(i.a.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp")},350:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(253);t.a=Object(r.a)(i.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done")},377:function(e,t,a){},378:function(e,t,a){},379:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(253);t.a=Object(r.a)(i.a.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}),"Pause")},380:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(253);t.a=Object(r.a)(i.a.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PlayCircleOutline")},381:function(e,t,a){"use strict";var n=a(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(304)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),i.default.createElement("path",{d:"M10.89 16h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zM15.17 14.24c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32.04-.29.04-.48v-.97z"})),"Replay10");t.default=r},382:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(253);t.a=Object(r.a)(i.a.createElement("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"}),"Cast")},383:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(253);t.a=Object(r.a)(i.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle")},423:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),r=a(12),l=a(39),o=a(0),c=a.n(o),s=(a(377),a(172)),d=a(272),u=a(159),m=a(271),p=a(279),f=a(319),h=a(162),v=a(318),b=a(379),g=a(253),E=Object(g.a)(c.a.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}),"Loop"),y=a(350),k=a(341),O=a(380),S=a(413),j=Object(g.a)(c.a.createElement("path",{d:"M6 6h2v12H6zm3.5 6l8.5 6V6z"}),"SkipPrevious"),x=Object(g.a)(c.a.createElement(c.a.Fragment,null,c.a.createElement("path",{d:"M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z"}),c.a.createElement("path",{d:"M10.86 15.94v-4.27h-.09L9 12.3v.69l1.01-.31v3.26zM12.25 13.44v.74c0 1.9 1.31 1.82 1.44 1.82.14 0 1.44.09 1.44-1.82v-.74c0-1.9-1.31-1.82-1.44-1.82-.14 0-1.44-.09-1.44 1.82zm2.04-.12v.97c0 .77-.21 1.03-.59 1.03s-.6-.26-.6-1.03v-.97c0-.75.22-1.01.59-1.01.38-.01.6.26.6 1.01z"})),"Forward10"),w=Object(g.a)(c.a.createElement("path",{d:"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"}),"SkipNext"),C=Object(g.a)(c.a.createElement("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown"),z=Object(g.a)(c.a.createElement("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp"),L=a(382),N=Object(g.a)(c.a.createElement("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"}),"RepeatOne"),M=Object(g.a)(c.a.createElement("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"}),"Repeat"),P=Object(g.a)(c.a.createElement("path",{d:"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"}),"Toc"),I=a(383),T=a(381),B=a.n(T),H=a(109),V=a(348),D=a(60),A=a(36),F=a(106),R=a(51),$=Object(F.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement}})(Object(R.a)(function(e){if(!e.componentState.Dialog)return c.a.createElement(c.a.Fragment,null);var t=c.a.useState(e.audioElement.currentTime||0),a=Object(l.a)(t,2),n=a[0],s=a[1];function d(e){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(i.a.mark(function t(a){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:isFinite(a)&&(s(a),e.audioElement.currentTime=a,n=D.a.getState().currentSong,D.a.dispatch(Object(A.g)(e.audioElement,n.videoElement,n.componentState,n.reOpenDialog,n.playList)));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(o.useEffect)(function(){return e.componentState.Dialog&&setInterval(function(){return!e.audioElement.paused&&e.componentState.Dialog?s(e.audioElement.currentTime):null},1e3),function(){}},[]),c.a.createElement(V.a,{className:"container -PlayerSlider",defaultValue:0,value:n,min:0,color:"primary.player.slider",max:e.audioElement.duration,onChange:function(){var e=Object(r.a)(i.a.mark(function e(t,a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d(a));case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()})})),_=a(69),W=(a(31),a(378),a(334)),U=a(262),q=a.n(U),G=a(273),Y=a(280),J=a(281),X=a(282),Z=q()(function(e){return{inline:{display:"inline"}}}),K=function(e){var t=Z();return c.a.createElement(Y.a,{button:!0,disabled:e.currentIndex===e.keyIndex,alignItems:"flex-start",selected:e.currentIndex===e.keyIndex,className:"p-0 px-1",onClick:e.onClick},c.a.createElement(J.a,null,c.a.createElement(m.a,{alt:e.title,src:e.image})),c.a.createElement(X.a,{className:"text-truncate",primary:e.title,secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{component:"span",variant:"body2",className:"".concat(t.inline," text-truncate"),color:"textPrimary"},c.a.createElement("div",{className:"text-truncate"},e.channelTitle)))}))};K.defaultProps={};var Q=Object(R.a)(K),ee=a(170),te=a(317),ae=q()(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}),ne=function(e){ae();var t=c.a.useState(c.a.createElement("div",null)),a=Object(l.a)(t,2),n=a[0],i=a[1],r=c.a.useState({AutoPlaySwitch:!1}),s=Object(l.a)(r,2);s[0],s[1];return Object(o.useEffect)(function(){i(function(){var t=e.playList.list.items.map(function(t,a){return c.a.createElement(Q,{onClick:function(){e.playSong({video:t,index:a})},currentIndex:a,keyIndex:e.playList.index,key:a,title:t.snippet.title,channelTitle:t.snippet.channelTitle,image:t.snippet.thumbnails.high.url})}),a=[];return t.forEach(function(e,n){a.push(e),void 0!==t[n+1]&&a.push(c.a.createElement(G.a,{variant:"inset",component:"li"}))}),a})},[]),c.a.createElement(W.a,{style:{maxHeight:"90vh",overflowY:"hidden"}},c.a.createElement(ee.a,{className:"text-truncate",style:{maxHeight:"85vh",overflowY:"scroll"},subheader:c.a.createElement(te.a,{component:"div",style:{backgroundColor:"primary.main"},className:"mx-0 px-0",id:"nested-list-subheader"},"Coming Up Next")},n))};ne.defaultProps={};var ie=Object(F.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement,videoElement:e.currentSong.videoElement,playList:e.currentSong.playList}})(Object(R.a)(ne)),re=a(115);var le=Object(F.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement}})(Object(R.a)(function(e){if(!e.componentState.Dialog)return c.a.createElement(c.a.Fragment,null);var t=c.a.useState(100*e.audioElement.volume),a=Object(l.a)(t,2),n=a[0],o=a[1];function s(e){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(i.a.mark(function t(a){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:isFinite(a)&&(o(a),e.audioElement.volume=a/100,n=D.a.getState().currentSong,D.a.dispatch(Object(A.g)(e.audioElement,n.videoElement,n.componentState,n.reOpenDialog,n.playList)));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}return c.a.createElement(V.a,{className:"container -PlayerSlider",defaultValue:100*e.audioElement.volume,value:n,min:0,max:100,onChange:function(){var e=Object(r.a)(i.a.mark(function e(t,a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(a));case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()})})),oe=a(249),ce=a(136),se=a(19),de="123456",ue=["a","b"],me=a(14),pe=a(53);function fe(e){return he.apply(this,arguments)}function he(){return(he=Object(r.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.toLowerCase().replace(/(?:https?|ftp|http):\/\/[\n\S]+/g,"").replace(/[^\w\d ]/g,"").split(" "),e.abrupt("return",a.filter(function(e){return-1===ue.indexOf(e)}).filter(function(e,t,a){return a.indexOf(e)===t}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ve(){return(ve=Object(r.a)(i.a.mark(function e(t){var a,n=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=n.length>1&&void 0!==n[1]?n[1]:function(){},Object(pe.a)().then(function(e){fe(t.snippet.description?t.snippet.description.substring(0,100):"").then(function(n){var i="";"object"===typeof t.id&&(i=t.id.videoId),"string"===typeof t.id&&(i=t.id);var r,o={method:"POST",body:(r={time:(new Date).getTime(),user_id:de,video_id:i,artist_name:t.snippet.channelTitle,channelId:t.snippet.channelId,tags:t.snippet.tags||[],yt_catagory:10,video_title:t.snippet.title.replace(/[^a-zA-Z ]/g,""),video_keywords:Object(se.a)(n),video_featuring_artists:t.snippet.title.replace(/[^a-zA-Z ]/g,"").split(/ft.|feat.|ft|feat/i)||"",video_description:t.snippet.description?t.snippet.description.substring(0,100):""},Object.entries(r).map(function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return"".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(n))}).join("&")),headers:new Headers({"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)})};fetch(me.a.saveWatchHistory,o).then(function(){a()}).catch(function(e){return e})})});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var be=a(336),ge=a(335),Ee=a(18),ye=a(43),ke=a(177),Oe=a(131),Se=a(129),je=Object(g.a)(c.a.createElement(c.a.Fragment,null,c.a.createElement("path",{d:"M6 22h12l-6-6z"}),c.a.createElement("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),"Airplay"),xe=a(77),we=Object(ke.a)({avatar:{backgroundColor:xe.a[100],color:xe.a[600]}});function Ce(e){we();var t=e.onClose,a=(e.selectedValue,e.open),n=e.emails;return c.a.createElement(Se.a,{onClose:function(){t()},"aria-labelledby":"simple-dialog-title",open:a},c.a.createElement(Oe.a,{id:"simple-dialog-title"},"Select Cast Device"),c.a.createElement(ee.a,null,n.map(function(e){return c.a.createElement(Y.a,{button:!0,onClick:function(){t(e)},key:e},c.a.createElement(J.a,null,c.a.createElement(m.a,null,c.a.createElement(je,null))),c.a.createElement(X.a,{primary:e}))})))}a(132);var ze=a(112),Le=a(178),Ne=Object(o.lazy)(function(){return Promise.resolve().then(a.bind(null,21))}),Me=function(e){return c.a.createElement(o.Suspense,{fallback:null},c.a.createElement(Ne,e))},Pe=function(e){return e.componentState.Dialog?c.a.createElement("div",{className:"cardSlider text-left Slider ".concat(e.isTv?"py-0 my-0":"mb-0 py-0 pb-1"),onLoad:"document.querySelector('.SongNextSliderSelected').scrollIntoView({ behavior: 'smooth', block: 'center'  });",style:{scrollSnapType:"both mandatory"}},e.playList.list.items.map(function(t,a){return c.a.createElement(ce.a,{in:!0,key:a},c.a.createElement(ze.a,{className:"ImageSliderIMG"},c.a.createElement(Le.a,null,c.a.createElement("img",{src:t.snippet.thumbnails.high.url,className:"image mb-0 mx-3 img-fluid rounded shadow ".concat(a===e.playList.index?"SongNextSliderSelected":""),onError:"this.onerror=null;this.src=http://docs-kabeersnetwork-kview-app-sta.rf.gd/Private/uploads/5f6d7b19418f3---images.png",onClick:function(){return e.playSong({video:t,index:a})},style:{scrollSnapAlign:"center",marginTop:"0",width:a===e.playList.index&&e.isTv?"17rem":"15rem",height:a===e.playList.index&&e.isTv?"17rem":"15rem",border:a===e.playList.index?"white solid 0.1rem":null},alt:t.snippet.title}))))}),e.nowLoading?null:c.a.createElement("div",{style:{zIndex:10}},c.a.createElement(Me,null))):c.a.createElement(c.a.Fragment,null)};Pe.defaultProps={};var Ie=Object(F.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement,videoElement:e.currentSong.videoElement,playList:e.currentSong.playList}})(Object(R.a)(Pe)),Te=a(347),Be=(c.a.forwardRef(function(e,t){return c.a.createElement(s.a,Object.assign({direction:"up",ref:t},e))}),function(e){if(e.hidden||!e.videoElement)return null;var t=Object(Ee.e)(),a=Object(re.useDialog)(),n=c.a.useState(D.a.getState().currentSong.componentState.Dialog),s=Object(l.a)(n,2),g=s[0],T=s[1],V=c.a.useState(c.a.createElement(d.a,{color:"#60B18A",colorSecondary:"#60B18A",onClick:Ae},c.a.createElement(b.a,null))),F=Object(l.a)(V,2),R=F[0],W=F[1],U=c.a.useState(c.a.createElement(d.a,{color:"primary.player.invertButtons.main",style:{backgroundColor:"primary.player.invertButtons.main"},onClick:function(){Y.loop=!0,G(c.a.createElement(d.a,{color:"primary.player.invertButtons.invert",onClick:function(){Y.loop=!1},style:{backgroundColor:"primary.player.invertButtons.invert"}},c.a.createElement(E,null)))}},c.a.createElement(E,null))),q=Object(l.a)(U,2),G=(q[0],q[1]),Y=e.audioElement,J=c.a.useState(c.a.createElement("div",null)),X=Object(l.a)(J,2),Z=X[0],K=X[1],Q=Object(_.b)(),ee=Q.enqueueSnackbar,te=(Q.closeSnackbar,c.a.useState(!1)),ae=Object(l.a)(te,2),ne=ae[0],se=ae[1],de=c.a.useState(e.autoPlay),ue=Object(l.a)(de,2),me=ue[0],pe=ue[1],fe=new AbortController,he=Object(ye.d)(),ke=c.a.useState(!1),Oe=Object(l.a)(ke,2),Se=Oe[0],je=Oe[1],xe=c.a.useState(he[0]),we=Object(l.a)(xe,2),ze=we[0],Le=we[1],Ne=function(){Be([!1,!0]),T(!1)},Me=function(){Be([!0,!1]),T(!0)},Pe=function(t){Y.onended=t?function(){e.playList.list.items[e.playList.index+1]&&Fe({video:e.playList.list.items[e.playList.index+1],index:e.playList.index+1})}:function(){},Be([!0,!1])};function Be(t){t||(t=[D.a.getState().currentSong.componentState.Dialog,D.a.getState().currentSong.componentState.MiniPlayer]),D.a.dispatch(Object(A.g)(Y,e.videoElement,{Dialog:t[0],MiniPlayer:t[1]},Me,{index:e.playList.index,list:e.playList.list})),D.a.dispatch(Object(A.f)(!me))}function He(){return(He=Object(r.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Object(H.i)({videoId:e.videoElement.id,title:e.videoElement.snippet.title,channelTitle:e.videoElement.snippet.channelTitle,tags:e.videoElement.snippet.tags,thumbnail:e.videoElement.snippet.thumbnails.high.url,rating:0});case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Ve(){if(!navigator.onLine)return ee("No Connection, Download Failed");Object(H.c)({videoId:"object"==typeof e.videoElement.id?e.videoElement.id.videoId:"string"==typeof e.videoElement.id&&e.videoElement.id,rating:0,title:e.videoElement.snippet.title,channelTitle:e.videoElement.snippet.channelTitle,tags:e.videoElement.snippet.tags,videoElement:e.videoElement,success:function(){K(c.a.createElement(d.a,{onClick:Re},c.a.createElement(y.a,null)))},error:function(){ee("Download Failed"),K(c.a.createElement(ce.a,{in:!0},c.a.createElement(d.a,{onClick:Ve},c.a.createElement(k.a,null))))}},fe),K(c.a.createElement(ce.a,{in:!0},c.a.createElement(d.a,{onClick:Re},c.a.createElement(u.a,{color:"primary.light",size:25}))))}function De(){Y.play(),W(c.a.createElement(d.a,{onClick:Ae},c.a.createElement(b.a,null)))}function Ae(){Y.pause(),W(c.a.createElement(d.a,{className:"PlayerPlayPauseBtn",onClick:De},c.a.createElement(O.a,null)))}function Fe(t){var a="";"object"===typeof t.video.id&&(a=t.video.id.videoId),"string"===typeof t.video.id&&(a=t.video.id),Object(H.f)(a).then(function(a){if(a){T(!1),Be([!1,!1]);try{e.changes({uri:a,thumbnail:t.video.snippet.thumbnails.high.url,video:t.video,list:e.playList.list,index:t.index},e.offline).then(function(){e={}})}catch(n){console.log(n),ee("Failed To Load Song")}}}).catch(function(e){return ee("Failed To Load Song")})}function Re(){return $e.apply(this,arguments)}function $e(){return($e=Object(r.a)(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n={title:c.a.createElement("div",{className:"k-dialog-body-title text-truncate"},"Delete From Downloads")||"Nothing Here!",message:c.a.createElement("div",{className:"k-dialog-body-inner"},c.a.createElement("div",{className:"d-flex justify-content-center mb-3"},c.a.createElement(m.a,{src:e.videoElement.snippet.thumbnails.high.url,alt:"Song Thumbnail"})),"Do You want to delete ",e.videoElement.snippet.title," from downloads?",c.a.createElement("br",null))||"Nothing Here!"},a.confirm(n).then(function(){var t="";"object"===typeof e.videoElement.id&&(t=e.videoElement.id.videoId),"string"===typeof e.videoElement.id&&(t=e.videoElement.id),Object(H.b)(t).then(function(){K(c.a.createElement(d.a,{onClick:Ve},c.a.createElement(k.a,null)))})}).catch(function(){});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(o.useEffect)(function(){(function(){return He.apply(this,arguments)})().then(navigator.onLine?function(e){return ve.apply(this,arguments)}(e.videoElement):null).then(Be([!0,!1])).then(function(){Y.play(),function(e,t,a){if("mediaSession"in navigator){var n=function(e){switch(e.action){case"seekforward":a.currentTime=Math.min(a.currentTime+i,a.duration);break;case"seekbackward":a.currentTime=Math.max(a.currentTime-i,0)}};navigator.mediaSession.metadata=new window.MediaMetadata({title:e.title,artist:e.artist,album:e.album,artwork:e.artwork});var i=10;navigator.mediaSession.setActionHandler("play",t.playAudio),navigator.mediaSession.setActionHandler("pause",t.pauseAudio),navigator.mediaSession.setActionHandler("seekforward",n),navigator.mediaSession.setActionHandler("seekbackward",n)}}({artist:e.videoElement.snippet.channelTitle,title:e.videoElement.snippet.title,artwork:[{src:e.videoElement.snippet.thumbnails.high.url,sizes:"96x96",type:"image/png"}]},{playAudio:De,pauseAudio:Ae},Y)});var t="";return"object"===typeof e.videoElement.id&&(t=e.videoElement.id.videoId),"string"===typeof e.videoElement.id&&(t=e.videoElement.id),Object(H.h)(t).then(function(e){K(e?c.a.createElement(d.a,{onClick:Re},c.a.createElement(y.a,null)):c.a.createElement(d.a,{onClick:Ve},c.a.createElement(k.a,null)))}),Pe(!me),function(){fe.abort()}},[]);var _e=function(){var e=Object(r.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:je(!0);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)(function(){return function(){fe.abort()}},[]),c.a.createElement("div",{className:"Player"},c.a.createElement(Ce,{onClose:function(t){if(!t)return je(!1);je(!1),Le(t),Object(ye.f)(e.videoElement,t),Ae(),Ne();ye.c.setSnackbarKey(ee("Playing ".concat(e.videoElement.snippet.title," on ").concat(t),{persist:!0}))},open:Se,selectedValue:ze,emails:he}),c.a.createElement(Te.a,{onClose:Ne,anchor:"bottom",variant:"temporary",ModalProps:{keepMounted:!0},swipeAreaWidth:20,disableBackdropTransition:!0,open:g,disableSwipeToOpen:!e.componentState.MiniPlayer&&!g,onOpen:function(){Be([!0,!1]),T(!0)}},c.a.createElement(p.a,{color:"transparent",elevation:0,style:{position:"relative"}},c.a.createElement(f.a,{color:"#BBBBBB",style:{color:"#BBBBBB"}},c.a.createElement(d.a,{edge:"start",onClick:Ne,"aria-label":"close"},c.a.createElement(S.a,null)),c.a.createElement("div",{style:{flex:"1 1 auto"}}),c.a.createElement(ge.a,{control:c.a.createElement(be.a,{checked:!me,onChange:function(){pe(!me),Pe(me)},name:"Autoplay"}),labelPlacement:"start",label:"Autoplay"}))),c.a.createElement("div",{style:{backgroundColor:"primary.dark",height:"90vh",width:"100%",minHeight:"90vh"}},c.a.createElement("div",{className:" -ImageCircle thumbnail- text-center my-0 py-0",style:{marginTop:"0rem"}},c.a.createElement(Ie,{playSong:Fe,nowLoading:e.progress_hidden}),c.a.createElement(h.a,{variant:"h6",component:"div",className:"mx-4 py-0 text-truncate text-left"},e.videoElement.snippet.title||"Untitled",c.a.createElement(h.a,{variant:"body2",style:{opacity:"50%"}},e.videoElement.snippet.channelTitle||"Unavailable")),c.a.createElement("div",{className:"mx-4"},c.a.createElement($,null)),c.a.createElement("div",{className:"container mb-0 smallOnDesktop",style:{width:"100%",display:"inline-flex",justifyContent:"space-around",transform:"translate(0%)"}},e.playList.list.items[e.playList.index-1]?c.a.createElement(d.a,{onClick:function(){return Fe({video:e.playList.list.items[e.playList.index-1],index:e.playList.index-1})}},c.a.createElement(j,null)):c.a.createElement(d.a,{disabled:!0},c.a.createElement(j,null)),c.a.createElement(d.a,{onClick:function(){return Y.currentTime-=10}},c.a.createElement(B.a,null)),c.a.createElement("div",{className:"-ExpandedPlayButtonContainer"},R),c.a.createElement(d.a,{onClick:function(){return Y.currentTime+=10}},c.a.createElement(x,null)),e.playList.list.items[e.playList.index+1]?c.a.createElement(d.a,{onClick:function(){Fe({video:e.playList.list.items[e.playList.index+1],index:e.playList.index+1})}},c.a.createElement(w,null)):c.a.createElement(d.a,{disabled:!0},c.a.createElement(w,null))),c.a.createElement("br",null),c.a.createElement("div",{className:"px-4 w-100 smallOnDesktop d-inline-flex"},c.a.createElement(oe.a,null),c.a.createElement(d.a,null,c.a.createElement(C,{fontSize:"small"})),c.a.createElement(le,null),c.a.createElement(d.a,null,c.a.createElement(z,{fontSize:"small"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"px-4 w-100 d-inline-flex smallOnDesktop",style:{justifyContent:"space-around"}},navigator.onLine&&ye.b&&he.length?c.a.createElement(d.a,{onClick:_e},c.a.createElement(L.a,null)):null,Y.loop?c.a.createElement(d.a,{onClick:function(){G(!1),Y.loop=!1}},c.a.createElement(N,null)):c.a.createElement(d.a,{onClick:function(){G(!0),Y.loop=!0}},c.a.createElement(M,null)),Z||c.a.createElement(d.a,null,c.a.createElement(u.a,{size:25})),c.a.createElement(d.a,{onClick:function(){se(!0)}},c.a.createElement(P,null)),c.a.createElement(d.a,{onClick:function(){return navigator.onLine?(t.push("/artist?id=".concat(e.videoElement.channelId)),Ne()):ee("No Connection")}},c.a.createElement(I.a,null))),c.a.createElement(v.a,{anchor:"bottom",open:ne,onClose:function(){se(!1)},onOpen:function(){se(!0)}},c.a.createElement(ie,{playSong:Fe}))))))});Be.defaultProps={};t.default=Object(F.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement,videoElement:e.currentSong.videoElement,playList:e.currentSong.playList,autoPlayMode:e.currentSong.autoPlay}})(Object(R.a)(Be))}}]);
//# sourceMappingURL=9.738034e8.chunk.js.map