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
            height: "30px",
            borderBottom: "2px solid black",
            overflow: "hidden"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                width: "100%",
                margin: "10px"
            }}>
                <p style={{
                    fontFamily: "Symtext",
                    fontSize: "15px",
                    whiteSpace: "nowrap",
                    animation: "scroll-text 12s linear infinite"
                }}>
                    {trackName}
                </p>
            </div>
            <a
  href="https://distrokid.com/hyperfollow/arthurlemoalleetquartopalasi/tothego-the-first-run-originalscore"
  onClick={(e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    window.open(
      "https://distrokid.com/hyperfollow/arthurlemoalleetquartopalasi/tothego-the-first-run-originalscore",
      "_blank",
      "width=800,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no"
    );
  }}
  style={{
    backgroundColor: "transparent",
    border: "none",
    margin: "10px",
    display: "inline-block",
    cursor: "pointer"
  }}
>
  <img alt="download icon" height="30px" width="30px" src={`${process.env.PUBLIC_URL}/download.svg`} />
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
