import { useState, useEffect } from "react";
import LiveEditorDesktop from "./LiveEditorDesktop";
import LiveEditorMobile from "./LiveEditorMobile";
import LiveEditorErrorBoundary from "./LiveEditorErrorBoundary";
import useIsMobile from "../utils/UseIsMobile";

const LiveEditor = ({ project }) => {
  console.log('LiveEditor: Component rendering with project:', project?.title, 'ID:', project?.id);
  
  const isMobile = useIsMobile();
  const [isReady, setIsReady] = useState(false);

  console.log('LiveEditor: isMobile =', isMobile, 'isReady =', isReady);

  // Esperar un momento para asegurar que el componente se monta correctamente
  useEffect(() => {
    console.log('LiveEditor: Component mounted, setting up ready timer');
    const timer = setTimeout(() => {
      console.log('LiveEditor: Setting ready to true');
      setIsReady(true);
    }, 100);
    return () => {
      console.log('LiveEditor: Component unmounting, cleaning up timer');
      clearTimeout(timer);
    };
  }, []);

  // Detectar cambios en el proyecto
  useEffect(() => {
    console.log('LiveEditor: Project changed effect triggered, new project:', project?.title, 'ID:', project?.id);
  }, [project]);

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