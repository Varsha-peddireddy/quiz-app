import React, { useState } from 'react';
import './StartPage.css';

const StartPage = ({ onStart }) => {
  const [email, setEmail] = useState('');

  const handleStart = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    onStart(email);
  };

  return (
    <div className="start-wrapper">
      <div className="start-card">
        <h1 className="logo-title">🚀 QuizMaster</h1>
        <p className="subtitle">Enter your email to begin your quiz journey!</p>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleStart}>Start Quiz</button>
      </div>
    </div>
  );
};

export default StartPage;
