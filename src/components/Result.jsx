import React from 'react';
import { FaTrophy, FaRedoAlt } from 'react-icons/fa';

const Result = ({ score, answered, total, onRestart }) => {
  return (
    <div className="result-box">
      <FaTrophy className="icon" />
      <h2>Quiz Completed!</h2>
      <p>You answered {answered} questions.</p>
      <p>Your Score: {score} / {total}</p>
      <button onClick={onRestart}>
        <FaRedoAlt style={{ marginRight: '8px' }} />
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
