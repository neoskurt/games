import React from 'react';
import { Rnd } from 'react-rnd';
import './Window.css'; // Import du fichier CSS

const Window = ({ children, title, zIndex, onClose, onClick, height, width, x, y, hasOverflow }) => {
    return (
        <Rnd
            default={{
                x: x ?? 50,
                y: y ?? 50,
                width: width ?? 300,
                height: height ?? 200,
            }}
            bounds="parent"
            enableResizing={true}
            minWidth={200}
            minHeight={150}
            maxWidth="100%"
            maxHeight="100%"
            style={{ zIndex, position: 'absolute' }}
            onMouseDown={onClick}
            dragHandleClassName='window-header'
        >
            <div className="window">
                <div className="window-header">
                <span style={{
                        fontFamily: "Symtext",
                        paddingLeft: "5px"
                    }}>{title}</span>
                    <button
                        style={{
                            backgroundColor: "darkgray",
                            height: "30px",
                            width: "30px",
                            borderTop: "none",
                            borderRight: "none",
                            borderBottom: "none",
                            borderLeft: "2px solid black",
                            cursor: "pointer",
                            fontSize:"20px",
                            fontWeight:"bold"
                        }}
                        onClick={(e) => {
                            e.stopPropagation(); // Empêche l'événement de propagation vers onMouseDown
                            onClose();
                        }}
                        onTouchStart={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                    >
                        X
                    </button>

                </div>
                <div className="window-content" style={{ overflowY: hasOverflow ? "auto" : "hidden" }}>
                    {children}
                </div>
            </div>
        </Rnd>
    );
};

export default Window;
