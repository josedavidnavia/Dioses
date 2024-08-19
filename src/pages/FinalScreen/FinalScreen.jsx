import React from 'react';
import './FinalScreen.css';

// Importa las imágenes usando el alias @assets
import baseImage from '@assets/base.png';
import zeusImage from '@assets/zeus.png';
import hadesImage from '@assets/hades.png';
import demeterImage from '@assets/demeter.png';
import afroditaImage from '@assets/afrodita.png';
import poseidonImage from '@assets/poseidon.png';

const FinalScreen = ({ selectedGodKey, onRestart }) => {
    const godsData = {
        A: {
            name: 'Zeus',
            image: zeusImage,
            description: "Como seguidor de Zeus, te inclinas ante la majestad del cielo, buscando en la autoridad la guía para gobernar con justicia."
        },
        B: {
            name: 'Hades',
            image: hadesImage,
            description: "Como seguidor de Hades, veneras los misterios del inframundo con un respeto profundo hacia el ciclo eterno de la vida y la muerte."
        },
        C: {
            name: 'Deméter',
            image: demeterImage,
            description: "Como seguidor de Deméter, tus manos están arraigadas en la tierra fértil, y en tu corazón florece la paciencia que acompaña a la madre de las cosechas."
        },
        D: {
            name: 'Afrodita',
            image: afroditaImage,
            description: "Como seguidor de Afrodita, estás enamorado del amor mismo, buscando la belleza en todas sus formas y expresiones."
        },
        E: {
            name: 'Poseidón',
            image: poseidonImage,
            description: "Como seguidor de Poseidón, escuchas el llamado del océano en tu alma, deseoso de navegar por mares desconocidos."
        }
    };

    const selectedGod = godsData[selectedGodKey];

    if (!selectedGod) {
        return <div>God not found. Please select a valid god.</div>;
    }

    const handleStartDevotion = () => {
        alert('¡Escogiste bien, mortal!');
    };

    const handleShare = () => {
        alert('Esta devoción es privada, no puedes compartirla.');
    };

    return (
        <div className="final-screen">
            <h1 className="final-title">Aquel a quien de veras servir es ...</h1>
            <img src={selectedGod.image} alt={selectedGod.name} className="god-image" />
            <p className="god-description">{selectedGod.description}</p>
            <div className="buttons-container">
                <button className="final-button" onClick={handleStartDevotion}>Iniciar devoción</button>
                <button className="final-button" onClick={onRestart}>Volver a empezar</button>
                <button className="final-button" onClick={handleShare}>Compartir</button>
            </div>
            <img src={baseImage} alt="Fondo" className="background-image" />
        </div>
    );
};

export default FinalScreen;
