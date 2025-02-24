import React from 'react';
import { useWindows } from '../../hooks/useWindows.jsx';
import LinkButton from '../LinkButton/LinkButton.js';
import MagazineContent from '../MagazineContent/MagazineContent.js';
import VideoContent from '../VideoContent/VideoContent.js';
import TracklistContent from '../TracklistContent/TracklistContent.js';
import InfosContent from '../InfosContent/InfosContent.js';


const MenuButtons = () => {
    const { openWindow } = useWindows();

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
        }}>
            <LinkButton onClick={() => openWindow("magazine", "Magazine", MagazineContent, "36vh", "50vh", (10 / 100) * window.innerWidth, null, false)} text={"MAGAZINE"} />
            <LinkButton onClick={() => openWindow("trailer", "Trailer", VideoContent, "60vh", "76vh", (25 / 100) * window.innerWidth, (30 / 100) * window.innerHeight, false)} text={"Trailer"} />
            <LinkButton onClick={() => openWindow("tracklist", "Tracklist", TracklistContent, "550px", "500px", (60 / 100) * window.innerWidth, (10 / 100) * window.innerHeight, true)} text={"Tracklist"} />
            <LinkButton onClick={() => openWindow("infos", "Infos", InfosContent, "600px", "400px", (75 / 100) * window.innerWidth, (40/ 100) * window.innerHeight, true)} text={"Infos"} />
        </div>
    );
};

export default MenuButtons;
