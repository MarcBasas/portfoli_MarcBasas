import { useEffect, useRef, useState, useCallback } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import "./LiveEditor.css";

const EDITOR_TABS = ["html", "css", "js"];

const baseTheme = EditorView.theme({
  "&": { background: "var(--color-background)", color: "var(--color-text)" },
  "&.cm-focused .cm-cursor": { borderLeftColor: "var(--color-text)" },
  "&.cm-focused .cm-selectionBackground, ::selection": { backgroundColor: "var(--color-menu)" },
  ".cm-line": { padding: "2px" },
  ".cm-gutters": { backgroundColor: "var(--color-background)", color: "var(--color-text)", borderRight: "1px solid var(--color-text)" },
  ".cm-activeLineGutter": { backgroundColor: "var(--color-menu) !important", margin: "0", padding: "0" },
  ".cm-activeLine": { backgroundColor: "var(--color-menu) !important" },
  ".cm-content": { padding: "0", margin: "0" }
});

const EditorTopBar = ({ activeTab, setActiveTab, onOpenInNewTab, viewMode, setViewMode }) => (
  <div className="editor-top-bar">
    <div className="tabs">
      {EDITOR_TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`tab-button ${activeTab === tab ? "active" : ""}`}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
    <div className="editor-controls">
      <div className="view-buttons">
        <button
          className={`view-button ${viewMode === 'desktop' ? 'active' : ''}`}
          onClick={() => setViewMode('desktop')}
          title="Vista de escritorio"
        >
          <span className="material-icons">desktop_windows</span>
        </button>
        <button
          className={`view-button ${viewMode === 'mobile' ? 'active' : ''}`}
          onClick={() => setViewMode('mobile')}
          title="Vista móvil"
        >
          <span className="material-icons">phone_iphone</span>
        </button>
      </div>
      <button onClick={onOpenInNewTab} className="external-button">
        Abrir en nueva pestaña
      </button>
    </div>
  </div>
);

const LiveEditorDesktop = ({ project }) => {
  console.log('LiveEditorDesktop: Component rendering with project:', project?.title, 'ID:', project?.id);
  console.log('LiveEditorDesktop: Project files available:', {
    html: !!project?.files?.html,
    css: !!project?.files?.css,
    js: !!project?.files?.js
  });
  
  const iframeRef = useRef();
  const htmlRef = useRef();
  const cssRef = useRef();
  const jsRef = useRef();
  const initializedRef = useRef(false);
  const editorWrapperRef = useRef(null);

  const [activeTab, setActiveTab] = useState("html");
  const [columnWidth, setColumnWidth] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState('desktop');

  const updateIframe = () => {
    console.log('LiveEditorDesktop: updateIframe called');
    const iframe = iframeRef.current;
    if (!iframe) {
      console.warn('LiveEditor: iframe not available for update');
      return;
    }
    console.log('LiveEditorDesktop: iframe found, getting document');
    const doc = iframe.contentDocument;
    if (!doc) {
      console.warn('LiveEditor: iframe document not available');
      return;
    }
    console.log('LiveEditorDesktop: document found, extracting content from editors');
    const htmlContent = htmlRef.current?.state.doc.toString() || "";
    const cssContent = cssRef.current?.state.doc.toString() || "";
    const jsContent = jsRef.current?.state.doc.toString() || "";
    
    console.log('LiveEditorDesktop: Content lengths - HTML:', htmlContent.length, 'CSS:', cssContent.length, 'JS:', jsContent.length);
    
    const fullHtml = `
      <html>
        <head>
          <meta charset=\"UTF-8\">
          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { width: 100%; max-width: 100%; overflow-x: hidden; }
            img { max-width: 100%; height: auto; }
            ${cssContent}
          </style>
        </head>
        <body>
          ${htmlContent}
          <script>${jsContent}<\/script>
        </body>
      </html>
    `;
    console.log('LiveEditorDesktop: Writing HTML to iframe');
    doc.open();
    doc.write(fullHtml);
    doc.close();
    console.log('LiveEditorDesktop: iframe updated successfully');
  };

  const handleDrag = useCallback((e) => {
    if (!isDragging || !editorWrapperRef.current) return;
    const wrapperRect = editorWrapperRef.current.getBoundingClientRect();
    const newWidth = ((e.clientX - wrapperRect.left) / wrapperRect.width) * 100;
    const clampedWidth = Math.max(20, Math.min(80, newWidth));
    setColumnWidth(clampedWidth);
  }, [isDragging]);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  const openInNewTab = () => {
    const htmlContent = htmlRef.current?.state.doc.toString() || "";
    const cssContent = cssRef.current?.state.doc.toString() || "";
    const jsContent = jsRef.current?.state.doc.toString() || "";
    const fullHtml = `
        <html>
          <head>
            <style>${cssContent}</style>
          </head>
          <body>
            ${htmlContent}
            <script>${jsContent}<\/script>
          </body>
        </html>
      `;
    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        handleDrag(e);
      }
    };
    const handleMouseUp = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove, { passive: false });
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseleave', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging, handleDrag, handleDragEnd]);

  useEffect(() => {
    console.log('LiveEditorDesktop: useEffect triggered for project:', project?.title);
    console.log('LiveEditorDesktop: Dependencies changed:', {
      html: project?.files?.html?.substring(0, 50) + '...',
      css: project?.files?.css?.substring(0, 50) + '...',
      js: project?.files?.js?.substring(0, 50) + '...'
    });
    
    // Reset initialization when project changes
    initializedRef.current = false;
    
    if (initializedRef.current) {
      console.log('LiveEditorDesktop: Already initialized, skipping');
      return;
    }
    initializedRef.current = true;
    
    console.log('LiveEditorDesktop: Initializing editors for', project?.title);
    
    const createEditor = (initialCode, language, parentId, ref) => {
      console.log(`LiveEditorDesktop: Creating editor ${parentId} with code length:`, initialCode?.length);
      const parentElement = document.getElementById(parentId);
      if (!parentElement) {
        console.error(`LiveEditor: parent element ${parentId} not found`);
        return;
      }
      
      const view = new EditorView({
        state: EditorState.create({
          doc: initialCode,
          extensions: [
            basicSetup,
            language,
            baseTheme,
            EditorView.updateListener.of((v) => {
              if (v.docChanged) {
                console.log(`LiveEditorDesktop: ${parentId} content changed, updating iframe`);
                updateIframe();
              }
            }),
          ],
        }),
        parent: parentElement,
      });
      ref.current = view;
      console.log(`LiveEditorDesktop: Editor ${parentId} created successfully`);
    };
    
    createEditor(project.files.html, html(), "html-editor", htmlRef);
    createEditor(project.files.css, css(), "css-editor", cssRef);
    createEditor(project.files.js, javascript(), "js-editor", jsRef);
    
    console.log('LiveEditorDesktop: Scheduling iframe update');
    setTimeout(updateIframe, 100);

    // Cleanup function to destroy editors when component unmounts
    return () => {
      console.log('LiveEditorDesktop: Cleaning up editors for', project?.title);
      htmlRef.current?.destroy();
      cssRef.current?.destroy();
      jsRef.current?.destroy();
      htmlRef.current = null;
      cssRef.current = null;
      jsRef.current = null;
    };
  }, [project?.files?.html, project?.files?.css, project?.files?.js]);

  return (
    <div className="live-editor-container">
      <EditorTopBar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenInNewTab={openInNewTab}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <div className="editor-wrapper" ref={editorWrapperRef}>
        <div 
          className="editor-column" 
          style={{ width: `${columnWidth}%` }}
        >
          <div
            id="html-editor"
            className="editor-box"
            style={{ display: activeTab === "html" ? "block" : "none" }}
          ></div>
          <div
            id="css-editor"
            className="editor-box"
            style={{ display: activeTab === "css" ? "block" : "none" }}
          ></div>
          <div
            id="js-editor"
            className="editor-box"
            style={{ display: activeTab === "js" ? "block" : "none" }}
          ></div>
        </div>
        <div 
          className={`column-divider ${isDragging ? 'dragging' : ''}`}
          onMouseDown={handleDragStart}
          style={{ left: `${columnWidth}%` }}
        />
        <div 
          className="preview-column" 
        >
          <div className="preview-container">
            <iframe
              ref={iframeRef}
              className={`preview-frame ${viewMode}-view`}
              title="Vista previa"
              style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEditorDesktop; 