import React, { useState } from 'react';
import Welcome from './pages/Welcome/Welcome';
import Questionnaire from './pages/Questionnaire/Questionnaire';
import FinalScreen from './pages/FinalScreen/FinalScreen';

const App = () => {
    const [email, setEmail] = useState(null);
    const [step, setStep] = useState('welcome'); // 'welcome', 'questionnaire', or 'final'
    const [selectedGod, setSelectedGod] = useState(null);

    const handleEmailSubmit = (userEmail) => {
        setEmail(userEmail);
        setStep('questionnaire');
    };

    const handleFinishQuestionnaire = (godKey) => {
        setSelectedGod(godKey);
        setStep('final');
    };

    const handleRestart = () => {
        setEmail(null);
        setSelectedGod(null);
        setStep('welcome');
    };

    return (
        <div>
            {step === 'welcome' && <Welcome onEmailSubmit={handleEmailSubmit} />}
            {step === 'questionnaire' && <Questionnaire onFinish={handleFinishQuestionnaire} />}
            {step === 'final' && <FinalScreen selectedGodKey={selectedGod} onRestart={handleRestart} />}
        </div>
    );
};

export default App;
