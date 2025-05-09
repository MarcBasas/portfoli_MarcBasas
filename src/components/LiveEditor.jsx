import { useEffect, useRef, useState, useCallback } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

import "./LiveEditor.css";


const EDITOR_TABS = ["html", "css", "js"];

// Tema base sin estilos
const baseTheme = EditorView.theme({
  "&": {               
    background: "var(--color-background)",
    color: "var(--color-text)"
  },
  "&.cm-focused .cm-cursor": { borderLeftColor: "var(--color-text)" },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "var(--color-menu)"
  },
  ".cm-line": {
    padding: "2px",
  },
  ".cm-gutters": {
    backgroundColor: "var(--color-background)",
    color: "var(--color-text)",
    borderRight: "1px solid var(--color-text)"
  },
  ".cm-activeLineGutter": {
    backgroundColor: "var(--color-menu) !important",
    margin: "0",
    padding: "0"
  },
  ".cm-activeLine": {
    backgroundColor: "var(--color-menu) !important",
  },
  ".cm-content": {
    padding: "0",
    margin: "0"
  }
});

/**
 * Componente para la barra superior del editor
 */
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

/**
 * Componente principal del editor en vivo
 */
const LiveEditor = ({ project }) => {
  // Refs
  const iframeRef = useRef();
  const htmlRef = useRef();
  const cssRef = useRef();
  const jsRef = useRef();
  const initializedRef = useRef(false);
  const editorWrapperRef = useRef(null);

  // Estado
  const [activeTab, setActiveTab] = useState("html");
  const [columnWidth, setColumnWidth] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState('desktop');

  /**
   * Actualiza el contenido del iframe con el código actual
   */
  const updateIframe = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    if (!doc) return;

    const htmlContent = htmlRef.current?.state.doc.toString() || "";
    const cssContent = cssRef.current?.state.doc.toString() || "";
    const jsContent = jsRef.current?.state.doc.toString() || "";

    const fullHtml = `
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            body {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }
            img {
              max-width: 100%;
              height: auto;
            }
            ${cssContent}
          </style>
        </head>
        <body>
          ${htmlContent}
          <script>${jsContent}</script>
        </body>
      </html>
    `;

    doc.open();
    doc.write(fullHtml);
    doc.close();
  };

  /**
   * Maneja el movimiento durante el arrastre
   */
  const handleDrag = useCallback((e) => {
    if (!isDragging || !editorWrapperRef.current) return;

    const wrapperRect = editorWrapperRef.current.getBoundingClientRect();
    const newWidth = ((e.clientX - wrapperRect.left) / wrapperRect.width) * 100;
    const clampedWidth = Math.max(20, Math.min(80, newWidth));
    setColumnWidth(clampedWidth);
  }, [isDragging]);

  /**
   * Maneja el inicio del arrastre del divisor
   */
  const handleDragStart = useCallback(() => {
    setIsDragging(true);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  /**
   * Maneja el fin del arrastre
   */
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  /**
   * Abre el código actual en una nueva pestaña
   */
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
            <script>${jsContent}</script>
          </body>
        </html>
      `;

    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  // Efecto para manejar los eventos de arrastre globales
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

  // Efecto para inicializar los editores
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const createEditor = (initialCode, language, parentId, ref) => {
      const view = new EditorView({
        state: EditorState.create({
          doc: initialCode,
          extensions: [
            basicSetup,
            language,
            baseTheme,
            EditorView.updateListener.of((v) => {
              if (v.docChanged) updateIframe();
            }),
          ],
        }),
        parent: document.getElementById(parentId),
      });
      ref.current = view;
    };

    createEditor(project.files.html, html(), "html-editor", htmlRef);
    createEditor(project.files.css, css(), "css-editor", cssRef);
    createEditor(project.files.js, javascript(), "js-editor", jsRef);

    setTimeout(updateIframe, 100);
  }, [project.files.html, project.files.css, project.files.js]);

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

export default LiveEditor;