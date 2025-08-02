import React, { useEffect, useState } from 'react';
import './Quiz.css';

const Quiz = ({ questionData, currentIndex, total, onAnswer, onFinish, locked }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null); // Reset selection on new question
  }, [questionData]);

  const handleSubmit = () => {
    if (selected === null) {
      alert('Please select an option.');
      return;
    }
    onAnswer(selected);
  };

  return (
    <div className="quiz-full">
      <div className="left-question">
        <div className="question-header">
          <div className="question-number">
            Question {currentIndex + 1} / {total}
          </div>
          <div className="question-text" dangerouslySetInnerHTML={{ __html: questionData.question }} />
        </div>

        <div className="bottom-left-btn">
          {/* ✅ Always show Submit */}
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={locked}
          >
            Submit
          </button>

          {/* ✅ Show Finish only at last question */}
          {currentIndex === total - 1 && (
            <button
              className="finish-btn"
              onClick={onFinish}
            >
              Finish Quiz
            </button>
          )}
        </div>
      </div>

      <div className="right-options">
        <ul>
          {questionData.options.map((opt, idx) => (
            <li key={idx}>
              <button
                className={selected === opt ? 'selected' : ''}
                onClick={() => !locked && setSelected(opt)}
                dangerouslySetInnerHTML={{ __html: opt }}
                disabled={locked}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
