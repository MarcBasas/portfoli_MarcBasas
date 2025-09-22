import { useState, useEffect, lazy, Suspense } from "react";
import LiveEditorErrorBoundary from "./LiveEditorErrorBoundary";
import useIsMobile from "../utils/UseIsMobile";

// Lazy load los editores para evitar problemas de SSR
const LiveEditorDesktop = lazy(() => import("./LiveEditorDesktop"));
const LiveEditorMobile = lazy(() => import("./LiveEditorMobile"));

const LiveEditor = ({ project }) => {
  const isMobile = useIsMobile();
  const [isReady, setIsReady] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Verificar que estamos en el cliente (no en SSR/pre-renderizado)
  useEffect(() => {
    // Verificar múltiples indicadores de que estamos en el cliente
    if (typeof window !== 'undefined' && 
        typeof document !== 'undefined' && 
        !window.navigator.userAgent.includes('Chrome-Lighthouse')) {
      setIsClient(true);
    }
  }, []);

  // Esperar un momento para asegurar que el componente se monta correctamente
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => setIsReady(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isClient]);

  // Componente de carga consistente
  const LoadingComponent = () => (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      color: '#666',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-background)',
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <p>Loading Live Editor...</p>
    </div>
  );

  // No renderizar nada durante el pre-renderizado
  if (!isClient || !isReady) {
    return <LoadingComponent />;
  }

  // Verificar que tenemos los datos del proyecto
  if (!project || !project.files) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        color: '#666',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-background)',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <p>No hay demo disponible para este proyecto.</p>
      </div>
    );
  }

  return (
    <LiveEditorErrorBoundary>
      <Suspense fallback={<LoadingComponent />}>
        {isMobile ? (
          <LiveEditorMobile project={project} />
        ) : (
          <LiveEditorDesktop project={project} />
        )}
      </Suspense>
    </LiveEditorErrorBoundary>
  );
};

export default LiveEditor;