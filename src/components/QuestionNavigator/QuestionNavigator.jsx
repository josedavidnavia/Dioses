import React from 'react';
import Button from '../Button/Button';

const QuestionNavigator = ({ onBack, onNext, onRestart, currentQuestion, totalQuestions }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button text="Back" onClick={onBack} style={{ visibility: currentQuestion === 0 ? 'hidden' : 'visible' }} />
            <Button text="Restart" onClick={onRestart} />
            <Button text={currentQuestion === totalQuestions - 1 ? "Finish" : "Next"} onClick={onNext} />
        </div>
    );
};

export default QuestionNavigator;
