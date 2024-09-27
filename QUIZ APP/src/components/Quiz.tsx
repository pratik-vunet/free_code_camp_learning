import React, { useState, useEffect } from 'react';
import questions from './questions';
interface ChildProps {
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
  quizCompleted: boolean; // Boolean prop
  setQuizCompleted: React.Dispatch<React.SetStateAction<boolean>>; // Setter function
}
const Quiz: React.FC<ChildProps> = ({ setTimeRemaining, quizCompleted, setQuizCompleted }) => {

  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => {
    const savedIndex = localStorage.getItem('quiz-progress');
    // Retrieve the saved index from localStorage, or start from 0
    return savedIndex ? JSON.parse(savedIndex).index : 0;
  });

  // State to track selected answers for each question
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(() => {
    const savedProgress = localStorage.getItem('quiz-progress');
    // Retrieve saved answers or create an array of empty strings
    return savedProgress ? JSON.parse(savedProgress).answers : Array(questions.length).fill('');
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('quiz-progress');
    if (savedProgress) {
      const { index, answers } = JSON.parse(savedProgress);
      // Set the current question index and selected answers from saved progress
      setCurrentQuestionIndex(index);
      setSelectedAnswers(answers);
    }
  }, []);

  // Effect to save progress to localStorage whenever the current question index or selected answers change
  useEffect(() => {
    localStorage.setItem('quiz-progress', JSON.stringify({ index: currentQuestionIndex, answers: selectedAnswers }));
  }, [currentQuestionIndex, selectedAnswers]);




  // Function to handle answer selection for the current question
  const handleAnswerSelect = (answer: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer; // Update the selected answer for the current question
    setSelectedAnswers(updatedAnswers);
  };

  // Function to move to the next question
  const handleNext = () => {
    setCurrentQuestionIndex((prev: number) => Math.min(prev + 1, questions.length - 1)); // Move to the next question and Math.min helps to not go beyond the questions length
   
  };

  // Function to go back to the previous question
  const handlePrevious = () => {
    setCurrentQuestionIndex((prev: number) => Math.max(prev - 1, 0)); // Move to the previous question
    // Reset timer to 5 seconds
  };

  // Function to handle quiz submission
  const handleSubmit = () => {
    setTimeRemaining(0);
    setQuizCompleted(true); // Mark the quiz as completed
  };

  // Function to calculate the user's score
  const calculateScore = () => {
    return selectedAnswers.filter((answer, index) => answer === questions[index].answer).length; // Count correct answers
  };

  // Function to reset the quiz
  const resetTest = () => {
    localStorage.setItem('quiz-progress', JSON.stringify({ index: 0, answers: Array(questions.length).fill('') }));// fill used since while calculating total score we need to print no answer.
    setCurrentQuestionIndex(0); // Reset question index to 0
    setSelectedAnswers(Array(questions.length).fill('')); // Reset selected answers
    setQuizCompleted(false); // Set quiz completion status to false
    // Reset timer to 5 seconds
    setTimeRemaining(100);
  };

  // If the quiz is completed, show the score and answers
  if (quizCompleted) {
    return (
      <div>
        <h2>Your Score: {calculateScore()} / {questions.length}</h2>
        {questions.map((q, index) => (
          <div key={index}>
            <h4>{q.question}</h4>
            <p>Correct Answer: {q.answer}</p>
            <p>Your Answer: {selectedAnswers[index] || "No answer"}</p>
          </div>
        ))}
        <div><button onClick={resetTest}>Retry the test</button></div>
      </div>
    );
  }

  // Get the current question based on the index
  const currentQuestion = questions[currentQuestionIndex];

  // Render the quiz question and options
  return (
    <div>
      <h2>{currentQuestion.question} </h2>

      {currentQuestion.options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              checked={selectedAnswers[currentQuestionIndex] === option}
              onChange={() => handleAnswerSelect(option)} // Handle answer selection
            />
            {option}
          </label>
        </div>
      ))}
      <div>
        {currentQuestionIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
        {currentQuestionIndex < questions.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {currentQuestionIndex === questions.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
