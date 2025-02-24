import React from 'react';


const LoadingScreen = () => {

    return (
        <video
            playsInline
            loop
            muted
            autoPlay
            className="background"
            style={{
                pointerEvents: 'none',
                zIndex: "50",
                position: "fixed",
                top: 0,
                left: 0,
                objectFit: "cover",
                height: "100%",
                width: "100%",
            }}
            src={`${process.env.PUBLIC_URL}/neige.mp4`}
        />
    );
};

export default LoadingScreen;
