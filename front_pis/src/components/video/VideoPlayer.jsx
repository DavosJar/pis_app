// src/components/video/VideoPlayer.jsx
import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import Slider from '../sliders/Slider'; 

const VideoPlayer = ({ videoUrl, title }) => {
    return (
        <div className="video-player-container">
            <label className="video-player-label">{title}</label>
            <ReactPlayer
                className="video-player"
                url={videoUrl}
                controls
                width="100%"  // Esto asegura que tome el 100% del ancho del contenedor
                height="auto" // Esto permite que la altura se ajuste automáticamente
            />
            <Slider name="Camera" />
        </div>
    );
};

export default VideoPlayer;
