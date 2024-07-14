// src/components/control_brazo/ControlBrazoContainer.jsx
import React from 'react';
import Slider from '../sliders/Slider'; // Ruta ajustada
import './ControlBrazoContainer.css'; // Importa el archivo CSS


const ControlBrazoContainer = () => {
    return (
        <div className="control-brazo-container">
            <label className="control-brazo-label">Control Brazo</label>
            <Slider name="Base" initialValue={90} />
            <Slider name="Hombro" initialValue={90} />
            <Slider name="Codo" initialValue={90} />
            <Slider name="Muñeca" initialValue={90} />
        </div>
    );
};

export default ControlBrazoContainer;