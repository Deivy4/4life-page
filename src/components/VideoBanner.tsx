"use client"
import React, { useRef, useState } from 'react';

const VideoBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Referencia al video
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar el play/pause

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pausar video si ya está reproduciéndose
      } else {
        videoRef.current.play(); // Reproducir video si está pausado
      }
      setIsPlaying(!isPlaying); // Cambiar el estado
    }
  };

  // Cambiar el estado al detectar el cambio de estado del video
  const handleOnPlay = () => setIsPlaying(true);
  const handleOnPause = () => setIsPlaying(false);

  return (
    <div className="p-6 bg-center text-gray-700 flex justify-center items-center relative">
      <video
        ref={videoRef}
        onPlay={handleOnPlay} // Detecta cuando el video empieza a reproducirse
        onPause={handleOnPause} // Detecta cuando el video se pausa
        src="https://res.cloudinary.com/dt4pkrj5j/video/upload/v1738765170/videos/Descubre_los_Beneficios_de_4Life_Transfer_Factor_Plus_en_Espa%C3%B1ol_ovmm8y.mp4"
        className="w-full max-h-[600px] sm:min-h-[600px]"
      >
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* Botón de Play/Pause */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute text-white text-4xl bg-black bg-opacity-50 rounded-full p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M8 5v14l11-7z" /> {/* Ícono de play */}
          </svg>
        </button>
      )}
    </div>
  );
};

export default VideoBanner;

