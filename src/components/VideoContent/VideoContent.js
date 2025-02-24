import React, { useRef } from 'react';

const VideoContent = () => {
    const videoRef = useRef(null); // Référence à l'élément vidéo

    return (
        <div style={{
            margin:"10px",
        }}>
            <video
                ref={videoRef}
                src={process.env.PUBLIC_URL + "/trailler.mp4"}
                style={{
                    width: '100%',
                    outline: 'none',
                }}
                controls={true}
                
            ></video>
          
        </div>
    );
};

export default VideoContent;
