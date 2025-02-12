import React, { useEffect, useState } from 'react';
import './Game.css';

const Game = ({ onLoad }) => {
    const [scriptLoaded, setScriptLoaded] = useState(false); // État pour suivre si le script est chargé
    const [gameStarted, setGameStarted] = useState(false); // État pour s'assurer que le jeu a démarré

    useEffect(() => {
        if (!scriptLoaded) {
            const existingScript = document.getElementById('game-script');
            if (!existingScript) {
                const script = document.createElement('script');
                script.id = 'game-script';  // Attribuer un ID pour éviter d'ajouter plusieurs fois le script
                script.src = `${process.env.PUBLIC_URL}/game/Index.js`;
                script.async = true;

                script.onload = () => {
                    setScriptLoaded(true); // Marque le script comme chargé
                    const GODOT_CONFIG = {
                        args: [],
                        canvasResizePolicy: 1,
                        ensureCrossOriginIsolationHeaders: false,  // Désactive les headers CORS
                        executable: `${process.env.PUBLIC_URL}/game/Index`,
                        experimentalVK: false,
                        fileSizes: { "Index.pck": 93664672, "Index.wasm": 43016933 },
                    };

                    const GODOT_THREADS_ENABLED = false;
                    const engine = new window.Engine(GODOT_CONFIG);

                    (function () {
                        const missing = window.Engine.getMissingFeatures({ threads: GODOT_THREADS_ENABLED });

                        console.log("Fonctionnalités manquantes:", missing);

                        // Ignore les fonctionnalités manquantes
                        if (missing.length === 0 || !missing.includes("Secure Context - Check web server configuration (use HTTPS)")) {
                            engine.startGame({
                            }).then(() => {
                                setGameStarted(true); // Marquer le jeu comme démarré
                                onLoad();
                                const canvas = document.getElementById("canvas");
                                canvas.focus();
                                canvas.addEventListener('touchstart', function(event) {
                                    event.preventDefault();
                                    canvas.click();
                                });
                            }).catch((error) => {
                                console.error("Erreur lors du démarrage du jeu:", error);
                            });
                        } else {
                            console.warn("Des fonctionnalités manquent, mais on continue sans HTTPS.");
                        }
                    })();
                };

                document.body.appendChild(script);
            }
        }

        // Nettoyage à la suppression du composant, mais seulement après le lancement du jeu
        return () => {
            if (gameStarted) {
                const script = document.getElementById('game-script');
                if (script) {
                    document.body.removeChild(script);
                }
            }
        };
    }, [onLoad, scriptLoaded, gameStarted]); // Ajout de gameStarted pour éviter de nettoyer avant le démarrage

    return (
        <>
            <canvas id="canvas">Your browser does not support the canvas tag.</canvas>
        </>
    );
};

export default Game;
