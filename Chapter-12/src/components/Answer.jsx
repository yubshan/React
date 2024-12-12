import { useRef } from "react";

export default function Answer({answers, selectedAnswer , answer, onSelect }) {
  const suffeledAnswer = useRef();
  if(!suffeledAnswer.current){
    suffeledAnswer.current = [...answers];
      suffeledAnswer.current.sort(() => Math.random() - 0.5);
}
    return (  
    <ul id='answers'>
        {suffeledAnswer.current.map((ans) => {
          const isSelected = selectedAnswer === ans;
          let cssClasses = '';
          if(answer === 'answered' && isSelected){
              cssClasses = 'selected';    
          }
          if(answer === 'correct' || answer === 'wrong'  && isSelected){
              cssClasses = answer;    
          }
          return (
            <li key={ans} className='answer'>
              <button onClick={() => onSelect(ans)} className={cssClasses} disabled={answer !== ''}>
                {ans} 
              </button>
            </li>
          );
        })}
      </ul>)
}