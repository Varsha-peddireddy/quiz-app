import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp(); // auto-submit
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [timeLeft, onTimeUp]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      ⏱️ Time Left: <strong>{formatTime(timeLeft)}</strong>
    </div>
  );
};

export default Timer;
