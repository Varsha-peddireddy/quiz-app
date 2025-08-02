import React from 'react';
import './QuestionNavigation.css';

const QuestionNavigation = ({ total, current, answers, onNavigate, disabled }) => {
  return (
    <div className="nav-panel">
      {Array.from({ length: total }).map((_, index) => {
        let className = 'nav-btn';

        const hasAnswered = answers[index] !== null && answers[index] !== undefined;

        if (index === current) className += ' current';
        else if (hasAnswered) className += ' answered';
        else className += ' not-visited';

        return (
          <button
            key={index}
            className={`${className} ${disabled ? 'disabled' : ''}`}
            onClick={() => !disabled && onNavigate(index)}
            disabled={disabled}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionNavigation;
