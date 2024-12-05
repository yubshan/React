import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const activeTime = timeRemaining>0 && timeRemaining < targetTime*1000;
  const timer= useRef();
  const dialog= useRef();

  if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset() {
    setTimeRemaining(targetTime *1000);
  }
  function handleTime() {
    timer.current = setInterval(() => {
     setTimeRemaining(prevTime => prevTime - 10)
    }, 10);
  }
  function handleStop() {
     clearInterval(timer.current);
     dialog.current.open();
  }
  return (
    <>
     <ResultModal timeRemaining={timeRemaining} targetTime={targetTime} ref={dialog}  onReset={handleReset}/>
    <section className='challenge'>
      <h1>{title}</h1>
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={activeTime ? handleStop : handleTime}>
          {activeTime ? 'Stop' : 'Start'} Challenge.
        </button>
      </p>
      <p className={activeTime ? 'active': undefined}>{activeTime ? 'Time is running' : ' Time inactive'} </p>
    </section>
    </>

  );
}
