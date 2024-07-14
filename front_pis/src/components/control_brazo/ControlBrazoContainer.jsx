// src/components/control_brazo/ControlBrazoContainer.jsx
import React from 'react';
import Slider from '../sliders/Slider'; // Ruta ajustada
import './ControlBrazoContainer.css'; // Importa el archivo CSS
import Boton from '../boton/Boton'; // Ruta ajustada


function ControlBrazoContainer() {
    return (
        <div className="control-brazo-container">
            <label className="control-brazo-label">Control Brazo</label>
            <Slider name="Base" initialValue={90} />
            <Slider name="Hombro" initialValue={90} />
            <Slider name="Codo" initialValue={90} />
            <Slider name="Pinza" initialValue={90} />
            <Boton name="Cambiar" />
        </div>
    );
}

export default ControlBrazoContainer;