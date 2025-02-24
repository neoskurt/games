import React from 'react';
import { Rnd } from 'react-rnd';

const Window = ({ children, title, zIndex, onClose, onClick, height, width, x, y, hasOverflow }) => {
    console.log(x);
    console.log(y);
    return (
        <Rnd
            default={{
                x: x ?? 100,
                y: y ?? 100,
                width: width ?? 300,
                height: height ?? 200,
            }}
            bounds="parent"
            enableResizing={true}
            style={{ zIndex, position: 'absolute' }}
            onMouseDown={onClick} // Appliquer zIndex au clic
            dragHandleClassName='window-header'
        >
            <div className="window" style={{
                height: "100%",
                backgroundColor: "lightgray",
                border: "2px solid black",
                position: "relative",
            }}>
                <div className="window-header" style={{
                    borderBottom: "2px solid black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "30px",
                    cursor: "move",
                }}>
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
                            e.stopPropagation(); // Empêche l'événement de propagation vers `onMouseDown`
                            onClose();
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="window-content" style={{ height: "calc(100% - 31px )", overflowY: hasOverflow ? "auto" : "hidden", overflowX: "hidden", }}>
                    {children}
                </div>
            </div>
        </Rnd>
    );
};

export default Window;
