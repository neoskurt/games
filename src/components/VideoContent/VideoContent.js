import React, { useRef, useEffect } from 'react';

const VideoContent = () => {
    const videoRef = useRef(null); // Référence à l'élément vidéo

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div style={{
            margin: "10px",
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
            ></video>
        </div>
    );
};

export default VideoContent;
