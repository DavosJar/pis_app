// src/components/sliders/Slider.jsx
import React, { useState } from 'react';
import './Slider.css'; 

const Slider = ({ name }) => {
    const [value, setValue] = useState(90);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <label className="name-label" htmlFor={`${name}_slider`}>{name}: </label>
            <label className="value-label" htmlFor={`${name}_slider`}>{value}</label>
            <input
                type="range"
                min="0"
                max="180"
                value={value}
                onChange={handleChange}
                id={`${name}_slider`}
            />
        </div>
    );
};

export default Slider;