(this["webpackJsonptrivia-quiz"]=this["webpackJsonptrivia-quiz"]||[]).push([[4],{108:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),c=n(10),i=n.n(c);t.a=function(e){return o.a.forwardRef((function(t,n){return o.a.createElement("div",Object(a.a)({},t,{ref:n,className:i()(t.className,e)}))}))}},110:function(e,t,n){"use strict";var a,r=n(1),o=n(2),c=n(10),i=n.n(c),s=n(0),l=n.n(s),u=n(19),d=n(49),f=n(48),b=((a={})[u.b]="show",a[u.a]="show",a),v=l.a.forwardRef((function(e,t){var n=e.className,a=e.children,c=Object(o.a)(e,["className","children"]),v=Object(s.useCallback)((function(e){Object(f.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return l.a.createElement(u.e,Object(r.a)({ref:t,addEndListener:d.a},c,{onEnter:v}),(function(e,t){return l.a.cloneElement(a,Object(r.a)({},t,{className:i()("fade",n,a.props.className,b[e])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",t.a=v},111:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(15),c=n.n(o),i=n(0),s=n.n(i),l=n(10),u=n.n(l),d={label:c.a.string.isRequired,onClick:c.a.func},f=s.a.forwardRef((function(e,t){var n=e.label,o=e.onClick,c=e.className,i=Object(r.a)(e,["label","onClick","className"]);return s.a.createElement("button",Object(a.a)({ref:t,type:"button",className:u()("close",c),onClick:o},i),s.a.createElement("span",{"aria-hidden":"true"},"\xd7"),s.a.createElement("span",{className:"sr-only"},n))}));f.displayName="CloseButton",f.propTypes=d,f.defaultProps={label:"Close"},t.a=f},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}},115:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(10),c=n.n(o),i=n(0),s=n.n(i),l=n(46),u=n(43),d=n(11),f=n(110),b=n(111),v=n(108),m=n(42),p=n(109),O=Object(v.a)("h4");O.displayName="DivStyledAsH4";var h=Object(m.a)("alert-heading",{Component:O}),j=Object(m.a)("alert-link",{Component:p.a}),g={show:!0,transition:f.a,closeLabel:"Close alert"},y=s.a.forwardRef((function(e,t){var n=Object(l.a)(e,{show:"onClose"}),o=n.bsPrefix,i=n.show,v=n.closeLabel,m=n.className,p=n.children,O=n.variant,h=n.onClose,j=n.dismissible,g=n.transition,y=Object(r.a)(n,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),E=Object(d.a)(o,"alert"),N=Object(u.a)((function(e){h&&h(!1,e)})),x=!0===g?f.a:g,C=s.a.createElement("div",Object(a.a)({role:"alert"},x?void 0:y,{ref:t,className:c()(m,E,O&&E+"-"+O,j&&E+"-dismissible")}),j&&s.a.createElement(b.a,{onClick:N,label:v}),p);return x?s.a.createElement(x,Object(a.a)({unmountOnExit:!0},y,{ref:void 0,in:i}),C):i?C:null}));y.displayName="Alert",y.defaultProps=g,y.Link=j,y.Heading=h,t.a=y},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return a(e.querySelectorAll(t))}},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},124:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(10),c=n.n(o),i=n(0),s=n.n(i),l=n(11),u=n(42),d=n(108),f=s.a.createContext(null);f.displayName="CardContext";var b=f,v=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(l.a)(n,"card-img");return s.a.createElement(d,Object(a.a)({ref:t,className:c()(i?b+"-"+i:b,o)},f))}));v.displayName="CardImg",v.defaultProps={variant:null};var m=v,p=Object(d.a)("h5"),O=Object(d.a)("h6"),h=Object(u.a)("card-body"),j=Object(u.a)("card-title",{Component:p}),g=Object(u.a)("card-subtitle",{Component:O}),y=Object(u.a)("card-link",{Component:"a"}),E=Object(u.a)("card-text",{Component:"p"}),N=Object(u.a)("card-header"),x=Object(u.a)("card-footer"),C=Object(u.a)("card-img-overlay"),w=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.bg,d=e.text,f=e.border,v=e.body,m=e.children,p=e.as,O=void 0===p?"div":p,j=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(l.a)(n,"card"),y=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return s.a.createElement(b.Provider,{value:y},s.a.createElement(O,Object(a.a)({ref:t},j,{className:c()(o,g,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),v?s.a.createElement(h,null,m):m))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=m,w.Title=j,w.Subtitle=g,w.Body=h,w.Link=y,w.Text=E,w.Header=N,w.Footer=x,w.ImgOverlay=C;t.a=w},127:function(e,t,n){"use strict";var a,r=n(1),o=n(2),c=n(10),i=n.n(c),s=n(56),l=n(51),u=n(47),d=n(57);function f(e){if((!a&&0!==a||e)&&l.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var b=n(0),v=n.n(b);var m=n(43),p=n(114),O=n(55);function h(e){void 0===e&&(e=Object(u.a)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}function j(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var g=n(38),y=n(15),E=n.n(y),N=n(16),x=n.n(N),C=n(117);function w(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function k(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function S(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=k(e.className,t):e.setAttribute("class",k(e.className&&e.className.baseVal||"",t))}var R=n(17);function T(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function I(e){var t;return T(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=T(e)?Object(u.a)():Object(u.a)(e),n=T(e)||t.defaultView;return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight}var P=["template","script","style"],F=function(e,t,n){[].forEach.call(e.children,(function(e){-1===t.indexOf(e)&&function(e){var t=e.nodeType,n=e.tagName;return 1===t&&-1===P.indexOf(n.toLowerCase())}(e)&&n(e)}))};function D(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var A,M=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,a=void 0===n||n,r=t.handleContainerOverflow,o=void 0===r||r;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=o,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return function(e,t){var n=-1;return e.some((function(e,a){return!!t(e,a)&&(n=a,!0)})),n}(this.data,(function(t){return-1!==t.modals.indexOf(e)}))},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt(Object(R.a)(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(R.a)(t,n)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,n){var a=this.modals.indexOf(e),r=this.containers.indexOf(t);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;F(e,[n,a],(function(e){return D(!0,e)}))}(t,e),-1!==r)return this.data[r].modals.push(e),a;var o={modals:[e],classes:n?n.split(/\s+/):[],overflowing:I(t)};return this.handleContainerOverflow&&this.setContainerStyle(o,t),o.classes.forEach(w.bind(null,t)),this.containers.push(t),this.data.push(o),a},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),a=this.data[n],r=this.containers[n];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(t,1),0===a.modals.length)a.classes.forEach(S.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(a,r),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;F(e,[n,a],(function(e){return D(!1,e)}))}(r,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var o=a.modals[a.modals.length-1],c=o.backdrop;D(!1,o.dialog),D(!1,c)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),L=function(e){var t;return"undefined"===typeof document?null:null==e?Object(u.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function K(e){var t=e||(A||(A=new M),A),n=Object(b.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(e,a){return t.add(n.current,e,a)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:Object(b.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:Object(b.useCallback)((function(e){n.current.backdrop=e}),[])})}var H=Object(b.forwardRef)((function(e,t){var n=e.show,a=void 0!==n&&n,c=e.role,i=void 0===c?"dialog":c,s=e.className,u=e.style,d=e.children,f=e.backdrop,O=void 0===f||f,y=e.keyboard,E=void 0===y||y,N=e.onBackdropClick,w=e.onEscapeKeyDown,k=e.transition,S=e.backdropTransition,R=e.autoFocus,T=void 0===R||R,I=e.enforceFocus,P=void 0===I||I,F=e.restoreFocus,D=void 0===F||F,A=e.restoreFocusOptions,M=e.renderDialog,H=e.renderBackdrop,B=void 0===H?function(e){return v.a.createElement("div",e)}:H,z=e.manager,V=e.container,q=e.containerClassName,U=e.onShow,_=e.onHide,W=void 0===_?function(){}:_,$=e.onExit,G=e.onExited,J=e.onExiting,X=e.onEnter,Q=e.onEntering,Y=e.onEntered,Z=Object(o.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ee=function(e,t){var n=Object(b.useState)((function(){return L(e)})),a=n[0],r=n[1];if(!a){var o=L(e);o&&r(o)}return Object(b.useEffect)((function(){t&&a&&t(a)}),[t,a]),Object(b.useEffect)((function(){var t=L(e);t!==a&&r(t)}),[e,a]),a}(V),te=K(z),ne=Object(C.a)(),ae=function(e){var t=Object(b.useRef)(null);return Object(b.useEffect)((function(){t.current=e})),t.current}(a),re=Object(b.useState)(!a),oe=re[0],ce=re[1],ie=Object(b.useRef)(null);Object(b.useImperativeHandle)(t,(function(){return te}),[te]),l.a&&!ae&&a&&(ie.current=h()),k||a||oe?a&&oe&&ce(!1):ce(!0);var se=Object(m.a)((function(){if(te.add(ee,q),ve.current=Object(g.a)(document,"keydown",fe),be.current=Object(g.a)(document,"focus",(function(){return setTimeout(ue)}),!0),U&&U(),T){var e=h(document);te.dialog&&e&&!j(te.dialog,e)&&(ie.current=e,te.dialog.focus())}})),le=Object(m.a)((function(){var e;(te.remove(),null==ve.current||ve.current(),null==be.current||be.current(),D)&&(null==(e=ie.current)||null==e.focus||e.focus(A),ie.current=null)}));Object(b.useEffect)((function(){a&&ee&&se()}),[a,ee,se]),Object(b.useEffect)((function(){oe&&le()}),[oe,le]),Object(p.a)((function(){le()}));var ue=Object(m.a)((function(){if(P&&ne()&&te.isTopModal()){var e=h();te.dialog&&e&&!j(te.dialog,e)&&te.dialog.focus()}})),de=Object(m.a)((function(e){e.target===e.currentTarget&&(null==N||N(e),!0===O&&W())})),fe=Object(m.a)((function(e){E&&27===e.keyCode&&te.isTopModal()&&(null==w||w(e),e.defaultPrevented||W())})),be=Object(b.useRef)(),ve=Object(b.useRef)(),me=k;if(!ee||!(a||me&&!oe))return null;var pe=Object(r.a)({role:i,ref:te.setDialogRef,"aria-modal":"dialog"===i||void 0},Z,{style:u,className:s,tabIndex:-1}),Oe=M?M(pe):v.a.createElement("div",pe,v.a.cloneElement(d,{role:"document"}));me&&(Oe=v.a.createElement(me,{appear:!0,unmountOnExit:!0,in:!!a,onExit:$,onExiting:J,onExited:function(){ce(!0);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==G||G.apply(void 0,t)},onEnter:X,onEntering:Q,onEntered:Y},Oe));var he=null;if(O){var je=S;he=B({ref:te.setBackdropRef,onClick:de}),je&&(he=v.a.createElement(je,{appear:!0,in:!!a},he))}return v.a.createElement(v.a.Fragment,null,x.a.createPortal(v.a.createElement(v.a.Fragment,null,he,Oe),ee))})),B={show:E.a.bool,container:E.a.any,onShow:E.a.func,onHide:E.a.func,backdrop:E.a.oneOfType([E.a.bool,E.a.oneOf(["static"])]),renderDialog:E.a.func,renderBackdrop:E.a.func,onEscapeKeyDown:E.a.func,onBackdropClick:E.a.func,containerClassName:E.a.string,keyboard:E.a.bool,transition:E.a.elementType,backdropTransition:E.a.elementType,autoFocus:E.a.bool,enforceFocus:E.a.bool,restoreFocus:E.a.bool,restoreFocusOptions:E.a.shape({preventScroll:E.a.bool}),onEnter:E.a.func,onEntering:E.a.func,onEntered:E.a.func,onExit:E.a.func,onExiting:E.a.func,onExited:E.a.func,manager:E.a.instanceOf(M)};H.displayName="Modal",H.propTypes=B;var z=Object.assign(H,{Manager:M}),V=(n(112),n(6)),q=n(116),U=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_=".sticky-top",W=".navbar-toggler",$=function(e){function t(){return e.apply(this,arguments)||this}Object(V.a)(t,e);var n=t.prototype;return n.adjustAndStore=function(e,t,n){var a,r=t.style[e];t.dataset[e]=r,Object(R.a)(t,((a={})[e]=parseFloat(Object(R.a)(t,e))+n+"px",a))},n.restore=function(e,t){var n,a=t.dataset[e];void 0!==a&&(delete t.dataset[e],Object(R.a)(t,((n={})[e]=a,n)))},n.setContainerStyle=function(t,n){var a=this;if(e.prototype.setContainerStyle.call(this,t,n),t.overflowing){var r=f();Object(q.a)(n,U).forEach((function(e){return a.adjustAndStore("paddingRight",e,r)})),Object(q.a)(n,_).forEach((function(e){return a.adjustAndStore("marginRight",e,-r)})),Object(q.a)(n,W).forEach((function(e){return a.adjustAndStore("marginRight",e,r)}))}},n.removeContainerStyle=function(t,n){var a=this;e.prototype.removeContainerStyle.call(this,t,n),Object(q.a)(n,U).forEach((function(e){return a.restore("paddingRight",e)})),Object(q.a)(n,_).forEach((function(e){return a.restore("marginRight",e)})),Object(q.a)(n,W).forEach((function(e){return a.restore("marginRight",e)}))},t}(M),G=n(110),J=n(42),X=Object(J.a)("modal-body"),Q=v.a.createContext({onHide:function(){}}),Y=n(11),Z=v.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=e.contentClassName,s=e.centered,l=e.size,u=e.children,d=e.scrollable,f=Object(o.a)(e,["bsPrefix","className","contentClassName","centered","size","children","scrollable"]),b=(n=Object(Y.a)(n,"modal"))+"-dialog";return v.a.createElement("div",Object(r.a)({},f,{ref:t,className:i()(b,a,l&&n+"-"+l,s&&b+"-centered",d&&b+"-scrollable")}),v.a.createElement("div",{className:i()(n+"-content",c)},u))}));Z.displayName="ModalDialog";var ee=Z,te=Object(J.a)("modal-footer"),ne=n(111),ae=v.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.closeLabel,c=e.closeButton,s=e.onHide,l=e.className,u=e.children,d=Object(o.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);n=Object(Y.a)(n,"modal-header");var f=Object(b.useContext)(Q),p=Object(m.a)((function(){f&&f.onHide(),s&&s()}));return v.a.createElement("div",Object(r.a)({ref:t},d,{className:i()(l,n)}),u,c&&v.a.createElement(ne.a,{label:a,onClick:p}))}));ae.displayName="ModalHeader",ae.defaultProps={closeLabel:"Close",closeButton:!1};var re,oe=ae,ce=n(108),ie=Object(ce.a)("h4"),se=Object(J.a)("modal-title",{Component:ie}),le={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ee};function ue(e){return v.a.createElement(G.a,e)}function de(e){return v.a.createElement(G.a,e)}var fe=v.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=e.style,h=e.dialogClassName,j=e.contentClassName,g=e.children,y=e.dialogAs,E=e["aria-labelledby"],N=e.show,x=e.animation,C=e.backdrop,w=e.keyboard,k=e.onEscapeKeyDown,S=e.onShow,R=e.onHide,T=e.container,I=e.autoFocus,P=e.enforceFocus,F=e.restoreFocus,D=e.restoreFocusOptions,A=e.onEntered,M=e.onExit,L=e.onExiting,K=e.onEnter,H=e.onEntering,B=e.onExited,V=e.backdropClassName,q=e.manager,U=Object(o.a)(e,["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),_=Object(b.useState)({}),W=_[0],G=_[1],J=Object(b.useState)(!1),X=J[0],Z=J[1],ee=Object(b.useRef)(!1),te=Object(b.useRef)(!1),ne=Object(b.useRef)(null),ae=Object(b.useState)(null),oe=ae[0],ce=ae[1],ie=Object(m.a)(R);n=Object(Y.a)(n,"modal"),Object(b.useImperativeHandle)(t,(function(){return{get _modal(){return oe}}}),[oe]);var se=Object(b.useMemo)((function(){return{onHide:ie}}),[ie]);function le(){return q||(re||(re=new $),re)}function fe(e){if(l.a){var t=le().isContainerOverflowing(oe),n=e.scrollHeight>Object(u.a)(e).documentElement.clientHeight;G({paddingRight:t&&!n?f():void 0,paddingLeft:!t&&n?f():void 0})}}var be=Object(m.a)((function(){oe&&fe(oe.dialog)}));Object(p.a)((function(){Object(d.a)(window,"resize",be),ne.current&&ne.current()}));var ve=function(){ee.current=!0},me=function(e){ee.current&&oe&&e.target===oe.dialog&&(te.current=!0),ee.current=!1},pe=function(){Z(!0),ne.current=Object(O.a)(oe.dialog,(function(){Z(!1)}))},Oe=function(e){"static"!==C?te.current||e.target!==e.currentTarget?te.current=!1:R():function(e){e.target===e.currentTarget&&pe()}(e)},he=Object(b.useCallback)((function(e){return v.a.createElement("div",Object(r.a)({},e,{className:i()(n+"-backdrop",V,!x&&"show")}))}),[x,V,n]),je=Object(r.a)({},c,W);x||(je.display="block");return v.a.createElement(Q.Provider,{value:se},v.a.createElement(z,{show:N,ref:ce,backdrop:C,container:T,keyboard:!0,autoFocus:I,enforceFocus:P,restoreFocus:F,restoreFocusOptions:D,onEscapeKeyDown:function(e){w||"static"!==C?w&&k&&k(e):(e.preventDefault(),pe())},onShow:S,onHide:R,onEnter:function(e){e&&(e.style.display="block",fe(e));for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];K&&K.apply(void 0,[e].concat(n))},onEntering:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];H&&H.apply(void 0,[e].concat(n)),Object(s.a)(window,"resize",be)},onEntered:A,onExit:function(e){ne.current&&ne.current();for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];M&&M.apply(void 0,[e].concat(n))},onExiting:L,onExited:function(e){e&&(e.style.display="");for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];B&&B.apply(void 0,n),Object(d.a)(window,"resize",be)},manager:le(),containerClassName:n+"-open",transition:x?ue:void 0,backdropTransition:x?de:void 0,renderBackdrop:he,renderDialog:function(e){return v.a.createElement("div",Object(r.a)({role:"dialog"},e,{style:je,className:i()(a,n,X&&n+"-static"),onClick:C?Oe:void 0,onMouseUp:me,"aria-labelledby":E}),v.a.createElement(y,Object(r.a)({},U,{onMouseDown:ve,className:h,contentClassName:j}),g))}}))}));fe.displayName="Modal",fe.defaultProps=le,fe.Body=X,fe.Header=oe,fe.Title=se,fe.Footer=te,fe.Dialog=ee,fe.TRANSITION_DURATION=300,fe.BACKDROP_TRANSITION_DURATION=150;t.a=fe},129:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(10),c=n.n(o),i=n(0),s=n.n(i),l=(n(112),n(46)),u=n(11),d=n(116);var f=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var b=function(e,t){return Object(i.useMemo)((function(){return function(e,t){var n=f(e),a=f(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])},v=s.a.createContext(null);v.displayName="NavContext";var m=v,p=n(50),O=s.a.createContext(null),h=function(){},j=s.a.forwardRef((function(e,t){var n,o,c=e.as,l=void 0===c?"ul":c,u=e.onSelect,f=e.activeKey,v=e.role,j=e.onKeyDown,g=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),y=Object(i.useReducer)((function(e){return!e}),!1)[1],E=Object(i.useRef)(!1),N=Object(i.useContext)(p.a),x=Object(i.useContext)(O);x&&(v=v||"tablist",f=x.activeKey,n=x.getControlledId,o=x.getControllerId);var C=Object(i.useRef)(null),w=function(e){var t=C.current;if(!t)return null;var n=Object(d.a)(t,"[data-rb-event-key]:not(.disabled)"),a=t.querySelector(".active");if(!a)return null;var r=n.indexOf(a);if(-1===r)return null;var o=r+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},k=function(e,t){null!=e&&(u&&u(e,t),N&&N(e,t))};Object(i.useEffect)((function(){if(C.current&&E.current){var e=C.current.querySelector("[data-rb-event-key].active");e&&e.focus()}E.current=!1}));var S=b(t,C);return s.a.createElement(p.a.Provider,{value:k},s.a.createElement(m.Provider,{value:{role:v,activeKey:Object(p.b)(f),getControlledId:n||h,getControllerId:o||h}},s.a.createElement(l,Object(a.a)({},g,{onKeyDown:function(e){var t;switch(j&&j(e),e.key){case"ArrowLeft":case"ArrowUp":t=w(-1);break;case"ArrowRight":case"ArrowDown":t=w(1);break;default:return}t&&(e.preventDefault(),k(t.dataset.rbEventKey,e),E.current=!0,y())},ref:S,role:v}))))})),g=n(43),y=s.a.forwardRef((function(e,t){var n=e.active,o=e.className,l=e.eventKey,u=e.onSelect,d=e.onClick,f=e.as,b=Object(r.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=Object(p.b)(l,b.href),O=Object(i.useContext)(p.a),h=Object(i.useContext)(m),j=n;if(h){b.role||"tablist"!==h.role||(b.role="tab");var y=h.getControllerId(v),E=h.getControlledId(v);b["data-rb-event-key"]=v,b.id=y||b.id,b["aria-controls"]=E||b["aria-controls"],j=null==n&&null!=v?h.activeKey===v:n}"tab"===b.role&&(b.disabled&&(b.tabIndex=-1,b["aria-disabled"]=!0),b["aria-selected"]=j);var N=Object(g.a)((function(e){d&&d(e),null!=v&&(u&&u(v,e),O&&O(v,e))}));return s.a.createElement(f,Object(a.a)({},b,{ref:t,onClick:N,className:c()(o,j&&"active")}))}));y.defaultProps={disabled:!1};var E=y,N={variant:void 0,active:!1,disabled:!1},x=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.active,l=e.disabled,d=e.className,f=e.variant,b=e.action,v=e.as,m=e.eventKey,O=e.onClick,h=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);n=Object(u.a)(n,"list-group-item");var j=Object(i.useCallback)((function(e){if(l)return e.preventDefault(),void e.stopPropagation();O&&O(e)}),[l,O]);return l&&void 0===h.tabIndex&&(h.tabIndex=-1,h["aria-disabled"]=!0),s.a.createElement(E,Object(a.a)({ref:t},h,{eventKey:Object(p.b)(m,h.href),as:v||(b?h.href?"a":"button":"div"),onClick:j,className:c()(d,n,o&&"active",l&&"disabled",f&&n+"-"+f,b&&n+"-action")}))}));x.defaultProps=N,x.displayName="ListGroupItem";var C=x,w={variant:void 0,horizontal:void 0},k=s.a.forwardRef((function(e,t){var n,o=Object(l.a)(e,{activeKey:"onSelect"}),i=o.className,d=o.bsPrefix,f=o.variant,b=o.horizontal,v=o.as,m=void 0===v?"div":v,p=Object(r.a)(o,["className","bsPrefix","variant","horizontal","as"]),O=Object(u.a)(d,"list-group");return n=b?!0===b?"horizontal":"horizontal-"+b:null,s.a.createElement(j,Object(a.a)({ref:t},p,{as:m,className:c()(i,O,f&&O+"-"+f,n&&O+"-"+n)}))}));k.defaultProps=w,k.displayName="ListGroup",k.Item=C;t.a=k},130:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(43),c=n(0),i=n.n(c);var s=function(e,t){var n=Object(c.useRef)(!0);Object(c.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},l=n(54),u=n(117),d=n(114),f=Math.pow(2,31)-1;function b(e,t,n){var a=n-Date.now();e.current=a<=f?setTimeout(t,a):setTimeout((function(){return b(e,t,n)}),f)}function v(){var e=Object(u.a)(),t=Object(c.useRef)();return Object(d.a)((function(){return clearTimeout(t.current)})),Object(c.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=f?t.current=setTimeout(a,r):b(t,a,Date.now()+r))},clear:n}}),[])}var m=n(10),p=n.n(m),O=n(19),h=n(15),j=n.n(h),g=n(46),y=n(42),E=Object(y.a)("carousel-caption"),N=n(11),x=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,c=e.bsPrefix,s=e.children,l=e.className,u=Object(r.a)(e,["as","bsPrefix","children","className"]),d=p()(l,Object(N.a)(c,"carousel-item"));return i.a.createElement(o,Object(a.a)({ref:t},u,{className:d}),s)}));x.displayName="CarouselItem";var C=x;function w(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}var k=n(109),S=n(49),R=n(48),T={bsPrefix:j.a.string,as:j.a.elementType,slide:j.a.bool,fade:j.a.bool,controls:j.a.bool,indicators:j.a.bool,activeIndex:j.a.number,onSelect:j.a.func,onSlide:j.a.func,onSlid:j.a.func,interval:j.a.number,keyboard:j.a.bool,pause:j.a.oneOf(["hover",!1]),wrap:j.a.bool,touch:j.a.bool,prevIcon:j.a.node,prevLabel:j.a.string,nextIcon:j.a.node,nextLabel:j.a.string},I={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function P(e,t){var n=Object(g.a)(e,{activeIndex:"onSelect"}),u=n.as,d=void 0===u?"div":u,f=n.bsPrefix,b=n.slide,m=n.fade,h=n.controls,j=n.indicators,y=n.activeIndex,E=n.onSelect,x=n.onSlide,C=n.onSlid,T=n.interval,I=n.keyboard,P=n.onKeyDown,F=n.pause,D=n.onMouseOver,A=n.onMouseOut,M=n.wrap,L=n.touch,K=n.onTouchStart,H=n.onTouchMove,B=n.onTouchEnd,z=n.prevIcon,V=n.prevLabel,q=n.nextIcon,U=n.nextLabel,_=n.className,W=n.children,$=Object(r.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),G=Object(N.a)(f,"carousel"),J=Object(c.useRef)(null),X=Object(c.useState)("next"),Q=X[0],Y=X[1],Z=Object(c.useState)(!1),ee=Z[0],te=Z[1],ne=Object(c.useState)(!1),ae=ne[0],re=ne[1],oe=Object(c.useState)(y||0),ce=oe[0],ie=oe[1];ae||y===ce||(J.current?Y(J.current):Y((y||0)>ce?"next":"prev"),b&&re(!0),ie(y||0)),Object(c.useEffect)((function(){J.current&&(J.current=null)}));var se,le=0;!function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(W,(function(e,t){++le,t===y&&(se=e.props.interval)}));var ue=Object(l.a)(se),de=Object(c.useCallback)((function(e){if(!ae){var t=ce-1;if(t<0){if(!M)return;t=le-1}J.current="prev",E&&E(t,e)}}),[ae,ce,E,M,le]),fe=Object(o.a)((function(e){if(!ae){var t=ce+1;if(t>=le){if(!M)return;t=0}J.current="next",E&&E(t,e)}})),be=Object(c.useRef)();Object(c.useImperativeHandle)(t,(function(){return{element:be.current,prev:de,next:fe}}));var ve=Object(o.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(be.current)&&fe()})),me="next"===Q?"left":"right";s((function(){b||(x&&x(ce,me),C&&C(ce,me))}),[ce]);var pe=G+"-item-"+Q,Oe=G+"-item-"+me,he=Object(c.useCallback)((function(e){Object(R.a)(e),x&&x(ce,me)}),[x,ce,me]),je=Object(c.useCallback)((function(){re(!1),C&&C(ce,me)}),[C,ce,me]),ge=Object(c.useCallback)((function(e){if(I&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void de(e);case"ArrowRight":return e.preventDefault(),void fe(e)}P&&P(e)}),[I,P,de,fe]),ye=Object(c.useCallback)((function(e){"hover"===F&&te(!0),D&&D(e)}),[F,D]),Ee=Object(c.useCallback)((function(e){te(!1),A&&A(e)}),[A]),Ne=Object(c.useRef)(0),xe=Object(c.useRef)(0),Ce=v(),we=Object(c.useCallback)((function(e){Ne.current=e.touches[0].clientX,xe.current=0,"hover"===F&&te(!0),K&&K(e)}),[F,K]),ke=Object(c.useCallback)((function(e){e.touches&&e.touches.length>1?xe.current=0:xe.current=e.touches[0].clientX-Ne.current,H&&H(e)}),[H]),Se=Object(c.useCallback)((function(e){if(L){var t=xe.current;Math.abs(t)>40&&(t>0?de(e):fe(e))}"hover"===F&&Ce.set((function(){te(!1)}),T||void 0),B&&B(e)}),[L,F,de,fe,Ce,T,B]),Re=null!=T&&!ee&&!ae,Te=Object(c.useRef)();Object(c.useEffect)((function(){var e,t;if(Re)return Te.current=window.setInterval(document.visibilityState?ve:fe,null!=(e=null!=(t=ue.current)?t:T)?e:void 0),function(){null!==Te.current&&clearInterval(Te.current)}}),[Re,fe,ue,T,ve]);var Ie=Object(c.useMemo)((function(){return j&&Array.from({length:le},(function(e,t){return function(e){E&&E(t,e)}}))}),[j,le,E]);return i.a.createElement(d,Object(a.a)({ref:be},$,{onKeyDown:ge,onMouseOver:ye,onMouseOut:Ee,onTouchStart:we,onTouchMove:ke,onTouchEnd:Se,className:p()(_,G,b&&"slide",m&&G+"-fade")}),j&&i.a.createElement("ol",{className:G+"-indicators"},w(W,(function(e,t){return i.a.createElement("li",{key:t,className:t===ce?"active":void 0,onClick:Ie?Ie[t]:void 0})}))),i.a.createElement("div",{className:G+"-inner"},w(W,(function(e,t){var n=t===ce;return b?i.a.createElement(O.e,{in:n,onEnter:n?he:void 0,onEntered:n?je:void 0,addEndListener:S.a},(function(t){return i.a.cloneElement(e,{className:p()(e.props.className,n&&"entered"!==t&&pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Oe)})})):i.a.cloneElement(e,{className:p()(e.props.className,n&&"active")})}))),h&&i.a.createElement(i.a.Fragment,null,(M||0!==y)&&i.a.createElement(k.a,{className:G+"-control-prev",onClick:de},z,V&&i.a.createElement("span",{className:"sr-only"},V)),(M||y!==le-1)&&i.a.createElement(k.a,{className:G+"-control-next",onClick:fe},q,U&&i.a.createElement("span",{className:"sr-only"},U))))}var F=i.a.forwardRef(P);F.displayName="Carousel",F.propTypes=T,F.defaultProps=I,F.Caption=E,F.Item=C;t.a=F}}]);
//# sourceMappingURL=4.f84878c9.chunk.js.map