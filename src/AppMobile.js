import React from 'react';
import "./AppMobile.css";
import Game from './mobile/components/Game/Game.jsx';
import WindowsManager from './mobile/components/Window/WindowsManager.jsx';
import Footer from './mobile/components/Footer/Footer.jsx';
import MenuButtons from './mobile/components/MenuButtons/MenuButtons.jsx';

const AppMobile = () => {

  return (
    <>
   
        <>
        <img 
  alt="des vaisseaux qui volent par dessus le site" 
  src={`${process.env.PUBLIC_URL}/vaisseaux.gif`} 
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover", 
    zIndex: 0,
    pointerEvents: "none"
  }} 
/>

          <div style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#030814",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
            <WindowsManager />
            <div>
  <a target="_blank" href="https://www.tothego.studio/" rel="noreferrer">
    <img
      src={`${process.env.PUBLIC_URL}/ttg-ecran-fin.png`}
      style={{ width: "40vh", backgroundColor: "transparent", objectFit: "contain" }}
      alt="Main Logo"
    />
  </a>
</div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}>
              <Game />
              <MenuButtons />
            </div>
            <Footer />
          </div>
        </>
 

      <noscript>Your browser does not support JavaScript.</noscript>
    </>
  );
};

export default AppMobile;
