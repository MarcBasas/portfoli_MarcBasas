import { useState, useEffect } from "react";
import LiveEditorDesktop from "./LiveEditorDesktop";
import LiveEditorMobile from "./LiveEditorMobile";
import LiveEditorErrorBoundary from "./LiveEditorErrorBoundary";
import useIsMobile from "../utils/UseIsMobile";

const LiveEditor = ({ project }) => {
  const isMobile = useIsMobile();
  const [isReady, setIsReady] = useState(false);

  // Esperar un momento para asegurar que el componente se monta correctamente
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        color: '#666',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p>Cargando editor de código...</p>
      </div>
    );
  }

  return (
    <LiveEditorErrorBoundary>
      {isMobile ? (
        <LiveEditorMobile project={project} />
      ) : (
        <LiveEditorDesktop project={project} />
      )}
    </LiveEditorErrorBoundary>
  );
};

export default LiveEditor;