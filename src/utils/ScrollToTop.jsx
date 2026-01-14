import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useIsMobile from "./UseIsMobile";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Función para hacer scroll al top con múltiples estrategias
    const scrollToTop = () => {
      try {
        // En desktop solo resetear si estamos en la Landing (que sí tiene scroll)
        // En móvil resetear siempre
        if (isMobile || pathname === '/') {
          // 1. Reset scroll del window (páginas normales) - más agresivo
          window.scrollTo(0, 0);
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
        
        // 2. Reset de las columnas de Landing (desktop)
        if (!isMobile && pathname === '/') {
          const leftColumn = document.querySelector('.left-column');
          const rightColumn = document.querySelector('.right-column');
          if (leftColumn) {
            leftColumn.scrollTo({ top: 0, behavior: "instant" });
            leftColumn.scrollTop = 0;
          }
          if (rightColumn) {
            rightColumn.scrollTo({ top: 0, behavior: "instant" });
            rightColumn.scrollTop = 0;
          }
        }
        
        // 3. Reset del contenedor móvil (Landing page mobile) - solo en móvil
        if (isMobile) {
          const mobileContainer = document.getElementById("mobile-scroll-container");
          if (mobileContainer) {
            mobileContainer.scrollTo({ top: 0, behavior: "instant" });
            mobileContainer.scrollTop = 0;
          }
          
          // Fix específico para iOS - prevenir double scroll
          if (typeof window !== 'undefined' && window.scrollY > 0) {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }
        }
        
        // 4. En móvil, reset general de contenedores con overflow
        if (isMobile) {
          const scrollableElements = document.querySelectorAll('[style*="overflow-y: auto"], [style*="overflow: auto"]');
          scrollableElements.forEach(element => {
            element.scrollTo({ top: 0, behavior: "instant" });
            element.scrollTop = 0;
          });
          
          // Forzar scroll del body y html (fallback más agresivo)
          if (document.body) {
            document.body.scrollTop = 0;
          }
          if (document.documentElement) {
            document.documentElement.scrollTop = 0;
          }
        }
        
             } catch (error) {
         // Fallback silencioso en caso de errores
         console.warn("ScrollToTop: Error resetting scroll position", error);
         try {
           window.scrollTo(0, 0);
         } catch (fallbackError) {
           // Si incluso el fallback falla, no hacer nada
         }
       }
       
               // Debug temporal - puedes remover este console.log cuando confirmes que funciona
        console.log(`ScrollToTop: ${isMobile ? 'Mobile' : 'Desktop'} - Reset scroll for ${pathname}, window.scrollY = ${window.scrollY}`);
    };

    // Ejecutar inmediatamente
    scrollToTop();
    
    // Ejecutar después de un pequeño delay para componentes que se renderizan tarde
    const timeoutId = setTimeout(scrollToTop, 100);
    
    // Limpiar timeout
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
