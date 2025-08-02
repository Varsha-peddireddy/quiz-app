import React from 'react';
import './ResultReport.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const ResultReport = ({ questions, answers, onRestart }) => {
  const total = questions.length;

  const correct = answers.filter((ans, i) => ans === questions[i].correct_answer).length;
  const incorrect = answers.filter((ans, i) => ans !== undefined && ans !== questions[i].correct_answer).length;
  const unanswered = answers.filter((ans) => ans === undefined).length;

  const chartData = {
    labels: ['Correct', 'Incorrect', 'Unanswered'],
    datasets: [
      {
        data: [correct, incorrect, unanswered],
        backgroundColor: ['#4caf50', '#f44336', '#9e9e9e'],
        borderColor: ['#388e3c', '#d32f2f', '#616161'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="report-screen">
      <h2>Quiz Summary</h2>

      {/* Chart */}
      <div className="chart-wrapper">
        <Pie data={chartData} options={chartOptions} />
      </div>

      {/* Review Questions */}
      <div className="review-grid">
        {questions.map((q, idx) => {
          const userAnswer = answers[idx];
          const isCorrect = userAnswer === q.correct_answer;

let cardClass = 'review-card';
if (!userAnswer) cardClass += ' unanswered';

else if (isCorrect) cardClass += ' correct';
else cardClass += ' incorrect';

          return (
            <div key={idx} className={cardClass}>
              <div className="question-number">Q{idx + 1}</div>
              <div
                className="question-text"
                dangerouslySetInnerHTML={{ __html: q.question }}
              />
              <div className="answer-section">
                <p>
                  <strong>Your Answer:</strong>{' '}
                  {userAnswer ? (
  <span dangerouslySetInnerHTML={{ __html: userAnswer }} />
) : (
  <em className="not-answered">Not Visited</em>
)}

                </p>
                {userAnswer !== undefined && userAnswer !== q.correct_answer && (
                  <p>
                    <strong>Correct Answer:</strong>{' '}
                    <span dangerouslySetInnerHTML={{ __html: q.correct_answer }} />
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Restart */}
      <button className="restart-btn" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default ResultReport;
