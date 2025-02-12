import React, { useState, useEffect, useRef } from 'react';

const LoadingScreen = ({ onFinished = () => {} }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const [isFinished, setIsFinished] = useState(false); // Bloque toute relance des vidéos
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isFinished) { // On empêche la relance si déjà fini
      const timer = setTimeout(() => {
        setShowTrailer(true);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [isFinished]); // On surveille seulement `isFinished`

  const handleBackgroundVideoEnd = () => {
    if (!isFinished) {
      setShowBackground(false);
      setShowTrailer(true);
    }
  };

  const closeTrailer = () => {
    setShowTrailer(false);
    setShowBackground(false); // Assure que neige.mp4 ne revient pas
    setIsFinished(true); // Marque définitivement la fin du loading
    onFinished();
  };

  return (
    <>
      {/* Affiche la vidéo de fond uniquement si elle n'a pas été fermée */}
      {showBackground && !isFinished && (
        <video
          playsInline
          className="background"
          style={{
            pointerEvents: 'none',
            zIndex: 50,
            position: 'fixed',
            top: 0,
            left: 0,
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
          src={`${process.env.PUBLIC_URL}/neige.mp4`}
          autoPlay
          muted
          onEnded={handleBackgroundVideoEnd} // Désactive la vidéo à la fin
        />
      )}

      {showTrailer && !isFinished && (
        <>
          <video
            ref={videoRef}
            playsInline
            className="background"
            style={{
              pointerEvents: 'none',
              zIndex: 50,
              position: 'fixed',
              top: 0,
              left: 0,
              objectFit: 'cover',
              height: '100%',
              width: '100%',
            }}
            src={`${process.env.PUBLIC_URL}/trailler.mov`}
            autoPlay
            muted
            onEnded={closeTrailer} // Ferme automatiquement à la fin
          />
          <button
            onClick={closeTrailer}
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: 100,
              padding: '10px 20px',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Fermer
          </button>
        </>
      )}
    </>
  );
};

export default LoadingScreen;
