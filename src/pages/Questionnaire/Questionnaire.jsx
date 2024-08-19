import React, { useState } from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import QuestionNavigator from '../../components/QuestionNavigator/QuestionNavigator';
import './Questionnaire.css';

const Questionnaire = ({ onFinish }) => {
    const questions = [
        {
            question: "¿Qué es lo que más valoras en un líder?",
            options: [
                "A) Su capacidad para mantener la paz.",
                "B) Su comprensión de lo inevitable.",
                "C) Su conexión con la vida.",
                "D) Su carisma para unir a las personas.",
                "E) Su valentía ante lo desconocido."
            ]
        },
        {
            question: "¿Dónde preferirías escapar y reflexionar?",
            options: [
                "A) En una cima ventosa.",
                "B) En un lugar oscuro y tranquilo.",
                "C) En un campo florecido.",
                "D) En un jardín exuberante.",
                "E) En la orilla del mar."
            ]
        },
        {
            question: "¿Qué te motiva a levantarte cada día?",
            options: [
                "A) Guiar y equilibrar.",
                "B) Buscar respuestas profundas.",
                "C) Cuidar de otros.",
                "D) Disfrutar de la belleza.",
                "E) Afrontar nuevos desafíos."
            ]
        },
        {
            question: "¿Qué cualidad valoras más en una relación?",
            options: [
                "A) Honestidad en los conflictos.",
                "B) Comprensión mutua.",
                "C) Lealtad constante.",
                "D) Conexión apasionada.",
                "E) Superar tormentas juntos."
            ]
        },
        {
            question: "¿Qué te llena de orgullo en tu vida diaria?",
            options: [
                "A) Tomar decisiones sabias.",
                "B) Afrontar dificultades con dignidad.",
                "C) Ver crecer lo que cuidas.",
                "D) Inspirar con tu encanto.",
                "E) Enfrentar lo incierto."
            ]
        },
        {
            question: "¿Cómo prefieres pasar tu tiempo libre?",
            options: [
                "A) Planificando el futuro.",
                "B) Reflexionando en soledad.",
                "C) Disfrutando de la naturaleza.",
                "D) Celebrando con arte.",
                "E) Buscando aventuras."
            ]
        },
        {
            question: "¿Cuál es tu perspectiva sobre los desafíos?",
            options: [
                "A) Requieren sabiduría.",
                "B) Son inevitables.",
                "C) Son oportunidades de crecimiento.",
                "D) Pueden transformarse en algo hermoso.",
                "E) Son olas que se enfrentan."
            ]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [optionCounts, setOptionCounts] = useState({ A: 0, B: 0, C: 0, D: 0, E: 0 });

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (selectedOption) {
            const optionKey = selectedOption.charAt(0);  // Obtener la letra de la opción seleccionada (A, B, C, D, E)
            setOptionCounts((prevCounts) => ({
                ...prevCounts,
                [optionKey]: prevCounts[optionKey] + 1
            }));
        }
    
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            // Determinar el dios seleccionado basado en la opción más elegida
            const maxCount = Math.max(...Object.values(optionCounts));
            const mostSelectedOptions = Object.keys(optionCounts).filter(key => optionCounts[key] === maxCount);
    
            // Si hay un empate, se elige según la respuesta de la primera pregunta
            const selectedGodKey = mostSelectedOptions.length > 1 
                ? mostSelectedOptions.find(key => key === questions[0].options[0].charAt(0))
                : mostSelectedOptions[0];
    
            onFinish(selectedGodKey);  // Pasa el key seleccionado a FinalScreen
        }
    };
    

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(null);
        }
    };

    return (
        <div className="questionnaire-container">
            <img src="../../../assets/bordeI.png" alt="borde izquierdo" className="border-image-left" />
            <div className="question-content">
                <h2>{currentQuestion + 1}/7</h2>
                <h3>{questions[currentQuestion].question}</h3>
                <div className="options-container">
                    {questions[currentQuestion].options.map((option, index) => (
                        <QuestionCard
                            key={index}
                            option={option}
                            isSelected={option === selectedOption}
                            onSelect={handleSelectOption}
                        />
                    ))}
                </div>
                <QuestionNavigator
                    onBack={handleBack}
                    onNext={handleNext}
                    currentQuestion={currentQuestion}
                    totalQuestions={questions.length}
                />
            </div>
            <img src="/bordeD.png" alt="borde derecho" className="border-image-right" />
            <img src="/bordeI.png" alt="borde izquierdo" className="border-image-left" />
        </div>
    );
};

export default Questionnaire;
