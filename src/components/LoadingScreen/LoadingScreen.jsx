import React, { useState, useRef, useEffect } from "react";

const LoadingScreen = ({ onFinished = () => {} }) => {
  const [showButton, setShowButton] = useState(true);
  const [showTrailer, setShowTrailer] = useState(true);
  const videoRef = useRef(null);

  // Hook pour calculer la taille de la vidéo en fonction de l'écran
  const [videoSize, setVideoSize] = useState({  width: "100%", height: "36.25%"  }); // 56.25% = 9/16

  useEffect(() => {
    if (window.innerWidth < 768) {
      // Si la largeur est inférieure à 768px (mobile), ajuster la taille
      setVideoSize({ width: "100%", height: "36.25%" });
    } else {
      // Sinon, occuper toute la fenêtre
      setVideoSize({ width: "100%", height: "90%" });
    }

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVideoSize({  width: "100%", height: "36.25%"  });
      } else {
        setVideoSize({ width: "100%", height: "90%" });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Assurer le chargement
    }
  }, []);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Activer le son
      videoRef.current.play(); // Lancer la vidéo
      setShowButton(false);
    }
  };

  const closeTrailer = () => {
    setShowTrailer(false);
    onFinished();
  };

  return (
    showTrailer && (
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#000" }}>
        {/* Vidéo en pause au chargement */}
        <video
          ref={videoRef}
          playsInline
          className="background"
          style={{
            pointerEvents: "none",
            zIndex: 100,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            width: videoSize.width,
            height: videoSize.height,
          }}
          src={`${process.env.PUBLIC_URL}/trailler.mov`}
          onEnded={closeTrailer}
        />

        {/* Bouton Play avec l'icône */}
        {showButton && (
          <button
            onClick={playVideo}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 100,
              padding: "10px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/lecture.png`} 
              alt="Play" 
              style={{ width: "50px", height: "50px" }}
            />
          </button>
        )}

        {/* Bouton Fermer avec l'icône */}
        <button
          onClick={closeTrailer}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 100,
            padding: "10px 20px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/annuler.png`} 
            alt="Fermer" 
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      </div>
    )
  );
};

export default LoadingScreen;
