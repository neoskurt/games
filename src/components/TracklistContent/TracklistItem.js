/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const TracklistItem = ({ trackName }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            height: "90px",
            borderBottom: "2px solid black",
            overflow: "hidden"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                width: "100%",
                margin: "20px"
            }}>
                <p style={{
                    fontFamily: "Symtext",
                    fontSize: "24px",
                    whiteSpace: "nowrap",
                    animation: "scroll-text 12s linear infinite"
                }}>
                    {trackName}
                </p>
            </div>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://distrokid.com/hyperfollow/arthurlemoalleetquartopalasi/tothego-the-first-run-originalscore"
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    margin: "10px"
                }}>
                <img alt="download icon" height="50px" width="50px" src={`${process.env.PUBLIC_URL}/download.svg`} />
            </a>
            <style>
                {`
                    @keyframes scroll-text {
                        0%, 10% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-80%);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default TracklistItem;
