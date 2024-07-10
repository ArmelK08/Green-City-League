import React from 'react';
import './bouton.css';

function Bouton({ text, className }) {
    return (
        <div>
            <button className={`btn ${className}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text}
            </button>
        </div>
    );
}

export default Bouton;
