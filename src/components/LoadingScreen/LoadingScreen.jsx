import React, { useState, useEffect, useRef } from 'react';

const LoadingScreen = ({ onFinished = () => {} }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [showBackground, setShowBackground] = useState(true);  // Pour gérer la vidéo de fond
  const videoRef = useRef(null);

  useEffect(() => {
    // Démarrer la vidéo du trailer après la fin de la vidéo de fond
    if (!showBackground && !showTrailer) {
      const timer = setTimeout(() => {
        setShowTrailer(true);  // Lancer le trailer après 5 secondes
      }, 5000);  // Attendre 5 secondes avant de commencer le trailer

      return () => clearTimeout(timer); // Nettoyer le timer au démontage du composant
    }
  }, [showBackground, showTrailer]);

  const handleBackgroundVideoEnd = () => {
    // Lorsque la vidéo de fond se termine, passer à la vidéo du trailer
    setShowBackground(false);
    setShowTrailer(true); // Déclencher le démarrage du trailer
  };

 

 

  const closeTrailer = () => {
    // Si l'utilisateur ferme la vidéo manuellement, signaler la fin et cacher le trailer
    setShowTrailer(false);
    onFinished();
  };

  return (
    <>
      {/* Affiche la vidéo de fond si showBackground est true */}
      {showBackground && (
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
          muted  // Ajout de muted pour éviter de bloquer la lecture automatiquement
          onEnded={handleBackgroundVideoEnd}  // Déclenche la fin de la vidéo de fond
        />
      )}

      {/* Affiche le trailer après 5 secondes */}
      {showTrailer && (
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
             muted  // Ajout de muted pour éviter de bloquer la lecture automatiquement
          onEnded={handleBackgroundVideoEnd}  // Déclenche la fin de la vidéo de fond
          />
          {/* Bouton pour fermer le trailer */}
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
