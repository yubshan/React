import {  useState} from "react";

import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import QUESTION from "../question";

export default function Question({ index , onSelectAns, onSkipAns}) {
    
    const [answer , setAnswer]= useState({
        selectedAnswer: '',
        isCorrect : null
    })
    let timer = 10000;

    if(answer.selectedAnswer){
        timer = 1000;
    }
    if(answer.isCorrect !== null){
        timer = 800;
    }

    function handleSelectedAnswer(answer) {
        setAnswer({
            selectedAnswer:answer,
            isCorrect: null,
        })
        setTimeout(() => {
            setAnswer({
                selectedAnswer:answer,
                isCorrect: QUESTION[index].answers[0] === answer,
            })
            setTimeout(() => {
                
                onSelectAns(answer)
            }, 800);
        }, 1000);
    }

    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    }else if(answer.selectedAnswer){
        answerState = 'answered'
    }
  return(
    <div id='question'>
        <QuestionTimer
        key={timer}
          timeout={timer}
          onTimeout={answer.selectedAnswer === '' ? onSkipAns : null}
          mode={answerState}
        />
        <h2>{QUESTION[index].text}</h2>
        <Answer
          answers={QUESTION[index].answers}
          selectedAnswer={answer.selectedAnswer}
          answer={answerState}
          onSelect={handleSelectedAnswer}    
        />
      </div>
  )
  
}