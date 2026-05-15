const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LiveEditorDesktop-D_fzpxtv.js","assets/LiveEditor-DCGn3OrN.js","assets/LiveEditor-Dj88UyYi.css","assets/LiveEditorMobile-KOYMFkth.js"])))=>i.map(i=>d[i]);
var ng=Object.defineProperty,ig=Object.defineProperties;var og=Object.getOwnPropertyDescriptors;var Eo=Object.getOwnPropertySymbols;var wm=Object.prototype.hasOwnProperty,Tm=Object.prototype.propertyIsEnumerable;var $c=(o,c,r)=>c in o?ng(o,c,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[c]=r,te=(o,c)=>{for(var r in c||(c={}))wm.call(c,r)&&$c(o,r,c[r]);if(Eo)for(var r of Eo(c))Tm.call(c,r)&&$c(o,r,c[r]);return o},Re=(o,c)=>ig(o,og(c));var za=(o,c)=>{var r={};for(var u in o)wm.call(o,u)&&c.indexOf(u)<0&&(r[u]=o[u]);if(o!=null&&Eo)for(var u of Eo(o))c.indexOf(u)<0&&Tm.call(o,u)&&(r[u]=o[u]);return r};var la=(o,c,r)=>$c(o,typeof c!="symbol"?c+"":c,r);var Se=(o,c,r)=>new Promise((u,f)=>{var m=v=>{try{b(r.next(v))}catch(h){f(h)}},y=v=>{try{b(r.throw(v))}catch(h){f(h)}},b=v=>v.done?u(v.value):Promise.resolve(v.value).then(m,y);b((r=r.apply(o,c)).next())});(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function r(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=r(f);fetch(f.href,m)}})();function al(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Wc={exports:{}},Zn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function rg(){if(jm)return Zn;jm=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function r(u,f,m){var y=null;if(m!==void 0&&(y=""+m),f.key!==void 0&&(y=""+f.key),"key"in f){m={};for(var b in f)b!=="key"&&(m[b]=f[b])}else m=f;return f=m.ref,{$$typeof:o,type:u,key:y,ref:f!==void 0?f:null,props:m}}return Zn.Fragment=c,Zn.jsx=r,Zn.jsxs=r,Zn}var Am;function cg(){return Am||(Am=1,Wc.exports=rg()),Wc.exports}var d=cg(),Fc={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function ug(){if(Mm)return ne;Mm=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function S(g){return g===null||typeof g!="object"?null:(g=A&&g[A]||g["@@iterator"],typeof g=="function"?g:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,X={};function q(g,R,k){this.props=g,this.context=R,this.refs=X,this.updater=k||L}q.prototype.isReactComponent={},q.prototype.setState=function(g,R){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,R,"setState")},q.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function U(){}U.prototype=q.prototype;function J(g,R,k){this.props=g,this.context=R,this.refs=X,this.updater=k||L}var V=J.prototype=new U;V.constructor=J,_(V,q.prototype),V.isPureReactComponent=!0;var I=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},fe=Object.prototype.hasOwnProperty;function ge(g,R,k,Y,Z,ce){return k=ce.ref,{$$typeof:o,type:g,key:R,ref:k!==void 0?k:null,props:ce}}function de(g,R){return ge(g.type,R,void 0,void 0,void 0,g.props)}function ie(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function re(g){var R={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(k){return R[k]})}var he=/\/+/g;function ye(g,R){return typeof g=="object"&&g!==null&&g.key!=null?re(""+g.key):R.toString(36)}function Oe(){}function ot(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Oe,Oe):(g.status="pending",g.then(function(R){g.status==="pending"&&(g.status="fulfilled",g.value=R)},function(R){g.status==="pending"&&(g.status="rejected",g.reason=R)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function F(g,R,k,Y,Z){var ce=typeof g;(ce==="undefined"||ce==="boolean")&&(g=null);var $=!1;if(g===null)$=!0;else switch(ce){case"bigint":case"string":case"number":$=!0;break;case"object":switch(g.$$typeof){case o:case c:$=!0;break;case E:return $=g._init,F($(g._payload),R,k,Y,Z)}}if($)return Z=Z(g),$=Y===""?"."+ye(g,0):Y,I(Z)?(k="",$!=null&&(k=$.replace(he,"$&/")+"/"),F(Z,R,k,"",function(ra){return ra})):Z!=null&&(ie(Z)&&(Z=de(Z,k+(Z.key==null||g&&g.key===Z.key?"":(""+Z.key).replace(he,"$&/")+"/")+$)),R.push(Z)),1;$=0;var $e=Y===""?".":Y+":";if(I(g))for(var Te=0;Te<g.length;Te++)Y=g[Te],ce=$e+ye(Y,Te),$+=F(Y,R,k,ce,Z);else if(Te=S(g),typeof Te=="function")for(g=Te.call(g),Te=0;!(Y=g.next()).done;)Y=Y.value,ce=$e+ye(Y,Te++),$+=F(Y,R,k,ce,Z);else if(ce==="object"){if(typeof g.then=="function")return F(ot(g),R,k,Y,Z);throw R=String(g),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return $}function z(g,R,k){if(g==null)return g;var Y=[],Z=0;return F(g,Y,"","",function(ce){return R.call(k,ce,Z++)}),Y}function G(g){if(g._status===-1){var R=g._result;R=R(),R.then(function(k){(g._status===0||g._status===-1)&&(g._status=1,g._result=k)},function(k){(g._status===0||g._status===-1)&&(g._status=2,g._result=k)}),g._status===-1&&(g._status=0,g._result=R)}if(g._status===1)return g._result.default;throw g._result}var P=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function oe(){}return ne.Children={map:z,forEach:function(g,R,k){z(g,function(){R.apply(this,arguments)},k)},count:function(g){var R=0;return z(g,function(){R++}),R},toArray:function(g){return z(g,function(R){return R})||[]},only:function(g){if(!ie(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ne.Component=q,ne.Fragment=r,ne.Profiler=f,ne.PureComponent=J,ne.StrictMode=u,ne.Suspense=v,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ne.__COMPILER_RUNTIME={__proto__:null,c:function(g){return Q.H.useMemoCache(g)}},ne.cache=function(g){return function(){return g.apply(null,arguments)}},ne.cloneElement=function(g,R,k){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var Y=_({},g.props),Z=g.key,ce=void 0;if(R!=null)for($ in R.ref!==void 0&&(ce=void 0),R.key!==void 0&&(Z=""+R.key),R)!fe.call(R,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&R.ref===void 0||(Y[$]=R[$]);var $=arguments.length-2;if($===1)Y.children=k;else if(1<$){for(var $e=Array($),Te=0;Te<$;Te++)$e[Te]=arguments[Te+2];Y.children=$e}return ge(g.type,Z,void 0,void 0,ce,Y)},ne.createContext=function(g){return g={$$typeof:y,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:m,_context:g},g},ne.createElement=function(g,R,k){var Y,Z={},ce=null;if(R!=null)for(Y in R.key!==void 0&&(ce=""+R.key),R)fe.call(R,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(Z[Y]=R[Y]);var $=arguments.length-2;if($===1)Z.children=k;else if(1<$){for(var $e=Array($),Te=0;Te<$;Te++)$e[Te]=arguments[Te+2];Z.children=$e}if(g&&g.defaultProps)for(Y in $=g.defaultProps,$)Z[Y]===void 0&&(Z[Y]=$[Y]);return ge(g,ce,void 0,void 0,null,Z)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(g){return{$$typeof:b,render:g}},ne.isValidElement=ie,ne.lazy=function(g){return{$$typeof:E,_payload:{_status:-1,_result:g},_init:G}},ne.memo=function(g,R){return{$$typeof:h,type:g,compare:R===void 0?null:R}},ne.startTransition=function(g){var R=Q.T,k={};Q.T=k;try{var Y=g(),Z=Q.S;Z!==null&&Z(k,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(oe,P)}catch(ce){P(ce)}finally{Q.T=R}},ne.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ne.use=function(g){return Q.H.use(g)},ne.useActionState=function(g,R,k){return Q.H.useActionState(g,R,k)},ne.useCallback=function(g,R){return Q.H.useCallback(g,R)},ne.useContext=function(g){return Q.H.useContext(g)},ne.useDebugValue=function(){},ne.useDeferredValue=function(g,R){return Q.H.useDeferredValue(g,R)},ne.useEffect=function(g,R,k){var Y=Q.H;if(typeof k=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(g,R)},ne.useId=function(){return Q.H.useId()},ne.useImperativeHandle=function(g,R,k){return Q.H.useImperativeHandle(g,R,k)},ne.useInsertionEffect=function(g,R){return Q.H.useInsertionEffect(g,R)},ne.useLayoutEffect=function(g,R){return Q.H.useLayoutEffect(g,R)},ne.useMemo=function(g,R){return Q.H.useMemo(g,R)},ne.useOptimistic=function(g,R){return Q.H.useOptimistic(g,R)},ne.useReducer=function(g,R,k){return Q.H.useReducer(g,R,k)},ne.useRef=function(g){return Q.H.useRef(g)},ne.useState=function(g){return Q.H.useState(g)},ne.useSyncExternalStore=function(g,R,k){return Q.H.useSyncExternalStore(g,R,k)},ne.useTransition=function(){return Q.H.useTransition()},ne.version="19.1.0",ne}var Dm;function Eu(){return Dm||(Dm=1,Fc.exports=ug()),Fc.exports}var T=Eu();const Ot=al(T);var Ic={exports:{}},Kn={},eu={exports:{}},tu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function sg(){return Cm||(Cm=1,function(o){function c(z,G){var P=z.length;z.push(G);e:for(;0<P;){var oe=P-1>>>1,g=z[oe];if(0<f(g,G))z[oe]=G,z[P]=g,P=oe;else break e}}function r(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var G=z[0],P=z.pop();if(P!==G){z[0]=P;e:for(var oe=0,g=z.length,R=g>>>1;oe<R;){var k=2*(oe+1)-1,Y=z[k],Z=k+1,ce=z[Z];if(0>f(Y,P))Z<g&&0>f(ce,Y)?(z[oe]=ce,z[Z]=P,oe=Z):(z[oe]=Y,z[k]=P,oe=k);else if(Z<g&&0>f(ce,P))z[oe]=ce,z[Z]=P,oe=Z;else break e}}return G}function f(z,G){var P=z.sortIndex-G.sortIndex;return P!==0?P:z.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var y=Date,b=y.now();o.unstable_now=function(){return y.now()-b}}var v=[],h=[],E=1,A=null,S=3,L=!1,_=!1,X=!1,q=!1,U=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate!="undefined"?setImmediate:null;function I(z){for(var G=r(h);G!==null;){if(G.callback===null)u(h);else if(G.startTime<=z)u(h),G.sortIndex=G.expirationTime,c(v,G);else break;G=r(h)}}function Q(z){if(X=!1,I(z),!_)if(r(v)!==null)_=!0,fe||(fe=!0,ye());else{var G=r(h);G!==null&&F(Q,G.startTime-z)}}var fe=!1,ge=-1,de=5,ie=-1;function re(){return q?!0:!(o.unstable_now()-ie<de)}function he(){if(q=!1,fe){var z=o.unstable_now();ie=z;var G=!0;try{e:{_=!1,X&&(X=!1,J(ge),ge=-1),L=!0;var P=S;try{t:{for(I(z),A=r(v);A!==null&&!(A.expirationTime>z&&re());){var oe=A.callback;if(typeof oe=="function"){A.callback=null,S=A.priorityLevel;var g=oe(A.expirationTime<=z);if(z=o.unstable_now(),typeof g=="function"){A.callback=g,I(z),G=!0;break t}A===r(v)&&u(v),I(z)}else u(v);A=r(v)}if(A!==null)G=!0;else{var R=r(h);R!==null&&F(Q,R.startTime-z),G=!1}}break e}finally{A=null,S=P,L=!1}G=void 0}}finally{G?ye():fe=!1}}}var ye;if(typeof V=="function")ye=function(){V(he)};else if(typeof MessageChannel!="undefined"){var Oe=new MessageChannel,ot=Oe.port2;Oe.port1.onmessage=he,ye=function(){ot.postMessage(null)}}else ye=function(){U(he,0)};function F(z,G){ge=U(function(){z(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var P=S;S=G;try{return z()}finally{S=P}},o.unstable_requestPaint=function(){q=!0},o.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var P=S;S=z;try{return G()}finally{S=P}},o.unstable_scheduleCallback=function(z,G,P){var oe=o.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?oe+P:oe):P=oe,z){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=P+g,z={id:E++,callback:G,priorityLevel:z,startTime:P,expirationTime:g,sortIndex:-1},P>oe?(z.sortIndex=P,c(h,z),r(v)===null&&z===r(h)&&(X?(J(ge),ge=-1):X=!0,F(Q,P-oe))):(z.sortIndex=g,c(v,z),_||L||(_=!0,fe||(fe=!0,ye()))),z},o.unstable_shouldYield=re,o.unstable_wrapCallback=function(z){var G=S;return function(){var P=S;S=G;try{return z.apply(this,arguments)}finally{S=P}}}}(tu)),tu}var Rm;function fg(){return Rm||(Rm=1,eu.exports=sg()),eu.exports}var au={exports:{}},Ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function dg(){if(Om)return Ie;Om=1;var o=Eu();function c(v){var h="https://react.dev/errors/"+v;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)h+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(c(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(v,h,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:A==null?null:""+A,children:v,containerInfo:h,implementation:E}}var y=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,h){if(v==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ie.createPortal=function(v,h){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(c(299));return m(v,h,null,E)},Ie.flushSync=function(v){var h=y.T,E=u.p;try{if(y.T=null,u.p=2,v)return v()}finally{y.T=h,u.p=E,u.d.f()}},Ie.preconnect=function(v,h){typeof v=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(v,h))},Ie.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},Ie.preinit=function(v,h){if(typeof v=="string"&&h&&typeof h.as=="string"){var E=h.as,A=b(E,h.crossOrigin),S=typeof h.integrity=="string"?h.integrity:void 0,L=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;E==="style"?u.d.S(v,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:A,integrity:S,fetchPriority:L}):E==="script"&&u.d.X(v,{crossOrigin:A,integrity:S,fetchPriority:L,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ie.preinitModule=function(v,h){if(typeof v=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var E=b(h.as,h.crossOrigin);u.d.M(v,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(v)},Ie.preload=function(v,h){if(typeof v=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var E=h.as,A=b(E,h.crossOrigin);u.d.L(v,E,{crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ie.preloadModule=function(v,h){if(typeof v=="string")if(h){var E=b(h.as,h.crossOrigin);u.d.m(v,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(v)},Ie.requestFormReset=function(v){u.d.r(v)},Ie.unstable_batchedUpdates=function(v,h){return v(h)},Ie.useFormState=function(v,h,E){return y.H.useFormState(v,h,E)},Ie.useFormStatus=function(){return y.H.useHostTransitionStatus()},Ie.version="19.1.0",Ie}var zm;function ep(){if(zm)return au.exports;zm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),au.exports=dg(),au.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function mg(){if(_m)return Kn;_m=1;var o=fg(),c=Eu(),r=ep();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return b(n),e;if(i===l)return b(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,p=n.child;p;){if(p===a){s=!0,a=n,l=i;break}if(p===l){s=!0,l=n,a=i;break}p=p.sibling}if(!s){for(p=i.child;p;){if(p===a){s=!0,a=i,l=n;break}if(p===l){s=!0,l=i,a=n;break}p=p.sibling}if(!s)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,A=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),V=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=he&&e[he]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case q:return"Profiler";case X:return"StrictMode";case Q:return"Suspense";case fe:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case V:return(e.displayName||"Context")+".Provider";case J:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return t=e.displayName||null,t!==null?t:ot(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return ot(e(t))}catch(a){}}return null}var F=Array.isArray,z=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},oe=[],g=-1;function R(e){return{current:e}}function k(e){0>g||(e.current=oe[g],oe[g]=null,g--)}function Y(e,t){g++,oe[g]=e.current,e.current=t}var Z=R(null),ce=R(null),$=R(null),$e=R(null);function Te(e,t){switch(Y($,t),Y(ce,e),Y(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wd(t),e=Fd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(Z),Y(Z,e)}function ra(){k(Z),k(ce),k($)}function Bo(e){e.memoizedState!==null&&Y($e,e);var t=Z.current,a=Fd(t,e.type);t!==a&&(Y(ce,e),Y(Z,a))}function oi(e){ce.current===e&&(k(Z),k(ce)),$e.current===e&&(k($e),Gn._currentValue=P)}var Lo=Object.prototype.hasOwnProperty,Ho=o.unstable_scheduleCallback,ko=o.unstable_cancelCallback,Lp=o.unstable_shouldYield,Hp=o.unstable_requestPaint,Bt=o.unstable_now,kp=o.unstable_getCurrentPriorityLevel,Ru=o.unstable_ImmediatePriority,Ou=o.unstable_UserBlockingPriority,ri=o.unstable_NormalPriority,Up=o.unstable_LowPriority,zu=o.unstable_IdlePriority,qp=o.log,Gp=o.unstable_setDisableYieldValue,Jl=null,rt=null;function ca(e){if(typeof qp=="function"&&Gp(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Jl,e)}catch(t){}}var ct=Math.clz32?Math.clz32:Xp,Yp=Math.log,Vp=Math.LN2;function Xp(e){return e>>>=0,e===0?32:31-(Yp(e)/Vp|0)|0}var ci=256,ui=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function si(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var p=l&134217727;return p!==0?(l=p&~i,l!==0?n=Ba(l):(s&=p,s!==0?n=Ba(s):a||(a=p&~e,a!==0&&(n=Ba(a))))):(p=l&~i,p!==0?n=Ba(p):s!==0?n=Ba(s):a||(a=l&~e,a!==0&&(n=Ba(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Pl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _u(){var e=ci;return ci<<=1,(ci&4194048)===0&&(ci=256),e}function Nu(){var e=ui;return ui<<=1,(ui&62914560)===0&&(ui=4194304),e}function Uo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zp(e,t,a,l,n,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,x=e.expirationTimes,D=e.hiddenUpdates;for(a=s&~a;0<a;){var N=31-ct(a),H=1<<N;p[N]=0,x[N]=-1;var C=D[N];if(C!==null)for(D[N]=null,N=0;N<C.length;N++){var O=C[N];O!==null&&(O.lane&=-536870913)}a&=~H}l!==0&&Bu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function Bu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ct(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Lu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ct(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function qo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Go(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hu(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:gm(e.type))}function Kp(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var ua=Math.random().toString(36).slice(2),We="__reactFiber$"+ua,tt="__reactProps$"+ua,nl="__reactContainer$"+ua,Yo="__reactEvents$"+ua,Jp="__reactListeners$"+ua,Pp="__reactHandles$"+ua,ku="__reactResources$"+ua,Wl="__reactMarker$"+ua;function Vo(e){delete e[We],delete e[tt],delete e[Yo],delete e[Jp],delete e[Pp]}function il(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[nl]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=am(e);e!==null;){if(a=e[We])return a;e=am(e)}return t}e=a,a=e.parentNode}return null}function ol(e){if(e=e[We]||e[nl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function rl(e){var t=e[ku];return t||(t=e[ku]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Wl]=!0}var Uu=new Set,qu={};function La(e,t){cl(e,t),cl(e+"Capture",t)}function cl(e,t){for(qu[e]=t,e=0;e<t.length;e++)Uu.add(t[e])}var $p=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gu={},Yu={};function Wp(e){return Lo.call(Yu,e)?!0:Lo.call(Gu,e)?!1:$p.test(e)?Yu[e]=!0:(Gu[e]=!0,!1)}function fi(e,t,a){if(Wp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function di(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var Xo,Vu;function ul(e){if(Xo===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||"",Vu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xo+e+Vu}var Qo=!1;function Zo(e,t){if(!e||Qo)return"";Qo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(O){var C=O}Reflect.construct(e,[],H)}else{try{H.call()}catch(O){C=O}e.call(H.prototype)}}else{try{throw Error()}catch(O){C=O}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(O){if(O&&C&&typeof O.stack=="string")return[O.stack,C.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],p=i[1];if(s&&p){var x=s.split(`
`),D=p.split(`
`);for(n=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;n<D.length&&!D[n].includes("DetermineComponentFrameRoot");)n++;if(l===x.length||n===D.length)for(l=x.length-1,n=D.length-1;1<=l&&0<=n&&x[l]!==D[n];)n--;for(;1<=l&&0<=n;l--,n--)if(x[l]!==D[n]){if(l!==1||n!==1)do if(l--,n--,0>n||x[l]!==D[n]){var N=`
`+x[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=n);break}}}finally{Qo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ul(a):""}function Fp(e){switch(e.tag){case 26:case 27:case 5:return ul(e.type);case 16:return ul("Lazy");case 13:return ul("Suspense");case 19:return ul("SuspenseList");case 0:case 15:return Zo(e.type,!1);case 11:return Zo(e.type.render,!1);case 1:return Zo(e.type,!0);case 31:return ul("Activity");default:return""}}function Xu(e){try{var t="";do t+=Fp(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ip(e){var t=Qu(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a!="undefined"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){l=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=Ip(e))}function Zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Qu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}var eh=/[\n"\\]/g;function bt(e){return e.replace(eh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ko(e,t,a,l,n,i,s,p){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Jo(e,s,yt(t)):a!=null?Jo(e,s,yt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+yt(p):e.removeAttribute("name")}function Ku(e,t,a,l,n,i,s,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}l=l!=null?l:n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=p?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Jo(e,t,a){t==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Ju(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function Pu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(F(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function fl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var th=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $u(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||th.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Wu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&$u(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&$u(e,i,t[i])}function Po(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ah=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hi(e){return lh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $o=null;function Wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,ml=null;function Fu(e){var t=ol(e);if(t&&(e=t.stateNode)){var a=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ko(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[tt]||null;if(!n)throw Error(u(90));Ko(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Zu(l)}break e;case"textarea":Ju(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&sl(e,!!a.multiple,t,!1)}}}var Fo=!1;function Iu(e,t,a){if(Fo)return e(t,a);Fo=!0;try{var l=e(t);return l}finally{if(Fo=!1,(dl!==null||ml!==null)&&(eo(),dl&&(t=dl,e=ml,ml=dl=null,Fu(t),e)))for(t=0;t<e.length;t++)Fu(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[tt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Vt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Io=!1;if(Vt)try{var en={};Object.defineProperty(en,"passive",{get:function(){Io=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch(e){Io=!1}var sa=null,er=null,vi=null;function es(){if(vi)return vi;var e,t=er,a=t.length,l,n="value"in sa?sa.value:sa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[i-l];l++);return vi=n.slice(e,1<l?1-l:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function ts(){return!1}function at(e){function t(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?yi:ts,this.isPropagationStopped=ts,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=at(Ha),tn=E({},Ha,{view:0,detail:0}),nh=at(tn),tr,ar,an,xi=E({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==an&&(an&&e.type==="mousemove"?(tr=e.screenX-an.screenX,ar=e.screenY-an.screenY):ar=tr=0,an=e),tr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),as=at(xi),ih=E({},xi,{dataTransfer:0}),oh=at(ih),rh=E({},tn,{relatedTarget:0}),lr=at(rh),ch=E({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),uh=at(ch),sh=E({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fh=at(sh),dh=E({},Ha,{data:0}),ls=at(dh),mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ph={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hh[e])?!!t[e]:!1}function nr(){return vh}var gh=E({},tn,{key:function(e){if(e.key){var t=mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ph[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yh=at(gh),bh=E({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ns=at(bh),xh=E({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),Sh=at(xh),Eh=E({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),wh=at(Eh),Th=E({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jh=at(Th),Ah=E({},Ha,{newState:0,oldState:0}),Mh=at(Ah),Dh=[9,13,27,32],ir=Vt&&"CompositionEvent"in window,ln=null;Vt&&"documentMode"in document&&(ln=document.documentMode);var Ch=Vt&&"TextEvent"in window&&!ln,is=Vt&&(!ir||ln&&8<ln&&11>=ln),os=" ",rs=!1;function cs(e,t){switch(e){case"keyup":return Dh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function us(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pl=!1;function Rh(e,t){switch(e){case"compositionend":return us(t);case"keypress":return t.which!==32?null:(rs=!0,os);case"textInput":return e=t.data,e===os&&rs?null:e;default:return null}}function Oh(e,t){if(pl)return e==="compositionend"||!ir&&cs(e,t)?(e=es(),vi=er=sa=null,pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return is&&t.locale!=="ko"?null:t.data;default:return null}}var zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zh[e.type]:t==="textarea"}function fs(e,t,a,l){dl?ml?ml.push(l):ml=[l]:dl=l,t=oo(t,"onChange"),0<t.length&&(a=new bi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var nn=null,on=null;function _h(e){Zd(e,0)}function Si(e){var t=Fl(e);if(Zu(t))return e}function ds(e,t){if(e==="change")return t}var ms=!1;if(Vt){var or;if(Vt){var rr="oninput"in document;if(!rr){var ps=document.createElement("div");ps.setAttribute("oninput","return;"),rr=typeof ps.oninput=="function"}or=rr}else or=!1;ms=or&&(!document.documentMode||9<document.documentMode)}function hs(){nn&&(nn.detachEvent("onpropertychange",vs),on=nn=null)}function vs(e){if(e.propertyName==="value"&&Si(on)){var t=[];fs(t,on,e,Wo(e)),Iu(_h,t)}}function Nh(e,t,a){e==="focusin"?(hs(),nn=t,on=a,nn.attachEvent("onpropertychange",vs)):e==="focusout"&&hs()}function Bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(on)}function Lh(e,t){if(e==="click")return Si(t)}function Hh(e,t){if(e==="input"||e==="change")return Si(t)}function kh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:kh;function rn(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Lo.call(t,n)||!ut(e[n],t[n]))return!1}return!0}function gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ys(e,t){var a=gs(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gs(a)}}function bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch(l){a=!1}if(a)e=t.contentWindow;else break;t=pi(e.document)}return t}function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Uh=Vt&&"documentMode"in document&&11>=document.documentMode,hl=null,ur=null,cn=null,sr=!1;function Ss(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sr||hl==null||hl!==pi(l)||(l=hl,"selectionStart"in l&&cr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cn&&rn(cn,l)||(cn=l,l=oo(ur,"onSelect"),0<l.length&&(t=new bi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=hl)))}function ka(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var vl={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},fr={},Es={};Vt&&(Es=document.createElement("div").style,"AnimationEvent"in window||(delete vl.animationend.animation,delete vl.animationiteration.animation,delete vl.animationstart.animation),"TransitionEvent"in window||delete vl.transitionend.transition);function Ua(e){if(fr[e])return fr[e];if(!vl[e])return e;var t=vl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Es)return fr[e]=t[a];return e}var ws=Ua("animationend"),Ts=Ua("animationiteration"),js=Ua("animationstart"),qh=Ua("transitionrun"),Gh=Ua("transitionstart"),Yh=Ua("transitioncancel"),As=Ua("transitionend"),Ms=new Map,dr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dr.push("scrollEnd");function Dt(e,t){Ms.set(e,t),La(t,[e])}var Ds=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=Ds.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Xu(t)},Ds.set(e,t),t)}return{value:e,source:t,stack:Xu(t)}}var St=[],gl=0,mr=0;function Ei(){for(var e=gl,t=mr=gl=0;t<e;){var a=St[t];St[t++]=null;var l=St[t];St[t++]=null;var n=St[t];St[t++]=null;var i=St[t];if(St[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&Cs(a,n,i)}}function wi(e,t,a,l){St[gl++]=e,St[gl++]=t,St[gl++]=a,St[gl++]=l,mr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pr(e,t,a,l){return wi(e,t,a,l),Ti(e)}function yl(e,t){return wi(e,null,null,t),Ti(e)}function Cs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ct(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Ti(e){if(50<_n)throw _n=0,xc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bl={};function Vh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,a,l){return new Vh(e,t,a,l)}function hr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var a=e.alternate;return a===null?(a=st(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ji(e,t,a,l,n,i){var s=0;if(l=e,typeof e=="function")hr(e)&&(s=1);else if(typeof e=="string")s=Qv(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=st(31,a,t,n),e.elementType=ie,e.lanes=i,e;case _:return qa(a.children,n,i,t);case X:s=8,n|=24;break;case q:return e=st(12,a,t,n|2),e.elementType=q,e.lanes=i,e;case Q:return e=st(13,a,t,n),e.elementType=Q,e.lanes=i,e;case fe:return e=st(19,a,t,n),e.elementType=fe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case V:s=10;break e;case J:s=9;break e;case I:s=11;break e;case ge:s=14;break e;case de:s=16,l=null;break e}s=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=st(s,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function qa(e,t,a,l){return e=st(7,e,l,t),e.lanes=a,e}function vr(e,t,a){return e=st(6,e,null,t),e.lanes=a,e}function gr(e,t,a){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xl=[],Sl=0,Ai=null,Mi=0,Et=[],wt=0,Ga=null,Qt=1,Zt="";function Ya(e,t){xl[Sl++]=Mi,xl[Sl++]=Ai,Ai=e,Mi=t}function Os(e,t,a){Et[wt++]=Qt,Et[wt++]=Zt,Et[wt++]=Ga,Ga=e;var l=Qt;e=Zt;var n=32-ct(l)-1;l&=~(1<<n),a+=1;var i=32-ct(t)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,Qt=1<<32-ct(t)+n|a<<n|l,Zt=i+e}else Qt=1<<i|a<<n|l,Zt=e}function yr(e){e.return!==null&&(Ya(e,1),Os(e,1,0))}function br(e){for(;e===Ai;)Ai=xl[--Sl],xl[Sl]=null,Mi=xl[--Sl],xl[Sl]=null;for(;e===Ga;)Ga=Et[--wt],Et[wt]=null,Zt=Et[--wt],Et[wt]=null,Qt=Et[--wt],Et[wt]=null}var et=null,Be=null,xe=!1,Va=null,Lt=!1,xr=Error(u(519));function Xa(e){var t=Error(u(418,""));throw fn(xt(t,e)),xr}function zs(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[tt]=l,a){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(a=0;a<Bn.length;a++)pe(Bn[a],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),Ku(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),mi(t);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),Pu(t,l.value,l.defaultValue,l.children),mi(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||$d(t.textContent,a)?(l.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),l.onScroll!=null&&pe("scroll",t),l.onScrollEnd!=null&&pe("scrollend",t),l.onClick!=null&&(t.onclick=ro),t=!0):t=!1,t||Xa(e)}function _s(e){for(et=e.return;et;)switch(et.tag){case 5:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:et=et.return}}function un(e){if(e!==et)return!1;if(!xe)return _s(e),xe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Lc(e.type,e.memoizedProps)),a=!a),a&&Be&&Xa(e),_s(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Be=Rt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Be=null}}else t===27?(t=Be,Aa(e.type)?(e=qc,qc=null,Be=e):Be=t):Be=et?Rt(e.stateNode.nextSibling):null;return!0}function sn(){Be=et=null,xe=!1}function Ns(){var e=Va;return e!==null&&(it===null?it=e:it.push.apply(it,e),Va=null),e}function fn(e){Va===null?Va=[e]:Va.push(e)}var Sr=R(null),Qa=null,Kt=null;function fa(e,t,a){Y(Sr,t._currentValue),t._currentValue=a}function Jt(e){e._currentValue=Sr.current,k(Sr)}function Er(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function wr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=n;for(var x=0;x<t.length;x++)if(p.context===t[x]){i.lanes|=a,p=i.alternate,p!==null&&(p.lanes|=a),Er(i.return,a,e),l||(s=null);break e}i=p.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(u(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Er(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function dn(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var p=n.type;ut(n.pendingProps.value,s.value)||(e!==null?e.push(p):e=[p])}}else if(n===$e.current){if(s=n.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Gn):e=[Gn])}n=n.return}e!==null&&wr(t,e,a,l),t.flags|=262144}function Di(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Qa=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return Bs(Qa,e)}function Ci(e,t){return Qa===null&&Za(e),Bs(e,t)}function Bs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Kt===null){if(e===null)throw Error(u(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return a}var Xh=typeof AbortController!="undefined"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Qh=o.unstable_scheduleCallback,Zh=o.unstable_NormalPriority,Ge={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tr(){return{controller:new Xh,data:new Map,refCount:0}}function mn(e){e.refCount--,e.refCount===0&&Qh(Zh,function(){e.controller.abort()})}var pn=null,jr=0,El=0,wl=null;function Kh(e,t){if(pn===null){var a=pn=[];jr=0,El=Mc(),wl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return jr++,t.then(Ls,Ls),t}function Ls(){if(--jr===0&&pn!==null){wl!==null&&(wl.status="fulfilled");var e=pn;pn=null,El=0,wl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Hs=z.S;z.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Kh(e,t),Hs!==null&&Hs(e,t)};var Ka=R(null);function Ar(){var e=Ka.current;return e!==null?e:Ce.pooledCache}function Ri(e,t){t===null?Y(Ka,Ka.current):Y(Ka,t.pool)}function ks(){var e=Ar();return e===null?null:{parent:Ge._currentValue,pool:e}}var hn=Error(u(460)),Us=Error(u(474)),Oi=Error(u(542)),Mr={then:function(){}};function qs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zi(){}function Gs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(zi,zi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vs(e),e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vs(e),e}throw vn=t,hn}}var vn=null;function Ys(){if(vn===null)throw Error(u(459));var e=vn;return vn=null,e}function Vs(e){if(e===hn||e===Oi)throw Error(u(483))}var da=!1;function Dr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Ti(e),Cs(e,null,a),t}return wi(e,l,t,a),Ti(e)}function gn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Lu(e,a)}}function Rr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Or=!1;function yn(){if(Or){var e=wl;if(e!==null)throw e}}function bn(e,t,a,l){Or=!1;var n=e.updateQueue;da=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,p=n.shared.pending;if(p!==null){n.shared.pending=null;var x=p,D=x.next;x.next=null,s===null?i=D:s.next=D,s=x;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==s&&(p===null?N.firstBaseUpdate=D:p.next=D,N.lastBaseUpdate=x))}if(i!==null){var H=n.baseState;s=0,N=D=x=null,p=i;do{var C=p.lane&-536870913,O=C!==p.lane;if(O?(ve&C)===C:(l&C)===C){C!==0&&C===El&&(Or=!0),N!==null&&(N=N.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var le=e,ee=p;C=t;var Me=a;switch(ee.tag){case 1:if(le=ee.payload,typeof le=="function"){H=le.call(Me,H,C);break e}H=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ee.payload,C=typeof le=="function"?le.call(Me,H,C):le,C==null)break e;H=E({},H,C);break e;case 2:da=!0}}C=p.callback,C!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[C]:O.push(C))}else O={lane:C,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(D=N=O,x=H):N=N.next=O,s|=C;if(p=p.next,p===null){if(p=n.shared.pending,p===null)break;O=p,p=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);N===null&&(x=H),n.baseState=x,n.firstBaseUpdate=D,n.lastBaseUpdate=N,i===null&&(n.shared.lanes=0),Ea|=s,e.lanes=s,e.memoizedState=H}}function Xs(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Qs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xs(a[e],t)}var Tl=R(null),_i=R(0);function Zs(e,t){e=ta,Y(_i,e),Y(Tl,t),ta=e|t.baseLanes}function zr(){Y(_i,ta),Y(Tl,Tl.current)}function _r(){ta=_i.current,k(Tl),k(_i)}var ha=0,ue=null,je=null,Ue=null,Ni=!1,jl=!1,Ja=!1,Bi=0,xn=0,Al=null,Ph=0;function He(){throw Error(u(321))}function Nr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function Br(e,t,a,l,n,i){return ha=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Rf:Of,Ja=!1,i=a(l,n),Ja=!1,jl&&(i=Js(t,a,l,n)),Ks(e),i}function Ks(e){z.H=Gi;var t=je!==null&&je.next!==null;if(ha=0,Ue=je=ue=null,Ni=!1,xn=0,Al=null,t)throw Error(u(300));e===null||Xe||(e=e.dependencies,e!==null&&Di(e)&&(Xe=!0))}function Js(e,t,a,l){ue=e;var n=0;do{if(jl&&(Al=null),xn=0,jl=!1,25<=n)throw Error(u(301));if(n+=1,Ue=je=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=av,i=t(a,l)}while(jl);return i}function $h(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?Sn(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(ue.flags|=1024),t}function Lr(){var e=Bi!==0;return Bi=0,e}function Hr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function kr(e){if(Ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ni=!1}ha=0,Ue=je=ue=null,jl=!1,xn=Bi=0,Al=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function qe(){if(je===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,je=e;else{if(e===null)throw ue.alternate===null?Error(u(467)):Error(u(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ur(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sn(e){var t=xn;return xn+=1,Al===null&&(Al=[]),e=Gs(Al,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Rf:Of),e}function Li(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sn(e);if(e.$$typeof===V)return Fe(e)}throw Error(u(438,String(e)))}function qr(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ur(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=re;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=qe();return Gr(t,je,e)}function Gr(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var p=s=null,x=null,D=t,N=!1;do{var H=D.lane&-536870913;if(H!==D.lane?(ve&H)===H:(ha&H)===H){var C=D.revertLane;if(C===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),H===El&&(N=!0);else if((ha&C)===C){D=D.next,C===El&&(N=!0);continue}else H={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},x===null?(p=x=H,s=i):x=x.next=H,ue.lanes|=C,Ea|=C;H=D.action,Ja&&a(i,H),i=D.hasEagerState?D.eagerState:a(i,H)}else C={lane:H,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},x===null?(p=x=C,s=i):x=x.next=C,ue.lanes|=H,Ea|=H;D=D.next}while(D!==null&&D!==t);if(x===null?s=i:x.next=p,!ut(i,e.memoizedState)&&(Xe=!0,N&&(a=wl,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=x,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Yr(e){var t=qe(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);ut(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Ps(e,t,a){var l=ue,n=qe(),i=xe;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var s=!ut((je||n).memoizedState,a);s&&(n.memoizedState=a,Xe=!0),n=n.queue;var p=Fs.bind(null,l,n,e);if(En(2048,8,p,[e]),n.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,Ml(9,ki(),Ws.bind(null,l,n,a,t),null),Ce===null)throw Error(u(349));i||(ha&124)!==0||$s(l,t,a)}return a}function $s(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=Ur(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ws(e,t,a,l){t.value=a,t.getSnapshot=l,Is(t)&&ef(e)}function Fs(e,t,a){return a(function(){Is(t)&&ef(e)})}function Is(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch(l){return!0}}function ef(e){var t=yl(e,2);t!==null&&ht(t,e,2)}function Vr(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),Ja){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function tf(e,t,a,l){return e.baseState=a,Gr(e,je,typeof l=="function"?l:Pt)}function Wh(e,t,a,l,n){if(qi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};z.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,af(t,i)):(i.next=a.next,t.pending=a.next=i)}}function af(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=z.T,s={};z.T=s;try{var p=a(n,l),x=z.S;x!==null&&x(s,p),lf(e,t,p)}catch(D){Xr(e,t,D)}finally{z.T=i}}else try{i=a(n,l),lf(e,t,i)}catch(D){Xr(e,t,D)}}function lf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){nf(e,t,l)},function(l){return Xr(e,t,l)}):nf(e,t,a)}function nf(e,t,a){t.status="fulfilled",t.value=a,of(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,af(e,a)))}function Xr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,of(t),t=t.next;while(t!==l)}e.action=null}function of(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rf(e,t){return t}function cf(e,t){if(xe){var a=Ce.formState;if(a!==null){e:{var l=ue;if(xe){if(Be){t:{for(var n=Be,i=Lt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Rt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Be=Rt(n.nextSibling),l=n.data==="F!";break e}}Xa(l)}l=!1}l&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rf,lastRenderedState:t},a.queue=l,a=Mf.bind(null,ue,l),l.dispatch=a,l=Vr(!1),i=Pr.bind(null,ue,!1,l.queue),l=lt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Wh.bind(null,ue,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function uf(e){var t=qe();return sf(t,je,e)}function sf(e,t,a){if(t=Gr(e,t,rf)[0],e=Hi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Sn(t)}catch(s){throw s===hn?Oi:s}else l=t;t=qe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Ml(9,ki(),Fh.bind(null,n,a),null)),[l,i,e]}function Fh(e,t){e.action=t}function ff(e){var t=qe(),a=je;if(a!==null)return sf(t,a,e);qe(),t=t.memoizedState,a=qe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Ur(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function ki(){return{destroy:void 0,resource:void 0}}function df(){return qe().memoizedState}function Ui(e,t,a,l){var n=lt();l=l===void 0?null:l,ue.flags|=e,n.memoizedState=Ml(1|t,ki(),a,l)}function En(e,t,a,l){var n=qe();l=l===void 0?null:l;var i=n.memoizedState.inst;je!==null&&l!==null&&Nr(l,je.memoizedState.deps)?n.memoizedState=Ml(t,i,a,l):(ue.flags|=e,n.memoizedState=Ml(1|t,i,a,l))}function mf(e,t){Ui(8390656,8,e,t)}function pf(e,t){En(2048,8,e,t)}function hf(e,t){return En(4,2,e,t)}function vf(e,t){return En(4,4,e,t)}function gf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yf(e,t,a){a=a!=null?a.concat([e]):null,En(4,4,gf.bind(null,t,e),a)}function Qr(){}function bf(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Nr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function xf(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Nr(t,l[1]))return l[0];if(l=e(),Ja){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l}function Zr(e,t,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=wd(),ue.lanes|=e,Ea|=e,a)}function Sf(e,t,a,l){return ut(a,t)?a:Tl.current!==null?(e=Zr(e,a,l),ut(e,t)||(Xe=!0),e):(ha&42)===0?(Xe=!0,e.memoizedState=a):(e=wd(),ue.lanes|=e,Ea|=e,t)}function Ef(e,t,a,l,n){var i=G.p;G.p=i!==0&&8>i?i:8;var s=z.T,p={};z.T=p,Pr(e,!1,t,a);try{var x=n(),D=z.S;if(D!==null&&D(p,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var N=Jh(x,l);wn(e,t,N,pt(e))}else wn(e,t,l,pt(e))}catch(H){wn(e,t,{then:function(){},status:"rejected",reason:H},pt())}finally{G.p=i,z.T=s}}function Ih(){}function Kr(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=wf(e).queue;Ef(e,n,t,P,a===null?Ih:function(){return Tf(e),a(l)})}function wf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Tf(e){var t=wf(e).next.queue;wn(e,t,{},pt())}function Jr(){return Fe(Gn)}function jf(){return qe().memoizedState}function Af(){return qe().memoizedState}function ev(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=ma(a);var l=pa(t,e,a);l!==null&&(ht(l,t,a),gn(l,t,a)),t={cache:Tr()},e.payload=t;return}t=t.return}}function tv(e,t,a){var l=pt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},qi(e)?Df(t,a):(a=pr(e,t,a,l),a!==null&&(ht(a,e,l),Cf(a,t,l)))}function Mf(e,t,a){var l=pt();wn(e,t,a,l)}function wn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Df(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,p=i(s,a);if(n.hasEagerState=!0,n.eagerState=p,ut(p,s))return wi(e,t,n,0),Ce===null&&Ei(),!1}catch(x){}finally{}if(a=pr(e,t,n,l),a!==null)return ht(a,e,l),Cf(a,t,l),!0}return!1}function Pr(e,t,a,l){if(l={lane:2,revertLane:Mc(),action:l,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(u(479))}else t=pr(e,a,l,2),t!==null&&ht(t,e,2)}function qi(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Df(e,t){jl=Ni=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Cf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Lu(e,a)}}var Gi={readContext:Fe,use:Li,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He},Rf={readContext:Fe,use:Li,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:mf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ui(4194308,4,gf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var l=e();if(Ja){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=lt();if(a!==void 0){var n=a(t);if(Ja){ca(!0);try{a(t)}finally{ca(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=tv.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Vr(e);var t=e.queue,a=Mf.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Qr,useDeferredValue:function(e,t){var a=lt();return Zr(a,e,t)},useTransition:function(){var e=Vr(!1);return e=Ef.bind(null,ue,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ue,n=lt();if(xe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ce===null)throw Error(u(349));(ve&124)!==0||$s(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,mf(Fs.bind(null,l,i,e),[e]),l.flags|=2048,Ml(9,ki(),Ws.bind(null,l,i,a,t),null),a},useId:function(){var e=lt(),t=Ce.identifierPrefix;if(xe){var a=Zt,l=Qt;a=(l&~(1<<32-ct(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=Bi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Ph++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Jr,useFormState:cf,useActionState:cf,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Pr.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:qr,useCacheRefresh:function(){return lt().memoizedState=ev.bind(null,ue)}},Of={readContext:Fe,use:Li,useCallback:bf,useContext:Fe,useEffect:pf,useImperativeHandle:yf,useInsertionEffect:hf,useLayoutEffect:vf,useMemo:xf,useReducer:Hi,useRef:df,useState:function(){return Hi(Pt)},useDebugValue:Qr,useDeferredValue:function(e,t){var a=qe();return Sf(a,je.memoizedState,e,t)},useTransition:function(){var e=Hi(Pt)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Sn(e),t]},useSyncExternalStore:Ps,useId:jf,useHostTransitionStatus:Jr,useFormState:uf,useActionState:uf,useOptimistic:function(e,t){var a=qe();return tf(a,je,e,t)},useMemoCache:qr,useCacheRefresh:Af},av={readContext:Fe,use:Li,useCallback:bf,useContext:Fe,useEffect:pf,useImperativeHandle:yf,useInsertionEffect:hf,useLayoutEffect:vf,useMemo:xf,useReducer:Yr,useRef:df,useState:function(){return Yr(Pt)},useDebugValue:Qr,useDeferredValue:function(e,t){var a=qe();return je===null?Zr(a,e,t):Sf(a,je.memoizedState,e,t)},useTransition:function(){var e=Yr(Pt)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Sn(e),t]},useSyncExternalStore:Ps,useId:jf,useHostTransitionStatus:Jr,useFormState:ff,useActionState:ff,useOptimistic:function(e,t){var a=qe();return je!==null?tf(a,je,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qr,useCacheRefresh:Af},Dl=null,Tn=0;function Yi(e){var t=Tn;return Tn+=1,Dl===null&&(Dl=[]),Gs(Dl,e,t)}function jn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vi(e,t){throw t.$$typeof===A?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zf(e){var t=e._init;return t(e._payload)}function _f(e){function t(j,w){if(e){var M=j.deletions;M===null?(j.deletions=[w],j.flags|=16):M.push(w)}}function a(j,w){if(!e)return null;for(;w!==null;)t(j,w),w=w.sibling;return null}function l(j){for(var w=new Map;j!==null;)j.key!==null?w.set(j.key,j):w.set(j.index,j),j=j.sibling;return w}function n(j,w){return j=Xt(j,w),j.index=0,j.sibling=null,j}function i(j,w,M){return j.index=M,e?(M=j.alternate,M!==null?(M=M.index,M<w?(j.flags|=67108866,w):M):(j.flags|=67108866,w)):(j.flags|=1048576,w)}function s(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function p(j,w,M,B){return w===null||w.tag!==6?(w=vr(M,j.mode,B),w.return=j,w):(w=n(w,M),w.return=j,w)}function x(j,w,M,B){var K=M.type;return K===_?N(j,w,M.props.children,B,M.key):w!==null&&(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===de&&zf(K)===w.type)?(w=n(w,M.props),jn(w,M),w.return=j,w):(w=ji(M.type,M.key,M.props,null,j.mode,B),jn(w,M),w.return=j,w)}function D(j,w,M,B){return w===null||w.tag!==4||w.stateNode.containerInfo!==M.containerInfo||w.stateNode.implementation!==M.implementation?(w=gr(M,j.mode,B),w.return=j,w):(w=n(w,M.children||[]),w.return=j,w)}function N(j,w,M,B,K){return w===null||w.tag!==7?(w=qa(M,j.mode,B,K),w.return=j,w):(w=n(w,M),w.return=j,w)}function H(j,w,M){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=vr(""+w,j.mode,M),w.return=j,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case S:return M=ji(w.type,w.key,w.props,null,j.mode,M),jn(M,w),M.return=j,M;case L:return w=gr(w,j.mode,M),w.return=j,w;case de:var B=w._init;return w=B(w._payload),H(j,w,M)}if(F(w)||ye(w))return w=qa(w,j.mode,M,null),w.return=j,w;if(typeof w.then=="function")return H(j,Yi(w),M);if(w.$$typeof===V)return H(j,Ci(j,w),M);Vi(j,w)}return null}function C(j,w,M,B){var K=w!==null?w.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return K!==null?null:p(j,w,""+M,B);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return M.key===K?x(j,w,M,B):null;case L:return M.key===K?D(j,w,M,B):null;case de:return K=M._init,M=K(M._payload),C(j,w,M,B)}if(F(M)||ye(M))return K!==null?null:N(j,w,M,B,null);if(typeof M.then=="function")return C(j,w,Yi(M),B);if(M.$$typeof===V)return C(j,w,Ci(j,M),B);Vi(j,M)}return null}function O(j,w,M,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return j=j.get(M)||null,p(w,j,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return j=j.get(B.key===null?M:B.key)||null,x(w,j,B,K);case L:return j=j.get(B.key===null?M:B.key)||null,D(w,j,B,K);case de:var se=B._init;return B=se(B._payload),O(j,w,M,B,K)}if(F(B)||ye(B))return j=j.get(M)||null,N(w,j,B,K,null);if(typeof B.then=="function")return O(j,w,M,Yi(B),K);if(B.$$typeof===V)return O(j,w,M,Ci(w,B),K);Vi(w,B)}return null}function le(j,w,M,B){for(var K=null,se=null,W=w,ae=w=0,Ze=null;W!==null&&ae<M.length;ae++){W.index>ae?(Ze=W,W=null):Ze=W.sibling;var be=C(j,W,M[ae],B);if(be===null){W===null&&(W=Ze);break}e&&W&&be.alternate===null&&t(j,W),w=i(be,w,ae),se===null?K=be:se.sibling=be,se=be,W=Ze}if(ae===M.length)return a(j,W),xe&&Ya(j,ae),K;if(W===null){for(;ae<M.length;ae++)W=H(j,M[ae],B),W!==null&&(w=i(W,w,ae),se===null?K=W:se.sibling=W,se=W);return xe&&Ya(j,ae),K}for(W=l(W);ae<M.length;ae++)Ze=O(W,j,ae,M[ae],B),Ze!==null&&(e&&Ze.alternate!==null&&W.delete(Ze.key===null?ae:Ze.key),w=i(Ze,w,ae),se===null?K=Ze:se.sibling=Ze,se=Ze);return e&&W.forEach(function(Oa){return t(j,Oa)}),xe&&Ya(j,ae),K}function ee(j,w,M,B){if(M==null)throw Error(u(151));for(var K=null,se=null,W=w,ae=w=0,Ze=null,be=M.next();W!==null&&!be.done;ae++,be=M.next()){W.index>ae?(Ze=W,W=null):Ze=W.sibling;var Oa=C(j,W,be.value,B);if(Oa===null){W===null&&(W=Ze);break}e&&W&&Oa.alternate===null&&t(j,W),w=i(Oa,w,ae),se===null?K=Oa:se.sibling=Oa,se=Oa,W=Ze}if(be.done)return a(j,W),xe&&Ya(j,ae),K;if(W===null){for(;!be.done;ae++,be=M.next())be=H(j,be.value,B),be!==null&&(w=i(be,w,ae),se===null?K=be:se.sibling=be,se=be);return xe&&Ya(j,ae),K}for(W=l(W);!be.done;ae++,be=M.next())be=O(W,j,ae,be.value,B),be!==null&&(e&&be.alternate!==null&&W.delete(be.key===null?ae:be.key),w=i(be,w,ae),se===null?K=be:se.sibling=be,se=be);return e&&W.forEach(function(lg){return t(j,lg)}),xe&&Ya(j,ae),K}function Me(j,w,M,B){if(typeof M=="object"&&M!==null&&M.type===_&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case S:e:{for(var K=M.key;w!==null;){if(w.key===K){if(K=M.type,K===_){if(w.tag===7){a(j,w.sibling),B=n(w,M.props.children),B.return=j,j=B;break e}}else if(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===de&&zf(K)===w.type){a(j,w.sibling),B=n(w,M.props),jn(B,M),B.return=j,j=B;break e}a(j,w);break}else t(j,w);w=w.sibling}M.type===_?(B=qa(M.props.children,j.mode,B,M.key),B.return=j,j=B):(B=ji(M.type,M.key,M.props,null,j.mode,B),jn(B,M),B.return=j,j=B)}return s(j);case L:e:{for(K=M.key;w!==null;){if(w.key===K)if(w.tag===4&&w.stateNode.containerInfo===M.containerInfo&&w.stateNode.implementation===M.implementation){a(j,w.sibling),B=n(w,M.children||[]),B.return=j,j=B;break e}else{a(j,w);break}else t(j,w);w=w.sibling}B=gr(M,j.mode,B),B.return=j,j=B}return s(j);case de:return K=M._init,M=K(M._payload),Me(j,w,M,B)}if(F(M))return le(j,w,M,B);if(ye(M)){if(K=ye(M),typeof K!="function")throw Error(u(150));return M=K.call(M),ee(j,w,M,B)}if(typeof M.then=="function")return Me(j,w,Yi(M),B);if(M.$$typeof===V)return Me(j,w,Ci(j,M),B);Vi(j,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,w!==null&&w.tag===6?(a(j,w.sibling),B=n(w,M),B.return=j,j=B):(a(j,w),B=vr(M,j.mode,B),B.return=j,j=B),s(j)):a(j,w)}return function(j,w,M,B){try{Tn=0;var K=Me(j,w,M,B);return Dl=null,K}catch(W){if(W===hn||W===Oi)throw W;var se=st(29,W,null,j.mode);return se.lanes=B,se.return=j,se}finally{}}}var Cl=_f(!0),Nf=_f(!1),Tt=R(null),Ht=null;function va(e){var t=e.alternate;Y(Ye,Ye.current&1),Y(Tt,e),Ht===null&&(t===null||Tl.current!==null||t.memoizedState!==null)&&(Ht=e)}function Bf(e){if(e.tag===22){if(Y(Ye,Ye.current),Y(Tt,e),Ht===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ht=e)}}else ga()}function ga(){Y(Ye,Ye.current),Y(Tt,Tt.current)}function $t(e){k(Tt),Ht===e&&(Ht=null),k(Ye)}var Ye=R(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Uc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function $r(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),n=ma(l);n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(ht(t,e,l),gn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),n=ma(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(ht(t,e,l),gn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=ma(a);l.tag=2,t!=null&&(l.callback=t),t=pa(e,l,a),t!==null&&(ht(t,e,a),gn(t,e,a))}};function Lf(e,t,a,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):t.prototype&&t.prototype.isPureReactComponent?!rn(a,l)||!rn(n,i):!0}function Hf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Wr.enqueueReplaceState(t,t.state,null)}function Pa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Qi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function kf(e){Qi(e)}function Uf(e){console.error(e)}function qf(e){Qi(e)}function Zi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Gf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Fr(e,t,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Zi(e,t)},a}function Yf(e){return e=ma(e),e.tag=3,e}function Vf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Gf(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Gf(t,a,l),typeof n!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function lv(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&dn(t,a,n,!0),a=Tt.current,a!==null){switch(a.tag){case 13:return Ht===null?Ec():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Mr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Tc(e,l,n)),!1;case 22:return a.flags|=65536,l===Mr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Tc(e,l,n)),!1}throw Error(u(435,a.tag))}return Tc(e,l,n),Ec(),!1}if(xe)return t=Tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==xr&&(e=Error(u(422),{cause:l}),fn(xt(e,a)))):(l!==xr&&(t=Error(u(423),{cause:l}),fn(xt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=xt(l,a),n=Fr(e.stateNode,l,n),Rr(e,n),Le!==4&&(Le=2)),!1;var i=Error(u(520),{cause:l});if(i=xt(i,a),zn===null?zn=[i]:zn.push(i),Le!==4&&(Le=2),t===null)return!0;l=xt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Fr(a.stateNode,l,e),Rr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Yf(n),Vf(n,e,a,l),Rr(a,n),!1}a=a.return}while(a!==null);return!1}var Xf=Error(u(461)),Xe=!1;function Ke(e,t,a,l){t.child=e===null?Nf(t,null,a,l):Cl(t,e.child,a,l)}function Qf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var s={};for(var p in l)p!=="ref"&&(s[p]=l[p])}else s=l;return Za(t),l=Br(e,t,a,s,i,n),p=Lr(),e!==null&&!Xe?(Hr(e,t,n),Wt(e,t,n)):(xe&&p&&yr(t),t.flags|=1,Ke(e,t,l,n),t.child)}function Zf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!hr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Kf(e,t,i,l,n)):(e=ji(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!oc(e,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:rn,a(s,l)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Xt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Kf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(rn(i,l)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=l=i,oc(e,n))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return Ir(e,t,a,l,n)}function Jf(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Pf(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(t,i!==null?i.cachePool:null),i!==null?Zs(t,i):zr(),Bf(t);else return t.lanes=t.childLanes=536870912,Pf(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(Ri(t,i.cachePool),Zs(t,i),ga(),t.memoizedState=null):(e!==null&&Ri(t,null),zr(),ga());return Ke(e,t,n,a),t.child}function Pf(e,t,a,l){var n=Ar();return n=n===null?null:{parent:Ge._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Ri(t,null),zr(),Bf(t),e!==null&&dn(e,t,l,!0),null}function Ki(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ir(e,t,a,l,n){return Za(t),a=Br(e,t,a,l,void 0,n),l=Lr(),e!==null&&!Xe?(Hr(e,t,n),Wt(e,t,n)):(xe&&l&&yr(t),t.flags|=1,Ke(e,t,a,n),t.child)}function $f(e,t,a,l,n,i){return Za(t),t.updateQueue=null,a=Js(t,l,a,n),Ks(e),l=Lr(),e!==null&&!Xe?(Hr(e,t,i),Wt(e,t,i)):(xe&&l&&yr(t),t.flags|=1,Ke(e,t,a,i),t.child)}function Wf(e,t,a,l,n){if(Za(t),t.stateNode===null){var i=bl,s=a.contextType;typeof s=="object"&&s!==null&&(i=Fe(s)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Dr(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Fe(s):bl,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&($r(t,a,s,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Wr.enqueueReplaceState(i,i.state,null),bn(t,l,i,n),yn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var p=t.memoizedProps,x=Pa(a,p);i.props=x;var D=i.context,N=a.contextType;s=bl,typeof N=="object"&&N!==null&&(s=Fe(N));var H=a.getDerivedStateFromProps;N=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||D!==s)&&Hf(t,i,l,s),da=!1;var C=t.memoizedState;i.state=C,bn(t,l,i,n),yn(),D=t.memoizedState,p||C!==D||da?(typeof H=="function"&&($r(t,a,H,l),D=t.memoizedState),(x=da||Lf(t,a,x,l,C,D,s))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=D),i.props=l,i.state=D,i.context=s,l=x):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Cr(e,t),s=t.memoizedProps,N=Pa(a,s),i.props=N,H=t.pendingProps,C=i.context,D=a.contextType,x=bl,typeof D=="object"&&D!==null&&(x=Fe(D)),p=a.getDerivedStateFromProps,(D=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==H||C!==x)&&Hf(t,i,l,x),da=!1,C=t.memoizedState,i.state=C,bn(t,l,i,n),yn();var O=t.memoizedState;s!==H||C!==O||da||e!==null&&e.dependencies!==null&&Di(e.dependencies)?(typeof p=="function"&&($r(t,a,p,l),O=t.memoizedState),(N=da||Lf(t,a,N,l,C,O,x)||e!==null&&e.dependencies!==null&&Di(e.dependencies))?(D||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,x)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),i.props=l,i.state=O,i.context=x,l=N):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ki(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Cl(t,e.child,null,n),t.child=Cl(t,null,a,n)):Ke(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Wt(e,t,n),e}function Ff(e,t,a,l){return sn(),t.flags|=256,Ke(e,t,a,l),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tc(e){return{baseLanes:e,cachePool:ks()}}function ac(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=jt),e}function If(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(n?va(t):ga(),xe){var p=Be,x;if(x=p){e:{for(x=p,p=Lt;x.nodeType!==8;){if(!p){p=null;break e}if(x=Rt(x.nextSibling),x===null){p=null;break e}}p=x}p!==null?(t.memoizedState={dehydrated:p,treeContext:Ga!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},x=st(18,null,null,0),x.stateNode=p,x.return=t,t.child=x,et=t,Be=null,x=!0):x=!1}x||Xa(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return Uc(p)?t.lanes=32:t.lanes=536870912,null;$t(t)}return p=l.children,l=l.fallback,n?(ga(),n=t.mode,p=Ji({mode:"hidden",children:p},n),l=qa(l,n,a,null),p.return=t,l.return=t,p.sibling=l,t.child=p,n=t.child,n.memoizedState=tc(a),n.childLanes=ac(e,s,a),t.memoizedState=ec,l):(va(t),lc(t,p))}if(x=e.memoizedState,x!==null&&(p=x.dehydrated,p!==null)){if(i)t.flags&256?(va(t),t.flags&=-257,t=nc(e,t,a)):t.memoizedState!==null?(ga(),t.child=e.child,t.flags|=128,t=null):(ga(),n=l.fallback,p=t.mode,l=Ji({mode:"visible",children:l.children},p),n=qa(n,p,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,Cl(t,e.child,null,a),l=t.child,l.memoizedState=tc(a),l.childLanes=ac(e,s,a),t.memoizedState=ec,t=n);else if(va(t),Uc(p)){if(s=p.nextSibling&&p.nextSibling.dataset,s)var D=s.dgst;s=D,l=Error(u(419)),l.stack="",l.digest=s,fn({value:l,source:null,stack:null}),t=nc(e,t,a)}else if(Xe||dn(e,t,a,!1),s=(a&e.childLanes)!==0,Xe||s){if(s=Ce,s!==null&&(l=a&-a,l=(l&42)!==0?1:qo(l),l=(l&(s.suspendedLanes|a))!==0?0:l,l!==0&&l!==x.retryLane))throw x.retryLane=l,yl(e,l),ht(s,e,l),Xf;p.data==="$?"||Ec(),t=nc(e,t,a)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Be=Rt(p.nextSibling),et=t,xe=!0,Va=null,Lt=!1,e!==null&&(Et[wt++]=Qt,Et[wt++]=Zt,Et[wt++]=Ga,Qt=e.id,Zt=e.overflow,Ga=t),t=lc(t,l.children),t.flags|=4096);return t}return n?(ga(),n=l.fallback,p=t.mode,x=e.child,D=x.sibling,l=Xt(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,D!==null?n=Xt(D,n):(n=qa(n,p,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,p=e.child.memoizedState,p===null?p=tc(a):(x=p.cachePool,x!==null?(D=Ge._currentValue,x=x.parent!==D?{parent:D,pool:D}:x):x=ks(),p={baseLanes:p.baseLanes|a,cachePool:x}),n.memoizedState=p,n.childLanes=ac(e,s,a),t.memoizedState=ec,l):(va(t),a=e.child,e=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function lc(e,t){return t=Ji({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ji(e,t){return e=st(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function nc(e,t,a){return Cl(t,e.child,null,a),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ed(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Er(e.return,t,a)}function ic(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function td(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Ke(e,t,l.children,a),l=Ye.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ed(e,a,t);else if(e.tag===19)ed(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Y(Ye,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Xi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ic(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Xi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ic(t,!0,a,null,i);break;case"together":ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ea|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(dn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Xt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Xt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Di(e)))}function nv(e,t,a){switch(t.tag){case 3:Te(t,t.stateNode.containerInfo),fa(t,Ge,e.memoizedState.cache),sn();break;case 27:case 5:Bo(t);break;case 4:Te(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?If(e,t,a):(va(t),e=Wt(e,t,a),e!==null?e.sibling:null);va(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(dn(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return td(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(Ye,Ye.current),l)break;return null;case 22:case 23:return t.lanes=0,Jf(e,t,a);case 24:fa(t,Ge,e.memoizedState.cache)}return Wt(e,t,a)}function ad(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!oc(e,a)&&(t.flags&128)===0)return Xe=!1,nv(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,xe&&(t.flags&1048576)!==0&&Os(t,Mi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")hr(l)?(e=Pa(l,e),t.tag=1,t=Wf(null,t,l,e,a)):(t.tag=0,t=Ir(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===I){t.tag=11,t=Qf(null,t,l,e,a);break e}else if(n===ge){t.tag=14,t=Zf(null,t,l,e,a);break e}}throw t=ot(l)||l,Error(u(306,t,""))}}return t;case 0:return Ir(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Pa(l,t.pendingProps),Wf(e,t,l,n,a);case 3:e:{if(Te(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Cr(e,t),bn(t,l,null,a);var s=t.memoizedState;if(l=s.cache,fa(t,Ge,l),l!==i.cache&&wr(t,[Ge],a,!0),yn(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Ff(e,t,l,a);break e}else if(l!==n){n=xt(Error(u(424)),t),fn(n),t=Ff(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Rt(e.firstChild),et=t,xe=!0,Va=null,Lt=!0,a=Nf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(sn(),l===n){t=Wt(e,t,a);break e}Ke(e,t,l,a)}t=t.child}return t;case 26:return Ki(e,t),e===null?(a=om(t.type,null,t.pendingProps,null))?t.memoizedState=a:xe||(a=t.type,e=t.pendingProps,l=co($.current).createElement(a),l[We]=t,l[tt]=e,Pe(l,a,e),Ve(l),t.stateNode=l):t.memoizedState=om(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bo(t),e===null&&xe&&(l=t.stateNode=lm(t.type,t.pendingProps,$.current),et=t,Lt=!0,n=Be,Aa(t.type)?(qc=n,Be=Rt(l.firstChild)):Be=n),Ke(e,t,t.pendingProps.children,a),Ki(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((n=l=Be)&&(l=zv(l,t.type,t.pendingProps,Lt),l!==null?(t.stateNode=l,et=t,Be=Rt(l.firstChild),Lt=!1,n=!0):n=!1),n||Xa(t)),Bo(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Lc(n,i)?l=null:s!==null&&Lc(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=Br(e,t,$h,null,null,a),Gn._currentValue=n),Ki(e,t),Ke(e,t,l,a),t.child;case 6:return e===null&&xe&&((e=a=Be)&&(a=_v(a,t.pendingProps,Lt),a!==null?(t.stateNode=a,et=t,Be=null,e=!0):e=!1),e||Xa(t)),null;case 13:return If(e,t,a);case 4:return Te(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Cl(t,null,l,a):Ke(e,t,l,a),t.child;case 11:return Qf(e,t,t.type,t.pendingProps,a);case 7:return Ke(e,t,t.pendingProps,a),t.child;case 8:return Ke(e,t,t.pendingProps.children,a),t.child;case 12:return Ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,fa(t,t.type,l.value),Ke(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=Fe(n),l=l(n),t.flags|=1,Ke(e,t,l,a),t.child;case 14:return Zf(e,t,t.type,t.pendingProps,a);case 15:return Kf(e,t,t.type,t.pendingProps,a);case 19:return td(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ji(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Xt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Jf(e,t,a);case 24:return Za(t),l=Fe(Ge),e===null?(n=Ar(),n===null&&(n=Ce,i=Tr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Dr(t),fa(t,Ge,n)):((e.lanes&a)!==0&&(Cr(e,t),bn(t,null,null,a),yn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),fa(t,Ge,l)):(l=i.cache,fa(t,Ge,l),l!==n.cache&&wr(t,[Ge],a,!0))),Ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Ft(e){e.flags|=4}function ld(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fm(t)){if(t=Tt.current,t!==null&&((ve&4194048)===ve?Ht!==null:(ve&62914560)!==ve&&(ve&536870912)===0||t!==Ht))throw vn=Mr,Us;e.flags|=8192}}function Pi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Nu():536870912,e.lanes|=t,_l|=t)}function An(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function iv(e,t,a){var l=t.pendingProps;switch(br(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Jt(Ge),ra(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(un(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ns())),_e(t),null;case 26:return a=t.memoizedState,e===null?(Ft(t),a!==null?(_e(t),ld(t,a)):(_e(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Ft(t),_e(t),ld(t,a)):(_e(t),t.flags&=-16777217):(e.memoizedProps!==l&&Ft(t),_e(t),t.flags&=-16777217),null;case 27:oi(t),a=$.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return _e(t),null}e=Z.current,un(t)?zs(t):(e=lm(n,l,a),t.stateNode=e,Ft(t))}return _e(t),null;case 5:if(oi(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return _e(t),null}if(e=Z.current,un(t))zs(t);else{switch(n=co($.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[We]=t,e[tt]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Pe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ft(t)}}return _e(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=$.current,un(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=et,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||$d(e.nodeValue,a)),e||Xa(t)}else e=co(e).createTextNode(l),e[We]=t,t.stateNode=e}return _e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=un(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[We]=t}else sn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),n=!1}else n=Ns(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?($t(t),t):($t(t),null)}if($t(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Pi(t,t.updateQueue),_e(t),null;case 4:return ra(),e===null&&Oc(t.stateNode.containerInfo),_e(t),null;case 10:return Jt(t.type),_e(t),null;case 19:if(k(Ye),n=t.memoizedState,n===null)return _e(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)An(n,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Xi(e),i!==null){for(t.flags|=128,An(n,!1),e=i.updateQueue,t.updateQueue=e,Pi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Rs(a,e),a=a.sibling;return Y(Ye,Ye.current&1|2),t.child}e=e.sibling}n.tail!==null&&Bt()>Fi&&(t.flags|=128,l=!0,An(n,!1),t.lanes=4194304)}else{if(!l)if(e=Xi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Pi(t,e),An(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!xe)return _e(t),null}else 2*Bt()-n.renderingStartTime>Fi&&a!==536870912&&(t.flags|=128,l=!0,An(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Bt(),t.sibling=null,e=Ye.current,Y(Ye,l?e&1|2:e&1),t):(_e(t),null);case 22:case 23:return $t(t),_r(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&Pi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&k(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Jt(Ge),_e(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function ov(e,t){switch(br(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(Ge),ra(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return oi(t),null;case 13:if($t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(Ye),null;case 4:return ra(),null;case 10:return Jt(t.type),null;case 22:case 23:return $t(t),_r(),e!==null&&k(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jt(Ge),null;case 25:return null;default:return null}}function nd(e,t){switch(br(t),t.tag){case 3:Jt(Ge),ra();break;case 26:case 27:case 5:oi(t);break;case 4:ra();break;case 13:$t(t);break;case 19:k(Ye);break;case 10:Jt(t.type);break;case 22:case 23:$t(t),_r(),e!==null&&k(Ka);break;case 24:Jt(Ge)}}function Mn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(p){De(t,t.return,p)}}function ya(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,p=s.destroy;if(p!==void 0){s.destroy=void 0,n=t;var x=a,D=p;try{D()}catch(N){De(n,x,N)}}}l=l.next}while(l!==i)}}catch(N){De(t,t.return,N)}}function id(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Qs(t,a)}catch(l){De(e,e.return,l)}}}function od(e,t,a){a.props=Pa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){De(e,t,l)}}function Dn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){De(e,t,n)}}function kt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){De(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){De(e,t,n)}else a.current=null}function rd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){De(e,e.return,n)}}function rc(e,t,a){try{var l=e.stateNode;Mv(l,e.type,a,t),l[tt]=t}catch(n){De(e,e.return,n)}}function cd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ro));else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(uc(e,t,a),e=e.sibling;e!==null;)uc(e,t,a),e=e.sibling}function $i(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($i(e,t,a),e=e.sibling;e!==null;)$i(e,t,a),e=e.sibling}function ud(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pe(t,l,a),t[We]=e,t[tt]=a}catch(i){De(e,e.return,i)}}var It=!1,ke=!1,sc=!1,sd=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function rv(e,t){if(e=e.containerInfo,Nc=ho,e=xs(e),cr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch(ee){a=null;break e}var s=0,p=-1,x=-1,D=0,N=0,H=e,C=null;t:for(;;){for(var O;H!==a||n!==0&&H.nodeType!==3||(p=s+n),H!==i||l!==0&&H.nodeType!==3||(x=s+l),H.nodeType===3&&(s+=H.nodeValue.length),(O=H.firstChild)!==null;)C=H,H=O;for(;;){if(H===e)break t;if(C===a&&++D===n&&(p=s),C===i&&++N===l&&(x=s),(O=H.nextSibling)!==null)break;H=C,C=H.parentNode}H=O}a=p===-1||x===-1?null:{start:p,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:e,selectionRange:a},ho=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var le=Pa(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(le,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){De(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)kc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function fd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),l&4&&Mn(5,a);break;case 1:if(ba(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){De(a,a.return,s)}else{var n=Pa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){De(a,a.return,s)}}l&64&&id(a),l&512&&Dn(a,a.return);break;case 3:if(ba(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Qs(e,t)}catch(s){De(a,a.return,s)}}break;case 27:t===null&&l&4&&ud(a);case 26:case 5:ba(e,a),t===null&&l&4&&rd(a),l&512&&Dn(a,a.return);break;case 12:ba(e,a);break;case 13:ba(e,a),l&4&&pd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vv.bind(null,a),Nv(e,a))));break;case 22:if(l=a.memoizedState!==null||It,!l){t=t!==null&&t.memoizedState!==null||ke,n=It;var i=ke;It=l,(ke=t)&&!i?xa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),It=n,ke=i}break;case 30:break;default:ba(e,a)}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,nt=!1;function ea(e,t,a){for(a=a.child;a!==null;)md(e,t,a),a=a.sibling}function md(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Jl,a)}catch(i){}switch(a.tag){case 26:ke||kt(a,t),ea(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||kt(a,t);var l=ze,n=nt;Aa(a.type)&&(ze=a.stateNode,nt=!1),ea(e,t,a),Hn(a.stateNode),ze=l,nt=n;break;case 5:ke||kt(a,t);case 6:if(l=ze,n=nt,ze=null,ea(e,t,a),ze=l,nt=n,ze!==null)if(nt)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(i){De(a,t,i)}else try{ze.removeChild(a.stateNode)}catch(i){De(a,t,i)}break;case 18:ze!==null&&(nt?(e=ze,tm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qn(e)):tm(ze,a.stateNode));break;case 4:l=ze,n=nt,ze=a.stateNode.containerInfo,nt=!0,ea(e,t,a),ze=l,nt=n;break;case 0:case 11:case 14:case 15:ke||ya(2,a,t),ke||ya(4,a,t),ea(e,t,a);break;case 1:ke||(kt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&od(a,t,l)),ea(e,t,a);break;case 21:ea(e,t,a);break;case 22:ke=(l=ke)||a.memoizedState!==null,ea(e,t,a),ke=l;break;default:ea(e,t,a)}}function pd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qn(e)}catch(a){De(t,t.return,a)}}function cv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sd),t;default:throw Error(u(435,e.tag))}}function fc(e,t){var a=cv(e);t.forEach(function(l){var n=gv.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function ft(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,s=t,p=s;e:for(;p!==null;){switch(p.tag){case 27:if(Aa(p.type)){ze=p.stateNode,nt=!1;break e}break;case 5:ze=p.stateNode,nt=!1;break e;case 3:case 4:ze=p.stateNode.containerInfo,nt=!0;break e}p=p.return}if(ze===null)throw Error(u(160));md(i,s,n),ze=null,nt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)hd(t,e),t=t.sibling}var Ct=null;function hd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),dt(e),l&4&&(ya(3,e,e.return),Mn(3,e),ya(5,e,e.return));break;case 1:ft(t,e),dt(e),l&512&&(ke||a===null||kt(a,a.return)),l&64&&It&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ct;if(ft(t,e),dt(e),l&512&&(ke||a===null||kt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Wl]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Pe(i,l,a),i[We]=e,Ve(i),l=i;break e;case"link":var s=um("link","href",n).get(l+(a.href||""));if(s){for(var p=0;p<s.length;p++)if(i=s[p],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(p,1);break t}}i=n.createElement(l),Pe(i,l,a),n.head.appendChild(i);break;case"meta":if(s=um("meta","content",n).get(l+(a.content||""))){for(p=0;p<s.length;p++)if(i=s[p],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(p,1);break t}}i=n.createElement(l),Pe(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[We]=e,Ve(i),l=i}e.stateNode=l}else sm(n,e.type,e.stateNode);else e.stateNode=cm(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?sm(n,e.type,e.stateNode):cm(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&rc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ft(t,e),dt(e),l&512&&(ke||a===null||kt(a,a.return)),a!==null&&l&4&&rc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ft(t,e),dt(e),l&512&&(ke||a===null||kt(a,a.return)),e.flags&32){n=e.stateNode;try{fl(n,"")}catch(O){De(e,e.return,O)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,rc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(sc=!0);break;case 6:if(ft(t,e),dt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(O){De(e,e.return,O)}}break;case 3:if(fo=null,n=Ct,Ct=uo(t.containerInfo),ft(t,e),Ct=n,dt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(O){De(e,e.return,O)}sc&&(sc=!1,vd(e));break;case 4:l=Ct,Ct=uo(e.stateNode.containerInfo),ft(t,e),dt(e),Ct=l;break;case 12:ft(t,e),dt(e);break;case 13:ft(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gc=Bt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 22:n=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,D=It,N=ke;if(It=D||n,ke=N||x,ft(t,e),ke=N,It=D,dt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||x||It||ke||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(i=x.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{p=x.stateNode;var H=x.memoizedProps.style,C=H!=null&&H.hasOwnProperty("display")?H.display:null;p.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(O){De(x,x.return,O)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=n?"":x.memoizedProps}catch(O){De(x,x.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,fc(e,a))));break;case 19:ft(t,e),dt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 30:break;case 21:break;default:ft(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(cd(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=cc(e);$i(e,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(fl(s,""),a.flags&=-33);var p=cc(e);$i(e,p,s);break;case 3:case 4:var x=a.stateNode.containerInfo,D=cc(e);uc(e,D,x);break;default:throw Error(u(161))}}catch(N){De(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fd(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ya(4,t,t.return),$a(t);break;case 1:kt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&od(t,t.return,a),$a(t);break;case 27:Hn(t.stateNode);case 26:case 5:kt(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function xa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:xa(n,i,a),Mn(4,i);break;case 1:if(xa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(D){De(l,l.return,D)}if(l=i,n=l.updateQueue,n!==null){var p=l.stateNode;try{var x=n.shared.hiddenCallbacks;if(x!==null)for(n.shared.hiddenCallbacks=null,n=0;n<x.length;n++)Xs(x[n],p)}catch(D){De(l,l.return,D)}}a&&s&64&&id(i),Dn(i,i.return);break;case 27:ud(i);case 26:case 5:xa(n,i,a),a&&l===null&&s&4&&rd(i),Dn(i,i.return);break;case 12:xa(n,i,a);break;case 13:xa(n,i,a),a&&s&4&&pd(n,i);break;case 22:i.memoizedState===null&&xa(n,i,a),Dn(i,i.return);break;case 30:break;default:xa(n,i,a)}t=t.sibling}}function dc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mn(a))}function mc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mn(e))}function Ut(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gd(e,t,a,l),t=t.sibling}function gd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,a,l),n&2048&&Mn(9,t);break;case 1:Ut(e,t,a,l);break;case 3:Ut(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mn(e)));break;case 12:if(n&2048){Ut(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,p=i.onPostCommit;typeof p=="function"&&p(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){De(t,t.return,x)}}else Ut(e,t,a,l);break;case 13:Ut(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Ut(e,t,a,l):Cn(e,t):i._visibility&2?Ut(e,t,a,l):(i._visibility|=2,Rl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&dc(s,t);break;case 24:Ut(e,t,a,l),n&2048&&mc(t.alternate,t);break;default:Ut(e,t,a,l)}}function Rl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,s=t,p=a,x=l,D=s.flags;switch(s.tag){case 0:case 11:case 15:Rl(i,s,p,x,n),Mn(8,s);break;case 23:break;case 22:var N=s.stateNode;s.memoizedState!==null?N._visibility&2?Rl(i,s,p,x,n):Cn(i,s):(N._visibility|=2,Rl(i,s,p,x,n)),n&&D&2048&&dc(s.alternate,s);break;case 24:Rl(i,s,p,x,n),n&&D&2048&&mc(s.alternate,s);break;default:Rl(i,s,p,x,n)}t=t.sibling}}function Cn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Cn(a,l),n&2048&&dc(l.alternate,l);break;case 24:Cn(a,l),n&2048&&mc(l.alternate,l);break;default:Cn(a,l)}t=t.sibling}}var Rn=8192;function Ol(e){if(e.subtreeFlags&Rn)for(e=e.child;e!==null;)yd(e),e=e.sibling}function yd(e){switch(e.tag){case 26:Ol(e),e.flags&Rn&&e.memoizedState!==null&&Kv(Ct,e.memoizedState,e.memoizedProps);break;case 5:Ol(e);break;case 3:case 4:var t=Ct;Ct=uo(e.stateNode.containerInfo),Ol(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Rn,Rn=16777216,Ol(e),Rn=t):Ol(e));break;default:Ol(e)}}function bd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function On(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Sd(l,e)}bd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xd(e),e=e.sibling}function xd(e){switch(e.tag){case 0:case 11:case 15:On(e),e.flags&2048&&ya(9,e,e.return);break;case 3:On(e);break;case 12:On(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wi(e)):On(e);break;default:On(e)}}function Wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Sd(l,e)}bd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),Wi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Wi(t));break;default:Wi(t)}e=e.sibling}}function Sd(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:mn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qe=l;else e:for(a=e;Qe!==null;){l=Qe;var n=l.sibling,i=l.return;if(dd(l),l===a){Qe=null;break e}if(n!==null){n.return=i,Qe=n;break e}Qe=i}}}var uv={getCacheForType:function(e){var t=Fe(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},sv=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Ce=null,me=null,ve=0,we=0,mt=null,Sa=!1,zl=!1,pc=!1,ta=0,Le=0,Ea=0,Wa=0,hc=0,jt=0,_l=0,zn=null,it=null,vc=!1,gc=0,Fi=1/0,Ii=null,wa=null,Je=0,Ta=null,Nl=null,Bl=0,yc=0,bc=null,Ed=null,_n=0,xc=null;function pt(){if((Ee&2)!==0&&ve!==0)return ve&-ve;if(z.T!==null){var e=El;return e!==0?e:Mc()}return Hu()}function wd(){jt===0&&(jt=(ve&536870912)===0||xe?_u():536870912);var e=Tt.current;return e!==null&&(e.flags|=32),jt}function ht(e,t,a){(e===Ce&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Ll(e,0),ja(e,ve,jt,!1)),$l(e,a),((Ee&2)===0||e!==Ce)&&(e===Ce&&((Ee&2)===0&&(Wa|=a),Le===4&&ja(e,ve,jt,!1)),qt(e))}function Td(e,t,a){if((Ee&6)!==0)throw Error(u(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Pl(e,t),n=l?mv(e,t):wc(e,t,!0),i=l;do{if(n===0){zl&&!l&&ja(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!fv(a)){n=wc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var p=e;n=zn;var x=p.current.memoizedState.isDehydrated;if(x&&(Ll(p,s).flags|=256),s=wc(p,s,!1),s!==2){if(pc&&!x){p.errorRecoveryDisabledLanes|=i,Wa|=i,n=4;break e}i=it,it=n,i!==null&&(it===null?it=i:it.push.apply(it,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){Ll(e,0),ja(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ja(l,t,jt,!Sa);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=gc+300-Bt(),10<n)){if(ja(l,t,jt,!Sa),si(l,0,!0)!==0)break e;l.timeoutHandle=Id(jd.bind(null,l,a,it,Ii,vc,t,jt,Wa,_l,Sa,i,2,-0,0),n);break e}jd(l,a,it,Ii,vc,t,jt,Wa,_l,Sa,i,0,-0,0)}}break}while(!0);qt(e)}function jd(e,t,a,l,n,i,s,p,x,D,N,H,C,O){if(e.timeoutHandle=-1,H=t.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(qn={stylesheets:null,count:0,unsuspend:Zv},yd(t),H=Jv(),H!==null)){e.cancelPendingCommit=H(zd.bind(null,e,t,i,a,l,n,s,p,x,N,1,C,O)),ja(e,i,s,!D);return}zd(e,t,i,a,l,n,s,p,x)}function fv(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch(s){return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ja(e,t,a,l){t&=~hc,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ct(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&Bu(e,a,t)}function eo(){return(Ee&6)===0?(Nn(0),!1):!0}function Sc(){if(me!==null){if(we===0)var e=me.return;else e=me,Kt=Qa=null,kr(e),Dl=null,Tn=0,e=me;for(;e!==null;)nd(e.alternate,e),e=e.return;me=null}}function Ll(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sc(),Ce=e,me=a=Xt(e.current,null),ve=t,we=0,mt=null,Sa=!1,zl=Pl(e,t),pc=!1,_l=jt=hc=Wa=Ea=Le=0,it=zn=null,vc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ct(l),i=1<<n;t|=e[n],l&=~i}return ta=t,Ei(),a}function Ad(e,t){ue=null,z.H=Gi,t===hn||t===Oi?(t=Ys(),we=3):t===Us?(t=Ys(),we=4):we=t===Xf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,me===null&&(Le=1,Zi(e,xt(t,e.current)))}function Md(){var e=z.H;return z.H=Gi,e===null?Gi:e}function Dd(){var e=z.A;return z.A=uv,e}function Ec(){Le=4,Sa||(ve&4194048)!==ve&&Tt.current!==null||(zl=!0),(Ea&134217727)===0&&(Wa&134217727)===0||Ce===null||ja(Ce,ve,jt,!1)}function wc(e,t,a){var l=Ee;Ee|=2;var n=Md(),i=Dd();(Ce!==e||ve!==t)&&(Ii=null,Ll(e,t)),t=!1;var s=Le;e:do try{if(we!==0&&me!==null){var p=me,x=mt;switch(we){case 8:Sc(),s=6;break e;case 3:case 2:case 9:case 6:Tt.current===null&&(t=!0);var D=we;if(we=0,mt=null,Hl(e,p,x,D),a&&zl){s=0;break e}break;default:D=we,we=0,mt=null,Hl(e,p,x,D)}}dv(),s=Le;break}catch(N){Ad(e,N)}while(!0);return t&&e.shellSuspendCounter++,Kt=Qa=null,Ee=l,z.H=n,z.A=i,me===null&&(Ce=null,ve=0,Ei()),s}function dv(){for(;me!==null;)Cd(me)}function mv(e,t){var a=Ee;Ee|=2;var l=Md(),n=Dd();Ce!==e||ve!==t?(Ii=null,Fi=Bt()+500,Ll(e,t)):zl=Pl(e,t);e:do try{if(we!==0&&me!==null){t=me;var i=mt;t:switch(we){case 1:we=0,mt=null,Hl(e,t,i,1);break;case 2:case 9:if(qs(i)){we=0,mt=null,Rd(t);break}t=function(){we!==2&&we!==9||Ce!==e||(we=7),qt(e)},i.then(t,t);break e;case 3:we=7;break e;case 4:we=5;break e;case 7:qs(i)?(we=0,mt=null,Rd(t)):(we=0,mt=null,Hl(e,t,i,7));break;case 5:var s=null;switch(me.tag){case 26:s=me.memoizedState;case 5:case 27:var p=me;if(!s||fm(s)){we=0,mt=null;var x=p.sibling;if(x!==null)me=x;else{var D=p.return;D!==null?(me=D,to(D)):me=null}break t}}we=0,mt=null,Hl(e,t,i,5);break;case 6:we=0,mt=null,Hl(e,t,i,6);break;case 8:Sc(),Le=6;break e;default:throw Error(u(462))}}pv();break}catch(N){Ad(e,N)}while(!0);return Kt=Qa=null,z.H=l,z.A=n,Ee=a,me!==null?0:(Ce=null,ve=0,Ei(),Le)}function pv(){for(;me!==null&&!Lp();)Cd(me)}function Cd(e){var t=ad(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?to(e):me=t}function Rd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=$f(a,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=$f(a,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:kr(t);default:nd(a,t),t=me=Rs(t,ta),t=ad(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?to(e):me=t}function Hl(e,t,a,l){Kt=Qa=null,kr(t),Dl=null,Tn=0;var n=t.return;try{if(lv(e,n,t,a,ve)){Le=1,Zi(e,xt(a,e.current)),me=null;return}}catch(i){if(n!==null)throw me=n,i;Le=1,Zi(e,xt(a,e.current)),me=null;return}t.flags&32768?(xe||l===1?e=!0:zl||(ve&536870912)!==0?e=!1:(Sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Od(t,e)):to(t)}function to(e){var t=e;do{if((t.flags&32768)!==0){Od(t,Sa);return}e=t.return;var a=iv(t.alternate,t,ta);if(a!==null){me=a;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Le===0&&(Le=5)}function Od(e,t){do{var a=ov(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Le=6,me=null}function zd(e,t,a,l,n,i,s,p,x){e.cancelPendingCommit=null;do ao();while(Je!==0);if((Ee&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=mr,Zp(e,a,i,s,p,x),e===Ce&&(me=Ce=null,ve=0),Nl=t,Ta=e,Bl=a,yc=i,bc=n,Ed=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yv(ri,function(){return Hd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,n=G.p,G.p=2,s=Ee,Ee|=4;try{rv(e,t,a)}finally{Ee=s,G.p=n,z.T=l}}Je=1,_d(),Nd(),Bd()}}function _d(){if(Je===1){Je=0;var e=Ta,t=Nl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=G.p;G.p=2;var n=Ee;Ee|=4;try{hd(t,e);var i=Bc,s=xs(e.containerInfo),p=i.focusedElem,x=i.selectionRange;if(s!==p&&p&&p.ownerDocument&&bs(p.ownerDocument.documentElement,p)){if(x!==null&&cr(p)){var D=x.start,N=x.end;if(N===void 0&&(N=D),"selectionStart"in p)p.selectionStart=D,p.selectionEnd=Math.min(N,p.value.length);else{var H=p.ownerDocument||document,C=H&&H.defaultView||window;if(C.getSelection){var O=C.getSelection(),le=p.textContent.length,ee=Math.min(x.start,le),Me=x.end===void 0?ee:Math.min(x.end,le);!O.extend&&ee>Me&&(s=Me,Me=ee,ee=s);var j=ys(p,ee),w=ys(p,Me);if(j&&w&&(O.rangeCount!==1||O.anchorNode!==j.node||O.anchorOffset!==j.offset||O.focusNode!==w.node||O.focusOffset!==w.offset)){var M=H.createRange();M.setStart(j.node,j.offset),O.removeAllRanges(),ee>Me?(O.addRange(M),O.extend(w.node,w.offset)):(M.setEnd(w.node,w.offset),O.addRange(M))}}}}for(H=[],O=p;O=O.parentNode;)O.nodeType===1&&H.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<H.length;p++){var B=H[p];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}ho=!!Nc,Bc=Nc=null}finally{Ee=n,G.p=l,z.T=a}}e.current=t,Je=2}}function Nd(){if(Je===2){Je=0;var e=Ta,t=Nl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=G.p;G.p=2;var n=Ee;Ee|=4;try{fd(e,t.alternate,t)}finally{Ee=n,G.p=l,z.T=a}}Je=3}}function Bd(){if(Je===4||Je===3){Je=0,Hp();var e=Ta,t=Nl,a=Bl,l=Ed;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,Nl=Ta=null,Ld(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(wa=null),Go(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch(x){}if(l!==null){t=z.T,n=G.p,G.p=2,z.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var p=l[s];i(p.value,{componentStack:p.stack})}}finally{z.T=t,G.p=n}}(Bl&3)!==0&&ao(),qt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===xc?_n++:(_n=0,xc=e):_n=0,Nn(0)}}function Ld(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mn(t)))}function ao(e){return _d(),Nd(),Bd(),Hd()}function Hd(){if(Je!==5)return!1;var e=Ta,t=yc;yc=0;var a=Go(Bl),l=z.T,n=G.p;try{G.p=32>a?32:a,z.T=null,a=bc,bc=null;var i=Ta,s=Bl;if(Je=0,Nl=Ta=null,Bl=0,(Ee&6)!==0)throw Error(u(331));var p=Ee;if(Ee|=4,xd(i.current),gd(i,i.current,s,a),Ee=p,Nn(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Jl,i)}catch(x){}return!0}finally{G.p=n,z.T=l,Ld(e,t)}}function kd(e,t,a){t=xt(a,t),t=Fr(e.stateNode,t,2),e=pa(e,t,2),e!==null&&($l(e,2),qt(e))}function De(e,t,a){if(e.tag===3)kd(e,e,a);else for(;t!==null;){if(t.tag===3){kd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=xt(a,e),a=Yf(2),l=pa(t,a,2),l!==null&&(Vf(a,l,t,e),$l(l,2),qt(l));break}}t=t.return}}function Tc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new sv;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(pc=!0,n.add(a),e=hv.bind(null,e,t,a),t.then(e,e))}function hv(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(ve&a)===a&&(Le===4||Le===3&&(ve&62914560)===ve&&300>Bt()-gc?(Ee&2)===0&&Ll(e,0):hc|=a,_l===ve&&(_l=0)),qt(e)}function Ud(e,t){t===0&&(t=Nu()),e=yl(e,t),e!==null&&($l(e,t),qt(e))}function vv(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ud(e,a)}function gv(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Ud(e,a)}function yv(e,t){return Ho(e,t)}var lo=null,kl=null,jc=!1,no=!1,Ac=!1,Fa=0;function qt(e){e!==kl&&e.next===null&&(kl===null?lo=kl=e:kl=kl.next=e),no=!0,jc||(jc=!0,xv())}function Nn(e,t){if(!Ac&&no){Ac=!0;do for(var a=!1,l=lo;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,p=l.pingedLanes;i=(1<<31-ct(42|e)+1)-1,i&=n&~(s&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Vd(l,i))}else i=ve,i=si(l,l===Ce?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Pl(l,i)||(a=!0,Vd(l,i));l=l.next}while(a);Ac=!1}}function bv(){qd()}function qd(){no=jc=!1;var e=0;Fa!==0&&(Dv()&&(e=Fa),Fa=0);for(var t=Bt(),a=null,l=lo;l!==null;){var n=l.next,i=Gd(l,t);i===0?(l.next=null,a===null?lo=n:a.next=n,n===null&&(kl=a)):(a=l,(e!==0||(i&3)!==0)&&(no=!0)),l=n}Nn(e)}function Gd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-ct(i),p=1<<s,x=n[s];x===-1?((p&a)===0||(p&l)!==0)&&(n[s]=Qp(p,t)):x<=t&&(e.expiredLanes|=p),i&=~p}if(t=Ce,a=ve,a=si(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(we===2||we===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ko(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ko(l),Go(a)){case 2:case 8:a=Ou;break;case 32:a=ri;break;case 268435456:a=zu;break;default:a=ri}return l=Yd.bind(null,e),a=Ho(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ko(l),e.callbackPriority=2,e.callbackNode=null,2}function Yd(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ao()&&e.callbackNode!==a)return null;var l=ve;return l=si(e,e===Ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Td(e,l,t),Gd(e,Bt()),e.callbackNode!=null&&e.callbackNode===a?Yd.bind(null,e):null)}function Vd(e,t){if(ao())return null;Td(e,t,!0)}function xv(){Rv(function(){(Ee&6)!==0?Ho(Ru,bv):qd()})}function Mc(){return Fa===0&&(Fa=_u()),Fa}function Xd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hi(""+e)}function Qd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Sv(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Xd((n[tt]||null).action),s=l.submitter;s&&(t=(t=s[tt]||null)?Xd(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var p=new bi("action","action",null,l,n);e.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fa!==0){var x=s?Qd(n,s):new FormData(n);Kr(a,{pending:!0,data:x,method:n.method,action:i},null,x)}}else typeof i=="function"&&(p.preventDefault(),x=s?Qd(n,s):new FormData(n),Kr(a,{pending:!0,data:x,method:n.method,action:i},i,x))},currentTarget:n}]})}}for(var Dc=0;Dc<dr.length;Dc++){var Cc=dr[Dc],Ev=Cc.toLowerCase(),wv=Cc[0].toUpperCase()+Cc.slice(1);Dt(Ev,"on"+wv)}Dt(ws,"onAnimationEnd"),Dt(Ts,"onAnimationIteration"),Dt(js,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(qh,"onTransitionRun"),Dt(Gh,"onTransitionStart"),Dt(Yh,"onTransitionCancel"),Dt(As,"onTransitionEnd"),cl("onMouseEnter",["mouseout","mouseover"]),cl("onMouseLeave",["mouseout","mouseover"]),cl("onPointerEnter",["pointerout","pointerover"]),cl("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bn));function Zd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var s=l.length-1;0<=s;s--){var p=l[s],x=p.instance,D=p.currentTarget;if(p=p.listener,x!==i&&n.isPropagationStopped())break e;i=p,n.currentTarget=D;try{i(n)}catch(N){Qi(N)}n.currentTarget=null,i=x}else for(s=0;s<l.length;s++){if(p=l[s],x=p.instance,D=p.currentTarget,p=p.listener,x!==i&&n.isPropagationStopped())break e;i=p,n.currentTarget=D;try{i(n)}catch(N){Qi(N)}n.currentTarget=null,i=x}}}}function pe(e,t){var a=t[Yo];a===void 0&&(a=t[Yo]=new Set);var l=e+"__bubble";a.has(l)||(Kd(t,e,2,!1),a.add(l))}function Rc(e,t,a){var l=0;t&&(l|=4),Kd(a,e,l,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function Oc(e){if(!e[io]){e[io]=!0,Uu.forEach(function(a){a!=="selectionchange"&&(Tv.has(a)||Rc(a,!1,e),Rc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,Rc("selectionchange",!1,t))}}function Kd(e,t,a,l){switch(gm(t)){case 2:var n=Wv;break;case 8:n=Fv;break;default:n=Qc}a=n.bind(null,t,a,e),n=void 0,!Io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function zc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var p=l.stateNode.containerInfo;if(p===n)break;if(s===4)for(s=l.return;s!==null;){var x=s.tag;if((x===3||x===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;p!==null;){if(s=il(p),s===null)return;if(x=s.tag,x===5||x===6||x===26||x===27){l=i=s;continue e}p=p.parentNode}}l=l.return}Iu(function(){var D=i,N=Wo(a),H=[];e:{var C=Ms.get(e);if(C!==void 0){var O=bi,le=e;switch(e){case"keypress":if(gi(a)===0)break e;case"keydown":case"keyup":O=yh;break;case"focusin":le="focus",O=lr;break;case"focusout":le="blur",O=lr;break;case"beforeblur":case"afterblur":O=lr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=as;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Sh;break;case ws:case Ts:case js:O=uh;break;case As:O=wh;break;case"scroll":case"scrollend":O=nh;break;case"wheel":O=jh;break;case"copy":case"cut":case"paste":O=fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=ns;break;case"toggle":case"beforetoggle":O=Mh}var ee=(t&4)!==0,Me=!ee&&(e==="scroll"||e==="scrollend"),j=ee?C!==null?C+"Capture":null:C;ee=[];for(var w=D,M;w!==null;){var B=w;if(M=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||M===null||j===null||(B=Il(w,j),B!=null&&ee.push(Ln(w,B,M))),Me)break;w=w.return}0<ee.length&&(C=new O(C,le,null,a,N),H.push({event:C,listeners:ee}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",C&&a!==$o&&(le=a.relatedTarget||a.fromElement)&&(il(le)||le[nl]))break e;if((O||C)&&(C=N.window===N?N:(C=N.ownerDocument)?C.defaultView||C.parentWindow:window,O?(le=a.relatedTarget||a.toElement,O=D,le=le?il(le):null,le!==null&&(Me=m(le),ee=le.tag,le!==Me||ee!==5&&ee!==27&&ee!==6)&&(le=null)):(O=null,le=D),O!==le)){if(ee=as,B="onMouseLeave",j="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ee=ns,B="onPointerLeave",j="onPointerEnter",w="pointer"),Me=O==null?C:Fl(O),M=le==null?C:Fl(le),C=new ee(B,w+"leave",O,a,N),C.target=Me,C.relatedTarget=M,B=null,il(N)===D&&(ee=new ee(j,w+"enter",le,a,N),ee.target=M,ee.relatedTarget=Me,B=ee),Me=B,O&&le)t:{for(ee=O,j=le,w=0,M=ee;M;M=Ul(M))w++;for(M=0,B=j;B;B=Ul(B))M++;for(;0<w-M;)ee=Ul(ee),w--;for(;0<M-w;)j=Ul(j),M--;for(;w--;){if(ee===j||j!==null&&ee===j.alternate)break t;ee=Ul(ee),j=Ul(j)}ee=null}else ee=null;O!==null&&Jd(H,C,O,ee,!1),le!==null&&Me!==null&&Jd(H,Me,le,ee,!0)}}e:{if(C=D?Fl(D):window,O=C.nodeName&&C.nodeName.toLowerCase(),O==="select"||O==="input"&&C.type==="file")var K=ds;else if(ss(C))if(ms)K=Hh;else{K=Bh;var se=Nh}else O=C.nodeName,!O||O.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?D&&Po(D.elementType)&&(K=ds):K=Lh;if(K&&(K=K(e,D))){fs(H,K,a,N);break e}se&&se(e,C,D),e==="focusout"&&D&&C.type==="number"&&D.memoizedProps.value!=null&&Jo(C,"number",C.value)}switch(se=D?Fl(D):window,e){case"focusin":(ss(se)||se.contentEditable==="true")&&(hl=se,ur=D,cn=null);break;case"focusout":cn=ur=hl=null;break;case"mousedown":sr=!0;break;case"contextmenu":case"mouseup":case"dragend":sr=!1,Ss(H,a,N);break;case"selectionchange":if(Uh)break;case"keydown":case"keyup":Ss(H,a,N)}var W;if(ir)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else pl?cs(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(is&&a.locale!=="ko"&&(pl||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&pl&&(W=es()):(sa=N,er="value"in sa?sa.value:sa.textContent,pl=!0)),se=oo(D,ae),0<se.length&&(ae=new ls(ae,e,null,a,N),H.push({event:ae,listeners:se}),W?ae.data=W:(W=us(a),W!==null&&(ae.data=W)))),(W=Ch?Rh(e,a):Oh(e,a))&&(ae=oo(D,"onBeforeInput"),0<ae.length&&(se=new ls("onBeforeInput","beforeinput",null,a,N),H.push({event:se,listeners:ae}),se.data=W)),Sv(H,e,D,a,N)}Zd(H,t)})}function Ln(e,t,a){return{instance:e,listener:t,currentTarget:a}}function oo(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Il(e,a),n!=null&&l.unshift(Ln(e,n,i)),n=Il(e,t),n!=null&&l.push(Ln(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Ul(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jd(e,t,a,l,n){for(var i=t._reactName,s=[];a!==null&&a!==l;){var p=a,x=p.alternate,D=p.stateNode;if(p=p.tag,x!==null&&x===l)break;p!==5&&p!==26&&p!==27||D===null||(x=D,n?(D=Il(a,i),D!=null&&s.unshift(Ln(a,D,x))):n||(D=Il(a,i),D!=null&&s.push(Ln(a,D,x)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var jv=/\r\n?/g,Av=/\u0000|\uFFFD/g;function Pd(e){return(typeof e=="string"?e:""+e).replace(jv,`
`).replace(Av,"")}function $d(e,t){return t=Pd(t),Pd(e)===t}function ro(){}function Ae(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||fl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&fl(e,""+l);break;case"className":di(e,"class",l);break;case"tabIndex":di(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":di(e,a,l);break;case"style":Wu(e,l,i);break;case"data":if(t!=="object"){di(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",n.name,n,null),Ae(e,t,"formEncType",n.formEncType,n,null),Ae(e,t,"formMethod",n.formMethod,n,null),Ae(e,t,"formTarget",n.formTarget,n,null)):(Ae(e,t,"encType",n.encType,n,null),Ae(e,t,"method",n.method,n,null),Ae(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ro);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=hi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":pe("beforetoggle",e),pe("toggle",e),fi(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ah.get(a)||a,fi(e,a,l))}}function _c(e,t,a,l,n,i){switch(a){case"style":Wu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?fl(e,l):(typeof l=="number"||typeof l=="bigint")&&fl(e,""+l);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ro);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[tt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):fi(e,a,l)}}}function Pe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,i,s,a,null)}}n&&Ae(e,t,"srcSet",a.srcSet,a,null),l&&Ae(e,t,"src",a.src,a,null);return;case"input":pe("invalid",e);var p=i=s=n=null,x=null,D=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":n=N;break;case"type":s=N;break;case"checked":x=N;break;case"defaultChecked":D=N;break;case"value":i=N;break;case"defaultValue":p=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:Ae(e,t,l,N,a,null)}}Ku(e,i,p,x,D,s,n,!1),mi(e);return;case"select":pe("invalid",e),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(p=a[n],p!=null))switch(n){case"value":i=p;break;case"defaultValue":s=p;break;case"multiple":l=p;default:Ae(e,t,n,p,a,null)}t=i,a=s,e.multiple=!!l,t!=null?sl(e,!!l,t,!1):a!=null&&sl(e,!!l,a,!0);return;case"textarea":pe("invalid",e),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(p=a[s],p!=null))switch(s){case"value":l=p;break;case"defaultValue":n=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:Ae(e,t,s,p,a,null)}Pu(e,l,n,i),mi(e);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ae(e,t,x,l,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(l=0;l<Bn.length;l++)pe(Bn[l],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(l=a[D],l!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,D,l,a,null)}return;default:if(Po(t)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&_c(e,t,N,l,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null&&Ae(e,t,p,l,a,null))}function Mv(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,p=null,x=null,D=null,N=null;for(O in a){var H=a[O];if(a.hasOwnProperty(O)&&H!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":x=H;default:l.hasOwnProperty(O)||Ae(e,t,O,null,l,H)}}for(var C in l){var O=l[C];if(H=a[C],l.hasOwnProperty(C)&&(O!=null||H!=null))switch(C){case"type":i=O;break;case"name":n=O;break;case"checked":D=O;break;case"defaultChecked":N=O;break;case"value":s=O;break;case"defaultValue":p=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:O!==H&&Ae(e,t,C,O,l,H)}}Ko(e,s,p,x,D,N,i,n);return;case"select":O=s=p=C=null;for(i in a)if(x=a[i],a.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":O=x;default:l.hasOwnProperty(i)||Ae(e,t,i,null,l,x)}for(n in l)if(i=l[n],x=a[n],l.hasOwnProperty(n)&&(i!=null||x!=null))switch(n){case"value":C=i;break;case"defaultValue":p=i;break;case"multiple":s=i;default:i!==x&&Ae(e,t,n,i,l,x)}t=p,a=s,l=O,C!=null?sl(e,!!a,C,!1):!!l!=!!a&&(t!=null?sl(e,!!a,t,!0):sl(e,!!a,a?[]:"",!1));return;case"textarea":O=C=null;for(p in a)if(n=a[p],a.hasOwnProperty(p)&&n!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ae(e,t,p,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":C=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&Ae(e,t,s,n,l,i)}Ju(e,C,O);return;case"option":for(var le in a)if(C=a[le],a.hasOwnProperty(le)&&C!=null&&!l.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:Ae(e,t,le,null,l,C)}for(x in l)if(C=l[x],O=a[x],l.hasOwnProperty(x)&&C!==O&&(C!=null||O!=null))switch(x){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ae(e,t,x,C,l,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)C=a[ee],a.hasOwnProperty(ee)&&C!=null&&!l.hasOwnProperty(ee)&&Ae(e,t,ee,null,l,C);for(D in l)if(C=l[D],O=a[D],l.hasOwnProperty(D)&&C!==O&&(C!=null||O!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:Ae(e,t,D,C,l,O)}return;default:if(Po(t)){for(var Me in a)C=a[Me],a.hasOwnProperty(Me)&&C!==void 0&&!l.hasOwnProperty(Me)&&_c(e,t,Me,void 0,l,C);for(N in l)C=l[N],O=a[N],!l.hasOwnProperty(N)||C===O||C===void 0&&O===void 0||_c(e,t,N,C,l,O);return}}for(var j in a)C=a[j],a.hasOwnProperty(j)&&C!=null&&!l.hasOwnProperty(j)&&Ae(e,t,j,null,l,C);for(H in l)C=l[H],O=a[H],!l.hasOwnProperty(H)||C===O||C==null&&O==null||Ae(e,t,H,C,l,O)}var Nc=null,Bc=null;function co(e){return e.nodeType===9?e:e.ownerDocument}function Wd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function Dv(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var Id=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,Rv=typeof queueMicrotask=="function"?queueMicrotask:typeof em!="undefined"?function(e){return em.resolve(null).then(e).catch(Ov)}:Id;function Ov(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function tm(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var s=e.ownerDocument;if(a&1&&Hn(s.documentElement),a&2&&Hn(s.body),a&4)for(a=s.head,Hn(a),s=a.firstChild;s;){var p=s.nextSibling,x=s.nodeName;s[Wl]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=p}}if(n===0){e.removeChild(i),Qn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);Qn(t)}function kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kc(a),Vo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zv(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function _v(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Rt(e.nextSibling),e===null))return null;return e}function Uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Nv(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var qc=null;function am(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function lm(e,t,a){switch(t=co(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Hn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vo(e)}var At=new Map,nm=new Set;function uo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=G.d;G.d={f:Bv,r:Lv,D:Hv,C:kv,L:Uv,m:qv,X:Yv,S:Gv,M:Vv};function Bv(){var e=aa.f(),t=eo();return e||t}function Lv(e){var t=ol(e);t!==null&&t.tag===5&&t.type==="form"?Tf(t):aa.r(e)}var ql=typeof document=="undefined"?null:document;function im(e,t,a){var l=ql;if(l&&typeof t=="string"&&t){var n=bt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),nm.has(n)||(nm.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Pe(t,"link",e),Ve(t),l.head.appendChild(t)))}}function Hv(e){aa.D(e),im("dns-prefetch",e,null)}function kv(e,t){aa.C(e,t),im("preconnect",e,t)}function Uv(e,t,a){aa.L(e,t,a);var l=ql;if(l&&e&&t){var n='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+bt(a.imageSizes)+'"]')):n+='[href="'+bt(e)+'"]';var i=n;switch(t){case"style":i=Gl(e);break;case"script":i=Yl(e)}At.has(i)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),At.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(kn(i))||t==="script"&&l.querySelector(Un(i))||(t=l.createElement("link"),Pe(t,"link",e),Ve(t),l.head.appendChild(t)))}}function qv(e,t){aa.m(e,t);var a=ql;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Yl(e)}if(!At.has(i)&&(e=E({rel:"modulepreload",href:e},t),At.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Un(i)))return}l=a.createElement("link"),Pe(l,"link",e),Ve(l),a.head.appendChild(l)}}}function Gv(e,t,a){aa.S(e,t,a);var l=ql;if(l&&e){var n=rl(l).hoistableStyles,i=Gl(e);t=t||"default";var s=n.get(i);if(!s){var p={loading:0,preload:null};if(s=l.querySelector(kn(i)))p.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=At.get(i))&&Gc(e,a);var x=s=l.createElement("link");Ve(x),Pe(x,"link",e),x._p=new Promise(function(D,N){x.onload=D,x.onerror=N}),x.addEventListener("load",function(){p.loading|=1}),x.addEventListener("error",function(){p.loading|=2}),p.loading|=4,so(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:p},n.set(i,s)}}}function Yv(e,t){aa.X(e,t);var a=ql;if(a&&e){var l=rl(a).hoistableScripts,n=Yl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=E({src:e,async:!0},t),(t=At.get(n))&&Yc(e,t),i=a.createElement("script"),Ve(i),Pe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Vv(e,t){aa.M(e,t);var a=ql;if(a&&e){var l=rl(a).hoistableScripts,n=Yl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=At.get(n))&&Yc(e,t),i=a.createElement("script"),Ve(i),Pe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function om(e,t,a,l){var n=(n=$.current)?uo(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Gl(a.href),a=rl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gl(a.href);var i=rl(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(kn(e)))&&!i._p&&(s.instance=i,s.state.loading=5),At.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},At.set(e,a),i||Xv(n,e,a,s.state))),t&&l===null)throw Error(u(528,""));return s}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yl(a),a=rl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Gl(e){return'href="'+bt(e)+'"'}function kn(e){return'link[rel="stylesheet"]['+e+"]"}function rm(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Xv(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Pe(t,"link",a),Ve(t),e.head.appendChild(t))}function Yl(e){return'[src="'+bt(e)+'"]'}function Un(e){return"script[async]"+e}function cm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,Ve(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ve(l),Pe(l,"style",n),so(l,a.precedence,e),t.instance=l;case"stylesheet":n=Gl(a.href);var i=e.querySelector(kn(n));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;l=rm(a),(n=At.get(n))&&Gc(l,n),i=(e.ownerDocument||e).createElement("link"),Ve(i);var s=i;return s._p=new Promise(function(p,x){s.onload=p,s.onerror=x}),Pe(i,"link",l),t.state.loading|=4,so(i,a.precedence,e),t.instance=i;case"script":return i=Yl(a.src),(n=e.querySelector(Un(i)))?(t.instance=n,Ve(n),n):(l=a,(n=At.get(i))&&(l=E({},a),Yc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ve(n),Pe(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,so(l,a.precedence,e));return t.instance}function so(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var p=l[s];if(p.dataset.precedence===t)i=p;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Gc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fo=null;function um(e,t,a){if(fo===null){var l=new Map,n=fo=new Map;n.set(a,l)}else n=fo,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Wl]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var p=l.get(s);p?p.push(i):l.set(s,[i])}}return l}function sm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Qv(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function fm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var qn=null;function Zv(){}function Kv(e,t,a){if(qn===null)throw Error(u(475));var l=qn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Gl(a.href),i=e.querySelector(kn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=mo.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Ve(i);return}i=e.ownerDocument||e,a=rm(a),(n=At.get(n))&&Gc(a,n),i=i.createElement("link"),Ve(i);var s=i;s._p=new Promise(function(p,x){s.onload=p,s.onerror=x}),Pe(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=mo.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Jv(){if(qn===null)throw Error(u(475));var e=qn;return e.stylesheets&&e.count===0&&Vc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function mo(){if(this.count--,this.count===0){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var po=null;function Vc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,po=new Map,t.forEach(Pv,e),po=null,mo.call(e))}function Pv(e,t){if(!(t.state.loading&4)){var a=po.get(e);if(a)var l=a.get(null);else{a=new Map,po.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=mo.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Gn={$$typeof:V,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function $v(e,t,a,l,n,i,s,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.hiddenUpdates=Uo(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function dm(e,t,a,l,n,i,s,p,x,D,N,H){return e=new $v(e,t,a,s,p,x,D,H),t=1,i===!0&&(t|=24),i=st(3,null,null,t),e.current=i,i.stateNode=e,t=Tr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Dr(i),e}function mm(e){return e?(e=bl,e):bl}function pm(e,t,a,l,n,i){n=mm(n),l.context===null?l.context=n:l.pendingContext=n,l=ma(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=pa(e,l,t),a!==null&&(ht(a,e,t),gn(a,e,t))}function hm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Xc(e,t){hm(e,t),(e=e.alternate)&&hm(e,t)}function vm(e){if(e.tag===13){var t=yl(e,67108864);t!==null&&ht(t,e,67108864),Xc(e,67108864)}}var ho=!0;function Wv(e,t,a,l){var n=z.T;z.T=null;var i=G.p;try{G.p=2,Qc(e,t,a,l)}finally{G.p=i,z.T=n}}function Fv(e,t,a,l){var n=z.T;z.T=null;var i=G.p;try{G.p=8,Qc(e,t,a,l)}finally{G.p=i,z.T=n}}function Qc(e,t,a,l){if(ho){var n=Zc(l);if(n===null)zc(e,t,l,vo,a),ym(e,l);else if(eg(n,e,t,a,l))l.stopPropagation();else if(ym(e,l),t&4&&-1<Iv.indexOf(e)){for(;n!==null;){var i=ol(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ba(i.pendingLanes);if(s!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;s;){var x=1<<31-ct(s);p.entanglements[1]|=x,s&=~x}qt(i),(Ee&6)===0&&(Fi=Bt()+500,Nn(0))}}break;case 13:p=yl(i,2),p!==null&&ht(p,i,2),eo(),Xc(i,2)}if(i=Zc(l),i===null&&zc(e,t,l,vo,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else zc(e,t,l,null,a)}}function Zc(e){return e=Wo(e),Kc(e)}var vo=null;function Kc(e){if(vo=null,e=il(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return vo=e,null}function gm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kp()){case Ru:return 2;case Ou:return 8;case ri:case Up:return 32;case zu:return 268435456;default:return 32}default:return 32}}var Jc=!1,Ma=null,Da=null,Ca=null,Yn=new Map,Vn=new Map,Ra=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ym(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Xn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ol(t),t!==null&&vm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function eg(e,t,a,l,n){switch(t){case"focusin":return Ma=Xn(Ma,e,t,a,l,n),!0;case"dragenter":return Da=Xn(Da,e,t,a,l,n),!0;case"mouseover":return Ca=Xn(Ca,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Yn.set(i,Xn(Yn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Vn.set(i,Xn(Vn.get(i)||null,e,t,a,l,n)),!0}return!1}function bm(e){var t=il(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,Kp(e.priority,function(){if(a.tag===13){var l=pt();l=qo(l);var n=yl(a,l);n!==null&&ht(n,a,l),Xc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Zc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);$o=l,a.target.dispatchEvent(l),$o=null}else return t=ol(a),t!==null&&vm(t),e.blockedOn=a,!1;t.shift()}return!0}function xm(e,t,a){go(e)&&a.delete(t)}function tg(){Jc=!1,Ma!==null&&go(Ma)&&(Ma=null),Da!==null&&go(Da)&&(Da=null),Ca!==null&&go(Ca)&&(Ca=null),Yn.forEach(xm),Vn.forEach(xm)}function yo(e,t){e.blockedOn===t&&(e.blockedOn=null,Jc||(Jc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,tg)))}var bo=null;function Sm(e){bo!==e&&(bo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bo===e&&(bo=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Kc(l||a)===null)continue;break}var i=ol(a);i!==null&&(e.splice(t,3),t-=3,Kr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Qn(e){function t(x){return yo(x,e)}Ma!==null&&yo(Ma,e),Da!==null&&yo(Da,e),Ca!==null&&yo(Ca,e),Yn.forEach(t),Vn.forEach(t);for(var a=0;a<Ra.length;a++){var l=Ra[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)bm(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[tt]||null;if(typeof i=="function")s||Sm(a);else if(s){var p=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[tt]||null)p=s.formAction;else if(Kc(n)!==null)continue}else p=s.action;typeof p=="function"?a[l+1]=p:(a.splice(l,3),l-=3),Sm(a)}}}function Pc(e){this._internalRoot=e}xo.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=pt();pm(a,l,e,t,null,null)},xo.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pm(e.current,2,null,e,null,null),eo(),t[nl]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ra.length&&t!==0&&t<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&bm(e)}};var Em=c.version;if(Em!=="19.1.0")throw Error(u(527,Em,"19.1.0"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var ag={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Jl=So.inject(ag),rt=So}catch(e){}}return Kn.createRoot=function(e,t){if(!f(e))throw Error(u(299));var a=!1,l="",n=kf,i=Uf,s=qf,p=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=dm(e,1,!1,null,null,a,l,n,i,s,p,null),e[nl]=t.current,Oc(e),new Pc(t)},Kn.hydrateRoot=function(e,t,a){if(!f(e))throw Error(u(299));var l=!1,n="",i=kf,s=Uf,p=qf,x=null,D=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks),a.formState!==void 0&&(D=a.formState)),t=dm(e,1,!0,t,a!=null?a:null,l,n,i,s,p,x,D),t.context=mm(null),a=t.current,l=pt(),l=qo(l),n=ma(l),n.callback=null,pa(a,n,l),a=l,t.current.lanes=a,$l(t,a),qt(t),e[nl]=t.current,Oc(e),new xo(t)},Kn.version="19.1.0",Kn}var Nm;function pg(){if(Nm)return Ic.exports;Nm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Ic.exports=mg(),Ic.exports}var hg=pg();const vg=al(hg);var Jn={},Bm;function gg(){if(Bm)return Jn;Bm=1,Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.parse=y,Jn.serialize=h;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,c=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,m=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function y(S,L){const _=new m,X=S.length;if(X<2)return _;const q=(L==null?void 0:L.decode)||E;let U=0;do{const J=S.indexOf("=",U);if(J===-1)break;const V=S.indexOf(";",U),I=V===-1?X:V;if(J>I){U=S.lastIndexOf(";",J-1)+1;continue}const Q=b(S,U,J),fe=v(S,J,Q),ge=S.slice(Q,fe);if(_[ge]===void 0){let de=b(S,J+1,I),ie=v(S,I,de);const re=q(S.slice(de,ie));_[ge]=re}U=I+1}while(U<X);return _}function b(S,L,_){do{const X=S.charCodeAt(L);if(X!==32&&X!==9)return L}while(++L<_);return _}function v(S,L,_){for(;L>_;){const X=S.charCodeAt(--L);if(X!==32&&X!==9)return L+1}return _}function h(S,L,_){const X=(_==null?void 0:_.encode)||encodeURIComponent;if(!o.test(S))throw new TypeError(`argument name is invalid: ${S}`);const q=X(L);if(!c.test(q))throw new TypeError(`argument val is invalid: ${L}`);let U=S+"="+q;if(!_)return U;if(_.maxAge!==void 0){if(!Number.isInteger(_.maxAge))throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);U+="; Max-Age="+_.maxAge}if(_.domain){if(!r.test(_.domain))throw new TypeError(`option domain is invalid: ${_.domain}`);U+="; Domain="+_.domain}if(_.path){if(!u.test(_.path))throw new TypeError(`option path is invalid: ${_.path}`);U+="; Path="+_.path}if(_.expires){if(!A(_.expires)||!Number.isFinite(_.expires.valueOf()))throw new TypeError(`option expires is invalid: ${_.expires}`);U+="; Expires="+_.expires.toUTCString()}if(_.httpOnly&&(U+="; HttpOnly"),_.secure&&(U+="; Secure"),_.partitioned&&(U+="; Partitioned"),_.priority)switch(typeof _.priority=="string"?_.priority.toLowerCase():void 0){case"low":U+="; Priority=Low";break;case"medium":U+="; Priority=Medium";break;case"high":U+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${_.priority}`)}if(_.sameSite)switch(typeof _.sameSite=="string"?_.sameSite.toLowerCase():_.sameSite){case!0:case"strict":U+="; SameSite=Strict";break;case"lax":U+="; SameSite=Lax";break;case"none":U+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${_.sameSite}`)}return U}function E(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch(L){return S}}function A(S){return f.call(S)==="[object Date]"}return Jn}gg();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lm="popstate";function yg(o={}){function c(f,m){let{pathname:y="/",search:b="",hash:v=""}=ll(f.location.hash.substring(1));return!y.startsWith("/")&&!y.startsWith(".")&&(y="/"+y),vu("",{pathname:y,search:b,hash:v},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function r(f,m){let y=f.document.querySelector("base"),b="";if(y&&y.getAttribute("href")){let v=f.location.href,h=v.indexOf("#");b=h===-1?v:v.slice(0,h)}return b+"#"+(typeof m=="string"?m:ai(m))}function u(f,m){_t(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return xg(c,r,u,o)}function Ne(o,c){if(o===!1||o===null||typeof o=="undefined")throw new Error(c)}function _t(o,c){if(!o){typeof console!="undefined"&&console.warn(c);try{throw new Error(c)}catch(r){}}}function bg(){return Math.random().toString(36).substring(2,10)}function Hm(o,c){return{usr:o.state,key:o.key,idx:c}}function vu(o,c,r=null,u){return Re(te({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof c=="string"?ll(c):c),{state:r,key:c&&c.key||u||bg()})}function ai({pathname:o="/",search:c="",hash:r=""}){return c&&c!=="?"&&(o+=c.charAt(0)==="?"?c:"?"+c),r&&r!=="#"&&(o+=r.charAt(0)==="#"?r:"#"+r),o}function ll(o){let c={};if(o){let r=o.indexOf("#");r>=0&&(c.hash=o.substring(r),o=o.substring(0,r));let u=o.indexOf("?");u>=0&&(c.search=o.substring(u),o=o.substring(0,u)),o&&(c.pathname=o)}return c}function xg(o,c,r,u={}){let{window:f=document.defaultView,v5Compat:m=!1}=u,y=f.history,b="POP",v=null,h=E();h==null&&(h=0,y.replaceState(Re(te({},y.state),{idx:h}),""));function E(){return(y.state||{idx:null}).idx}function A(){b="POP";let q=E(),U=q==null?null:q-h;h=q,v&&v({action:b,location:X.location,delta:U})}function S(q,U){b="PUSH";let J=vu(X.location,q,U);r&&r(J,q),h=E()+1;let V=Hm(J,h),I=X.createHref(J);try{y.pushState(V,"",I)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;f.location.assign(I)}m&&v&&v({action:b,location:X.location,delta:1})}function L(q,U){b="REPLACE";let J=vu(X.location,q,U);r&&r(J,q),h=E();let V=Hm(J,h),I=X.createHref(J);y.replaceState(V,"",I),m&&v&&v({action:b,location:X.location,delta:0})}function _(q){let U=f.location.origin!=="null"?f.location.origin:f.location.href,J=typeof q=="string"?q:ai(q);return J=J.replace(/ $/,"%20"),Ne(U,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,U)}let X={get action(){return b},get location(){return o(f,y)},listen(q){if(v)throw new Error("A history only accepts one active listener");return f.addEventListener(Lm,A),v=q,()=>{f.removeEventListener(Lm,A),v=null}},createHref(q){return c(f,q)},createURL:_,encodeLocation(q){let U=_(q);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:S,replace:L,go(q){return y.go(q)}};return X}function tp(o,c,r="/"){return Sg(o,c,r,!1)}function Sg(o,c,r,u){let f=typeof c=="string"?ll(c):c,m=ia(f.pathname||"/",r);if(m==null)return null;let y=ap(o);Eg(y);let b=null;for(let v=0;b==null&&v<y.length;++v){let h=_g(m);b=Og(y[v],h,u)}return b}function ap(o,c=[],r=[],u=""){let f=(m,y,b)=>{let v={relativePath:b===void 0?m.path||"":b,caseSensitive:m.caseSensitive===!0,childrenIndex:y,route:m};v.relativePath.startsWith("/")&&(Ne(v.relativePath.startsWith(u),`Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(u.length));let h=na([u,v.relativePath]),E=r.concat(v);m.children&&m.children.length>0&&(Ne(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),ap(m.children,c,E,h)),!(m.path==null&&!m.index)&&c.push({path:h,score:Cg(h,m.index),routesMeta:E})};return o.forEach((m,y)=>{var b;if(m.path===""||!((b=m.path)!=null&&b.includes("?")))f(m,y);else for(let v of lp(m.path))f(m,y,v)}),c}function lp(o){let c=o.split("/");if(c.length===0)return[];let[r,...u]=c,f=r.endsWith("?"),m=r.replace(/\?$/,"");if(u.length===0)return f?[m,""]:[m];let y=lp(u.join("/")),b=[];return b.push(...y.map(v=>v===""?m:[m,v].join("/"))),f&&b.push(...y),b.map(v=>o.startsWith("/")&&v===""?"/":v)}function Eg(o){o.sort((c,r)=>c.score!==r.score?r.score-c.score:Rg(c.routesMeta.map(u=>u.childrenIndex),r.routesMeta.map(u=>u.childrenIndex)))}var wg=/^:[\w-]+$/,Tg=3,jg=2,Ag=1,Mg=10,Dg=-2,km=o=>o==="*";function Cg(o,c){let r=o.split("/"),u=r.length;return r.some(km)&&(u+=Dg),c&&(u+=jg),r.filter(f=>!km(f)).reduce((f,m)=>f+(wg.test(m)?Tg:m===""?Ag:Mg),u)}function Rg(o,c){return o.length===c.length&&o.slice(0,-1).every((u,f)=>u===c[f])?o[o.length-1]-c[c.length-1]:0}function Og(o,c,r=!1){let{routesMeta:u}=o,f={},m="/",y=[];for(let b=0;b<u.length;++b){let v=u[b],h=b===u.length-1,E=m==="/"?c:c.slice(m.length)||"/",A=Ro({path:v.relativePath,caseSensitive:v.caseSensitive,end:h},E),S=v.route;if(!A&&h&&r&&!u[u.length-1].route.index&&(A=Ro({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},E)),!A)return null;Object.assign(f,A.params),y.push({params:f,pathname:na([m,A.pathname]),pathnameBase:Hg(na([m,A.pathnameBase])),route:S}),A.pathnameBase!=="/"&&(m=na([m,A.pathnameBase]))}return y}function Ro(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[r,u]=zg(o.path,o.caseSensitive,o.end),f=c.match(r);if(!f)return null;let m=f[0],y=m.replace(/(.)\/+$/,"$1"),b=f.slice(1);return{params:u.reduce((h,{paramName:E,isOptional:A},S)=>{if(E==="*"){let _=b[S]||"";y=m.slice(0,m.length-_.length).replace(/(.)\/+$/,"$1")}const L=b[S];return A&&!L?h[E]=void 0:h[E]=(L||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:y,pattern:o}}function zg(o,c=!1,r=!0){_t(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],f="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,b,v)=>(u.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(u.push({paramName:"*"}),f+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?f+="\\/*$":o!==""&&o!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),u]}function _g(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return _t(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),o}}function ia(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let r=c.endsWith("/")?c.length-1:c.length,u=o.charAt(r);return u&&u!=="/"?null:o.slice(r)||"/"}function Ng(o,c="/"){let{pathname:r,search:u="",hash:f=""}=typeof o=="string"?ll(o):o;return{pathname:r?r.startsWith("/")?r:Bg(r,c):c,search:kg(u),hash:Ug(f)}}function Bg(o,c){let r=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(f=>{f===".."?r.length>1&&r.pop():f!=="."&&r.push(f)}),r.length>1?r.join("/"):"/"}function lu(o,c,r,u){return`Cannot include a '${o}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Lg(o){return o.filter((c,r)=>r===0||c.route.path&&c.route.path.length>0)}function np(o){let c=Lg(o);return c.map((r,u)=>u===c.length-1?r.pathname:r.pathnameBase)}function ip(o,c,r,u=!1){let f;typeof o=="string"?f=ll(o):(f=te({},o),Ne(!f.pathname||!f.pathname.includes("?"),lu("?","pathname","search",f)),Ne(!f.pathname||!f.pathname.includes("#"),lu("#","pathname","hash",f)),Ne(!f.search||!f.search.includes("#"),lu("#","search","hash",f)));let m=o===""||f.pathname==="",y=m?"/":f.pathname,b;if(y==null)b=r;else{let A=c.length-1;if(!u&&y.startsWith("..")){let S=y.split("/");for(;S[0]==="..";)S.shift(),A-=1;f.pathname=S.join("/")}b=A>=0?c[A]:"/"}let v=Ng(f,b),h=y&&y!=="/"&&y.endsWith("/"),E=(m||y===".")&&r.endsWith("/");return!v.pathname.endsWith("/")&&(h||E)&&(v.pathname+="/"),v}var na=o=>o.join("/").replace(/\/\/+/g,"/"),Hg=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),kg=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Ug=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function qg(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var op=["POST","PUT","PATCH","DELETE"];new Set(op);var Gg=["GET",...op];new Set(Gg);var Zl=T.createContext(null);Zl.displayName="DataRouter";var zo=T.createContext(null);zo.displayName="DataRouterState";var rp=T.createContext({isTransitioning:!1});rp.displayName="ViewTransition";var Yg=T.createContext(new Map);Yg.displayName="Fetchers";var Vg=T.createContext(null);Vg.displayName="Await";var Gt=T.createContext(null);Gt.displayName="Navigation";var li=T.createContext(null);li.displayName="Location";var Nt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Nt.displayName="Route";var wu=T.createContext(null);wu.displayName="RouteError";function Xg(o,{relative:c}={}){Ne(ni(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:u}=T.useContext(Gt),{hash:f,pathname:m,search:y}=ii(o,{relative:c}),b=m;return r!=="/"&&(b=m==="/"?r:na([r,m])),u.createHref({pathname:b,search:y,hash:f})}function ni(){return T.useContext(li)!=null}function oa(){return Ne(ni(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(li).location}var cp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function up(o){T.useContext(Gt).static||T.useLayoutEffect(o)}function Qg(){let{isDataRoute:o}=T.useContext(Nt);return o?ry():Zg()}function Zg(){Ne(ni(),"useNavigate() may be used only in the context of a <Router> component.");let o=T.useContext(Zl),{basename:c,navigator:r}=T.useContext(Gt),{matches:u}=T.useContext(Nt),{pathname:f}=oa(),m=JSON.stringify(np(u)),y=T.useRef(!1);return up(()=>{y.current=!0}),T.useCallback((v,h={})=>{if(_t(y.current,cp),!y.current)return;if(typeof v=="number"){r.go(v);return}let E=ip(v,JSON.parse(m),f,h.relative==="path");o==null&&c!=="/"&&(E.pathname=E.pathname==="/"?c:na([c,E.pathname])),(h.replace?r.replace:r.push)(E,h.state,h)},[c,r,m,f,o])}var Kg=T.createContext(null);function Jg(o){let c=T.useContext(Nt).outlet;return c&&T.createElement(Kg.Provider,{value:o},c)}function Pg(){let{matches:o}=T.useContext(Nt),c=o[o.length-1];return c?c.params:{}}function ii(o,{relative:c}={}){let{matches:r}=T.useContext(Nt),{pathname:u}=oa(),f=JSON.stringify(np(r));return T.useMemo(()=>ip(o,JSON.parse(f),u,c==="path"),[o,f,u,c])}function $g(o,c){return sp(o,c)}function sp(o,c,r,u){var J;Ne(ni(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f,static:m}=T.useContext(Gt),{matches:y}=T.useContext(Nt),b=y[y.length-1],v=b?b.params:{},h=b?b.pathname:"/",E=b?b.pathnameBase:"/",A=b&&b.route;{let V=A&&A.path||"";fp(h,!A||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let S=oa(),L;if(c){let V=typeof c=="string"?ll(c):c;Ne(E==="/"||((J=V.pathname)==null?void 0:J.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${V.pathname}" was given in the \`location\` prop.`),L=V}else L=S;let _=L.pathname||"/",X=_;if(E!=="/"){let V=E.replace(/^\//,"").split("/");X="/"+_.replace(/^\//,"").split("/").slice(V.length).join("/")}let q=!m&&r&&r.matches&&r.matches.length>0?r.matches:tp(o,{pathname:X});_t(A||q!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),_t(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=ty(q&&q.map(V=>Object.assign({},V,{params:Object.assign({},v,V.params),pathname:na([E,f.encodeLocation?f.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?E:na([E,f.encodeLocation?f.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),y,r,u);return c&&U?T.createElement(li.Provider,{value:{location:te({pathname:"/",search:"",hash:"",state:null,key:"default"},L),navigationType:"POP"}},U):U}function Wg(){let o=oy(),c=qg(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),r=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",o),y=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},c),r?T.createElement("pre",{style:f},r):null,y)}var Fg=T.createElement(Wg,null),Ig=class extends T.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,c){return c.location!==o.location||c.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:c.error,location:c.location,revalidation:o.revalidation||c.revalidation}}componentDidCatch(o,c){console.error("React Router caught the following error during render",o,c)}render(){return this.state.error!==void 0?T.createElement(Nt.Provider,{value:this.props.routeContext},T.createElement(wu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ey({routeContext:o,match:c,children:r}){let u=T.useContext(Zl);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),T.createElement(Nt.Provider,{value:o},r)}function ty(o,c=[],r=null,u=null){if(o==null){if(!r)return null;if(r.errors)o=r.matches;else if(c.length===0&&!r.initialized&&r.matches.length>0)o=r.matches;else return null}let f=o,m=r==null?void 0:r.errors;if(m!=null){let v=f.findIndex(h=>h.route.id&&(m==null?void 0:m[h.route.id])!==void 0);Ne(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,v+1))}let y=!1,b=-1;if(r)for(let v=0;v<f.length;v++){let h=f[v];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(b=v),h.route.id){let{loaderData:E,errors:A}=r,S=h.route.loader&&!E.hasOwnProperty(h.route.id)&&(!A||A[h.route.id]===void 0);if(h.route.lazy||S){y=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}return f.reduceRight((v,h,E)=>{let A,S=!1,L=null,_=null;r&&(A=m&&h.route.id?m[h.route.id]:void 0,L=h.route.errorElement||Fg,y&&(b<0&&E===0?(fp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,_=null):b===E&&(S=!0,_=h.route.hydrateFallbackElement||null)));let X=c.concat(f.slice(0,E+1)),q=()=>{let U;return A?U=L:S?U=_:h.route.Component?U=T.createElement(h.route.Component,null):h.route.element?U=h.route.element:U=v,T.createElement(ey,{match:h,routeContext:{outlet:v,matches:X,isDataRoute:r!=null},children:U})};return r&&(h.route.ErrorBoundary||h.route.errorElement||E===0)?T.createElement(Ig,{location:r.location,revalidation:r.revalidation,component:L,error:A,children:q(),routeContext:{outlet:null,matches:X,isDataRoute:!0}}):q()},null)}function Tu(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ay(o){let c=T.useContext(Zl);return Ne(c,Tu(o)),c}function ly(o){let c=T.useContext(zo);return Ne(c,Tu(o)),c}function ny(o){let c=T.useContext(Nt);return Ne(c,Tu(o)),c}function ju(o){let c=ny(o),r=c.matches[c.matches.length-1];return Ne(r.route.id,`${o} can only be used on routes that contain a unique "id"`),r.route.id}function iy(){return ju("useRouteId")}function oy(){var u;let o=T.useContext(wu),c=ly("useRouteError"),r=ju("useRouteError");return o!==void 0?o:(u=c.errors)==null?void 0:u[r]}function ry(){let{router:o}=ay("useNavigate"),c=ju("useNavigate"),r=T.useRef(!1);return up(()=>{r.current=!0}),T.useCallback((y,...b)=>Se(this,[y,...b],function*(f,m={}){_t(r.current,cp),r.current&&(typeof f=="number"?o.navigate(f):yield o.navigate(f,te({fromRouteId:c},m)))}),[o,c])}var Um={};function fp(o,c,r){!c&&!Um[o]&&(Um[o]=!0,_t(!1,r))}T.memo(cy);function cy({routes:o,future:c,state:r}){return sp(o,void 0,r,c)}function uy(o){return Jg(o.context)}function Ia(o){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sy({basename:o="/",children:c=null,location:r,navigationType:u="POP",navigator:f,static:m=!1}){Ne(!ni(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=o.replace(/^\/*/,"/"),b=T.useMemo(()=>({basename:y,navigator:f,static:m,future:{}}),[y,f,m]);typeof r=="string"&&(r=ll(r));let{pathname:v="/",search:h="",hash:E="",state:A=null,key:S="default"}=r,L=T.useMemo(()=>{let _=ia(v,y);return _==null?null:{location:{pathname:_,search:h,hash:E,state:A,key:S},navigationType:u}},[y,v,h,E,A,S,u]);return _t(L!=null,`<Router basename="${y}"> is not able to match the URL "${v}${h}${E}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:T.createElement(Gt.Provider,{value:b},T.createElement(li.Provider,{children:c,value:L}))}function fy({children:o,location:c}){return $g(gu(o),c)}function gu(o,c=[]){let r=[];return T.Children.forEach(o,(u,f)=>{if(!T.isValidElement(u))return;let m=[...c,f];if(u.type===T.Fragment){r.push.apply(r,gu(u.props.children,m));return}Ne(u.type===Ia,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=gu(u.props.children,m)),r.push(y)}),r}var jo="get",Ao="application/x-www-form-urlencoded";function _o(o){return o!=null&&typeof o.tagName=="string"}function dy(o){return _o(o)&&o.tagName.toLowerCase()==="button"}function my(o){return _o(o)&&o.tagName.toLowerCase()==="form"}function py(o){return _o(o)&&o.tagName.toLowerCase()==="input"}function hy(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function vy(o,c){return o.button===0&&(!c||c==="_self")&&!hy(o)}var wo=null;function gy(){if(wo===null)try{new FormData(document.createElement("form"),0),wo=!1}catch(o){wo=!0}return wo}var yy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nu(o){return o!=null&&!yy.has(o)?(_t(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ao}"`),null):o}function by(o,c){let r,u,f,m,y;if(my(o)){let b=o.getAttribute("action");u=b?ia(b,c):null,r=o.getAttribute("method")||jo,f=nu(o.getAttribute("enctype"))||Ao,m=new FormData(o)}else if(dy(o)||py(o)&&(o.type==="submit"||o.type==="image")){let b=o.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=o.getAttribute("formaction")||b.getAttribute("action");if(u=v?ia(v,c):null,r=o.getAttribute("formmethod")||b.getAttribute("method")||jo,f=nu(o.getAttribute("formenctype"))||nu(b.getAttribute("enctype"))||Ao,m=new FormData(b,o),!gy()){let{name:h,type:E,value:A}=o;if(E==="image"){let S=h?`${h}.`:"";m.append(`${S}x`,"0"),m.append(`${S}y`,"0")}else h&&m.append(h,A)}}else{if(_o(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=jo,u=null,f=Ao,y=o}return m&&f==="text/plain"&&(y=m,m=void 0),{action:u,method:r.toLowerCase(),encType:f,formData:m,body:y}}function Au(o,c){if(o===!1||o===null||typeof o=="undefined")throw new Error(c)}function xy(o,c){return Se(this,null,function*(){if(o.id in c)return c[o.id];try{let r=yield import(o.module);return c[o.id]=r,r}catch(r){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}})}function Sy(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}function Ey(o,c,r){return Se(this,null,function*(){let u=yield Promise.all(o.map(f=>Se(this,null,function*(){let m=c.routes[f.route.id];if(m){let y=yield xy(m,r);return y.links?y.links():[]}return[]})));return Ay(u.flat(1).filter(Sy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?Re(te({},f),{rel:"prefetch",as:"style"}):Re(te({},f),{rel:"prefetch"})))})}function qm(o,c,r,u,f,m){let y=(v,h)=>r[h]?v.route.id!==r[h].route.id:!0,b=(v,h)=>{var E;return r[h].pathname!==v.pathname||((E=r[h].route.path)==null?void 0:E.endsWith("*"))&&r[h].params["*"]!==v.params["*"]};return m==="assets"?c.filter((v,h)=>y(v,h)||b(v,h)):m==="data"?c.filter((v,h)=>{var A;let E=u.routes[v.route.id];if(!E||!E.hasLoader)return!1;if(y(v,h)||b(v,h))return!0;if(v.route.shouldRevalidate){let S=v.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((A=r[0])==null?void 0:A.params)||{},nextUrl:new URL(o,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function wy(o,c,{includeHydrateFallback:r}={}){return Ty(o.map(u=>{let f=c.routes[u.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),r&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function Ty(o){return[...new Set(o)]}function jy(o){let c={},r=Object.keys(o).sort();for(let u of r)c[u]=o[u];return c}function Ay(o,c){let r=new Set;return new Set(c),o.reduce((u,f)=>{let m=JSON.stringify(jy(f));return r.has(m)||(r.add(m),u.push({key:m,link:f})),u},[])}function My(o,c){let r=typeof o=="string"?new URL(o,typeof window=="undefined"?"server://singlefetch/":window.location.origin):o;return r.pathname==="/"?r.pathname="_root.data":c&&ia(r.pathname,c)==="/"?r.pathname=`${c.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function dp(){let o=T.useContext(Zl);return Au(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Dy(){let o=T.useContext(zo);return Au(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Mu=T.createContext(void 0);Mu.displayName="FrameworkContext";function mp(){let o=T.useContext(Mu);return Au(o,"You must render this element inside a <HydratedRouter> element"),o}function Cy(o,c){let r=T.useContext(Mu),[u,f]=T.useState(!1),[m,y]=T.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:h,onMouseLeave:E,onTouchStart:A}=c,S=T.useRef(null);T.useEffect(()=>{if(o==="render"&&y(!0),o==="viewport"){let X=U=>{U.forEach(J=>{y(J.isIntersecting)})},q=new IntersectionObserver(X,{threshold:.5});return S.current&&q.observe(S.current),()=>{q.disconnect()}}},[o]),T.useEffect(()=>{if(u){let X=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(X)}}},[u]);let L=()=>{f(!0)},_=()=>{f(!1),y(!1)};return r?o!=="intent"?[m,S,{}]:[m,S,{onFocus:Pn(b,L),onBlur:Pn(v,_),onMouseEnter:Pn(h,L),onMouseLeave:Pn(E,_),onTouchStart:Pn(A,L)}]:[!1,S,{}]}function Pn(o,c){return r=>{o&&o(r),r.defaultPrevented||c(r)}}function Ry(r){var u=r,{page:o}=u,c=za(u,["page"]);let{router:f}=dp(),m=T.useMemo(()=>tp(f.routes,o,f.basename),[f.routes,o,f.basename]);return m?T.createElement(zy,te({page:o,matches:m},c)):null}function Oy(o){let{manifest:c,routeModules:r}=mp(),[u,f]=T.useState([]);return T.useEffect(()=>{let m=!1;return Ey(o,c,r).then(y=>{m||f(y)}),()=>{m=!0}},[o,c,r]),u}function zy(u){var f=u,{page:o,matches:c}=f,r=za(f,["page","matches"]);let m=oa(),{manifest:y,routeModules:b}=mp(),{basename:v}=dp(),{loaderData:h,matches:E}=Dy(),A=T.useMemo(()=>qm(o,c,E,y,m,"data"),[o,c,E,y,m]),S=T.useMemo(()=>qm(o,c,E,y,m,"assets"),[o,c,E,y,m]),L=T.useMemo(()=>{if(o===m.pathname+m.search+m.hash)return[];let q=new Set,U=!1;if(c.forEach(V=>{var Q;let I=y.routes[V.route.id];!I||!I.hasLoader||(!A.some(fe=>fe.route.id===V.route.id)&&V.route.id in h&&((Q=b[V.route.id])!=null&&Q.shouldRevalidate)||I.hasClientLoader?U=!0:q.add(V.route.id))}),q.size===0)return[];let J=My(o,v);return U&&q.size>0&&J.searchParams.set("_routes",c.filter(V=>q.has(V.route.id)).map(V=>V.route.id).join(",")),[J.pathname+J.search]},[v,h,m,y,A,c,o,b]),_=T.useMemo(()=>wy(S,y),[S,y]),X=Oy(S);return T.createElement(T.Fragment,null,L.map(q=>T.createElement("link",te({key:q,rel:"prefetch",as:"fetch",href:q},r))),_.map(q=>T.createElement("link",te({key:q,rel:"modulepreload",href:q},r))),X.map(({key:q,link:U})=>T.createElement("link",te({key:q},U))))}function _y(...o){return c=>{o.forEach(r=>{typeof r=="function"?r(c):r!=null&&(r.current=c)})}}var pp=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined";try{pp&&(window.__reactRouterVersion="7.5.0")}catch(o){}function Ny({basename:o,children:c,window:r}){let u=T.useRef();u.current==null&&(u.current=yg({window:r,v5Compat:!0}));let f=u.current,[m,y]=T.useState({action:f.action,location:f.location}),b=T.useCallback(v=>{T.startTransition(()=>y(v))},[y]);return T.useLayoutEffect(()=>f.listen(b),[f,b]),T.createElement(sy,{basename:o,children:c,location:m.location,navigationType:m.action,navigator:f})}var hp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_a=T.forwardRef(function(_,L){var X=_,{onClick:c,discover:r="render",prefetch:u="none",relative:f,reloadDocument:m,replace:y,state:b,target:v,to:h,preventScrollReset:E,viewTransition:A}=X,S=za(X,["onClick","discover","prefetch","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"]);let{basename:q}=T.useContext(Gt),U=typeof h=="string"&&hp.test(h),J,V=!1;if(typeof h=="string"&&U&&(J=h,pp))try{let he=new URL(window.location.href),ye=h.startsWith("//")?new URL(he.protocol+h):new URL(h),Oe=ia(ye.pathname,q);ye.origin===he.origin&&Oe!=null?h=Oe+ye.search+ye.hash:V=!0}catch(he){_t(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let I=Xg(h,{relative:f}),[Q,fe,ge]=Cy(u,S),de=ky(h,{replace:y,state:b,target:v,preventScrollReset:E,relative:f,viewTransition:A});function ie(he){c&&c(he),he.defaultPrevented||de(he)}let re=T.createElement("a",Re(te(te({},S),ge),{href:J||I,onClick:V||m?c:ie,ref:_y(L,fe),target:v,"data-discover":!U&&r==="render"?"true":void 0}));return Q&&!U?T.createElement(T.Fragment,null,re,T.createElement(Ry,{page:I})):re});_a.displayName="Link";var By=T.forwardRef(function(A,E){var S=A,{"aria-current":c="page",caseSensitive:r=!1,className:u="",end:f=!1,style:m,to:y,viewTransition:b,children:v}=S,h=za(S,["aria-current","caseSensitive","className","end","style","to","viewTransition","children"]);let L=ii(y,{relative:h.relative}),_=oa(),X=T.useContext(zo),{navigator:q,basename:U}=T.useContext(Gt),J=X!=null&&Vy(L)&&b===!0,V=q.encodeLocation?q.encodeLocation(L).pathname:L.pathname,I=_.pathname,Q=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;r||(I=I.toLowerCase(),Q=Q?Q.toLowerCase():null,V=V.toLowerCase()),Q&&U&&(Q=ia(Q,U)||Q);const fe=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let ge=I===V||!f&&I.startsWith(V)&&I.charAt(fe)==="/",de=Q!=null&&(Q===V||!f&&Q.startsWith(V)&&Q.charAt(V.length)==="/"),ie={isActive:ge,isPending:de,isTransitioning:J},re=ge?c:void 0,he;typeof u=="function"?he=u(ie):he=[u,ge?"active":null,de?"pending":null,J?"transitioning":null].filter(Boolean).join(" ");let ye=typeof m=="function"?m(ie):m;return T.createElement(_a,Re(te({},h),{"aria-current":re,className:he,ref:E,style:ye,to:y,viewTransition:b}),typeof v=="function"?v(ie):v)});By.displayName="NavLink";var Ly=T.forwardRef((_,L)=>{var X=_,{discover:o="render",fetcherKey:c,navigate:r,reloadDocument:u,replace:f,state:m,method:y=jo,action:b,onSubmit:v,relative:h,preventScrollReset:E,viewTransition:A}=X,S=za(X,["discover","fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","viewTransition"]);let q=Gy(),U=Yy(b,{relative:h}),J=y.toLowerCase()==="get"?"get":"post",V=typeof b=="string"&&hp.test(b),I=Q=>{if(v&&v(Q),Q.defaultPrevented)return;Q.preventDefault();let fe=Q.nativeEvent.submitter,ge=(fe==null?void 0:fe.getAttribute("formmethod"))||y;q(fe||Q.currentTarget,{fetcherKey:c,method:ge,navigate:r,replace:f,state:m,relative:h,preventScrollReset:E,viewTransition:A})};return T.createElement("form",Re(te({ref:L,method:J,action:U,onSubmit:u?v:I},S),{"data-discover":!V&&o==="render"?"true":void 0}))});Ly.displayName="Form";function Hy(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vp(o){let c=T.useContext(Zl);return Ne(c,Hy(o)),c}function ky(o,{target:c,replace:r,state:u,preventScrollReset:f,relative:m,viewTransition:y}={}){let b=Qg(),v=oa(),h=ii(o,{relative:m});return T.useCallback(E=>{if(vy(E,c)){E.preventDefault();let A=r!==void 0?r:ai(v)===ai(h);b(o,{replace:A,state:u,preventScrollReset:f,relative:m,viewTransition:y})}},[v,b,h,r,u,c,o,f,m,y])}var Uy=0,qy=()=>`__${String(++Uy)}__`;function Gy(){let{router:o}=vp("useSubmit"),{basename:c}=T.useContext(Gt),r=iy();return T.useCallback((m,...y)=>Se(this,[m,...y],function*(u,f={}){let{action:b,method:v,encType:h,formData:E,body:A}=by(u,c);if(f.navigate===!1){let S=f.fetcherKey||qy();yield o.fetch(S,r,f.action||b,{preventScrollReset:f.preventScrollReset,formData:E,body:A,formMethod:f.method||v,formEncType:f.encType||h,flushSync:f.flushSync})}else yield o.navigate(f.action||b,{preventScrollReset:f.preventScrollReset,formData:E,body:A,formMethod:f.method||v,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:r,flushSync:f.flushSync,viewTransition:f.viewTransition})}),[o,c,r])}function Yy(o,{relative:c}={}){let{basename:r}=T.useContext(Gt),u=T.useContext(Nt);Ne(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),m=te({},ii(o||".",{relative:c})),y=oa();if(o==null){m.search=y.search;let b=new URLSearchParams(m.search),v=b.getAll("index");if(v.some(E=>E==="")){b.delete("index"),v.filter(A=>A).forEach(A=>b.append("index",A));let E=b.toString();m.search=E?`?${E}`:""}}return(!o||o===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(m.pathname=m.pathname==="/"?r:na([r,m.pathname])),ai(m)}function Vy(o,c={}){let r=T.useContext(rp);Ne(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=vp("useViewTransitionState"),f=ii(o,{relative:c.relative});if(!r.isTransitioning)return!1;let m=ia(r.currentLocation.pathname,u)||r.currentLocation.pathname,y=ia(r.nextLocation.pathname,u)||r.nextLocation.pathname;return Ro(f.pathname,y)!=null||Ro(f.pathname,m)!=null}new TextEncoder;var Xy=ep();const Qy=al(Xy);var iu,Gm;function Zy(){if(Gm)return iu;Gm=1;var o=typeof Element!="undefined",c=typeof Map=="function",r=typeof Set=="function",u=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function f(m,y){if(m===y)return!0;if(m&&y&&typeof m=="object"&&typeof y=="object"){if(m.constructor!==y.constructor)return!1;var b,v,h;if(Array.isArray(m)){if(b=m.length,b!=y.length)return!1;for(v=b;v--!==0;)if(!f(m[v],y[v]))return!1;return!0}var E;if(c&&m instanceof Map&&y instanceof Map){if(m.size!==y.size)return!1;for(E=m.entries();!(v=E.next()).done;)if(!y.has(v.value[0]))return!1;for(E=m.entries();!(v=E.next()).done;)if(!f(v.value[1],y.get(v.value[0])))return!1;return!0}if(r&&m instanceof Set&&y instanceof Set){if(m.size!==y.size)return!1;for(E=m.entries();!(v=E.next()).done;)if(!y.has(v.value[0]))return!1;return!0}if(u&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(y)){if(b=m.length,b!=y.length)return!1;for(v=b;v--!==0;)if(m[v]!==y[v])return!1;return!0}if(m.constructor===RegExp)return m.source===y.source&&m.flags===y.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof y.valueOf=="function")return m.valueOf()===y.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof y.toString=="function")return m.toString()===y.toString();if(h=Object.keys(m),b=h.length,b!==Object.keys(y).length)return!1;for(v=b;v--!==0;)if(!Object.prototype.hasOwnProperty.call(y,h[v]))return!1;if(o&&m instanceof Element)return!1;for(v=b;v--!==0;)if(!((h[v]==="_owner"||h[v]==="__v"||h[v]==="__o")&&m.$$typeof)&&!f(m[h[v]],y[h[v]]))return!1;return!0}return m!==m&&y!==y}return iu=function(y,b){try{return f(y,b)}catch(v){if((v.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw v}},iu}var Ky=Zy();const Jy=al(Ky);var ou,Ym;function Py(){if(Ym)return ou;Ym=1;var o=function(c,r,u,f,m,y,b,v){if(!c){var h;if(r===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var E=[u,f,m,y,b,v],A=0;h=new Error(r.replace(/%s/g,function(){return E[A++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}};return ou=o,ou}var $y=Py();const Vm=al($y);var ru,Xm;function Wy(){return Xm||(Xm=1,ru=function(c,r,u,f){var m=u?u.call(f,c,r):void 0;if(m!==void 0)return!!m;if(c===r)return!0;if(typeof c!="object"||!c||typeof r!="object"||!r)return!1;var y=Object.keys(c),b=Object.keys(r);if(y.length!==b.length)return!1;for(var v=Object.prototype.hasOwnProperty.bind(r),h=0;h<y.length;h++){var E=y[h];if(!v(E))return!1;var A=c[E],S=r[E];if(m=u?u.call(f,A,S,E):void 0,m===!1||m===void 0&&A!==S)return!1}return!0}),ru}var Fy=Wy();const Iy=al(Fy);var gp=(o=>(o.BASE="base",o.BODY="body",o.HEAD="head",o.HTML="html",o.LINK="link",o.META="meta",o.NOSCRIPT="noscript",o.SCRIPT="script",o.STYLE="style",o.TITLE="title",o.FRAGMENT="Symbol(react.fragment)",o))(gp||{}),cu={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Qm=Object.values(gp),Du={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},e0=Object.entries(Du).reduce((o,[c,r])=>(o[r]=c,o),{}),zt="data-rh",Xl={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ql=(o,c)=>{for(let r=o.length-1;r>=0;r-=1){const u=o[r];if(Object.prototype.hasOwnProperty.call(u,c))return u[c]}return null},t0=o=>{let c=Ql(o,"title");const r=Ql(o,Xl.TITLE_TEMPLATE);if(Array.isArray(c)&&(c=c.join("")),r&&c)return r.replace(/%s/g,()=>c);const u=Ql(o,Xl.DEFAULT_TITLE);return c||u||void 0},a0=o=>Ql(o,Xl.ON_CHANGE_CLIENT_STATE)||(()=>{}),uu=(o,c)=>c.filter(r=>typeof r[o]!="undefined").map(r=>r[o]).reduce((r,u)=>te(te({},r),u),{}),l0=(o,c)=>c.filter(r=>typeof r.base!="undefined").map(r=>r.base).reverse().reduce((r,u)=>{if(!r.length){const f=Object.keys(u);for(let m=0;m<f.length;m+=1){const b=f[m].toLowerCase();if(o.indexOf(b)!==-1&&u[b])return r.concat(u)}}return r},[]),n0=o=>console&&typeof console.warn=="function"&&console.warn(o),$n=(o,c,r)=>{const u={};return r.filter(f=>Array.isArray(f[o])?!0:(typeof f[o]!="undefined"&&n0(`Helmet: ${o} should be of type "Array". Instead found type "${typeof f[o]}"`),!1)).map(f=>f[o]).reverse().reduce((f,m)=>{const y={};m.filter(v=>{let h;const E=Object.keys(v);for(let S=0;S<E.length;S+=1){const L=E[S],_=L.toLowerCase();c.indexOf(_)!==-1&&!(h==="rel"&&v[h].toLowerCase()==="canonical")&&!(_==="rel"&&v[_].toLowerCase()==="stylesheet")&&(h=_),c.indexOf(L)!==-1&&(L==="innerHTML"||L==="cssText"||L==="itemprop")&&(h=L)}if(!h||!v[h])return!1;const A=v[h].toLowerCase();return u[h]||(u[h]={}),y[h]||(y[h]={}),u[h][A]?!1:(y[h][A]=!0,!0)}).reverse().forEach(v=>f.push(v));const b=Object.keys(y);for(let v=0;v<b.length;v+=1){const h=b[v],E=te(te({},u[h]),y[h]);u[h]=E}return f},[]).reverse()},i0=(o,c)=>{if(Array.isArray(o)&&o.length){for(let r=0;r<o.length;r+=1)if(o[r][c])return!0}return!1},o0=o=>({baseTag:l0(["href"],o),bodyAttributes:uu("bodyAttributes",o),defer:Ql(o,Xl.DEFER),encode:Ql(o,Xl.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:uu("htmlAttributes",o),linkTags:$n("link",["rel","href"],o),metaTags:$n("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:$n("noscript",["innerHTML"],o),onChangeClientState:a0(o),scriptTags:$n("script",["src","innerHTML"],o),styleTags:$n("style",["cssText"],o),title:t0(o),titleAttributes:uu("titleAttributes",o),prioritizeSeoTags:i0(o,Xl.PRIORITIZE_SEO_TAGS)}),yp=o=>Array.isArray(o)?o.join(""):o,r0=(o,c)=>{const r=Object.keys(o);for(let u=0;u<r.length;u+=1)if(c[r[u]]&&c[r[u]].includes(o[r[u]]))return!0;return!1},su=(o,c)=>Array.isArray(o)?o.reduce((r,u)=>(r0(u,c)?r.priority.push(u):r.default.push(u),r),{priority:[],default:[]}):{default:o,priority:[]},Zm=(o,c)=>Re(te({},o),{[c]:void 0}),c0=["noscript","script","style"],yu=(o,c=!0)=>c===!1?String(o):String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),bp=o=>Object.keys(o).reduce((c,r)=>{const u=typeof o[r]!="undefined"?`${r}="${o[r]}"`:`${r}`;return c?`${c} ${u}`:u},""),u0=(o,c,r,u)=>{const f=bp(r),m=yp(c);return f?`<${o} ${zt}="true" ${f}>${yu(m,u)}</${o}>`:`<${o} ${zt}="true">${yu(m,u)}</${o}>`},s0=(o,c,r=!0)=>c.reduce((u,f)=>{const m=f,y=Object.keys(m).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,E)=>{const A=typeof m[E]=="undefined"?E:`${E}="${yu(m[E],r)}"`;return h?`${h} ${A}`:A},""),b=m.innerHTML||m.cssText||"",v=c0.indexOf(o)===-1;return`${u}<${o} ${zt}="true" ${y}${v?"/>":`>${b}</${o}>`}`},""),xp=(o,c={})=>Object.keys(o).reduce((r,u)=>{const f=Du[u];return r[f||u]=o[u],r},c),f0=(o,c,r)=>{const u={key:c,[zt]:!0},f=xp(r,u);return[Ot.createElement("title",f,c)]},Mo=(o,c)=>c.map((r,u)=>{const f={key:u,[zt]:!0};return Object.keys(r).forEach(m=>{const b=Du[m]||m;if(b==="innerHTML"||b==="cssText"){const v=r.innerHTML||r.cssText;f.dangerouslySetInnerHTML={__html:v}}else f[b]=r[m]}),Ot.createElement(o,f)}),Mt=(o,c,r=!0)=>{switch(o){case"title":return{toComponent:()=>f0(o,c.title,c.titleAttributes),toString:()=>u0(o,c.title,c.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>xp(c),toString:()=>bp(c)};default:return{toComponent:()=>Mo(o,c),toString:()=>s0(o,c,r)}}},d0=({metaTags:o,linkTags:c,scriptTags:r,encode:u})=>{const f=su(o,cu.meta),m=su(c,cu.link),y=su(r,cu.script);return{priorityMethods:{toComponent:()=>[...Mo("meta",f.priority),...Mo("link",m.priority),...Mo("script",y.priority)],toString:()=>`${Mt("meta",f.priority,u)} ${Mt("link",m.priority,u)} ${Mt("script",y.priority,u)}`},metaTags:f.default,linkTags:m.default,scriptTags:y.default}},m0=o=>{const{baseTag:c,bodyAttributes:r,encode:u=!0,htmlAttributes:f,noscriptTags:m,styleTags:y,title:b="",titleAttributes:v,prioritizeSeoTags:h}=o;let{linkTags:E,metaTags:A,scriptTags:S}=o,L={toComponent:()=>{},toString:()=>""};return h&&({priorityMethods:L,linkTags:E,metaTags:A,scriptTags:S}=d0(o)),{priority:L,base:Mt("base",c,u),bodyAttributes:Mt("bodyAttributes",r,u),htmlAttributes:Mt("htmlAttributes",f,u),link:Mt("link",E,u),meta:Mt("meta",A,u),noscript:Mt("noscript",m,u),script:Mt("script",S,u),style:Mt("style",y,u),title:Mt("title",{title:b,titleAttributes:v},u)}},bu=m0,To=[],Sp=!!(typeof window!="undefined"&&window.document&&window.document.createElement),xu=class{constructor(o,c){la(this,"instances",[]);la(this,"canUseDOM",Sp);la(this,"context");la(this,"value",{setHelmet:o=>{this.context.helmet=o},helmetInstances:{get:()=>this.canUseDOM?To:this.instances,add:o=>{(this.canUseDOM?To:this.instances).push(o)},remove:o=>{const c=(this.canUseDOM?To:this.instances).indexOf(o);(this.canUseDOM?To:this.instances).splice(c,1)}}});this.context=o,this.canUseDOM=c||!1,c||(o.helmet=bu({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},p0={},Ep=Ot.createContext(p0),tl,wp=(tl=class extends T.Component{constructor(r){super(r);la(this,"helmetData");this.helmetData=new xu(this.props.context||{},tl.canUseDOM)}render(){return Ot.createElement(Ep.Provider,{value:this.helmetData.value},this.props.children)}},la(tl,"canUseDOM",Sp),tl),Vl=(o,c)=>{const r=document.head||document.querySelector("head"),u=r.querySelectorAll(`${o}[${zt}]`),f=[].slice.call(u),m=[];let y;return c&&c.length&&c.forEach(b=>{const v=document.createElement(o);for(const h in b)if(Object.prototype.hasOwnProperty.call(b,h))if(h==="innerHTML")v.innerHTML=b.innerHTML;else if(h==="cssText")v.styleSheet?v.styleSheet.cssText=b.cssText:v.appendChild(document.createTextNode(b.cssText));else{const E=h,A=typeof b[E]=="undefined"?"":b[E];v.setAttribute(h,A)}v.setAttribute(zt,"true"),f.some((h,E)=>(y=E,v.isEqualNode(h)))?f.splice(y,1):m.push(v)}),f.forEach(b=>{var v;return(v=b.parentNode)==null?void 0:v.removeChild(b)}),m.forEach(b=>r.appendChild(b)),{oldTags:f,newTags:m}},Su=(o,c)=>{const r=document.getElementsByTagName(o)[0];if(!r)return;const u=r.getAttribute(zt),f=u?u.split(","):[],m=[...f],y=Object.keys(c);for(const b of y){const v=c[b]||"";r.getAttribute(b)!==v&&r.setAttribute(b,v),f.indexOf(b)===-1&&f.push(b);const h=m.indexOf(b);h!==-1&&m.splice(h,1)}for(let b=m.length-1;b>=0;b-=1)r.removeAttribute(m[b]);f.length===m.length?r.removeAttribute(zt):r.getAttribute(zt)!==y.join(",")&&r.setAttribute(zt,y.join(","))},h0=(o,c)=>{typeof o!="undefined"&&document.title!==o&&(document.title=yp(o)),Su("title",c)},Km=(o,c)=>{const{baseTag:r,bodyAttributes:u,htmlAttributes:f,linkTags:m,metaTags:y,noscriptTags:b,onChangeClientState:v,scriptTags:h,styleTags:E,title:A,titleAttributes:S}=o;Su("body",u),Su("html",f),h0(A,S);const L={baseTag:Vl("base",r),linkTags:Vl("link",m),metaTags:Vl("meta",y),noscriptTags:Vl("noscript",b),scriptTags:Vl("script",h),styleTags:Vl("style",E)},_={},X={};Object.keys(L).forEach(q=>{const{newTags:U,oldTags:J}=L[q];U.length&&(_[q]=U),J.length&&(X[q]=L[q].oldTags)}),c&&c(),v(o,_,X)},Wn=null,v0=o=>{Wn&&cancelAnimationFrame(Wn),o.defer?Wn=requestAnimationFrame(()=>{Km(o,()=>{Wn=null})}):(Km(o),Wn=null)},g0=v0,Jm=class extends T.Component{constructor(){super(...arguments);la(this,"rendered",!1)}shouldComponentUpdate(c){return!Iy(c,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:c}=this.props.context;c.remove(this),this.emitChange()}emitChange(){const{helmetInstances:c,setHelmet:r}=this.props.context;let u=null;const f=o0(c.get().map(m=>{const y=te({},m.props);return delete y.context,y}));wp.canUseDOM?g0(f):bu&&(u=bu(f)),r(u)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:c}=this.props.context;c.add(this),this.emitChange()}render(){return this.init(),null}},hu,Kl=(hu=class extends T.Component{shouldComponentUpdate(o){return!Jy(Zm(this.props,"helmetData"),Zm(o,"helmetData"))}mapNestedChildrenToProps(o,c){if(!c)return null;switch(o.type){case"script":case"noscript":return{innerHTML:c};case"style":return{cssText:c};default:throw new Error(`<${o.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(o,c,r,u){return Re(te({},c),{[o.type]:[...c[o.type]||[],te(te({},r),this.mapNestedChildrenToProps(o,u))]})}mapObjectTypeChildren(o,c,r,u){switch(o.type){case"title":return Re(te({},c),{[o.type]:u,titleAttributes:te({},r)});case"body":return Re(te({},c),{bodyAttributes:te({},r)});case"html":return Re(te({},c),{htmlAttributes:te({},r)});default:return Re(te({},c),{[o.type]:te({},r)})}}mapArrayTypeChildrenToProps(o,c){let r=te({},c);return Object.keys(o).forEach(u=>{r=Re(te({},r),{[u]:o[u]})}),r}warnOnInvalidChildren(o,c){return Vm(Qm.some(r=>o.type===r),typeof o.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Qm.join(", ")} are allowed. Helmet does not support rendering <${o.type}> elements. Refer to our API for more information.`),Vm(!c||typeof c=="string"||Array.isArray(c)&&!c.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${o.type}>. Did you forget to wrap your children in braces? ( <${o.type}>{\`\`}</${o.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(o,c){let r={};return Ot.Children.forEach(o,u=>{if(!u||!u.props)return;const v=u.props,{children:f}=v,m=za(v,["children"]),y=Object.keys(m).reduce((h,E)=>(h[e0[E]||E]=m[E],h),{});let{type:b}=u;switch(typeof b=="symbol"?b=b.toString():this.warnOnInvalidChildren(u,f),b){case"Symbol(react.fragment)":c=this.mapChildrenToProps(f,c);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(u,r,y,f);break;default:c=this.mapObjectTypeChildren(u,c,y,f);break}}),this.mapArrayTypeChildrenToProps(r,c)}render(){const f=this.props,{children:o}=f,c=za(f,["children"]);let r=te({},c),{helmetData:u}=c;if(o&&(r=this.mapChildrenToProps(o,r)),u&&!(u instanceof xu)){const m=u;u=new xu(m.context,!0),delete r.helmetData}return u?Ot.createElement(Jm,Re(te({},r),{context:u.value})):Ot.createElement(Ep.Consumer,null,m=>Ot.createElement(Jm,Re(te({},r),{context:m})))}},la(hu,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),hu);const y0="modulepreload",b0=function(o){return"/"+o},Pm={},ei=function(c,r,u){let f=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const y=document.querySelector("meta[property=csp-nonce]"),b=(y==null?void 0:y.nonce)||(y==null?void 0:y.getAttribute("nonce"));f=Promise.allSettled(r.map(v=>{if(v=b0(v),v in Pm)return;Pm[v]=!0;const h=v.endsWith(".css"),E=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${E}`))return;const A=document.createElement("link");if(A.rel=h?"stylesheet":y0,h||(A.as="script"),A.crossOrigin="",A.href=v,b&&A.setAttribute("nonce",b),document.head.appendChild(A),h)return new Promise((S,L)=>{A.addEventListener("load",S),A.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${v}`)))})}))}function m(y){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=y,window.dispatchEvent(b),!b.defaultPrevented)throw y}return f.then(y=>{for(const b of y||[])b.status==="rejected"&&m(b.reason);return c().catch(m)})},Tp={html:`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CineVision Studios - Empresa líder en producción audiovisual. Ofrecemos servicios de video, fotografía y postproducción profesional.">
    <meta name="keywords" content="producción audiovisual, videografía, fotografía profesional, postproducción, cine, video corporativo">
    <meta name="author" content="CineVision Studios">
    <meta property="og:title" content="CineVision Studios - Producción Audiovisual Profesional">
    <meta property="og:description" content="Tu visión, nuestra pasión. Producción audiovisual profesional para contar tu historia.">
    <meta property="og:image" content="/demos/cinevision/preview.webp">
    <meta property="og:url" content="https://cinevision.com">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="canonical" href="https://cinevision.com">
    <title>CineVision Studios - Producción Audiovisual Profesional</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header class="hero" role="banner">
        <nav role="navigation" aria-label="Navegación principal">
            <div class="logo" role="img" aria-label="Logo de CineVision">CineVision</div>
            <button class="menu-toggle" aria-label="Menú" aria-expanded="false" aria-controls="nav-links">
                <i class="fas fa-bars" aria-hidden="true"></i>
            </button>
            <ul class="nav-links" id="nav-links">
                <li><a href="#servicios" aria-label="Ir a la sección de servicios">Servicios</a></li>
                <li><a href="#portfolio" aria-label="Ir a la sección de portfolio">Portfolio</a></li>
                <li><a href="#contacto" aria-label="Ir a la sección de contacto">Contacto</a></li>
            </ul>
        </nav>
        <div class="hero-content" role="main">
            <h1>Tu visión, nuestra pasión</h1>
            <p>Producción audiovisual profesional para contar tu historia</p>
            <a href="#contacto" class="cta-button" aria-label="Contactar para hablar de tu proyecto">Hablemos de tu proyecto</a>
        </div>
    </header>

    <section id="servicios" class="services" aria-labelledby="servicios-titulo">
        <h2 id="servicios-titulo">Nuestros Servicios</h2>
        <div class="services-grid">
            <article class="service-card" aria-labelledby="servicio-video">
                <div class="service-icon" aria-hidden="true">
                    <i class="fas fa-film"></i>
                </div>
                <h3 id="servicio-video">Producción de Video</h3>
                <p>Desde spots publicitarios hasta documentales corporativos</p>
            </article>
            <article class="service-card" aria-labelledby="servicio-foto">
                <div class="service-icon" aria-hidden="true">
                    <i class="fas fa-camera"></i>
                </div>
                <h3 id="servicio-foto">Fotografía Profesional</h3>
                <p>Sesiones fotográficas para eventos y productos</p>
            </article>
            <article class="service-card" aria-labelledby="servicio-post">
                <div class="service-icon" aria-hidden="true">
                    <i class="fas fa-edit"></i>
                </div>
                <h3 id="servicio-post">Postproducción</h3>
                <p>Edición, colorización y efectos visuales</p>
            </article>
        </div>
    </section>

    <section id="portfolio" class="portfolio" aria-labelledby="portfolio-titulo">
        <h2 id="portfolio-titulo">Nuestro Portfolio</h2>
        <div class="portfolio-grid">
            <article class="portfolio-item" aria-labelledby="proyecto-1">
                <img src="https://images.unsplash.com/photo-1493804714600-6edb1cd93080?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Proyecto de video corporativo" loading="lazy">
                <div class="overlay">
                    <h3 id="proyecto-1">Video Corporativo</h3>
                    <p>Producción audiovisual para empresa tecnológica</p>
                    <a href="#" class="portfolio-link" aria-label="Ver más sobre el proyecto de video corporativo">Ver más</a>
                </div>
            </article>
            <article class="portfolio-item" aria-labelledby="proyecto-2">
                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"" alt="Sesión fotográfica de producto" loading="lazy">
                <div class="overlay">
                    <h3 id="proyecto-2">Fotografía de Producto</h3>
                    <p>Sesión fotográfica para línea de cosméticos</p>
                    <a href="#" class="portfolio-link" aria-label="Ver más sobre el proyecto de fotografía de producto">Ver más</a>
                </div>
            </article>
            <article class="portfolio-item" aria-labelledby="proyecto-3">
                <img src="https://images.unsplash.com/photo-1631387019069-2ff599943f9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Proyecto de postproducción" loading="lazy">
                <div class="overlay">
                    <h3 id="proyecto-3">Postproducción</h3>
                    <p>Edición y efectos visuales para cortometraje</p>
                    <a href="#" class="portfolio-link" aria-label="Ver más sobre el proyecto de postproducción">Ver más</a>
                </div>
            </article>
        </div>
    </section>

    <section id="contacto" class="contact" aria-labelledby="contacto-titulo">
        <h2 id="contacto-titulo">Contacta con Nosotros</h2>
        <form class="contact-form" aria-label="Formulario de contacto">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" required aria-required="true">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required aria-required="true">
            </div>
            <div class="form-group">
                <label for="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" required aria-required="true"></textarea>
            </div>
            <button type="submit" class="cta-button" aria-label="Enviar mensaje">Enviar Mensaje</button>
        </form>
    </section>

    <footer role="contentinfo">
        <div class="footer-content">
            <section class="footer-section" aria-labelledby="footer-empresa">
                <h3 id="footer-empresa">CineVision Studios</h3>
                <p>Tu socio en producción audiovisual</p>
            </section>
            <section class="footer-section" aria-labelledby="footer-contacto">
                <h3 id="footer-contacto">Contacto</h3>
                <address>
                    <p><a href="mailto:info@cinevision.com">info@cinevision.com</a></p>
                    <p><a href="tel:+34123456789">+34 123 456 789</a></p>
                </address>
            </section>
            <section class="footer-section" aria-labelledby="footer-redes">
                <h3 id="footer-redes">Síguenos</h3>
                <div class="social-links">
                    <a href="#" aria-label="Instagram de CineVision"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                    <a href="#" aria-label="YouTube de CineVision"><i class="fab fa-youtube" aria-hidden="true"></i></a>
                    <a href="#" aria-label="Vimeo de CineVision"><i class="fab fa-vimeo-v" aria-hidden="true"></i></a>
                </div>
            </section>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 CineVision Studios. Todos los derechos reservados.</p>
        </div>
    </footer>
</body>
</html>`,css:`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

:root {
    --primary-color: #a8d5ba;
    --secondary-color: #7cba9b;
    --accent-color: #5c8d7c;
    --text-color: #2c3e50;
    --light-bg: #f0f7f4;
    --white: #ffffff;
}

body {
    line-height: 1.6;
    color: var(--text-color);
    overflow-x: hidden;
}

/* Header & Navigation */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-position: center;
    color: var(--white);
    position: relative;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5%;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: var(--white);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--white);
    font-size: 1.5rem;
    cursor: pointer;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

nav a:hover {
    color: var(--primary-color);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    padding: 0 1rem;
}

.hero-content h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    margin-bottom: 2rem;
}

/* Buttons */
.cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: var(--secondary-color);
    color: var(--white);
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
}

.cta-button:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Services Section */
.services {
    padding: clamp(3rem, 5vw, 5rem) 5%;
    background-color: var(--light-bg);
}

.services h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: var(--accent-color);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.service-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
}

.service-card:hover::before {
    opacity: 0.1;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.service-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: var(--light-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
}

.service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
    background: var(--primary-color);
}

.service-icon i {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--accent-color);
    transition: all 0.3s ease;
}

.service-card:hover .service-icon i {
    color: var(--white);
    transform: scale(1.1);
}

.service-card h3 {
    margin-bottom: 1rem;
    color: var(--accent-color);
    position: relative;
    z-index: 2;
}

.service-card p {
    color: var(--text-color);
    position: relative;
    z-index: 2;
}

/* Portfolio Section */
.portfolio {
    padding: clamp(3rem, 5vw, 5rem) 5%;
    background-color: var(--white);
}

.portfolio h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: var(--accent-color);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    aspect-ratio: 4/3;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.portfolio-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.portfolio-item:hover img {
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 2rem 1.5rem;
    color: var(--white);
    transform: translateY(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.portfolio-item:hover .overlay {
    transform: translateY(0);
}

.overlay h3 {
    font-size: 1.5rem;
}

.overlay p {
    font-size: 0.9rem;
    opacity: 0.9;
}

.portfolio-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--primary-color);
    color: var(--white);
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    align-self: flex-start;
}

.portfolio-link:hover {
    background: var(--secondary-color);
    transform: translateX(5px);
}

/* Contact Section */
.contact {
    padding: clamp(3rem, 5vw, 5rem) 5%;
    background-color: var(--light-bg);
}

.contact h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: var(--accent-color);
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(92, 141, 124, 0.1);
}

.contact-form textarea {
    height: 150px;
    resize: vertical;
}

/* Footer */
footer {
    background-color: var(--accent-color);
    color: var(--white);
    padding: clamp(2rem, 3vw, 3rem) 5% 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 2rem;
}

.footer-section h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: var(--white);
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    transition: all 0.3s ease;
}

.social-links a:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: clamp(0.8rem, 1.5vw, 1rem);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .services-grid,
    .portfolio-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: right 0.3s ease;
    }

    .nav-links.active {
        right: 0;
    }

    .hero-content {
        width: 90%;
    }

    .services-grid,
    .portfolio-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .social-links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    nav {
        padding: 1rem 5%;
    }

    .logo {
        font-size: 1.5rem;
    }

    .hero-content {
        width: 95%;
    }

    .service-card {
        padding: 1.5rem;
    }

    .contact-form {
        padding: 0;
    }
}`,js:`// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
}

// Add animation to service cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}`},x0=Object.freeze(Object.defineProperty({__proto__:null,cinevisionDemo:Tp},Symbol.toStringTag,{value:"Module"})),jp={html:`
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Cuadrícula Infinita</title>
    </head>
    <body>
        <header class="site-header">
            <h1 class="site-title">CREALAB</h1>
        </header>
        
        <div id="viewport">
            <div id="world"></div>
        </div>

    <nav class="bottom-menu">
        <a href="#about">ABOUT</a>
        <a href="#contacto">CONTACTO</a>
    </nav>

    <!-- Mensaje de bienvenida -->
    <div id="welcome-message" class="welcome-overlay">
        <div class="welcome-content">
            <div class="drag-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
                </svg>
            </div>
            <p class="welcome-text">¡Desplázate!</p>
        </div>
    </div>

    <!-- Modal de proyecto -->
    <div id="project-modal" class="modal-overlay">
        <div class="project-card">
            <button class="close-btn">×</button>
            <div class="project-image">
                <img id="modal-image" src="" alt="" />
            </div>
            <div class="project-info">
                <div class="project-name" id="modal-name">Proyecto 1</div>
                <div class="project-details">
                    <div class="project-year" id="modal-year">Año: 2024</div>
                    <div class="project-description" id="modal-description">Descripción del proyecto aquí</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal About -->
    <div id="about-modal" class="modal-overlay">
        <div class="about-card">
            <button class="close-btn">×</button>
            <div class="about-header">
                <h1 class="about-title">PROPULSA TU MARCA<br>HASTA EL INFINITO</h1>
            </div>
            <div class="about-content">
                <p class="about-description">
                    Somos una agencia de publicidad basada en Barcelona, especializados en fotografía de producto, 
                    branding digital y estrategias creativas que conectan marcas con sus audiencias de manera auténtica 
                    y memorable.
                </p>
            </div>
            <div class="about-projects">
                <div class="projects-grid" id="about-projects-grid">
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Contacto -->
    <div id="contact-modal" class="modal-overlay">
        <div class="contact-card">
            <button class="close-btn">×</button>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <span class="contact-value">hola@agencia.com</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-value">+34 123 456 789</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
</html>`,css:`* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /* Header con título */
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    z-index: 8000;
    pointer-events: none;
  }

  .site-title {
    font-family: 'Arial', sans-serif;
    font-weight: 900;
    font-size: 2.5rem;
    color: #000000;
    margin: 0;
    letter-spacing: -1px;
  }
  #viewport {
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }
  #world {
    /* 3×3 bloques, cada uno del tamaño del viewport */
    width: 300vw;
    height: 300vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    background: white;
  }
  .grid {
    /* Cada bloque es un grid 3×3 que ocupa todo el viewport */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;           /* aquí el gap que quieras */
    width: 100vw;
    height: 100vh;
    overflow: visible;
  }
  .item {
    position: relative;
    overflow: hidden;
    background: #222;
    display: block;
    width: 100%;
    height: 100%;
    border: 0px;
    user-select: none;              /* Previene selección de texto */
    -webkit-user-select: none;      /* Safari */
    -moz-user-select: none;         /* Firefox */
    -ms-user-select: none;          /* IE/Edge */

    transition: transform 0.2s ease;
    transform-origin: center center;
  }
  .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    user-select: none;              /* Previene selección de imagen */
    -webkit-user-select: none;      /* Safari */
    -moz-user-select: none;         /* Firefox */
    -ms-user-select: none;          /* IE/Edge */
    pointer-events: none;           /* Previene drag nativo de imagen */
    -webkit-user-drag: none;        /* Previene drag en Safari */
    -khtml-user-drag: none;         /* Previene drag en Konqueror */
    -moz-user-drag: none;           /* Previene drag en Firefox */
    -o-user-drag: none;             /* Previene drag en Opera */
    user-drag: none;                /* Previene drag estándar */
  }

#viewport {
    overflow: scroll;
    scrollbar-width: none;            /* Firefox */
    -ms-overflow-style: none;         /* IE 10+ */
    cursor: grab;
  }
  #viewport::-webkit-scrollbar {
    display: none;                    /* Chrome, Safari, Opera */
  }
  
  /* Cursor en estado de arrastre */
  #viewport.grabbing {
    cursor: grabbing;
  }
  /* Forzar grabbing en todo el viewport mientras arrastramos */
#viewport.grabbing,
#viewport.grabbing * {
  cursor: grabbing !important;
}

/* Cuando el drag ya está activo, no dejamos clicar sobre .item */
#viewport.drag-active .item {
  pointer-events: none;
}

/* bottom-menu */
.bottom-menu {
    position: fixed;
    left: 50%;
    bottom: 20px;                   
    transform: translateX(-50%);
    display: flex;
    gap: 20px;                      /* separación entre botones */
    background: rgba(255, 255, 255, 0.4); /* blanco translúcido */
    backdrop-filter: blur(8px);    /* efecto vidrio */
    border-radius: 50px;            /* "pill" muy redondeado */
    padding: 10px 30px;             /* espacio interior */
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 9999;                  /* muy por encima de todo */
    pointer-events: auto;           /* asegurar que se pueda hacer click */
}



.bottom-menu a {
    color: #000;
    text-decoration: none;
    font-family: 'Arial', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    padding: 8px 12px;
    border-radius: 30px;
    position: relative;
    z-index: 1;
  }

  /* Modal de proyecto */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .modal-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .project-card {
    background: white;
    width: 400px;
    height: 500px;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    transform: scale(0.7);
    transition: transform 0.3s ease;
  }

  .modal-overlay.active .project-card {
    transform: scale(1);
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: normal;
    line-height: 1;
    cursor: pointer;
    z-index: 10001;
    color: #333;
    transition: all 0.2s ease;
    font-family: Arial, sans-serif;
  }

  .close-btn:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }

  .project-image {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .project-info {
    padding: 20px;
    height: 200px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-name {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #2a2a2a;
    margin-bottom: 20px;
  }

  .project-details {
    margin-top: auto;
  }

  .project-year {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }

  .project-description {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #333;
    line-height: 1.4;
  }

  /* Modal About */
  .about-card {
    background: #2a2a2a;
    width: 90vw;
    height: 90vh;
    max-width: 1200px;
    max-height: 800px;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    transform: scale(0.7);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .modal-overlay.active .about-card {
    transform: scale(1);
  }

  .about-header {
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 40px 20px 40px;
  }

  .about-content {
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px 20px 60px;
  }

  .about-title {
    font-family: 'Arial', sans-serif;
    font-weight: 900;
    font-size: 4rem;
    color: white;
    text-align: center;
    line-height: 1.1;
    letter-spacing: -2px;
    margin: 0;
    text-transform: uppercase;
  }

  .about-description {
    font-family: 'Arial', sans-serif;
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    line-height: 1.6;
    margin: 0;
    font-weight: 400;
    max-width: 800px;
  }

  .about-projects {
    height: 40%;
    padding: 0 40px 40px 40px;
    overflow: hidden;
  }

  .projects-grid {
    display: flex;
    gap: 15px;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
    padding-bottom: 10px;
  }

  .projects-grid::-webkit-scrollbar {
    height: 8px;
  }

  .projects-grid::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  .projects-grid::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  .projects-grid::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .about-project-item {
    flex-shrink: 0;
    width: 200px;
    height: 120px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .about-project-item:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .about-project-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Responsive para pantallas más pequeñas */
  @media (max-width: 768px) {
    .about-title {
      font-size: 2.2rem;
    }
    
    .about-description {
      font-size: 1rem;
    }
    
    .about-card {
      width: 95vw;
      height: 95vh;
    }
    
    .about-header {
      padding: 20px 20px 10px 20px;
    }
    
    .about-content {
      padding: 0 30px 15px 30px;
    }
    
    .about-projects {
      padding: 0 20px 20px 20px;
    }
    
    .about-project-item {
      width: 150px;
      height: 90px;
    }
  }

  /* Modal Contacto */
  .contact-card {
    background: #2a2a2a;
    width: 350px;
    max-width: 90vw;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    transform: scale(0.7);
    transition: transform 0.3s ease;
  }

  .modal-overlay.active .contact-card {
    transform: scale(1);
  }

  .contact-content {
    padding: 50px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-label {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 2px;
  }

  .contact-value {
    font-family: 'Arial', sans-serif;
    font-size: 1.1rem;
    color: white;
    font-weight: 400;
  }

  /* Mensaje de bienvenida */
  .welcome-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9998;
    pointer-events: none;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.6s ease, visibility 0s linear 0.6s;
    background: rgba(0, 0, 0, 0.5);
  }

  .welcome-overlay.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s ease, visibility 0s linear 0.6s;
  }

  .welcome-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 25px 35px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
  }

  .drag-icon {
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .drag-icon svg {
    animation: dragAnimation 1s ease-in-out 1;
  }

  .welcome-text {
    font-family: 'Arial', sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    color: #ffffff;
    margin: 0;
  }

  @keyframes dragAnimation {
    0%, 100% {
      transform: scale(1) rotate(0deg);
    }
    25% {
      transform: scale(1.1) rotate(5deg);
    }
    75% {
      transform: scale(1.1) rotate(-5deg);
    }
  }

  /* Responsive para modal de contacto */
  @media (max-width: 768px) {
    .contact-card {
      width: 90vw;
      max-width: 350px;
      margin: 0 auto;
    }
    
    .contact-content {
      padding: 40px 20px;
    }
    
    .contact-info {
      gap: 18px;
    }
    
    .contact-value {
      font-size: 1rem;
    }
  }

  /* Responsive para el título */
  @media (max-width: 768px) {
    .site-header {
      padding: 15px 0;
    }
    
    .site-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .site-title {
      font-size: 1.5rem;
    }
  }

  /* Responsive para mensaje de bienvenida */
  @media (max-width: 768px) {
    .welcome-content {
      padding: 22px 30px;
      gap: 10px;
    }
    
    .drag-icon svg {
      width: 35px;
      height: 35px;
    }
    
    .welcome-text {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .welcome-content {
      padding: 20px 28px;
      gap: 8px;
    }
    
    .drag-icon svg {
      width: 32px;
      height: 32px;
    }
    
    .welcome-text {
      font-size: 0.95rem;
    }
  }
  `,js:`
const urls = [
    'https://images.unsplash.com/photo-1583306346437-f2143c0f11fc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1611488006019-052712bfb2c7?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1668046095310-37d901cf7e7e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1662569147750-ef722928ce08?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1749621245916-910ef8a23e9a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1711054824441-064a99073a0b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const projects = urls.map((url, i) => ({
    title: "Proyecto " + (i+1),
    imgSrc: url,
    url: '#',
    year: 2020 + i,
    description: "Descripción detallada del proyecto " + (i+1) + ". Este proyecto presenta una propuesta innovadora que combina creatividad y funcionalidad."
  }));
  
  // — Referencias al DOM —
  const viewport = document.getElementById('viewport');
  const world    = document.getElementById('world');
  
  // — Tamaños de bloque (viewport) —
  let blockW, blockH;
  
  // — Flags para drag vs click —
  let isMouseDown = false;
  let hasDragged  = false;
  let startX = 0, startY = 0;
  let scrollLeft = 0, scrollTop = 0;
  
  // — Crea un bloque 3×3 con los 9 items —
  function createGrid() {
    const grid = document.createElement('div');
    grid.className = 'grid';
  
    projects.forEach((proj, index) => {
      const a = document.createElement('Button');
      a.className = 'item';
      a.href = proj.url;
      a.dataset.projectIndex = index; // Para identificar el proyecto
  
            const img = document.createElement('img');
      img.dataset.src = proj.imgSrc;
      img.alt = proj.title;
      
      // Prevenir drag y selección en imágenes
      img.addEventListener('dragstart', (e) => e.preventDefault());
      img.addEventListener('selectstart', (e) => e.preventDefault());
      img.addEventListener('contextmenu', (e) => e.preventDefault());

      a.appendChild(img);
      grid.appendChild(a);
      
      // Agregar event listener para abrir modal
      a.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(proj);
      });
    });
  
    return grid;
  }
  
  // — Monta un mundo 3×3 de bloques —
  function buildWorld() {
    world.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      world.appendChild(createGrid());
    }
  }
  
  // — Centra el scroll en el bloque central —
  function resetScroll() {
    blockW = viewport.clientWidth;
    blockH = viewport.clientHeight;
    viewport.scrollLeft = blockW;
    viewport.scrollTop  = blockH;
  }
  
  // — Auto-recenter al desplazar fuera de la copia central —
  function onScroll() {
    if (viewport.scrollLeft <  blockW * 0.5) viewport.scrollLeft += blockW;
    if (viewport.scrollLeft >  blockW * 1.5) viewport.scrollLeft -= blockW;
    if (viewport.scrollTop  <  blockH * 0.5) viewport.scrollTop  += blockH;
    if (viewport.scrollTop  >  blockH * 1.5) viewport.scrollTop  -= blockH;
  }
  
  // — Lazy-loading de imágenes con IntersectionObserver —
  function lazyLoad() {
    const imgs = document.querySelectorAll('img[data-src]');
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          const img = ent.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, {
      root: viewport,
      rootMargin: '200px'
    });
  
    imgs.forEach(img => obs.observe(img));
  }
  
  // — Manejo del mensaje de bienvenida —
  let welcomeHidden = false;
  
  function hideWelcomeMessage() {
    if (!welcomeHidden) {
      const welcomeMsg = document.getElementById('welcome-message');
      if (welcomeMsg) {
        welcomeMsg.classList.add('hidden');
        welcomeHidden = true;
      }
    }
  }
  
  // Ocultar después de 1.8 segundos
  setTimeout(hideWelcomeMessage, 1500);
  
  // — Previene el scroll con rueda, dejando solo drag —
  viewport.addEventListener('wheel', e => e.preventDefault(), { passive: false });
  
  // — Drag-to-pan: inicia el drag —
  viewport.addEventListener('mousedown', e => {
    isMouseDown = true;
    hasDragged  = false;
    startX      = e.clientX;
    startY      = e.clientY;
    scrollLeft  = viewport.scrollLeft;
    scrollTop   = viewport.scrollTop;
    viewport.classList.add('grabbing');
    
    // Prevenir selección durante el drag
    e.preventDefault();
    document.body.style.userSelect = 'none';
  });
  
  // — Drag-to-pan: mientras mueves el ratón —
  viewport.addEventListener('mousemove', e => {
    if (!isMouseDown) return;
  
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
  
    // Si superamos 5px, consideramos que es un drag real
    if (!hasDragged && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      hasDragged = true;
      viewport.classList.add('drag-active');
      hideWelcomeMessage(); // Ocultar mensaje al empezar a arrastrar
    }
  
    if (hasDragged) {
      viewport.scrollLeft = scrollLeft - dx;
      viewport.scrollTop  = scrollTop  - dy;
      onScroll();
    }
  });
  
  // — Termina el drag (mouseup o salir del área) —
  ['mouseup', 'mouseleave'].forEach(evt =>
    viewport.addEventListener(evt, () => {
      isMouseDown = false;
      viewport.classList.remove('grabbing', 'drag-active');
      
      // Restaurar selección
      document.body.style.userSelect = '';
    })
  );
  
  // — Previene la navegación si hubo drag —
  viewport.addEventListener('click', e => {
    if (hasDragged) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);
  


  // — Inicialización al cargar el DOM —
  function init() {
    buildWorld();
    resetScroll();
    lazyLoad();
  
    // El scroll nativo sigue activo para el recenter automático
    viewport.addEventListener('scroll', onScroll);
  
    // Recalcula y centra al cambiar tamaño de ventana
    window.addEventListener('resize', resetScroll);
  }
  
  document.addEventListener('DOMContentLoaded', init);

  // — Funciones del Modal de Proyecto —
  function openModal(project) {
    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalName = document.getElementById('modal-name');
    const modalYear = document.getElementById('modal-year');
    const modalDescription = document.getElementById('modal-description');

    // Llenar el modal con los datos del proyecto
    modalImage.src = project.imgSrc;
    modalImage.alt = project.title;
    modalName.textContent = project.title;
    modalYear.textContent = "Año: " + project.year;
    modalDescription.textContent = project.description;

    // Mostrar el modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
  }

  function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
  }

  // — Funciones del Modal About —
  function openAboutModal() {
    const modal = document.getElementById('about-modal');
    const projectsGrid = document.getElementById('about-projects-grid');
    
    // Limpiar el grid de proyectos
    projectsGrid.innerHTML = '';
    
    // Agregar todas las imágenes de los proyectos
    projects.forEach((project, index) => {
      const projectItem = document.createElement('div');
      projectItem.className = 'about-project-item';
      
      const img = document.createElement('img');
      img.src = project.imgSrc;
      img.alt = project.title;
      
      projectItem.appendChild(img);
      
      // Agregar event listener para abrir el modal del proyecto
      projectItem.addEventListener('click', () => {
        closeAboutModal();
        setTimeout(() => openModal(project), 300); // Pequeño delay para suavizar la transición
      });
      
      projectsGrid.appendChild(projectItem);
    });
    
    // Mostrar el modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAboutModal() {
    const modal = document.getElementById('about-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // — Funciones del Modal de Contacto —
  function openContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners para cerrar los modales
  document.addEventListener('DOMContentLoaded', () => {
    const projectModal = document.getElementById('project-modal');
    const aboutModal = document.getElementById('about-modal');
    const contactModal = document.getElementById('contact-modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Cerrar con los botones X
    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.closest('#project-modal')) {
          closeModal();
        } else if (e.target.closest('#about-modal')) {
          closeAboutModal();
        } else if (e.target.closest('#contact-modal')) {
          closeContactModal();
        }
      });
    });

    // Cerrar al hacer clic fuera del modal
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });

    aboutModal.addEventListener('click', (e) => {
      if (e.target === aboutModal) {
        closeAboutModal();
      }
    });

    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        closeContactModal();
      }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (projectModal.classList.contains('active')) {
          closeModal();
        } else if (aboutModal.classList.contains('active')) {
          closeAboutModal();
        } else if (contactModal.classList.contains('active')) {
          closeContactModal();
        }
      }
    });

    // Conectar los botones del menú
    const aboutBtn = document.querySelector('a[href="#about"]');
    if (aboutBtn) {
      aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAboutModal();
      });
    }

    const contactBtn = document.querySelector('a[href="#contacto"]');
    if (contactBtn) {
      contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openContactModal();
      });
    }
  });`},S0=Object.freeze(Object.defineProperty({__proto__:null,crealabDemo:jp},Symbol.toStringTag,{value:"Module"})),Ap={html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Demo</title>
</head>
<body>
    <div class="container">
        <!-- Menú superior (visible en móvil) -->
        <nav class="top-menu">
            <ul class="main-menu">
                <li>SILAS LUMEN</li>
                <li class="active" data-section="work">WORK</li>
                <li data-section="information">INFORMATION</li>
            </ul>
        </nav>

        <!-- Menú izquierdo (visible en desktop) -->
        <nav class="left-menu">
            <ul class="main-menu">
                <li>SILAS LUMEN</li>
                <li class="active" data-section="work">WORK</li>
                <li data-section="information">INFORMATION</li>
            </ul>

            <!-- Lista de trabajos -->
            <div class="work-list">
                <div class="work-item active" data-work="1">
                    <div class="work-header-info">
                        <h3>BANGKOK</h3>
                        <span class="year">2022</span>
                    </div>
                </div>
                <div class="work-item" data-work="2">
                    <div class="work-header-info">
                        <h3>AZORES</h3>
                        <span class="year">2023</span>
                    </div>
                </div>
                <div class="work-item" data-work="3">
                    <div class="work-header-info">
                        <h3>NORWAY</h3>
                        <span class="year">2024</span>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Contenido derecho -->
        <main class="right-content">
            <!-- Sección de trabajo -->
            <div class="section-content" id="work-section">
                <!-- Grid de proyectos (visible en móvil) -->
                <div class="mobile-projects-grid">
                    <div class="mobile-project" data-work="1">
                        <h3>BANGKOK</h3>
                        <span class="year">2022</span>
                        <img src="https://images.unsplash.com/photo-1737985589623-5f5a8ca121c1?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bangkok">
                    </div>
                    <div class="mobile-project" data-work="2">
                        <h3>AZORES</h3>
                        <span class="year">2023</span>
                        <img src="https://images.unsplash.com/photo-1715341762953-d56eccc07e45?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Azores">
                    </div>
                    <div class="mobile-project" data-work="3">
                        <h3>NORWAY</h3>
                        <span class="year">2024</span>
                        <img src="https://images.unsplash.com/photo-1743341722429-7d93ffa5b1cd?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Norway">
                    </div>
                </div>

                <!-- Detalles de proyectos -->
                <div class="project-details">
                    <div class="work-content" id="work-1">
                        <header class="work-header">
                            <div>
                                <h2>BANGKOK</h2>
                                <span class="image-counter">Image 1 of 3</span>
                            </div>
                            <button class="details-toggle desktop-only">DETAILS</button>
                        </header>

                        <div class="details-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo in nunc aliquam tincidunt. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                            <p>Location: Yaowarat-Bangkok, Thailand<br>
                            Year: 2022</p>
                        </div>

                        <div class="carousel">
                            <img src="https://images.unsplash.com/photo-1737985589623-5f5a8ca121c1?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bangkok Image 1" class="carousel-image">
                            <img src="https://images.unsplash.com/photo-1737958448097-344fecc3187b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bangkok Image 2" class="carousel-image hidden">
                            <img src="https://images.unsplash.com/photo-1737958108322-43b24ea9bc18?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bangkok Image 3" class="carousel-image hidden">
                        </div>

                        <div class="project-navigation">
                            <span class="prev-project">PREV PROJECT</span>
                            <span class="next-project">NEXT PROJECT</span>
                        </div>
                    </div>

                    <div class="work-content hidden" id="work-2">
                        <header class="work-header">
                            <div>
                                <h2>AZORES</h2>
                                <span class="image-counter">Image 1 of 3</span>
                            </div>
                            <button class="details-toggle desktop-only">DETAILS</button>
                        </header>

                        <div class="details-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod magna eu lectus ultrices, 
                            at varius nisi dignissim. Nullam vehicula nisi vitae lectus ultricies consectetur.</p>
                            <p>Location: Azores, Portugal<br>
                            Year: 2023</p>
                        </div>

                        <div class="carousel">
                            <img src="https://images.unsplash.com/photo-1715341762953-d56eccc07e45?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Azores Image 1" class="carousel-image">
                            <img src="https://images.unsplash.com/photo-1715341762948-a3b3fdd9b352?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Azores Image 2" class="carousel-image hidden">
                            <img src="https://images.unsplash.com/photo-1712059201904-45cce6a36060?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Azores Image 3" class="carousel-image hidden">
                        </div>

                        <div class="project-navigation">
                            <span class="prev-project">PREV PROJECT</span>
                            <span class="next-project">NEXT PROJECT</span>
                        </div>
                    </div>

                    <div class="work-content hidden" id="work-3">
                        <header class="work-header">
                            <div>
                                <h2>NORWAY</h2>
                                <span class="image-counter">Image 1 of 3</span>
                            </div>
                            <button class="details-toggle desktop-only">DETAILS</button>
                        </header>

                        <div class="details-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod magna eu lectus ultrices, 
                            at varius nisi dignissim. Nullam vehicula nisi vitae lectus ultricies consectetur.</p>
                            <p>Location: Tromsø, Norway<br>
                            Year: 2024</p>
                        </div>

                        <div class="carousel">
                            <img src="https://images.unsplash.com/photo-1743341722429-7d93ffa5b1cd?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Norway Image 1" class="carousel-image">
                            <img src="https://images.unsplash.com/photo-1743341722729-637084048570?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Norway Image 2" class="carousel-image hidden">
                            <img src="https://images.unsplash.com/photo-1743341720492-ebbf33a967b5?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Norway Image 3" class="carousel-image hidden">
                        </div>

                        <div class="project-navigation">
                            <span class="prev-project">PREV PROJECT</span>
                            <span class="next-project">NEXT PROJECT</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sección de información -->
            <div class="section-content hidden" id="information-section">
                <div class="information-content">
                    <img src="https://images.unsplash.com/photo-1620304910158-5c9fd396eb6f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Information Image" class="information-image">
                    <div class="information-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo in nunc aliquam tincidunt. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                        <p>Nullam vehicula nisi vitae lectus ultricies consectetur. Maecenas euismod magna eu lectus ultrices, 
                        at varius nisi dignissim.</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>`,css:`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #FFFFFF;
    color: #000000;
}

.container {
    display: flex;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
}

/* Menú superior (móvil) */
.top-menu {
    display: none;
    width: 100%;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 1000;
    border-bottom: 1px solid #EEEEEE;
}

.top-menu .main-menu {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
}

.top-menu .main-menu li {
    flex: 1;
    text-align: center;
    padding: 8px 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 12px;
}

.top-menu .main-menu li.active {
    background-color: #F16704;
    color: white;
    padding: 8px 2px;
}

/* Grid de proyectos móvil */
.mobile-projects-grid {
    display: none;
    width: 100%;
    padding: 20px;
    margin-top: 80px;
}

.mobile-project {
    position: relative;
    margin-bottom: 30px;
    cursor: pointer;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.mobile-project h3 {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    font-size: 16px;
    font-weight: normal;
    z-index: 2;
    margin: 0;
}

.mobile-project .year {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    font-size: 14px;
    z-index: 2;
}

.mobile-project img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.mobile-project:hover img {
    transform: scale(1.05);
}

/* Menú izquierdo (desktop) */
.left-menu {
    width: 300px;
    padding: 20px;
    border-right: 1px solid #EEEEEE;
}

.main-menu {
    list-style: none;
    margin-bottom: 40px;
}

.main-menu li {
    padding: 6px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.main-menu li.active {
    background-color: #F16704;
    color: white;
}

/* Lista de trabajos */
.work-list {
    margin-top: 40px;
}

.work-item {
    margin-bottom: 10px;
    cursor: pointer;
    padding: 6px 10px;
    transition: background-color 0.3s ease;
}

.work-header-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.work-item h3 {
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}

.work-item .year {
    font-size: 12px;
    color: #666666;
}

.work-item.active {
    background-color: #F16704;
}

.work-item.active h3,
.work-item.active .year {
    color: white;
}

/* Contenido derecho */
.right-content {
    flex: 1;
    padding: 20px;
    position: relative;
}

.work-content {
    width: 100%;
}

.work-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.work-header h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 5px;
}

.image-counter {
    font-size: 12px;
    color: #666666;
    display: block;
}

.details-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #666666;
    transition: color 0.3s ease;
}

.details-toggle:hover {
    color: #F16704;
}

.details-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    margin-bottom: 20px;
    background-color: white;
    padding: 0 20px;
}

.details-panel.active {
    max-height: 500px;
    padding: 20px;
}

.details-panel p {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.5;
}

/* Carrusel */
.carousel {
    width: 100%;
    position: relative;
    cursor: pointer;
}

.carousel-image {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
}

/* Navegación entre proyectos */
.project-navigation {
    display: none;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 14px;
}

.prev-project,
.next-project {
    cursor: pointer;
    color: #666666;
}

.hidden {
    display: none;
}

/* Sección de información */
.information-content {
    padding: 20px;
}

.information-image {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
}

.information-text {
    max-width: 800px;
    margin: 0 auto;
}

.information-text p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.6;
}

/* Detalles de proyectos */
.project-details {
    display: block;
}

/* Media Queries para móvil */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
    }

    .left-menu,
    .desktop-only {
        display: none;
    }

    .top-menu {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        padding: 10px;
    }

    .mobile-projects-grid {
        display: block;
        margin-top: 50px;
        padding: 20px;
        height: calc(100vh - 50px);
        overflow-y: auto;
    }

    .right-content {
        padding: 0;
        height: 100vh;
        overflow: hidden;
    }

    .project-details {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 900;
        padding: 0;
        overflow-y: auto;
    }

    .work-content {
        padding-top: 50px;
    }

    .work-header {
        position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
        padding: 10px 20px;
        background: white;
        margin: 0;
        border-bottom: 1px solid #EEEEEE;
        z-index: 950;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .work-header h2 {
        font-size: 14px;
        margin: 0;
        text-align: right;
    }

    .work-header .image-counter {
        display: none;
    }

    .work-header .details-toggle {
        font-size: 12px;
        padding: 5px 10px;
        display: block;
        text-align: left;
    }

    .carousel {
        margin-top: 90px;
        width: 100%;
        transition: transform 0.3s ease;
    }

    .details-panel {
        display: block;
        position: fixed;
        top: 90px;
        left: 0;
        width: 100%;
        padding: 0 20px;
        background: white;
        z-index: 950;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }

    .details-panel.active {
        max-height: 500px;
        padding: 20px;
    }

    .details-panel.active + .carousel {
        transform: translateY(100%);
    }

    .project-navigation {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        background: white;
        border-top: 1px solid #EEEEEE;
        z-index: 950;
    }

    .information-content {
        padding: 70px 20px 20px;
    }
}`,js:`// Manejo de secciones
document.querySelectorAll('.main-menu li[data-section]').forEach(item => {
    item.addEventListener('click', () => {
        // Actualizar estado activo en el menú
        document.querySelectorAll('.main-menu li').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Mostrar la sección correspondiente
        const sectionId = item.dataset.section;
        document.querySelectorAll('.section-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(\`\${sectionId}-section\`).classList.remove('hidden');

        // Mostrar/ocultar la lista de trabajos
        const workList = document.querySelector('.work-list');
        if (sectionId === 'work') {
            workList.style.display = 'block';
        } else {
            workList.style.display = 'none';
        }
    });
});

// Manejo de trabajos
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => {
        // Actualizar estado activo en la lista
        document.querySelectorAll('.work-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Mostrar el contenido correspondiente
        const workId = item.dataset.work;
        document.querySelectorAll('.work-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(\`work-\${workId}\`).classList.remove('hidden');
    });
});

// Manejo de paneles de detalles
document.querySelectorAll('.details-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        const panel = e.target.closest('.work-content').querySelector('.details-panel');
        panel.classList.toggle('active');
    });
});

// Manejo de carruseles
document.querySelectorAll('.carousel').forEach(carousel => {
    let currentIndex = 0;
    const images = carousel.querySelectorAll('.carousel-image');
    const counter = carousel.parentElement.querySelector('.image-counter');

    const updateCounter = () => {
        counter.textContent = \`Image \${currentIndex + 1} of \${images.length}\`;
    };

    carousel.addEventListener('click', () => {
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('hidden');
        updateCounter();
    });
});

// Navegación entre proyectos
document.querySelectorAll('.prev-project').forEach(prev => {
    prev.addEventListener('click', () => {
        const currentWork = document.querySelector('.work-content:not(.hidden)');
        const currentId = parseInt(currentWork.id.split('-')[1]);
        const prevId = currentId > 1 ? currentId - 1 : document.querySelectorAll('.work-content').length;
        
        currentWork.classList.add('hidden');
        document.getElementById(\`work-\${prevId}\`).classList.remove('hidden');
        
        // Actualizar trabajo activo en la lista
        document.querySelectorAll('.work-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.work == prevId) {
                item.classList.add('active');
            }
        });
    });
});

document.querySelectorAll('.next-project').forEach(next => {
    next.addEventListener('click', () => {
        const currentWork = document.querySelector('.work-content:not(.hidden)');
        const currentId = parseInt(currentWork.id.split('-')[1]);
        const nextId = currentId < document.querySelectorAll('.work-content').length ? currentId + 1 : 1;
        
        currentWork.classList.add('hidden');
        document.getElementById(\`work-\${nextId}\`).classList.remove('hidden');
        
        // Actualizar trabajo activo en la lista
        document.querySelectorAll('.work-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.work == nextId) {
                item.classList.add('active');
            }
        });
    });
});

// Manejo de clicks en proyectos móviles
document.querySelectorAll('.mobile-project').forEach(project => {
    project.addEventListener('click', () => {
        const workId = project.dataset.work;
        
        // Ocultar el grid de proyectos
        document.querySelector('.mobile-projects-grid').style.display = 'none';
        
        // Mostrar los detalles del proyecto
        document.querySelector('.project-details').style.display = 'block';
        
        // Mostrar el contenido del proyecto
        document.querySelectorAll('.work-content').forEach(content => {
            content.classList.add('hidden');
        });
        const selectedWork = document.getElementById(\`work-\${workId}\`);
        selectedWork.classList.remove('hidden');
        
        // Añadir botón de retorno
        if (!document.querySelector('.back-to-projects')) {
            const backButton = document.createElement('button');
            backButton.className = 'back-to-projects';
            backButton.innerHTML = 'PROJECTS';
            backButton.style.cssText = 'position: fixed; top: 60px; left: 20px; z-index: 1000; background: white; border: none; padding: 10px; cursor: pointer; font-size: 14px;';
            document.body.appendChild(backButton);
            
            backButton.addEventListener('click', () => {
                // Ocultar los detalles del proyecto
                document.querySelector('.project-details').style.display = 'none';
                // Mostrar el grid de proyectos
                document.querySelector('.mobile-projects-grid').style.display = 'block';
                // Eliminar el botón de retorno
                backButton.remove();
            });
        }
    });
});`},E0=Object.freeze(Object.defineProperty({__proto__:null,portfolioDemo:Ap},Symbol.toStringTag,{value:"Module"})),w0={},vt=typeof import.meta!="undefined"&&w0?"/":"",ti={web:[{id:1,category:"final",title:"KUMO CREATIVE",titleMin:"Kumo Creative Project",slug:"kumo-creative-project",finished:!0,description:"Kumo Creative is a video production company. For this project, they asked me to help with the responsive development of the website. The site was already built, so I focused on making it look good on all devices.",previewImage:vt+"img/LandingPreview_KumoCreative.webp",video:vt+"vids/KumoCreativeProject.webm",poster:vt+"vids/PosterKumoCreativeProject.webp",url:"https://kumocreativeproject.com",keywords:"Kumo Creative, Kumo Creative Project, Video Producer, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Kumo Creative Project Website, Kumo Creative Project Website, Kumo Creative Project Website React, Kumo Creative Project Website HTML, Kumo Creative Project Website CSS, Kumo Creative Project Website JavaScript"},{id:2,category:"demo",title:"CREALAB",titleMin:"Crealab",slug:"crealab",finished:!0,description:"Crealab is an imaginary advertising and branding studio. This demo features an infinite grid of projects, with modals to view the details of each one. It's a more creative and different website, but simple at the same time",previewImage:vt+"img/LandingPreview_Crealab.webp",files:jp,keywords:"Crealab, Crealab Project, Research, Development, Software, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Crealab Project Website, Crealab Project Website Demo, Crealab Project Website React, Crealab Project Website HTML, Crealab Project Website CSS, Crealab Project Website JavaScript"},{id:3,category:"demo",title:"CINEVISION STUDIOS",titleMin:"CineVision Studios",slug:"cinevision-studios",finished:!0,description:"CineVision Studios is an imaginary indie studio that produces movies and series. This is a demo of their website where you can see their code. It's a simple and classic website with necessary data for the client.",previewImage:vt+"img/LandingPreview_CineVision.webp",files:Tp,keywords:"Video production, Videos, Movie Studio, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, CineVision Studios, CineVision Studios Website, CineVision Studios Website Demo, CineVision Studios Website React, CineVision Studios Website HTML, CineVision Studios Website CSS, CineVision Studios Website JavaScript"},{id:4,category:"demo",title:"PORTFOLIO DEMO",titleMin:"Portfolio",slug:"portfolio-demo",finished:!0,description:"This is a demo of a portfolio website. The images work as a carousel and the details are hidden in a modal. This solution is based on Esmeralda Devlin's portfolio.",previewImage:vt+"img/LandingPreview_Portfolio.webp",files:Ap,keywords:"Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Portfolio Demo, Portfolio Website, Portfolio Website Demo, Portfolio Website React, Portfolio Website HTML, Portfolio Website CSS, Portfolio Website JavaScript"}],games:[{id:5,title:"CONSTELLATIONS",titleMin:"Constellations",slug:"constellations",finished:!0,description:"This small Pygame game draws moving points and connects those that are within a certain distance. The user can adjust the speed, number of points, and connection distance. With Pygbag, it can run as a WebAssembly application.",previewImage:vt+"img/LandingPreview_Constellations.webp",video:vt+"vids/ProjectVideo_Constellations.webm",poster:vt+"img/LandingPreview_Constellations.webp",url:"/games/Constelations/build/web/index.html",git:"https://github.com/MarcBasas/Constelations_pygame",keywords:"Pygame, WebAssembly, Game, Portfolio, Video Game, Games Development, pygame, pywebview, pyinstaller, constellations pygame, constellations webassembly, constellations game, constellations portfolio, constellations pygame game, constellations webassembly game, constellations portfolio game"},{id:6,title:"CHESSEXCEL",titleMin:"ChessExcel",slug:"chessExcel",finished:!0,description:"This Excel-based chess game developed in VBA allows users to play chess in a different environment. Packaged as a workbook, it attempts to demonstrate Excel's capabilities.",previewImage:vt+"img/LandingPreview_ChessExcel.webp",video:vt+"vids/ChessExcell.webm",poster:vt+"img/LandingPreview_ChessExcel.webp",git:"https://github.com/MarcBasas/ChessExcel",keywords:"Excel, VBA, Game, Portfolio, Video Game, Games Development, Chess, Excel VBA, Excel VBA Game, Excel VBA Chess, Chess Excel, Chess Excel Game, Chess Excel VBA, Chess Excel VBA Game"},{id:7,title:"HOBO",titleMin:"Hobo",slug:"hobo",finished:!1,description:"Hobo is a 2D platformer game based on Unity developed in C# that procedurally generates a random map in each session, allowing players to run, jump and navigate through platforms to collect all the food items scattered throughout the level.",previewImage:vt+"img/LandingPreview_Hobo.webp",keywords:"Unity, C#, Game, Portfolio, Video Game, Games Development, Hobo, Unity C#, Unity C# Game, Unity C# Hobo, map generation, random map, platformer, 2D platformer"}]},T0="https://portfolio-admin-server-76sn.onrender.com";let el=null,Do=0;const j0=5*60*1e3,A0=(o=!1)=>Se(void 0,null,function*(){var c,r;if(!o&&el&&Date.now()-Do<j0)return el;try{console.log("DEBUG: Intentando cargar proyectos desde servidor...");const u=yield fetch(`${T0}/api/projects?t=${Date.now()}`,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},signal:AbortSignal.timeout(8e3)});if(!u.ok)throw new Error(`Error del servidor: ${u.status}`);const f=yield u.text();console.log("DEBUG: Código recibido del servidor, longitud:",f.length);const y={exports:{}}.exports,v=f.replace(/import\s+.*?from\s+.*?;?\n?/g,"").match(/export const projects = ({[\s\S]*?});/);if(console.log("DEBUG: Match encontrado:",!!v),v){console.log("DEBUG: Cargando demos...");const{cinevisionDemo:h}=yield ei(()=>Se(void 0,null,function*(){const{cinevisionDemo:L}=yield Promise.resolve().then(()=>x0);return{cinevisionDemo:L}}),[]),{crealabDemo:E}=yield ei(()=>Se(void 0,null,function*(){const{crealabDemo:L}=yield Promise.resolve().then(()=>S0);return{crealabDemo:L}}),void 0),{portfolioDemo:A}=yield ei(()=>Se(void 0,null,function*(){const{portfolioDemo:L}=yield Promise.resolve().then(()=>E0);return{portfolioDemo:L}}),void 0);console.log("DEBUG: Demos cargados exitosamente");const S=new Function("BASE","portfolioDemo","cinevisionDemo","crealabDemo","return "+v[1])("",A,h,E);return console.log("DEBUG: Proyectos procesados:",{web:(c=S.web)==null?void 0:c.length,games:(r=S.games)==null?void 0:r.length}),el=S,Do=Date.now(),S}else throw new Error("No se pudo extraer los datos de proyectos del servidor")}catch(u){return console.warn("ERROR CARGANDO DESDE SERVIDOR, USANDO FALLBACK ESTÁTICO:",u.message),el||(el=ti,Do=Date.now(),ti)}}),$m=()=>{el=null,Do=0},Mp=T.createContext(),No=()=>{const o=T.useContext(Mp);if(!o)throw new Error("useProjects debe usarse dentro de ProjectsProvider");return o},M0=({children:o})=>{const[c,r]=T.useState(ti),[u,f]=T.useState(!1),[m,y]=T.useState(null),[b,v]=T.useState(!1),h=(L=!1)=>Se(void 0,null,function*(){f(!0),y(null);try{const _=yield A0(L);r(X=>{const q=JSON.stringify(X),U=JSON.stringify(_);return q===U?X:_}),v(_!==ti)}catch(_){console.error("Error cargando proyectos:",_),y(_.message),r(ti),v(!1)}finally{f(!1)}}),E=()=>Se(void 0,null,function*(){$m(),yield h(!0)}),A=()=>Se(void 0,null,function*(){console.log("DEBUG: refreshAfterAdminChange ejecutado"),$m(),setTimeout(()=>Se(void 0,null,function*(){console.log("DEBUG: Ejecutando loadProjectsData después del timeout"),yield h(!0)}),1e3)});T.useEffect(()=>{h()},[]);const S={projects:c,loading:u,error:m,isFromServer:b,refresh:E,refreshAfterAdminChange:A,getProjectBySlug:L=>[...c.web,...c.games].find(X=>X.slug===L),getProjectById:L=>[...c.web,...c.games].find(X=>X.id===L)};return d.jsx(Mp.Provider,{value:S,children:o})};function Na(o=768){const[c,r]=T.useState(!1),[u,f]=T.useState(!1);return T.useEffect(()=>{const m=window.innerWidth<=o;r(m),f(!0);const y=()=>{const b=window.innerWidth<=o;r(b)};return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[o]),u?c:!1}const D0=()=>{const{pathname:o}=oa(),c=Na();return T.useEffect(()=>{const r=()=>{try{if((c||o==="/")&&(window.scrollTo(0,0),window.scrollTo({top:0,left:0,behavior:"instant"})),!c&&o==="/"){const f=document.querySelector(".left-column"),m=document.querySelector(".right-column");f&&(f.scrollTo({top:0,behavior:"instant"}),f.scrollTop=0),m&&(m.scrollTo({top:0,behavior:"instant"}),m.scrollTop=0)}if(c){const f=document.getElementById("mobile-scroll-container");f&&(f.scrollTo({top:0,behavior:"instant"}),f.scrollTop=0),typeof window!="undefined"&&window.scrollY>0&&(window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0)}c&&(document.querySelectorAll('[style*="overflow-y: auto"], [style*="overflow: auto"]').forEach(m=>{m.scrollTo({top:0,behavior:"instant"}),m.scrollTop=0}),document.body&&(document.body.scrollTop=0),document.documentElement&&(document.documentElement.scrollTop=0))}catch(f){console.warn("ScrollToTop: Error resetting scroll position",f);try{window.scrollTo(0,0)}catch(m){}}console.log(`ScrollToTop: ${c?"Mobile":"Desktop"} - Reset scroll for ${o}, window.scrollY = ${window.scrollY}`)};r();const u=setTimeout(r,100);return()=>clearTimeout(u)},[o]),null},Dp=T.createContext(),C0=({children:o})=>{const[c,r]=T.useState(!1),u=()=>r(!0),f=()=>r(!1),m=()=>r(!c);return d.jsx(Dp.Provider,{value:{showContact:c,openContact:u,closeContact:f,toggleContact:m},children:o})},Cu=()=>{const o=T.useContext(Dp);if(!o)throw new Error("useContact debe ser usado dentro de ContactProvider");return o},R0=({allProjects:o,onClose:c})=>{const{closeContact:r}=Cu(),u=()=>{r(),c()};return Qy.createPortal(d.jsx("div",{className:"header__mobile-menu",children:o.map(f=>d.jsx(_a,{to:`/project/${f.slug}/`,className:"header__mobile-menu-link",onClick:u,translate:"no",children:f.title},f.id))}),document.body)},O0=()=>{const[o,c]=T.useState(!1),r=oa(),{projects:u}=No(),f=[...u.web,...u.games],m=T.useRef(null),y=T.useRef(null),b=Na(),{closeContact:v}=Cu(),h=()=>{v(),c(!o)};return T.useEffect(()=>{const E=A=>{o&&m.current&&!m.current.contains(A.target)&&!y.current.contains(A.target)&&c(!1)};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[o]),T.useEffect(()=>{const E=A=>{var S;b&&o&&!((S=y.current)!=null&&S.contains(A.target))&&!A.target.closest(".header__mobile-menu-link")&&c(!1)};if(b)return document.addEventListener("click",E),()=>{document.removeEventListener("click",E)}},[b,o]),d.jsx("header",{className:"header",role:"banner","aria-label":"Portfolio header with navigation - Marc Basas - Web Developer Portfolio",children:d.jsxs("nav",{className:"header__nav",role:"navigation","aria-label":"Main navigation",itemScope:!0,itemType:"https://schema.org/SiteNavigationElement",children:[d.jsx(_a,{to:"/about/",className:"header__link",onClick:v,"aria-label":"Go to About page - Marc Basas Portfolio","aria-current":r.pathname==="/about"?"page":void 0,itemProp:"url",children:d.jsx("span",{itemProp:"name",translate:"no",children:"ABOUT"})}),!b&&d.jsx(_a,{to:"/",className:"header__link header__logo",onClick:v,"aria-label":"Go to Home page - Marc Basas Portfolio","aria-current":r.pathname==="/"?"page":void 0,itemProp:"url",children:d.jsx("img",{src:"/img/Logo_temporal_web_marc-03_converted.webp",alt:"Logo",style:{width:"64px",marginTop:"10px"}})}),d.jsxs("div",{className:"header__projects-container",itemScope:!0,itemType:"https://schema.org/ItemList",children:[d.jsx("button",{ref:y,className:"header__link",onClick:h,"aria-label":o?"Close projects list":"Show projects list","aria-expanded":o,"aria-controls":"projects-dropdown",itemProp:"name",translate:"no",children:b&&o?"CLOSE":"PROJECTS"}),o&&(b?d.jsx(R0,{allProjects:f,onClose:()=>c(!1)}):d.jsx("div",{ref:m,className:"header__projects-dropdown",id:"projects-dropdown",role:"menu","aria-label":"Projects list",children:f.map((E,A)=>d.jsxs(_a,{to:`/project/${E.slug}/`,className:"header__project-link",onClick:()=>{v(),c(!1)},role:"menuitem","aria-label":`Go to ${E.title} project - Marc Basas Portfolio`,itemProp:"itemListElement",itemScope:!0,itemType:"https://schema.org/ListItem",children:[d.jsx("span",{itemProp:"name",translate:"no",children:E.title}),d.jsx("meta",{itemProp:"position",content:A+1})]},E.id))}))]})]})})},Cp=()=>{const{showContact:o,toggleContact:c,closeContact:r}=Cu(),u=Na(),f=()=>{c()},m=y=>{y.target.classList.contains("contact-overlay")&&r()};return d.jsxs(d.Fragment,{children:[d.jsxs("footer",{className:"footer",role:"contentinfo","aria-label":"Portfolio footer - contact information and copyright - Marc Basas - Web Developer Portfolio",itemScope:!0,itemType:"https://schema.org/WPFooter",children:[d.jsx("div",{className:"footer__left",itemScope:!0,itemType:"https://schema.org/ContactPoint",children:d.jsx("button",{className:"footer_contact",onClick:f,"aria-label":"Show contact information and about details - Marc Basas Portfolio","aria-expanded":o,"aria-controls":"about-content",itemProp:"name",children:"CONTACT"})}),d.jsx("div",{className:"footer__right",itemScope:!0,itemType:"https://schema.org/CreativeWork",children:u?d.jsx(_a,{to:"/",className:"footer__copyright",onClick:r,"aria-label":"Go to Home page - Marc Basas Portfolio",itemProp:"url",children:"HOME"}):d.jsx("p",{className:"footer__copyright","aria-label":"Copyright Marc Basas Portfolio 2025",itemProp:"copyrightYear",children:"© 2025"})})]}),o&&d.jsx("div",{className:"contact-overlay",onClick:m,role:"dialog","aria-modal":"true","aria-labelledby":"contact-title",children:d.jsxs("div",{className:"contact-content",id:"about-content",itemScope:!0,itemType:"https://schema.org/ContactPoint",children:[d.jsx("h2",{id:"contact-title",className:"visually-hidden",itemProp:"name",children:"Marc Basas - Contact Information - Portfolio Details - Web Developer - REACT Developer - FrontEnd Developer - Web Designer - Game Developer"}),d.jsxs("p",{itemProp:"description",children:["For inquiries and orders:",d.jsx("br",{}),d.jsx("p",{children:d.jsx("br",{})}),d.jsxs("a",{href:"mailto:marcbasasdev@gmail.com",itemProp:"email",children:["marcbasasdev@gmail.com ",d.jsx("br",{})]}),d.jsxs("a",{href:"tel:+34615502988",itemProp:"telephone",children:["+34 615502988 ",d.jsx("br",{})]}),d.jsxs("a",{href:"https://github.com/MarcBasas",itemProp:"GitHub",target:"_blank",rel:"noopener noreferrer",children:["https://github.com/MarcBasas ",d.jsx("br",{})]})]}),d.jsx("p",{itemProp:"description",children:"¡Thanks for visiting!"})]})})]})},z0=()=>d.jsxs(C0,{children:[d.jsxs(Kl,{children:[d.jsx("html",{lang:"en"}),d.jsx("meta",{name:"theme-color",content:"#e5ff70"})]}),d.jsxs("div",{className:"layout",role:"document",children:[d.jsx(O0,{}),d.jsx("main",{role:"main",children:d.jsx(uy,{})}),d.jsx(Cp,{})]})]});var fu={exports:{}},du,Wm;function _0(){if(Wm)return du;Wm=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return du=o,du}var mu,Fm;function N0(){if(Fm)return mu;Fm=1;var o=_0();function c(){}function r(){}return r.resetWarningCache=c,mu=function(){function u(y,b,v,h,E,A){if(A!==o){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}u.isRequired=u;function f(){return u}var m={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:f,element:u,elementType:u,instanceOf:f,node:u,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:r,resetWarningCache:c};return m.PropTypes=m,m},mu}var Im;function B0(){return Im||(Im=1,fu.exports=N0()()),fu.exports}var L0=B0();const gt=al(L0),Co=({data:o})=>{const{title:c,description:r,previewImage:u,slug:f}=o;return d.jsxs(_a,{to:`/project/${f}/`,className:"project-card","aria-label":`View ${c} project - Marc Basas Portfolio - Web Developer Portfolio`,itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[d.jsxs("div",{className:"project-image-container",children:[d.jsx("img",{src:u,alt:`Preview of ${c} project - Marc Basas Portfolio - Web Developer Portfolio`,loading:"eager",decoding:"async",className:"project-image",itemProp:"image"}),d.jsx("div",{className:"overlay"})]}),d.jsxs("div",{className:"project-text",children:[d.jsx("h3",{itemProp:"name",children:c}),d.jsx("meta",{itemProp:"description",content:r})]})]})};Co.propTypes={data:gt.shape({title:gt.string.isRequired,description:gt.string.isRequired,previewImage:gt.string.isRequired,slug:gt.string.isRequired}).isRequired};const Fn=3,In=(...o)=>{typeof window!="undefined"&&window.__SCROLL_DEBUG__&&console.log("[scroll]",...o)},pu=(o,c)=>Array.from({length:c},()=>o).flat(),H0=()=>{const o=T.useRef(null),c=T.useRef(null),r=T.useRef(!1),u=T.useRef(!1),f=T.useRef(0),m=T.useRef(0),y=Na(),{projects:b}=No(),v=T.useMemo(()=>pu(b.web,Fn),[b.web]),h=T.useMemo(()=>pu(b.games,Fn),[b.games]),E=T.useMemo(()=>pu([...b.web,...b.games],Fn),[b.web,b.games]);return T.useEffect(()=>{if(y)return;const A=o.current,S=c.current;if(!A||!S)return;const L=de=>de.clientHeight*(de.children.length/Fn),_=(de,ie)=>{const he=((de-ie)%ie+ie)%ie;return ie+he},X=setTimeout(()=>{const de=L(A),ie=L(S);r.current=!0,u.current=!0,A.scrollTop=de,S.scrollTop=ie,f.current=A.scrollTop,m.current=S.scrollTop,In("init",{lch:de,rch:ie,leftTop:A.scrollTop,rightTop:S.scrollTop})},50),q=(de,ie,re,he,ye,Oe,ot)=>{if(Oe.current){Oe.current=!1,he.current=ie.scrollTop,In(de,"echo consumed",{top:ie.scrollTop});return}const F=L(ie),z=L(re),G=ie.scrollTop,P=G-he.current;he.current=G;const oe=_(re.scrollTop+P,z),g=re.scrollTop;oe!==re.scrollTop&&(ot.current=!0,re.scrollTop=oe,ye.current=oe);const R=_(G,F),k=R!==G;k&&(Oe.current=!0,ie.scrollTop=R,he.current=R),In(de,{delta:P.toFixed(2),srcTop:G.toFixed(2),srcWrap:k?`${G.toFixed(1)}→${R.toFixed(1)}`:"—",tgtBefore:g.toFixed(2),tgtAfter:oe.toFixed(2),srcCopyH:F,tgtCopyH:z})};let U=!1,J=!1,V=0;const I=()=>{V=0,U&&(U=!1,q("L",A,S,f,m,r,u)),J&&(J=!1,q("R",S,A,m,f,u,r))},Q=()=>{V===0&&(V=requestAnimationFrame(I))},fe=()=>{U=!0,Q()},ge=()=>{J=!0,Q()};return A.addEventListener("scroll",fe,{passive:!0}),S.addEventListener("scroll",ge,{passive:!0}),()=>{clearTimeout(X),V!==0&&cancelAnimationFrame(V),A.removeEventListener("scroll",fe),S.removeEventListener("scroll",ge)}},[y]),T.useEffect(()=>{if(!y)return;const A=document.getElementById("mobile-scroll-container");if(!A)return;const S=U=>U.clientHeight*(U.children.length/Fn),L=setTimeout(()=>{A.scrollTop=S(A)},50);let _=0;const X=()=>{_=0;const U=S(A);A.scrollTop>=2*U?(In("M wrap down",{from:A.scrollTop,to:A.scrollTop-U}),A.scrollTop-=U):A.scrollTop<U&&(In("M wrap up",{from:A.scrollTop,to:A.scrollTop+U}),A.scrollTop+=U)},q=()=>{_===0&&(_=requestAnimationFrame(X))};return A.addEventListener("scroll",q,{passive:!0}),()=>{clearTimeout(L),_!==0&&cancelAnimationFrame(_),A.removeEventListener("scroll",q)}},[y]),d.jsxs(d.Fragment,{children:[d.jsxs(Kl,{children:[d.jsx("title",{children:"Marc Basas - Web Developer & Game Developer Barcelona | Portfolio Frontend & Fullstack"}),d.jsx("meta",{name:"description",content:"Portfolio de Marc Basas, programador web autónomo en Barcelona. Especializado en desarrollo frontend y fullstack, servicios de programación web para empresas y proyectos personalizados. Descubre mis proyectos de desarrollo web y aplicaciones interactivas."}),d.jsx("meta",{name:"keywords",content:"programador autonomo, programador web autonomo, programador barcelona, portfolio programador, desarrollo web barcelona, programador freelance barcelona, servicios programacion web, frontend barcelona, fullstack barcelona, proyectos web barcelona, Marc Basas, desarrollador independiente"}),d.jsx("meta",{name:"author",content:"Marc Basas"}),d.jsx("meta",{property:"og:title",content:"Marc Basas - Programador Web Autónomo Barcelona | Portfolio"}),d.jsx("meta",{property:"og:description",content:"Portfolio de programador web autónomo en Barcelona. Proyectos de desarrollo frontend y fullstack, aplicaciones web interactivas y servicios de programación para empresas."}),d.jsx("meta",{property:"og:type",content:"website"}),d.jsx("meta",{property:"og:url",content:"https://www.marcbasas.com"}),d.jsx("meta",{property:"og:site_name",content:"Marc Basas - Programador Web Autónomo Barcelona"}),d.jsx("meta",{property:"og:locale",content:"es_ES"}),d.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),d.jsx("meta",{name:"twitter:title",content:"Marc Basas - Programador Web Autónomo Barcelona"}),d.jsx("meta",{name:"twitter:description",content:"Portfolio de programador web autónomo en Barcelona. Servicios de desarrollo frontend y fullstack para empresas y proyectos personalizados."}),d.jsx("meta",{name:"twitter:url",content:"https://www.marcbasas.com"}),d.jsx("link",{rel:"canonical",href:"https://www.marcbasas.com/"})]}),y?d.jsx("div",{id:"mobile-scroll-container",className:"mobile-landing-container",role:"main","aria-label":"Lista de proyectos",children:E.map((A,S)=>d.jsx(Co,{data:A,"aria-label":`Proyecto: ${A.title}`,translate:"no"},`mobile-${S}`))}):d.jsxs("div",{className:"landing-container",role:"main","aria-label":"Lista de proyectos",children:[d.jsx("div",{className:"column left-column",ref:o,role:"region","aria-label":"Proyectos web",children:v.map((A,S)=>d.jsx(Co,{data:A,"aria-label":`Proyecto web: ${A.title}`},`web-${S}`))}),d.jsx("div",{className:"column right-column",ref:c,role:"region","aria-label":"Proyectos de videojuegos",children:h.map((A,S)=>d.jsx(Co,{data:A,"aria-label":`Proyecto de videojuego: ${A.title}`},`game-${S}`))})]})]})};class k0 extends Ot.Component{constructor(c){super(c),this.state={hasError:!1,error:null}}static getDerivedStateFromError(c){return{hasError:!0,error:c}}componentDidCatch(c,r){console.error("LiveEditor Error Boundary caught an error:",c,r)}render(){var c;return this.state.hasError?d.jsxs("div",{className:"live-editor-error",children:[d.jsx("h3",{children:"Error en el Live Editor"}),d.jsx("p",{children:"Ha ocurrido un error al cargar el editor de código."}),d.jsxs("details",{style:{marginTop:"1rem",fontSize:"0.8rem",color:"#666"},children:[d.jsx("summary",{children:"Detalles del error"}),d.jsx("pre",{style:{marginTop:"0.5rem",whiteSpace:"pre-wrap"},children:(c=this.state.error)==null?void 0:c.toString()})]}),d.jsx("button",{onClick:()=>this.setState({hasError:!1,error:null}),style:{marginTop:"1rem",padding:"0.5rem 1rem",backgroundColor:"#1b1b1b",color:"#dbd9c3",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Intentar de nuevo"})]}):this.props.children}}const U0=T.lazy(()=>ei(()=>import("./LiveEditorDesktop-D_fzpxtv.js"),__vite__mapDeps([0,1,2]))),q0=T.lazy(()=>ei(()=>import("./LiveEditorMobile-KOYMFkth.js"),__vite__mapDeps([3,1,2]))),G0=({project:o})=>{const c=Na(),[r,u]=T.useState(!1),[f,m]=T.useState(!1);T.useEffect(()=>{typeof window!="undefined"&&typeof document!="undefined"&&!window.navigator.userAgent.includes("Chrome-Lighthouse")&&m(!0)},[]),T.useEffect(()=>{if(f){const b=setTimeout(()=>u(!0),200);return()=>clearTimeout(b)}},[f]);const y=()=>d.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"#666",minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--color-background)",border:"1px solid #ddd",borderRadius:"8px"},children:d.jsx("p",{children:"Loading Live Editor..."})});return!f||!r?d.jsx(y,{}):!o||!o.files?d.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"#666",minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--color-background)",border:"1px solid #ddd",borderRadius:"8px"},children:d.jsx("p",{children:"No hay demo disponible para este proyecto."})}):d.jsx(k0,{children:d.jsx(T.Suspense,{fallback:d.jsx(y,{}),children:c?d.jsx(q0,{project:o}):d.jsx(U0,{project:o})})})},Rp=({title:o,url:c})=>{const r=T.useRef(null);return T.useEffect(()=>{const u=f=>{console.log("Message from iframe:",f.data)};return window.addEventListener("message",u),()=>window.removeEventListener("message",u)},[]),d.jsxs("div",{className:"game-frame-container",role:"region","aria-label":`${o} game container`,itemScope:!0,itemType:"https://schema.org/VideoGame",children:[d.jsx("meta",{itemProp:"name",content:o}),d.jsx("meta",{itemProp:"gamePlatform",content:"Web Browser"}),d.jsx("iframe",{ref:r,src:c,title:`${o} - Game`,className:"game-frame",allow:"fullscreen",sandbox:"allow-scripts allow-same-origin allow-popups allow-pointer-lock allow-forms","aria-label":`${o} game content`,itemProp:"gameItem",loading:"eager"})]})};Rp.propTypes={title:gt.string.isRequired,url:gt.string.isRequired};const Oo=Ot.memo(function({src:c,poster:r,title:u="Video de Marc Basas"}){const f=T.useRef(null),m=T.useRef(null),[y,b]=T.useState(!1),[v,h]=T.useState(!1),[E,A]=T.useState(!1),[S,L]=T.useState(!1),_=T.useRef(null),[X,q]=T.useState(0),[U,J]=T.useState(!1),V=Na(),I=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,Q=T.useCallback(()=>{m.current&&(m.current.paused?(m.current.play(),b(!0)):(m.current.pause(),b(!1)))},[]),fe=T.useCallback(()=>{h(I?!!document.webkitFullscreenElement:!!document.fullscreenElement)},[I]),ge=T.useCallback(()=>{m.current&&(I?m.current.webkitDisplayingFullscreen?m.current.webkitExitFullscreen():m.current.webkitEnterFullscreen():document.fullscreenElement?document.exitFullscreen():f.current.requestFullscreen().catch(F=>{console.warn("Error al intentar pantalla completa:",F)}))},[I]),de=()=>{A(!0),_.current&&clearTimeout(_.current)},ie=()=>{_.current=setTimeout(()=>{A(!1)},1500)};T.useEffect(()=>{const F=z=>{var G;z.key==="Escape"&&(I&&((G=m.current)!=null&&G.webkitDisplayingFullscreen)?m.current.webkitExitFullscreen():document.fullscreenElement&&document.exitFullscreen())};return window.addEventListener("keydown",F),()=>{window.removeEventListener("keydown",F)}},[I]),T.useEffect(()=>{const F=m.current;if(!F)return;const z=()=>b(!0),G=()=>b(!1),P=()=>h(!0),oe=()=>h(!1);return F.addEventListener("play",z),F.addEventListener("pause",G),I?(F.addEventListener("webkitbeginfullscreen",P),F.addEventListener("webkitendfullscreen",oe),document.addEventListener("webkitfullscreenchange",fe)):document.addEventListener("fullscreenchange",fe),()=>{F.removeEventListener("play",z),F.removeEventListener("pause",G),I?(F.removeEventListener("webkitbeginfullscreen",P),F.removeEventListener("webkitendfullscreen",oe),document.removeEventListener("webkitfullscreenchange",fe)):document.removeEventListener("fullscreenchange",fe)}},[fe,I]),T.useEffect(()=>()=>{_.current&&clearTimeout(_.current)},[]),T.useEffect(()=>{const F=m.current;if(!F)return;const z=()=>{U||q(F.currentTime/F.duration||0)};return F.addEventListener("timeupdate",z),F.addEventListener("loadedmetadata",z),()=>{F.removeEventListener("timeupdate",z),F.removeEventListener("loadedmetadata",z)}},[U]);const re=F=>{const G=F.target.getBoundingClientRect(),P=F.touches?F.touches[0].clientX-G.left:F.clientX-G.left,oe=Math.max(0,Math.min(1,P/G.width));m.current&&m.current.duration&&(m.current.currentTime=oe*m.current.duration),q(oe)},he=F=>{J(!0),re(F),window.addEventListener("mousemove",ye),window.addEventListener("mouseup",Oe),window.addEventListener("touchmove",ye),window.addEventListener("touchend",Oe)},ye=F=>{re(F)},Oe=F=>{re(F),J(!1),window.removeEventListener("mousemove",ye),window.removeEventListener("mouseup",Oe),window.removeEventListener("touchmove",ye),window.removeEventListener("touchend",Oe)},ot=()=>{L(!0)};return d.jsxs("section",{className:`video-player-container${v?" fullscreen":""}`,"aria-label":"Reproductor de video de Marc Basas",lang:"es",tabIndex:-1,role:"region",itemScope:!0,itemType:"https://schema.org/VideoObject",children:[d.jsx("meta",{itemProp:"author",content:"Marc Basas"}),d.jsxs("div",{className:"video-wrapper",ref:f,onMouseEnter:V?void 0:de,onMouseLeave:V?void 0:ie,onTouchStart:V?de:void 0,onTouchEnd:V?ie:void 0,children:[S?d.jsx("div",{className:"video-error-fallback",role:"alert",style:{color:"red",width:"100%",textAlign:"center",padding:"2rem"},children:"No se pudo cargar el video. Por favor, inténtalo más tarde."}):d.jsx("video",{ref:m,src:c,poster:r,className:"video-element",autoPlay:!0,muted:!0,playsInline:!0,controls:!1,title:u,"aria-label":u,tabIndex:0,itemProp:"contentUrl",onError:ot}),!S&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"video-progress-bar",onClick:re,onMouseDown:he,style:{position:"absolute",left:0,right:0,bottom:0,height:"4px",cursor:"pointer",zIndex:10},role:"slider","aria-valuenow":X*100,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0,children:[d.jsx("div",{className:"video-progress-bar-inner",style:{width:`${X*100}%`,height:"100%",background:"var(--color-menu)",transition:U?"none":"width 0.35s cubic-bezier(0.4,0,0.2,1)"}}),d.jsx("div",{className:"video-progress-bar-bg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",background:"rgba(19,19,19,0.3)",pointerEvents:"none"}})]}),d.jsxs("nav",{className:`video-controls${v?" fullscreen":""}${E?" visible":""}`,"aria-label":"Controles de video",tabIndex:-1,children:[d.jsx("div",{className:"controls-left",children:d.jsx("button",{onClick:Q,className:"video-btn","aria-label":y?"Pausar video":"Reproducir video",title:y?"Pausar video":"Reproducir video",type:"button",tabIndex:0,role:"button",children:y?"[  PAUSE  ]":"[  PLAY  ]"})}),d.jsx("div",{className:"controls-right",children:d.jsx("button",{onClick:ge,className:"video-btn","aria-label":"Pantalla completa",title:"Pantalla completa",type:"button",tabIndex:0,role:"button",children:"[  FULLSCREEN  ]"})})]})]})]})]})});Oo.propTypes={src:gt.string.isRequired,poster:gt.string,title:gt.string};Oo.defaultProps={poster:"",title:"Video de Marc Basas"};const Op=({previewImage:o})=>d.jsx(d.Fragment,{children:d.jsxs("div",{className:"project-notfound-container",children:[d.jsx("div",{className:"project-notfound-background",style:{backgroundImage:o?`url(${o})`:"none"}}),d.jsxs("div",{className:"project-notfound-content",children:[d.jsx("h1",{className:"project-notfound-title",children:"Proyecto en desarrollo."}),d.jsx("p",{className:"project-notfound-text",children:"El proyecto que buscas aún está en construcción."})]})]})});Op.propTypes={previewImage:gt.string};const zp=()=>d.jsxs(d.Fragment,{children:[d.jsx(Kl,{children:d.jsx("meta",{name:"robots",content:"noindex, nofollow"})}),d.jsxs("div",{className:"notfound-container",children:[d.jsx("h1",{className:"notfound-title",children:"Page not found"}),d.jsx("p",{className:"notfound-text",children:"Sorry, the page you are looking for does not exist or has been deleted."})]})]}),_p=({style:o})=>d.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:o,"aria-hidden":"true",focusable:"false",children:[d.jsx("path",{d:"M10.5 2H14v3.5M6 10l7.5-7.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),d.jsx("rect",{x:"2",y:"6",width:"8",height:"8",rx:"2",stroke:"currentColor",strokeWidth:"1.5"})]}),Np=({url:o})=>d.jsxs("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:["Visit the web ",d.jsx(_p,{style:{marginLeft:4,verticalAlign:"middle"}})]});Np.propTypes={url:gt.string.isRequired};const Bp=({git:o})=>d.jsxs("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:["Here is the code in GitHub ",d.jsx(_p,{style:{marginLeft:4,verticalAlign:"middle"}})]});Bp.propTypes={git:gt.string.isRequired};const Y0=()=>{var y,b,v;const{slug:o}=Pg(),{projects:c}=No(),r=T.useMemo(()=>[...c.web,...c.games].find(A=>A.slug===o),[o,c]),u=T.useMemo(()=>r?Re(te({},r),{files:r.files?te({},r.files):void 0}):null,[r==null?void 0:r.id,r==null?void 0:r.title,(y=r==null?void 0:r.files)==null?void 0:y.html,(b=r==null?void 0:r.files)==null?void 0:b.css,(v=r==null?void 0:r.files)==null?void 0:v.js,r==null?void 0:r.slug,r==null?void 0:r.category]),f=Na();if(!r)return d.jsx(zp,{});const m=r.slug==="constellations";return d.jsxs("div",{className:"project-page",role:"main","aria-label":`${r.title} - Project Details - Marc Basas Portfolio`,itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[d.jsxs(Kl,{children:[d.jsxs("title",{translate:"no",children:[r.title," | Marc Basas"]}),d.jsx("meta",{name:"description",content:r.description}),d.jsx("meta",{name:"keywords",content:r.keywords}),d.jsx("meta",{name:"author",content:"Marc Basas"}),d.jsx("meta",{property:"og:title",content:`${r.title} | Portfolio de Marc Basas`}),d.jsx("meta",{property:"og:description",content:r.description}),r.previewImage&&d.jsx("meta",{property:"og:image",content:r.previewImage}),d.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),d.jsx("meta",{name:"twitter:title",content:`${r.title} | Portfolio de Marc Basas`}),d.jsx("meta",{name:"twitter:description",content:r.description}),r.previewImage&&d.jsx("meta",{name:"twitter:image",content:r.previewImage}),d.jsx("link",{rel:"canonical",href:`https://www.marcbasas.com/project/${r.slug}/`})]}),d.jsxs("div",{className:"project-content",itemScope:!0,itemType:"https://schema.org/WebPage",children:[d.jsx("h1",{className:"project-title",itemProp:"name",translate:"no",children:r.titleMin}),d.jsx("p",{className:"project-description",itemProp:"description",children:r.description}),d.jsxs("div",{className:"project-dynamic-content",children:[r.finished===!1&&d.jsx(Op,{previewImage:r.previewImage}),r.finished!==!1&&d.jsxs(d.Fragment,{children:[m&&f&&r.video&&d.jsx(Oo,{src:r.video,poster:r.poster||r.previewImage}),!m&&r.video&&d.jsx(Oo,{src:r.video,poster:r.poster||r.previewImage}),r.category==="demo"&&r.files&&d.jsx(G0,{project:u}),(m&&!f||!m&&r.url&&r.slug&&r.category!=="demo"&&r.category!=="final")&&d.jsx(Rp,{title:r.title,url:r.url}),d.jsxs("div",{className:"project-links-row",children:[r.git&&r.category===void 0&&d.jsx(Bp,{git:r.git}),r.category==="final"&&r.url&&d.jsx(Np,{url:r.url})]})]})]})]})]})},V0=Ot.memo(Y0),X0=()=>{const o=Na();return d.jsxs(d.Fragment,{children:[d.jsxs(Kl,{children:[d.jsx("title",{children:"About | Marc Basas - Web Developer & Game Developer Barcelona"}),d.jsx("meta",{name:"description",content:"Conoce a Marc Basas, programador web autónomo en Barcelona especializado en desarrollo frontend y fullstack. Experiencia en servicios de programación web para empresas, desarrollo de aplicaciones a medida y soluciones digitales. Freelancer con formación en desarrollo web y videojuegos."}),d.jsx("meta",{name:"keywords",content:"programador autonomo barcelona, programador web autonomo, Marc Basas, freelancer barcelona, desarrollador independiente barcelona, servicios programacion web barcelona, experiencia programador web, formacion desarrollo web, programador frontend barcelona, programador fullstack barcelona"}),d.jsx("meta",{name:"author",content:"Marc Basas"}),d.jsx("meta",{property:"og:title",content:"About | Marc Basas - Web Developer & Game Developer Barcelona"}),d.jsx("meta",{property:"og:description",content:"Conoce la experiencia y formación de Marc Basas, programador web autónomo en Barcelona. Especializado en desarrollo frontend y fullstack, con servicios de programación para empresas."}),d.jsx("meta",{property:"og:type",content:"website"}),d.jsx("meta",{property:"og:url",content:"https://www.marcbasas.com/about"}),d.jsx("meta",{property:"og:site_name",content:"Marc Basas - Programador Web Autónomo Barcelona"}),d.jsx("meta",{property:"og:locale",content:"es_ES"}),d.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),d.jsx("meta",{name:"twitter:title",content:"About | Marc Basas - Web Developer & Game Developer Barcelona"}),d.jsx("meta",{name:"twitter:description",content:"Programador web autónomo en Barcelona con experiencia en desarrollo frontend y fullstack. Servicios de programación web para empresas y proyectos personalizados."}),d.jsx("meta",{name:"twitter:url",content:"https://www.marcbasas.com/about"}),d.jsx("link",{rel:"canonical",href:"https://www.marcbasas.com/about/"})]}),d.jsxs("main",{className:`about-page${o?" about-page--mobile":""}`,role:"main","aria-label":"About Marc Basas - Professional Background and Experience - Web Developer Portfolio",itemScope:!0,itemType:"https://schema.org/AboutPage",children:[d.jsxs("div",{className:"about-content",itemScope:!0,itemType:"https://schema.org/Person",children:[d.jsxs("section",{className:"about-section1","aria-labelledby":"about-title",itemProp:"description",children:[d.jsx("h2",{id:"about-title",itemProp:"name",children:"About"}),d.jsx("p",{children:"I'm a freelance web developer based in Barcelona, specializing in frontend and fullstack development. I create functional websites using fundamental technologies like HTML, CSS, and JavaScript, along with modern tools like React, Angular, or Vue when they add value and efficiency to the project."}),d.jsx("p",{children:"As a freelance developer, I focus on providing practical solutions that help businesses and creatives materialize their projects."}),d.jsx("p",{children:"In my free time, I develop small games with Unity, Pygame, or pure JavaScript for fun."}),d.jsx("p",{children:"I also worked for two years at a consulting company. The first year I developed backend systems in Java, and the second year I worked on web applications with React and Node.js from Figma designs. This experience solidified me as a web developer before becoming a freelancer."})]}),d.jsxs("section",{className:"about-section2","aria-labelledby":"experience-title",itemProp:"knowsAbout",children:[d.jsx("h2",{id:"experience-title",itemProp:"jobTitle",children:"Education and Experience"}),d.jsx("p",{children:"2024–2025, Currently working as a freelance web developer in Barcelona."}),d.jsxs("p",{children:["2023-2024, NTTDATA",d.jsx("br",{}),"Frontend Developer. ",d.jsx("br",{}),"Developed web applications using React, JavaScript/TypeScript. Collaborated with design and backend teams to ensure seamless UX/UI."]}),d.jsxs("p",{children:["2022-2023, NTTDATA",d.jsx("br",{}),"Backend Developer. ",d.jsx("br",{}),"Built microservices with Spring Boot, Apache Kafka, and MongoDB. Automated CI/CD pipelines with Jenkins for deployment."]}),d.jsxs("p",{children:["2023–Present, Universitat Oberta de Catalunya",d.jsx("br",{}),"Master's Degree in Design and Programming of Video Games."]}),d.jsxs("p",{children:["2015 - 2019, Universitat de Vic",d.jsx("br",{}),"Bachelor’s Degree in Multimedia, Applications and Video Games."]})]})]}),d.jsx("div",{className:"about-image-container",children:d.jsx("img",{src:"/img/About_img.webp",alt:"",className:"about-image",itemProp:"image"})})]}),d.jsx(Cp,{})]})},Q0=o=>Se(void 0,null,function*(){try{const c=localStorage.getItem("adminToken"),r=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/save-projects",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({projects:o})});if(!r.ok)throw new Error("Error al guardar los proyectos");return yield r.json()}catch(c){throw console.error("Error:",c),c}}),Z0=o=>Se(void 0,null,function*(){try{const c=localStorage.getItem("adminToken"),r=new FormData;r.append("image",o);const u=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/upload-image",{method:"POST",headers:{Authorization:`Bearer ${c}`},body:r});if(!u.ok){const f=yield u.json();throw new Error(f.error||"Error al subir la imagen")}return yield u.json()}catch(c){throw console.error("Error uploading image:",c),c}}),K0=o=>Se(void 0,null,function*(){try{const c=localStorage.getItem("adminToken"),r=new FormData;r.append("video",o);const u=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/upload-video",{method:"POST",headers:{Authorization:`Bearer ${c}`},body:r});if(!u.ok){const f=yield u.json();throw new Error(f.error||"Error al subir el video")}return yield u.json()}catch(c){throw console.error("Error uploading video:",c),c}}),J0=(o,c)=>Se(void 0,null,function*(){try{const r=localStorage.getItem("adminToken"),u=new FormData;u.append("demoFile",o),u.append("slug",c);const f=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/upload-demo",{method:"POST",headers:{Authorization:`Bearer ${r}`},body:u});if(!f.ok){const m=yield f.json();throw new Error(m.error||"Error al subir el archivo demo")}return yield f.json()}catch(r){throw console.error("Error uploading demo:",r),r.message&&r.message.includes("demo:")?new Error(`Error en l'arxiu demo: ${r.message}`):r}}),P0=()=>Se(void 0,null,function*(){try{const o=localStorage.getItem("adminToken"),c=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/backups",{method:"GET",headers:{Authorization:`Bearer ${o}`}});if(!c.ok)throw new Error("Error al cargar los backups");return yield c.json()}catch(o){throw console.error("Error:",o),o}}),$0=o=>Se(void 0,null,function*(){try{const c=localStorage.getItem("adminToken"),r=yield fetch(`https://portfolio-admin-server-76sn.onrender.com/api/admin/backups/${o}/restore`,{method:"POST",headers:{Authorization:`Bearer ${c}`,"Content-Type":"application/json"}});if(!r.ok){const u=yield r.json();throw new Error(u.error||"Error al restaurar el backup")}return yield r.json()}catch(c){throw console.error("Error:",c),c}}),W0=({onLogin:o})=>{const[c,r]=T.useState(""),[u,f]=T.useState(!1),[m,y]=T.useState(""),b=v=>Se(void 0,null,function*(){v.preventDefault(),f(!0),y("");try{const h=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:c})}),E=yield h.json();h.ok?(localStorage.setItem("adminToken",E.token),localStorage.setItem("adminTokenExpiry",Date.now()+E.expiresIn),o(E.token)):y(E.error||"PIN incorrecto")}catch(h){y("Error de conexión. Verifica que el servidor esté funcionando.")}finally{f(!1)}});return d.jsx("div",{className:"admin-login",children:d.jsxs("div",{className:"admin-login__container",children:[d.jsx("h1",{className:"admin-login__title",children:"PANELL D'ADMINISTRACIÓ"}),d.jsxs("form",{onSubmit:b,className:"admin-login__form",children:[d.jsx("div",{className:"admin-login__input-group",children:d.jsx("input",{type:"password",value:c,onChange:v=>r(v.target.value),placeholder:"PIN d'accés",className:"admin-login__input",required:!0,autoFocus:!0})}),m&&d.jsx("div",{className:"admin-login__error",children:m}),d.jsx("button",{type:"submit",className:"admin-login__button",disabled:u,children:u?"Verificant...":"ACCEDIR"})]})]})})},F0=()=>{const[o,c]=T.useState(!1),[r,u]=T.useState(null),{projects:f,refreshAfterAdminChange:m}=No(),[y,b]=T.useState(f),[v,h]=T.useState(!1),[E,A]=T.useState(null),[S,L]=T.useState({type:"web",category:"final",title:"",titleMin:"",slug:"",finished:!0,description:"",previewImage:"",video:"",poster:"",url:"",git:"",keywords:"",files:""}),[_,X]=T.useState({previewImage:!1,video:!1,poster:!1,demo:!1}),[q,U]=T.useState(!1),[J,V]=T.useState([]),[I,Q]=T.useState(!1);T.useEffect(()=>{Se(void 0,null,function*(){const R=localStorage.getItem("adminToken"),k=localStorage.getItem("adminTokenExpiry");if(R&&k&&Date.now()<parseInt(k))try{(yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/auth/validate",{method:"POST",headers:{Authorization:`Bearer ${R}`,"Content-Type":"application/json"}})).ok?(u(R),c(!0),ge()):(localStorage.removeItem("adminToken"),localStorage.removeItem("adminTokenExpiry"))}catch(Y){console.error("Error verificando token:",Y),localStorage.removeItem("adminToken"),localStorage.removeItem("adminTokenExpiry")}})},[]),T.useEffect(()=>{b(f)},[f]);const fe=g=>Se(void 0,null,function*(){u(g),c(!0),yield ge()}),ge=()=>Se(void 0,null,function*(){try{yield m(),console.log("PROYECTOS REFRESCADOS DESDE CONTEXTO EN ADMIN")}catch(g){console.error("Error refrescando proyectos:",g)}}),de=()=>{localStorage.removeItem("adminToken"),localStorage.removeItem("adminTokenExpiry"),u(null),c(!1)},ie=()=>{L({type:"web",category:"final",title:"",titleMin:"",slug:"",finished:!0,description:"",previewImage:"",video:"",poster:"",url:"",git:"",keywords:"",files:""}),X({previewImage:!1,video:!1,poster:!1,demo:!1}),A(null),h(!1)},re=g=>{const{name:R,value:k,type:Y,checked:Z}=g.target;L(ce=>{const $=Re(te({},ce),{[R]:Y==="checkbox"?Z:k});return R==="type"&&(k==="web"?($.category="final",$.git=""):k==="games"&&($.category="games",$.files="")),R==="finished"&&!Z&&($.video="",$.poster="",$.url="",$.git="",$.files=""),$})},he=g=>g.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),ye=g=>{const R=[...y.web,...y.games];return Math.max(...R.map(Y=>Y.id),0)+1},Oe=(g,R)=>Se(void 0,null,function*(){X(k=>Re(te({},k),{[R]:!0}));try{let k;switch(R){case"previewImage":case"poster":k=yield Z0(g);break;case"video":k=yield K0(g);break;case"demo":k=yield J0(g,S.slug||he(S.title));const Y=k.exportName||`${S.slug||he(S.title)}Demo`;L(Z=>Re(te({},Z),{files:Y}));break;default:throw new Error("Tipo de archivo no válido")}L(Y=>Re(te({},Y),{[R]:k.path})),alert(`${k.message}`)}catch(k){alert(`Error en pujar arxiu: ${k.message}`)}finally{X(k=>Re(te({},k),{[R]:!1}))}}),ot=g=>Se(void 0,null,function*(){if(g.preventDefault(),S.finished){if(S.type==="web"&&S.category==="final"){if(!S.video||!S.poster||!S.url){alert("Els projectes web finals han de tenir vídeo, poster i URL");return}}else if(S.type==="web"&&S.category==="demo"){if(!S.files){alert("Els projectes web demo han de tenir un arxiu de demo");return}}else if(S.type==="games"&&(!S.video||!S.poster||!S.url||!S.git)){alert("Els jocs han de tenir vídeo, poster, URL i GitHub");return}}const R=Re(te({},S),{id:E?E.id:ye(S.type),slug:S.slug||he(S.title)});S.finished?S.type==="web"?S.category==="final"?(delete R.files,delete R.git):S.category==="demo"&&(delete R.git,delete R.url,delete R.video,delete R.poster):S.type==="games"&&(delete R.files,R.category="games"):(delete R.video,delete R.poster,delete R.url,delete R.git,delete R.files),delete R.type;try{const k=te({},y);if(E){const Y=k[E.type],Z=Y.findIndex(ce=>ce.id===E.id);Z!==-1&&(Y[Z]=R)}else k[S.type]=[...k[S.type],R];yield Q0(k),b(k),m(),ie(),alert(E?"Projecte actualitzat correctament":"Projecte afegit correctament")}catch(k){alert("Error en desar el projecte: "+k.message)}}),F=(g,R)=>{A(Re(te({},g),{type:R}));let k="final";R==="web"&&g.files?k="demo":R==="games"&&(k="games"),L(Re(te({},g),{type:R,category:k,video:g.video||"",poster:g.poster||"",url:g.url||"",git:g.git||"",files:g.files||""})),h(!0)},z=(g,R)=>Se(void 0,null,function*(){var k;if(window.confirm("Estàs segur que vols eliminar aquest projecte?"))try{const Y=y[R].find(Te=>Te.id===g),Z=te({},y);Z[R]=Z[R].filter(Te=>Te.id!==g),b(Z);const ce=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/save-projects",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("adminToken")}`},body:JSON.stringify({projects:Z,deletedProject:Y})});if(!ce.ok)throw new Error("Error al eliminar el proyecto");const $=yield ce.json();m();let $e="Projecte eliminat correctament";(k=$.backup)!=null&&k.created&&($e+=`
Backup creat: ${$.backup.backupId}`),alert($e)}catch(Y){alert("Error en eliminar el projecte: "+Y.message)}}),G=()=>Se(void 0,null,function*(){Q(!0);try{const g=yield P0();V(g.backups||[])}catch(g){alert("Error carregant backups: "+g.message)}finally{Q(!1)}}),P=()=>Se(void 0,null,function*(){U(!0),yield G()}),oe=(g,R)=>Se(void 0,null,function*(){if(window.confirm(`Estàs segur que vols restaurar el projecte "${R}"?`))try{const k=yield $0(g);yield m(),alert(`Projecte "${R}" restaurat correctament`),U(!1)}catch(k){alert("Error restaurant el backup: "+k.message)}});return o?d.jsxs(d.Fragment,{children:[d.jsxs(Kl,{children:[d.jsx("title",{children:"Panell d'Administració - Portfolio"}),d.jsx("meta",{name:"robots",content:"noindex, nofollow"}),d.jsx("style",{children:`
          body {
            margin: 0;
            padding: 0;
            overflow: auto !important;
            height: auto !important;
          }
          #root {
            height: auto !important;
            overflow: visible !important;
          }
        `})]}),d.jsxs("div",{className:"admin-page",children:[d.jsxs("div",{className:"admin-header",children:[d.jsx("a",{href:"/",className:"btn-back-portfolio",children:"← TORNAR AL PORTFOLIO"}),d.jsx("h1",{children:"PANELL D'ADMINISTRACIÓ"}),d.jsxs("div",{className:"admin-header-actions",children:[d.jsx("button",{className:"btn-backup-history",onClick:P,title:"Veure historial de backups",children:"HISTORIAL"}),d.jsx("button",{className:"btn-logout",onClick:de,title:"Cerrar sesión",children:"SORTIR"})]})]}),v&&d.jsx("div",{className:"modal-overlay",children:d.jsxs("div",{className:"project-form-modal",children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h2",{children:E?"EDITAR PROJECTE":"AFEGIR NOU PROJECTE"}),d.jsx("button",{className:"btn-close",onClick:ie,children:"×"})]}),d.jsxs("form",{onSubmit:ot,className:"project-form",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Tipus:"}),d.jsxs("select",{name:"type",value:S.type,onChange:re,required:!0,children:[d.jsx("option",{value:"web",children:"Web"}),d.jsx("option",{value:"games",children:"Jocs"})]})]}),S.type==="web"&&d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Categoria:"}),d.jsxs("select",{name:"category",value:S.category,onChange:re,required:!0,children:[d.jsx("option",{value:"final",children:"Final"}),d.jsx("option",{value:"demo",children:"Demo"})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Títol:"}),d.jsx("input",{type:"text",name:"title",value:S.title,onChange:re,required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Títol Curt:"}),d.jsx("input",{type:"text",name:"titleMin",value:S.titleMin,onChange:re,required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Slug (URL):"}),d.jsx("input",{type:"text",name:"slug",value:S.slug,onChange:re,placeholder:"Es genera automàticament del títol"})]}),d.jsx("div",{className:"form-group",children:d.jsxs("label",{children:[d.jsx("input",{type:"checkbox",name:"finished",checked:S.finished,onChange:re}),"Projecte acabat"]})}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Descripció:"}),d.jsx("textarea",{name:"description",value:S.description,onChange:re,rows:"4",required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Imatge de previsualització:"}),d.jsx("input",{type:"text",name:"previewImage",value:S.previewImage,onChange:re,placeholder:"ex: img/LandingPreview_ElMeuProjecte.webp",required:!0}),d.jsxs("div",{className:"file-upload-simple",children:[d.jsxs("label",{className:"file-button",children:["Seleccionar arxiu",d.jsx("input",{type:"file",accept:"image/*",onChange:g=>g.target.files[0]&&Oe(g.target.files[0],"previewImage"),className:"file-input-hidden",disabled:_.previewImage})]}),d.jsx("span",{className:`file-status ${_.previewImage?"uploading":""}`,children:_.previewImage?"Pujant...":"Cap arxiu seleccionat"})]})]}),S.finished&&d.jsxs(d.Fragment,{children:[(S.type==="games"||S.type==="web"&&S.category==="final")&&d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Vídeo ",S.type==="games"||S.type==="web"&&S.category==="final"?"*":"(opcional)",":"]}),d.jsx("input",{type:"text",name:"video",value:S.video,onChange:re,placeholder:"ex: vids/ElMeuProjecte.webm",required:S.type==="games"||S.type==="web"&&S.category==="final"}),d.jsxs("div",{className:"file-upload-simple",children:[d.jsxs("label",{className:"file-button",children:["Seleccionar arxiu",d.jsx("input",{type:"file",accept:"video/*",onChange:g=>g.target.files[0]&&Oe(g.target.files[0],"video"),className:"file-input-hidden",disabled:_.video})]}),d.jsx("span",{className:`file-status ${_.video?"uploading":""}`,children:_.video?"Pujant...":"Cap arxiu seleccionat"})]})]}),(S.type==="games"||S.type==="web"&&S.category==="final")&&d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Poster del vídeo *:"}),d.jsx("input",{type:"text",name:"poster",value:S.poster,onChange:re,placeholder:"ex: vids/PosterElMeuProjecte.webp",required:!0}),d.jsxs("div",{className:"file-upload-simple",children:[d.jsxs("label",{className:"file-button",children:["Seleccionar arxiu",d.jsx("input",{type:"file",accept:"image/*",onChange:g=>g.target.files[0]&&Oe(g.target.files[0],"poster"),className:"file-input-hidden",disabled:_.poster})]}),d.jsx("span",{className:`file-status ${_.poster?"uploading":""}`,children:_.poster?"Pujant...":"Cap arxiu seleccionat"})]})]}),(S.type==="games"||S.type==="web"&&S.category==="final")&&d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"URL del projecte *:"}),d.jsx("input",{type:"url",name:"url",value:S.url,onChange:re,placeholder:"https://elmeuprojecte.com",required:!0})]}),S.type==="games"&&d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"URL de GitHub *:"}),d.jsx("input",{type:"url",name:"git",value:S.git,onChange:re,placeholder:"https://github.com/usuari/projecte",required:!0})]}),S.type==="web"&&S.category==="demo"&&d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Arxiu demo (.js) *:"}),d.jsxs("div",{className:"file-upload-simple",children:[d.jsxs("label",{className:"file-button",children:["Seleccionar arxiu",d.jsx("input",{type:"file",accept:".js",onChange:g=>g.target.files[0]&&Oe(g.target.files[0],"demo"),className:"file-input-hidden",disabled:_.demo})]}),d.jsx("span",{className:`file-status ${_.demo?"uploading":""}`,children:_.demo?"Pujant arxiu demo...":"Cap arxiu seleccionat"})]}),S.files&&d.jsxs("div",{style:{marginTop:"0.5rem",padding:"0.5rem",backgroundColor:"#e8f5e8",borderRadius:"4px",fontSize:"0.9rem"},children:[d.jsx("strong",{children:"Referència del demo:"})," ",S.files]}),d.jsx("small",{style:{display:"block",marginTop:"0.5rem",color:"#1b1b1b",fontSize:"0.8rem",opacity:"0.7"},children:`L'arxiu ha d'exportar: export const elMeuDemo = { html: "...", css: "...", js: "..." }`})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Paraules clau (separades per comes):"}),d.jsx("textarea",{name:"keywords",value:S.keywords,onChange:re,rows:"2",placeholder:"React, JavaScript, Desenvolupament Web, Portfolio"})]}),d.jsxs("div",{className:"form-actions",children:[d.jsx("button",{type:"button",onClick:ie,className:"btn-cancel",children:"Cancel·lar"}),d.jsxs("button",{type:"submit",className:"btn-save",children:[E?"Actualitzar":"Desar"," Projecte"]})]})]})]})}),d.jsxs("div",{className:"projects-section",children:[d.jsx("h2",{children:"Projectes Web"}),d.jsx("div",{className:"projects-list",children:y.web.map(g=>d.jsxs("div",{className:"project-item",children:[d.jsxs("div",{className:"project-info",children:[d.jsx("h3",{children:g.title}),d.jsx("p",{children:g.titleMin}),d.jsx("span",{className:`status ${g.finished?"finished":"in-progress"}`,children:g.finished?"Acabat":"En desenvolupament"})]}),d.jsxs("div",{className:"project-actions",children:[d.jsx("button",{onClick:()=>F(g,"web"),className:"btn-edit",children:"Editar"}),d.jsx("button",{onClick:()=>z(g.id,"web"),className:"btn-delete",children:"Eliminar"})]})]},g.id))})]}),d.jsxs("div",{className:"projects-section",children:[d.jsx("h2",{children:"Jocs"}),d.jsx("div",{className:"projects-list",children:y.games.map(g=>d.jsxs("div",{className:"project-item",children:[d.jsxs("div",{className:"project-info",children:[d.jsx("h3",{children:g.title}),d.jsx("p",{children:g.titleMin}),d.jsx("span",{className:`status ${g.finished?"finished":"in-progress"}`,children:g.finished?"Acabat":"En desenvolupament"})]}),d.jsxs("div",{className:"project-actions",children:[d.jsx("button",{onClick:()=>F(g,"games"),className:"btn-edit",children:"Editar"}),d.jsx("button",{onClick:()=>z(g.id,"games"),className:"btn-delete",children:"Eliminar"})]})]},g.id))})]}),q&&d.jsx("div",{className:"modal-overlay",children:d.jsxs("div",{className:"backup-modal",children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h2",{children:"HISTORIAL DE BACKUPS"}),d.jsx("button",{className:"btn-close",onClick:()=>U(!1),children:"×"})]}),d.jsx("div",{className:"backup-modal-content",children:I?d.jsx("div",{className:"loading-backups",children:d.jsx("p",{children:"Carregant backups..."})}):J.length===0?d.jsx("div",{className:"no-backups",children:d.jsx("p",{children:"No hi ha backups disponibles"})}):d.jsx("div",{className:"backups-list",children:J.map(g=>d.jsxs("div",{className:"backup-item",children:[d.jsxs("div",{className:"backup-column-1",children:[d.jsx("div",{className:"backup-title",children:g.project.title}),d.jsx("div",{className:"backup-date",children:new Date(g.timestamp).toLocaleString("ca-ES")})]}),d.jsxs("div",{className:"backup-column-2",children:[d.jsx("div",{className:`backup-operation operation-${g.operation}`,children:g.operation==="delete"?"Eliminació":g.operation==="manual"?"Manual":"Actualització"}),d.jsx("div",{className:`backup-files ${g.hasFiles?"has-files":"no-files"}`,children:g.hasFiles?"Amb arxius":"Només metadades"})]}),d.jsx("div",{className:"backup-column-3",children:d.jsx("button",{onClick:()=>oe(g.id,g.project.title),className:"btn-restore-only",title:"Restaurar aquest projecte",children:"RESTAURAR"})})]},g.id))})}),d.jsx("div",{className:"backup-modal-footer",children:d.jsxs("p",{className:"backup-info-text",children:["Els backups es creen automàticament quan elimines projectes. Es mantenen ",J.length>0?`${Math.min(10,J.length)}`:"10"," backups màxim."]})})]})}),d.jsx("button",{className:"btn-floating-add",onClick:()=>h(!0),title:"Afegir nou projecte",children:"+"})]})]}):d.jsx(W0,{onLogin:fe})};vg.createRoot(document.getElementById("root")).render(d.jsx(wp,{children:d.jsx(M0,{children:d.jsxs(Ny,{children:[d.jsx(D0,{}),d.jsxs(fy,{children:[d.jsx(Ia,{path:"/Admin1997",element:d.jsx(F0,{})}),d.jsxs(Ia,{element:d.jsx(z0,{}),children:[d.jsx(Ia,{path:"/",element:d.jsx(H0,{})}),d.jsx(Ia,{path:"/project/:slug",element:d.jsx(V0,{})}),d.jsx(Ia,{path:"/about",element:d.jsx(X0,{})}),d.jsx(Ia,{path:"*",element:d.jsx(zp,{})})]})]})]})})}));export{d as j,T as r};
