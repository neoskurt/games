/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import TracklistItem from './TracklistItem.js';
const TracklistContent = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
           
        }}>
            <TracklistItem trackName={"Track1_MainTheme-tothego_the_First_Run(Official Soundtrack)HQ[tothego.studio].mp3"} />
            <TracklistItem trackName={"Track2_Ballade_tothego_the_First_Run(Official Soundtrack)HQ[tothego.studio].mp3"}/>
            <TracklistItem trackName={"⁠Track3_Runner_Machine_tothego_the_First_Run(Official Soundtrack)HQ[tothego.studio].mp3"}/>
            <TracklistItem trackName={"⁠Track4_Cyberventure_tothego_the_First_Run(Official Soundtrack)HQ[tothego.studio].mp3"}/>
            <TracklistItem trackName={"⁠Track5_Basstrap__tothego_the_First_Run(Official Soundtrack)HQ[tothego.studio].mp3"}/>
            <TracklistItem trackName={"⁠Track6_tothegocity_tothego_the_First_Run(Official Soundtrack)HQ[tothego.studio].mp3"}/>
            <TracklistItem trackName={"⁠Track7_Final_Theme_tothego_the_First_Run(Official Soundtrack)HQ[tothego.studio].mp3"}/>
        </div>
    );
};

export default TracklistContent;
