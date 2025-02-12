import React, { createContext, useState, useContext } from 'react';

const WindowsContext = createContext();

export const WindowsProvider = ({ children }) => {

    const [windows, setWindows] = useState([]);
    const [currentMaxZIndex, setCurrentMaxZIndex] = useState(5);

    const openWindow = (id, title, ContentComponent, height, width, x, y, hasOverflow) => {
        if (!windows.find(window => window.id === id)) {
            setWindows([
                ...windows,
                { id, title, content: <ContentComponent />, zIndex: currentMaxZIndex, height, width, x, y, hasOverflow }
            ]);
            setCurrentMaxZIndex(currentMaxZIndex + 1);
        }
    };

    const closeWindow = (id) => {
        setWindows(windows.filter(window => window.id !== id));
    };

    const bringToFront = (id) => {
        setWindows(windows.map(window =>
            window.id === id
                ? { ...window, zIndex: currentMaxZIndex }
                : window
        ));
        setCurrentMaxZIndex(currentMaxZIndex + 1);
    };

    return (
        <WindowsContext.Provider
            value={{
                openWindow,
                windows,
                closeWindow,
                bringToFront
            }}
        >
            {children}
        </WindowsContext.Provider>
    );
};

export const useWindows = () => {
    const context = useContext(WindowsContext);
    if (!context) {
        throw new Error('useWindows must be used within a WindowsProvider');
    }
    return context;
};
