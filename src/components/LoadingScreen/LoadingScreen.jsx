import React, { useEffect, useRef } from "react";

const LoadingScreen = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <video
            ref={videoRef}
            playsInline
            loop
            muted
            autoPlay
            className="background"
            style={{
                pointerEvents: "none",
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
