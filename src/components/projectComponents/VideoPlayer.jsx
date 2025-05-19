import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize2 } from 'lucide-react';
import './VideoPlayer.css';

export default function VideoPlayer({ src, poster }) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    if (!wrapperRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapperRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);

    // Detectar cambios de fullscreen
    const handleFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === wrapperRef.current);
    };
    document.addEventListener('fullscreenchange', handleFullscreen);

    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
      document.removeEventListener('fullscreenchange', handleFullscreen);
    };
  }, []);

  return (
    <div className={`video-player-container${isFullscreen ? ' fullscreen' : ''}`}>
      <div className="video-wrapper" ref={wrapperRef}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="video-element"
        />
        <div className={`video-controls${isFullscreen ? ' fullscreen' : ''}`}>
          <div className="controls-left">
            <button
              onClick={togglePlay}
              className="video-btn"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '[  PAUSE  ]' : '[  PLAY  ]'}
            </button>
          </div>
          <div className="controls-right">
            <button
              onClick={toggleFullscreen}
              className="video-btn"
              aria-label="Fullscreen"
            >
              [  FULLSCREEN  ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
