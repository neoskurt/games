import React, { useEffect, useState } from 'react';
import { useWindows } from '../../hooks/useWindows.jsx';
import LinkButton from '../LinkButton/LinkButton.js';
import MagazineContent from '../MagazineContent/MagazineContent.js';
import VideoContent from '../VideoContent/VideoContent.js';
import TracklistContent from '../TracklistContent/TracklistContent.js';
import InfosContent from '../InfosContent/InfosContent.js';
import styles from './MenuButtons.module.css'; // Import du fichier CSS

const MenuButtons = () => {
    const { openWindow } = useWindows();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // Ajouter un état pour gérer le son global

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth < 768; // Exemple de breakpoint mobile

    const muteIframeSound = () => {
        const iframe = document.getElementById('game-iframe');
    
        if (iframe && iframe.contentWindow) {
            // Envoi d'un message pour couper le son de l'iframe
            iframe.contentWindow.postMessage({ action: 'mute' }, '*');
        }
    };
    
    
 

    const openVideoWindow = () => {
        // Couper le son lorsque la vidéo est lancée
        muteIframeSound();

        // Ouvrir la fenêtre de la vidéo
        openWindow("trailer", "Trailer", VideoContent, "40vh", "76vh", isMobile ? (10 / 100) * windowWidth : (25 / 100) * windowWidth, (20 / 100) * windowHeight, false);
    };

 

    return (
        <div className={styles.container}>
            <LinkButton  
                className={styles.button} 
                onClick={() => openWindow("magazine", "Magazine", MagazineContent, "36vh", "50vh", isMobile ? (2 / 100) * windowWidth : (20 / 100) * windowWidth, null, false)} 
                text={"Magazine"} 
            />
            <LinkButton 
                className={styles.button}
                onClick={openVideoWindow}  // Appel de la fonction pour couper le son et ouvrir la vidéo
                text={"Trailer"} 
            />
            <LinkButton  
                className={styles.button} 
                onClick={() => openWindow("tracklist", "Tracklist", TracklistContent, "400px", "450px", isMobile ? (20 / 100) * windowWidth : (60 / 100) * windowWidth, (10 / 100) * windowHeight, true)} 
                text={"Tracklist"} 
            />
            <LinkButton  
                className={styles.button} 
                onClick={() => openWindow("infos", "Infos", InfosContent, "200px", "400px", isMobile ? (20 / 100) * windowWidth : (75 / 100) * windowWidth, (30 / 100) * windowHeight, true)} 
                text={"Infos"} 
            />
        </div>
    );
};

export default MenuButtons;
