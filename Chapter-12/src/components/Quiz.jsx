import { useCallback, useState } from 'react';
import QUESTIONS from '.././question';
import Question from './Questions';
import Summary from './Summary';

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  
  const activeQuestionIndex = userAnswer.length;
  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswer((prevAns) => {
        return [...prevAns, selectedAnswer];
      });
    },
    []
  );
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (isQuizOver) {
    return (
     <Summary  userAnswer={userAnswer}/>
    )
  }

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAns={handleSelectAnswer}
        onSkipAns={handleSkipAnswer}
      />
    </div>
  );
}
