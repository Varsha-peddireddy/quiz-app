import React, { useEffect, useState } from 'react';
import Quiz from './components/Quiz';
import StartPage from './components/StartPage';
import Timer from './components/Timer';
import QuestionNavigation from './components/QuestionNavigation';
import ResultReport from './components/ResultReport';
import InstructionsPage from './components/InstructionsPage';
import { fetchQuizQuestions } from './services/quizService';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [answers, setAnswers] = useState(Array(15).fill(null));
  const [quizFinished, setQuizFinished] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // for resetting timer
  
  const QUIZ_DURATION = 30 * 60; // 30 minutes in seconds

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
  try {
    const data = await fetchQuizQuestions();

    console.log("Fetched Data:", data); // ✅ Add this line

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No questions received");
    }

    setQuestions(data);
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    
  }
};



  const handleAnswer = (selected) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[current] = selected;
      return updated;
    });

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    }
  };

  const handleNavigate = (index) => {
    setCurrent(index);
  };

  const handleRestart = () => {
    setCurrent(0);
    setShowResult(false);
    setQuizFinished(false);
    setAnswers(Array(15).fill(null));
    setTimerKey((prev) => prev + 1); // reset timer
    loadQuestions();
  };

  if (!quizStarted && !userEmail) {
    return (
      <div className="app-wrapper">
        <StartPage onStart={(email) => setUserEmail(email)} />
      </div>
    );
  }

  if (!quizStarted && userEmail) {
    return (
      <div className="app-wrapper">
        <InstructionsPage
          email={userEmail}
          onStart={() => setQuizStarted(true)}
        />
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      {!quizFinished && (
        <div className="timer-wrapper">
          <Timer
            key={timerKey}
            duration={QUIZ_DURATION}
            onTimeUp={() => {
              setShowResult(true);
              setQuizFinished(true);
            }}
          />
        </div>
      )}

      <div className="app-container">
        <div className="question-nav">
          <QuestionNavigation
              total={questions.length}
              current={current}
              answers={answers}
              onNavigate={handleNavigate}
              disabled={quizFinished}
            />

        </div>

        <div className="main-content">
          {!showResult && questions.length > 0 && !quizFinished ? (
            <>
             <Quiz
              key={current}
              questionData={questions[current]}
              currentIndex={current}
              total={questions.length}
              onAnswer={handleAnswer}
              onFinish={() => {
              setShowResult(true);
              setQuizFinished(true);
            }}
            />

              
            </>
          ) : (
            <ResultReport
              questions={questions}
              answers={answers}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
