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

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth < 768; // Exemple de breakpoint mobile

    return (
        <div className={styles.container}>
            <LinkButton  
                className={styles.button} 
                onClick={() => openWindow("magazine", "Magazine", MagazineContent, "36vh", "50vh", isMobile ? (2 / 100) * windowWidth : (10 / 100) * windowWidth, null, false)} 
                text={"MAGAZINE"} 
            />
            <LinkButton 
                className={styles.button}
                onClick={() => openWindow("video", "Video", VideoContent, "46vh", "76vh", isMobile ? (10 / 100) * windowWidth : (25 / 100) * windowWidth, (30 / 100) * windowHeight, false)} 
                text={"Video"} 
            />
            <LinkButton  
                className={styles.button} 
                onClick={() => openWindow("tracklist", "Tracklist", TracklistContent, "550px", "500px", isMobile ? (20 / 100) * windowWidth : (60 / 100) * windowWidth, (10 / 100) * windowHeight, true)} 
                text={"Tracklist"} 
            />
            <LinkButton  
                className={styles.button} 
                onClick={() => openWindow("infos", "Infos", InfosContent, "600px", "400px", isMobile ? (20 / 100) * windowWidth : (75 / 100) * windowWidth, (40 / 100) * windowHeight, true)} 
                text={"Infos"} 
            />
        </div>
    );
};

export default MenuButtons;
