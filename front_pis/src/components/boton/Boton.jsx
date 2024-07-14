import React from "react";
import "./Boton.css";

const Boton = ({ name, onClick }) => {
    // Construir el id usando el nombre
    const buttonId = `${name}-btn`;

    return (
        <button id={buttonId} className="boton" onClick={onClick}>
            {name}
        </button>
    );
};

export default Boton;