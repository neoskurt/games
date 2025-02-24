import React, { useRef, useState, useEffect } from 'react';

const VideoContent = () => {
    const videoRef = useRef(null); // Référence à l'élément vidéo
    const [isMuted, setIsMuted] = useState(false); // État pour savoir si la vidéo est muette ou non

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    const toggleMute = () => {
        setIsMuted(prevMuted => {
            if (videoRef.current) {
                videoRef.current.muted = !prevMuted; // Change l'état de "muted"
            }
            return !prevMuted;
        });
    };

    return (
        <div style={{
            margin: "10px",
            position: "relative", // Nécessaire pour positionner le bouton par rapport à ce div
        }}>
            <video
                ref={videoRef}
                src={process.env.PUBLIC_URL + "/trailler.mp4"}
                style={{
                    width: '100%',
                    outline: 'none',
                }}
                loop
                autoPlay
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noplaybackrate"
                muted={isMuted} // Utilisation de l'état pour gérer le mute
            ></video>
            <button
                onClick={toggleMute}
                style={{
                    position: "absolute", // Positionnement absolu
                    top: "10px", // 10px du haut
                    right: "10px", // 10px de la droite
                    padding: "5px",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                <img 
                    src={process.env.PUBLIC_URL + (isMuted ? "/muet.png" : "/son.png")} 
                    alt={isMuted ? "Muet" : "Son"} 
                    style={{ width: "24px", height: "24px" }}
                />
            </button>
        </div>
    );
};

export default VideoContent;
