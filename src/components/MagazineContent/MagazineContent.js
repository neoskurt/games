import React from 'react';
import PanZoom from 'react-easy-panzoom';

const MagazineContent = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            marginTop: "10px",
            marginBottom: "10px",
        }}>
            <PanZoom realPinch="false" style={{
                cursor: "zoom-in"
            }}>
                <img
                    alt="un magazine"
                    src={`${process.env.PUBLIC_URL}/magazine.jpg`}
                    style={{
                        pointerEvents: "none",
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",

                    }}
                />
            </PanZoom>
        </div>
    );
};

export default MagazineContent;
