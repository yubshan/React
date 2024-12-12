import QUIZCOMPLETEIMG from '../assets/quiz-complete.png';
import QUESTION from "../question";

export default function Summary ({userAnswer}) {
    const skippedAnswer = userAnswer.filter((answer) => answer === null);
    const correctAnswer = userAnswer.filter((answer, index) => answer === QUESTION[index].answers[0] );
    const WrongAnswer = userAnswer.filter((answer, index) => answer !== QUESTION[index].answers[0] );
    const totalQuestion = userAnswer.length;

    
    
    return(
        <div id='summary'>
        <img src={QUIZCOMPLETEIMG} />
        <h2>Quiz Completed</h2>
        <div id="summary-stats">
            <p>
                <span className="number">
                    {Math.round((skippedAnswer.length/totalQuestion) * 100)}%
                </span>
                <span className="text">
                    Skipped
                </span>
            </p>
            <p>
                <span className="number">
                {Math.round((correctAnswer.length/totalQuestion) * 100)}
                %
                </span>
                <span className="text">
                    Answered Correctly
                </span>
            </p>
            <p>
                <span className="number">
                {Math.round((WrongAnswer.length/totalQuestion) * 100)}
                %
                </span>
                <span className="text">
                    Answered Wrong
                </span>
            </p>
        </div>
        <ol>
           { userAnswer.map((answer, index) => {
            let cssClass = 'user-answer';
            if(answer === null){
                cssClass += " skipped";
            }else if(answer === QUESTION[index].answers[0]){
                cssClass += " correct";
            }else{
                cssClass += " wrong";
            }
                return(
                    <li key={index}>
                         <h3>{index+1}</h3>
                         <p className="question">
                            {QUESTION[index].text}
                         </p>
                         <p className={cssClass}>
                             {answer ?? 'skipped'}
                         </p>
                     </li>
                )
            })}
            
        </ol>
      </div>
    )
}