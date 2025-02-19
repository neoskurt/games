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
                src={process.env.PUBLIC_URL + "/trailler.mov"}
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
                    padding: "8px 16px",
                    fontSize: "8px",
                    backgroundColor: "#fff",
                    color: "#333",
                    border: "2px solid #333",
                    borderRadius: "5px",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#333";
                    e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#333";
                }}
            >
                {isMuted ? "Unmute" : "Mute"} {/* Change le texte du bouton */}
            </button>
        </div>
    );
};

export default VideoContent;
