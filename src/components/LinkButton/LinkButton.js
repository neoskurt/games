import React from 'react';
import styles from './LinkButton.module.css'; // Import du CSS module

const LinkButton = ({ text, onClick }) => {
    return (
        <button 
            type="button"
            aria-label={text} 
            onClick={onClick} 
            className={styles.button} // Applique le style CSS
        >
            {text}
        </button>
    );
};

export default LinkButton;
