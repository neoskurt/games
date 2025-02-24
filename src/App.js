import React, { useState } from 'react';
import "./App.css";
import Game from './components/Game/Game.jsx';
import WindowsManager from './components/Window/WindowsManager.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
import MenuButtons from './components/MenuButtons/MenuButtons.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading &&
        <>
          <LoadingScreen />
        </>
      }
      
      <img alt="des vaisseaux qui volent par dessus le site" src={`${process.env.PUBLIC_URL}/vaisseaux.gif`} style={{
        position: 'fixed',
        height: "100vh",
        width: "100vw",
        zIndex: 1,
        pointerEvents: "none"
      }} />

      <div style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#030814",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around", // Centrer si en chargement
      }}>

        <>
          <WindowsManager />
          <div>
            <a target="_blank"
              href="https://www.tothego.studio/" rel="noreferrer">
              <video
                src={`${process.env.PUBLIC_URL}/the_first_run.webm`}
                style={{ width: "45vh", backgroundColor:"transparent" }}
                alt="Main Logo"
                autoPlay
                muted
                loop
              />
            </a>

          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Game onLoad={() => setIsLoading(false)} />
            <MenuButtons />
          </div>
          <Footer />
        </>

        <noscript>Your browser does not support JavaScript.</noscript>
      </div>
    </>
  );
};

export default App;
