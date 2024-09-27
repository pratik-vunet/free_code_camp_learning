import {useEffect,useState} from 'react';
import Quiz from './components/Quiz'; 
import Heading from './components/Heading';

const App = () => {
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(() => {
    const savedTime = localStorage.getItem('time-remaining');
    return savedTime ? JSON.parse(savedTime) : 100; // Default to 100 seconds
  });

  

  useEffect(() => {
    localStorage.setItem('time-remaining', JSON.stringify(timeRemaining));
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // Stop the timer
          return 0;
        }
        return prev - 1; // Decrease time remaining
      });
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [timeRemaining]);

  const handleSubmit = () => {
    setQuizCompleted(true); // Mark the quiz as completed
  };
  return (
    <div id='mainCont'>
      <div>
        
        <Heading handleSubmit={handleSubmit} timeRemaining={timeRemaining}/>
        <Quiz setTimeRemaining={setTimeRemaining}  quizCompleted={quizCompleted} setQuizCompleted={setQuizCompleted} />
      </div>
    </div>

  );
};

export default App;
