import { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import "./LiveEditor.css";

const MOBILE_TABS = ["project"];

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

const EditorTopBar = ({ activeTab, setActiveTab }) => (
  <div className="editor-top-bar">
    <div className="tabs" style={{ width: '100%' }}>
      <button
        key="project"
        onClick={() => setActiveTab("project")}
        className={`tab-button ${activeTab === "project" ? "active" : ""}`}
        style={{ width: '100%' }}
      >
        PROJECT
      </button>
    </div>
  </div>
);

const LiveEditorMobile = ({ project }) => {
  const iframeRef = useRef();
  const [activeTab, setActiveTab] = useState("project");
  const [previewKey, setPreviewKey] = useState(0);

  const updateIframe = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    iframe.src = 'about:blank';
    setTimeout(() => {
      const doc = iframe.contentDocument;
      if (!doc) return;
      const htmlContent = project.files.html || "";
      const cssContent = project.files.css || "";
      const jsContent = project.files.js || "";
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
      doc.open();
      doc.write(fullHtml);
      doc.close();
    }, 10);
  };

  useEffect(() => {
    setActiveTab("project");
  }, [project]);

  useEffect(() => {
    if (activeTab === "project") {
      setPreviewKey((k) => k + 1);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === "project") {
      updateIframe();
    }
  }, [activeTab, previewKey]);

  return (
    <div className="live-editor-container">
      <EditorTopBar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="editor-wrapper">
        <div className="preview-column" style={{ width: "100%" }}>
          <div className="preview-container">
            <iframe
              ref={iframeRef}
              key={previewKey}
              className={`preview-frame mobile-view`}
              title="Vista previa"
              style={{ pointerEvents: "auto" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEditorMobile; 