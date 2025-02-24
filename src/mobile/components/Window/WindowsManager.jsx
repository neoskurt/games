import React from 'react';
import Window from './Window.js';
import { useWindows } from '../../hooks/useWindows.jsx';

const WindowsManager = () => {
    const { windows, closeWindow, bringToFront } = useWindows();
    return (
        <>
            {windows.map(({ id, title, content, zIndex, height, width, x, y, hasOverflow }) => (
                <Window
                    key={id}
                    title={title}
                    zIndex={zIndex}
                    onClick={() => bringToFront(id)}
                    onClose={() => closeWindow(id)}
                    height={height}
                    width={width}
                    x={x}
                    y={y}
                    hasOverflow={hasOverflow}
                >
                    {content}
                </Window>
            ))}
        </>
    );
};

export default WindowsManager;
