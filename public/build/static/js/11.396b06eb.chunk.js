(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{253:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(1),n=a(0),o=a.n(n),i=a(55);function c(e,t){var a=o.a.memo(o.a.forwardRef(function(t,a){return o.a.createElement(i.a,Object(r.a)({ref:a},t),e)}));return a.muiName=i.a.muiName,a}},277:function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(0),i=(a(5),a(3)),c=a(4),l=a(8),s=a(97),u=o.forwardRef(function(e,t){var a=e.classes,c=e.className,u=e.color,d=void 0===u?"primary":u,f=e.position,m=void 0===f?"fixed":f,p=Object(n.a)(e,["classes","className","color","position"]);return o.createElement(s.a,Object(r.a)({square:!0,component:"header",elevation:4,className:Object(i.a)(a.root,a["position".concat(Object(l.a)(m))],a["color".concat(Object(l.a)(d))],c,"fixed"===m&&"mui-fixed"),ref:t},p))});t.a=Object(c.a)(function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}},{name:"MuiAppBar"})(u)},315:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(1),n=a(2),o=a(0);function i(e,t){var a=t.disableHysteresis,r=void 0!==a&&a,n=t.threshold,o=void 0===n?100:n,i=t.target,c=e.current;return i&&(e.current=void 0!==i.pageYOffset?i.pageYOffset:i.scrollTop),!(!r&&void 0!==c&&e.current<c)&&e.current>o}var c="undefined"!==typeof window?window:null;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,a=void 0===t?i:t,l=e.target,s=void 0===l?c:l,u=Object(n.a)(e,["getTrigger","target"]),d=o.useRef(),f=o.useState(function(){return a(d,u)}),m=f[0],p=f[1];return o.useEffect(function(){var e=function(){p(a(d,Object(r.a)({target:s},u)))};return e(),s.addEventListener("scroll",e),function(){s.removeEventListener("scroll",e)}},[s,a,JSON.stringify(u)]),m}},316:function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(0),i=(a(5),a(3)),c=a(8),l=a(4),s=a(26),u=a(30),d=o.forwardRef(function(e,t){var a=e.classes,l=e.className,s=e.color,d=void 0===s?"primary":s,f=e.value,m=e.valueBuffer,p=e.variant,b=void 0===p?"indeterminate":p,v=Object(n.a)(e,["classes","className","color","value","valueBuffer","variant"]),g=Object(u.a)(),h={},y={bar1:{},bar2:{}};if("determinate"===b||"buffer"===b)if(void 0!==f){h["aria-valuenow"]=Math.round(f),h["aria-valuemin"]=0,h["aria-valuemax"]=100;var O=f-100;"rtl"===g.direction&&(O=-O),y.bar1.transform="translateX(".concat(O,"%)")}else 0;if("buffer"===b)if(void 0!==m){var x=(m||0)-100;"rtl"===g.direction&&(x=-x),y.bar2.transform="translateX(".concat(x,"%)")}else 0;return o.createElement("div",Object(r.a)({className:Object(i.a)(a.root,a["color".concat(Object(c.a)(d))],l,{determinate:a.determinate,indeterminate:a.indeterminate,buffer:a.buffer,query:a.query}[b]),role:"progressbar"},h,{ref:t},v),"buffer"===b?o.createElement("div",{className:Object(i.a)(a.dashed,a["dashedColor".concat(Object(c.a)(d))])}):null,o.createElement("div",{className:Object(i.a)(a.bar,a["barColor".concat(Object(c.a)(d))],("indeterminate"===b||"query"===b)&&a.bar1Indeterminate,{determinate:a.bar1Determinate,buffer:a.bar1Buffer}[b]),style:y.bar1}),"determinate"===b?null:o.createElement("div",{className:Object(i.a)(a.bar,("indeterminate"===b||"query"===b)&&a.bar2Indeterminate,"buffer"===b?[a["color".concat(Object(c.a)(d))],a.bar2Buffer]:a["barColor".concat(Object(c.a)(d))]),style:y.bar2}))});t.a=Object(l.a)(function(e){var t=function(t){return"light"===e.palette.type?Object(s.i)(t,.62):Object(s.a)(t,.5)},a=t(e.palette.primary.main),r=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:a},colorSecondary:{backgroundColor:r},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}},{name:"MuiLinearProgress"})(d)},332:function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(0),i=(a(44),a(5),a(3)),c=a(4),l=o.forwardRef(function(e,t){var a=e.children,c=e.classes,l=e.className,s=e.component,u=void 0===s?"div":s,d=e.onChange,f=e.showLabels,m=void 0!==f&&f,p=e.value,b=Object(n.a)(e,["children","classes","className","component","onChange","showLabels","value"]);return o.createElement(u,Object(r.a)({className:Object(i.a)(c.root,l),ref:t},b),o.Children.map(a,function(e,t){if(!o.isValidElement(e))return null;var a=void 0===e.props.value?t:e.props.value;return o.cloneElement(e,{selected:a===p,showLabel:void 0!==e.props.showLabel?e.props.showLabel:m,value:a,onChange:d})}))});t.a=Object(c.a)(function(e){return{root:{display:"flex",justifyContent:"center",height:56,backgroundColor:e.palette.background.paper}}},{name:"MuiBottomNavigation"})(l)},333:function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(0),i=(a(5),a(3)),c=a(4),l=a(178),s=o.forwardRef(function(e,t){var a=e.classes,c=e.className,s=e.icon,u=e.label,d=e.onChange,f=e.onClick,m=e.selected,p=e.showLabel,b=e.value,v=Object(n.a)(e,["classes","className","icon","label","onChange","onClick","selected","showLabel","value"]);return o.createElement(l.a,Object(r.a)({ref:t,className:Object(i.a)(a.root,c,m?a.selected:!p&&a.iconOnly),focusRipple:!0,onClick:function(e){d&&d(e,b),f&&f(e)}},v),o.createElement("span",{className:a.wrapper},s,o.createElement("span",{className:Object(i.a)(a.label,m?a.selected:!p&&a.iconOnly)},u)))});t.a=Object(c.a)(function(e){return{root:{transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:e.palette.text.secondary,flex:"1","&$iconOnly":{paddingTop:16},"&$selected":{paddingTop:6,color:e.palette.primary.main}},selected:{},iconOnly:{},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"},label:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s","&$iconOnly":{opacity:0,transitionDelay:"0s"},"&$selected":{fontSize:e.typography.pxToRem(14)}}}},{name:"MuiBottomNavigationAction"})(s)},341:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(253);t.a=Object(o.a)(n.a.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp")},352:function(e,t,a){},374:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(253);t.a=Object(o.a)(n.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home")},375:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(253);t.a=Object(o.a)(n.a.createElement("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"History")},376:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(253);t.a=Object(o.a)(n.a.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite")},413:function(e,t,a){"use strict";a.r(t);var r=a(39),n=a(0),o=a.n(n),i=(a(352),a(333)),c=a(374),l=a(341),s=a(375),u=a(376),d=a(262),f=a.n(d),m=a(332),p=a(277),b=a(105),v=(a(172),a(315),a(316)),g=a(51),h=f()({root:{width:"100%"}}),y=function(e){var t=h(),a=o.a.useState("recents"),n=Object(r.a)(a,2),d=n[0],f=n[1];return e.isTv?null:o.a.createElement(p.a,{color:"primary",style:{position:"fixed",top:"auto",bottom:0,width:"100%",marginLeft:e.isTv?"4.5rem":""},component:"div"},o.a.createElement("div",{style:{zIndex:"99999"},hidden:e.progress_hidden,className:"fixed-top"},o.a.createElement(v.a,null)),o.a.createElement(m.a,{value:d,onChange:function(e,t){f(t)},className:t.root},o.a.createElement(i.a,{style:{textDecoration:"none"},component:b.b,to:"/home",label:"Home",value:"recents",icon:o.a.createElement(c.a,null)}),o.a.createElement(i.a,{style:{textDecoration:"none"},component:b.b,to:"/downloads",label:"Downloads",value:"downloads",icon:o.a.createElement(l.a,null)}),o.a.createElement(i.a,{style:{textDecoration:"none"},component:b.b,to:"/history",label:"History",value:"history",icon:o.a.createElement(s.a,null)}),o.a.createElement(i.a,{style:{textDecoration:"none"},component:b.b,to:"/liked",label:"Liked",value:"favorites",icon:o.a.createElement(u.a,null)})))};y.defaultProps={},t.default=Object(g.a)(y)}}]);
//# sourceMappingURL=11.396b06eb.chunk.js.map