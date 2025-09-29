const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LiveEditorDesktop-ETN1smVL.js","assets/LiveEditor-DCGn3OrN.js","assets/LiveEditor-Dj88UyYi.css","assets/LiveEditorMobile-DioNCsx_.js"])))=>i.map(i=>d[i]);
var tg=Object.defineProperty,ag=Object.defineProperties;var lg=Object.getOwnPropertyDescriptors;var br=Object.getOwnPropertySymbols;var xm=Object.prototype.hasOwnProperty,Sm=Object.prototype.propertyIsEnumerable;var Pc=(r,c,o)=>c in r?tg(r,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[c]=o,te=(r,c)=>{for(var o in c||(c={}))xm.call(c,o)&&Pc(r,o,c[o]);if(br)for(var o of br(c))Sm.call(c,o)&&Pc(r,o,c[o]);return r},Re=(r,c)=>ag(r,lg(c));var za=(r,c)=>{var o={};for(var u in r)xm.call(r,u)&&c.indexOf(u)<0&&(o[u]=r[u]);if(r!=null&&br)for(var u of br(r))c.indexOf(u)<0&&Sm.call(r,u)&&(o[u]=r[u]);return o};var la=(r,c,o)=>Pc(r,typeof c!="symbol"?c+"":c,o);var ye=(r,c,o)=>new Promise((u,d)=>{var f=v=>{try{x(o.next(v))}catch(h){d(h)}},y=v=>{try{x(o.throw(v))}catch(h){d(h)}},x=v=>v.done?u(v.value):Promise.resolve(v.value).then(f,y);x((o=o.apply(r,c)).next())});(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const y of f.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function o(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(d){if(d.ep)return;d.ep=!0;const f=o(d);fetch(d.href,f)}})();function al(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jc={exports:{}},Zn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function ng(){if(Em)return Zn;Em=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(u,d,f){var y=null;if(f!==void 0&&(y=""+f),d.key!==void 0&&(y=""+d.key),"key"in d){f={};for(var x in d)x!=="key"&&(f[x]=d[x])}else f=d;return d=f.ref,{$$typeof:r,type:u,key:y,ref:d!==void 0?d:null,props:f}}return Zn.Fragment=c,Zn.jsx=o,Zn.jsxs=o,Zn}var wm;function ig(){return wm||(wm=1,Jc.exports=ng()),Jc.exports}var m=ig(),$c={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function rg(){if(jm)return ie;jm=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),y=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),O=Symbol.iterator;function E(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,G={};function B(g,R,U){this.props=g,this.context=R,this.refs=G,this.updater=U||k}B.prototype.isReactComponent={},B.prototype.setState=function(g,R){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,R,"setState")},B.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function q(){}q.prototype=B.prototype;function Z(g,R,U){this.props=g,this.context=R,this.refs=G,this.updater=U||k}var V=Z.prototype=new q;V.constructor=Z,_(V,B.prototype),V.isPureReactComponent=!0;var J=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},ne=Object.prototype.hasOwnProperty;function fe(g,R,U,Y,K,re){return U=re.ref,{$$typeof:r,type:g,key:R,ref:U!==void 0?U:null,props:re}}function be(g,R){return fe(g.type,R,void 0,void 0,void 0,g.props)}function Ae(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function pe(g){var R={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(U){return R[U]})}var Me=/\/+/g;function ge(g,R){return typeof g=="object"&&g!==null&&g.key!=null?pe(""+g.key):R.toString(36)}function ke(){}function Mt(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(ke,ke):(g.status="pending",g.then(function(R){g.status==="pending"&&(g.status="fulfilled",g.value=R)},function(R){g.status==="pending"&&(g.status="rejected",g.reason=R)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function I(g,R,U,Y,K){var re=typeof g;(re==="undefined"||re==="boolean")&&(g=null);var $=!1;if(g===null)$=!0;else switch(re){case"bigint":case"string":case"number":$=!0;break;case"object":switch(g.$$typeof){case r:case c:$=!0;break;case S:return $=g._init,I($(g._payload),R,U,Y,K)}}if($)return K=K(g),$=Y===""?"."+ge(g,0):Y,J(K)?(U="",$!=null&&(U=$.replace(Me,"$&/")+"/"),I(K,R,U,"",function(oa){return oa})):K!=null&&(Ae(K)&&(K=be(K,U+(K.key==null||g&&g.key===K.key?"":(""+K.key).replace(Me,"$&/")+"/")+$)),R.push(K)),1;$=0;var $e=Y===""?".":Y+":";if(J(g))for(var Ee=0;Ee<g.length;Ee++)Y=g[Ee],re=$e+ge(Y,Ee),$+=I(Y,R,U,re,K);else if(Ee=E(g),typeof Ee=="function")for(g=Ee.call(g),Ee=0;!(Y=g.next()).done;)Y=Y.value,re=$e+ge(Y,Ee++),$+=I(Y,R,U,re,K);else if(re==="object"){if(typeof g.then=="function")return I(Mt(g),R,U,Y,K);throw R=String(g),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return $}function z(g,R,U){if(g==null)return g;var Y=[],K=0;return I(g,Y,"","",function(re){return R.call(U,re,K++)}),Y}function X(g){if(g._status===-1){var R=g._result;R=R(),R.then(function(U){(g._status===0||g._status===-1)&&(g._status=1,g._result=U)},function(U){(g._status===0||g._status===-1)&&(g._status=2,g._result=U)}),g._status===-1&&(g._status=0,g._result=R)}if(g._status===1)return g._result.default;throw g._result}var F=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function de(){}return ie.Children={map:z,forEach:function(g,R,U){z(g,function(){R.apply(this,arguments)},U)},count:function(g){var R=0;return z(g,function(){R++}),R},toArray:function(g){return z(g,function(R){return R})||[]},only:function(g){if(!Ae(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ie.Component=B,ie.Fragment=o,ie.Profiler=d,ie.PureComponent=Z,ie.StrictMode=u,ie.Suspense=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ie.__COMPILER_RUNTIME={__proto__:null,c:function(g){return Q.H.useMemoCache(g)}},ie.cache=function(g){return function(){return g.apply(null,arguments)}},ie.cloneElement=function(g,R,U){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var Y=_({},g.props),K=g.key,re=void 0;if(R!=null)for($ in R.ref!==void 0&&(re=void 0),R.key!==void 0&&(K=""+R.key),R)!ne.call(R,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&R.ref===void 0||(Y[$]=R[$]);var $=arguments.length-2;if($===1)Y.children=U;else if(1<$){for(var $e=Array($),Ee=0;Ee<$;Ee++)$e[Ee]=arguments[Ee+2];Y.children=$e}return fe(g.type,K,void 0,void 0,re,Y)},ie.createContext=function(g){return g={$$typeof:y,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:f,_context:g},g},ie.createElement=function(g,R,U){var Y,K={},re=null;if(R!=null)for(Y in R.key!==void 0&&(re=""+R.key),R)ne.call(R,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(K[Y]=R[Y]);var $=arguments.length-2;if($===1)K.children=U;else if(1<$){for(var $e=Array($),Ee=0;Ee<$;Ee++)$e[Ee]=arguments[Ee+2];K.children=$e}if(g&&g.defaultProps)for(Y in $=g.defaultProps,$)K[Y]===void 0&&(K[Y]=$[Y]);return fe(g,re,void 0,void 0,null,K)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(g){return{$$typeof:x,render:g}},ie.isValidElement=Ae,ie.lazy=function(g){return{$$typeof:S,_payload:{_status:-1,_result:g},_init:X}},ie.memo=function(g,R){return{$$typeof:h,type:g,compare:R===void 0?null:R}},ie.startTransition=function(g){var R=Q.T,U={};Q.T=U;try{var Y=g(),K=Q.S;K!==null&&K(U,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(de,F)}catch(re){F(re)}finally{Q.T=R}},ie.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ie.use=function(g){return Q.H.use(g)},ie.useActionState=function(g,R,U){return Q.H.useActionState(g,R,U)},ie.useCallback=function(g,R){return Q.H.useCallback(g,R)},ie.useContext=function(g){return Q.H.useContext(g)},ie.useDebugValue=function(){},ie.useDeferredValue=function(g,R){return Q.H.useDeferredValue(g,R)},ie.useEffect=function(g,R,U){var Y=Q.H;if(typeof U=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(g,R)},ie.useId=function(){return Q.H.useId()},ie.useImperativeHandle=function(g,R,U){return Q.H.useImperativeHandle(g,R,U)},ie.useInsertionEffect=function(g,R){return Q.H.useInsertionEffect(g,R)},ie.useLayoutEffect=function(g,R){return Q.H.useLayoutEffect(g,R)},ie.useMemo=function(g,R){return Q.H.useMemo(g,R)},ie.useOptimistic=function(g,R){return Q.H.useOptimistic(g,R)},ie.useReducer=function(g,R,U){return Q.H.useReducer(g,R,U)},ie.useRef=function(g){return Q.H.useRef(g)},ie.useState=function(g){return Q.H.useState(g)},ie.useSyncExternalStore=function(g,R,U){return Q.H.useSyncExternalStore(g,R,U)},ie.useTransition=function(){return Q.H.useTransition()},ie.version="19.1.0",ie}var Tm;function bu(){return Tm||(Tm=1,$c.exports=rg()),$c.exports}var j=bu();const Ot=al(j);var Wc={exports:{}},Kn={},Fc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function og(){return Am||(Am=1,function(r){function c(z,X){var F=z.length;z.push(X);e:for(;0<F;){var de=F-1>>>1,g=z[de];if(0<d(g,X))z[de]=X,z[F]=g,F=de;else break e}}function o(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var X=z[0],F=z.pop();if(F!==X){z[0]=F;e:for(var de=0,g=z.length,R=g>>>1;de<R;){var U=2*(de+1)-1,Y=z[U],K=U+1,re=z[K];if(0>d(Y,F))K<g&&0>d(re,Y)?(z[de]=re,z[K]=F,de=K):(z[de]=Y,z[U]=F,de=U);else if(K<g&&0>d(re,F))z[de]=re,z[K]=F,de=K;else break e}}return X}function d(z,X){var F=z.sortIndex-X.sortIndex;return F!==0?F:z.id-X.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var y=Date,x=y.now();r.unstable_now=function(){return y.now()-x}}var v=[],h=[],S=1,O=null,E=3,k=!1,_=!1,G=!1,B=!1,q=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate!="undefined"?setImmediate:null;function J(z){for(var X=o(h);X!==null;){if(X.callback===null)u(h);else if(X.startTime<=z)u(h),X.sortIndex=X.expirationTime,c(v,X);else break;X=o(h)}}function Q(z){if(G=!1,J(z),!_)if(o(v)!==null)_=!0,ne||(ne=!0,ge());else{var X=o(h);X!==null&&I(Q,X.startTime-z)}}var ne=!1,fe=-1,be=5,Ae=-1;function pe(){return B?!0:!(r.unstable_now()-Ae<be)}function Me(){if(B=!1,ne){var z=r.unstable_now();Ae=z;var X=!0;try{e:{_=!1,G&&(G=!1,Z(fe),fe=-1),k=!0;var F=E;try{t:{for(J(z),O=o(v);O!==null&&!(O.expirationTime>z&&pe());){var de=O.callback;if(typeof de=="function"){O.callback=null,E=O.priorityLevel;var g=de(O.expirationTime<=z);if(z=r.unstable_now(),typeof g=="function"){O.callback=g,J(z),X=!0;break t}O===o(v)&&u(v),J(z)}else u(v);O=o(v)}if(O!==null)X=!0;else{var R=o(h);R!==null&&I(Q,R.startTime-z),X=!1}}break e}finally{O=null,E=F,k=!1}X=void 0}}finally{X?ge():ne=!1}}}var ge;if(typeof V=="function")ge=function(){V(Me)};else if(typeof MessageChannel!="undefined"){var ke=new MessageChannel,Mt=ke.port2;ke.port1.onmessage=Me,ge=function(){Mt.postMessage(null)}}else ge=function(){q(Me,0)};function I(z,X){fe=q(function(){z(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_next=function(z){switch(E){case 1:case 2:case 3:var X=3;break;default:X=E}var F=E;E=X;try{return z()}finally{E=F}},r.unstable_requestPaint=function(){B=!0},r.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=E;E=z;try{return X()}finally{E=F}},r.unstable_scheduleCallback=function(z,X,F){var de=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?de+F:de):F=de,z){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=F+g,z={id:S++,callback:X,priorityLevel:z,startTime:F,expirationTime:g,sortIndex:-1},F>de?(z.sortIndex=F,c(h,z),o(v)===null&&z===o(h)&&(G?(Z(fe),fe=-1):G=!0,I(Q,F-de))):(z.sortIndex=g,c(v,z),_||k||(_=!0,ne||(ne=!0,ge()))),z},r.unstable_shouldYield=pe,r.unstable_wrapCallback=function(z){var X=E;return function(){var F=E;E=X;try{return z.apply(this,arguments)}finally{E=F}}}}(Ic)),Ic}var Mm;function cg(){return Mm||(Mm=1,Fc.exports=og()),Fc.exports}var eu={exports:{}},Ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function ug(){if(Dm)return Ie;Dm=1;var r=bu();function c(v){var h="https://react.dev/errors/"+v;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(v,h,S){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:O==null?null:""+O,children:v,containerInfo:h,implementation:S}}var y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(v,h){if(v==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ie.createPortal=function(v,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(c(299));return f(v,h,null,S)},Ie.flushSync=function(v){var h=y.T,S=u.p;try{if(y.T=null,u.p=2,v)return v()}finally{y.T=h,u.p=S,u.d.f()}},Ie.preconnect=function(v,h){typeof v=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(v,h))},Ie.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},Ie.preinit=function(v,h){if(typeof v=="string"&&h&&typeof h.as=="string"){var S=h.as,O=x(S,h.crossOrigin),E=typeof h.integrity=="string"?h.integrity:void 0,k=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?u.d.S(v,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:O,integrity:E,fetchPriority:k}):S==="script"&&u.d.X(v,{crossOrigin:O,integrity:E,fetchPriority:k,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ie.preinitModule=function(v,h){if(typeof v=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=x(h.as,h.crossOrigin);u.d.M(v,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(v)},Ie.preload=function(v,h){if(typeof v=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,O=x(S,h.crossOrigin);u.d.L(v,S,{crossOrigin:O,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ie.preloadModule=function(v,h){if(typeof v=="string")if(h){var S=x(h.as,h.crossOrigin);u.d.m(v,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(v)},Ie.requestFormReset=function(v){u.d.r(v)},Ie.unstable_batchedUpdates=function(v,h){return v(h)},Ie.useFormState=function(v,h,S){return y.H.useFormState(v,h,S)},Ie.useFormStatus=function(){return y.H.useHostTransitionStatus()},Ie.version="19.1.0",Ie}var Cm;function Wm(){if(Cm)return eu.exports;Cm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),eu.exports=ug(),eu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function sg(){if(Rm)return Kn;Rm=1;var r=cg(),c=bu(),o=Wm();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return x(n),e;if(i===l)return x(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,p=n.child;p;){if(p===a){s=!0,a=n,l=i;break}if(p===l){s=!0,l=n,a=i;break}p=p.sibling}if(!s){for(p=i.child;p;){if(p===a){s=!0,a=i,l=n;break}if(p===l){s=!0,l=i,a=n;break}p=p.sibling}if(!s)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,O=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),V=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),Ae=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),Me=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=Me&&e[Me]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case B:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case ne:return"SuspenseList";case Ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case V:return(e.displayName||"Context")+".Provider";case Z:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fe:return t=e.displayName||null,t!==null?t:Mt(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return Mt(e(t))}catch(a){}}return null}var I=Array.isArray,z=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},de=[],g=-1;function R(e){return{current:e}}function U(e){0>g||(e.current=de[g],de[g]=null,g--)}function Y(e,t){g++,de[g]=e.current,e.current=t}var K=R(null),re=R(null),$=R(null),$e=R(null);function Ee(e,t){switch(Y($,t),Y(re,e),Y(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Pd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Pd(t),e=Jd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(K),Y(K,e)}function oa(){U(K),U(re),U($)}function zr(e){e.memoizedState!==null&&Y($e,e);var t=K.current,a=Jd(t,e.type);t!==a&&(Y(re,e),Y(K,a))}function ni(e){re.current===e&&(U(K),U(re)),$e.current===e&&(U($e),Gn._currentValue=F)}var _r=Object.prototype.hasOwnProperty,Nr=r.unstable_scheduleCallback,Hr=r.unstable_cancelCallback,_p=r.unstable_shouldYield,Np=r.unstable_requestPaint,Ht=r.unstable_now,Hp=r.unstable_getCurrentPriorityLevel,Mu=r.unstable_ImmediatePriority,Du=r.unstable_UserBlockingPriority,ii=r.unstable_NormalPriority,Bp=r.unstable_LowPriority,Cu=r.unstable_IdlePriority,Lp=r.log,kp=r.unstable_setDisableYieldValue,Pl=null,rt=null;function ca(e){if(typeof Lp=="function"&&kp(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Pl,e)}catch(t){}}var ot=Math.clz32?Math.clz32:Gp,Up=Math.log,qp=Math.LN2;function Gp(e){return e>>>=0,e===0?32:31-(Up(e)/qp|0)|0}var ri=256,oi=4194304;function Ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ci(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var p=l&134217727;return p!==0?(l=p&~i,l!==0?n=Ha(l):(s&=p,s!==0?n=Ha(s):a||(a=p&~e,a!==0&&(n=Ha(a))))):(p=l&~i,p!==0?n=Ha(p):s!==0?n=Ha(s):a||(a=l&~e,a!==0&&(n=Ha(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Yp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(){var e=ri;return ri<<=1,(ri&4194048)===0&&(ri=256),e}function Ou(){var e=oi;return oi<<=1,(oi&62914560)===0&&(oi=4194304),e}function Br(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vp(e,t,a,l,n,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,b=e.expirationTimes,M=e.hiddenUpdates;for(a=s&~a;0<a;){var N=31-ot(a),L=1<<N;p[N]=0,b[N]=-1;var D=M[N];if(D!==null)for(M[N]=null,N=0;N<D.length;N++){var C=D[N];C!==null&&(C.lane&=-536870913)}a&=~L}l!==0&&zu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function zu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function _u(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ot(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Lr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nu(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:pm(e.type))}function Xp(e,t){var a=X.p;try{return X.p=e,t()}finally{X.p=a}}var ua=Math.random().toString(36).slice(2),We="__reactFiber$"+ua,tt="__reactProps$"+ua,nl="__reactContainer$"+ua,Ur="__reactEvents$"+ua,Qp="__reactListeners$"+ua,Zp="__reactHandles$"+ua,Hu="__reactResources$"+ua,Wl="__reactMarker$"+ua;function qr(e){delete e[We],delete e[tt],delete e[Ur],delete e[Qp],delete e[Zp]}function il(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[nl]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Id(e);e!==null;){if(a=e[We])return a;e=Id(e)}return t}e=a,a=e.parentNode}return null}function rl(e){if(e=e[We]||e[nl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function ol(e){var t=e[Hu];return t||(t=e[Hu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Wl]=!0}var Bu=new Set,Lu={};function Ba(e,t){cl(e,t),cl(e+"Capture",t)}function cl(e,t){for(Lu[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var Kp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ku={},Uu={};function Pp(e){return _r.call(Uu,e)?!0:_r.call(ku,e)?!1:Kp.test(e)?Uu[e]=!0:(ku[e]=!0,!1)}function ui(e,t,a){if(Pp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function si(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var Gr,qu;function ul(e){if(Gr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Gr=t&&t[1]||"",qu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gr+e+qu}var Yr=!1;function Vr(e,t){if(!e||Yr)return"";Yr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(C){var D=C}Reflect.construct(e,[],L)}else{try{L.call()}catch(C){D=C}e.call(L.prototype)}}else{try{throw Error()}catch(C){D=C}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(C){if(C&&D&&typeof C.stack=="string")return[C.stack,D.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],p=i[1];if(s&&p){var b=s.split(`
`),M=p.split(`
`);for(n=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;n<M.length&&!M[n].includes("DetermineComponentFrameRoot");)n++;if(l===b.length||n===M.length)for(l=b.length-1,n=M.length-1;1<=l&&0<=n&&b[l]!==M[n];)n--;for(;1<=l&&0<=n;l--,n--)if(b[l]!==M[n]){if(l!==1||n!==1)do if(l--,n--,0>n||b[l]!==M[n]){var N=`
`+b[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=n);break}}}finally{Yr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ul(a):""}function Jp(e){switch(e.tag){case 26:case 27:case 5:return ul(e.type);case 16:return ul("Lazy");case 13:return ul("Suspense");case 19:return ul("SuspenseList");case 0:case 15:return Vr(e.type,!1);case 11:return Vr(e.type.render,!1);case 1:return Vr(e.type,!0);case 31:return ul("Activity");default:return""}}function Gu(e){try{var t="";do t+=Jp(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $p(e){var t=Yu(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a!="undefined"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){l=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=$p(e))}function Vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Yu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}var Wp=/[\n"\\]/g;function yt(e){return e.replace(Wp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xr(e,t,a,l,n,i,s,p){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Qr(e,s,gt(t)):a!=null?Qr(e,s,gt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+gt(p):e.removeAttribute("name")}function Xu(e,t,a,l,n,i,s,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}l=l!=null?l:n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=p?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Qr(e,t,a){t==="number"&&di(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Qu(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function Zu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(I(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function fl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ku(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Fp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Pu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Ku(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Ku(e,i,t[i])}function Zr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ip=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mi(e){return eh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Kr=null;function Pr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,ml=null;function Ju(e){var t=rl(e);if(t&&(e=t.stateNode)){var a=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Xr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[tt]||null;if(!n)throw Error(u(90));Xr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Vu(l)}break e;case"textarea":Qu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&sl(e,!!a.multiple,t,!1)}}}var Jr=!1;function $u(e,t,a){if(Jr)return e(t,a);Jr=!0;try{var l=e(t);return l}finally{if(Jr=!1,(dl!==null||ml!==null)&&(Fi(),dl&&(t=dl,e=ml,ml=dl=null,Ju(t),e)))for(t=0;t<e.length;t++)Ju(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[tt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Vt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),$r=!1;if(Vt)try{var en={};Object.defineProperty(en,"passive",{get:function(){$r=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch(e){$r=!1}var sa=null,Wr=null,pi=null;function Wu(){if(pi)return pi;var e,t=Wr,a=t.length,l,n="value"in sa?sa.value:sa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[i-l];l++);return pi=n.slice(e,1<l?1-l:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function Fu(){return!1}function at(e){function t(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vi:Fu,this.isPropagationStopped=Fu,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),t}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=at(La),tn=S({},La,{view:0,detail:0}),th=at(tn),Fr,Ir,an,yi=S({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==an&&(an&&e.type==="mousemove"?(Fr=e.screenX-an.screenX,Ir=e.screenY-an.screenY):Ir=Fr=0,an=e),Fr)},movementY:function(e){return"movementY"in e?e.movementY:Ir}}),Iu=at(yi),ah=S({},yi,{dataTransfer:0}),lh=at(ah),nh=S({},tn,{relatedTarget:0}),eo=at(nh),ih=S({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),rh=at(ih),oh=S({},La,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ch=at(oh),uh=S({},La,{data:0}),es=at(uh),sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dh[e])?!!t[e]:!1}function to(){return mh}var ph=S({},tn,{key:function(e){if(e.key){var t=sh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hh=at(ph),vh=S({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ts=at(vh),gh=S({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),yh=at(gh),bh=S({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=at(bh),Sh=S({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eh=at(Sh),wh=S({},La,{newState:0,oldState:0}),jh=at(wh),Th=[9,13,27,32],ao=Vt&&"CompositionEvent"in window,ln=null;Vt&&"documentMode"in document&&(ln=document.documentMode);var Ah=Vt&&"TextEvent"in window&&!ln,as=Vt&&(!ao||ln&&8<ln&&11>=ln),ls=" ",ns=!1;function is(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pl=!1;function Mh(e,t){switch(e){case"compositionend":return rs(t);case"keypress":return t.which!==32?null:(ns=!0,ls);case"textInput":return e=t.data,e===ls&&ns?null:e;default:return null}}function Dh(e,t){if(pl)return e==="compositionend"||!ao&&is(e,t)?(e=Wu(),pi=Wr=sa=null,pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return as&&t.locale!=="ko"?null:t.data;default:return null}}var Ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ch[e.type]:t==="textarea"}function cs(e,t,a,l){dl?ml?ml.push(l):ml=[l]:dl=l,t=nr(t,"onChange"),0<t.length&&(a=new gi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var nn=null,rn=null;function Rh(e){Vd(e,0)}function bi(e){var t=Fl(e);if(Vu(t))return e}function us(e,t){if(e==="change")return t}var ss=!1;if(Vt){var lo;if(Vt){var no="oninput"in document;if(!no){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),no=typeof fs.oninput=="function"}lo=no}else lo=!1;ss=lo&&(!document.documentMode||9<document.documentMode)}function ds(){nn&&(nn.detachEvent("onpropertychange",ms),rn=nn=null)}function ms(e){if(e.propertyName==="value"&&bi(rn)){var t=[];cs(t,rn,e,Pr(e)),$u(Rh,t)}}function Oh(e,t,a){e==="focusin"?(ds(),nn=t,rn=a,nn.attachEvent("onpropertychange",ms)):e==="focusout"&&ds()}function zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(rn)}function _h(e,t){if(e==="click")return bi(t)}function Nh(e,t){if(e==="input"||e==="change")return bi(t)}function Hh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Hh;function on(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!_r.call(t,n)||!ct(e[n],t[n]))return!1}return!0}function ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hs(e,t){var a=ps(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ps(a)}}function vs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=di(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch(l){a=!1}if(a)e=t.contentWindow;else break;t=di(e.document)}return t}function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Bh=Vt&&"documentMode"in document&&11>=document.documentMode,hl=null,ro=null,cn=null,oo=!1;function ys(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oo||hl==null||hl!==di(l)||(l=hl,"selectionStart"in l&&io(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cn&&on(cn,l)||(cn=l,l=nr(ro,"onSelect"),0<l.length&&(t=new gi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=hl)))}function ka(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var vl={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},co={},bs={};Vt&&(bs=document.createElement("div").style,"AnimationEvent"in window||(delete vl.animationend.animation,delete vl.animationiteration.animation,delete vl.animationstart.animation),"TransitionEvent"in window||delete vl.transitionend.transition);function Ua(e){if(co[e])return co[e];if(!vl[e])return e;var t=vl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in bs)return co[e]=t[a];return e}var xs=Ua("animationend"),Ss=Ua("animationiteration"),Es=Ua("animationstart"),Lh=Ua("transitionrun"),kh=Ua("transitionstart"),Uh=Ua("transitioncancel"),ws=Ua("transitionend"),js=new Map,uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uo.push("scrollEnd");function Dt(e,t){js.set(e,t),Ba(t,[e])}var Ts=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=Ts.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Gu(t)},Ts.set(e,t),t)}return{value:e,source:t,stack:Gu(t)}}var xt=[],gl=0,so=0;function xi(){for(var e=gl,t=so=gl=0;t<e;){var a=xt[t];xt[t++]=null;var l=xt[t];xt[t++]=null;var n=xt[t];xt[t++]=null;var i=xt[t];if(xt[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&As(a,n,i)}}function Si(e,t,a,l){xt[gl++]=e,xt[gl++]=t,xt[gl++]=a,xt[gl++]=l,so|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function fo(e,t,a,l){return Si(e,t,a,l),Ei(e)}function yl(e,t){return Si(e,null,null,t),Ei(e)}function As(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ot(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Ei(e){if(50<_n)throw _n=0,yc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bl={};function qh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,a,l){return new qh(e,t,a,l)}function mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var a=e.alternate;return a===null?(a=ut(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ms(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wi(e,t,a,l,n,i){var s=0;if(l=e,typeof e=="function")mo(e)&&(s=1);else if(typeof e=="string")s=Yv(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ae:return e=ut(31,a,t,n),e.elementType=Ae,e.lanes=i,e;case _:return qa(a.children,n,i,t);case G:s=8,n|=24;break;case B:return e=ut(12,a,t,n|2),e.elementType=B,e.lanes=i,e;case Q:return e=ut(13,a,t,n),e.elementType=Q,e.lanes=i,e;case ne:return e=ut(19,a,t,n),e.elementType=ne,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:case V:s=10;break e;case Z:s=9;break e;case J:s=11;break e;case fe:s=14;break e;case be:s=16,l=null;break e}s=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=ut(s,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function qa(e,t,a,l){return e=ut(7,e,l,t),e.lanes=a,e}function po(e,t,a){return e=ut(6,e,null,t),e.lanes=a,e}function ho(e,t,a){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xl=[],Sl=0,ji=null,Ti=0,St=[],Et=0,Ga=null,Qt=1,Zt="";function Ya(e,t){xl[Sl++]=Ti,xl[Sl++]=ji,ji=e,Ti=t}function Ds(e,t,a){St[Et++]=Qt,St[Et++]=Zt,St[Et++]=Ga,Ga=e;var l=Qt;e=Zt;var n=32-ot(l)-1;l&=~(1<<n),a+=1;var i=32-ot(t)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,Qt=1<<32-ot(t)+n|a<<n|l,Zt=i+e}else Qt=1<<i|a<<n|l,Zt=e}function vo(e){e.return!==null&&(Ya(e,1),Ds(e,1,0))}function go(e){for(;e===ji;)ji=xl[--Sl],xl[Sl]=null,Ti=xl[--Sl],xl[Sl]=null;for(;e===Ga;)Ga=St[--Et],St[Et]=null,Zt=St[--Et],St[Et]=null,Qt=St[--Et],St[Et]=null}var et=null,Ne=null,ve=!1,Va=null,Bt=!1,yo=Error(u(519));function Xa(e){var t=Error(u(418,""));throw fn(bt(t,e)),yo}function Cs(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[tt]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<Hn.length;a++)se(Hn[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Xu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),fi(t);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),Zu(t,l.value,l.defaultValue,l.children),fi(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Kd(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=ir),t=!0):t=!1,t||Xa(e)}function Rs(e){for(et=e.return;et;)switch(et.tag){case 5:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:et=et.return}}function un(e){if(e!==et)return!1;if(!ve)return Rs(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Nc(e.type,e.memoizedProps)),a=!a),a&&Ne&&Xa(e),Rs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ne=Rt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ne=null}}else t===27?(t=Ne,Aa(e.type)?(e=kc,kc=null,Ne=e):Ne=t):Ne=et?Rt(e.stateNode.nextSibling):null;return!0}function sn(){Ne=et=null,ve=!1}function Os(){var e=Va;return e!==null&&(it===null?it=e:it.push.apply(it,e),Va=null),e}function fn(e){Va===null?Va=[e]:Va.push(e)}var bo=R(null),Qa=null,Kt=null;function fa(e,t,a){Y(bo,t._currentValue),t._currentValue=a}function Pt(e){e._currentValue=bo.current,U(bo)}function xo(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function So(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=n;for(var b=0;b<t.length;b++)if(p.context===t[b]){i.lanes|=a,p=i.alternate,p!==null&&(p.lanes|=a),xo(i.return,a,e),l||(s=null);break e}i=p.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(u(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),xo(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function dn(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var p=n.type;ct(n.pendingProps.value,s.value)||(e!==null?e.push(p):e=[p])}}else if(n===$e.current){if(s=n.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Gn):e=[Gn])}n=n.return}e!==null&&So(t,e,a,l),t.flags|=262144}function Ai(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Qa=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return zs(Qa,e)}function Mi(e,t){return Qa===null&&Za(e),zs(e,t)}function zs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Kt===null){if(e===null)throw Error(u(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return a}var Gh=typeof AbortController!="undefined"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yh=r.unstable_scheduleCallback,Vh=r.unstable_NormalPriority,Ge={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eo(){return{controller:new Gh,data:new Map,refCount:0}}function mn(e){e.refCount--,e.refCount===0&&Yh(Vh,function(){e.controller.abort()})}var pn=null,wo=0,El=0,wl=null;function Xh(e,t){if(pn===null){var a=pn=[];wo=0,El=Tc(),wl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return wo++,t.then(_s,_s),t}function _s(){if(--wo===0&&pn!==null){wl!==null&&(wl.status="fulfilled");var e=pn;pn=null,El=0,wl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ns=z.S;z.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Xh(e,t),Ns!==null&&Ns(e,t)};var Ka=R(null);function jo(){var e=Ka.current;return e!==null?e:Ce.pooledCache}function Di(e,t){t===null?Y(Ka,Ka.current):Y(Ka,t.pool)}function Hs(){var e=jo();return e===null?null:{parent:Ge._currentValue,pool:e}}var hn=Error(u(460)),Bs=Error(u(474)),Ci=Error(u(542)),To={then:function(){}};function Ls(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ri(){}function ks(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ri,Ri),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qs(e),e;default:if(typeof t.status=="string")t.then(Ri,Ri);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qs(e),e}throw vn=t,hn}}var vn=null;function Us(){if(vn===null)throw Error(u(459));var e=vn;return vn=null,e}function qs(e){if(e===hn||e===Ci)throw Error(u(483))}var da=!1;function Ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(xe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Ei(e),As(e,null,a),t}return Si(e,l,t,a),Ei(e)}function gn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,_u(e,a)}}function Do(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Co=!1;function yn(){if(Co){var e=wl;if(e!==null)throw e}}function bn(e,t,a,l){Co=!1;var n=e.updateQueue;da=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,p=n.shared.pending;if(p!==null){n.shared.pending=null;var b=p,M=b.next;b.next=null,s===null?i=M:s.next=M,s=b;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==s&&(p===null?N.firstBaseUpdate=M:p.next=M,N.lastBaseUpdate=b))}if(i!==null){var L=n.baseState;s=0,N=M=b=null,p=i;do{var D=p.lane&-536870913,C=D!==p.lane;if(C?(me&D)===D:(l&D)===D){D!==0&&D===El&&(Co=!0),N!==null&&(N=N.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var le=e,ee=p;D=t;var Te=a;switch(ee.tag){case 1:if(le=ee.payload,typeof le=="function"){L=le.call(Te,L,D);break e}L=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ee.payload,D=typeof le=="function"?le.call(Te,L,D):le,D==null)break e;L=S({},L,D);break e;case 2:da=!0}}D=p.callback,D!==null&&(e.flags|=64,C&&(e.flags|=8192),C=n.callbacks,C===null?n.callbacks=[D]:C.push(D))}else C={lane:D,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(M=N=C,b=L):N=N.next=C,s|=D;if(p=p.next,p===null){if(p=n.shared.pending,p===null)break;C=p,p=C.next,C.next=null,n.lastBaseUpdate=C,n.shared.pending=null}}while(!0);N===null&&(b=L),n.baseState=b,n.firstBaseUpdate=M,n.lastBaseUpdate=N,i===null&&(n.shared.lanes=0),Ea|=s,e.lanes=s,e.memoizedState=L}}function Gs(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Ys(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gs(a[e],t)}var jl=R(null),Oi=R(0);function Vs(e,t){e=ta,Y(Oi,e),Y(jl,t),ta=e|t.baseLanes}function Ro(){Y(Oi,ta),Y(jl,jl.current)}function Oo(){ta=Oi.current,U(jl),U(Oi)}var ha=0,oe=null,we=null,Ue=null,zi=!1,Tl=!1,Pa=!1,_i=0,xn=0,Al=null,Zh=0;function Be(){throw Error(u(321))}function zo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ct(e[a],t[a]))return!1;return!0}function _o(e,t,a,l,n,i){return ha=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Mf:Df,Pa=!1,i=a(l,n),Pa=!1,Tl&&(i=Qs(t,a,l,n)),Xs(e),i}function Xs(e){z.H=Ui;var t=we!==null&&we.next!==null;if(ha=0,Ue=we=oe=null,zi=!1,xn=0,Al=null,t)throw Error(u(300));e===null||Xe||(e=e.dependencies,e!==null&&Ai(e)&&(Xe=!0))}function Qs(e,t,a,l){oe=e;var n=0;do{if(Tl&&(Al=null),xn=0,Tl=!1,25<=n)throw Error(u(301));if(n+=1,Ue=we=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Ih,i=t(a,l)}while(Tl);return i}function Kh(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?Sn(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(oe.flags|=1024),t}function No(){var e=_i!==0;return _i=0,e}function Ho(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Bo(e){if(zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zi=!1}ha=0,Ue=we=oe=null,Tl=!1,xn=_i=0,Al=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?oe.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function qe(){if(we===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ue===null?oe.memoizedState:Ue.next;if(t!==null)Ue=t,we=e;else{if(e===null)throw oe.alternate===null?Error(u(467)):Error(u(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ue===null?oe.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Lo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sn(e){var t=xn;return xn+=1,Al===null&&(Al=[]),e=ks(Al,e,t),t=oe,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Mf:Df),e}function Ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sn(e);if(e.$$typeof===V)return Fe(e)}throw Error(u(438,String(e)))}function ko(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Lo(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=pe;return t.index++,a}function Jt(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=qe();return Uo(t,we,e)}function Uo(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var p=s=null,b=null,M=t,N=!1;do{var L=M.lane&-536870913;if(L!==M.lane?(me&L)===L:(ha&L)===L){var D=M.revertLane;if(D===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),L===El&&(N=!0);else if((ha&D)===D){M=M.next,D===El&&(N=!0);continue}else L={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},b===null?(p=b=L,s=i):b=b.next=L,oe.lanes|=D,Ea|=D;L=M.action,Pa&&a(i,L),i=M.hasEagerState?M.eagerState:a(i,L)}else D={lane:L,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},b===null?(p=b=D,s=i):b=b.next=D,oe.lanes|=L,Ea|=L;M=M.next}while(M!==null&&M!==t);if(b===null?s=i:b.next=p,!ct(i,e.memoizedState)&&(Xe=!0,N&&(a=wl,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=b,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function qo(e){var t=qe(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);ct(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Zs(e,t,a){var l=oe,n=qe(),i=ve;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var s=!ct((we||n).memoizedState,a);s&&(n.memoizedState=a,Xe=!0),n=n.queue;var p=Js.bind(null,l,n,e);if(En(2048,8,p,[e]),n.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,Ml(9,Bi(),Ps.bind(null,l,n,a,t),null),Ce===null)throw Error(u(349));i||(ha&124)!==0||Ks(l,t,a)}return a}function Ks(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=Lo(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ps(e,t,a,l){t.value=a,t.getSnapshot=l,$s(t)&&Ws(e)}function Js(e,t,a){return a(function(){$s(t)&&Ws(e)})}function $s(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ct(e,a)}catch(l){return!0}}function Ws(e){var t=yl(e,2);t!==null&&pt(t,e,2)}function Go(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),Pa){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},t}function Fs(e,t,a,l){return e.baseState=a,Uo(e,we,typeof l=="function"?l:Jt)}function Ph(e,t,a,l,n){if(ki(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};z.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Is(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Is(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=z.T,s={};z.T=s;try{var p=a(n,l),b=z.S;b!==null&&b(s,p),ef(e,t,p)}catch(M){Yo(e,t,M)}finally{z.T=i}}else try{i=a(n,l),ef(e,t,i)}catch(M){Yo(e,t,M)}}function ef(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){tf(e,t,l)},function(l){return Yo(e,t,l)}):tf(e,t,a)}function tf(e,t,a){t.status="fulfilled",t.value=a,af(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Is(e,a)))}function Yo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,af(t),t=t.next;while(t!==l)}e.action=null}function af(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lf(e,t){return t}function nf(e,t){if(ve){var a=Ce.formState;if(a!==null){e:{var l=oe;if(ve){if(Ne){t:{for(var n=Ne,i=Bt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Rt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ne=Rt(n.nextSibling),l=n.data==="F!";break e}}Xa(l)}l=!1}l&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lf,lastRenderedState:t},a.queue=l,a=jf.bind(null,oe,l),l.dispatch=a,l=Go(!1),i=Ko.bind(null,oe,!1,l.queue),l=lt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Ph.bind(null,oe,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function rf(e){var t=qe();return of(t,we,e)}function of(e,t,a){if(t=Uo(e,t,lf)[0],e=Hi(Jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Sn(t)}catch(s){throw s===hn?Ci:s}else l=t;t=qe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,Ml(9,Bi(),Jh.bind(null,n,a),null)),[l,i,e]}function Jh(e,t){e.action=t}function cf(e){var t=qe(),a=we;if(a!==null)return of(t,a,e);qe(),t=t.memoizedState,a=qe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Lo(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Bi(){return{destroy:void 0,resource:void 0}}function uf(){return qe().memoizedState}function Li(e,t,a,l){var n=lt();l=l===void 0?null:l,oe.flags|=e,n.memoizedState=Ml(1|t,Bi(),a,l)}function En(e,t,a,l){var n=qe();l=l===void 0?null:l;var i=n.memoizedState.inst;we!==null&&l!==null&&zo(l,we.memoizedState.deps)?n.memoizedState=Ml(t,i,a,l):(oe.flags|=e,n.memoizedState=Ml(1|t,i,a,l))}function sf(e,t){Li(8390656,8,e,t)}function ff(e,t){En(2048,8,e,t)}function df(e,t){return En(4,2,e,t)}function mf(e,t){return En(4,4,e,t)}function pf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hf(e,t,a){a=a!=null?a.concat([e]):null,En(4,4,pf.bind(null,t,e),a)}function Vo(){}function vf(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&zo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function gf(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&zo(t,l[1]))return l[0];if(l=e(),Pa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l}function Xo(e,t,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=xd(),oe.lanes|=e,Ea|=e,a)}function yf(e,t,a,l){return ct(a,t)?a:jl.current!==null?(e=Xo(e,a,l),ct(e,t)||(Xe=!0),e):(ha&42)===0?(Xe=!0,e.memoizedState=a):(e=xd(),oe.lanes|=e,Ea|=e,t)}function bf(e,t,a,l,n){var i=X.p;X.p=i!==0&&8>i?i:8;var s=z.T,p={};z.T=p,Ko(e,!1,t,a);try{var b=n(),M=z.S;if(M!==null&&M(p,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var N=Qh(b,l);wn(e,t,N,mt(e))}else wn(e,t,l,mt(e))}catch(L){wn(e,t,{then:function(){},status:"rejected",reason:L},mt())}finally{X.p=i,z.T=s}}function $h(){}function Qo(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=xf(e).queue;bf(e,n,t,F,a===null?$h:function(){return Sf(e),a(l)})}function xf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sf(e){var t=xf(e).next.queue;wn(e,t,{},mt())}function Zo(){return Fe(Gn)}function Ef(){return qe().memoizedState}function wf(){return qe().memoizedState}function Wh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=mt();e=ma(a);var l=pa(t,e,a);l!==null&&(pt(l,t,a),gn(l,t,a)),t={cache:Eo()},e.payload=t;return}t=t.return}}function Fh(e,t,a){var l=mt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ki(e)?Tf(t,a):(a=fo(e,t,a,l),a!==null&&(pt(a,e,l),Af(a,t,l)))}function jf(e,t,a){var l=mt();wn(e,t,a,l)}function wn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ki(e))Tf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,p=i(s,a);if(n.hasEagerState=!0,n.eagerState=p,ct(p,s))return Si(e,t,n,0),Ce===null&&xi(),!1}catch(b){}finally{}if(a=fo(e,t,n,l),a!==null)return pt(a,e,l),Af(a,t,l),!0}return!1}function Ko(e,t,a,l){if(l={lane:2,revertLane:Tc(),action:l,hasEagerState:!1,eagerState:null,next:null},ki(e)){if(t)throw Error(u(479))}else t=fo(e,a,l,2),t!==null&&pt(t,e,2)}function ki(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Tf(e,t){Tl=zi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Af(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,_u(e,a)}}var Ui={readContext:Fe,use:Ni,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},Mf={readContext:Fe,use:Ni,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:sf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Li(4194308,4,pf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){Li(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var l=e();if(Pa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=lt();if(a!==void 0){var n=a(t);if(Pa){ca(!0);try{a(t)}finally{ca(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Fh.bind(null,oe,e),[l.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,a=jf.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Vo,useDeferredValue:function(e,t){var a=lt();return Xo(a,e,t)},useTransition:function(){var e=Go(!1);return e=bf.bind(null,oe,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=oe,n=lt();if(ve){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ce===null)throw Error(u(349));(me&124)!==0||Ks(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,sf(Js.bind(null,l,i,e),[e]),l.flags|=2048,Ml(9,Bi(),Ps.bind(null,l,i,a,t),null),a},useId:function(){var e=lt(),t=Ce.identifierPrefix;if(ve){var a=Zt,l=Qt;a=(l&~(1<<32-ot(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=_i++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Zh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Zo,useFormState:nf,useActionState:nf,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ko.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:ko,useCacheRefresh:function(){return lt().memoizedState=Wh.bind(null,oe)}},Df={readContext:Fe,use:Ni,useCallback:vf,useContext:Fe,useEffect:ff,useImperativeHandle:hf,useInsertionEffect:df,useLayoutEffect:mf,useMemo:gf,useReducer:Hi,useRef:uf,useState:function(){return Hi(Jt)},useDebugValue:Vo,useDeferredValue:function(e,t){var a=qe();return yf(a,we.memoizedState,e,t)},useTransition:function(){var e=Hi(Jt)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Sn(e),t]},useSyncExternalStore:Zs,useId:Ef,useHostTransitionStatus:Zo,useFormState:rf,useActionState:rf,useOptimistic:function(e,t){var a=qe();return Fs(a,we,e,t)},useMemoCache:ko,useCacheRefresh:wf},Ih={readContext:Fe,use:Ni,useCallback:vf,useContext:Fe,useEffect:ff,useImperativeHandle:hf,useInsertionEffect:df,useLayoutEffect:mf,useMemo:gf,useReducer:qo,useRef:uf,useState:function(){return qo(Jt)},useDebugValue:Vo,useDeferredValue:function(e,t){var a=qe();return we===null?Xo(a,e,t):yf(a,we.memoizedState,e,t)},useTransition:function(){var e=qo(Jt)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:Sn(e),t]},useSyncExternalStore:Zs,useId:Ef,useHostTransitionStatus:Zo,useFormState:cf,useActionState:cf,useOptimistic:function(e,t){var a=qe();return we!==null?Fs(a,we,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ko,useCacheRefresh:wf},Dl=null,jn=0;function qi(e){var t=jn;return jn+=1,Dl===null&&(Dl=[]),ks(Dl,e,t)}function Tn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gi(e,t){throw t.$$typeof===O?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cf(e){var t=e._init;return t(e._payload)}function Rf(e){function t(T,w){if(e){var A=T.deletions;A===null?(T.deletions=[w],T.flags|=16):A.push(w)}}function a(T,w){if(!e)return null;for(;w!==null;)t(T,w),w=w.sibling;return null}function l(T){for(var w=new Map;T!==null;)T.key!==null?w.set(T.key,T):w.set(T.index,T),T=T.sibling;return w}function n(T,w){return T=Xt(T,w),T.index=0,T.sibling=null,T}function i(T,w,A){return T.index=A,e?(A=T.alternate,A!==null?(A=A.index,A<w?(T.flags|=67108866,w):A):(T.flags|=67108866,w)):(T.flags|=1048576,w)}function s(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function p(T,w,A,H){return w===null||w.tag!==6?(w=po(A,T.mode,H),w.return=T,w):(w=n(w,A),w.return=T,w)}function b(T,w,A,H){var P=A.type;return P===_?N(T,w,A.props.children,H,A.key):w!==null&&(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===be&&Cf(P)===w.type)?(w=n(w,A.props),Tn(w,A),w.return=T,w):(w=wi(A.type,A.key,A.props,null,T.mode,H),Tn(w,A),w.return=T,w)}function M(T,w,A,H){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=ho(A,T.mode,H),w.return=T,w):(w=n(w,A.children||[]),w.return=T,w)}function N(T,w,A,H,P){return w===null||w.tag!==7?(w=qa(A,T.mode,H,P),w.return=T,w):(w=n(w,A),w.return=T,w)}function L(T,w,A){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=po(""+w,T.mode,A),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case E:return A=wi(w.type,w.key,w.props,null,T.mode,A),Tn(A,w),A.return=T,A;case k:return w=ho(w,T.mode,A),w.return=T,w;case be:var H=w._init;return w=H(w._payload),L(T,w,A)}if(I(w)||ge(w))return w=qa(w,T.mode,A,null),w.return=T,w;if(typeof w.then=="function")return L(T,qi(w),A);if(w.$$typeof===V)return L(T,Mi(T,w),A);Gi(T,w)}return null}function D(T,w,A,H){var P=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return P!==null?null:p(T,w,""+A,H);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case E:return A.key===P?b(T,w,A,H):null;case k:return A.key===P?M(T,w,A,H):null;case be:return P=A._init,A=P(A._payload),D(T,w,A,H)}if(I(A)||ge(A))return P!==null?null:N(T,w,A,H,null);if(typeof A.then=="function")return D(T,w,qi(A),H);if(A.$$typeof===V)return D(T,w,Mi(T,A),H);Gi(T,A)}return null}function C(T,w,A,H,P){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return T=T.get(A)||null,p(w,T,""+H,P);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case E:return T=T.get(H.key===null?A:H.key)||null,b(w,T,H,P);case k:return T=T.get(H.key===null?A:H.key)||null,M(w,T,H,P);case be:var ce=H._init;return H=ce(H._payload),C(T,w,A,H,P)}if(I(H)||ge(H))return T=T.get(A)||null,N(w,T,H,P,null);if(typeof H.then=="function")return C(T,w,A,qi(H),P);if(H.$$typeof===V)return C(T,w,A,Mi(w,H),P);Gi(w,H)}return null}function le(T,w,A,H){for(var P=null,ce=null,W=w,ae=w=0,Ze=null;W!==null&&ae<A.length;ae++){W.index>ae?(Ze=W,W=null):Ze=W.sibling;var he=D(T,W,A[ae],H);if(he===null){W===null&&(W=Ze);break}e&&W&&he.alternate===null&&t(T,W),w=i(he,w,ae),ce===null?P=he:ce.sibling=he,ce=he,W=Ze}if(ae===A.length)return a(T,W),ve&&Ya(T,ae),P;if(W===null){for(;ae<A.length;ae++)W=L(T,A[ae],H),W!==null&&(w=i(W,w,ae),ce===null?P=W:ce.sibling=W,ce=W);return ve&&Ya(T,ae),P}for(W=l(W);ae<A.length;ae++)Ze=C(W,T,ae,A[ae],H),Ze!==null&&(e&&Ze.alternate!==null&&W.delete(Ze.key===null?ae:Ze.key),w=i(Ze,w,ae),ce===null?P=Ze:ce.sibling=Ze,ce=Ze);return e&&W.forEach(function(Oa){return t(T,Oa)}),ve&&Ya(T,ae),P}function ee(T,w,A,H){if(A==null)throw Error(u(151));for(var P=null,ce=null,W=w,ae=w=0,Ze=null,he=A.next();W!==null&&!he.done;ae++,he=A.next()){W.index>ae?(Ze=W,W=null):Ze=W.sibling;var Oa=D(T,W,he.value,H);if(Oa===null){W===null&&(W=Ze);break}e&&W&&Oa.alternate===null&&t(T,W),w=i(Oa,w,ae),ce===null?P=Oa:ce.sibling=Oa,ce=Oa,W=Ze}if(he.done)return a(T,W),ve&&Ya(T,ae),P;if(W===null){for(;!he.done;ae++,he=A.next())he=L(T,he.value,H),he!==null&&(w=i(he,w,ae),ce===null?P=he:ce.sibling=he,ce=he);return ve&&Ya(T,ae),P}for(W=l(W);!he.done;ae++,he=A.next())he=C(W,T,ae,he.value,H),he!==null&&(e&&he.alternate!==null&&W.delete(he.key===null?ae:he.key),w=i(he,w,ae),ce===null?P=he:ce.sibling=he,ce=he);return e&&W.forEach(function(eg){return t(T,eg)}),ve&&Ya(T,ae),P}function Te(T,w,A,H){if(typeof A=="object"&&A!==null&&A.type===_&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case E:e:{for(var P=A.key;w!==null;){if(w.key===P){if(P=A.type,P===_){if(w.tag===7){a(T,w.sibling),H=n(w,A.props.children),H.return=T,T=H;break e}}else if(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===be&&Cf(P)===w.type){a(T,w.sibling),H=n(w,A.props),Tn(H,A),H.return=T,T=H;break e}a(T,w);break}else t(T,w);w=w.sibling}A.type===_?(H=qa(A.props.children,T.mode,H,A.key),H.return=T,T=H):(H=wi(A.type,A.key,A.props,null,T.mode,H),Tn(H,A),H.return=T,T=H)}return s(T);case k:e:{for(P=A.key;w!==null;){if(w.key===P)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){a(T,w.sibling),H=n(w,A.children||[]),H.return=T,T=H;break e}else{a(T,w);break}else t(T,w);w=w.sibling}H=ho(A,T.mode,H),H.return=T,T=H}return s(T);case be:return P=A._init,A=P(A._payload),Te(T,w,A,H)}if(I(A))return le(T,w,A,H);if(ge(A)){if(P=ge(A),typeof P!="function")throw Error(u(150));return A=P.call(A),ee(T,w,A,H)}if(typeof A.then=="function")return Te(T,w,qi(A),H);if(A.$$typeof===V)return Te(T,w,Mi(T,A),H);Gi(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,w!==null&&w.tag===6?(a(T,w.sibling),H=n(w,A),H.return=T,T=H):(a(T,w),H=po(A,T.mode,H),H.return=T,T=H),s(T)):a(T,w)}return function(T,w,A,H){try{jn=0;var P=Te(T,w,A,H);return Dl=null,P}catch(W){if(W===hn||W===Ci)throw W;var ce=ut(29,W,null,T.mode);return ce.lanes=H,ce.return=T,ce}finally{}}}var Cl=Rf(!0),Of=Rf(!1),wt=R(null),Lt=null;function va(e){var t=e.alternate;Y(Ye,Ye.current&1),Y(wt,e),Lt===null&&(t===null||jl.current!==null||t.memoizedState!==null)&&(Lt=e)}function zf(e){if(e.tag===22){if(Y(Ye,Ye.current),Y(wt,e),Lt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Lt=e)}}else ga()}function ga(){Y(Ye,Ye.current),Y(wt,wt.current)}function $t(e){U(wt),Lt===e&&(Lt=null),U(Ye)}var Ye=R(0);function Yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Lc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Po(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=mt(),n=ma(l);n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(pt(t,e,l),gn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=mt(),n=ma(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=pa(e,n,l),t!==null&&(pt(t,e,l),gn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=mt(),l=ma(a);l.tag=2,t!=null&&(l.callback=t),t=pa(e,l,a),t!==null&&(pt(t,e,a),gn(t,e,a))}};function _f(e,t,a,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):t.prototype&&t.prototype.isPureReactComponent?!on(a,l)||!on(n,i):!0}function Nf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Vi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Hf(e){Vi(e)}function Bf(e){console.error(e)}function Lf(e){Vi(e)}function Xi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function kf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function $o(e,t,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Xi(e,t)},a}function Uf(e){return e=ma(e),e.tag=3,e}function qf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){kf(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){kf(t,a,l),typeof n!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function ev(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&dn(t,a,n,!0),a=wt.current,a!==null){switch(a.tag){case 13:return Lt===null?xc():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===To?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ec(e,l,n)),!1;case 22:return a.flags|=65536,l===To?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ec(e,l,n)),!1}throw Error(u(435,a.tag))}return Ec(e,l,n),xc(),!1}if(ve)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==yo&&(e=Error(u(422),{cause:l}),fn(bt(e,a)))):(l!==yo&&(t=Error(u(423),{cause:l}),fn(bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=bt(l,a),n=$o(e.stateNode,l,n),Do(e,n),He!==4&&(He=2)),!1;var i=Error(u(520),{cause:l});if(i=bt(i,a),zn===null?zn=[i]:zn.push(i),He!==4&&(He=2),t===null)return!0;l=bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=$o(a.stateNode,l,e),Do(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Uf(n),qf(n,e,a,l),Do(a,n),!1}a=a.return}while(a!==null);return!1}var Gf=Error(u(461)),Xe=!1;function Ke(e,t,a,l){t.child=e===null?Of(t,null,a,l):Cl(t,e.child,a,l)}function Yf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var s={};for(var p in l)p!=="ref"&&(s[p]=l[p])}else s=l;return Za(t),l=_o(e,t,a,s,i,n),p=No(),e!==null&&!Xe?(Ho(e,t,n),Wt(e,t,n)):(ve&&p&&vo(t),t.flags|=1,Ke(e,t,l,n),t.child)}function Vf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!mo(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Xf(e,t,i,l,n)):(e=wi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!nc(e,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:on,a(s,l)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Xt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Xf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(on(i,l)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=l=i,nc(e,n))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return Wo(e,t,a,l,n)}function Qf(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Zf(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,i!==null?i.cachePool:null),i!==null?Vs(t,i):Ro(),zf(t);else return t.lanes=t.childLanes=536870912,Zf(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(Di(t,i.cachePool),Vs(t,i),ga(),t.memoizedState=null):(e!==null&&Di(t,null),Ro(),ga());return Ke(e,t,n,a),t.child}function Zf(e,t,a,l){var n=jo();return n=n===null?null:{parent:Ge._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Di(t,null),Ro(),zf(t),e!==null&&dn(e,t,l,!0),null}function Qi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Wo(e,t,a,l,n){return Za(t),a=_o(e,t,a,l,void 0,n),l=No(),e!==null&&!Xe?(Ho(e,t,n),Wt(e,t,n)):(ve&&l&&vo(t),t.flags|=1,Ke(e,t,a,n),t.child)}function Kf(e,t,a,l,n,i){return Za(t),t.updateQueue=null,a=Qs(t,l,a,n),Xs(e),l=No(),e!==null&&!Xe?(Ho(e,t,i),Wt(e,t,i)):(ve&&l&&vo(t),t.flags|=1,Ke(e,t,a,i),t.child)}function Pf(e,t,a,l,n){if(Za(t),t.stateNode===null){var i=bl,s=a.contextType;typeof s=="object"&&s!==null&&(i=Fe(s)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Jo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Ao(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Fe(s):bl,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Po(t,a,s,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Jo.enqueueReplaceState(i,i.state,null),bn(t,l,i,n),yn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var p=t.memoizedProps,b=Ja(a,p);i.props=b;var M=i.context,N=a.contextType;s=bl,typeof N=="object"&&N!==null&&(s=Fe(N));var L=a.getDerivedStateFromProps;N=typeof L=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||M!==s)&&Nf(t,i,l,s),da=!1;var D=t.memoizedState;i.state=D,bn(t,l,i,n),yn(),M=t.memoizedState,p||D!==M||da?(typeof L=="function"&&(Po(t,a,L,l),M=t.memoizedState),(b=da||_f(t,a,b,l,D,M,s))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=M),i.props=l,i.state=M,i.context=s,l=b):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Mo(e,t),s=t.memoizedProps,N=Ja(a,s),i.props=N,L=t.pendingProps,D=i.context,M=a.contextType,b=bl,typeof M=="object"&&M!==null&&(b=Fe(M)),p=a.getDerivedStateFromProps,(M=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==L||D!==b)&&Nf(t,i,l,b),da=!1,D=t.memoizedState,i.state=D,bn(t,l,i,n),yn();var C=t.memoizedState;s!==L||D!==C||da||e!==null&&e.dependencies!==null&&Ai(e.dependencies)?(typeof p=="function"&&(Po(t,a,p,l),C=t.memoizedState),(N=da||_f(t,a,N,l,D,C,b)||e!==null&&e.dependencies!==null&&Ai(e.dependencies))?(M||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,C,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,C,b)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=b,l=N):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Qi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Cl(t,e.child,null,n),t.child=Cl(t,null,a,n)):Ke(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Wt(e,t,n),e}function Jf(e,t,a,l){return sn(),t.flags|=256,Ke(e,t,a,l),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Io(e){return{baseLanes:e,cachePool:Hs()}}function ec(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=jt),e}function $f(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(n?va(t):ga(),ve){var p=Ne,b;if(b=p){e:{for(b=p,p=Bt;b.nodeType!==8;){if(!p){p=null;break e}if(b=Rt(b.nextSibling),b===null){p=null;break e}}p=b}p!==null?(t.memoizedState={dehydrated:p,treeContext:Ga!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},b=ut(18,null,null,0),b.stateNode=p,b.return=t,t.child=b,et=t,Ne=null,b=!0):b=!1}b||Xa(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return Lc(p)?t.lanes=32:t.lanes=536870912,null;$t(t)}return p=l.children,l=l.fallback,n?(ga(),n=t.mode,p=Zi({mode:"hidden",children:p},n),l=qa(l,n,a,null),p.return=t,l.return=t,p.sibling=l,t.child=p,n=t.child,n.memoizedState=Io(a),n.childLanes=ec(e,s,a),t.memoizedState=Fo,l):(va(t),tc(t,p))}if(b=e.memoizedState,b!==null&&(p=b.dehydrated,p!==null)){if(i)t.flags&256?(va(t),t.flags&=-257,t=ac(e,t,a)):t.memoizedState!==null?(ga(),t.child=e.child,t.flags|=128,t=null):(ga(),n=l.fallback,p=t.mode,l=Zi({mode:"visible",children:l.children},p),n=qa(n,p,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,Cl(t,e.child,null,a),l=t.child,l.memoizedState=Io(a),l.childLanes=ec(e,s,a),t.memoizedState=Fo,t=n);else if(va(t),Lc(p)){if(s=p.nextSibling&&p.nextSibling.dataset,s)var M=s.dgst;s=M,l=Error(u(419)),l.stack="",l.digest=s,fn({value:l,source:null,stack:null}),t=ac(e,t,a)}else if(Xe||dn(e,t,a,!1),s=(a&e.childLanes)!==0,Xe||s){if(s=Ce,s!==null&&(l=a&-a,l=(l&42)!==0?1:Lr(l),l=(l&(s.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,yl(e,l),pt(s,e,l),Gf;p.data==="$?"||xc(),t=ac(e,t,a)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Ne=Rt(p.nextSibling),et=t,ve=!0,Va=null,Bt=!1,e!==null&&(St[Et++]=Qt,St[Et++]=Zt,St[Et++]=Ga,Qt=e.id,Zt=e.overflow,Ga=t),t=tc(t,l.children),t.flags|=4096);return t}return n?(ga(),n=l.fallback,p=t.mode,b=e.child,M=b.sibling,l=Xt(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,M!==null?n=Xt(M,n):(n=qa(n,p,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,p=e.child.memoizedState,p===null?p=Io(a):(b=p.cachePool,b!==null?(M=Ge._currentValue,b=b.parent!==M?{parent:M,pool:M}:b):b=Hs(),p={baseLanes:p.baseLanes|a,cachePool:b}),n.memoizedState=p,n.childLanes=ec(e,s,a),t.memoizedState=Fo,l):(va(t),a=e.child,e=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function tc(e,t){return t=Zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zi(e,t){return e=ut(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ac(e,t,a){return Cl(t,e.child,null,a),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),xo(e.return,t,a)}function lc(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function Ff(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Ke(e,t,l.children,a),l=Ye.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wf(e,a,t);else if(e.tag===19)Wf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Y(Ye,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Yi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),lc(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Yi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}lc(t,!0,a,null,i);break;case"together":lc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ea|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(dn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Xt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Xt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function nc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ai(e)))}function tv(e,t,a){switch(t.tag){case 3:Ee(t,t.stateNode.containerInfo),fa(t,Ge,e.memoizedState.cache),sn();break;case 27:case 5:zr(t);break;case 4:Ee(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?$f(e,t,a):(va(t),e=Wt(e,t,a),e!==null?e.sibling:null);va(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(dn(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Ff(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(Ye,Ye.current),l)break;return null;case 22:case 23:return t.lanes=0,Qf(e,t,a);case 24:fa(t,Ge,e.memoizedState.cache)}return Wt(e,t,a)}function If(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!nc(e,a)&&(t.flags&128)===0)return Xe=!1,tv(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,ve&&(t.flags&1048576)!==0&&Ds(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")mo(l)?(e=Ja(l,e),t.tag=1,t=Pf(null,t,l,e,a)):(t.tag=0,t=Wo(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===J){t.tag=11,t=Yf(null,t,l,e,a);break e}else if(n===fe){t.tag=14,t=Vf(null,t,l,e,a);break e}}throw t=Mt(l)||l,Error(u(306,t,""))}}return t;case 0:return Wo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ja(l,t.pendingProps),Pf(e,t,l,n,a);case 3:e:{if(Ee(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Mo(e,t),bn(t,l,null,a);var s=t.memoizedState;if(l=s.cache,fa(t,Ge,l),l!==i.cache&&So(t,[Ge],a,!0),yn(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Jf(e,t,l,a);break e}else if(l!==n){n=bt(Error(u(424)),t),fn(n),t=Jf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=Rt(e.firstChild),et=t,ve=!0,Va=null,Bt=!0,a=Of(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(sn(),l===n){t=Wt(e,t,a);break e}Ke(e,t,l,a)}t=t.child}return t;case 26:return Qi(e,t),e===null?(a=lm(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,l=rr($.current).createElement(a),l[We]=t,l[tt]=e,Je(l,a,e),Ve(l),t.stateNode=l):t.memoizedState=lm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zr(t),e===null&&ve&&(l=t.stateNode=em(t.type,t.pendingProps,$.current),et=t,Bt=!0,n=Ne,Aa(t.type)?(kc=n,Ne=Rt(l.firstChild)):Ne=n),Ke(e,t,t.pendingProps.children,a),Qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((n=l=Ne)&&(l=Cv(l,t.type,t.pendingProps,Bt),l!==null?(t.stateNode=l,et=t,Ne=Rt(l.firstChild),Bt=!1,n=!0):n=!1),n||Xa(t)),zr(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Nc(n,i)?l=null:s!==null&&Nc(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=_o(e,t,Kh,null,null,a),Gn._currentValue=n),Qi(e,t),Ke(e,t,l,a),t.child;case 6:return e===null&&ve&&((e=a=Ne)&&(a=Rv(a,t.pendingProps,Bt),a!==null?(t.stateNode=a,et=t,Ne=null,e=!0):e=!1),e||Xa(t)),null;case 13:return $f(e,t,a);case 4:return Ee(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Cl(t,null,l,a):Ke(e,t,l,a),t.child;case 11:return Yf(e,t,t.type,t.pendingProps,a);case 7:return Ke(e,t,t.pendingProps,a),t.child;case 8:return Ke(e,t,t.pendingProps.children,a),t.child;case 12:return Ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,fa(t,t.type,l.value),Ke(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=Fe(n),l=l(n),t.flags|=1,Ke(e,t,l,a),t.child;case 14:return Vf(e,t,t.type,t.pendingProps,a);case 15:return Xf(e,t,t.type,t.pendingProps,a);case 19:return Ff(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Zi(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Xt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Qf(e,t,a);case 24:return Za(t),l=Fe(Ge),e===null?(n=jo(),n===null&&(n=Ce,i=Eo(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Ao(t),fa(t,Ge,n)):((e.lanes&a)!==0&&(Mo(e,t),bn(t,null,null,a),yn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),fa(t,Ge,l)):(l=i.cache,fa(t,Ge,l),l!==n.cache&&So(t,[Ge],a,!0))),Ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Ft(e){e.flags|=4}function ed(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cm(t)){if(t=wt.current,t!==null&&((me&4194048)===me?Lt!==null:(me&62914560)!==me&&(me&536870912)===0||t!==Lt))throw vn=To,Bs;e.flags|=8192}}function Ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ou():536870912,e.lanes|=t,_l|=t)}function An(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function av(e,t,a){var l=t.pendingProps;switch(go(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Pt(Ge),oa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(un(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Os())),ze(t),null;case 26:return a=t.memoizedState,e===null?(Ft(t),a!==null?(ze(t),ed(t,a)):(ze(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Ft(t),ze(t),ed(t,a)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==l&&Ft(t),ze(t),t.flags&=-16777217),null;case 27:ni(t),a=$.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return ze(t),null}e=K.current,un(t)?Cs(t):(e=em(n,l,a),t.stateNode=e,Ft(t))}return ze(t),null;case 5:if(ni(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return ze(t),null}if(e=K.current,un(t))Cs(t);else{switch(n=rr($.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[We]=t,e[tt]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Je(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ft(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=$.current,un(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=et,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Kd(e.nodeValue,a)),e||Xa(t)}else e=rr(e).createTextNode(l),e[We]=t,t.stateNode=e}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=un(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[We]=t}else sn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Os(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?($t(t),t):($t(t),null)}if($t(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ki(t,t.updateQueue),ze(t),null;case 4:return oa(),e===null&&Cc(t.stateNode.containerInfo),ze(t),null;case 10:return Pt(t.type),ze(t),null;case 19:if(U(Ye),n=t.memoizedState,n===null)return ze(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)An(n,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Yi(e),i!==null){for(t.flags|=128,An(n,!1),e=i.updateQueue,t.updateQueue=e,Ki(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ms(a,e),a=a.sibling;return Y(Ye,Ye.current&1|2),t.child}e=e.sibling}n.tail!==null&&Ht()>$i&&(t.flags|=128,l=!0,An(n,!1),t.lanes=4194304)}else{if(!l)if(e=Yi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ki(t,e),An(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ve)return ze(t),null}else 2*Ht()-n.renderingStartTime>$i&&a!==536870912&&(t.flags|=128,l=!0,An(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Ht(),t.sibling=null,e=Ye.current,Y(Ye,l?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return $t(t),Oo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ki(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&U(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pt(Ge),ze(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function lv(e,t){switch(go(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pt(Ge),oa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ni(t),null;case 13:if($t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Ye),null;case 4:return oa(),null;case 10:return Pt(t.type),null;case 22:case 23:return $t(t),Oo(),e!==null&&U(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pt(Ge),null;case 25:return null;default:return null}}function td(e,t){switch(go(t),t.tag){case 3:Pt(Ge),oa();break;case 26:case 27:case 5:ni(t);break;case 4:oa();break;case 13:$t(t);break;case 19:U(Ye);break;case 10:Pt(t.type);break;case 22:case 23:$t(t),Oo(),e!==null&&U(Ka);break;case 24:Pt(Ge)}}function Mn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(p){De(t,t.return,p)}}function ya(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,p=s.destroy;if(p!==void 0){s.destroy=void 0,n=t;var b=a,M=p;try{M()}catch(N){De(n,b,N)}}}l=l.next}while(l!==i)}}catch(N){De(t,t.return,N)}}function ad(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ys(t,a)}catch(l){De(e,e.return,l)}}}function ld(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){De(e,t,l)}}function Dn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){De(e,t,n)}}function kt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){De(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){De(e,t,n)}else a.current=null}function nd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){De(e,e.return,n)}}function ic(e,t,a){try{var l=e.stateNode;jv(l,e.type,a,t),l[tt]=t}catch(n){De(e,e.return,n)}}function id(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ir));else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(oc(e,t,a),e=e.sibling;e!==null;)oc(e,t,a),e=e.sibling}function Pi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pi(e,t,a),e=e.sibling;e!==null;)Pi(e,t,a),e=e.sibling}function rd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,l,a),t[We]=e,t[tt]=a}catch(i){De(e,e.return,i)}}var It=!1,Le=!1,cc=!1,od=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function nv(e,t){if(e=e.containerInfo,zc=dr,e=gs(e),io(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch(ee){a=null;break e}var s=0,p=-1,b=-1,M=0,N=0,L=e,D=null;t:for(;;){for(var C;L!==a||n!==0&&L.nodeType!==3||(p=s+n),L!==i||l!==0&&L.nodeType!==3||(b=s+l),L.nodeType===3&&(s+=L.nodeValue.length),(C=L.firstChild)!==null;)D=L,L=C;for(;;){if(L===e)break t;if(D===a&&++M===n&&(p=s),D===i&&++N===l&&(b=s),(C=L.nextSibling)!==null)break;L=D,D=L.parentNode}L=C}a=p===-1||b===-1?null:{start:p,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(_c={focusedElem:e,selectionRange:a},dr=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var le=Ja(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(le,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){De(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Bc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function cd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),l&4&&Mn(5,a);break;case 1:if(ba(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){De(a,a.return,s)}else{var n=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){De(a,a.return,s)}}l&64&&ad(a),l&512&&Dn(a,a.return);break;case 3:if(ba(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ys(e,t)}catch(s){De(a,a.return,s)}}break;case 27:t===null&&l&4&&rd(a);case 26:case 5:ba(e,a),t===null&&l&4&&nd(a),l&512&&Dn(a,a.return);break;case 12:ba(e,a);break;case 13:ba(e,a),l&4&&fd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mv.bind(null,a),Ov(e,a))));break;case 22:if(l=a.memoizedState!==null||It,!l){t=t!==null&&t.memoizedState!==null||Le,n=It;var i=Le;It=l,(Le=t)&&!i?xa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),It=n,Le=i}break;case 30:break;default:ba(e,a)}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,nt=!1;function ea(e,t,a){for(a=a.child;a!==null;)sd(e,t,a),a=a.sibling}function sd(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Pl,a)}catch(i){}switch(a.tag){case 26:Le||kt(a,t),ea(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||kt(a,t);var l=Oe,n=nt;Aa(a.type)&&(Oe=a.stateNode,nt=!1),ea(e,t,a),Ln(a.stateNode),Oe=l,nt=n;break;case 5:Le||kt(a,t);case 6:if(l=Oe,n=nt,Oe=null,ea(e,t,a),Oe=l,nt=n,Oe!==null)if(nt)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(a.stateNode)}catch(i){De(a,t,i)}else try{Oe.removeChild(a.stateNode)}catch(i){De(a,t,i)}break;case 18:Oe!==null&&(nt?(e=Oe,Fd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qn(e)):Fd(Oe,a.stateNode));break;case 4:l=Oe,n=nt,Oe=a.stateNode.containerInfo,nt=!0,ea(e,t,a),Oe=l,nt=n;break;case 0:case 11:case 14:case 15:Le||ya(2,a,t),Le||ya(4,a,t),ea(e,t,a);break;case 1:Le||(kt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ld(a,t,l)),ea(e,t,a);break;case 21:ea(e,t,a);break;case 22:Le=(l=Le)||a.memoizedState!==null,ea(e,t,a),Le=l;break;default:ea(e,t,a)}}function fd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qn(e)}catch(a){De(t,t.return,a)}}function iv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new od),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new od),t;default:throw Error(u(435,e.tag))}}function uc(e,t){var a=iv(e);t.forEach(function(l){var n=pv.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function st(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,s=t,p=s;e:for(;p!==null;){switch(p.tag){case 27:if(Aa(p.type)){Oe=p.stateNode,nt=!1;break e}break;case 5:Oe=p.stateNode,nt=!1;break e;case 3:case 4:Oe=p.stateNode.containerInfo,nt=!0;break e}p=p.return}if(Oe===null)throw Error(u(160));sd(i,s,n),Oe=null,nt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)dd(t,e),t=t.sibling}var Ct=null;function dd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),ft(e),l&4&&(ya(3,e,e.return),Mn(3,e),ya(5,e,e.return));break;case 1:st(t,e),ft(e),l&512&&(Le||a===null||kt(a,a.return)),l&64&&It&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ct;if(st(t,e),ft(e),l&512&&(Le||a===null||kt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Wl]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Je(i,l,a),i[We]=e,Ve(i),l=i;break e;case"link":var s=rm("link","href",n).get(l+(a.href||""));if(s){for(var p=0;p<s.length;p++)if(i=s[p],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(p,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;case"meta":if(s=rm("meta","content",n).get(l+(a.content||""))){for(p=0;p<s.length;p++)if(i=s[p],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(p,1);break t}}i=n.createElement(l),Je(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[We]=e,Ve(i),l=i}e.stateNode=l}else om(n,e.type,e.stateNode);else e.stateNode=im(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?om(n,e.type,e.stateNode):im(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ic(e,e.memoizedProps,a.memoizedProps)}break;case 27:st(t,e),ft(e),l&512&&(Le||a===null||kt(a,a.return)),a!==null&&l&4&&ic(e,e.memoizedProps,a.memoizedProps);break;case 5:if(st(t,e),ft(e),l&512&&(Le||a===null||kt(a,a.return)),e.flags&32){n=e.stateNode;try{fl(n,"")}catch(C){De(e,e.return,C)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,ic(e,n,a!==null?a.memoizedProps:n)),l&1024&&(cc=!0);break;case 6:if(st(t,e),ft(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(C){De(e,e.return,C)}}break;case 3:if(ur=null,n=Ct,Ct=or(t.containerInfo),st(t,e),Ct=n,ft(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(C){De(e,e.return,C)}cc&&(cc=!1,md(e));break;case 4:l=Ct,Ct=or(e.stateNode.containerInfo),st(t,e),ft(e),Ct=l;break;case 12:st(t,e),ft(e);break;case 13:st(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hc=Ht()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,uc(e,l)));break;case 22:n=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,M=It,N=Le;if(It=M||n,Le=N||b,st(t,e),Le=N,It=M,ft(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||b||It||Le||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(i=b.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{p=b.stateNode;var L=b.memoizedProps.style,D=L!=null&&L.hasOwnProperty("display")?L.display:null;p.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(C){De(b,b.return,C)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=n?"":b.memoizedProps}catch(C){De(b,b.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,uc(e,a))));break;case 19:st(t,e),ft(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,uc(e,l)));break;case 30:break;case 21:break;default:st(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(id(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=rc(e);Pi(e,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(fl(s,""),a.flags&=-33);var p=rc(e);Pi(e,p,s);break;case 3:case 4:var b=a.stateNode.containerInfo,M=rc(e);oc(e,M,b);break;default:throw Error(u(161))}}catch(N){De(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function md(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;md(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cd(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ya(4,t,t.return),$a(t);break;case 1:kt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ld(t,t.return,a),$a(t);break;case 27:Ln(t.stateNode);case 26:case 5:kt(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function xa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:xa(n,i,a),Mn(4,i);break;case 1:if(xa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(M){De(l,l.return,M)}if(l=i,n=l.updateQueue,n!==null){var p=l.stateNode;try{var b=n.shared.hiddenCallbacks;if(b!==null)for(n.shared.hiddenCallbacks=null,n=0;n<b.length;n++)Gs(b[n],p)}catch(M){De(l,l.return,M)}}a&&s&64&&ad(i),Dn(i,i.return);break;case 27:rd(i);case 26:case 5:xa(n,i,a),a&&l===null&&s&4&&nd(i),Dn(i,i.return);break;case 12:xa(n,i,a);break;case 13:xa(n,i,a),a&&s&4&&fd(n,i);break;case 22:i.memoizedState===null&&xa(n,i,a),Dn(i,i.return);break;case 30:break;default:xa(n,i,a)}t=t.sibling}}function sc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mn(a))}function fc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mn(e))}function Ut(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pd(e,t,a,l),t=t.sibling}function pd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,a,l),n&2048&&Mn(9,t);break;case 1:Ut(e,t,a,l);break;case 3:Ut(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mn(e)));break;case 12:if(n&2048){Ut(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,p=i.onPostCommit;typeof p=="function"&&p(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){De(t,t.return,b)}}else Ut(e,t,a,l);break;case 13:Ut(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Ut(e,t,a,l):Cn(e,t):i._visibility&2?Ut(e,t,a,l):(i._visibility|=2,Rl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&sc(s,t);break;case 24:Ut(e,t,a,l),n&2048&&fc(t.alternate,t);break;default:Ut(e,t,a,l)}}function Rl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,s=t,p=a,b=l,M=s.flags;switch(s.tag){case 0:case 11:case 15:Rl(i,s,p,b,n),Mn(8,s);break;case 23:break;case 22:var N=s.stateNode;s.memoizedState!==null?N._visibility&2?Rl(i,s,p,b,n):Cn(i,s):(N._visibility|=2,Rl(i,s,p,b,n)),n&&M&2048&&sc(s.alternate,s);break;case 24:Rl(i,s,p,b,n),n&&M&2048&&fc(s.alternate,s);break;default:Rl(i,s,p,b,n)}t=t.sibling}}function Cn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Cn(a,l),n&2048&&sc(l.alternate,l);break;case 24:Cn(a,l),n&2048&&fc(l.alternate,l);break;default:Cn(a,l)}t=t.sibling}}var Rn=8192;function Ol(e){if(e.subtreeFlags&Rn)for(e=e.child;e!==null;)hd(e),e=e.sibling}function hd(e){switch(e.tag){case 26:Ol(e),e.flags&Rn&&e.memoizedState!==null&&Xv(Ct,e.memoizedState,e.memoizedProps);break;case 5:Ol(e);break;case 3:case 4:var t=Ct;Ct=or(e.stateNode.containerInfo),Ol(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Rn,Rn=16777216,Ol(e),Rn=t):Ol(e));break;default:Ol(e)}}function vd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function On(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,yd(l,e)}vd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gd(e),e=e.sibling}function gd(e){switch(e.tag){case 0:case 11:case 15:On(e),e.flags&2048&&ya(9,e,e.return);break;case 3:On(e);break;case 12:On(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):On(e);break;default:On(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,yd(l,e)}vd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),Ji(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function yd(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:mn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qe=l;else e:for(a=e;Qe!==null;){l=Qe;var n=l.sibling,i=l.return;if(ud(l),l===a){Qe=null;break e}if(n!==null){n.return=i,Qe=n;break e}Qe=i}}}var rv={getCacheForType:function(e){var t=Fe(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},ov=typeof WeakMap=="function"?WeakMap:Map,xe=0,Ce=null,ue=null,me=0,Se=0,dt=null,Sa=!1,zl=!1,dc=!1,ta=0,He=0,Ea=0,Wa=0,mc=0,jt=0,_l=0,zn=null,it=null,pc=!1,hc=0,$i=1/0,Wi=null,wa=null,Pe=0,ja=null,Nl=null,Hl=0,vc=0,gc=null,bd=null,_n=0,yc=null;function mt(){if((xe&2)!==0&&me!==0)return me&-me;if(z.T!==null){var e=El;return e!==0?e:Tc()}return Nu()}function xd(){jt===0&&(jt=(me&536870912)===0||ve?Ru():536870912);var e=wt.current;return e!==null&&(e.flags|=32),jt}function pt(e,t,a){(e===Ce&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Bl(e,0),Ta(e,me,jt,!1)),$l(e,a),((xe&2)===0||e!==Ce)&&(e===Ce&&((xe&2)===0&&(Wa|=a),He===4&&Ta(e,me,jt,!1)),qt(e))}function Sd(e,t,a){if((xe&6)!==0)throw Error(u(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Jl(e,t),n=l?sv(e,t):Sc(e,t,!0),i=l;do{if(n===0){zl&&!l&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!cv(a)){n=Sc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var p=e;n=zn;var b=p.current.memoizedState.isDehydrated;if(b&&(Bl(p,s).flags|=256),s=Sc(p,s,!1),s!==2){if(dc&&!b){p.errorRecoveryDisabledLanes|=i,Wa|=i,n=4;break e}i=it,it=n,i!==null&&(it===null?it=i:it.push.apply(it,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){Bl(e,0),Ta(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ta(l,t,jt,!Sa);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=hc+300-Ht(),10<n)){if(Ta(l,t,jt,!Sa),ci(l,0,!0)!==0)break e;l.timeoutHandle=$d(Ed.bind(null,l,a,it,Wi,pc,t,jt,Wa,_l,Sa,i,2,-0,0),n);break e}Ed(l,a,it,Wi,pc,t,jt,Wa,_l,Sa,i,0,-0,0)}}break}while(!0);qt(e)}function Ed(e,t,a,l,n,i,s,p,b,M,N,L,D,C){if(e.timeoutHandle=-1,L=t.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(qn={stylesheets:null,count:0,unsuspend:Vv},hd(t),L=Qv(),L!==null)){e.cancelPendingCommit=L(Cd.bind(null,e,t,i,a,l,n,s,p,b,N,1,D,C)),Ta(e,i,s,!M);return}Cd(e,t,i,a,l,n,s,p,b)}function cv(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ct(i(),n))return!1}catch(s){return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,l){t&=~mc,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ot(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&zu(e,a,t)}function Fi(){return(xe&6)===0?(Nn(0),!1):!0}function bc(){if(ue!==null){if(Se===0)var e=ue.return;else e=ue,Kt=Qa=null,Bo(e),Dl=null,jn=0,e=ue;for(;e!==null;)td(e.alternate,e),e=e.return;ue=null}}function Bl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Av(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),bc(),Ce=e,ue=a=Xt(e.current,null),me=t,Se=0,dt=null,Sa=!1,zl=Jl(e,t),dc=!1,_l=jt=mc=Wa=Ea=He=0,it=zn=null,pc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ot(l),i=1<<n;t|=e[n],l&=~i}return ta=t,xi(),a}function wd(e,t){oe=null,z.H=Ui,t===hn||t===Ci?(t=Us(),Se=3):t===Bs?(t=Us(),Se=4):Se=t===Gf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dt=t,ue===null&&(He=1,Xi(e,bt(t,e.current)))}function jd(){var e=z.H;return z.H=Ui,e===null?Ui:e}function Td(){var e=z.A;return z.A=rv,e}function xc(){He=4,Sa||(me&4194048)!==me&&wt.current!==null||(zl=!0),(Ea&134217727)===0&&(Wa&134217727)===0||Ce===null||Ta(Ce,me,jt,!1)}function Sc(e,t,a){var l=xe;xe|=2;var n=jd(),i=Td();(Ce!==e||me!==t)&&(Wi=null,Bl(e,t)),t=!1;var s=He;e:do try{if(Se!==0&&ue!==null){var p=ue,b=dt;switch(Se){case 8:bc(),s=6;break e;case 3:case 2:case 9:case 6:wt.current===null&&(t=!0);var M=Se;if(Se=0,dt=null,Ll(e,p,b,M),a&&zl){s=0;break e}break;default:M=Se,Se=0,dt=null,Ll(e,p,b,M)}}uv(),s=He;break}catch(N){wd(e,N)}while(!0);return t&&e.shellSuspendCounter++,Kt=Qa=null,xe=l,z.H=n,z.A=i,ue===null&&(Ce=null,me=0,xi()),s}function uv(){for(;ue!==null;)Ad(ue)}function sv(e,t){var a=xe;xe|=2;var l=jd(),n=Td();Ce!==e||me!==t?(Wi=null,$i=Ht()+500,Bl(e,t)):zl=Jl(e,t);e:do try{if(Se!==0&&ue!==null){t=ue;var i=dt;t:switch(Se){case 1:Se=0,dt=null,Ll(e,t,i,1);break;case 2:case 9:if(Ls(i)){Se=0,dt=null,Md(t);break}t=function(){Se!==2&&Se!==9||Ce!==e||(Se=7),qt(e)},i.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:Ls(i)?(Se=0,dt=null,Md(t)):(Se=0,dt=null,Ll(e,t,i,7));break;case 5:var s=null;switch(ue.tag){case 26:s=ue.memoizedState;case 5:case 27:var p=ue;if(!s||cm(s)){Se=0,dt=null;var b=p.sibling;if(b!==null)ue=b;else{var M=p.return;M!==null?(ue=M,Ii(M)):ue=null}break t}}Se=0,dt=null,Ll(e,t,i,5);break;case 6:Se=0,dt=null,Ll(e,t,i,6);break;case 8:bc(),He=6;break e;default:throw Error(u(462))}}fv();break}catch(N){wd(e,N)}while(!0);return Kt=Qa=null,z.H=l,z.A=n,xe=a,ue!==null?0:(Ce=null,me=0,xi(),He)}function fv(){for(;ue!==null&&!_p();)Ad(ue)}function Ad(e){var t=If(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Ii(e):ue=t}function Md(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Kf(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=Kf(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:Bo(t);default:td(a,t),t=ue=Ms(t,ta),t=If(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Ii(e):ue=t}function Ll(e,t,a,l){Kt=Qa=null,Bo(t),Dl=null,jn=0;var n=t.return;try{if(ev(e,n,t,a,me)){He=1,Xi(e,bt(a,e.current)),ue=null;return}}catch(i){if(n!==null)throw ue=n,i;He=1,Xi(e,bt(a,e.current)),ue=null;return}t.flags&32768?(ve||l===1?e=!0:zl||(me&536870912)!==0?e=!1:(Sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=wt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Dd(t,e)):Ii(t)}function Ii(e){var t=e;do{if((t.flags&32768)!==0){Dd(t,Sa);return}e=t.return;var a=av(t.alternate,t,ta);if(a!==null){ue=a;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);He===0&&(He=5)}function Dd(e,t){do{var a=lv(e.alternate,e);if(a!==null){a.flags&=32767,ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=a}while(e!==null);He=6,ue=null}function Cd(e,t,a,l,n,i,s,p,b){e.cancelPendingCommit=null;do er();while(Pe!==0);if((xe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=so,Vp(e,a,i,s,p,b),e===Ce&&(ue=Ce=null,me=0),Nl=t,ja=e,Hl=a,vc=i,gc=n,bd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hv(ii,function(){return Nd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,n=X.p,X.p=2,s=xe,xe|=4;try{nv(e,t,a)}finally{xe=s,X.p=n,z.T=l}}Pe=1,Rd(),Od(),zd()}}function Rd(){if(Pe===1){Pe=0;var e=ja,t=Nl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=X.p;X.p=2;var n=xe;xe|=4;try{dd(t,e);var i=_c,s=gs(e.containerInfo),p=i.focusedElem,b=i.selectionRange;if(s!==p&&p&&p.ownerDocument&&vs(p.ownerDocument.documentElement,p)){if(b!==null&&io(p)){var M=b.start,N=b.end;if(N===void 0&&(N=M),"selectionStart"in p)p.selectionStart=M,p.selectionEnd=Math.min(N,p.value.length);else{var L=p.ownerDocument||document,D=L&&L.defaultView||window;if(D.getSelection){var C=D.getSelection(),le=p.textContent.length,ee=Math.min(b.start,le),Te=b.end===void 0?ee:Math.min(b.end,le);!C.extend&&ee>Te&&(s=Te,Te=ee,ee=s);var T=hs(p,ee),w=hs(p,Te);if(T&&w&&(C.rangeCount!==1||C.anchorNode!==T.node||C.anchorOffset!==T.offset||C.focusNode!==w.node||C.focusOffset!==w.offset)){var A=L.createRange();A.setStart(T.node,T.offset),C.removeAllRanges(),ee>Te?(C.addRange(A),C.extend(w.node,w.offset)):(A.setEnd(w.node,w.offset),C.addRange(A))}}}}for(L=[],C=p;C=C.parentNode;)C.nodeType===1&&L.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<L.length;p++){var H=L[p];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}dr=!!zc,_c=zc=null}finally{xe=n,X.p=l,z.T=a}}e.current=t,Pe=2}}function Od(){if(Pe===2){Pe=0;var e=ja,t=Nl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=X.p;X.p=2;var n=xe;xe|=4;try{cd(e,t.alternate,t)}finally{xe=n,X.p=l,z.T=a}}Pe=3}}function zd(){if(Pe===4||Pe===3){Pe=0,Np();var e=ja,t=Nl,a=Hl,l=bd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,Nl=ja=null,_d(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(wa=null),kr(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch(b){}if(l!==null){t=z.T,n=X.p,X.p=2,z.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var p=l[s];i(p.value,{componentStack:p.stack})}}finally{z.T=t,X.p=n}}(Hl&3)!==0&&er(),qt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===yc?_n++:(_n=0,yc=e):_n=0,Nn(0)}}function _d(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mn(t)))}function er(e){return Rd(),Od(),zd(),Nd()}function Nd(){if(Pe!==5)return!1;var e=ja,t=vc;vc=0;var a=kr(Hl),l=z.T,n=X.p;try{X.p=32>a?32:a,z.T=null,a=gc,gc=null;var i=ja,s=Hl;if(Pe=0,Nl=ja=null,Hl=0,(xe&6)!==0)throw Error(u(331));var p=xe;if(xe|=4,gd(i.current),pd(i,i.current,s,a),xe=p,Nn(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Pl,i)}catch(b){}return!0}finally{X.p=n,z.T=l,_d(e,t)}}function Hd(e,t,a){t=bt(a,t),t=$o(e.stateNode,t,2),e=pa(e,t,2),e!==null&&($l(e,2),qt(e))}function De(e,t,a){if(e.tag===3)Hd(e,e,a);else for(;t!==null;){if(t.tag===3){Hd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=bt(a,e),a=Uf(2),l=pa(t,a,2),l!==null&&(qf(a,l,t,e),$l(l,2),qt(l));break}}t=t.return}}function Ec(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ov;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(dc=!0,n.add(a),e=dv.bind(null,e,t,a),t.then(e,e))}function dv(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(me&a)===a&&(He===4||He===3&&(me&62914560)===me&&300>Ht()-hc?(xe&2)===0&&Bl(e,0):mc|=a,_l===me&&(_l=0)),qt(e)}function Bd(e,t){t===0&&(t=Ou()),e=yl(e,t),e!==null&&($l(e,t),qt(e))}function mv(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Bd(e,a)}function pv(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Bd(e,a)}function hv(e,t){return Nr(e,t)}var tr=null,kl=null,wc=!1,ar=!1,jc=!1,Fa=0;function qt(e){e!==kl&&e.next===null&&(kl===null?tr=kl=e:kl=kl.next=e),ar=!0,wc||(wc=!0,gv())}function Nn(e,t){if(!jc&&ar){jc=!0;do for(var a=!1,l=tr;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,p=l.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=n&~(s&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,qd(l,i))}else i=me,i=ci(l,l===Ce?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Jl(l,i)||(a=!0,qd(l,i));l=l.next}while(a);jc=!1}}function vv(){Ld()}function Ld(){ar=wc=!1;var e=0;Fa!==0&&(Tv()&&(e=Fa),Fa=0);for(var t=Ht(),a=null,l=tr;l!==null;){var n=l.next,i=kd(l,t);i===0?(l.next=null,a===null?tr=n:a.next=n,n===null&&(kl=a)):(a=l,(e!==0||(i&3)!==0)&&(ar=!0)),l=n}Nn(e)}function kd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-ot(i),p=1<<s,b=n[s];b===-1?((p&a)===0||(p&l)!==0)&&(n[s]=Yp(p,t)):b<=t&&(e.expiredLanes|=p),i&=~p}if(t=Ce,a=me,a=ci(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Hr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Hr(l),kr(a)){case 2:case 8:a=Du;break;case 32:a=ii;break;case 268435456:a=Cu;break;default:a=ii}return l=Ud.bind(null,e),a=Nr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Hr(l),e.callbackPriority=2,e.callbackNode=null,2}function Ud(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(er()&&e.callbackNode!==a)return null;var l=me;return l=ci(e,e===Ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Sd(e,l,t),kd(e,Ht()),e.callbackNode!=null&&e.callbackNode===a?Ud.bind(null,e):null)}function qd(e,t){if(er())return null;Sd(e,t,!0)}function gv(){Mv(function(){(xe&6)!==0?Nr(Mu,vv):Ld()})}function Tc(){return Fa===0&&(Fa=Ru()),Fa}function Gd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mi(""+e)}function Yd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function yv(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Gd((n[tt]||null).action),s=l.submitter;s&&(t=(t=s[tt]||null)?Gd(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var p=new gi("action","action",null,l,n);e.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fa!==0){var b=s?Yd(n,s):new FormData(n);Qo(a,{pending:!0,data:b,method:n.method,action:i},null,b)}}else typeof i=="function"&&(p.preventDefault(),b=s?Yd(n,s):new FormData(n),Qo(a,{pending:!0,data:b,method:n.method,action:i},i,b))},currentTarget:n}]})}}for(var Ac=0;Ac<uo.length;Ac++){var Mc=uo[Ac],bv=Mc.toLowerCase(),xv=Mc[0].toUpperCase()+Mc.slice(1);Dt(bv,"on"+xv)}Dt(xs,"onAnimationEnd"),Dt(Ss,"onAnimationIteration"),Dt(Es,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Lh,"onTransitionRun"),Dt(kh,"onTransitionStart"),Dt(Uh,"onTransitionCancel"),Dt(ws,"onTransitionEnd"),cl("onMouseEnter",["mouseout","mouseover"]),cl("onMouseLeave",["mouseout","mouseover"]),cl("onPointerEnter",["pointerout","pointerover"]),cl("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn));function Vd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var s=l.length-1;0<=s;s--){var p=l[s],b=p.instance,M=p.currentTarget;if(p=p.listener,b!==i&&n.isPropagationStopped())break e;i=p,n.currentTarget=M;try{i(n)}catch(N){Vi(N)}n.currentTarget=null,i=b}else for(s=0;s<l.length;s++){if(p=l[s],b=p.instance,M=p.currentTarget,p=p.listener,b!==i&&n.isPropagationStopped())break e;i=p,n.currentTarget=M;try{i(n)}catch(N){Vi(N)}n.currentTarget=null,i=b}}}}function se(e,t){var a=t[Ur];a===void 0&&(a=t[Ur]=new Set);var l=e+"__bubble";a.has(l)||(Xd(t,e,2,!1),a.add(l))}function Dc(e,t,a){var l=0;t&&(l|=4),Xd(a,e,l,t)}var lr="_reactListening"+Math.random().toString(36).slice(2);function Cc(e){if(!e[lr]){e[lr]=!0,Bu.forEach(function(a){a!=="selectionchange"&&(Sv.has(a)||Dc(a,!1,e),Dc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lr]||(t[lr]=!0,Dc("selectionchange",!1,t))}}function Xd(e,t,a,l){switch(pm(t)){case 2:var n=Pv;break;case 8:n=Jv;break;default:n=Vc}a=n.bind(null,t,a,e),n=void 0,!$r||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Rc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var p=l.stateNode.containerInfo;if(p===n)break;if(s===4)for(s=l.return;s!==null;){var b=s.tag;if((b===3||b===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;p!==null;){if(s=il(p),s===null)return;if(b=s.tag,b===5||b===6||b===26||b===27){l=i=s;continue e}p=p.parentNode}}l=l.return}$u(function(){var M=i,N=Pr(a),L=[];e:{var D=js.get(e);if(D!==void 0){var C=gi,le=e;switch(e){case"keypress":if(hi(a)===0)break e;case"keydown":case"keyup":C=hh;break;case"focusin":le="focus",C=eo;break;case"focusout":le="blur",C=eo;break;case"beforeblur":case"afterblur":C=eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=yh;break;case xs:case Ss:case Es:C=rh;break;case ws:C=xh;break;case"scroll":case"scrollend":C=th;break;case"wheel":C=Eh;break;case"copy":case"cut":case"paste":C=ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=ts;break;case"toggle":case"beforetoggle":C=jh}var ee=(t&4)!==0,Te=!ee&&(e==="scroll"||e==="scrollend"),T=ee?D!==null?D+"Capture":null:D;ee=[];for(var w=M,A;w!==null;){var H=w;if(A=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||A===null||T===null||(H=Il(w,T),H!=null&&ee.push(Bn(w,H,A))),Te)break;w=w.return}0<ee.length&&(D=new C(D,le,null,a,N),L.push({event:D,listeners:ee}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",D&&a!==Kr&&(le=a.relatedTarget||a.fromElement)&&(il(le)||le[nl]))break e;if((C||D)&&(D=N.window===N?N:(D=N.ownerDocument)?D.defaultView||D.parentWindow:window,C?(le=a.relatedTarget||a.toElement,C=M,le=le?il(le):null,le!==null&&(Te=f(le),ee=le.tag,le!==Te||ee!==5&&ee!==27&&ee!==6)&&(le=null)):(C=null,le=M),C!==le)){if(ee=Iu,H="onMouseLeave",T="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ee=ts,H="onPointerLeave",T="onPointerEnter",w="pointer"),Te=C==null?D:Fl(C),A=le==null?D:Fl(le),D=new ee(H,w+"leave",C,a,N),D.target=Te,D.relatedTarget=A,H=null,il(N)===M&&(ee=new ee(T,w+"enter",le,a,N),ee.target=A,ee.relatedTarget=Te,H=ee),Te=H,C&&le)t:{for(ee=C,T=le,w=0,A=ee;A;A=Ul(A))w++;for(A=0,H=T;H;H=Ul(H))A++;for(;0<w-A;)ee=Ul(ee),w--;for(;0<A-w;)T=Ul(T),A--;for(;w--;){if(ee===T||T!==null&&ee===T.alternate)break t;ee=Ul(ee),T=Ul(T)}ee=null}else ee=null;C!==null&&Qd(L,D,C,ee,!1),le!==null&&Te!==null&&Qd(L,Te,le,ee,!0)}}e:{if(D=M?Fl(M):window,C=D.nodeName&&D.nodeName.toLowerCase(),C==="select"||C==="input"&&D.type==="file")var P=us;else if(os(D))if(ss)P=Nh;else{P=zh;var ce=Oh}else C=D.nodeName,!C||C.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?M&&Zr(M.elementType)&&(P=us):P=_h;if(P&&(P=P(e,M))){cs(L,P,a,N);break e}ce&&ce(e,D,M),e==="focusout"&&M&&D.type==="number"&&M.memoizedProps.value!=null&&Qr(D,"number",D.value)}switch(ce=M?Fl(M):window,e){case"focusin":(os(ce)||ce.contentEditable==="true")&&(hl=ce,ro=M,cn=null);break;case"focusout":cn=ro=hl=null;break;case"mousedown":oo=!0;break;case"contextmenu":case"mouseup":case"dragend":oo=!1,ys(L,a,N);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":ys(L,a,N)}var W;if(ao)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else pl?is(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(as&&a.locale!=="ko"&&(pl||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&pl&&(W=Wu()):(sa=N,Wr="value"in sa?sa.value:sa.textContent,pl=!0)),ce=nr(M,ae),0<ce.length&&(ae=new es(ae,e,null,a,N),L.push({event:ae,listeners:ce}),W?ae.data=W:(W=rs(a),W!==null&&(ae.data=W)))),(W=Ah?Mh(e,a):Dh(e,a))&&(ae=nr(M,"onBeforeInput"),0<ae.length&&(ce=new es("onBeforeInput","beforeinput",null,a,N),L.push({event:ce,listeners:ae}),ce.data=W)),yv(L,e,M,a,N)}Vd(L,t)})}function Bn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function nr(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Il(e,a),n!=null&&l.unshift(Bn(e,n,i)),n=Il(e,t),n!=null&&l.push(Bn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Ul(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qd(e,t,a,l,n){for(var i=t._reactName,s=[];a!==null&&a!==l;){var p=a,b=p.alternate,M=p.stateNode;if(p=p.tag,b!==null&&b===l)break;p!==5&&p!==26&&p!==27||M===null||(b=M,n?(M=Il(a,i),M!=null&&s.unshift(Bn(a,M,b))):n||(M=Il(a,i),M!=null&&s.push(Bn(a,M,b)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Ev=/\r\n?/g,wv=/\u0000|\uFFFD/g;function Zd(e){return(typeof e=="string"?e:""+e).replace(Ev,`
`).replace(wv,"")}function Kd(e,t){return t=Zd(t),Zd(e)===t}function ir(){}function je(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||fl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&fl(e,""+l);break;case"className":si(e,"class",l);break;case"tabIndex":si(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,a,l);break;case"style":Pu(e,l,i);break;case"data":if(t!=="object"){si(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=mi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",n.name,n,null),je(e,t,"formEncType",n.formEncType,n,null),je(e,t,"formMethod",n.formMethod,n,null),je(e,t,"formTarget",n.formTarget,n,null)):(je(e,t,"encType",n.encType,n,null),je(e,t,"method",n.method,n,null),je(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=mi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ir);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=mi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),ui(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ui(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ip.get(a)||a,ui(e,a,l))}}function Oc(e,t,a,l,n,i){switch(a){case"style":Pu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?fl(e,l):(typeof l=="number"||typeof l=="bigint")&&fl(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[tt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ui(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:je(e,t,i,s,a,null)}}n&&je(e,t,"srcSet",a.srcSet,a,null),l&&je(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var p=i=s=n=null,b=null,M=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":n=N;break;case"type":s=N;break;case"checked":b=N;break;case"defaultChecked":M=N;break;case"value":i=N;break;case"defaultValue":p=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:je(e,t,l,N,a,null)}}Xu(e,i,p,b,M,s,n,!1),fi(e);return;case"select":se("invalid",e),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(p=a[n],p!=null))switch(n){case"value":i=p;break;case"defaultValue":s=p;break;case"multiple":l=p;default:je(e,t,n,p,a,null)}t=i,a=s,e.multiple=!!l,t!=null?sl(e,!!l,t,!1):a!=null&&sl(e,!!l,a,!0);return;case"textarea":se("invalid",e),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(p=a[s],p!=null))switch(s){case"value":l=p;break;case"defaultValue":n=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:je(e,t,s,p,a,null)}Zu(e,l,n,i),fi(e);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:je(e,t,b,l,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<Hn.length;l++)se(Hn[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(l=a[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:je(e,t,M,l,a,null)}return;default:if(Zr(t)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&Oc(e,t,N,l,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null&&je(e,t,p,l,a,null))}function jv(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,p=null,b=null,M=null,N=null;for(C in a){var L=a[C];if(a.hasOwnProperty(C)&&L!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":b=L;default:l.hasOwnProperty(C)||je(e,t,C,null,l,L)}}for(var D in l){var C=l[D];if(L=a[D],l.hasOwnProperty(D)&&(C!=null||L!=null))switch(D){case"type":i=C;break;case"name":n=C;break;case"checked":M=C;break;case"defaultChecked":N=C;break;case"value":s=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:C!==L&&je(e,t,D,C,l,L)}}Xr(e,s,p,b,M,N,i,n);return;case"select":C=s=p=D=null;for(i in a)if(b=a[i],a.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":C=b;default:l.hasOwnProperty(i)||je(e,t,i,null,l,b)}for(n in l)if(i=l[n],b=a[n],l.hasOwnProperty(n)&&(i!=null||b!=null))switch(n){case"value":D=i;break;case"defaultValue":p=i;break;case"multiple":s=i;default:i!==b&&je(e,t,n,i,l,b)}t=p,a=s,l=C,D!=null?sl(e,!!a,D,!1):!!l!=!!a&&(t!=null?sl(e,!!a,t,!0):sl(e,!!a,a?[]:"",!1));return;case"textarea":C=D=null;for(p in a)if(n=a[p],a.hasOwnProperty(p)&&n!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:je(e,t,p,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":D=n;break;case"defaultValue":C=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&je(e,t,s,n,l,i)}Qu(e,D,C);return;case"option":for(var le in a)if(D=a[le],a.hasOwnProperty(le)&&D!=null&&!l.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:je(e,t,le,null,l,D)}for(b in l)if(D=l[b],C=a[b],l.hasOwnProperty(b)&&D!==C&&(D!=null||C!=null))switch(b){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:je(e,t,b,D,l,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)D=a[ee],a.hasOwnProperty(ee)&&D!=null&&!l.hasOwnProperty(ee)&&je(e,t,ee,null,l,D);for(M in l)if(D=l[M],C=a[M],l.hasOwnProperty(M)&&D!==C&&(D!=null||C!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:je(e,t,M,D,l,C)}return;default:if(Zr(t)){for(var Te in a)D=a[Te],a.hasOwnProperty(Te)&&D!==void 0&&!l.hasOwnProperty(Te)&&Oc(e,t,Te,void 0,l,D);for(N in l)D=l[N],C=a[N],!l.hasOwnProperty(N)||D===C||D===void 0&&C===void 0||Oc(e,t,N,D,l,C);return}}for(var T in a)D=a[T],a.hasOwnProperty(T)&&D!=null&&!l.hasOwnProperty(T)&&je(e,t,T,null,l,D);for(L in l)D=l[L],C=a[L],!l.hasOwnProperty(L)||D===C||D==null&&C==null||je(e,t,L,D,l,C)}var zc=null,_c=null;function rr(e){return e.nodeType===9?e:e.ownerDocument}function Pd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function Tv(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var $d=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,Mv=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd!="undefined"?function(e){return Wd.resolve(null).then(e).catch(Dv)}:$d;function Dv(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Fd(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var s=e.ownerDocument;if(a&1&&Ln(s.documentElement),a&2&&Ln(s.body),a&4)for(a=s.head,Ln(a),s=a.firstChild;s;){var p=s.nextSibling,b=s.nodeName;s[Wl]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=p}}if(n===0){e.removeChild(i),Qn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);Qn(t)}function Bc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bc(a),qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cv(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function Rv(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Rt(e.nextSibling),e===null))return null;return e}function Lc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ov(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var kc=null;function Id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function em(e,t,a){switch(t=rr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ln(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qr(e)}var Tt=new Map,tm=new Set;function or(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=X.d;X.d={f:zv,r:_v,D:Nv,C:Hv,L:Bv,m:Lv,X:Uv,S:kv,M:qv};function zv(){var e=aa.f(),t=Fi();return e||t}function _v(e){var t=rl(e);t!==null&&t.tag===5&&t.type==="form"?Sf(t):aa.r(e)}var ql=typeof document=="undefined"?null:document;function am(e,t,a){var l=ql;if(l&&typeof t=="string"&&t){var n=yt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),tm.has(n)||(tm.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Je(t,"link",e),Ve(t),l.head.appendChild(t)))}}function Nv(e){aa.D(e),am("dns-prefetch",e,null)}function Hv(e,t){aa.C(e,t),am("preconnect",e,t)}function Bv(e,t,a){aa.L(e,t,a);var l=ql;if(l&&e&&t){var n='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+yt(a.imageSizes)+'"]')):n+='[href="'+yt(e)+'"]';var i=n;switch(t){case"style":i=Gl(e);break;case"script":i=Yl(e)}Tt.has(i)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(kn(i))||t==="script"&&l.querySelector(Un(i))||(t=l.createElement("link"),Je(t,"link",e),Ve(t),l.head.appendChild(t)))}}function Lv(e,t){aa.m(e,t);var a=ql;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Yl(e)}if(!Tt.has(i)&&(e=S({rel:"modulepreload",href:e},t),Tt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Un(i)))return}l=a.createElement("link"),Je(l,"link",e),Ve(l),a.head.appendChild(l)}}}function kv(e,t,a){aa.S(e,t,a);var l=ql;if(l&&e){var n=ol(l).hoistableStyles,i=Gl(e);t=t||"default";var s=n.get(i);if(!s){var p={loading:0,preload:null};if(s=l.querySelector(kn(i)))p.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(i))&&Uc(e,a);var b=s=l.createElement("link");Ve(b),Je(b,"link",e),b._p=new Promise(function(M,N){b.onload=M,b.onerror=N}),b.addEventListener("load",function(){p.loading|=1}),b.addEventListener("error",function(){p.loading|=2}),p.loading|=4,cr(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:p},n.set(i,s)}}}function Uv(e,t){aa.X(e,t);var a=ql;if(a&&e){var l=ol(a).hoistableScripts,n=Yl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=S({src:e,async:!0},t),(t=Tt.get(n))&&qc(e,t),i=a.createElement("script"),Ve(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function qv(e,t){aa.M(e,t);var a=ql;if(a&&e){var l=ol(a).hoistableScripts,n=Yl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=S({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&qc(e,t),i=a.createElement("script"),Ve(i),Je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function lm(e,t,a,l){var n=(n=$.current)?or(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Gl(a.href),a=ol(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gl(a.href);var i=ol(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(kn(e)))&&!i._p&&(s.instance=i,s.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),i||Gv(n,e,a,s.state))),t&&l===null)throw Error(u(528,""));return s}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yl(a),a=ol(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Gl(e){return'href="'+yt(e)+'"'}function kn(e){return'link[rel="stylesheet"]['+e+"]"}function nm(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Gv(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Ve(t),e.head.appendChild(t))}function Yl(e){return'[src="'+yt(e)+'"]'}function Un(e){return"script[async]"+e}function im(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+yt(a.href)+'"]');if(l)return t.instance=l,Ve(l),l;var n=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ve(l),Je(l,"style",n),cr(l,a.precedence,e),t.instance=l;case"stylesheet":n=Gl(a.href);var i=e.querySelector(kn(n));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;l=nm(a),(n=Tt.get(n))&&Uc(l,n),i=(e.ownerDocument||e).createElement("link"),Ve(i);var s=i;return s._p=new Promise(function(p,b){s.onload=p,s.onerror=b}),Je(i,"link",l),t.state.loading|=4,cr(i,a.precedence,e),t.instance=i;case"script":return i=Yl(a.src),(n=e.querySelector(Un(i)))?(t.instance=n,Ve(n),n):(l=a,(n=Tt.get(i))&&(l=S({},a),qc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ve(n),Je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,cr(l,a.precedence,e));return t.instance}function cr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var p=l[s];if(p.dataset.precedence===t)i=p;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ur=null;function rm(e,t,a){if(ur===null){var l=new Map,n=ur=new Map;n.set(a,l)}else n=ur,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Wl]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var p=l.get(s);p?p.push(i):l.set(s,[i])}}return l}function om(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Yv(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var qn=null;function Vv(){}function Xv(e,t,a){if(qn===null)throw Error(u(475));var l=qn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Gl(a.href),i=e.querySelector(kn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=sr.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Ve(i);return}i=e.ownerDocument||e,a=nm(a),(n=Tt.get(n))&&Uc(a,n),i=i.createElement("link"),Ve(i);var s=i;s._p=new Promise(function(p,b){s.onload=p,s.onerror=b}),Je(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=sr.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Qv(){if(qn===null)throw Error(u(475));var e=qn;return e.stylesheets&&e.count===0&&Gc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function sr(){if(this.count--,this.count===0){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fr=null;function Gc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fr=new Map,t.forEach(Zv,e),fr=null,sr.call(e))}function Zv(e,t){if(!(t.state.loading&4)){var a=fr.get(e);if(a)var l=a.get(null);else{a=new Map,fr.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=sr.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Gn={$$typeof:V,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Kv(e,t,a,l,n,i,s,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.hiddenUpdates=Br(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function um(e,t,a,l,n,i,s,p,b,M,N,L){return e=new Kv(e,t,a,s,p,b,M,L),t=1,i===!0&&(t|=24),i=ut(3,null,null,t),e.current=i,i.stateNode=e,t=Eo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Ao(i),e}function sm(e){return e?(e=bl,e):bl}function fm(e,t,a,l,n,i){n=sm(n),l.context===null?l.context=n:l.pendingContext=n,l=ma(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=pa(e,l,t),a!==null&&(pt(a,e,t),gn(a,e,t))}function dm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Yc(e,t){dm(e,t),(e=e.alternate)&&dm(e,t)}function mm(e){if(e.tag===13){var t=yl(e,67108864);t!==null&&pt(t,e,67108864),Yc(e,67108864)}}var dr=!0;function Pv(e,t,a,l){var n=z.T;z.T=null;var i=X.p;try{X.p=2,Vc(e,t,a,l)}finally{X.p=i,z.T=n}}function Jv(e,t,a,l){var n=z.T;z.T=null;var i=X.p;try{X.p=8,Vc(e,t,a,l)}finally{X.p=i,z.T=n}}function Vc(e,t,a,l){if(dr){var n=Xc(l);if(n===null)Rc(e,t,l,mr,a),hm(e,l);else if(Wv(n,e,t,a,l))l.stopPropagation();else if(hm(e,l),t&4&&-1<$v.indexOf(e)){for(;n!==null;){var i=rl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ha(i.pendingLanes);if(s!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;s;){var b=1<<31-ot(s);p.entanglements[1]|=b,s&=~b}qt(i),(xe&6)===0&&($i=Ht()+500,Nn(0))}}break;case 13:p=yl(i,2),p!==null&&pt(p,i,2),Fi(),Yc(i,2)}if(i=Xc(l),i===null&&Rc(e,t,l,mr,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Rc(e,t,l,null,a)}}function Xc(e){return e=Pr(e),Qc(e)}var mr=null;function Qc(e){if(mr=null,e=il(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mr=e,null}function pm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hp()){case Mu:return 2;case Du:return 8;case ii:case Bp:return 32;case Cu:return 268435456;default:return 32}default:return 32}}var Zc=!1,Ma=null,Da=null,Ca=null,Yn=new Map,Vn=new Map,Ra=[],$v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hm(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Xn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=rl(t),t!==null&&mm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Wv(e,t,a,l,n){switch(t){case"focusin":return Ma=Xn(Ma,e,t,a,l,n),!0;case"dragenter":return Da=Xn(Da,e,t,a,l,n),!0;case"mouseover":return Ca=Xn(Ca,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Yn.set(i,Xn(Yn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Vn.set(i,Xn(Vn.get(i)||null,e,t,a,l,n)),!0}return!1}function vm(e){var t=il(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,Xp(e.priority,function(){if(a.tag===13){var l=mt();l=Lr(l);var n=yl(a,l);n!==null&&pt(n,a,l),Yc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Kr=l,a.target.dispatchEvent(l),Kr=null}else return t=rl(a),t!==null&&mm(t),e.blockedOn=a,!1;t.shift()}return!0}function gm(e,t,a){pr(e)&&a.delete(t)}function Fv(){Zc=!1,Ma!==null&&pr(Ma)&&(Ma=null),Da!==null&&pr(Da)&&(Da=null),Ca!==null&&pr(Ca)&&(Ca=null),Yn.forEach(gm),Vn.forEach(gm)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zc||(Zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Fv)))}var vr=null;function ym(e){vr!==e&&(vr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vr===e&&(vr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Qc(l||a)===null)continue;break}var i=rl(a);i!==null&&(e.splice(t,3),t-=3,Qo(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Qn(e){function t(b){return hr(b,e)}Ma!==null&&hr(Ma,e),Da!==null&&hr(Da,e),Ca!==null&&hr(Ca,e),Yn.forEach(t),Vn.forEach(t);for(var a=0;a<Ra.length;a++){var l=Ra[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)vm(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[tt]||null;if(typeof i=="function")s||ym(a);else if(s){var p=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[tt]||null)p=s.formAction;else if(Qc(n)!==null)continue}else p=s.action;typeof p=="function"?a[l+1]=p:(a.splice(l,3),l-=3),ym(a)}}}function Kc(e){this._internalRoot=e}gr.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=mt();fm(a,l,e,t,null,null)},gr.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fm(e.current,2,null,e,null,null),Fi(),t[nl]=null}};function gr(e){this._internalRoot=e}gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ra.length&&t!==0&&t<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&vm(e)}};var bm=c.version;if(bm!=="19.1.0")throw Error(u(527,bm,"19.1.0"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var Iv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{Pl=yr.inject(Iv),rt=yr}catch(e){}}return Kn.createRoot=function(e,t){if(!d(e))throw Error(u(299));var a=!1,l="",n=Hf,i=Bf,s=Lf,p=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=um(e,1,!1,null,null,a,l,n,i,s,p,null),e[nl]=t.current,Cc(e),new Kc(t)},Kn.hydrateRoot=function(e,t,a){if(!d(e))throw Error(u(299));var l=!1,n="",i=Hf,s=Bf,p=Lf,b=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),t=um(e,1,!0,t,a!=null?a:null,l,n,i,s,p,b,M),t.context=sm(null),a=t.current,l=mt(),l=Lr(l),n=ma(l),n.callback=null,pa(a,n,l),a=l,t.current.lanes=a,$l(t,a),qt(t),e[nl]=t.current,Cc(e),new gr(t)},Kn.version="19.1.0",Kn}var Om;function fg(){if(Om)return Wc.exports;Om=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),Wc.exports=sg(),Wc.exports}var dg=fg();const mg=al(dg);var Pn={},zm;function pg(){if(zm)return Pn;zm=1,Object.defineProperty(Pn,"__esModule",{value:!0}),Pn.parse=y,Pn.serialize=h;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,c=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,f=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function y(E,k){const _=new f,G=E.length;if(G<2)return _;const B=(k==null?void 0:k.decode)||S;let q=0;do{const Z=E.indexOf("=",q);if(Z===-1)break;const V=E.indexOf(";",q),J=V===-1?G:V;if(Z>J){q=E.lastIndexOf(";",Z-1)+1;continue}const Q=x(E,q,Z),ne=v(E,Z,Q),fe=E.slice(Q,ne);if(_[fe]===void 0){let be=x(E,Z+1,J),Ae=v(E,J,be);const pe=B(E.slice(be,Ae));_[fe]=pe}q=J+1}while(q<G);return _}function x(E,k,_){do{const G=E.charCodeAt(k);if(G!==32&&G!==9)return k}while(++k<_);return _}function v(E,k,_){for(;k>_;){const G=E.charCodeAt(--k);if(G!==32&&G!==9)return k+1}return _}function h(E,k,_){const G=(_==null?void 0:_.encode)||encodeURIComponent;if(!r.test(E))throw new TypeError(`argument name is invalid: ${E}`);const B=G(k);if(!c.test(B))throw new TypeError(`argument val is invalid: ${k}`);let q=E+"="+B;if(!_)return q;if(_.maxAge!==void 0){if(!Number.isInteger(_.maxAge))throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);q+="; Max-Age="+_.maxAge}if(_.domain){if(!o.test(_.domain))throw new TypeError(`option domain is invalid: ${_.domain}`);q+="; Domain="+_.domain}if(_.path){if(!u.test(_.path))throw new TypeError(`option path is invalid: ${_.path}`);q+="; Path="+_.path}if(_.expires){if(!O(_.expires)||!Number.isFinite(_.expires.valueOf()))throw new TypeError(`option expires is invalid: ${_.expires}`);q+="; Expires="+_.expires.toUTCString()}if(_.httpOnly&&(q+="; HttpOnly"),_.secure&&(q+="; Secure"),_.partitioned&&(q+="; Partitioned"),_.priority)switch(typeof _.priority=="string"?_.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${_.priority}`)}if(_.sameSite)switch(typeof _.sameSite=="string"?_.sameSite.toLowerCase():_.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${_.sameSite}`)}return q}function S(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch(k){return E}}function O(E){return d.call(E)==="[object Date]"}return Pn}pg();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _m="popstate";function hg(r={}){function c(d,f){let{pathname:y="/",search:x="",hash:v=""}=ll(d.location.hash.substring(1));return!y.startsWith("/")&&!y.startsWith(".")&&(y="/"+y),mu("",{pathname:y,search:x,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function o(d,f){let y=d.document.querySelector("base"),x="";if(y&&y.getAttribute("href")){let v=d.location.href,h=v.indexOf("#");x=h===-1?v:v.slice(0,h)}return x+"#"+(typeof f=="string"?f:ei(f))}function u(d,f){_t(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return gg(c,o,u,r)}function _e(r,c){if(r===!1||r===null||typeof r=="undefined")throw new Error(c)}function _t(r,c){if(!r){typeof console!="undefined"&&console.warn(c);try{throw new Error(c)}catch(o){}}}function vg(){return Math.random().toString(36).substring(2,10)}function Nm(r,c){return{usr:r.state,key:r.key,idx:c}}function mu(r,c,o=null,u){return Re(te({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof c=="string"?ll(c):c),{state:o,key:c&&c.key||u||vg()})}function ei({pathname:r="/",search:c="",hash:o=""}){return c&&c!=="?"&&(r+=c.charAt(0)==="?"?c:"?"+c),o&&o!=="#"&&(r+=o.charAt(0)==="#"?o:"#"+o),r}function ll(r){let c={};if(r){let o=r.indexOf("#");o>=0&&(c.hash=r.substring(o),r=r.substring(0,o));let u=r.indexOf("?");u>=0&&(c.search=r.substring(u),r=r.substring(0,u)),r&&(c.pathname=r)}return c}function gg(r,c,o,u={}){let{window:d=document.defaultView,v5Compat:f=!1}=u,y=d.history,x="POP",v=null,h=S();h==null&&(h=0,y.replaceState(Re(te({},y.state),{idx:h}),""));function S(){return(y.state||{idx:null}).idx}function O(){x="POP";let B=S(),q=B==null?null:B-h;h=B,v&&v({action:x,location:G.location,delta:q})}function E(B,q){x="PUSH";let Z=mu(G.location,B,q);o&&o(Z,B),h=S()+1;let V=Nm(Z,h),J=G.createHref(Z);try{y.pushState(V,"",J)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;d.location.assign(J)}f&&v&&v({action:x,location:G.location,delta:1})}function k(B,q){x="REPLACE";let Z=mu(G.location,B,q);o&&o(Z,B),h=S();let V=Nm(Z,h),J=G.createHref(Z);y.replaceState(V,"",J),f&&v&&v({action:x,location:G.location,delta:0})}function _(B){let q=d.location.origin!=="null"?d.location.origin:d.location.href,Z=typeof B=="string"?B:ei(B);return Z=Z.replace(/ $/,"%20"),_e(q,`No window.location.(origin|href) available to create URL for href: ${Z}`),new URL(Z,q)}let G={get action(){return x},get location(){return r(d,y)},listen(B){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(_m,O),v=B,()=>{d.removeEventListener(_m,O),v=null}},createHref(B){return c(d,B)},createURL:_,encodeLocation(B){let q=_(B);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:E,replace:k,go(B){return y.go(B)}};return G}function Fm(r,c,o="/"){return yg(r,c,o,!1)}function yg(r,c,o,u){let d=typeof c=="string"?ll(c):c,f=ia(d.pathname||"/",o);if(f==null)return null;let y=Im(r);bg(y);let x=null;for(let v=0;x==null&&v<y.length;++v){let h=Rg(f);x=Dg(y[v],h,u)}return x}function Im(r,c=[],o=[],u=""){let d=(f,y,x)=>{let v={relativePath:x===void 0?f.path||"":x,caseSensitive:f.caseSensitive===!0,childrenIndex:y,route:f};v.relativePath.startsWith("/")&&(_e(v.relativePath.startsWith(u),`Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(u.length));let h=na([u,v.relativePath]),S=o.concat(v);f.children&&f.children.length>0&&(_e(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Im(f.children,c,S,h)),!(f.path==null&&!f.index)&&c.push({path:h,score:Ag(h,f.index),routesMeta:S})};return r.forEach((f,y)=>{var x;if(f.path===""||!((x=f.path)!=null&&x.includes("?")))d(f,y);else for(let v of ep(f.path))d(f,y,v)}),c}function ep(r){let c=r.split("/");if(c.length===0)return[];let[o,...u]=c,d=o.endsWith("?"),f=o.replace(/\?$/,"");if(u.length===0)return d?[f,""]:[f];let y=ep(u.join("/")),x=[];return x.push(...y.map(v=>v===""?f:[f,v].join("/"))),d&&x.push(...y),x.map(v=>r.startsWith("/")&&v===""?"/":v)}function bg(r){r.sort((c,o)=>c.score!==o.score?o.score-c.score:Mg(c.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var xg=/^:[\w-]+$/,Sg=3,Eg=2,wg=1,jg=10,Tg=-2,Hm=r=>r==="*";function Ag(r,c){let o=r.split("/"),u=o.length;return o.some(Hm)&&(u+=Tg),c&&(u+=Eg),o.filter(d=>!Hm(d)).reduce((d,f)=>d+(xg.test(f)?Sg:f===""?wg:jg),u)}function Mg(r,c){return r.length===c.length&&r.slice(0,-1).every((u,d)=>u===c[d])?r[r.length-1]-c[c.length-1]:0}function Dg(r,c,o=!1){let{routesMeta:u}=r,d={},f="/",y=[];for(let x=0;x<u.length;++x){let v=u[x],h=x===u.length-1,S=f==="/"?c:c.slice(f.length)||"/",O=Mr({path:v.relativePath,caseSensitive:v.caseSensitive,end:h},S),E=v.route;if(!O&&h&&o&&!u[u.length-1].route.index&&(O=Mr({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},S)),!O)return null;Object.assign(d,O.params),y.push({params:d,pathname:na([f,O.pathname]),pathnameBase:Ng(na([f,O.pathnameBase])),route:E}),O.pathnameBase!=="/"&&(f=na([f,O.pathnameBase]))}return y}function Mr(r,c){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[o,u]=Cg(r.path,r.caseSensitive,r.end),d=c.match(o);if(!d)return null;let f=d[0],y=f.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:u.reduce((h,{paramName:S,isOptional:O},E)=>{if(S==="*"){let _=x[E]||"";y=f.slice(0,f.length-_.length).replace(/(.)\/+$/,"$1")}const k=x[E];return O&&!k?h[S]=void 0:h[S]=(k||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:y,pattern:r}}function Cg(r,c=!1,o=!0){_t(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,x,v)=>(u.push({paramName:x,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(u.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,c?void 0:"i"),u]}function Rg(r){try{return r.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return _t(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),r}}function ia(r,c){if(c==="/")return r;if(!r.toLowerCase().startsWith(c.toLowerCase()))return null;let o=c.endsWith("/")?c.length-1:c.length,u=r.charAt(o);return u&&u!=="/"?null:r.slice(o)||"/"}function Og(r,c="/"){let{pathname:o,search:u="",hash:d=""}=typeof r=="string"?ll(r):r;return{pathname:o?o.startsWith("/")?o:zg(o,c):c,search:Hg(u),hash:Bg(d)}}function zg(r,c){let o=c.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function tu(r,c,o,u){return`Cannot include a '${r}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _g(r){return r.filter((c,o)=>o===0||c.route.path&&c.route.path.length>0)}function tp(r){let c=_g(r);return c.map((o,u)=>u===c.length-1?o.pathname:o.pathnameBase)}function ap(r,c,o,u=!1){let d;typeof r=="string"?d=ll(r):(d=te({},r),_e(!d.pathname||!d.pathname.includes("?"),tu("?","pathname","search",d)),_e(!d.pathname||!d.pathname.includes("#"),tu("#","pathname","hash",d)),_e(!d.search||!d.search.includes("#"),tu("#","search","hash",d)));let f=r===""||d.pathname==="",y=f?"/":d.pathname,x;if(y==null)x=o;else{let O=c.length-1;if(!u&&y.startsWith("..")){let E=y.split("/");for(;E[0]==="..";)E.shift(),O-=1;d.pathname=E.join("/")}x=O>=0?c[O]:"/"}let v=Og(d,x),h=y&&y!=="/"&&y.endsWith("/"),S=(f||y===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(h||S)&&(v.pathname+="/"),v}var na=r=>r.join("/").replace(/\/\/+/g,"/"),Ng=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Hg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Bg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Lg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var lp=["POST","PUT","PATCH","DELETE"];new Set(lp);var kg=["GET",...lp];new Set(kg);var Zl=j.createContext(null);Zl.displayName="DataRouter";var Cr=j.createContext(null);Cr.displayName="DataRouterState";var np=j.createContext({isTransitioning:!1});np.displayName="ViewTransition";var Ug=j.createContext(new Map);Ug.displayName="Fetchers";var qg=j.createContext(null);qg.displayName="Await";var Gt=j.createContext(null);Gt.displayName="Navigation";var ti=j.createContext(null);ti.displayName="Location";var Nt=j.createContext({outlet:null,matches:[],isDataRoute:!1});Nt.displayName="Route";var xu=j.createContext(null);xu.displayName="RouteError";function Gg(r,{relative:c}={}){_e(ai(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=j.useContext(Gt),{hash:d,pathname:f,search:y}=li(r,{relative:c}),x=f;return o!=="/"&&(x=f==="/"?o:na([o,f])),u.createHref({pathname:x,search:y,hash:d})}function ai(){return j.useContext(ti)!=null}function ra(){return _e(ai(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(ti).location}var ip="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rp(r){j.useContext(Gt).static||j.useLayoutEffect(r)}function Yg(){let{isDataRoute:r}=j.useContext(Nt);return r?ny():Vg()}function Vg(){_e(ai(),"useNavigate() may be used only in the context of a <Router> component.");let r=j.useContext(Zl),{basename:c,navigator:o}=j.useContext(Gt),{matches:u}=j.useContext(Nt),{pathname:d}=ra(),f=JSON.stringify(tp(u)),y=j.useRef(!1);return rp(()=>{y.current=!0}),j.useCallback((v,h={})=>{if(_t(y.current,ip),!y.current)return;if(typeof v=="number"){o.go(v);return}let S=ap(v,JSON.parse(f),d,h.relative==="path");r==null&&c!=="/"&&(S.pathname=S.pathname==="/"?c:na([c,S.pathname])),(h.replace?o.replace:o.push)(S,h.state,h)},[c,o,f,d,r])}var Xg=j.createContext(null);function Qg(r){let c=j.useContext(Nt).outlet;return c&&j.createElement(Xg.Provider,{value:r},c)}function Zg(){let{matches:r}=j.useContext(Nt),c=r[r.length-1];return c?c.params:{}}function li(r,{relative:c}={}){let{matches:o}=j.useContext(Nt),{pathname:u}=ra(),d=JSON.stringify(tp(o));return j.useMemo(()=>ap(r,JSON.parse(d),u,c==="path"),[r,d,u,c])}function Kg(r,c){return op(r,c)}function op(r,c,o,u){var Z;_e(ai(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d,static:f}=j.useContext(Gt),{matches:y}=j.useContext(Nt),x=y[y.length-1],v=x?x.params:{},h=x?x.pathname:"/",S=x?x.pathnameBase:"/",O=x&&x.route;{let V=O&&O.path||"";cp(h,!O||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let E=ra(),k;if(c){let V=typeof c=="string"?ll(c):c;_e(S==="/"||((Z=V.pathname)==null?void 0:Z.startsWith(S)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${V.pathname}" was given in the \`location\` prop.`),k=V}else k=E;let _=k.pathname||"/",G=_;if(S!=="/"){let V=S.replace(/^\//,"").split("/");G="/"+_.replace(/^\//,"").split("/").slice(V.length).join("/")}let B=!f&&o&&o.matches&&o.matches.length>0?o.matches:Fm(r,{pathname:G});_t(O||B!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),_t(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Fg(B&&B.map(V=>Object.assign({},V,{params:Object.assign({},v,V.params),pathname:na([S,d.encodeLocation?d.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?S:na([S,d.encodeLocation?d.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),y,o,u);return c&&q?j.createElement(ti.Provider,{value:{location:te({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:"POP"}},q):q}function Pg(){let r=ly(),c=Lg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),o=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",r),y=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:f},"ErrorBoundary")," or"," ",j.createElement("code",{style:f},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},c),o?j.createElement("pre",{style:d},o):null,y)}var Jg=j.createElement(Pg,null),$g=class extends j.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,c){return c.location!==r.location||c.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:c.error,location:c.location,revalidation:r.revalidation||c.revalidation}}componentDidCatch(r,c){console.error("React Router caught the following error during render",r,c)}render(){return this.state.error!==void 0?j.createElement(Nt.Provider,{value:this.props.routeContext},j.createElement(xu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Wg({routeContext:r,match:c,children:o}){let u=j.useContext(Zl);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),j.createElement(Nt.Provider,{value:r},o)}function Fg(r,c=[],o=null,u=null){if(r==null){if(!o)return null;if(o.errors)r=o.matches;else if(c.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let d=r,f=o==null?void 0:o.errors;if(f!=null){let v=d.findIndex(h=>h.route.id&&(f==null?void 0:f[h.route.id])!==void 0);_e(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let y=!1,x=-1;if(o)for(let v=0;v<d.length;v++){let h=d[v];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(x=v),h.route.id){let{loaderData:S,errors:O}=o,E=h.route.loader&&!S.hasOwnProperty(h.route.id)&&(!O||O[h.route.id]===void 0);if(h.route.lazy||E){y=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((v,h,S)=>{let O,E=!1,k=null,_=null;o&&(O=f&&h.route.id?f[h.route.id]:void 0,k=h.route.errorElement||Jg,y&&(x<0&&S===0?(cp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,_=null):x===S&&(E=!0,_=h.route.hydrateFallbackElement||null)));let G=c.concat(d.slice(0,S+1)),B=()=>{let q;return O?q=k:E?q=_:h.route.Component?q=j.createElement(h.route.Component,null):h.route.element?q=h.route.element:q=v,j.createElement(Wg,{match:h,routeContext:{outlet:v,matches:G,isDataRoute:o!=null},children:q})};return o&&(h.route.ErrorBoundary||h.route.errorElement||S===0)?j.createElement($g,{location:o.location,revalidation:o.revalidation,component:k,error:O,children:B(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):B()},null)}function Su(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ig(r){let c=j.useContext(Zl);return _e(c,Su(r)),c}function ey(r){let c=j.useContext(Cr);return _e(c,Su(r)),c}function ty(r){let c=j.useContext(Nt);return _e(c,Su(r)),c}function Eu(r){let c=ty(r),o=c.matches[c.matches.length-1];return _e(o.route.id,`${r} can only be used on routes that contain a unique "id"`),o.route.id}function ay(){return Eu("useRouteId")}function ly(){var u;let r=j.useContext(xu),c=ey("useRouteError"),o=Eu("useRouteError");return r!==void 0?r:(u=c.errors)==null?void 0:u[o]}function ny(){let{router:r}=Ig("useNavigate"),c=Eu("useNavigate"),o=j.useRef(!1);return rp(()=>{o.current=!0}),j.useCallback((y,...x)=>ye(this,[y,...x],function*(d,f={}){_t(o.current,ip),o.current&&(typeof d=="number"?r.navigate(d):yield r.navigate(d,te({fromRouteId:c},f)))}),[r,c])}var Bm={};function cp(r,c,o){!c&&!Bm[r]&&(Bm[r]=!0,_t(!1,o))}j.memo(iy);function iy({routes:r,future:c,state:o}){return op(r,void 0,o,c)}function ry(r){return Qg(r.context)}function Ia(r){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function oy({basename:r="/",children:c=null,location:o,navigationType:u="POP",navigator:d,static:f=!1}){_e(!ai(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=r.replace(/^\/*/,"/"),x=j.useMemo(()=>({basename:y,navigator:d,static:f,future:{}}),[y,d,f]);typeof o=="string"&&(o=ll(o));let{pathname:v="/",search:h="",hash:S="",state:O=null,key:E="default"}=o,k=j.useMemo(()=>{let _=ia(v,y);return _==null?null:{location:{pathname:_,search:h,hash:S,state:O,key:E},navigationType:u}},[y,v,h,S,O,E,u]);return _t(k!=null,`<Router basename="${y}"> is not able to match the URL "${v}${h}${S}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:j.createElement(Gt.Provider,{value:x},j.createElement(ti.Provider,{children:c,value:k}))}function cy({children:r,location:c}){return Kg(pu(r),c)}function pu(r,c=[]){let o=[];return j.Children.forEach(r,(u,d)=>{if(!j.isValidElement(u))return;let f=[...c,d];if(u.type===j.Fragment){o.push.apply(o,pu(u.props.children,f));return}_e(u.type===Ia,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=pu(u.props.children,f)),o.push(y)}),o}var Er="get",wr="application/x-www-form-urlencoded";function Rr(r){return r!=null&&typeof r.tagName=="string"}function uy(r){return Rr(r)&&r.tagName.toLowerCase()==="button"}function sy(r){return Rr(r)&&r.tagName.toLowerCase()==="form"}function fy(r){return Rr(r)&&r.tagName.toLowerCase()==="input"}function dy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function my(r,c){return r.button===0&&(!c||c==="_self")&&!dy(r)}var xr=null;function py(){if(xr===null)try{new FormData(document.createElement("form"),0),xr=!1}catch(r){xr=!0}return xr}var hy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function au(r){return r!=null&&!hy.has(r)?(_t(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wr}"`),null):r}function vy(r,c){let o,u,d,f,y;if(sy(r)){let x=r.getAttribute("action");u=x?ia(x,c):null,o=r.getAttribute("method")||Er,d=au(r.getAttribute("enctype"))||wr,f=new FormData(r)}else if(uy(r)||fy(r)&&(r.type==="submit"||r.type==="image")){let x=r.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=r.getAttribute("formaction")||x.getAttribute("action");if(u=v?ia(v,c):null,o=r.getAttribute("formmethod")||x.getAttribute("method")||Er,d=au(r.getAttribute("formenctype"))||au(x.getAttribute("enctype"))||wr,f=new FormData(x,r),!py()){let{name:h,type:S,value:O}=r;if(S==="image"){let E=h?`${h}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else h&&f.append(h,O)}}else{if(Rr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Er,u=null,d=wr,y=r}return f&&d==="text/plain"&&(y=f,f=void 0),{action:u,method:o.toLowerCase(),encType:d,formData:f,body:y}}function wu(r,c){if(r===!1||r===null||typeof r=="undefined")throw new Error(c)}function gy(r,c){return ye(this,null,function*(){if(r.id in c)return c[r.id];try{let o=yield import(r.module);return c[r.id]=o,o}catch(o){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}})}function yy(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}function by(r,c,o){return ye(this,null,function*(){let u=yield Promise.all(r.map(d=>ye(this,null,function*(){let f=c.routes[d.route.id];if(f){let y=yield gy(f,o);return y.links?y.links():[]}return[]})));return wy(u.flat(1).filter(yy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?Re(te({},d),{rel:"prefetch",as:"style"}):Re(te({},d),{rel:"prefetch"})))})}function Lm(r,c,o,u,d,f){let y=(v,h)=>o[h]?v.route.id!==o[h].route.id:!0,x=(v,h)=>{var S;return o[h].pathname!==v.pathname||((S=o[h].route.path)==null?void 0:S.endsWith("*"))&&o[h].params["*"]!==v.params["*"]};return f==="assets"?c.filter((v,h)=>y(v,h)||x(v,h)):f==="data"?c.filter((v,h)=>{var O;let S=u.routes[v.route.id];if(!S||!S.hasLoader)return!1;if(y(v,h)||x(v,h))return!0;if(v.route.shouldRevalidate){let E=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((O=o[0])==null?void 0:O.params)||{},nextUrl:new URL(r,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function xy(r,c,{includeHydrateFallback:o}={}){return Sy(r.map(u=>{let d=c.routes[u.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function Sy(r){return[...new Set(r)]}function Ey(r){let c={},o=Object.keys(r).sort();for(let u of o)c[u]=r[u];return c}function wy(r,c){let o=new Set;return new Set(c),r.reduce((u,d)=>{let f=JSON.stringify(Ey(d));return o.has(f)||(o.add(f),u.push({key:f,link:d})),u},[])}function jy(r,c){let o=typeof r=="string"?new URL(r,typeof window=="undefined"?"server://singlefetch/":window.location.origin):r;return o.pathname==="/"?o.pathname="_root.data":c&&ia(o.pathname,c)==="/"?o.pathname=`${c.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function up(){let r=j.useContext(Zl);return wu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Ty(){let r=j.useContext(Cr);return wu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ju=j.createContext(void 0);ju.displayName="FrameworkContext";function sp(){let r=j.useContext(ju);return wu(r,"You must render this element inside a <HydratedRouter> element"),r}function Ay(r,c){let o=j.useContext(ju),[u,d]=j.useState(!1),[f,y]=j.useState(!1),{onFocus:x,onBlur:v,onMouseEnter:h,onMouseLeave:S,onTouchStart:O}=c,E=j.useRef(null);j.useEffect(()=>{if(r==="render"&&y(!0),r==="viewport"){let G=q=>{q.forEach(Z=>{y(Z.isIntersecting)})},B=new IntersectionObserver(G,{threshold:.5});return E.current&&B.observe(E.current),()=>{B.disconnect()}}},[r]),j.useEffect(()=>{if(u){let G=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(G)}}},[u]);let k=()=>{d(!0)},_=()=>{d(!1),y(!1)};return o?r!=="intent"?[f,E,{}]:[f,E,{onFocus:Jn(x,k),onBlur:Jn(v,_),onMouseEnter:Jn(h,k),onMouseLeave:Jn(S,_),onTouchStart:Jn(O,k)}]:[!1,E,{}]}function Jn(r,c){return o=>{r&&r(o),o.defaultPrevented||c(o)}}function My(o){var u=o,{page:r}=u,c=za(u,["page"]);let{router:d}=up(),f=j.useMemo(()=>Fm(d.routes,r,d.basename),[d.routes,r,d.basename]);return f?j.createElement(Cy,te({page:r,matches:f},c)):null}function Dy(r){let{manifest:c,routeModules:o}=sp(),[u,d]=j.useState([]);return j.useEffect(()=>{let f=!1;return by(r,c,o).then(y=>{f||d(y)}),()=>{f=!0}},[r,c,o]),u}function Cy(u){var d=u,{page:r,matches:c}=d,o=za(d,["page","matches"]);let f=ra(),{manifest:y,routeModules:x}=sp(),{basename:v}=up(),{loaderData:h,matches:S}=Ty(),O=j.useMemo(()=>Lm(r,c,S,y,f,"data"),[r,c,S,y,f]),E=j.useMemo(()=>Lm(r,c,S,y,f,"assets"),[r,c,S,y,f]),k=j.useMemo(()=>{if(r===f.pathname+f.search+f.hash)return[];let B=new Set,q=!1;if(c.forEach(V=>{var Q;let J=y.routes[V.route.id];!J||!J.hasLoader||(!O.some(ne=>ne.route.id===V.route.id)&&V.route.id in h&&((Q=x[V.route.id])!=null&&Q.shouldRevalidate)||J.hasClientLoader?q=!0:B.add(V.route.id))}),B.size===0)return[];let Z=jy(r,v);return q&&B.size>0&&Z.searchParams.set("_routes",c.filter(V=>B.has(V.route.id)).map(V=>V.route.id).join(",")),[Z.pathname+Z.search]},[v,h,f,y,O,c,r,x]),_=j.useMemo(()=>xy(E,y),[E,y]),G=Dy(E);return j.createElement(j.Fragment,null,k.map(B=>j.createElement("link",te({key:B,rel:"prefetch",as:"fetch",href:B},o))),_.map(B=>j.createElement("link",te({key:B,rel:"modulepreload",href:B},o))),G.map(({key:B,link:q})=>j.createElement("link",te({key:B},q))))}function Ry(...r){return c=>{r.forEach(o=>{typeof o=="function"?o(c):o!=null&&(o.current=c)})}}var fp=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined";try{fp&&(window.__reactRouterVersion="7.5.0")}catch(r){}function Oy({basename:r,children:c,window:o}){let u=j.useRef();u.current==null&&(u.current=hg({window:o,v5Compat:!0}));let d=u.current,[f,y]=j.useState({action:d.action,location:d.location}),x=j.useCallback(v=>{j.startTransition(()=>y(v))},[y]);return j.useLayoutEffect(()=>d.listen(x),[d,x]),j.createElement(oy,{basename:r,children:c,location:f.location,navigationType:f.action,navigator:d})}var dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_a=j.forwardRef(function(_,k){var G=_,{onClick:c,discover:o="render",prefetch:u="none",relative:d,reloadDocument:f,replace:y,state:x,target:v,to:h,preventScrollReset:S,viewTransition:O}=G,E=za(G,["onClick","discover","prefetch","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"]);let{basename:B}=j.useContext(Gt),q=typeof h=="string"&&dp.test(h),Z,V=!1;if(typeof h=="string"&&q&&(Z=h,fp))try{let Me=new URL(window.location.href),ge=h.startsWith("//")?new URL(Me.protocol+h):new URL(h),ke=ia(ge.pathname,B);ge.origin===Me.origin&&ke!=null?h=ke+ge.search+ge.hash:V=!0}catch(Me){_t(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=Gg(h,{relative:d}),[Q,ne,fe]=Ay(u,E),be=Hy(h,{replace:y,state:x,target:v,preventScrollReset:S,relative:d,viewTransition:O});function Ae(Me){c&&c(Me),Me.defaultPrevented||be(Me)}let pe=j.createElement("a",Re(te(te({},E),fe),{href:Z||J,onClick:V||f?c:Ae,ref:Ry(k,ne),target:v,"data-discover":!q&&o==="render"?"true":void 0}));return Q&&!q?j.createElement(j.Fragment,null,pe,j.createElement(My,{page:J})):pe});_a.displayName="Link";var zy=j.forwardRef(function(O,S){var E=O,{"aria-current":c="page",caseSensitive:o=!1,className:u="",end:d=!1,style:f,to:y,viewTransition:x,children:v}=E,h=za(E,["aria-current","caseSensitive","className","end","style","to","viewTransition","children"]);let k=li(y,{relative:h.relative}),_=ra(),G=j.useContext(Cr),{navigator:B,basename:q}=j.useContext(Gt),Z=G!=null&&qy(k)&&x===!0,V=B.encodeLocation?B.encodeLocation(k).pathname:k.pathname,J=_.pathname,Q=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;o||(J=J.toLowerCase(),Q=Q?Q.toLowerCase():null,V=V.toLowerCase()),Q&&q&&(Q=ia(Q,q)||Q);const ne=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let fe=J===V||!d&&J.startsWith(V)&&J.charAt(ne)==="/",be=Q!=null&&(Q===V||!d&&Q.startsWith(V)&&Q.charAt(V.length)==="/"),Ae={isActive:fe,isPending:be,isTransitioning:Z},pe=fe?c:void 0,Me;typeof u=="function"?Me=u(Ae):Me=[u,fe?"active":null,be?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let ge=typeof f=="function"?f(Ae):f;return j.createElement(_a,Re(te({},h),{"aria-current":pe,className:Me,ref:S,style:ge,to:y,viewTransition:x}),typeof v=="function"?v(Ae):v)});zy.displayName="NavLink";var _y=j.forwardRef((_,k)=>{var G=_,{discover:r="render",fetcherKey:c,navigate:o,reloadDocument:u,replace:d,state:f,method:y=Er,action:x,onSubmit:v,relative:h,preventScrollReset:S,viewTransition:O}=G,E=za(G,["discover","fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","viewTransition"]);let B=ky(),q=Uy(x,{relative:h}),Z=y.toLowerCase()==="get"?"get":"post",V=typeof x=="string"&&dp.test(x),J=Q=>{if(v&&v(Q),Q.defaultPrevented)return;Q.preventDefault();let ne=Q.nativeEvent.submitter,fe=(ne==null?void 0:ne.getAttribute("formmethod"))||y;B(ne||Q.currentTarget,{fetcherKey:c,method:fe,navigate:o,replace:d,state:f,relative:h,preventScrollReset:S,viewTransition:O})};return j.createElement("form",Re(te({ref:k,method:Z,action:q,onSubmit:u?v:J},E),{"data-discover":!V&&r==="render"?"true":void 0}))});_y.displayName="Form";function Ny(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mp(r){let c=j.useContext(Zl);return _e(c,Ny(r)),c}function Hy(r,{target:c,replace:o,state:u,preventScrollReset:d,relative:f,viewTransition:y}={}){let x=Yg(),v=ra(),h=li(r,{relative:f});return j.useCallback(S=>{if(my(S,c)){S.preventDefault();let O=o!==void 0?o:ei(v)===ei(h);x(r,{replace:O,state:u,preventScrollReset:d,relative:f,viewTransition:y})}},[v,x,h,o,u,c,r,d,f,y])}var By=0,Ly=()=>`__${String(++By)}__`;function ky(){let{router:r}=mp("useSubmit"),{basename:c}=j.useContext(Gt),o=ay();return j.useCallback((f,...y)=>ye(this,[f,...y],function*(u,d={}){let{action:x,method:v,encType:h,formData:S,body:O}=vy(u,c);if(d.navigate===!1){let E=d.fetcherKey||Ly();yield r.fetch(E,o,d.action||x,{preventScrollReset:d.preventScrollReset,formData:S,body:O,formMethod:d.method||v,formEncType:d.encType||h,flushSync:d.flushSync})}else yield r.navigate(d.action||x,{preventScrollReset:d.preventScrollReset,formData:S,body:O,formMethod:d.method||v,formEncType:d.encType||h,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})}),[r,c,o])}function Uy(r,{relative:c}={}){let{basename:o}=j.useContext(Gt),u=j.useContext(Nt);_e(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),f=te({},li(r||".",{relative:c})),y=ra();if(r==null){f.search=y.search;let x=new URLSearchParams(f.search),v=x.getAll("index");if(v.some(S=>S==="")){x.delete("index"),v.filter(O=>O).forEach(O=>x.append("index",O));let S=x.toString();f.search=S?`?${S}`:""}}return(!r||r===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:na([o,f.pathname])),ei(f)}function qy(r,c={}){let o=j.useContext(np);_e(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=mp("useViewTransitionState"),d=li(r,{relative:c.relative});if(!o.isTransitioning)return!1;let f=ia(o.currentLocation.pathname,u)||o.currentLocation.pathname,y=ia(o.nextLocation.pathname,u)||o.nextLocation.pathname;return Mr(d.pathname,y)!=null||Mr(d.pathname,f)!=null}new TextEncoder;var Gy=Wm();const Yy=al(Gy);var lu,km;function Vy(){if(km)return lu;km=1;var r=typeof Element!="undefined",c=typeof Map=="function",o=typeof Set=="function",u=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function d(f,y){if(f===y)return!0;if(f&&y&&typeof f=="object"&&typeof y=="object"){if(f.constructor!==y.constructor)return!1;var x,v,h;if(Array.isArray(f)){if(x=f.length,x!=y.length)return!1;for(v=x;v--!==0;)if(!d(f[v],y[v]))return!1;return!0}var S;if(c&&f instanceof Map&&y instanceof Map){if(f.size!==y.size)return!1;for(S=f.entries();!(v=S.next()).done;)if(!y.has(v.value[0]))return!1;for(S=f.entries();!(v=S.next()).done;)if(!d(v.value[1],y.get(v.value[0])))return!1;return!0}if(o&&f instanceof Set&&y instanceof Set){if(f.size!==y.size)return!1;for(S=f.entries();!(v=S.next()).done;)if(!y.has(v.value[0]))return!1;return!0}if(u&&ArrayBuffer.isView(f)&&ArrayBuffer.isView(y)){if(x=f.length,x!=y.length)return!1;for(v=x;v--!==0;)if(f[v]!==y[v])return!1;return!0}if(f.constructor===RegExp)return f.source===y.source&&f.flags===y.flags;if(f.valueOf!==Object.prototype.valueOf&&typeof f.valueOf=="function"&&typeof y.valueOf=="function")return f.valueOf()===y.valueOf();if(f.toString!==Object.prototype.toString&&typeof f.toString=="function"&&typeof y.toString=="function")return f.toString()===y.toString();if(h=Object.keys(f),x=h.length,x!==Object.keys(y).length)return!1;for(v=x;v--!==0;)if(!Object.prototype.hasOwnProperty.call(y,h[v]))return!1;if(r&&f instanceof Element)return!1;for(v=x;v--!==0;)if(!((h[v]==="_owner"||h[v]==="__v"||h[v]==="__o")&&f.$$typeof)&&!d(f[h[v]],y[h[v]]))return!1;return!0}return f!==f&&y!==y}return lu=function(y,x){try{return d(y,x)}catch(v){if((v.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw v}},lu}var Xy=Vy();const Qy=al(Xy);var nu,Um;function Zy(){if(Um)return nu;Um=1;var r=function(c,o,u,d,f,y,x,v){if(!c){var h;if(o===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var S=[u,d,f,y,x,v],O=0;h=new Error(o.replace(/%s/g,function(){return S[O++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}};return nu=r,nu}var Ky=Zy();const qm=al(Ky);var iu,Gm;function Py(){return Gm||(Gm=1,iu=function(c,o,u,d){var f=u?u.call(d,c,o):void 0;if(f!==void 0)return!!f;if(c===o)return!0;if(typeof c!="object"||!c||typeof o!="object"||!o)return!1;var y=Object.keys(c),x=Object.keys(o);if(y.length!==x.length)return!1;for(var v=Object.prototype.hasOwnProperty.bind(o),h=0;h<y.length;h++){var S=y[h];if(!v(S))return!1;var O=c[S],E=o[S];if(f=u?u.call(d,O,E,S):void 0,f===!1||f===void 0&&O!==E)return!1}return!0}),iu}var Jy=Py();const $y=al(Jy);var pp=(r=>(r.BASE="base",r.BODY="body",r.HEAD="head",r.HTML="html",r.LINK="link",r.META="meta",r.NOSCRIPT="noscript",r.SCRIPT="script",r.STYLE="style",r.TITLE="title",r.FRAGMENT="Symbol(react.fragment)",r))(pp||{}),ru={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ym=Object.values(pp),Tu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Wy=Object.entries(Tu).reduce((r,[c,o])=>(r[o]=c,r),{}),zt="data-rh",Xl={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ql=(r,c)=>{for(let o=r.length-1;o>=0;o-=1){const u=r[o];if(Object.prototype.hasOwnProperty.call(u,c))return u[c]}return null},Fy=r=>{let c=Ql(r,"title");const o=Ql(r,Xl.TITLE_TEMPLATE);if(Array.isArray(c)&&(c=c.join("")),o&&c)return o.replace(/%s/g,()=>c);const u=Ql(r,Xl.DEFAULT_TITLE);return c||u||void 0},Iy=r=>Ql(r,Xl.ON_CHANGE_CLIENT_STATE)||(()=>{}),ou=(r,c)=>c.filter(o=>typeof o[r]!="undefined").map(o=>o[r]).reduce((o,u)=>te(te({},o),u),{}),e0=(r,c)=>c.filter(o=>typeof o.base!="undefined").map(o=>o.base).reverse().reduce((o,u)=>{if(!o.length){const d=Object.keys(u);for(let f=0;f<d.length;f+=1){const x=d[f].toLowerCase();if(r.indexOf(x)!==-1&&u[x])return o.concat(u)}}return o},[]),t0=r=>console&&typeof console.warn=="function"&&console.warn(r),$n=(r,c,o)=>{const u={};return o.filter(d=>Array.isArray(d[r])?!0:(typeof d[r]!="undefined"&&t0(`Helmet: ${r} should be of type "Array". Instead found type "${typeof d[r]}"`),!1)).map(d=>d[r]).reverse().reduce((d,f)=>{const y={};f.filter(v=>{let h;const S=Object.keys(v);for(let E=0;E<S.length;E+=1){const k=S[E],_=k.toLowerCase();c.indexOf(_)!==-1&&!(h==="rel"&&v[h].toLowerCase()==="canonical")&&!(_==="rel"&&v[_].toLowerCase()==="stylesheet")&&(h=_),c.indexOf(k)!==-1&&(k==="innerHTML"||k==="cssText"||k==="itemprop")&&(h=k)}if(!h||!v[h])return!1;const O=v[h].toLowerCase();return u[h]||(u[h]={}),y[h]||(y[h]={}),u[h][O]?!1:(y[h][O]=!0,!0)}).reverse().forEach(v=>d.push(v));const x=Object.keys(y);for(let v=0;v<x.length;v+=1){const h=x[v],S=te(te({},u[h]),y[h]);u[h]=S}return d},[]).reverse()},a0=(r,c)=>{if(Array.isArray(r)&&r.length){for(let o=0;o<r.length;o+=1)if(r[o][c])return!0}return!1},l0=r=>({baseTag:e0(["href"],r),bodyAttributes:ou("bodyAttributes",r),defer:Ql(r,Xl.DEFER),encode:Ql(r,Xl.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ou("htmlAttributes",r),linkTags:$n("link",["rel","href"],r),metaTags:$n("meta",["name","charset","http-equiv","property","itemprop"],r),noscriptTags:$n("noscript",["innerHTML"],r),onChangeClientState:Iy(r),scriptTags:$n("script",["src","innerHTML"],r),styleTags:$n("style",["cssText"],r),title:Fy(r),titleAttributes:ou("titleAttributes",r),prioritizeSeoTags:a0(r,Xl.PRIORITIZE_SEO_TAGS)}),hp=r=>Array.isArray(r)?r.join(""):r,n0=(r,c)=>{const o=Object.keys(r);for(let u=0;u<o.length;u+=1)if(c[o[u]]&&c[o[u]].includes(r[o[u]]))return!0;return!1},cu=(r,c)=>Array.isArray(r)?r.reduce((o,u)=>(n0(u,c)?o.priority.push(u):o.default.push(u),o),{priority:[],default:[]}):{default:r,priority:[]},Vm=(r,c)=>Re(te({},r),{[c]:void 0}),i0=["noscript","script","style"],hu=(r,c=!0)=>c===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),vp=r=>Object.keys(r).reduce((c,o)=>{const u=typeof r[o]!="undefined"?`${o}="${r[o]}"`:`${o}`;return c?`${c} ${u}`:u},""),r0=(r,c,o,u)=>{const d=vp(o),f=hp(c);return d?`<${r} ${zt}="true" ${d}>${hu(f,u)}</${r}>`:`<${r} ${zt}="true">${hu(f,u)}</${r}>`},o0=(r,c,o=!0)=>c.reduce((u,d)=>{const f=d,y=Object.keys(f).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,S)=>{const O=typeof f[S]=="undefined"?S:`${S}="${hu(f[S],o)}"`;return h?`${h} ${O}`:O},""),x=f.innerHTML||f.cssText||"",v=i0.indexOf(r)===-1;return`${u}<${r} ${zt}="true" ${y}${v?"/>":`>${x}</${r}>`}`},""),gp=(r,c={})=>Object.keys(r).reduce((o,u)=>{const d=Tu[u];return o[d||u]=r[u],o},c),c0=(r,c,o)=>{const u={key:c,[zt]:!0},d=gp(o,u);return[Ot.createElement("title",d,c)]},jr=(r,c)=>c.map((o,u)=>{const d={key:u,[zt]:!0};return Object.keys(o).forEach(f=>{const x=Tu[f]||f;if(x==="innerHTML"||x==="cssText"){const v=o.innerHTML||o.cssText;d.dangerouslySetInnerHTML={__html:v}}else d[x]=o[f]}),Ot.createElement(r,d)}),At=(r,c,o=!0)=>{switch(r){case"title":return{toComponent:()=>c0(r,c.title,c.titleAttributes),toString:()=>r0(r,c.title,c.titleAttributes,o)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>gp(c),toString:()=>vp(c)};default:return{toComponent:()=>jr(r,c),toString:()=>o0(r,c,o)}}},u0=({metaTags:r,linkTags:c,scriptTags:o,encode:u})=>{const d=cu(r,ru.meta),f=cu(c,ru.link),y=cu(o,ru.script);return{priorityMethods:{toComponent:()=>[...jr("meta",d.priority),...jr("link",f.priority),...jr("script",y.priority)],toString:()=>`${At("meta",d.priority,u)} ${At("link",f.priority,u)} ${At("script",y.priority,u)}`},metaTags:d.default,linkTags:f.default,scriptTags:y.default}},s0=r=>{const{baseTag:c,bodyAttributes:o,encode:u=!0,htmlAttributes:d,noscriptTags:f,styleTags:y,title:x="",titleAttributes:v,prioritizeSeoTags:h}=r;let{linkTags:S,metaTags:O,scriptTags:E}=r,k={toComponent:()=>{},toString:()=>""};return h&&({priorityMethods:k,linkTags:S,metaTags:O,scriptTags:E}=u0(r)),{priority:k,base:At("base",c,u),bodyAttributes:At("bodyAttributes",o,u),htmlAttributes:At("htmlAttributes",d,u),link:At("link",S,u),meta:At("meta",O,u),noscript:At("noscript",f,u),script:At("script",E,u),style:At("style",y,u),title:At("title",{title:x,titleAttributes:v},u)}},vu=s0,Sr=[],yp=!!(typeof window!="undefined"&&window.document&&window.document.createElement),gu=class{constructor(r,c){la(this,"instances",[]);la(this,"canUseDOM",yp);la(this,"context");la(this,"value",{setHelmet:r=>{this.context.helmet=r},helmetInstances:{get:()=>this.canUseDOM?Sr:this.instances,add:r=>{(this.canUseDOM?Sr:this.instances).push(r)},remove:r=>{const c=(this.canUseDOM?Sr:this.instances).indexOf(r);(this.canUseDOM?Sr:this.instances).splice(c,1)}}});this.context=r,this.canUseDOM=c||!1,c||(r.helmet=vu({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},f0={},bp=Ot.createContext(f0),tl,xp=(tl=class extends j.Component{constructor(o){super(o);la(this,"helmetData");this.helmetData=new gu(this.props.context||{},tl.canUseDOM)}render(){return Ot.createElement(bp.Provider,{value:this.helmetData.value},this.props.children)}},la(tl,"canUseDOM",yp),tl),Vl=(r,c)=>{const o=document.head||document.querySelector("head"),u=o.querySelectorAll(`${r}[${zt}]`),d=[].slice.call(u),f=[];let y;return c&&c.length&&c.forEach(x=>{const v=document.createElement(r);for(const h in x)if(Object.prototype.hasOwnProperty.call(x,h))if(h==="innerHTML")v.innerHTML=x.innerHTML;else if(h==="cssText")v.styleSheet?v.styleSheet.cssText=x.cssText:v.appendChild(document.createTextNode(x.cssText));else{const S=h,O=typeof x[S]=="undefined"?"":x[S];v.setAttribute(h,O)}v.setAttribute(zt,"true"),d.some((h,S)=>(y=S,v.isEqualNode(h)))?d.splice(y,1):f.push(v)}),d.forEach(x=>{var v;return(v=x.parentNode)==null?void 0:v.removeChild(x)}),f.forEach(x=>o.appendChild(x)),{oldTags:d,newTags:f}},yu=(r,c)=>{const o=document.getElementsByTagName(r)[0];if(!o)return;const u=o.getAttribute(zt),d=u?u.split(","):[],f=[...d],y=Object.keys(c);for(const x of y){const v=c[x]||"";o.getAttribute(x)!==v&&o.setAttribute(x,v),d.indexOf(x)===-1&&d.push(x);const h=f.indexOf(x);h!==-1&&f.splice(h,1)}for(let x=f.length-1;x>=0;x-=1)o.removeAttribute(f[x]);d.length===f.length?o.removeAttribute(zt):o.getAttribute(zt)!==y.join(",")&&o.setAttribute(zt,y.join(","))},d0=(r,c)=>{typeof r!="undefined"&&document.title!==r&&(document.title=hp(r)),yu("title",c)},Xm=(r,c)=>{const{baseTag:o,bodyAttributes:u,htmlAttributes:d,linkTags:f,metaTags:y,noscriptTags:x,onChangeClientState:v,scriptTags:h,styleTags:S,title:O,titleAttributes:E}=r;yu("body",u),yu("html",d),d0(O,E);const k={baseTag:Vl("base",o),linkTags:Vl("link",f),metaTags:Vl("meta",y),noscriptTags:Vl("noscript",x),scriptTags:Vl("script",h),styleTags:Vl("style",S)},_={},G={};Object.keys(k).forEach(B=>{const{newTags:q,oldTags:Z}=k[B];q.length&&(_[B]=q),Z.length&&(G[B]=k[B].oldTags)}),c&&c(),v(r,_,G)},Wn=null,m0=r=>{Wn&&cancelAnimationFrame(Wn),r.defer?Wn=requestAnimationFrame(()=>{Xm(r,()=>{Wn=null})}):(Xm(r),Wn=null)},p0=m0,Qm=class extends j.Component{constructor(){super(...arguments);la(this,"rendered",!1)}shouldComponentUpdate(c){return!$y(c,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:c}=this.props.context;c.remove(this),this.emitChange()}emitChange(){const{helmetInstances:c,setHelmet:o}=this.props.context;let u=null;const d=l0(c.get().map(f=>{const y=te({},f.props);return delete y.context,y}));xp.canUseDOM?p0(d):vu&&(u=vu(d)),o(u)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:c}=this.props.context;c.add(this),this.emitChange()}render(){return this.init(),null}},du,Kl=(du=class extends j.Component{shouldComponentUpdate(r){return!Qy(Vm(this.props,"helmetData"),Vm(r,"helmetData"))}mapNestedChildrenToProps(r,c){if(!c)return null;switch(r.type){case"script":case"noscript":return{innerHTML:c};case"style":return{cssText:c};default:throw new Error(`<${r.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(r,c,o,u){return Re(te({},c),{[r.type]:[...c[r.type]||[],te(te({},o),this.mapNestedChildrenToProps(r,u))]})}mapObjectTypeChildren(r,c,o,u){switch(r.type){case"title":return Re(te({},c),{[r.type]:u,titleAttributes:te({},o)});case"body":return Re(te({},c),{bodyAttributes:te({},o)});case"html":return Re(te({},c),{htmlAttributes:te({},o)});default:return Re(te({},c),{[r.type]:te({},o)})}}mapArrayTypeChildrenToProps(r,c){let o=te({},c);return Object.keys(r).forEach(u=>{o=Re(te({},o),{[u]:r[u]})}),o}warnOnInvalidChildren(r,c){return qm(Ym.some(o=>r.type===o),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ym.join(", ")} are allowed. Helmet does not support rendering <${r.type}> elements. Refer to our API for more information.`),qm(!c||typeof c=="string"||Array.isArray(c)&&!c.some(o=>typeof o!="string"),`Helmet expects a string as a child of <${r.type}>. Did you forget to wrap your children in braces? ( <${r.type}>{\`\`}</${r.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(r,c){let o={};return Ot.Children.forEach(r,u=>{if(!u||!u.props)return;const v=u.props,{children:d}=v,f=za(v,["children"]),y=Object.keys(f).reduce((h,S)=>(h[Wy[S]||S]=f[S],h),{});let{type:x}=u;switch(typeof x=="symbol"?x=x.toString():this.warnOnInvalidChildren(u,d),x){case"Symbol(react.fragment)":c=this.mapChildrenToProps(d,c);break;case"link":case"meta":case"noscript":case"script":case"style":o=this.flattenArrayTypeChildren(u,o,y,d);break;default:c=this.mapObjectTypeChildren(u,c,y,d);break}}),this.mapArrayTypeChildrenToProps(o,c)}render(){const d=this.props,{children:r}=d,c=za(d,["children"]);let o=te({},c),{helmetData:u}=c;if(r&&(o=this.mapChildrenToProps(r,o)),u&&!(u instanceof gu)){const f=u;u=new gu(f.context,!0),delete o.helmetData}return u?Ot.createElement(Qm,Re(te({},o),{context:u.value})):Ot.createElement(bp.Consumer,null,f=>Ot.createElement(Qm,Re(te({},o),{context:f})))}},la(du,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),du);const h0="modulepreload",v0=function(r){return"/"+r},Zm={},Fn=function(c,o,u){let d=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const y=document.querySelector("meta[property=csp-nonce]"),x=(y==null?void 0:y.nonce)||(y==null?void 0:y.getAttribute("nonce"));d=Promise.allSettled(o.map(v=>{if(v=v0(v),v in Zm)return;Zm[v]=!0;const h=v.endsWith(".css"),S=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${S}`))return;const O=document.createElement("link");if(O.rel=h?"stylesheet":h0,h||(O.as="script"),O.crossOrigin="",O.href=v,x&&O.setAttribute("nonce",x),document.head.appendChild(O),h)return new Promise((E,k)=>{O.addEventListener("load",E),O.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${v}`)))})}))}function f(y){const x=new Event("vite:preloadError",{cancelable:!0});if(x.payload=y,window.dispatchEvent(x),!x.defaultPrevented)throw y}return d.then(y=>{for(const x of y||[])x.status==="rejected"&&f(x.reason);return c().catch(f)})},Sp={html:`<!DOCTYPE html>
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
}`},g0=Object.freeze(Object.defineProperty({__proto__:null,cinevisionDemo:Sp},Symbol.toStringTag,{value:"Module"})),Ep={html:`
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
        <a href="#about">About</a>
        <a href="#contacto">Contacto</a>
    </nav>

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
    font-weight: bold;
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
  }
  .grid {
    /* Cada bloque es un grid 3×3 que ocupa todo el viewport */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;           /* aquí el gap que quieras */
    width: 100vw;
    height: 100vh;
    border: 5px solid white;
    
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
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10001;
    color: #333;
    transition: all 0.2s ease;
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
    width: 500px;
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
    padding: 40px 30px 40px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    gap: 60px;
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

  /* Responsive para modal de contacto */
  @media (max-width: 768px) {
    .contact-card {
      width: 95vw;
      margin: 0 auto;
    }
    
    .contact-content {
      padding: 30px 20px 30px 20px;
    }
    
    .contact-info {
      flex-direction: column;
      gap: 25px;
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
  });`},y0=Object.freeze(Object.defineProperty({__proto__:null,crealabDemo:Ep},Symbol.toStringTag,{value:"Module"})),wp={html:`<!DOCTYPE html>
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
});`},b0=Object.freeze(Object.defineProperty({__proto__:null,portfolioDemo:wp},Symbol.toStringTag,{value:"Module"})),x0={},ht=typeof import.meta!="undefined"&&x0?"/":"",In={web:[{id:1,category:"final",title:"KUMO CREATIVE",titleMin:"Kumo Creative Project",slug:"kumo-creative-project",finished:!0,description:"Kumo Creative is a video production company. For this project, they asked me to help with the responsive development of the website. The site was already built, so I focused on making it look good on all devices.",previewImage:ht+"img/LandingPreview_KumoCreative.webp",video:ht+"vids/KumoCreativeProject.webm",poster:ht+"vids/PosterKumoCreativeProject.webp",url:"https://kumocreativeproject.com",keywords:"Kumo Creative, Kumo Creative Project, Video Producer, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Kumo Creative Project Website, Kumo Creative Project Website, Kumo Creative Project Website React, Kumo Creative Project Website HTML, Kumo Creative Project Website CSS, Kumo Creative Project Website JavaScript"},{id:2,category:"demo",title:"CREALAB",titleMin:"Crealab",slug:"crealab",finished:!0,description:"Crealab is an imaginary advertising and branding studio. This demo features an infinite grid of projects, with modals to view the details of each one. It's a more creative and different website, but simple at the same time",previewImage:ht+"img/LandingPreview_Crealab.webp",files:Ep,keywords:"Crealab, Crealab Project, Research, Development, Software, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Crealab Project Website, Crealab Project Website Demo, Crealab Project Website React, Crealab Project Website HTML, Crealab Project Website CSS, Crealab Project Website JavaScript"},{id:3,category:"demo",title:"CINEVISION STUDIOS",titleMin:"CineVision Studios",slug:"cinevision-studios",finished:!0,description:"CineVision Studios is an imaginary indie studio that produces movies and series. This is a demo of their website where you can see their code. It's a simple and classic website with necessary data for the client.",previewImage:ht+"img/LandingPreview_CineVision.webp",files:Sp,keywords:"Video production, Videos, Movie Studio, Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, CineVision Studios, CineVision Studios Website, CineVision Studios Website Demo, CineVision Studios Website React, CineVision Studios Website HTML, CineVision Studios Website CSS, CineVision Studios Website JavaScript"},{id:4,category:"demo",title:"PORTFOLIO DEMO",titleMin:"Portfolio",slug:"portfolio-demo",finished:!0,description:"This is a demo of a portfolio website. The images work as a carousel and the details are hidden in a modal. This solution is based on Esmeralda Devlin's portfolio.",previewImage:ht+"img/LandingPreview_Portfolio.webp",files:wp,keywords:"Portfolio, Web Development, Responsive Design, HTML, CSS, JavaScript, React, Portfolio Demo, Portfolio Website, Portfolio Website Demo, Portfolio Website React, Portfolio Website HTML, Portfolio Website CSS, Portfolio Website JavaScript"}],games:[{id:5,title:"CONSTELLATIONS",titleMin:"Constellations",slug:"constellations",finished:!0,description:"This small Pygame game draws moving points and connects those that are within a certain distance. The user can adjust the speed, number of points, and connection distance. With Pygbag, it can run as a WebAssembly application.",previewImage:ht+"img/LandingPreview_Constellations.webp",video:ht+"vids/ProjectVideo_Constellations.webm",poster:ht+"img/LandingPreview_Constellations.webp",url:"/games/Constelations/build/web/index.html",git:"https://github.com/MarcBasas/Constelations_pygame",keywords:"Pygame, WebAssembly, Game, Portfolio, Video Game, Games Development, pygame, pywebview, pyinstaller, constellations pygame, constellations webassembly, constellations game, constellations portfolio, constellations pygame game, constellations webassembly game, constellations portfolio game"},{id:6,title:"CHESSEXCEL",titleMin:"ChessExcel",slug:"chessExcel",finished:!0,description:"This Excel-based chess game developed in VBA allows users to play chess in a different environment. Packaged as a workbook, it attempts to demonstrate Excel's capabilities.",previewImage:ht+"img/LandingPreview_ChessExcel.webp",video:ht+"vids/ChessExcell.webm",poster:ht+"img/LandingPreview_ChessExcel.webp",git:"https://github.com/MarcBasas/ChessExcel",keywords:"Excel, VBA, Game, Portfolio, Video Game, Games Development, Chess, Excel VBA, Excel VBA Game, Excel VBA Chess, Chess Excel, Chess Excel Game, Chess Excel VBA, Chess Excel VBA Game"},{id:7,title:"HOBO",titleMin:"Hobo",slug:"hobo",finished:!1,description:"Hobo is a 2D platformer game based on Unity developed in C# that procedurally generates a random map in each session, allowing players to run, jump and navigate through platforms to collect all the food items scattered throughout the level.",previewImage:ht+"img/LandingPreview_Hobo.webp",keywords:"Unity, C#, Game, Portfolio, Video Game, Games Development, Hobo, Unity C#, Unity C# Game, Unity C# Hobo, map generation, random map, platformer, 2D platformer"}]},S0="https://portfolio-admin-server-76sn.onrender.com";let el=null,Tr=0;const E0=5*60*1e3,w0=(r=!1)=>ye(void 0,null,function*(){var c,o;if(!r&&el&&Date.now()-Tr<E0)return el;try{console.log("DEBUG: Intentando cargar proyectos desde servidor...");const u=yield fetch(`${S0}/api/projects?t=${Date.now()}`,{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},signal:AbortSignal.timeout(8e3)});if(!u.ok)throw new Error(`Error del servidor: ${u.status}`);const d=yield u.text();console.log("DEBUG: Código recibido del servidor, longitud:",d.length);const y={exports:{}}.exports,v=d.replace(/import\s+.*?from\s+.*?;?\n?/g,"").match(/export const projects = ({[\s\S]*?});/);if(console.log("DEBUG: Match encontrado:",!!v),v){console.log("DEBUG: Cargando demos...");const{cinevisionDemo:h}=yield Fn(()=>ye(void 0,null,function*(){const{cinevisionDemo:k}=yield Promise.resolve().then(()=>g0);return{cinevisionDemo:k}}),[]),{crealabDemo:S}=yield Fn(()=>ye(void 0,null,function*(){const{crealabDemo:k}=yield Promise.resolve().then(()=>y0);return{crealabDemo:k}}),void 0),{portfolioDemo:O}=yield Fn(()=>ye(void 0,null,function*(){const{portfolioDemo:k}=yield Promise.resolve().then(()=>b0);return{portfolioDemo:k}}),void 0);console.log("DEBUG: Demos cargados exitosamente");const E=new Function("BASE","portfolioDemo","cinevisionDemo","crealabDemo","return "+v[1])("",O,h,S);return console.log("DEBUG: Proyectos procesados:",{web:(c=E.web)==null?void 0:c.length,games:(o=E.games)==null?void 0:o.length}),el=E,Tr=Date.now(),E}else throw new Error("No se pudo extraer los datos de proyectos del servidor")}catch(u){return console.warn("ERROR CARGANDO DESDE SERVIDOR, USANDO FALLBACK ESTÁTICO:",u.message),el||(el=In,Tr=Date.now(),In)}}),Km=()=>{el=null,Tr=0},jp=j.createContext(),Or=()=>{const r=j.useContext(jp);if(!r)throw new Error("useProjects debe usarse dentro de ProjectsProvider");return r},j0=({children:r})=>{const[c,o]=j.useState(In),[u,d]=j.useState(!1),[f,y]=j.useState(null),[x,v]=j.useState(!1),h=(k=!1)=>ye(void 0,null,function*(){d(!0),y(null);try{const _=yield w0(k);o(G=>{const B=JSON.stringify(G),q=JSON.stringify(_);return B===q?G:_}),v(_!==In)}catch(_){console.error("Error cargando proyectos:",_),y(_.message),o(In),v(!1)}finally{d(!1)}}),S=()=>ye(void 0,null,function*(){Km(),yield h(!0)}),O=()=>ye(void 0,null,function*(){console.log("DEBUG: refreshAfterAdminChange ejecutado"),Km(),setTimeout(()=>ye(void 0,null,function*(){console.log("DEBUG: Ejecutando loadProjectsData después del timeout"),yield h(!0)}),1e3)});j.useEffect(()=>{h()},[]);const E={projects:c,loading:u,error:f,isFromServer:x,refresh:S,refreshAfterAdminChange:O,getProjectBySlug:k=>[...c.web,...c.games].find(G=>G.slug===k),getProjectById:k=>[...c.web,...c.games].find(G=>G.id===k)};return m.jsx(jp.Provider,{value:E,children:r})};function Na(r=768){const[c,o]=j.useState(!1),[u,d]=j.useState(!1);return j.useEffect(()=>{const f=window.innerWidth<=r;o(f),d(!0);const y=()=>{const x=window.innerWidth<=r;o(x)};return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[r]),u?c:!1}const T0=()=>{const{pathname:r}=ra(),c=Na();return j.useEffect(()=>{const o=()=>{try{if((c||r==="/")&&(window.scrollTo(0,0),window.scrollTo({top:0,left:0,behavior:"instant"})),!c&&r==="/"){const d=document.querySelector(".left-column"),f=document.querySelector(".right-column");d&&(d.scrollTo({top:0,behavior:"instant"}),d.scrollTop=0),f&&(f.scrollTo({top:0,behavior:"instant"}),f.scrollTop=0)}if(c){const d=document.getElementById("mobile-scroll-container");d&&(d.scrollTo({top:0,behavior:"instant"}),d.scrollTop=0),typeof window!="undefined"&&window.scrollY>0&&(window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0)}c&&(document.querySelectorAll('[style*="overflow-y: auto"], [style*="overflow: auto"]').forEach(f=>{f.scrollTo({top:0,behavior:"instant"}),f.scrollTop=0}),document.body&&(document.body.scrollTop=0),document.documentElement&&(document.documentElement.scrollTop=0))}catch(d){console.warn("ScrollToTop: Error resetting scroll position",d);try{window.scrollTo(0,0)}catch(f){}}console.log(`ScrollToTop: ${c?"Mobile":"Desktop"} - Reset scroll for ${r}, window.scrollY = ${window.scrollY}`)};o();const u=setTimeout(o,100);return()=>clearTimeout(u)},[r]),null},Tp=j.createContext(),A0=({children:r})=>{const[c,o]=j.useState(!1),u=()=>o(!0),d=()=>o(!1),f=()=>o(!c);return m.jsx(Tp.Provider,{value:{showContact:c,openContact:u,closeContact:d,toggleContact:f},children:r})},Au=()=>{const r=j.useContext(Tp);if(!r)throw new Error("useContact debe ser usado dentro de ContactProvider");return r},M0=({allProjects:r,onClose:c})=>{const{closeContact:o}=Au(),u=()=>{o(),c()};return Yy.createPortal(m.jsx("div",{className:"header__mobile-menu",children:r.map(d=>m.jsx(_a,{to:`/project/${d.slug}/`,className:"header__mobile-menu-link",onClick:u,translate:"no",children:d.title},d.id))}),document.body)},D0=()=>{const[r,c]=j.useState(!1),o=ra(),{projects:u}=Or(),d=[...u.web,...u.games],f=j.useRef(null),y=j.useRef(null),x=Na(),{closeContact:v}=Au(),h=()=>{v(),c(!r)};return j.useEffect(()=>{const S=O=>{r&&f.current&&!f.current.contains(O.target)&&!y.current.contains(O.target)&&c(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[r]),j.useEffect(()=>{const S=O=>{var E;x&&r&&!((E=y.current)!=null&&E.contains(O.target))&&!O.target.closest(".header__mobile-menu-link")&&c(!1)};if(x)return document.addEventListener("click",S),()=>{document.removeEventListener("click",S)}},[x,r]),m.jsx("header",{className:"header",role:"banner","aria-label":"Portfolio header with navigation - Marc Basas - Web Developer Portfolio",children:m.jsxs("nav",{className:"header__nav",role:"navigation","aria-label":"Main navigation",itemScope:!0,itemType:"https://schema.org/SiteNavigationElement",children:[m.jsx(_a,{to:"/about/",className:"header__link",onClick:v,"aria-label":"Go to About page - Marc Basas Portfolio","aria-current":o.pathname==="/about"?"page":void 0,itemProp:"url",children:m.jsx("span",{itemProp:"name",translate:"no",children:"ABOUT"})}),!x&&m.jsx(_a,{to:"/",className:"header__link header__logo",onClick:v,"aria-label":"Go to Home page - Marc Basas Portfolio","aria-current":o.pathname==="/"?"page":void 0,itemProp:"url",children:m.jsx("img",{src:"/img/Logo_temporal_web_marc-03_converted.webp",alt:"Logo",style:{width:"64px",marginTop:"10px"}})}),m.jsxs("div",{className:"header__projects-container",itemScope:!0,itemType:"https://schema.org/ItemList",children:[m.jsx("button",{ref:y,className:"header__link",onClick:h,"aria-label":r?"Close projects list":"Show projects list","aria-expanded":r,"aria-controls":"projects-dropdown",itemProp:"name",translate:"no",children:x&&r?"CLOSE":"PROJECTS"}),r&&(x?m.jsx(M0,{allProjects:d,onClose:()=>c(!1)}):m.jsx("div",{ref:f,className:"header__projects-dropdown",id:"projects-dropdown",role:"menu","aria-label":"Projects list",children:d.map((S,O)=>m.jsxs(_a,{to:`/project/${S.slug}/`,className:"header__project-link",onClick:()=>{v(),c(!1)},role:"menuitem","aria-label":`Go to ${S.title} project - Marc Basas Portfolio`,itemProp:"itemListElement",itemScope:!0,itemType:"https://schema.org/ListItem",children:[m.jsx("span",{itemProp:"name",translate:"no",children:S.title}),m.jsx("meta",{itemProp:"position",content:O+1})]},S.id))}))]})]})})},Ap=()=>{const{showContact:r,toggleContact:c,closeContact:o}=Au(),u=Na(),d=()=>{c()},f=y=>{y.target.classList.contains("contact-overlay")&&o()};return m.jsxs(m.Fragment,{children:[m.jsxs("footer",{className:"footer",role:"contentinfo","aria-label":"Portfolio footer - contact information and copyright - Marc Basas - Web Developer Portfolio",itemScope:!0,itemType:"https://schema.org/WPFooter",children:[m.jsx("div",{className:"footer__left",itemScope:!0,itemType:"https://schema.org/ContactPoint",children:m.jsx("button",{className:"footer_contact",onClick:d,"aria-label":"Show contact information and about details - Marc Basas Portfolio","aria-expanded":r,"aria-controls":"about-content",itemProp:"name",children:"CONTACT"})}),m.jsx("div",{className:"footer__right",itemScope:!0,itemType:"https://schema.org/CreativeWork",children:u?m.jsx(_a,{to:"/",className:"footer__copyright",onClick:o,"aria-label":"Go to Home page - Marc Basas Portfolio",itemProp:"url",children:"HOME"}):m.jsx("p",{className:"footer__copyright","aria-label":"Copyright Marc Basas Portfolio 2025",itemProp:"copyrightYear",children:"© 2025"})})]}),r&&m.jsx("div",{className:"contact-overlay",onClick:f,role:"dialog","aria-modal":"true","aria-labelledby":"contact-title",children:m.jsxs("div",{className:"contact-content",id:"about-content",itemScope:!0,itemType:"https://schema.org/ContactPoint",children:[m.jsx("h2",{id:"contact-title",className:"visually-hidden",itemProp:"name",children:"Marc Basas - Contact Information - Portfolio Details - Web Developer - REACT Developer - FrontEnd Developer - Web Designer - Game Developer"}),m.jsxs("p",{itemProp:"description",children:["For inquiries and orders:",m.jsx("br",{}),m.jsx("p",{children:m.jsx("br",{})}),m.jsxs("a",{href:"mailto:marcbasasdev@gmail.com",itemProp:"email",children:["marcbasasdev@gmail.com ",m.jsx("br",{})]}),m.jsxs("a",{href:"tel:+34615502988",itemProp:"telephone",children:["+34 615502988 ",m.jsx("br",{})]}),m.jsxs("a",{href:"https://github.com/MarcBasas",itemProp:"GitHub",target:"_blank",rel:"noopener noreferrer",children:["https://github.com/MarcBasas ",m.jsx("br",{})]})]}),m.jsx("p",{itemProp:"description",children:"¡Thanks for visiting!"})]})})]})},C0=()=>m.jsxs(A0,{children:[m.jsxs(Kl,{children:[m.jsx("html",{lang:"en"}),m.jsx("meta",{name:"theme-color",content:"#e5ff70"})]}),m.jsxs("div",{className:"layout",role:"document",children:[m.jsx(D0,{}),m.jsx("main",{role:"main",children:m.jsx(ry,{})}),m.jsx(Ap,{})]})]});var uu={exports:{}},su,Pm;function R0(){if(Pm)return su;Pm=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return su=r,su}var fu,Jm;function O0(){if(Jm)return fu;Jm=1;var r=R0();function c(){}function o(){}return o.resetWarningCache=c,fu=function(){function u(y,x,v,h,S,O){if(O!==r){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}u.isRequired=u;function d(){return u}var f={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:d,element:u,elementType:u,instanceOf:d,node:u,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:o,resetWarningCache:c};return f.PropTypes=f,f},fu}var $m;function z0(){return $m||($m=1,uu.exports=O0()()),uu.exports}var _0=z0();const vt=al(_0),Ar=({data:r})=>{const{title:c,description:o,previewImage:u,slug:d}=r;return m.jsxs(_a,{to:`/project/${d}/`,className:"project-card","aria-label":`View ${c} project - Marc Basas Portfolio - Web Developer Portfolio`,itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[m.jsxs("div",{className:"project-image-container",children:[m.jsx("img",{src:u,alt:`Preview of ${c} project - Marc Basas Portfolio - Web Developer Portfolio`,loading:"lazy",className:"project-image",itemProp:"image"}),m.jsx("div",{className:"overlay"})]}),m.jsxs("div",{className:"project-text",children:[m.jsx("h3",{itemProp:"name",children:c}),m.jsx("meta",{itemProp:"description",content:o})]})]})};Ar.propTypes={data:vt.shape({title:vt.string.isRequired,description:vt.string.isRequired,previewImage:vt.string.isRequired,slug:vt.string.isRequired}).isRequired};const N0=()=>{const r=j.useRef(null),c=j.useRef(null),o=j.useRef(!1),u=j.useRef(!1),d=Na(),{projects:f}=Or(),y=[...f.web,...f.web],x=[...f.games,...f.games],v=[...f.web,...f.games,...f.web,...f.games],[h,S]=j.useState(v),[O,E]=j.useState(y),[k,_]=j.useState(x);return j.useEffect(()=>{const G=[...f.web,...f.web],B=[...f.games,...f.games],q=[...f.web,...f.games,...f.web,...f.games];E(G),_(B),S(q)},[f,d]),j.useEffect(()=>{if(d)return;const G=setTimeout(()=>{const B=r.current,q=c.current;if(B&&q){const Z=(Q,ne,fe,be)=>{if(!fe.current&&Q&&ne){be.current=!0;const Ae=Q.scrollTop/(Q.scrollHeight-Q.clientHeight);ne.scrollTop=Ae*(ne.scrollHeight-ne.clientHeight),be.current=!1}},V=()=>Z(B,q,o,u),J=()=>Z(q,B,u,o);return B.addEventListener("scroll",V,{passive:!0}),q.addEventListener("scroll",J,{passive:!0}),()=>{B&&B.removeEventListener("scroll",V),q&&q.removeEventListener("scroll",J)}}},100);return()=>{clearTimeout(G)}},[d]),j.useEffect(()=>{if(d)return;const G=r.current,B=c.current,q=V=>{const{scrollTop:J,scrollHeight:Q,clientHeight:ne}=V.target;J+ne>=Q*.7&&E(fe=>[...fe,...f.web])},Z=V=>{const{scrollTop:J,scrollHeight:Q,clientHeight:ne}=V.target;J+ne>=Q*.7&&_(fe=>[...fe,...f.games])};return G&&G.addEventListener("scroll",q,{passive:!0}),B&&B.addEventListener("scroll",Z,{passive:!0}),()=>{G&&G.removeEventListener("scroll",q),B&&B.removeEventListener("scroll",Z)}},[f,d]),j.useEffect(()=>{if(!d)return;const G=q=>{const{scrollTop:Z,scrollHeight:V,clientHeight:J}=q.target;Z+J>=V*.7&&S(Q=>[...Q,...f.web,...f.games])},B=document.getElementById("mobile-scroll-container");return B&&B.addEventListener("scroll",G,{passive:!0}),()=>{B&&B.removeEventListener("scroll",G)}},[d,S]),m.jsxs(m.Fragment,{children:[m.jsxs(Kl,{children:[m.jsx("title",{children:"Marc Basas - Web Developer & Game Developer Barcelona | Portfolio Frontend & Fullstack"}),m.jsx("meta",{name:"description",content:"Portfolio de Marc Basas, programador web autónomo en Barcelona. Especializado en desarrollo frontend y fullstack, servicios de programación web para empresas y proyectos personalizados. Descubre mis proyectos de desarrollo web y aplicaciones interactivas."}),m.jsx("meta",{name:"keywords",content:"programador autonomo, programador web autonomo, programador barcelona, portfolio programador, desarrollo web barcelona, programador freelance barcelona, servicios programacion web, frontend barcelona, fullstack barcelona, proyectos web barcelona, Marc Basas, desarrollador independiente"}),m.jsx("meta",{name:"author",content:"Marc Basas"}),m.jsx("meta",{property:"og:title",content:"Marc Basas - Programador Web Autónomo Barcelona | Portfolio"}),m.jsx("meta",{property:"og:description",content:"Portfolio de programador web autónomo en Barcelona. Proyectos de desarrollo frontend y fullstack, aplicaciones web interactivas y servicios de programación para empresas."}),m.jsx("meta",{property:"og:type",content:"website"}),m.jsx("meta",{property:"og:url",content:"https://www.marcbasas.com"}),m.jsx("meta",{property:"og:site_name",content:"Marc Basas - Programador Web Autónomo Barcelona"}),m.jsx("meta",{property:"og:locale",content:"es_ES"}),m.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),m.jsx("meta",{name:"twitter:title",content:"Marc Basas - Programador Web Autónomo Barcelona"}),m.jsx("meta",{name:"twitter:description",content:"Portfolio de programador web autónomo en Barcelona. Servicios de desarrollo frontend y fullstack para empresas y proyectos personalizados."}),m.jsx("meta",{name:"twitter:url",content:"https://www.marcbasas.com"}),m.jsx("link",{rel:"canonical",href:"https://www.marcbasas.com/"})]}),d?m.jsx("div",{id:"mobile-scroll-container",className:"mobile-landing-container",role:"main","aria-label":"Lista de proyectos",children:h.map((G,B)=>m.jsx(Ar,{data:G,"aria-label":`Proyecto: ${G.title}`,translate:"no"},`mobile-${B}`))}):m.jsxs("div",{className:"landing-container",role:"main","aria-label":"Lista de proyectos",children:[m.jsx("div",{className:"column left-column",ref:r,role:"region","aria-label":"Proyectos web",children:O.map((G,B)=>m.jsx(Ar,{data:G,"aria-label":`Proyecto web: ${G.title}`},`web-${B}`))}),m.jsx("div",{className:"column right-column",ref:c,role:"region","aria-label":"Proyectos de videojuegos",children:k.map((G,B)=>m.jsx(Ar,{data:G,"aria-label":`Proyecto de videojuego: ${G.title}`},`game-${B}`))})]})]})};class H0 extends Ot.Component{constructor(c){super(c),this.state={hasError:!1,error:null}}static getDerivedStateFromError(c){return{hasError:!0,error:c}}componentDidCatch(c,o){console.error("LiveEditor Error Boundary caught an error:",c,o)}render(){var c;return this.state.hasError?m.jsxs("div",{className:"live-editor-error",children:[m.jsx("h3",{children:"Error en el Live Editor"}),m.jsx("p",{children:"Ha ocurrido un error al cargar el editor de código."}),m.jsxs("details",{style:{marginTop:"1rem",fontSize:"0.8rem",color:"#666"},children:[m.jsx("summary",{children:"Detalles del error"}),m.jsx("pre",{style:{marginTop:"0.5rem",whiteSpace:"pre-wrap"},children:(c=this.state.error)==null?void 0:c.toString()})]}),m.jsx("button",{onClick:()=>this.setState({hasError:!1,error:null}),style:{marginTop:"1rem",padding:"0.5rem 1rem",backgroundColor:"#1b1b1b",color:"#dbd9c3",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Intentar de nuevo"})]}):this.props.children}}const B0=j.lazy(()=>Fn(()=>import("./LiveEditorDesktop-ETN1smVL.js"),__vite__mapDeps([0,1,2]))),L0=j.lazy(()=>Fn(()=>import("./LiveEditorMobile-DioNCsx_.js"),__vite__mapDeps([3,1,2]))),k0=({project:r})=>{const c=Na(),[o,u]=j.useState(!1),[d,f]=j.useState(!1);j.useEffect(()=>{typeof window!="undefined"&&typeof document!="undefined"&&!window.navigator.userAgent.includes("Chrome-Lighthouse")&&f(!0)},[]),j.useEffect(()=>{if(d){const x=setTimeout(()=>u(!0),200);return()=>clearTimeout(x)}},[d]);const y=()=>m.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"#666",minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--color-background)",border:"1px solid #ddd",borderRadius:"8px"},children:m.jsx("p",{children:"Loading Live Editor..."})});return!d||!o?m.jsx(y,{}):!r||!r.files?m.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"#666",minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--color-background)",border:"1px solid #ddd",borderRadius:"8px"},children:m.jsx("p",{children:"No hay demo disponible para este proyecto."})}):m.jsx(H0,{children:m.jsx(j.Suspense,{fallback:m.jsx(y,{}),children:c?m.jsx(L0,{project:r}):m.jsx(B0,{project:r})})})},Mp=({title:r,url:c})=>{const o=j.useRef(null);return j.useEffect(()=>{const u=d=>{console.log("Message from iframe:",d.data)};return window.addEventListener("message",u),()=>window.removeEventListener("message",u)},[]),m.jsxs("div",{className:"game-frame-container",role:"region","aria-label":`${r} game container`,itemScope:!0,itemType:"https://schema.org/VideoGame",children:[m.jsx("meta",{itemProp:"name",content:r}),m.jsx("meta",{itemProp:"gamePlatform",content:"Web Browser"}),m.jsx("iframe",{ref:o,src:c,title:`${r} - Game`,className:"game-frame",allow:"fullscreen",sandbox:"allow-scripts allow-same-origin allow-popups allow-pointer-lock allow-forms","aria-label":`${r} game content`,itemProp:"gameItem",loading:"eager"})]})};Mp.propTypes={title:vt.string.isRequired,url:vt.string.isRequired};const Dr=Ot.memo(function({src:c,poster:o,title:u="Video de Marc Basas"}){const d=j.useRef(null),f=j.useRef(null),[y,x]=j.useState(!1),[v,h]=j.useState(!1),[S,O]=j.useState(!1),[E,k]=j.useState(!1),_=j.useRef(null),[G,B]=j.useState(0),[q,Z]=j.useState(!1),V=Na(),J=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,Q=j.useCallback(()=>{f.current&&(f.current.paused?(f.current.play(),x(!0)):(f.current.pause(),x(!1)))},[]),ne=j.useCallback(()=>{h(J?!!document.webkitFullscreenElement:!!document.fullscreenElement)},[J]),fe=j.useCallback(()=>{f.current&&(J?f.current.webkitDisplayingFullscreen?f.current.webkitExitFullscreen():f.current.webkitEnterFullscreen():document.fullscreenElement?document.exitFullscreen():d.current.requestFullscreen().catch(I=>{console.warn("Error al intentar pantalla completa:",I)}))},[J]),be=()=>{O(!0),_.current&&clearTimeout(_.current)},Ae=()=>{_.current=setTimeout(()=>{O(!1)},1500)};j.useEffect(()=>{const I=z=>{var X;z.key==="Escape"&&(J&&((X=f.current)!=null&&X.webkitDisplayingFullscreen)?f.current.webkitExitFullscreen():document.fullscreenElement&&document.exitFullscreen())};return window.addEventListener("keydown",I),()=>{window.removeEventListener("keydown",I)}},[J]),j.useEffect(()=>{const I=f.current;if(!I)return;const z=()=>x(!0),X=()=>x(!1),F=()=>h(!0),de=()=>h(!1);return I.addEventListener("play",z),I.addEventListener("pause",X),J?(I.addEventListener("webkitbeginfullscreen",F),I.addEventListener("webkitendfullscreen",de),document.addEventListener("webkitfullscreenchange",ne)):document.addEventListener("fullscreenchange",ne),()=>{I.removeEventListener("play",z),I.removeEventListener("pause",X),J?(I.removeEventListener("webkitbeginfullscreen",F),I.removeEventListener("webkitendfullscreen",de),document.removeEventListener("webkitfullscreenchange",ne)):document.removeEventListener("fullscreenchange",ne)}},[ne,J]),j.useEffect(()=>()=>{_.current&&clearTimeout(_.current)},[]),j.useEffect(()=>{const I=f.current;if(!I)return;const z=()=>{q||B(I.currentTime/I.duration||0)};return I.addEventListener("timeupdate",z),I.addEventListener("loadedmetadata",z),()=>{I.removeEventListener("timeupdate",z),I.removeEventListener("loadedmetadata",z)}},[q]);const pe=I=>{const X=I.target.getBoundingClientRect(),F=I.touches?I.touches[0].clientX-X.left:I.clientX-X.left,de=Math.max(0,Math.min(1,F/X.width));f.current&&f.current.duration&&(f.current.currentTime=de*f.current.duration),B(de)},Me=I=>{Z(!0),pe(I),window.addEventListener("mousemove",ge),window.addEventListener("mouseup",ke),window.addEventListener("touchmove",ge),window.addEventListener("touchend",ke)},ge=I=>{pe(I)},ke=I=>{pe(I),Z(!1),window.removeEventListener("mousemove",ge),window.removeEventListener("mouseup",ke),window.removeEventListener("touchmove",ge),window.removeEventListener("touchend",ke)},Mt=()=>{k(!0)};return m.jsxs("section",{className:`video-player-container${v?" fullscreen":""}`,"aria-label":"Reproductor de video de Marc Basas",lang:"es",tabIndex:-1,role:"region",itemScope:!0,itemType:"https://schema.org/VideoObject",children:[m.jsx("meta",{itemProp:"author",content:"Marc Basas"}),m.jsxs("div",{className:"video-wrapper",ref:d,onMouseEnter:V?void 0:be,onMouseLeave:V?void 0:Ae,onTouchStart:V?be:void 0,onTouchEnd:V?Ae:void 0,children:[E?m.jsx("div",{className:"video-error-fallback",role:"alert",style:{color:"red",width:"100%",textAlign:"center",padding:"2rem"},children:"No se pudo cargar el video. Por favor, inténtalo más tarde."}):m.jsx("video",{ref:f,src:c,poster:o,className:"video-element",autoPlay:!0,muted:!0,playsInline:!0,controls:!1,title:u,"aria-label":u,tabIndex:0,itemProp:"contentUrl",onError:Mt}),!E&&m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"video-progress-bar",onClick:pe,onMouseDown:Me,style:{position:"absolute",left:0,right:0,bottom:0,height:"4px",cursor:"pointer",zIndex:10},role:"slider","aria-valuenow":G*100,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0,children:[m.jsx("div",{className:"video-progress-bar-inner",style:{width:`${G*100}%`,height:"100%",background:"var(--color-menu)",transition:q?"none":"width 0.35s cubic-bezier(0.4,0,0.2,1)"}}),m.jsx("div",{className:"video-progress-bar-bg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",background:"rgba(19,19,19,0.3)",pointerEvents:"none"}})]}),m.jsxs("nav",{className:`video-controls${v?" fullscreen":""}${S?" visible":""}`,"aria-label":"Controles de video",tabIndex:-1,children:[m.jsx("div",{className:"controls-left",children:m.jsx("button",{onClick:Q,className:"video-btn","aria-label":y?"Pausar video":"Reproducir video",title:y?"Pausar video":"Reproducir video",type:"button",tabIndex:0,role:"button",children:y?"[  PAUSE  ]":"[  PLAY  ]"})}),m.jsx("div",{className:"controls-right",children:m.jsx("button",{onClick:fe,className:"video-btn","aria-label":"Pantalla completa",title:"Pantalla completa",type:"button",tabIndex:0,role:"button",children:"[  FULLSCREEN  ]"})})]})]})]})]})});Dr.propTypes={src:vt.string.isRequired,poster:vt.string,title:vt.string};Dr.defaultProps={poster:"",title:"Video de Marc Basas"};const Dp=({previewImage:r})=>m.jsx(m.Fragment,{children:m.jsxs("div",{className:"project-notfound-container",children:[m.jsx("div",{className:"project-notfound-background",style:{backgroundImage:r?`url(${r})`:"none"}}),m.jsxs("div",{className:"project-notfound-content",children:[m.jsx("h1",{className:"project-notfound-title",children:"Proyecto en desarrollo."}),m.jsx("p",{className:"project-notfound-text",children:"El proyecto que buscas aún está en construcción."})]})]})});Dp.propTypes={previewImage:vt.string};const Cp=()=>m.jsxs(m.Fragment,{children:[m.jsx(Kl,{children:m.jsx("meta",{name:"robots",content:"noindex, nofollow"})}),m.jsxs("div",{className:"notfound-container",children:[m.jsx("h1",{className:"notfound-title",children:"Page not found"}),m.jsx("p",{className:"notfound-text",children:"Sorry, the page you are looking for does not exist or has been deleted."})]})]}),Rp=({style:r})=>m.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:r,"aria-hidden":"true",focusable:"false",children:[m.jsx("path",{d:"M10.5 2H14v3.5M6 10l7.5-7.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),m.jsx("rect",{x:"2",y:"6",width:"8",height:"8",rx:"2",stroke:"currentColor",strokeWidth:"1.5"})]}),Op=({url:r})=>m.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:["Visit the web ",m.jsx(Rp,{style:{marginLeft:4,verticalAlign:"middle"}})]});Op.propTypes={url:vt.string.isRequired};const zp=({git:r})=>m.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:["Here is the code in GitHub ",m.jsx(Rp,{style:{marginLeft:4,verticalAlign:"middle"}})]});zp.propTypes={git:vt.string.isRequired};const U0=()=>{var y,x,v;const{slug:r}=Zg(),{projects:c}=Or(),o=j.useMemo(()=>[...c.web,...c.games].find(O=>O.slug===r),[r,c]),u=j.useMemo(()=>o?Re(te({},o),{files:o.files?te({},o.files):void 0}):null,[o==null?void 0:o.id,o==null?void 0:o.title,(y=o==null?void 0:o.files)==null?void 0:y.html,(x=o==null?void 0:o.files)==null?void 0:x.css,(v=o==null?void 0:o.files)==null?void 0:v.js,o==null?void 0:o.slug,o==null?void 0:o.category]),d=Na();if(!o)return m.jsx(Cp,{});const f=o.slug==="constellations";return m.jsxs("div",{className:"project-page",role:"main","aria-label":`${o.title} - Project Details - Marc Basas Portfolio`,itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[m.jsxs(Kl,{children:[m.jsxs("title",{translate:"no",children:[o.title," | Marc Basas"]}),m.jsx("meta",{name:"description",content:o.description}),m.jsx("meta",{name:"keywords",content:o.keywords}),m.jsx("meta",{name:"author",content:"Marc Basas"}),m.jsx("meta",{property:"og:title",content:`${o.title} | Portfolio de Marc Basas`}),m.jsx("meta",{property:"og:description",content:o.description}),o.previewImage&&m.jsx("meta",{property:"og:image",content:o.previewImage}),m.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),m.jsx("meta",{name:"twitter:title",content:`${o.title} | Portfolio de Marc Basas`}),m.jsx("meta",{name:"twitter:description",content:o.description}),o.previewImage&&m.jsx("meta",{name:"twitter:image",content:o.previewImage}),m.jsx("link",{rel:"canonical",href:`https://www.marcbasas.com/project/${o.slug}/`})]}),m.jsxs("div",{className:"project-content",itemScope:!0,itemType:"https://schema.org/WebPage",children:[m.jsx("h1",{className:"project-title",itemProp:"name",translate:"no",children:o.titleMin}),m.jsx("p",{className:"project-description",itemProp:"description",children:o.description}),m.jsxs("div",{className:"project-dynamic-content",children:[o.finished===!1&&m.jsx(Dp,{previewImage:o.previewImage}),o.finished!==!1&&m.jsxs(m.Fragment,{children:[f&&d&&o.video&&m.jsx(Dr,{src:o.video,poster:o.poster||o.previewImage}),!f&&o.video&&m.jsx(Dr,{src:o.video,poster:o.poster||o.previewImage}),o.category==="demo"&&o.files&&m.jsx(k0,{project:u}),(f&&!d||!f&&o.url&&o.slug&&o.category!=="demo"&&o.category!=="final")&&m.jsx(Mp,{title:o.title,url:o.url}),m.jsxs("div",{className:"project-links-row",children:[o.git&&o.category===void 0&&m.jsx(zp,{git:o.git}),o.category==="final"&&o.url&&m.jsx(Op,{url:o.url})]})]})]})]})]})},q0=Ot.memo(U0),G0=()=>{const r=Na();return m.jsxs(m.Fragment,{children:[m.jsxs(Kl,{children:[m.jsx("title",{children:"About | Marc Basas - Web Developer & Game Developer Barcelona"}),m.jsx("meta",{name:"description",content:"Conoce a Marc Basas, programador web autónomo en Barcelona especializado en desarrollo frontend y fullstack. Experiencia en servicios de programación web para empresas, desarrollo de aplicaciones a medida y soluciones digitales. Freelancer con formación en desarrollo web y videojuegos."}),m.jsx("meta",{name:"keywords",content:"programador autonomo barcelona, programador web autonomo, Marc Basas, freelancer barcelona, desarrollador independiente barcelona, servicios programacion web barcelona, experiencia programador web, formacion desarrollo web, programador frontend barcelona, programador fullstack barcelona"}),m.jsx("meta",{name:"author",content:"Marc Basas"}),m.jsx("meta",{property:"og:title",content:"About | Marc Basas - Web Developer & Game Developer Barcelona"}),m.jsx("meta",{property:"og:description",content:"Conoce la experiencia y formación de Marc Basas, programador web autónomo en Barcelona. Especializado en desarrollo frontend y fullstack, con servicios de programación para empresas."}),m.jsx("meta",{property:"og:type",content:"website"}),m.jsx("meta",{property:"og:url",content:"https://www.marcbasas.com/about"}),m.jsx("meta",{property:"og:site_name",content:"Marc Basas - Programador Web Autónomo Barcelona"}),m.jsx("meta",{property:"og:locale",content:"es_ES"}),m.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),m.jsx("meta",{name:"twitter:title",content:"About | Marc Basas - Web Developer & Game Developer Barcelona"}),m.jsx("meta",{name:"twitter:description",content:"Programador web autónomo en Barcelona con experiencia en desarrollo frontend y fullstack. Servicios de programación web para empresas y proyectos personalizados."}),m.jsx("meta",{name:"twitter:url",content:"https://www.marcbasas.com/about"}),m.jsx("link",{rel:"canonical",href:"https://www.marcbasas.com/about/"})]}),m.jsxs("main",{className:`about-page${r?" about-page--mobile":""}`,role:"main","aria-label":"About Marc Basas - Professional Background and Experience - Web Developer Portfolio",itemScope:!0,itemType:"https://schema.org/AboutPage",children:[m.jsxs("div",{className:"about-content",itemScope:!0,itemType:"https://schema.org/Person",children:[m.jsxs("section",{className:"about-section1","aria-labelledby":"about-title",itemProp:"description",children:[m.jsx("h2",{id:"about-title",itemProp:"name",children:"About"}),m.jsx("p",{children:"I'm a freelance web developer based in Barcelona, specializing in frontend and fullstack development. I create functional websites using fundamental technologies like HTML, CSS, and JavaScript, along with modern tools like React, Angular, or Vue when they add value and efficiency to the project."}),m.jsx("p",{children:"As a freelance developer, I focus on providing practical solutions that help businesses and creatives materialize their projects."}),m.jsx("p",{children:"In my free time, I develop small games with Unity, Pygame, or pure JavaScript for fun."}),m.jsx("p",{children:"I also worked for two years at a consulting company. The first year I developed backend systems in Java, and the second year I worked on web applications with React and Node.js from Figma designs. This experience solidified me as a web developer before becoming a freelancer."})]}),m.jsxs("section",{className:"about-section2","aria-labelledby":"experience-title",itemProp:"knowsAbout",children:[m.jsx("h2",{id:"experience-title",itemProp:"jobTitle",children:"Education and Experience"}),m.jsx("p",{children:"2024–2025, Currently working as a freelance web developer in Barcelona."}),m.jsxs("p",{children:["2023-2024, NTTDATA",m.jsx("br",{}),"Frontend Developer. ",m.jsx("br",{}),"Developed web applications using React, JavaScript/TypeScript. Collaborated with design and backend teams to ensure seamless UX/UI."]}),m.jsxs("p",{children:["2022-2023, NTTDATA",m.jsx("br",{}),"Backend Developer. ",m.jsx("br",{}),"Built microservices with Spring Boot, Apache Kafka, and MongoDB. Automated CI/CD pipelines with Jenkins for deployment."]}),m.jsxs("p",{children:["2023–Present, Universitat Oberta de Catalunya",m.jsx("br",{}),"Master's Degree in Design and Programming of Video Games."]}),m.jsxs("p",{children:["2015 - 2019, Universitat de Vic",m.jsx("br",{}),"Bachelor’s Degree in Multimedia, Applications and Video Games."]})]})]}),m.jsx("div",{className:"about-image-container",children:m.jsx("img",{src:"/img/About_img.webp",alt:"",className:"about-image",itemProp:"image"})})]}),m.jsx(Ap,{})]})},Y0=r=>ye(void 0,null,function*(){try{const c=localStorage.getItem("adminToken"),o=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/save-projects",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({projects:r})});if(!o.ok)throw new Error("Error al guardar los proyectos");return yield o.json()}catch(c){throw console.error("Error:",c),c}}),V0=r=>ye(void 0,null,function*(){try{const c=localStorage.getItem("adminToken"),o=new FormData;o.append("image",r);const u=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/upload-image",{method:"POST",headers:{Authorization:`Bearer ${c}`},body:o});if(!u.ok){const d=yield u.json();throw new Error(d.error||"Error al subir la imagen")}return yield u.json()}catch(c){throw console.error("Error uploading image:",c),c}}),X0=r=>ye(void 0,null,function*(){try{const c=localStorage.getItem("adminToken"),o=new FormData;o.append("video",r);const u=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/upload-video",{method:"POST",headers:{Authorization:`Bearer ${c}`},body:o});if(!u.ok){const d=yield u.json();throw new Error(d.error||"Error al subir el video")}return yield u.json()}catch(c){throw console.error("Error uploading video:",c),c}}),Q0=(r,c)=>ye(void 0,null,function*(){try{const o=localStorage.getItem("adminToken"),u=new FormData;u.append("demoFile",r),u.append("slug",c);const d=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/upload-demo",{method:"POST",headers:{Authorization:`Bearer ${o}`},body:u});if(!d.ok){const f=yield d.json();throw new Error(f.error||"Error al subir el archivo demo")}return yield d.json()}catch(o){throw console.error("Error uploading demo:",o),o.message&&o.message.includes("demo:")?new Error(`Error en l'arxiu demo: ${o.message}`):o}}),Z0=()=>ye(void 0,null,function*(){try{const r=localStorage.getItem("adminToken"),c=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/backups",{method:"GET",headers:{Authorization:`Bearer ${r}`}});if(!c.ok)throw new Error("Error al cargar los backups");return yield c.json()}catch(r){throw console.error("Error:",r),r}}),K0=r=>ye(void 0,null,function*(){try{const c=localStorage.getItem("adminToken"),o=yield fetch(`https://portfolio-admin-server-76sn.onrender.com/api/admin/backups/${r}/restore`,{method:"POST",headers:{Authorization:`Bearer ${c}`,"Content-Type":"application/json"}});if(!o.ok){const u=yield o.json();throw new Error(u.error||"Error al restaurar el backup")}return yield o.json()}catch(c){throw console.error("Error:",c),c}}),P0=({onLogin:r})=>{const[c,o]=j.useState(""),[u,d]=j.useState(!1),[f,y]=j.useState(""),x=v=>ye(void 0,null,function*(){v.preventDefault(),d(!0),y("");try{const h=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:c})}),S=yield h.json();h.ok?(localStorage.setItem("adminToken",S.token),localStorage.setItem("adminTokenExpiry",Date.now()+S.expiresIn),r(S.token)):y(S.error||"PIN incorrecto")}catch(h){y("Error de conexión. Verifica que el servidor esté funcionando.")}finally{d(!1)}});return m.jsx("div",{className:"admin-login",children:m.jsxs("div",{className:"admin-login__container",children:[m.jsx("h1",{className:"admin-login__title",children:"PANELL D'ADMINISTRACIÓ"}),m.jsxs("form",{onSubmit:x,className:"admin-login__form",children:[m.jsx("div",{className:"admin-login__input-group",children:m.jsx("input",{type:"password",value:c,onChange:v=>o(v.target.value),placeholder:"PIN d'accés",className:"admin-login__input",required:!0,autoFocus:!0})}),f&&m.jsx("div",{className:"admin-login__error",children:f}),m.jsx("button",{type:"submit",className:"admin-login__button",disabled:u,children:u?"Verificant...":"ACCEDIR"})]})]})})},J0=()=>{const[r,c]=j.useState(!1),[o,u]=j.useState(null),{projects:d,refreshAfterAdminChange:f}=Or(),[y,x]=j.useState(d),[v,h]=j.useState(!1),[S,O]=j.useState(null),[E,k]=j.useState({type:"web",category:"final",title:"",titleMin:"",slug:"",finished:!0,description:"",previewImage:"",video:"",poster:"",url:"",git:"",keywords:"",files:""}),[_,G]=j.useState({previewImage:!1,video:!1,poster:!1,demo:!1}),[B,q]=j.useState(!1),[Z,V]=j.useState([]),[J,Q]=j.useState(!1);j.useEffect(()=>{ye(void 0,null,function*(){const R=localStorage.getItem("adminToken"),U=localStorage.getItem("adminTokenExpiry");if(R&&U&&Date.now()<parseInt(U))try{(yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/auth/validate",{method:"POST",headers:{Authorization:`Bearer ${R}`,"Content-Type":"application/json"}})).ok?(u(R),c(!0),fe()):(localStorage.removeItem("adminToken"),localStorage.removeItem("adminTokenExpiry"))}catch(Y){console.error("Error verificando token:",Y),localStorage.removeItem("adminToken"),localStorage.removeItem("adminTokenExpiry")}})},[]),j.useEffect(()=>{x(d)},[d]);const ne=g=>ye(void 0,null,function*(){u(g),c(!0),yield fe()}),fe=()=>ye(void 0,null,function*(){try{yield f(),console.log("PROYECTOS REFRESCADOS DESDE CONTEXTO EN ADMIN")}catch(g){console.error("Error refrescando proyectos:",g)}}),be=()=>{localStorage.removeItem("adminToken"),localStorage.removeItem("adminTokenExpiry"),u(null),c(!1)},Ae=()=>{k({type:"web",category:"final",title:"",titleMin:"",slug:"",finished:!0,description:"",previewImage:"",video:"",poster:"",url:"",git:"",keywords:"",files:""}),G({previewImage:!1,video:!1,poster:!1,demo:!1}),O(null),h(!1)},pe=g=>{const{name:R,value:U,type:Y,checked:K}=g.target;k(re=>{const $=Re(te({},re),{[R]:Y==="checkbox"?K:U});return R==="type"&&(U==="web"?($.category="final",$.git=""):U==="games"&&($.category="games",$.files="")),R==="finished"&&!K&&($.video="",$.poster="",$.url="",$.git="",$.files=""),$})},Me=g=>g.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),ge=g=>{const R=[...y.web,...y.games];return Math.max(...R.map(Y=>Y.id),0)+1},ke=(g,R)=>ye(void 0,null,function*(){G(U=>Re(te({},U),{[R]:!0}));try{let U;switch(R){case"previewImage":case"poster":U=yield V0(g);break;case"video":U=yield X0(g);break;case"demo":U=yield Q0(g,E.slug||Me(E.title));const Y=U.exportName||`${E.slug||Me(E.title)}Demo`;k(K=>Re(te({},K),{files:Y}));break;default:throw new Error("Tipo de archivo no válido")}k(Y=>Re(te({},Y),{[R]:U.path})),alert(`${U.message}`)}catch(U){alert(`Error en pujar arxiu: ${U.message}`)}finally{G(U=>Re(te({},U),{[R]:!1}))}}),Mt=g=>ye(void 0,null,function*(){if(g.preventDefault(),E.finished){if(E.type==="web"&&E.category==="final"){if(!E.video||!E.poster||!E.url){alert("Els projectes web finals han de tenir vídeo, poster i URL");return}}else if(E.type==="web"&&E.category==="demo"){if(!E.files){alert("Els projectes web demo han de tenir un arxiu de demo");return}}else if(E.type==="games"&&(!E.video||!E.poster||!E.url||!E.git)){alert("Els jocs han de tenir vídeo, poster, URL i GitHub");return}}const R=Re(te({},E),{id:S?S.id:ge(E.type),slug:E.slug||Me(E.title)});E.finished?E.type==="web"?E.category==="final"?(delete R.files,delete R.git):E.category==="demo"&&(delete R.git,delete R.url,delete R.video,delete R.poster):E.type==="games"&&(delete R.files,R.category="games"):(delete R.video,delete R.poster,delete R.url,delete R.git,delete R.files),delete R.type;try{const U=te({},y);if(S){const Y=U[S.type],K=Y.findIndex(re=>re.id===S.id);K!==-1&&(Y[K]=R)}else U[E.type]=[...U[E.type],R];yield Y0(U),x(U),f(),Ae(),alert(S?"Projecte actualitzat correctament":"Projecte afegit correctament")}catch(U){alert("Error en desar el projecte: "+U.message)}}),I=(g,R)=>{O(Re(te({},g),{type:R}));let U="final";R==="web"&&g.files?U="demo":R==="games"&&(U="games"),k(Re(te({},g),{type:R,category:U,video:g.video||"",poster:g.poster||"",url:g.url||"",git:g.git||"",files:g.files||""})),h(!0)},z=(g,R)=>ye(void 0,null,function*(){var U;if(window.confirm("Estàs segur que vols eliminar aquest projecte?"))try{const Y=y[R].find(Ee=>Ee.id===g),K=te({},y);K[R]=K[R].filter(Ee=>Ee.id!==g),x(K);const re=yield fetch("https://portfolio-admin-server-76sn.onrender.com/api/admin/save-projects",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("adminToken")}`},body:JSON.stringify({projects:K,deletedProject:Y})});if(!re.ok)throw new Error("Error al eliminar el proyecto");const $=yield re.json();f();let $e="Projecte eliminat correctament";(U=$.backup)!=null&&U.created&&($e+=`
Backup creat: ${$.backup.backupId}`),alert($e)}catch(Y){alert("Error en eliminar el projecte: "+Y.message)}}),X=()=>ye(void 0,null,function*(){Q(!0);try{const g=yield Z0();V(g.backups||[])}catch(g){alert("Error carregant backups: "+g.message)}finally{Q(!1)}}),F=()=>ye(void 0,null,function*(){q(!0),yield X()}),de=(g,R)=>ye(void 0,null,function*(){if(window.confirm(`Estàs segur que vols restaurar el projecte "${R}"?`))try{const U=yield K0(g);yield f(),alert(`Projecte "${R}" restaurat correctament`),q(!1)}catch(U){alert("Error restaurant el backup: "+U.message)}});return r?m.jsxs(m.Fragment,{children:[m.jsxs(Kl,{children:[m.jsx("title",{children:"Panell d'Administració - Portfolio"}),m.jsx("meta",{name:"robots",content:"noindex, nofollow"}),m.jsx("style",{children:`
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
        `})]}),m.jsxs("div",{className:"admin-page",children:[m.jsxs("div",{className:"admin-header",children:[m.jsx("a",{href:"/",className:"btn-back-portfolio",children:"← TORNAR AL PORTFOLIO"}),m.jsx("h1",{children:"PANELL D'ADMINISTRACIÓ"}),m.jsxs("div",{className:"admin-header-actions",children:[m.jsx("button",{className:"btn-backup-history",onClick:F,title:"Veure historial de backups",children:"HISTORIAL"}),m.jsx("button",{className:"btn-logout",onClick:be,title:"Cerrar sesión",children:"SORTIR"})]})]}),v&&m.jsx("div",{className:"modal-overlay",children:m.jsxs("div",{className:"project-form-modal",children:[m.jsxs("div",{className:"modal-header",children:[m.jsx("h2",{children:S?"EDITAR PROJECTE":"AFEGIR NOU PROJECTE"}),m.jsx("button",{className:"btn-close",onClick:Ae,children:"×"})]}),m.jsxs("form",{onSubmit:Mt,className:"project-form",children:[m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Tipus:"}),m.jsxs("select",{name:"type",value:E.type,onChange:pe,required:!0,children:[m.jsx("option",{value:"web",children:"Web"}),m.jsx("option",{value:"games",children:"Jocs"})]})]}),E.type==="web"&&m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Categoria:"}),m.jsxs("select",{name:"category",value:E.category,onChange:pe,required:!0,children:[m.jsx("option",{value:"final",children:"Final"}),m.jsx("option",{value:"demo",children:"Demo"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Títol:"}),m.jsx("input",{type:"text",name:"title",value:E.title,onChange:pe,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Títol Curt:"}),m.jsx("input",{type:"text",name:"titleMin",value:E.titleMin,onChange:pe,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Slug (URL):"}),m.jsx("input",{type:"text",name:"slug",value:E.slug,onChange:pe,placeholder:"Es genera automàticament del títol"})]}),m.jsx("div",{className:"form-group",children:m.jsxs("label",{children:[m.jsx("input",{type:"checkbox",name:"finished",checked:E.finished,onChange:pe}),"Projecte acabat"]})}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Descripció:"}),m.jsx("textarea",{name:"description",value:E.description,onChange:pe,rows:"4",required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Imatge de previsualització:"}),m.jsx("input",{type:"text",name:"previewImage",value:E.previewImage,onChange:pe,placeholder:"ex: img/LandingPreview_ElMeuProjecte.webp",required:!0}),m.jsxs("div",{className:"file-upload-simple",children:[m.jsxs("label",{className:"file-button",children:["Seleccionar arxiu",m.jsx("input",{type:"file",accept:"image/*",onChange:g=>g.target.files[0]&&ke(g.target.files[0],"previewImage"),className:"file-input-hidden",disabled:_.previewImage})]}),m.jsx("span",{className:`file-status ${_.previewImage?"uploading":""}`,children:_.previewImage?"Pujant...":"Cap arxiu seleccionat"})]})]}),E.finished&&m.jsxs(m.Fragment,{children:[(E.type==="games"||E.type==="web"&&E.category==="final")&&m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{children:["Vídeo ",E.type==="games"||E.type==="web"&&E.category==="final"?"*":"(opcional)",":"]}),m.jsx("input",{type:"text",name:"video",value:E.video,onChange:pe,placeholder:"ex: vids/ElMeuProjecte.webm",required:E.type==="games"||E.type==="web"&&E.category==="final"}),m.jsxs("div",{className:"file-upload-simple",children:[m.jsxs("label",{className:"file-button",children:["Seleccionar arxiu",m.jsx("input",{type:"file",accept:"video/*",onChange:g=>g.target.files[0]&&ke(g.target.files[0],"video"),className:"file-input-hidden",disabled:_.video})]}),m.jsx("span",{className:`file-status ${_.video?"uploading":""}`,children:_.video?"Pujant...":"Cap arxiu seleccionat"})]})]}),(E.type==="games"||E.type==="web"&&E.category==="final")&&m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Poster del vídeo *:"}),m.jsx("input",{type:"text",name:"poster",value:E.poster,onChange:pe,placeholder:"ex: vids/PosterElMeuProjecte.webp",required:!0}),m.jsxs("div",{className:"file-upload-simple",children:[m.jsxs("label",{className:"file-button",children:["Seleccionar arxiu",m.jsx("input",{type:"file",accept:"image/*",onChange:g=>g.target.files[0]&&ke(g.target.files[0],"poster"),className:"file-input-hidden",disabled:_.poster})]}),m.jsx("span",{className:`file-status ${_.poster?"uploading":""}`,children:_.poster?"Pujant...":"Cap arxiu seleccionat"})]})]}),(E.type==="games"||E.type==="web"&&E.category==="final")&&m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"URL del projecte *:"}),m.jsx("input",{type:"url",name:"url",value:E.url,onChange:pe,placeholder:"https://elmeuprojecte.com",required:!0})]}),E.type==="games"&&m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"URL de GitHub *:"}),m.jsx("input",{type:"url",name:"git",value:E.git,onChange:pe,placeholder:"https://github.com/usuari/projecte",required:!0})]}),E.type==="web"&&E.category==="demo"&&m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Arxiu demo (.js) *:"}),m.jsxs("div",{className:"file-upload-simple",children:[m.jsxs("label",{className:"file-button",children:["Seleccionar arxiu",m.jsx("input",{type:"file",accept:".js",onChange:g=>g.target.files[0]&&ke(g.target.files[0],"demo"),className:"file-input-hidden",disabled:_.demo})]}),m.jsx("span",{className:`file-status ${_.demo?"uploading":""}`,children:_.demo?"Pujant arxiu demo...":"Cap arxiu seleccionat"})]}),E.files&&m.jsxs("div",{style:{marginTop:"0.5rem",padding:"0.5rem",backgroundColor:"#e8f5e8",borderRadius:"4px",fontSize:"0.9rem"},children:[m.jsx("strong",{children:"Referència del demo:"})," ",E.files]}),m.jsx("small",{style:{display:"block",marginTop:"0.5rem",color:"#1b1b1b",fontSize:"0.8rem",opacity:"0.7"},children:`L'arxiu ha d'exportar: export const elMeuDemo = { html: "...", css: "...", js: "..." }`})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Paraules clau (separades per comes):"}),m.jsx("textarea",{name:"keywords",value:E.keywords,onChange:pe,rows:"2",placeholder:"React, JavaScript, Desenvolupament Web, Portfolio"})]}),m.jsxs("div",{className:"form-actions",children:[m.jsx("button",{type:"button",onClick:Ae,className:"btn-cancel",children:"Cancel·lar"}),m.jsxs("button",{type:"submit",className:"btn-save",children:[S?"Actualitzar":"Desar"," Projecte"]})]})]})]})}),m.jsxs("div",{className:"projects-section",children:[m.jsx("h2",{children:"Projectes Web"}),m.jsx("div",{className:"projects-list",children:y.web.map(g=>m.jsxs("div",{className:"project-item",children:[m.jsxs("div",{className:"project-info",children:[m.jsx("h3",{children:g.title}),m.jsx("p",{children:g.titleMin}),m.jsx("span",{className:`status ${g.finished?"finished":"in-progress"}`,children:g.finished?"Acabat":"En desenvolupament"})]}),m.jsxs("div",{className:"project-actions",children:[m.jsx("button",{onClick:()=>I(g,"web"),className:"btn-edit",children:"Editar"}),m.jsx("button",{onClick:()=>z(g.id,"web"),className:"btn-delete",children:"Eliminar"})]})]},g.id))})]}),m.jsxs("div",{className:"projects-section",children:[m.jsx("h2",{children:"Jocs"}),m.jsx("div",{className:"projects-list",children:y.games.map(g=>m.jsxs("div",{className:"project-item",children:[m.jsxs("div",{className:"project-info",children:[m.jsx("h3",{children:g.title}),m.jsx("p",{children:g.titleMin}),m.jsx("span",{className:`status ${g.finished?"finished":"in-progress"}`,children:g.finished?"Acabat":"En desenvolupament"})]}),m.jsxs("div",{className:"project-actions",children:[m.jsx("button",{onClick:()=>I(g,"games"),className:"btn-edit",children:"Editar"}),m.jsx("button",{onClick:()=>z(g.id,"games"),className:"btn-delete",children:"Eliminar"})]})]},g.id))})]}),B&&m.jsx("div",{className:"modal-overlay",children:m.jsxs("div",{className:"backup-modal",children:[m.jsxs("div",{className:"modal-header",children:[m.jsx("h2",{children:"HISTORIAL DE BACKUPS"}),m.jsx("button",{className:"btn-close",onClick:()=>q(!1),children:"×"})]}),m.jsx("div",{className:"backup-modal-content",children:J?m.jsx("div",{className:"loading-backups",children:m.jsx("p",{children:"Carregant backups..."})}):Z.length===0?m.jsx("div",{className:"no-backups",children:m.jsx("p",{children:"No hi ha backups disponibles"})}):m.jsx("div",{className:"backups-list",children:Z.map(g=>m.jsxs("div",{className:"backup-item",children:[m.jsxs("div",{className:"backup-column-1",children:[m.jsx("div",{className:"backup-title",children:g.project.title}),m.jsx("div",{className:"backup-date",children:new Date(g.timestamp).toLocaleString("ca-ES")})]}),m.jsxs("div",{className:"backup-column-2",children:[m.jsx("div",{className:`backup-operation operation-${g.operation}`,children:g.operation==="delete"?"Eliminació":g.operation==="manual"?"Manual":"Actualització"}),m.jsx("div",{className:`backup-files ${g.hasFiles?"has-files":"no-files"}`,children:g.hasFiles?"Amb arxius":"Només metadades"})]}),m.jsx("div",{className:"backup-column-3",children:m.jsx("button",{onClick:()=>de(g.id,g.project.title),className:"btn-restore-only",title:"Restaurar aquest projecte",children:"RESTAURAR"})})]},g.id))})}),m.jsx("div",{className:"backup-modal-footer",children:m.jsxs("p",{className:"backup-info-text",children:["Els backups es creen automàticament quan elimines projectes. Es mantenen ",Z.length>0?`${Math.min(10,Z.length)}`:"10"," backups màxim."]})})]})}),m.jsx("button",{className:"btn-floating-add",onClick:()=>h(!0),title:"Afegir nou projecte",children:"+"})]})]}):m.jsx(P0,{onLogin:ne})};mg.createRoot(document.getElementById("root")).render(m.jsx(xp,{children:m.jsx(j0,{children:m.jsxs(Oy,{children:[m.jsx(T0,{}),m.jsxs(cy,{children:[m.jsx(Ia,{path:"/Admin1997",element:m.jsx(J0,{})}),m.jsxs(Ia,{element:m.jsx(C0,{}),children:[m.jsx(Ia,{path:"/",element:m.jsx(N0,{})}),m.jsx(Ia,{path:"/project/:slug",element:m.jsx(q0,{})}),m.jsx(Ia,{path:"/about",element:m.jsx(G0,{})}),m.jsx(Ia,{path:"*",element:m.jsx(Cp,{})})]})]})]})})}));export{m as j,j as r};
