import { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode  }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const Interval = setTimeout(() => {
      onTimeout();
    }, timeout);
    return ()=>{
      clearTimeout (Interval);
    }
  }, [onTimeout, timeout]);

  useEffect(() => {
    const Interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return ()=>{
      clearInterval(Interval);
    }
  }, []);
  return <progress id='question-time' max={timeout} value={remainingTime} className={mode} />;
}
