import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize2 } from 'lucide-react';

export default function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

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

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
    setVolume(vol);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative bg-black">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-auto"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-gray-800 bg-opacity-75 p-2 rounded flex items-center justify-between">
          <button onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <div className="flex items-center flex-1 mx-4">
            <Volume2 />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="mx-2 flex-1"
            />
          </div>
          <button onClick={toggleFullscreen} aria-label="Fullscreen">
            <Maximize2 />
          </button>
        </div>
      </div>
    </div>
  );
}
