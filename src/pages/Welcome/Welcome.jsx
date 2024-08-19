import React from 'react';
import EmailInput from '../../components/EmailInput/EmailInput';
import './Welcome.css';
import skullImage from '../../assets/craneo.png';  // Import the image

const Welcome = ({ onEmailSubmit }) => {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">¿Qué dios es más compatible con tu alma para servirle?</h1>
            <img src={skullImage} alt="Cráneo" className="welcome-image" />
            <p className="welcome-description">
                Con estas sencillas preguntas, encontrarás tu camino de devoción pura con el dios que entenderá tus ideales y te acogerá en su manto.
            </p>
            <EmailInput onSubmit={onEmailSubmit} />
        </div>
    );
};

export default Welcome;
