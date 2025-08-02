# 🚀 Quiz App

A fully functional and responsive quiz web application built using **React** and deployed on **Vercel**. The app allows users to take a timed quiz, navigate between questions, and get a visual report of their results.

## 🌐 Live Link
👉 [https://quiz-9fv8bfx3e-varsha-peddireddys-projects.vercel.app/](https://quiz-9fv8bfx3e-varsha-peddireddys-projects.vercel.app/)

---

## 🧠 Features

- Start page with email validation
- Instructions page before the quiz
- 15 multiple choice questions fetched from [Open Trivia DB](https://opentdb.com/)
- Question navigation sidebar
- Countdown timer (30 minutes)
- Auto-submit on timeout
- Visual result summary using pie chart (Chart.js)
- Question-wise review after quiz
- Fully responsive design

---

## 🛠️ Project Structure

### 📁 Components
- `StartPage`: Email input page to begin the quiz.
- `InstructionsPage`: Displays quiz instructions.
- `Quiz`: Main quiz logic and question display.
- `QuestionNavigation`: Sidebar navigation buttons for questions.
- `Timer`: Countdown timer using `useEffect`.
- `ResultReport`: Pie chart summary and review section.

### 🧠 Logic & Utilities
- `quizService.js`: Fetches and shuffles quiz questions from API.
- `App.js`: Main state management and flow control using React hooks.

---

## 🚀 Installation Instructions

```bash
# Clone the repository
git clone https://github.com/Varsha-peddireddy/quiz-app.git

# Navigate into the project directory
cd quiz-app

# Install dependencies
npm install

# Run the app locally
npm run dev


```
### 📌 Assumptions Made

- **Users provide a valid email address** before starting the quiz.
- **Quiz data is fetched from the Open Trivia DB API**, assumed to be reliable and correctly formatted.
- **Only one attempt is allowed per session**, requiring refresh or restart for a new quiz.

## 💡 Challenges Faced

### API Limit
- Faced rate-limiting (HTTP 429) from Open Trivia DB.
- Added error handling with fallback alerts.

### Responsive Design
- Ensured smooth mobile layout using media queries and flexible CSS.

### Deployment Access
- Initial access was restricted on Vercel.
- Made public by disabling authentication under Deployment Protection.

## 🎥 Walkthrough Video
- ▶️ [Watch the walkthrough video](https://drive.google.com/file/d/1y_XN-m-m8M_BXPtRk9m85IFi8Zv1u4Ge/view?usp=sharing)

