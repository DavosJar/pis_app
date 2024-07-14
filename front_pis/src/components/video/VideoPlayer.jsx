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
            />
            <Slider name="Camera" />
        </div>
    );
};

export default VideoPlayer;