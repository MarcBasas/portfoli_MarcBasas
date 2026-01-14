import{r,j as t}from"./index-NXrceavQ.js";import{b as h}from"./LiveEditor-DCGn3OrN.js";h.theme({"&":{background:"var(--color-background)",color:"var(--color-text)"},"&.cm-focused .cm-cursor":{borderLeftColor:"var(--color-text)"},"&.cm-focused .cm-selectionBackground, ::selection":{backgroundColor:"var(--color-menu)"},".cm-line":{padding:"2px"},".cm-gutters":{backgroundColor:"var(--color-background)",color:"var(--color-text)",borderRight:"1px solid var(--color-text)"},".cm-activeLineGutter":{backgroundColor:"var(--color-menu) !important",margin:"0",padding:"0"},".cm-activeLine":{backgroundColor:"var(--color-menu) !important"},".cm-content":{padding:"0",margin:"0"}});const p=({activeTab:e,setActiveTab:c})=>t.jsx("div",{className:"editor-top-bar",children:t.jsx("div",{className:"tabs",style:{width:"100%"},children:t.jsx("button",{onClick:()=>c("project"),className:`tab-button ${e==="project"?"active":""}`,style:{width:"100%"},children:"PROJECT"},"project")})}),w=({project:e})=>{const c=r.useRef(),[o,s]=r.useState("project"),[n,d]=r.useState(0),m=()=>{const i=c.current;if(!(!i||!(e!=null&&e.files)))try{const a=e.files.html||"",u=e.files.css||"",v=e.files.js||"",b=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { width: 100%; max-width: 100%; overflow-x: hidden; }
img { max-width: 100%; height: auto; }
${u}
</style>
</head>
<body>
${a}
<script>${v}<\/script>
</body>
</html>`,f=new Blob(["\uFEFF",b],{type:"text/html;charset=utf-8"}),l=URL.createObjectURL(f);i.src=l,i.onload=()=>{URL.revokeObjectURL(l)}}catch(a){console.warn("LiveEditorMobile: Error updating iframe:",a)}};return r.useEffect(()=>{s("project")},[e]),r.useEffect(()=>{o==="project"&&d(i=>i+1)},[o]),r.useEffect(()=>{o==="project"&&m()},[o,n]),t.jsxs("div",{className:"live-editor-container",children:[t.jsx(p,{activeTab:o,setActiveTab:s}),t.jsx("div",{className:"editor-wrapper",children:t.jsx("div",{className:"preview-column",style:{width:"100%"},children:t.jsx("div",{className:"preview-container",children:t.jsx("iframe",{ref:c,className:"preview-frame mobile-view",title:"Vista previa",style:{pointerEvents:"auto"}},n)})})})]})};export{w as default};
