(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{383:function(e,a,t){},413:function(e,a,t){"use strict";t.r(a);t(37);var l=t(25),n=t(0),r=t.n(n),c=(t(383),t(290)),o=t(362),m=t(361),i=t(348),s=t(402),u=t(403),d=t(195),b=t(288),E=t(291),g=t(160),S=t(303),p=t(318),w=t(364),f=t(296),k=t(393),h=t.n(k),O=t(384),y=t(147),N=t(38),D=Object(N.a)(function(){var e=r.a.useState(!1),a=Object(l.a)(e,2),t=a[0],n=a[1],c=Object(y.b)(),o=c.enqueueSnackbar;c.closeSnackbar;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{title:"Send Feedback",arrow:!0},r.a.createElement(f.a,{onClick:function(){return n(!0)}},r.a.createElement(h.a,null))),r.a.createElement(O.FeedbackDialog,{open:t,onClose:function(){return n(!1)},onSubmit:function(){o("FeedBack Sent!, We will get back to you soon")}}))}),I=t(126),j=function(e){var a=r.a.useState(["darkmode"]),t=Object(l.a)(a,2);t[0],t[1];return r.a.createElement("div",{className:"Settings"},r.a.createElement(g.a,{title:"Settings"}),r.a.createElement(d.a,{className:"mt-5 text-left",subheader:r.a.createElement(i.a,null,"Settings")},r.a.createElement("div",{style:{display:"inline-flex",justifyContent:"center"},className:"w-100"},localStorage.getItem(I.a.userData)?r.a.createElement(S.a,{alt:JSON.parse(atob(localStorage.getItem(I.a.userData))).username,src:JSON.parse(atob(localStorage.getItem(I.a.userData))).account_image}):r.a.createElement(S.a,{src:r.a.createElement(s.a,null)})),r.a.createElement("div",{className:"text-center"},r.a.createElement(c.a,{id:"switch-list-label-wifi",primary:"Welcome ".concat(null===localStorage.getItem(I.a.userData)?"User":JSON.parse(atob(localStorage.getItem(I.a.userData))).username)})),r.a.createElement(p.a,null),r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement(u.a,null)),r.a.createElement(c.a,{id:"switch-list-label-wifi",primary:"Dark Mode"}),r.a.createElement(o.a,null,r.a.createElement(m.a,{edge:"end",onChange:e.handleTheme,checked:null!==localStorage.getItem("darkmode")&&JSON.parse(localStorage.getItem("darkmode")),inputProps:{"aria-labelledby":"switch-list-label-wifi"}}))),r.a.createElement(b.a,null,r.a.createElement(c.a,{id:"switch-list-label-bluetooth",primary:"Feedback and Help"}),r.a.createElement(o.a,null,r.a.createElement(D,null)))))};j.defaultProps={};a.default=Object(N.a)(j)}}]);
//# sourceMappingURL=18.302329fb.chunk.js.map