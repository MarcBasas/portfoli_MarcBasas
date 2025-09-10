import { useState, useEffect } from "react";

function useIsMobile(breakpoint = 768) {
    // Inicializar con false para evitar problemas de hidratación
    const [isMobile, setIsMobile] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    
    useEffect(() => {
        // Establecer el valor inicial después del montaje
        const mobile = window.innerWidth <= breakpoint;
        setIsMobile(mobile);
        setIsInitialized(true);
        
        const handleResize = () => {
            const mobile = window.innerWidth <= breakpoint;
            setIsMobile(mobile);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);
    
    // Durante el SSR o antes de la inicialización, devolver false
    return isInitialized ? isMobile : false;
}

export default useIsMobile;