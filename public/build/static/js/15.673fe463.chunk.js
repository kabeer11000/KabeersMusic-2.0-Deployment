(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{343:function(e,t,n){"use strict";var a=n(2),i=n(1),r=n(0),o=(n(5),n(3)),c=n(4),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=r.forwardRef(function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,f=e.component,g=void 0===f?"div":f,m=e.container,x=void 0!==m&&m,p=e.direction,v=void 0===p?"row":p,h=e.item,b=void 0!==h&&h,y=e.justify,w=void 0===y?"flex-start":y,j=e.lg,S=void 0!==j&&j,E=e.md,C=void 0!==E&&E,k=e.sm,O=void 0!==k&&k,W=e.spacing,N=void 0===W?0:W,I=e.wrap,L=void 0===I?"wrap":I,z=e.xl,M=void 0!==z&&z,G=e.xs,P=void 0!==G&&G,F=e.zeroMinWidth,B=void 0!==F&&F,R=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(o.a)(d.root,u,x&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],b&&d.item,B&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==L&&d["wrap-xs-".concat(String(L))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==P&&d["grid-xs-".concat(String(P))],!1!==O&&d["grid-sm-".concat(String(O))],!1!==C&&d["grid-md-".concat(String(C))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==M&&d["grid-xl-".concat(String(M))]);return r.createElement(g,Object(i.a)({className:D,ref:t},R))}),f=Object(c.a)(function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach(function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})}),n}(e,"xs"),e.breakpoints.keys.reduce(function(t,n){return function(e,t,n){var a={};l.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))},{name:"MuiGrid"})(u);t.a=f},348:function(e,t,n){"use strict";var a=n(1),i=n(2),r=n(0),o=(n(5),n(3)),c=n(4),s=n(9),l=r.forwardRef(function(e,t){var n=e.classes,c=e.className,l=e.color,d=void 0===l?"default":l,u=e.component,f=void 0===u?"li":u,g=e.disableGutters,m=void 0!==g&&g,x=e.disableSticky,p=void 0!==x&&x,v=e.inset,h=void 0!==v&&v,b=Object(i.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return r.createElement(f,Object(a.a)({className:Object(o.a)(n.root,c,"default"!==d&&n["color".concat(Object(s.a)(d))],h&&n.inset,!p&&n.sticky,!m&&n.gutters),ref:t},b))});t.a=Object(c.a)(function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}},{name:"MuiListSubheader"})(l)},396:function(e,t,n){},405:function(e,t,n){"use strict";n.r(t);var a=n(25),i=n(0),r=n.n(i),o=(n(396),n(348)),c=n(343),s=n(111),l=n(141),d=n.n(l),u=n(110),f=n(48),g=n(28),m=n.n(g),x=n(167),p="PLFgquLnL59akA2PflFpeQG9L01VFg90wS",v=d()(function(e){return{root:{flexGrow:1},paper:{margin:e.spacing(1),padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}}),h=function(e){var t=v();return r.a.createElement(c.a,{item:!0,xs:6,sm:4,onClick:function(){e.onClick(e.video,e.index)}},r.a.createElement(s.a,{className:t.paper},r.a.createElement("img",{src:"props.video.author.avatar",alt:"PlayList Icon"}),r.a.createElement(u.a,{className:"text-left text-truncate"},e.video.title)))},b=function(){v();var e=r.a.useState(r.a.createElement(r.a.Fragment,null)),t=Object(a.a)(e,2),n=t[0],s=t[1],l=function(e,t){console.log(e,t)};return Object(i.useEffect)(function(){Object(f.a)().then(function(e){fetch(m.a.getPlayListById(p),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.json()}).then(function(e){s(e.items.map(function(e,t){return r.a.createElement(h,{onClick:l,video:e,index:t})}))}).catch(function(e){return s(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Internet Connection",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.a.createElement(x.a,{onClick:function(){}},"Retry");return r.a.createElement("div",{className:"errorPage",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),r.a.createElement("br",null),r.a.createElement("div",{className:"text-truncate"},e),t)}())})})},[]),r.a.createElement("div",{className:"PlayLists"},r.a.createElement(o.a,{component:"div"},"December"),r.a.createElement(c.a,{container:!0,spacing:0},n||null))};b.defaultProps={},t.default=b}}]);
//# sourceMappingURL=15.673fe463.chunk.js.map