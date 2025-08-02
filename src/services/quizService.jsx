export const fetchQuizQuestions = async () => {
  const response = await fetch('https://opentdb.com/api.php?amount=15&type=multiple');
  const data = await response.json();

  return data.results.map((q) => ({
    question: q.question,
    correct_answer: q.correct_answer,
    options: shuffle([...q.incorrect_answers, q.correct_answer]),
  }));
};

const shuffle = (array) => array.sort(() => Math.random() - 0.5);