import React, { useState , useRef, useEffect} from 'react';
import "./App.css";
import Game from './components/Game/Game.jsx';
import WindowsManager from './components/Window/WindowsManager.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
import MenuButtons from './components/MenuButtons/MenuButtons.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // État pour suivre si le loading est affiché
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setTimeout(() => {
        video.play();
      }, 10000000); // Délai d'une seconde avant de lancer la vidéo
    }
  }, []);


  return (
    <>
      {/* Affichage du loading uniquement si isLoading est true */}
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}

      {/* Contenu principal, affiché seulement après le loading */}
      {!isLoading && (
        <>
          <img 
            alt="des vaisseaux qui volent par dessus le site" 
            src={`${process.env.PUBLIC_URL}/vaisseaux.gif`} 
            style={{
              position: 'fixed',
              height: "100vh",
              width: "100vw",
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
      src={`${process.env.PUBLIC_URL}/the_first_run.gif`}
      style={{ width: "45vh", backgroundColor: "transparent", objectFit: "contain" }}
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
      )}

      <noscript>Your browser does not support JavaScript.</noscript>
    </>
  );
};

export default App;
