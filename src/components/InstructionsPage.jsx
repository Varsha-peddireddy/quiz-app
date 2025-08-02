import React from 'react';
import './InstructionsPage.css';
import { FaQuestionCircle, FaFileAlt } from 'react-icons/fa';
import { BsLightbulb, BsClipboardCheck } from 'react-icons/bs';

const InstructionsPage = ({ email, onStart }) => {
  return (
    <div className="instructions-full">
      <div className="left-block">
        <BsClipboardCheck className="quiz-icon" />
        <h1>Quiz</h1>
        <div className="info-points">
          <div>
            <FaQuestionCircle /> <span>Questions</span><strong>15</strong>
          </div>
          <div>
            <FaFileAlt /> <span>Marks</span><strong>15</strong>
          </div>
        </div>
      </div>

      <div className="right-block">
        <div className="guideline-heading">
          <BsLightbulb className="bulb" />
          <h2>Guidelines</h2>
        </div>
        <div className="timelines">
          <h3>Timelines & Questions</h3>
          <ul>
            <li><strong>Assessment Duration:</strong> 00:30:00 (hh:mm:ss)</li>
            <li><strong>Total Questions to be answered:</strong> 15 Questions</li>
            <li>Do not close the window or tab if you wish to continue the application.</li>
            <li>Please ensure that you attempt the assessment in one sitting as once you start the assessment, the timer won’t stop.</li>
          </ul>
        </div>

        <div className="start-input-block">
          <button onClick={onStart}>Start <span className="arrow">→</span></button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
