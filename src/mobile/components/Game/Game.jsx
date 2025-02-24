import React, { useEffect, useState } from 'react';
import './Game.css';

const Game = () => {
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        const iframe = document.getElementById('game-iframe');
        iframe.onload = () => {
            setGameStarted(true);
                iframe.contentWindow.postMessage("muted=true", 'https://dreamy-sunshine-9e1897.netlify.app/index');
                
        };

        // Fonction pour vérifier la classe et ajuster le son
        const checkWindowsClass = () => {
            const windowsElement = document.querySelector('.windows');
            if (windowsElement) {
                iframe.contentWindow.postMessage({ type: 'setMute', mute: true }, '*');
            } else {
                iframe.contentWindow.postMessage({ type: 'setMute', mute: false }, '*');
            }
        };

        // Appeler la fonction lors du changement de classe
        checkWindowsClass();

        return () => {
            if (gameStarted) {
                const iframe = document.getElementById('game-iframe');
                iframe.onload = null; // Supprimer l'événement lors de la suppression
                
            }
        };
    }, [gameStarted]);

    return (
        <div className="game-container">
            <iframe
                id="game-iframe"
                src="https://dreamy-sunshine-9e1897.netlify.app/index"
                width="100%"
                height="600px"
                frameBorder="0"
                title="Game"
                onLoad={() => setGameStarted(true)}
            />
        </div>
    );
};

export default Game;
