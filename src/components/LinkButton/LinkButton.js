/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
const LinkButton = ({ text, onClick }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <button onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={onClick} style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontFamily: "Symtext",
            fontSize: "40px",
            color: "white",
            textDecoration: isHover ? "underline" : "none",

        }}>{text}</button>
    );
};

export default LinkButton;
