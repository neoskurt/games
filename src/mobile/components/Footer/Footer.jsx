import React from 'react';
import style from './Footer.css';  // On crée un fichier CSS externe

const Footer = () => {
  return (
    <div>
      <a
        style={style} // Ajoutez le style CSS
        target="_blank"
        href="https://www.tothego.studio/"
        className="footer-link"  // Ajoutez la classe CSS
        rel="noreferrer">
        @ TOTHEGO STUDIO 2025
      </a>
    </div>
  );
};

export default Footer;
