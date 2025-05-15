import{r as a,j as s}from"./index-DQrp5nUo.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,n)=>n?n.toUpperCase():e.toLowerCase()),f=r=>{const t=v(r);return t.charAt(0).toUpperCase()+t.slice(1)},h=(...r)=>r.filter((t,e,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===e).join(" ").trim(),k=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=a.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:e=2,absoluteStrokeWidth:n,className:o="",children:l,iconNode:d,...u},p)=>a.createElement("svg",{ref:p,...w,width:t,height:t,stroke:r,strokeWidth:n?Number(e)*24/Number(t):e,className:h("lucide",o),...!l&&!k(u)&&{"aria-hidden":"true"},...u},[...d.map(([x,c])=>a.createElement(x,c)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(r,t)=>{const e=a.forwardRef(({className:n,...o},l)=>a.createElement(j,{ref:l,iconNode:t,className:h(`lucide-${g(f(r))}`,`lucide-${r}`,n),...o}));return e.displayName=f(r),e};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],C=m("maximize-2",b);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],E=m("pause",P);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],L=m("play",N);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],_=m("volume-2",A);function z({src:r,poster:t}){const e=a.useRef(null),[n,o]=a.useState(!1),[l,d]=a.useState(1),u=()=>{e.current&&(e.current.paused?(e.current.play(),o(!0)):(e.current.pause(),o(!1)))},p=c=>{const i=parseFloat(c.target.value);e.current&&(e.current.volume=i),d(i)},x=()=>{e.current&&(document.fullscreenElement?document.exitFullscreen():e.current.requestFullscreen())};return a.useEffect(()=>{const c=e.current,i=()=>o(!0),y=()=>o(!1);return c.addEventListener("play",i),c.addEventListener("pause",y),()=>{c.removeEventListener("play",i),c.removeEventListener("pause",y)}},[]),s.jsx("div",{className:"w-full max-w-3xl mx-auto",children:s.jsxs("div",{className:"relative bg-black",children:[s.jsx("video",{ref:e,src:r,poster:t,className:"w-full h-auto"}),s.jsxs("div",{className:"absolute bottom-2 left-2 right-2 bg-gray-800 bg-opacity-75 p-2 rounded flex items-center justify-between",children:[s.jsx("button",{onClick:u,"aria-label":n?"Pause":"Play",children:n?s.jsx(E,{}):s.jsx(L,{})}),s.jsxs("div",{className:"flex items-center flex-1 mx-4",children:[s.jsx(_,{}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:l,onChange:p,className:"mx-2 flex-1"})]}),s.jsx("button",{onClick:x,"aria-label":"Fullscreen",children:s.jsx(C,{})})]})]})})}export{z as default};
