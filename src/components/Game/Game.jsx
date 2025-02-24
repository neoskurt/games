import React, { useEffect } from 'react';


const Game = ({ onLoad }) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `${process.env.PUBLIC_URL}/game/Index.js`;
        script.async = true;

        script.onload = () => {
            const GODOT_CONFIG = {
                args: [],
                canvasResizePolicy: 1,
                ensureCrossOriginIsolationHeaders: true,
                executable: `${process.env.PUBLIC_URL}/game/Index`,
                experimentalVK: false,
                fileSizes: { "Index.pck": 93664672, "Index.wasm": 43016933 },

            };

            const GODOT_THREADS_ENABLED = false;
            const engine = new window.Engine(GODOT_CONFIG);

            (function () {
                const statusProgress = document.getElementById('status-progress');
                const missing = window.Engine.getMissingFeatures({ threads: GODOT_THREADS_ENABLED });

                if (missing.length === 0) {
                    engine.startGame({
                        onProgress: (current, total) => {
                            if (current > 0 && total > 0) {
                                statusProgress.value = current;
                                statusProgress.max = total;
                            } else {
                                statusProgress.removeAttribute('value');
                                statusProgress.removeAttribute('max');
                            }
                        },
                    }).then(() => {
                        onLoad();
                        document.getElementById("canvas").focus();
                    });
                }
            })();
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <canvas id="canvas" style={{ position: "relative", zIndex: "2", width: "70vh", height: "70vh" }}>Your browser does not support the canvas tag.</canvas>
        </>
    );
};

export default Game;
