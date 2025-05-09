import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './GameFrame.css';

/**
 * Componente para mostrar juegos en un iframe
 * @component
 * @param {Object} props - Las propiedades del componente
 * @param {string} props.title - El título del juego
 * @param {string} props.url - La URL del juego
 * @returns {JSX.Element} El componente GameFrame renderizado
 */
const GameFrame = ({ title, url }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      // Manejar mensajes del iframe si es necesario
      console.log('Message from iframe:', event.data);
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div 
      className="game-frame-container"
      role="region"
      aria-label={`${title} game container`}
      itemScope
      itemType="https://schema.org/VideoGame"
    >
      <meta itemProp="name" content={title} />
      <meta itemProp="gamePlatform" content="Web Browser" />
      
      <iframe
        ref={iframeRef}
        src={url}
        title={`${title} - Game`}
        className="game-frame"
        allow="fullscreen"
        sandbox="allow-scripts allow-same-origin allow-popups allow-pointer-lock allow-forms"
        aria-label={`${title} game content`}
        itemProp="gameItem"
        loading="eager"
      />
    </div>
  );
};

GameFrame.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GameFrame; 