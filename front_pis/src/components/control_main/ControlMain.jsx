// src/components/control_app/ControlMain.jsx
import React from 'react';
import ControlBrazoContainer from '../control_brazo/ControlBrazoContainer';
import VideoPlayer from '../video/VideoPlayer';
import './ControlMain.css';

const ControlApp = () => {
    return (
        <div className="control-app-container">
            <ControlBrazoContainer />
            <div className="video-section">
                <VideoPlayer videoUrl="https://www.youtube.com/watch?v=82XNPIiHvOQ" title="Video de Ejemplo" />
            </div>
        </div>
    );
};

export default ControlApp;