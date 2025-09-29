import{r,j as t}from"./index-B-17EECh.js";import{b}from"./LiveEditor-DCGn3OrN.js";b.theme({"&":{background:"var(--color-background)",color:"var(--color-text)"},"&.cm-focused .cm-cursor":{borderLeftColor:"var(--color-text)"},"&.cm-focused .cm-selectionBackground, ::selection":{backgroundColor:"var(--color-menu)"},".cm-line":{padding:"2px"},".cm-gutters":{backgroundColor:"var(--color-background)",color:"var(--color-text)",borderRight:"1px solid var(--color-text)"},".cm-activeLineGutter":{backgroundColor:"var(--color-menu) !important",margin:"0",padding:"0"},".cm-activeLine":{backgroundColor:"var(--color-menu) !important"},".cm-content":{padding:"0",margin:"0"}});const h=({activeTab:e,setActiveTab:a})=>t.jsx("div",{className:"editor-top-bar",children:t.jsx("div",{className:"tabs",style:{width:"100%"},children:t.jsx("button",{onClick:()=>a("project"),className:`tab-button ${e==="project"?"active":""}`,style:{width:"100%"},children:"PROJECT"},"project")})}),g=({project:e})=>{const a=r.useRef(),[i,s]=r.useState("project"),[n,l]=r.useState(0),d=()=>{const c=a.current;if(!(!c||!(e!=null&&e.files)))try{c.src="about:blank",setTimeout(()=>{const o=c.contentDocument;if(!o)return;const m=e.files.html||"",u=e.files.css||"",v=e.files.js||"",f=`
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
              ${m}
              <script>${v}<\/script>
            </body>
          </html>
        `;o.open(),o.write(f),o.close()},10)}catch(o){console.warn("LiveEditorMobile: Error updating iframe:",o)}};return r.useEffect(()=>{s("project")},[e]),r.useEffect(()=>{i==="project"&&l(c=>c+1)},[i]),r.useEffect(()=>{i==="project"&&d()},[i,n]),t.jsxs("div",{className:"live-editor-container",children:[t.jsx(h,{activeTab:i,setActiveTab:s}),t.jsx("div",{className:"editor-wrapper",children:t.jsx("div",{className:"preview-column",style:{width:"100%"},children:t.jsx("div",{className:"preview-container",children:t.jsx("iframe",{ref:a,className:"preview-frame mobile-view",title:"Vista previa",style:{pointerEvents:"auto"}},n)})})})]})};export{g as default};
