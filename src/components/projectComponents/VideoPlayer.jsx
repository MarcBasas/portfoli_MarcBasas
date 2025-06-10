import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Play, Pause, Maximize2 } from 'lucide-react';
import useIsMobile from '../../utils/UseIsMobile';
import './VideoPlayer.css';

/**
 * Reproductor de video personalizado y responsive.
 * @param {string} src - URL del video
 * @param {string} poster - Imagen de portada
 * @param {string} title - Título del video (SEO)
 */
const VideoPlayer = React.memo(function VideoPlayer({ src, poster, title = 'Video de Marc Basas' }) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [error, setError] = useState(false);
  const hideTimeout = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useIsMobile();

  // Handlers
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(
      !!document.fullscreenElement ||
      !!document.webkitFullscreenElement ||
      !!document.mozFullScreenElement ||
      !!document.msFullscreenElement
    );
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!wrapperRef.current) return;
    
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      const element = wrapperRef.current;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  }, []);

  const handleMouseEnter = () => {
    setShowControls(true);
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 1500);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  useEffect(() => {
    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const updateProgress = () => {
      if (!isDragging) {
        setProgress(v.currentTime / v.duration || 0);
      }
    };
    v.addEventListener('timeupdate', updateProgress);
    v.addEventListener('loadedmetadata', updateProgress);
    return () => {
      v.removeEventListener('timeupdate', updateProgress);
      v.removeEventListener('loadedmetadata', updateProgress);
    };
  }, [isDragging]);

  // Progress bar handlers
  const handleProgressClick = (e) => {
    const bar = e.target;
    const rect = bar.getBoundingClientRect();
    const x = e.touches ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = percent * videoRef.current.duration;
    }
    setProgress(percent);
  };

  const handleProgressMouseDown = (e) => {
    setIsDragging(true);
    handleProgressClick(e);
    window.addEventListener('mousemove', handleProgressMouseMove);
    window.addEventListener('mouseup', handleProgressMouseUp);
    window.addEventListener('touchmove', handleProgressMouseMove);
    window.addEventListener('touchend', handleProgressMouseUp);
  };

  const handleProgressMouseMove = (e) => {
    handleProgressClick(e);
  };

  const handleProgressMouseUp = (e) => {
    handleProgressClick(e);
    setIsDragging(false);
    window.removeEventListener('mousemove', handleProgressMouseMove);
    window.removeEventListener('mouseup', handleProgressMouseUp);
    window.removeEventListener('touchmove', handleProgressMouseMove);
    window.removeEventListener('touchend', handleProgressMouseUp);
  };

  const handleVideoError = () => {
    setError(true);
  };

  // Render
  return (
    <section
      className={`video-player-container${isFullscreen ? ' fullscreen' : ''}`}
      aria-label="Reproductor de video de Marc Basas"
      lang="es"
      tabIndex={-1}
      role="region"
      itemScope
      itemType="https://schema.org/VideoObject"
    >
      <meta itemProp="author" content="Marc Basas" />
      <div
        className="video-wrapper"
        ref={wrapperRef}
        onMouseEnter={!isMobile ? handleMouseEnter : undefined}
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
        onTouchStart={isMobile ? handleMouseEnter : undefined}
        onTouchEnd={isMobile ? handleMouseLeave : undefined}
      >
        {error ? (
          <div className="video-error-fallback" role="alert" style={{color: 'red', width: '100%', textAlign: 'center', padding: '2rem'}}>
            No se pudo cargar el video. Por favor, inténtalo más tarde.
          </div>
        ) : (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="video-element"
            autoPlay
            muted
            playsInline
            controls={false}
            title={title}
            aria-label={title}
            tabIndex={0}
            itemProp="contentUrl"
            onError={handleVideoError}
          />
        )}
        {/* Custom controls for desktop, native for mobile */}
        {!error && (
          <>
            <div
              className="video-progress-bar"
              onClick={handleProgressClick}
              onMouseDown={handleProgressMouseDown}
              style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '4px', cursor: 'pointer', zIndex: 10 }}
              role="slider"
              aria-valuenow={progress * 100}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
            >
              <div
                className="video-progress-bar-inner"
                style={{
                  width: `${progress * 100}%`,
                  height: '100%',
                  background: 'var(--color-menu)',
                  transition: isDragging ? 'none' : 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
                }}
              />
              <div
                className="video-progress-bar-bg"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(19,19,19,0.3)',
                  pointerEvents: 'none',
                }}
              />
            </div>
            <nav
              className={`video-controls${isFullscreen ? ' fullscreen' : ''}${showControls ? ' visible' : ''}`}
              aria-label="Controles de video"
              tabIndex={-1}
            >
              <div className="controls-left">
                <button
                  onClick={togglePlay}
                  className="video-btn"
                  aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                  title={isPlaying ? 'Pausar video' : 'Reproducir video'}
                  type="button"
                  tabIndex={0}
                  role="button"
                >
                  {isPlaying ? '[  PAUSE  ]' : '[  PLAY  ]'}
                </button>
              </div>
              <div className="controls-right">
                <button
                  onClick={toggleFullscreen}
                  className="video-btn"
                  aria-label="Pantalla completa"
                  title="Pantalla completa"
                  type="button"
                  tabIndex={0}
                  role="button"
                >
                  [  FULLSCREEN  ]
                </button>
              </div>
            </nav>
          </>
        )}
      </div>
    </section>
  );
});

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string,
};

VideoPlayer.defaultProps = {
  poster: '',
  title: 'Video de Marc Basas',
};

export default VideoPlayer;

