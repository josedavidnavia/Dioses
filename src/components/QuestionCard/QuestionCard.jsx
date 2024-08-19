import React from 'react';

const QuestionCard = ({ option, onSelect, isSelected }) => {
    const cardStyle = {
        border: isSelected ? '2px solid blue' : '1px solid gray',
        padding: '10px',
        margin: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={cardStyle} onClick={() => onSelect(option)}>
            {option}
        </div>
    );
};

export default QuestionCard;
