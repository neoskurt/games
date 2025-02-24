import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppMobile from './AppMobile.js';

// Importation des deux WindowsProvider
import { WindowsProvider as WindowsProviderDesktop } from './hooks/useWindows.jsx';
import { WindowsProvider as WindowsProviderMobile } from './mobile/hooks/useWindows.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sélection du bon provider
  const WindowsProvider = isMobile ? WindowsProviderMobile : WindowsProviderDesktop;

  return (
    <React.StrictMode>
      <WindowsProvider>
        {isMobile ? <AppMobile /> : <App />}
      </WindowsProvider>
    </React.StrictMode>
  );
};

root.render(<Main />);
